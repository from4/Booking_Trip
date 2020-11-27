const Houses = require("../models/Houses");
const Equipments = require("../models/Equipments");
const Rooms = require("../models/Rooms");
const Beds = require("../models/Beds");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { SECRET } = require("../config");
const { json } = require("body-parser");

/**
 * @DESC To update houses
 */
const updateHouse = async(req, res, id, equipments) => {
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
                foundObject.save(function(err) {
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
const FetchHouseEquipments = async(req, res) => {
    const house = Houses.findOne({ _id: req.body.id });
    if (house) {
        let id = req.body.id;
        const equipment = Equipments.find({ house_id: id }).then((e) => {
            if (e) {
                res.status(200).json({
                    equipments: e,
                    success: true,
                });
            } else {
                res.status(400).json({
                    message: `${id} has no equipments!`,
                    success: false,
                });
            }
        });
    } else {
        res.status(500).json({
            message: `couldn't find ${id}!`,
            success: false,
        });
    }
};

/**
 * @DESC To Fetch all house rooms
 */
const FetchHouseRooms = async(req, res) => {
    const house = Houses.findOne({ _id: req.body.id });
    if (house) {
        let id = req.body.id;
        const rooms = Rooms.find({ house_id: id }).then((r) => {
            if (r) {
                res.status(200).json({
                    rooms: r,
                    success: true,
                });
            } else {
                res.status(400).json({
                    message: `${id} has no rooms!`,
                    success: false,
                });
            }
        });
    } else {
        res.status(500).json({
            message: `couldn't find ${id}!`,
            success: false,
        });
    }
};

/**
 * @DESC To Fetch all room beds
 */
const FetchRoomBeds = async(req, res) => {
    const house = Houses.findOne({ _id: req.body.id });
    if (house) {
        let id = req.body.id;
        const beds = Beds.find({ house_id: id }).then((b) => {
            if (b) {
                res.status(200).json({
                    beds: b,
                    success: true,
                });
            } else {
                res.status(400).json({
                    message: `${id} has no beds!`,
                    success: false,
                });
            }
        });
    } else {
        res.status(500).json({
            message: `couldn't find ${id}!`,
            success: false,
        });
    }
};

/**
 * @DESC To Fetch all houses
 */
const FetchHouses = async(req, res) => {
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
 * @DESC To add house
 */
const AddHouses = async(req, res) => {
    const house = new House({
        name: req.body.name,
        description: req.body.description,
        images: req.body.images,
        address: req.body.address,
        nb_rooms: req.body.nb_rooms,
        disponibility: req.body.disponibility,
        price: req.body.price,
        rule_id: req.body.rule_id,
        total_note: req.body.total_note,
        average_note: req.body.average_note
    })

    await house.save();
    return res.status(201).json({
        message: "House has been added.",
        success: true
    });
};
//ADD ROOMS

const AddRooms = async(req, res) => {
    const Room = new Room({
        name: req.body.name,

    })

    await Rooms.save();
    return res.status(201).json({
        message: "room has been added.",
        success: true
    });
};

const AddEquipmentRooms = async(req, res) => {
    const Equipment = new Equipment({
        name: req.body.name,
        description: req.body.description
    });
    await Equipment.save();
    return res.status(201).json({
        message: "Equipment has been added.",
        success: true
    });
};

//ADD BEDS 


const AddBeds = async(req, res) => {
    try {
        const Bed = new Beds({
            name: req.body.name,
            size: req.body.size,
            house_id: req.body.house_id
        });
        await Bed.save();
        return res.status(201).json({
            message: "bed has been added.",
            success: true
        });
    } catch (err) {
        return res.status(500).json({
            message: "Unable to create new bed.",
            success: false
        });
    }
};
const DeleteHouses = async(req, res) => {
    Houses.findByIdAndRemove({ _id: req.params.id }, (err, doc) => {
        if (err) {
            res.json({
                message: 'error',
                success: false
            })
        } else {
            if (doc)
                res.json({
                    message: "House has been deleted!",
                    success: true
                })
            else {
                res.json({
                    message: "couldnt find house",
                    success: false
                })
            }
        }
    });
}

//DELETE ROOMS
const DeleteRooms = async(req, res) => {
    Rooms.findByIdAndRemove({ _id: req.params.id_room, house_id: req.params.id_house }, (err, doc) => {
        if (err) {
            res.json({
                message: 'error',
                success: false
            })
        } else {
            if (doc)
                res.json({
                    message: "room has been deleted!",
                    success: true
                })
            else {
                res.json({
                    message: "couldnt find house",
                    success: false
                })
            }
        }
    });
}

const UpdateRooms = async(req, res) => {
    const id = req.params.id;
    const Room = await Rooms.findOne({ _id: id }, (err, foundObject) => {
        if (err) {
            res.status(500).json({
                message: "Error, check Rooms Update",
                success: false
            });
        } else {
            if (!foundObject) {
                res.status(404).json({
                    message: "Error, room id not found",
                    success: false
                });
            } else {
                if (req.body.name) {
                    foundObject.name = req.body.name
                }

                foundObject.save(function(err) {
                    if (err) {
                        res.status(500).json({
                            message: "Error, couldn't save room!",
                            success: false
                        });
                    } else {
                        res.status(201).json({
                            message: 'Room info has been updated successfully!',
                            success: true
                        });
                    }
                })
            }
        }
    });
}

const AddEquipment = async(req, res) => {

}
const DeleteEquipment = async(req, res) => {

}
const UpdateEquipment = async(req, res) => {

    const id = req.params.id;
    const Equipment = await Equipments.findById({ _id: id }, (err, foundObject) => {
        if (err) {
            res.status(500).json({
                message: "Error, check equipment Update",
                success: false
            });
        } else {
            if (!foundObject) {
                res.status(404).json({
                    message: "Error, equipment id not found",
                    success: false
                });
            } else {
                if (req.body.name) {
                    foundObject.name = req.body.name
                }
                if (req.body.description) {
                    foundObject.description = req.body.description
                }

                foundObject.save(function(err) {
                    if (err) {
                        res.status(500).json({
                            message: "Error, couldn't save room!",
                            success: false
                        });
                    } else {
                        res.status(201).json({
                            message: 'Equipment info has been updated successfully!',
                            success: true
                        });
                    }
                })
            }
        }
    });
}


const DeleteBeds = async(req, res) => {

}
const UpdateBeds = async(req, res) => {

    const id = req.params.id;
    const Bed = await Beds.findOne({ _id: id }, (err, foundObject) => {
        if (err) {
            res.status(500).json({
                message: "Error, check Rooms Update",
                success: false
            });
        } else {
            if (!foundObject) {
                res.status(404).json({
                    message: "Error, room id not found",
                    success: false
                });
            } else {
                if (req.body.name) {
                    foundObject.name = req.body.name
                }
                if (req.body.size) {
                    foundObject.size = req.body.size
                }

                foundObject.save(function(err) {
                    if (err) {
                        res.status(500).json({
                            message: "Error, couldn't save room!",
                            success: false
                        });
                    } else {
                        res.status(201).json({
                            message: 'Room info has been updated successfully!',
                            success: true
                        });
                    }
                })
            }
        }
    });
}


const UpdateHouses = async(req, res) => {

    const id = req.params.id;
    const House = await Houses.findOne({ _id: id }, (err, foundObject) => {
        if (err) {
            res.status(500).json({
                message: "Error, check Rooms Update",
                success: false
            });
        } else {
            if (!foundObject) {
                res.status(404).json({
                    message: "Error, room id not found",
                    success: false
                });
            } else {
                if (req.body.name) {
                    foundObject.name = req.body.name
                }
                if (req.body.description) {
                    foundObject.description = req.body.description
                }
                if (req.body.images) {
                    foundObject.images = req.body.images
                }
                if (req.body.address) {
                    foundObject.address = req.body.address
                }
                if (req.body.nb_rooms) {
                    foundObject.nb_rooms = req.body.nb_rooms
                }
                if (req.body.disponibility) {
                    foundObject.disponibility = req.body.disponibility
                }
                if (req.body.price) {
                    foundObject.price = req.body.price
                }
                if (req.body.total_note) {
                    foundObject.total_note = req.body.total_note
                }
                if (req.body.average_note) {
                    foundObject.average_note = req.body.average_note
                }



                foundObject.save(function(err) {
                    if (err) {
                        res.status(500).json({
                            message: "Error, couldn't save room!",
                            success: false
                        });
                    } else {
                        res.status(201).json({
                            message: 'Room info has been updated successfully!',
                            success: true
                        });
                    }
                })
            }
        }
    });
}


module.exports = {
    FetchHouses,
    FetchHouseEquipments,
    FetchHouseRooms,
    FetchRoomBeds,
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
    UpdateBeds
};