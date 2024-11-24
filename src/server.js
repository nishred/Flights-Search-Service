const express = require("express");

const { PORT } = require("./config/server.config");

const app = express();

app.use(express.json())

app.use(express.urlencoded({ extended: true }));  
  

app.get("/test", (req, res) => {
  res.json({
    message: "Hello World",
  });
});



app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
