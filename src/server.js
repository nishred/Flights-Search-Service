const express = require("express");

const { PORT,SYNC_DB } = require("./config/server.config");

const apiRouter = require("./routes/index");

const db = require("./models/index");

const {City, Airport} = db; 

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.get("/test", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

 
   const city = await City.create({
 
       name : "Hayward"
      
   })

   console.log(city)


});
