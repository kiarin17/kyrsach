const Sequelize = require("sequelize")

module.exports = function (sequelize) {
    return sequelize.define("order", {
        last_name: {
            type: Sequelize.STRING,
            allowNull: false
        },

        
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },

        
        middle_name: {
            type: Sequelize.STRING,
            allowNull: false
        },

        birthday: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        phone_number: {
            type: Sequelize.STRING,
            allowNull: false
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false
        },

        table_number: {
            type: Sequelize.STRING,
            allowNull: false
        }, 

    }, {
        timestamps: false
    })
}