const Houses = require("../models/Houses");
const Reservations = require("../models/Reservations");
const Equipments = require("../models/Equipments");
const Rooms = require("../models/Rooms");
const Beds = require("../models/Beds");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { SECRET } = require("../config");

/**
 * @DESC To update houses
 */
const updateHouse = async (req, res, id, equipments) => {
  Houses.findOne({ _id: id }, (err, foundObject) => {
    if (err) {
      res.status(500).json({
        message: "Error, check updateHouse",
        success: false,
      });
    } else {
      if (!foundObject) {
        res.status(404).json({
          message: "Error, house id not found",
          success: false,
        });
      } else {
        if (equipments) {
          foundObject.equipments = equipments;
        }
        foundObject.save(function (err) {
          if (err) {
            res.status(500).json({
              message: "Error, couldn't save house!",
              success: false,
            });
          } else {
            res.status(201).json({
              message: "house info has been updated successfully!",
              success: true,
            });
          }
        });
      }
    }
    return house;
  });
};

/**
 * @DESC To Fetch all house equipments
 */
const FetchHouseEquipments = async (req, res) => {
  const house = Houses.findOne({ _id: req.body.id });
  if (house) {
    let id = req.body.id;
    const equipment = Equipments.find({ house_id: id }).then((e) => {
      if (e) {
        res.status(200).json({
          equipments: e,
          success: true,
        });
      }else{
        res.status(400).json({
          message: `${id} has no equipments!`,
          success: false,
        });
      }
    });
  }else{
    res.status(500).json({
      message: `couldn't find ${id}!`,
      success: false,
    });
  }
};

/**
 * @DESC To Fetch all house rooms
 */
const FetchHouseRooms = async (req, res) => {
  const house = Houses.findOne({ _id: req.body.id });
  if (house) {
    let id = req.body.id;
    const rooms = Rooms.find({ house_id: id }).then((r) => {
      if (r) {
        res.status(200).json({
          rooms: r,
          success: true,
        });
      }else{
        res.status(400).json({
          message: `${id} has no rooms!`,
          success: false,
        });
      }
    });
  }else{
    res.status(500).json({
      message: `couldn't find ${id}!`,
      success: false,
    });
  }
};

/**
 * @DESC To Fetch all room beds
 */
const FetchRoomBeds = async (req, res) => {
  const house = Houses.findOne({ _id: req.body.id });
  if (house) {
    let id = req.body.id;
    const beds = Beds.find({ house_id: id }).then((b) => {
      if (b) {
        res.status(200).json({
          beds: b,
          success: true,
        });
      }else{
        res.status(400).json({
          message: `${id} has no beds!`,
          success: false,
        });
      }
    });
  }else{
    res.status(500).json({
      message: `couldn't find ${id}!`,
      success: false,
    });
  }
};

/**
 * @DESC To Fetch all houses
 */
const FetchHouses = async (req, res) => {
  const houses = await Houses.find();
  if (houses) {
    res.status(200).json({
      houses,
      success: true,
    });
  } else {
    res.status(400).json({
      message: 'couldn\'t find any house',
      success: false,
    });
  }
};

/**
 * @DESC To Fetch houses by name  
 */
const FetchHousesByName = async (req, res) => {
  const house = await Houses.find({name: req.body.name});
  if (house) {
    res.status(200).json({
      house,
      success: true,
    });
  } else {
    res.status(400).json({
      message: 'couldn\'t find any house with that name',
      success: false,
    });
  }
};

/**
 * @DESC To Fetch houses by address  
 */
const FetchHousesByAddress = async (req, res) => {
  const house = await Houses.find({address: req.body.address});
  if (house) {
    res.status(200).json({
      house,
      success: true,
    });
  } else {
    res.status(400).json({
      message: 'couldn\'t find any house with that name',
      success: false,
    });
  }
};

/**
 * @DESC To Fetch houses by departure+arrival date  
 */
const FetchHousesByDate = async (req, res) => {
  const house = await Houses.find({disponibility: true});   
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  let houses = [];
  if (house) {
    const reservation = await Reservations.find()
    if (reservation){
      reservation.forEach(reserve=>{
        //if (reserve.available) {
          if (formatDate(reserve.arrival) <= formatDate(req.body.arrival) 
          && formatDate(reserve.departure) >= formatDate(req.body.departure)){
            return res.json({
              message: 'this house already reserved during that period!',
              success: false
            })
          }else{
            houses.push(reserve.id_house)
          }
        //}
      })
      return res.status(200).json({
        houses,
        success: true,
      });
    }
  } else {
    res.status(400).json({
      message: 'That house is already reserved!',
      success: false,
    });
  }
};

module.exports = {
  FetchHouses,
  FetchHouseEquipments,
  FetchHouseRooms,
  FetchRoomBeds,
  FetchHousesByName,
  FetchHousesByAddress,
  FetchHousesByDate,
};