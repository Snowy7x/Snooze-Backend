const initializeApp = require("firebase/app").initializeApp;
const {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} = require("firebase/auth");

class Firebase {
  static app = null;
  static provider = null;
  static auth = null;
  static init = new Promise((resolve, reject) => {
    const firebaseConfig = {
      apiKey: "AIzaSyBXYrWnJ5XAc1hY7sTzIvLW-tJZ-43csik",
      authDomain: "snooze-153db.firebaseapp.com",
      projectId: "snooze-153db",
      storageBucket: "snooze-153db.appspot.com",
      messagingSenderId: "679901174138",
      appId: "1:679901174138:web:d19b7dfe0bf08f7ad61ec3",
      measurementId: "G-VCLGX3TF9J",
    };
    this.app = initializeApp(firebaseConfig);
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
    resolve(777);
  });
}

module.exports = Firebase;
