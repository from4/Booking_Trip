const router = require("express").Router();
const Reservations = require("../models/Reservations");
// Bring in the User Registration function
const { userAuth } = require("../utils/Auth");

const {
  ReservateHouse,
  deadline_check,
  update_reservation_status,
} = require("../utils/Reservation");

// Fetch Houses Route
router.post("/reservation", userAuth, async (req, res) => {
  return await ReservateHouse(req, res);
});

// reservation update availability Route
router.put("/update-reservation", userAuth, async (req, res) => {
  return await update_reservation_status(req, res);
});

// test Route
router.get("/test", async (req, res) => {
  return await deadline_check(req, res);
});

module.exports = router;
