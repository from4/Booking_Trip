require("dotenv").config({ path: 'ENV_FILENAME' });

module.exports = {
    SECRET: process.env.SECRET,
    DB: process.env.DB,
    PORT: process.env.PORT || 5000
}