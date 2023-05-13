const express = require("express");
const app = express();
const port = 5000;

const apiRoutes = require("./routes/apiRoutes")

app.get("/", (req, res) => {
  console.log("synchronous code");
  throw new Error("some error occured")
  res.json({message: "API running..."})
});

app.get('/a', (req, res, next)=> {
  setTimeout(()=>{
    try {
      console.log("asynchronous code");
    } catch (error) {
      next(error)
    }
  },1000)

})

app.use('/api', apiRoutes)

app.use((error, req, res, next)=>{
  console.error(error);
  next(error)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
