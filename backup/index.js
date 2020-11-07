const cors = require("cors");
const express = require("express");
const { connect } = require("mongoose");
const { success, error } = require("consola");
// Bring app constants
const { DB, PORT } = require('./config');

// Init app 
const app = express();

// Middleware 
app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// User Router Middleware
app.use('/api/users', require('./routes/user'));

// Connection with DB
const startApp = async()=>{
    const database = "mongodb://localhost:27017/BookingTip"
    try{
    await connect(database, { 
        useFindAndModify: true, 
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    success({
        message: `Successfully connected with the database \n ${database}`, 
        badge: true
    })

    app.listen(PORT, ()=>{
        success({message: `Server started on PORT ${PORT}`, badge: true});
    })
    }catch(err){
        error({
            message: `Unable to connect with database \n ${err}`,
            badge: true
        })
        startApp();
    }
}
startApp();