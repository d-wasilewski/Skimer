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

const { getEventsInWeek, postEvent } = require('./handlers/events')
const { getSubjects, getSubject } = require('./handlers/subjects')
const { login, uploadImage, getAuthenticatedUser, getAllUsers } = require('./handlers/users')

app.post('/login', login)
app.get('/user', FBAuth, getAuthenticatedUser)
app.get('/users', FBAuth, getAllUsers)
app.post('/user/image', FBAuth, uploadImage)

app.get('/subjects', FBAuth, getSubjects)
app.get('/subject/:handle', FBAuth, getSubject)

app.post('/event', FBAuth, postEvent)
app.get('/events', FBAuth, getEventsInWeek)


exports.api = functions.region('europe-west1').https.onRequest(app)