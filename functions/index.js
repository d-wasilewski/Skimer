const functions = require('firebase-functions');

const app = require('express')()

const FBAuth = require('./util/fbAuth')

const { db, admin } = require('./util/admin')

const cors = require('cors');
app.use(cors({
    allowedOrigins: [
        'http://localhost:5000'
    ]
}));


const { 
    login
} = require('./handlers/users')

app.post('/login', login)


exports.api = functions.region('europe-west1').https.onRequest(app)

// exports.getUsers = functions.https.onRequest((req, res) => {
//     admin.firestore().collection('users').get()
//     .then((data) => {
//         let users =[];
//         data.forEach((doc) => {
//             users.push(doc.data())
//         })
//         return res.json(users)
//     })
    
//     .catch((err => {
//         console.log(err)
//     }))
// })
