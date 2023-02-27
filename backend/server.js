const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

//Handling Uncaught Exception (console log youtube)
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
})

//config

dotenv.config({path:"backend/.env"});

//Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, ()=>{
   
    console.log(`Server is working on http://localhost:${process.env.PORT}`);

});

//Unhandled promise rejection (database link error in env)
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(()=>{
       process.exit(1);
    });
});