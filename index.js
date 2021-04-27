const express = require("express");
const app = express();
const admin = require('firebase-admin')
const firebase = require("firebase");

const config = {
    apiKey: "AIzaSyCHu-KiqT5ChladfS48ppwpiU1fBPqiNzo",
    authDomain: "auth-f1e67.firebaseapp.com",
    projectId: "auth-f1e67",
    storageBucket: "auth-f1e67.appspot.com",
    messagingSenderId: "1067950167067",
    appId: "1:1067950167067:web:5cf077afb5dc1e360bd4be"
};
firebase.initializeApp(config);

// Admin SDK Firebase
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Settings
app.use(express.json());
app.set('port', process.env.PORT || 4000);
app.use('/api/usuarios', require('./routes/usuario'));
app.use('/api/login', require('./routes/login'));

app.listen(app.get('port'), () => console.log("The server is running at PORT 4000"))