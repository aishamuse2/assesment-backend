const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment,getFortune,addCompliment,getRandomCountry,deleteCompliment} = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);
app.put("/api/compliment", addCompliment)
app.post("/api/continent",getRandomCountry)
app.delete("/api/compliment",deleteCompliment)


app.listen(4000, () => console.log("Server running on 4000"));



