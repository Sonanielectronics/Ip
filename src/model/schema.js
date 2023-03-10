const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  Instance: {
    type: String,
  },
  Ip: {
    type: String,
  },
});

const blog = new mongoose.model("InstanceCollection", blogSchema);

module.exports = blog;
