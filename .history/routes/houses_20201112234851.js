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
router.get("/houses", userAuth, async(req, res) => {
    return await FetchHouses(req, res);
});

// Fetch House Equipments Router
router.get("/equipments", userAuth, async(req, res) => {
    return await FetchHouseEquipments(req, res);
});

// Fetch House Rooms Router
router.get("/rooms", userAuth, async(req, res) => {
    return await FetchHouseRooms(req, res);
});

// Fetch Room beds Router
router.get("/beds", userAuth, async(req, res) => {
    return await FetchRoomBeds(req, res);
});


//add houses Router
router.POST("/add-house", async(req, res) => {
    return await AddHouses(req, res);
});

//delete houses Router
router.delete("/delete-house", async(req, res) => {
    return await DELETEHouses(req, res);
});

//Update house Router
router.put("/update-house", async(req, res) => {
    return await UpdateHouses(req, res);
});



//ROOM ROUTES 

//add Rooms Router
router.POST("/add-rooms", async(req, res) => {
    return await AddRooms(req, res);
});

//delete Rooms Router
router.delete("/delete-rooms", async(req, res) => {
    return await DELETERooms(req, res);
});

//Update Rooms Router 
router.put("/update-rooms", async(req, res) => {
    return await UpdateRooms(req, res);
});

//EQUIPMENT Router

//add Equipment Router
router.POST("/add-equipment", async(req, res) => {
    return await AddEquipment(req, res);
});

//delete Equipment Router
router.delete("/delete-equipment", async(req, res) => {
    return await DELETEEquipment(req, res);
});

//Update Equipment Router 
router.put("/update-equipment", async(req, res) => {
    return await UpdateEquipment(req, res);
});
//BEDS ROUTER 

//add BEDS Router
router.POST("/add-beds", userAuth, async(req, res) => {
    return await AddBeds(req, res);
});

//delete BEDS Router
router.delete("/delete-beds", userAuth, async(req, res) => {
    return await DeleteBeds(req, res);
});

//Update BEDS Router 
router.put("/update-beds", userAuth, async(req, res) => {
    return await UpdateBeds(req, res);
});




module.exports = router;