import Server  from "./class/server";
import  router  from "./routes/router";
import bodyParser from "body-parser";
import cors from "cors";


const server =  new Server();

// BODY-PARSER
server.app.use(bodyParser.urlencoded({extended :true}));
server.app.use(bodyParser.json());

//CORS
server.app.use(cors({origin : true, credentials : true}))

// rutas de servicion
server.app.use('/',router);

server.start ( () => {
    console.log("servidor corriendo en puerto " + server.port);
});
