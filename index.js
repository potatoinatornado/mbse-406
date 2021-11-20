const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json()); // => allows us to access the req.body

// app.use(express.static(path.join(__dirname, "client/build")));
// app.use(express.static("./client/build")); => for demonstration

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

console.log(__dirname);
console.log(path.join(__dirname, "client/build"));


const {Client} = require('@elastic/elasticsearch')

const client = new Client({
  node: 'https://crazay416:@BeachVibesAlumni2021@198e80774cbe4429ae6739340c2f59d2.westus2.azure.elastic-cloud.com:9243',
})


app.get("/search/:id", (req, res) => {
  console.log("Heyy")
  client.search({
    index: 'python_airplane',
    from: 20,
    size: req.params.id,
  }, {
    ignore: [404],
    maxRetries: 3
  }, (err, result) => {
    if (err) console.log(err)
    else res.send(result.body.hits.hits)
  })
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
