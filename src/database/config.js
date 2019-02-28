import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyACIoYgV0ncU9fy1MBd2rx2C9Ve8rE6Kro",
  authDomain: "photowall-47252.firebaseapp.com",
  databaseURL: "https://photowall-47252.firebaseio.com",
  projectId: "photowall-47252",
  storageBucket: "photowall-47252.appspot.com",
  messagingSenderId: "448630757324"
};

firebase.initializeApp(config)

const database = firebase.database();
export {database}
