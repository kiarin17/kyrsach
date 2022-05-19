const Sequelize = require("sequelize")

module.exports = function (sequelize) {
    return sequelize.define("user", {
        name: {
            type: Sequelize.STRING,
            allowNull:false
        },

        lastname: {
            type: Sequelize.STRING,
            allowNull:false
        },

        middlename: {
            type: Sequelize.STRING,
            allowNull:false
        },

        birthday: {
            type: Sequelize.DATE,
            allowNull:false //Этот параметр который означает, что поля должны быть обязательно не пустыми
        },

        email: {
            type: Sequelize.STRING,
            allowNull:false
        },

        phone: {
            type: Sequelize.STRING,
            allowNull:false
        },
        password: {
            type: Sequelize.STRING,
            allowNull:false
        }
    }, {
        timestamps: false}) //Чтобы не создавались доп. столбцы в БД
        }