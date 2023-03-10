var Todo = require("../model/schema");
const HTTP = require("../../constant/response.constant");

var path = require("path");

class class1 {
  static a = async (req, res) => {
    try {
      var OriginalData = await Todo.find({});
      res.render("Index", { OriginalData });
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };

  static b = async (req, res) => {
    try {
      res.render("Add");
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };

  static c = async (req, res) => {
    try {
      if (req.body.InstanceName && req.body.Ip) {
        let data = new Todo({
          Instance: req.body.InstanceName,
          Ip: req.body.Ip,
        });
        await data.save();
      }
      res.redirect("/Add");
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };

  static d = async (req, res) => {
    try {
      var OriginalData = await Todo.find({});
      res.send(OriginalData);
    } catch (e) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
}

module.exports = { class1 };
