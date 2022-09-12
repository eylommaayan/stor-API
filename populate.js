// הכנסת קובץ קישור למסד נתונים
require("dotenv").config();
//בשביל להתחבר צריך את החיבור הזה גם
const connectDB = require("./db/connect");
//schema  ביקוש המוצרים מ
const Product = require("./models/product");
// בקשת הנצונים מקובץ מסד
const jsonProducts = require("./products.json");

// יצירת פונקציית חיבור בין מסד נתונים לפונקציה
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany(); //ניקוי הרשימה
    await Product.create(jsonProducts); // הכנסת מוצרים אחרי פונקציית סינון
    console.log("Success!!!!");
    process.exit(0); //לייצא את המוצר
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
