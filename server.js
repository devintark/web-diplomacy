const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const test = require("./routes/api/testroute");
const game = require("./routes/api/game");
const orders = require("./routes/api/orders");
var path = require('path');


const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
var db;
if (process.env.NODE_ENV !== "production"){
  db = require("./config/keys").mongoURI;
} else {
  db = process.env.CXN_STRING;
}
   

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, autoIndex: false, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());


app.use(express.static(path.join(__dirname, 'build')));

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

app.use("/api/testroute", test);
app.use("/api/game", game);
app.use("/api/orders", orders);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
