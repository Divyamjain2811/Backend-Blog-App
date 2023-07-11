const express=require("express");
const app=express();

require("dotenv").config();

const PORT=process.env.PORT||3000;

//middleware

app.use(express.json());
const blog=require("./routes/blog");

app.use("/api/V1",blog);
const connectWithDb=require("./config/database")
connectWithDb();
//start the server
app.listen(PORT,()=>{
    console.log(`APP is started at port no.${PORT}`);
})

app.get("/", (req,res)=>{
    res.send(`<h1>This is my homepage friend</h1>`)
})