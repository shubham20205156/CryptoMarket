const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { header } = require("express-validator");
const dashboardRouter = require("./Routes/Dashboard");

const app = express();

app.use(cors())
//---------------mongoose connection----------------//

const Connection_url =
  "mongodb://localhost:27017/CryptoMain";
const port = 5000;

  mongoose.connect(Connection_url,()=>{
    console.log("connected to database successfully");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.json());
app.use("/dashboard", dashboardRouter); 
app.use("/dashboard", require("./Routes/Userdetails"));
app.use("/dashboard", require("./Routes/ProfileUpdate"));

app.use("/register", require("./Routes/CreatUser"));
app.use("/logging", require("./Routes/Login"));

app.use("/transactions", require("./Routes/Transactions"));
app.use("/transactions", require("./Routes/Transactions"));
app.use("/wallet", require("./Routes/Wallet"));
