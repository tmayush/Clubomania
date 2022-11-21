const mongoose = require("mongoose");
const express = require("express");
const { expireSessionsAsync } = require("../services/sessionServices");

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());

// Raw response
// app.use(function (req, res, next) {
//   var data = "";
//   req.setEncoding("utf8");
//   req.on("data", function (chunk) {
//     data += chunk;
//   });
//   req.on("end", function () {
//     req.body = data;
//     next();
//   });
// });

app.use("/api", require("../routes/api/clubs"));
// app.use("/console", require("../routes/console"));

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
  mongoose.connect(
    "mongodb://localhost:27017/clubomania",
    () => {
      console.log("Connection Established to server");
    },
    (e) => console.log(e)
  );
  expireSessionsAsync(60);
});
