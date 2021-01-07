const { db } = require('../util/admin');
const { validateModalData } = require('../util/validators');

exports.getEvents = (req, res) => {
    let nextWeek = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7)

    db.collection('events')
      // .where('deadline', '<=', nextWeek)
      // .where('deadline', '>=', new Date())
      .orderBy('deadline', 'desc')
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
          return res.json(events)
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
      });
  };

  exports.postEvent = (req, res) => {  
    const newEvent = {
        author: req.user.handle,
        authorImage: req.user.imageUrl,
        subjectHandle: req.body.subjectHandle,
        description: req.body.description,
        createdAt: new Date().toISOString(),
        deadline: req.body.deadline
    };

    const {valid, errors} = validateModalData(newEvent)

    if(!valid) return res.status(400).json(errors)
  
    db.collection('events')
      .add(newEvent)
      .then((doc) => {
        const resEvent = newEvent;
        resEvent.eventId = doc.id;
        res.json(resEvent);
      })
      .catch((err) => {
        res.status(500).json({ error: 'something went wrong' });
        console.error(err);
      });
  };

  exports.deleteEvent = (req, res) => {
    const document = db.doc(`/events/${req.params.eventId}`)
    document.get()
      .then(doc => {
        if(!doc.exists){
          return res.status(404).json({ error: 'Scream not found'})
        }
        if(doc.data().author !== req.user.handle) {
          return res.status(403).json({ error: 'Unauthorized' })
        } else {
          return document.delete()
        }
      })
      .then(() => {
        return res.status(202).json({message: "deleted"})
      })
      .catch(err => {
        console.error(err)
        return res.status(500).json({ error: err.code })
      })
  }

  exports.setFinished = (req, res) => {  
    const newFinished = {
        deadline: req.body.deadline,
        userHandle: req.user.handle,
        eventId: req.body.eventId,
    };
    db.collection('finished')
      .add(newFinished)
      .then((doc) => {
        const resFinished = newFinished;
        resFinished.finishedId = doc.id;
        return res.status(202).json({message: "set finished"})
      })
      .catch((err) => {
        res.status(500).json({ error: 'something went wrong' });
        console.error(err);
      });
  };

  exports.setUnfinished = (req, res) => {  
    db.collection('finished')
    .where('userHandle', '==', req.user.handle)
    .where('eventId', '==', req.params.eventId)
    .limit(1)
    .get().then((data) => {
      if(data.empty) {
        return res.status(400).json({ error: 'Event not finished' })
      } else {
        return db
            .doc(`/finished/${data.docs[0].id}`)
            .delete()
      }
    }).then(() => {
      return res.status(202).json({message: "set unfinished"})
    }).catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });

  };

