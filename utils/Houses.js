const Houses = require("../models/Houses");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { SECRET } = require("../config");

/**
 * @DESC To Fetch all houses
 */
const FetchHouses = async (req, res) => {
  Houses.find().then((result) => {
    res
      .status(200)
      .json({
        result: result,
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  });
};

module.exports = {
  FetchHouses,
};
