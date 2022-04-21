const mongoose = require('mongoose');
const url = "mongodb://dbUser:OClBfyb49ouAb3NN@cluster0-shard-00-00.wnnbp.mongodb.net:27017,cluster0-shard-00-01.wnnbp.mongodb.net:27017,cluster0-shard-00-02.wnnbp.mongodb.net:27017/public-exchange?ssl=true&replicaSet=atlas-kvauiu-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
