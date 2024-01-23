let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");
let loginRouter = require("./routes/login");
let toolsRouter = require("./routes/tools");
let machinesRouter = require("./routes/machines");
let suppliesRouter = require("./routes/supplies");
let historyRouter = require("./routes/history");

let mongoose = require("mongoose");
let app = express();

// Connexion à la BDD "PlsComeBack"
mongoose.connect("mongodb://localhost:27017/PlsComeBack");

const db = mongoose.connection;

// checking connection
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB !");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routing
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/tools", toolsRouter);
app.use("/machines", machinesRouter);
app.use("/supplies", suppliesRouter);
app.use("/history", historyRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
