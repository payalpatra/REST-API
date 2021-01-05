require("dotenv").config(); // Configures all the environmentl variables
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//connection TO DATABASE
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error)); // If there is an error --> console.log(error)
db.once("open", (error) => console.error("Connected to database")); // This will run once we connect to the Database

//Setup to accept Json
//use() allows us to run any middleware we want
app.use(express.json()); // express.json() --> Allows our server to accept json as a body

const UsersRouter = require("./routes/users");
app.use("/users", UsersRouter);

app.listen(3000, () => console.log("server is running"));
