const express = require("express");
const db = require("../config/db.config");
const bodyParser = require("body-parser");
const hbs = require('hbs')
const cors = require("cors");
const app = express();
var corsOptions = {
origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", "./views");

hbs.registerPartials('./views/partials')

//так добавляются стили. Путь пишется относительный относительно корня проекта
app.use(express.static('./views/styles'));
app.use(express.static('views/images')); 


const PORT = process.env.PORT || 8080;
db.sequelize.sync()
.then(result => {
console.log();
})
.catch(err => {
console.log(err);
})


const router = require('../routes/router')


app.use("/", router)

app.use(function (req, res, next) {
res.status(404).send("Not Found")
})

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});
