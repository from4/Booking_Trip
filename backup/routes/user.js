const router = require("express").Router();
const  { userRegister } = require("../utils/Auth");

// Users Registration Router
router.post('/register-user', async (req, res) => {
    await userRegister(req.body, 'user', res);
})
// Admin Registration Route
router.post('/register-admin', async (req, res) => {
    await userRegister(req.body, 'admin', res);
})
// Super Admin Registration Route
router.post('/register-superadmin', async (req, res) => {
    await userRegister(req.body, 'superadmin', res);
})

// Users Login Router
router.post('/login-user', async (req, res) => {
    
})
// Admin Login Route
router.post('/login-admin', async (req, res) => {
    
})
// Super Admin Login Route
router.post('/login-superadmin', async (req, res) => {
    
})

// Profile Router
router.get('profile', async (req, res) => {})

// Users Protected Router
router.post('/user-protected', async (req, res) => {
    
})
// Admin Protected Route
router.post('/admin-protected', async (req, res) => {
    
})
// Super Admin Protected Route
router.post('/superadmin-protected', async (req, res) => {
    
})

module.exports = router;