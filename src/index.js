const express = require("express");
const cors = require("cors");

const Firebase = require("./Firebase");

const app = express();

app.use(cors());

app.use("/users", require("./users"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}, now setting up firebase`);
  Firebase.init.then(() => {
    console.log("Initialized");
  });
});
