const mongoose = require("mongoose");
const express = require("express");
const clubServices = require("../services/clubServices");
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
  // clubServices
  //   .createClub({
  //     username: "udc",
  //     password: "udc123456",
  //     name: "United Dance Crew",
  //     acronym: "UDC",
  //     tagline: "The dance club of CBIT",
  //     description: "The dance club of CBIT",
  //     profile_photo_url:
  //       "https://instagram.fbpm1-2.fna.fbcdn.net/v/t51.2885-19/270291690_1073340810088667_8590092613476919743_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbpm1-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=yV68CEvKMgsAX-3rhs1&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBEdno1yXhiv3aGa8Jtz6D0czNzbq8BHEZzkAAjeXcp6A&oe=638FF8BF&_nc_sid=8fd12b",
  //     cover_photo_url:
  //       "https://instagram.fbpm1-2.fna.fbcdn.net/v/t51.2885-15/288577124_741988493786984_9032169639501185212_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fbpm1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=WdnC0zDlswwAX__g6Ea&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2MjU5NjI5OTk4ODY0NzgyMg%3D%3D.2-ccb7-5&oh=00_AfB7q38aAlVHlLo_moq-ClRJMMnjsAtz83Coi_DudKCy3A&oe=63910D8A&_nc_sid=30a2ef",
  //   })
  //   .then((value) => {
  //     console.log(value);
  //   });
  // expireSessionsAsync(60);
});
