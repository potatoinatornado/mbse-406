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

const brain = require('brain.js')

function getRandomArbitrary(num, otherNum) {
  const mini = Math.min(num, otherNum)
  const maxi = Math.max(num, otherNum)
  return Math.random() * (maxi - mini) + mini;
}

app.get("/ai", (req, res) => {
  var net1 = new brain.recurrent.LSTMTimeStep()


  const initPrice = parseFloat(req.query.initPrice.substring(1))
  const price = parseFloat(req.query.price.substring(1))

  const normalise = (val, max, min) => (val - min) / (max - min);
  const denormalize = (norm, max, min) => norm * (max - min) + min

  const training = []
  for (let i = 0; i < parseInt(req.query.quantity); i++) {
    training.push(normalise(getRandomArbitrary(initPrice, price), price, initPrice))
  }

  console.log(training)

  net1.train([
    training
  ], {log: true, iterations: 5000, errorThresh: .09});
  const nextPrice = denormalize(net1.run(training), price, initPrice)

  res.send({nextPrice})


});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});
