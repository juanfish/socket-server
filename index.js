// "use strict";
// exports.__esModule = true;
// // import {  Server } from "./class/server";
// var server_1 = require("./class/server");
// var environment_1 = require("./global/environment");
// var server = new server_1["default"]();
// server.start(function () {
//     console.log("servidor correindo en el puerto " + environment_1.SERVER_PORT);
// });


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))