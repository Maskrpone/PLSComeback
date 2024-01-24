const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const toolsRouter = require("./routes/tools");
const machinesRouter = require("./routes/machines");
const suppliesRouter = require("./routes/supplies");
const historyRouter = require("./routes/history");
const reserveRouter = require("./routes/reserve");
const returnRouter = require("./routes/return");

const mongoose = require("mongoose");
const app = express();

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
app.use(cors);

// routing
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/tools", toolsRouter);
app.use("/machines", machinesRouter);
app.use("/supplies", suppliesRouter);
app.use("/history", historyRouter);
app.use("/reserve", reserveRouter);
app.use("/return", returnRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
