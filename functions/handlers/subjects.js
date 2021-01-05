const { db } = require('../util/admin');

exports.getSubjects = (req, res) => {
    db.collection('subjects')
      .orderBy('name', 'asc')
      .get()
      .then((data) => {
          let subjects = []
          data.forEach((doc) => {
             subjects.push({
                 subjectId: doc.id,
                 name: doc.data().name,
             })
          })
          return res.json(subjects)
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
      });
  };

  exports.getSubject = (req, res) => {
    let subject = {}
    db.collection('events')
      .where('subjectHandle', '==', req.params.handle)
      .get()
      .then((data) => {
          let events = []
          data.forEach((doc) => {
             events.push({
                 eventId: doc.id,
                 author: doc.data().author,
                 authorImage: doc.data().authorImage,
                 subjectHandle: doc.data().subjectHandle,
                 description: doc.data().description,
                 createdAt: doc.data().createdAt,
                 deadline: doc.data().deadline
             })
          })
          return events
      })
      .then((data) => {
        subject.events = data
        return db.doc(`subjects/${req.params.handle}`)
                 .get()
      })
      .then((doc) => {
          if(doc.exists) {
            subject.info = doc.data()
            return res.json(subject)
          } else {
            return res.status(404).json({ errror: "Subject not found" });
          }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
      });
  };