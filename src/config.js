const dotenv = require('dotenv');

dotenv.config();
 
const { PORT, MONGO_CONNECTION } = process.env;

const configApp = {
	PORT,
	MONGO_CONNECTION
}

module.exports = { configApp };