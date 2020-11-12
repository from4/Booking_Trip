const router = require("express").Router();
// Bring in the User Registration function
 const {
    userAuth
 } = require("../utils/Auth");

 const {
    FetchHouses
 } = require("../utils/Houses");

// Fetch Houses Route
router.get("/houses", userAuth, async (req, res) => {
  return await FetchHouses(req, res);
});


module.exports = router;