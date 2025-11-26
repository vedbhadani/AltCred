const express = require('express');
const helmet = require('helmet');
const rateLimiter = require("./middlewares/rateLimiter");
const apiCors = require("./middlewares/cors");
const errorHandler = require("./middlewares/errorHandler");
const authRoutes = require("./modules/auth/routes/auth.routes");

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(apiCors);
app.use(helmet());
app.use(rateLimiter);

app.use("/api/v1/auth", authRoutes);


app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
app.use(errorHandler);

module.exports = app;