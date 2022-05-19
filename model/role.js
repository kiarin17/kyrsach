const Sequelize = require("sequelize")

module.exports = function (sequelize) {
    return sequelize.define("role", {
    name: {
    type: Sequelize.STRING,
    allowNull:false
    }
}, {
    timestamps: false})
    }