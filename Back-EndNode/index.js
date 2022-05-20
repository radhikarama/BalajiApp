const express = require('express')
const globalConfig = require('./utils/globalConfig')
const Controller = require('./Controllers/controller')
const dbConn = require('./utils/dbConfig')
const cors = require('cors');
const bodyparser = require('body-parser')
const task = require('./Services/task')

const app = express();
app.use(bodyparser.json());
app.use(express.json());
app.use(cors());
task();
const objCollection = {
 app: app
}
new Controller(objCollection);

const server = require('http').createServer(app)
server.listen(process.env.port || global.config.PORT, () => {
 console.log(`listing to the port ${global.config.PORT}`)
})