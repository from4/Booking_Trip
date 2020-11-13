const {
  update_reservation_status,
  deadline_check,
} = require("../utils/Reservation");
var cron = require("node-cron");

cron.schedule("1,2,4,5 * * * *", () => {});
