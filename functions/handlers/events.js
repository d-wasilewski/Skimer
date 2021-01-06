const { db } = require('../util/admin');

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
    // if (req.body.subjectHandle.trim() === '') {
    //   return res.status(400).json({ body: 'Body must not be empty' });
    // }
  
    const newEvent = {
        author: req.user.handle,
        authorImage: req.user.imageUrl,
        subjectHandle: req.body.subjectHandle,
        description: req.body.description,
        createdAt: new Date().toISOString(),
        deadline: req.body.deadline
    };
  
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

