const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const Houses = require("../models/Houses");
const Reservations = require("../models/Reservations");
const { SECRET } = require("../config");

/**
 * @DESC To reservate a house for a specific user
 */
const ReservateHouse = async (req, res) => {
  const id = req.body.id;
  const arrival = req.body.arrival;
  const departure = req.body.depart;

  const cx = await Reservations.findOne({ _id: id }, (err, result) => {
    if (err) {
      res.status(400).json({
        message: "Cant reservate house",
        success: false,
      });
    } else {
      const arrival = result.arrival;
      const departure = result.departure;
      if (!result.available) {
        res.status(200).json({
          message: "Reservation has been successfully completed!",
          result:
            (departure.getTime() - arrival.getTime()) / (1000 * 3600 * 24),
          success: true,
        });
      }
    }
  });
};

/**
 * @DESC update reservation availability
 */
const update_reservation_status = async (req, res) => {
  const id = req.body.id;
  const available = req.body.available;
  const reserve = await Reservations.findOne(
    { _id: id },
    (err, foundObject) => {
      if (err) {
        res.status(500).json({
          message: "Error, check test reservation",
          success: false,
        });
      } else {
        if (!foundObject) {
          res.status(404).json({
            message: "Error, reservation id not found",
            success: false,
          });
        } else {
          foundObject.available = req.body.available;
          foundObject.save(function (err) {
            if (err) {
              res.status(500).json({
                message: "Error, couldn't save reservation!",
                success: false,
              });
            } else {
              res.status(201).json({
                message: "reservation has been updated successfully!",
                success: true,
              });
            }
          });
        }
      }
    }
  );
};

/**
 * @DESC check if any reservations has met its deadline
 */
const deadline_check = async (req, res) => {
  elements = [];
  Reservations.find()
    .then((result) => {
      result.forEach((element) => {
        function formatDate(date) {
          var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

          if (month.length < 2) month = "0" + month;
          if (day.length < 2) day = "0" + day;

          return [year, month, day].join("-");
        }
        let currentDate = new Date(y, m, d);
        if (formatDate(element.departure) >= currentDate)
          elements.push(formatDate(element.departure));
      });
      res.json({
        result: elements,
      });
    })
    .catch((err) => {
      return 0;
    });
};

module.exports = {
  ReservateHouse,
  update_reservation_status,
  deadline_check,
};
