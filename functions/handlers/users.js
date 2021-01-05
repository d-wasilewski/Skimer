const {admin, db} = require('../util/admin')

const config = require('../util/config')

const firebase = require('firebase')
firebase.initializeApp(config)

const {validateLoginData} = require('../util/validators')
const { user } = require('firebase-functions/lib/providers/auth')


exports.login = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    const {valid, errors} = validateLoginData(user)

    if(!valid) return res.status(400).json(errors)


    firebase.auth().signInWithEmailAndPassword(user.email, user.password) 
        .then(data => {
            return data.user.getIdToken()
        })
        .then(token => {
            return res.json({token})
        })
        .catch(err => {
            console.error(err)
            return res.status(403).json({ general: "Wrong credentials, please try again"})
            }
        )
}

exports.uploadImage = (req, res) => {
    const BusBoy = require("busboy")
    const path = require("path")
    const os = require("os")
    const fs = require("fs")
  
    const busboy = new BusBoy({ headers: req.headers })

    let imageFileName
    let imageToBeUploaded = {}
  
    busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
      if (mimetype !== "image/jpeg" && mimetype !== "image/png") {
        return res.status(400).json({ error: "Wrong file type submitted" })
      }
      const imageExtension = filename.split(".")[filename.split(".").length - 1]

      imageFileName = `${Math.round(Math.random() * 1000000000000).toString()}.${imageExtension}`
      const filepath = path.join(os.tmpdir(), imageFileName)
      imageToBeUploaded = { filepath, mimetype }
      file.pipe(fs.createWriteStream(filepath))
    })

    busboy.on("finish", () => {
      admin
        .storage()
        .bucket()
        .upload(imageToBeUploaded.filepath, {
          resumable: false,
          metadata: {
            metadata: {
              contentType: imageToBeUploaded.mimetype,
            },
          },
        })
        .then(() => {
          const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`
          return db.doc(`/users/${req.user.handle}`).update({ imageUrl })
        })
        .then(() => {
          return res.json({ message: "image uploaded successfully" })
        })
        .catch((err) => {
          console.error(err);
          return res.status(500).json({ error: "something went wrong" })
        })
    })
    busboy.end(req.rawBody)
  };

exports.getAllUsers = (req, res) => {
    db.collection('users')
        .get()
        .then((data) => {
            let users = []
            data.forEach((doc) => {
                users.push({
                    handle: doc.id,
                    name: doc.data().name
                })
            })
            return res.json(users)
        })
        .catch((err) => {
            console.error(err)
            return res.status(500).json({error: err.code})
        })
}

exports.getAuthenticatedUser = (req, res) => {
    let user = {}
    let nextWeek = new Date()
    nextWeek.setDate(nextWeek.getDate() + 7)

     db.doc(`/users/${req.user.handle}`)
        .get()
        .then((doc) => {
            user.auth = doc.data()
            return db
                .collection("finished")
                .where('userHandle', '==', req.user.handle)
                .where('deadline', '<=', nextWeek)
                .where('deadline', '>=', new Date())
                .get()
        }).then((data) => {
            user.finished = []
            data.forEach((doc) => {
                user.finished.push(
                    doc.data().eventId,
                )
            })
            return res.json(user)
        }).catch((err) => {
            console.error(err);
            return res.status(500).json({ error: "something went wrong" });
        })
}