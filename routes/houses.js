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
   FetchHousesByName,
   FetchHousesByAddress,
   FetchHousesByDate,
 } = require("../utils/Houses");

// Fetch Houses Route
router.get("/houses", async (req, res) => {
  return await FetchHouses(req, res);
});

// Fetch House Equipments Router
router.get("/equipments", async (req, res) => {
  return await FetchHouseEquipments(req, res);
});
 
// Fetch House Rooms Router
router.get("/rooms", async (req, res) => {
  return await FetchHouseRooms(req, res);
});

// Fetch Room beds Router
router.get("/beds", async (req, res) => {
  return await FetchRoomBeds(req, res);
});

// Fetch houses by name Router
router.get("/name", async (req, res) => {
  return await FetchHousesByName(req, res);
});

// Fetch houses by address Router
router.get("/address", async (req, res) => {
  return await FetchHousesByAddress(req, res);
});

// Fetch houses by date Router
router.get("/date", async (req, res) => {
  return await FetchHousesByDate(req, res);
});

module.exports = router;