const cors = require("cors")
const allowedOrigins = ["http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:4000", "http://localhost:5000", "http://localhost:3001"]

const corsOptions = cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true)
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = "The CORS policy for this site does not allow access from this origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
})

module.exports = corsOptions;
