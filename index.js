const express = require("express");

const path = require("node:path");


const messageRouter = require("./routes/messageRouter");


const App = express();


App.set("views", path.join(__dirname, "views"));
App.set("view engine", "ejs");


App.use(express.urlencoded({ extended: true }));



App.use("/", messageRouter);

//App.use("/new", messageRouter);


const PORT = 3000;

App.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log("app running");
})



