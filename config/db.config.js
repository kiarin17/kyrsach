const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("rs", "root", "root", {
dialect: "mysql",
host: "localhost"
});

const db = {}
db.sequelize = sequelize;
const deskDefiner = require("../model/desk")
db.desk = deskDefiner(sequelize)
// db.user = require("../models/user")
const roleDefiner = require("../model/role")
db.role = roleDefiner(sequelize)
const reservationDefiner = require("../model/reservation")
db.reservation = reservationDefiner(sequelize)
const userDefiner = require("../model/user")
db.user = userDefiner(sequelize)

const orderDefiner = require("../model/order")
db.order = orderDefiner(sequelize)

db.role.hasMany(db.user);
db.desk.hasMany(db.reservation);
db.user.hasMany(db.reservation);


db.ROLES = ["user", "admin"]

module.exports = db;