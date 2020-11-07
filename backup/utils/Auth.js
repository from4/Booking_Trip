const bcrypt = require('bcryptjs');
const User = require('../models/User');

/**
 * @DESC To register the user (USER, ADMIN, SUPER_ADMIN)
 */
const userRegister = async(userDets, role, res) => {
    try{
        // Validate the user
        let usernameToken = await validateUsername(userDets.username);
        if (usernameToken){
            return res.status(400).json({
                message: 'Username is already taken.',
                success: false
            })
        }
        
        // Validate the email
        let emailToken = await validateEmail(userDets.email);
        if (emailToken){
            return res.status(400).json({
                message: 'Email is already registered.',
                success: false
            })
        }

        // Get the hashed passowrd
        const hashed = await bcrypt.hash(userDets.password, 12);
        // Create new user 
        const newUser = new User({
            userDets,
            password:hashed, // or just password in ES6
            role
        });
        await newUser.save();
        return res.status(201).json({
            message: 'You are now successfully registered. Please login.',
            success: true
        })
    }catch(err){
        //implement logger function (winston)
        return res.status(500).json({
            message: 'Unable to create your account.',
            success: false
        })
    }
}

const validateUsername = async(username) => {
    let user = await User.findOne({ username:username /*same as 'username'*/ })

    return user ? false : true
}

const validateEmail = async(email) => {
    let user = await User.findOne({ email /*same as 'email:email'*/ })
    return user ? false : true
}

module.exports = {
    userRegister
}