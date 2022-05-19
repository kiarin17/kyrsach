const Sequelize = require("sequelize")

module.exports = function (sequelize) {
    return sequelize.define("desk", {
    id_desk: {
    type: Sequelize.STRING,
    allowNull: false
    },

    date: {
        type: Sequelize.DATE,
        allowNull:false
        },

    number: {
    type: Sequelize.STRING,
    allowNull:false
    },

    place: {
    type: Sequelize.STRING,
    allowNull:false
    }

}, {
timestamps: false})
}