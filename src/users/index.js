const express = require("express");
const { app, auth, provider } = require("../Firebase");
const { signInWithPopup, GoogleAuthProvider } = require("firebase/auth");

const router = express.Router();

router.use((req, res, next) => {
  //const app = req.app.locals.app;
  if (app != null) {
    next();
  } else {
    res.send({ message: "USERS API IS NOT READY", app });
  }
});

router.get("/", (req, res) => {
  res.send({
    message: "USERS API IS READY",
  });
});

router.get("/login", (req, res) => {
  if (!auth || !provider) {
    res.status(400).send({ message: "No auth or provider specified" });
  }
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      res
        .status(201)
        .send({ token, user, message: "User created successfully" });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      res.status(400).send({
        errorCode,
        message: errorMessage,
        email,
      });
    });
});

router.get("/register", (req, res) => {});

module.exports = router;
