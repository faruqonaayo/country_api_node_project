import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let searchResult = {
    countryName: "",
    countryCapital: "",
    countryRegion: "",
    countryPopulation: ""
};

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    searchResult = "";
    res.render("index.ejs", { result: searchResult });
})

//search by country: code to request json from a server online using axios
app.post("/country", async (req, res) => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${req.body["country"]}`);
        const countryData = response.data;
        searchResult = {
            countryName: countryData[0].name.official,
            countryCapital: countryData[0].capital[0],
            countryRegion: countryData[0].region,
            countryPopulation: countryData[0].population
        }
        console.log(searchResult);
        res.render("index.ejs", { result: searchResult });
    } catch (error) {
        console.log(res.send(400))
    }
})

//search by capital: code to request json from a server online using axios
app.post("/capital", async (req, res)=>{
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/capital/${req.body["capital"]}`);
        const countryData = response.data;
        searchResult = {
            countryName: countryData[0].name.official,
            countryCapital: countryData[0].capital[0],
            countryRegion: countryData[0].region,
            countryPopulation: countryData[0].population
        }
        console.log(searchResult);
        res.render("index.ejs", { result: searchResult });
    } catch (error) {
        console.log(res.send(400))
    }
})

//search by currency: code to request json from a server online using axios
app.post("/currency", async (req, res)=>{
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/currency/${req.body["currency"]}`);
        const countryData = response.data;
        searchResult = {
            countryName: countryData[0].name.official,
            countryCapital: countryData[0].capital[0],
            countryRegion: countryData[0].region,
            countryPopulation: countryData[0].population
        }
        console.log(searchResult);
        res.render("index.ejs", { result: searchResult });
    } catch (error) {
        console.log(res.send(400))
    }
})

app.listen(port, () => {
    console.log(`Server listening from ${port}`);
})