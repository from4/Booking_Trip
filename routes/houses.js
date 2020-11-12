const router = require("express").Router();
// Bring in the User Registration function
 const {
    userAuth
 } = require("../utils/Auth");

 const {
   FetchHouses,
   FetchHouseEquipments,
   FetchHouseRooms,
   FetchRoomBeds,
 } = require("../utils/Houses");

// Fetch Houses Route
router.get("/houses", userAuth, async (req, res) => {
  return await FetchHouses(req, res);
});

// Fetch House Equipments Router
router.get("/equipments", userAuth, async (req, res) => {
   return await FetchHouseEquipments(req, res);
 });
 
// Fetch House Rooms Router
router.get("/rooms", userAuth, async (req, res) => {
  return await FetchHouseRooms(req, res);
});

// Fetch Room beds Router
router.get("/beds", userAuth, async (req, res) => {
  return await FetchRoomBeds(req, res);
});

module.exports = router;