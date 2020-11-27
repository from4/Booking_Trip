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
  FetchHousesByAddress,
  FetchHousesByDate,
  FetchHousesByRoom,
  FetchHousesByName,
  DeleteHouses,
  AddHouses,
  UpdateHouses,
  AddRooms,
  DeleteRooms,
  UpdateRooms,
  AddEquipment,
  DeleteEquipment,
  UpdateEquipment,
  AddBeds,
  DeleteBeds,
  UpdateBeds,
} = require("../utils/Houses");

// Fetch Houses Route
router.get("/houses", async (req, res) => {
  return await FetchHouses(req, res);
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

// Fetch houses by nb_room
router.get("/nb_room", async (req, res) => {
  return await FetchHousesByRoom(req, res);
});

// Fetch Houses Route
router.get("/houses", async (req, res) => {
  return await FetchHouses(req, res);
});

// Fetch House Equipments Router
router.get("/equipments", async (req, res) => {
  return await FetchHouseEquipments(req, res);
});

//add houses Router
router.post("/add-house", async(req, res) => {
    return await AddHouses(req, res);
});

//delete houses Router
router.delete("/delete-house/:id", async(req, res) => {
    return await DeleteHouses(req, res);
});

//Update house Router
router.put("/update-house/:id", async(req, res) => {
    return await UpdateHouses(req, res);
});

//ROOM ROUTES 

//add Rooms Router
router.post("/add-rooms", async(req, res) => {
    return await AddRooms(req, res);
});

//delete Rooms Router
router.delete("/delete-rooms/:id_house/:id_room", async(req, res) => {
    return await DeleteRooms(req, res);
});

//Update Rooms Router 
router.put("/update-rooms/:id", async(req, res) => {
    return await UpdateRooms(req, res);
});

//EQUIPMENT Router

//add Equipment Router
router.post(" /add-equipment", async(req, res) => {
    return await AddEquipment(req, res);
});

//delete Equipment Router
router.delete("/delete-equipment", async(req, res) => {
    return await DeleteEquipment(req, res);
});

//Update Equipment Router 
router.put("/update-equipment/:id", async(req, res) => {
    return await UpdateEquipment(req, res);
});
//BEDS ROUTER 

//add BEDS Router
router.post("/add-beds", async(req, res) => {
    return await AddBeds(req, res);
});

//delete BEDS Router
router.delete("/delete-beds/:id_house/:id_bed", async(req, res) => {
    return await DeleteBeds(req, res);
});

//Update BEDS Router 
router.put("/update-beds/:id", async(req, res) => {
    return await UpdateBeds(req, res);
});

module.exports = router;