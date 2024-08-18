const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://adwaidmanoj:adwaid8207@cluster0.xqm5f4g.mongodb.net/Blogdb?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
