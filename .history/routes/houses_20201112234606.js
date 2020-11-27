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
router.delete("/delete-house", userAuth, async(req, res) => {
    return await DELETEHouses(req, res);
});

//Update house Router
router.put("/update-house", userAuth, async(req, res) => {
    return await UpdateHouses(req, res);
});



//ROOM ROUTES 

//add Rooms router
router.POST("/add-", userAuth, async(req, res) => {
    return await AddRooms(req, res);
});

//delete Rooms router
router.delete("/DelRoom", userAuth, async(req, res) => {
    return await DELETERooms(req, res);
});

//Update Rooms router 
router.put("/UPDATERoom", userAuth, async(req, res) => {
    return await UpdateRooms(req, res);
});

//EQUIPMENT Router

//add Equipment router
router.POST("/ADDEQU", userAuth, async(req, res) => {
    return await AddEquipment(req, res);
});

//delete Equipment router
router.delete("/DelEQU", userAuth, async(req, res) => {
    return await DELETEEquipment(req, res);
});

//Update Equipment router 
router.put("/UpdateEQU", userAuth, async(req, res) => {
    return await UpdateEquipment(req, res);
});
//BEDS ROUTER 

//add BEDS router
router.POST("/ADDBEDS", userAuth, async(req, res) => {
    return await AddBEDS(req, res);
});

//delete BEDS router
router.delete("/DelBEDS", userAuth, async(req, res) => {
    return await DELETEBEDS(req, res);
});

//Update BEDS router 
router.put("/UpdateBEDS", userAuth, async(req, res) => {
    return await UpdateHBEDS(req, res);
});




module.exports = router;