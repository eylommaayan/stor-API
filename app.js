require("dotenv").config();
require("express-async-errors"); // המרת החבילה

// asunc errors
const express = require("express");
const app = express();

// חיבור לקובץ מסד נתונים
const connectDB = require("./db/connect");
// חיבור הנתיבים
const productsRouter = require("./routes/products");

const notFoundMiddleware = require("./middleware/not-found");
const errorFoundMiddleware = require("./middleware/error-handler");

// middleware - הפעלה
app.use(express.json());

// routs - בדיקת נתב
app.get("/", (req, res) => {
  res.send('<h1>Store API </h1><a href="/api/v1/products">products route</a>');
});

// נתב
app.use("/api/v1/products", productsRouter);

// products route

app.use(notFoundMiddleware);
app.use(errorFoundMiddleware);

const port = process.env.PORT || 3000;

// חיבור למסד נתונים
const start = async () => {
  try {
    //connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening port ${port}..`));
  } catch (error) {
    console.log(error);
  }
};

start();
