const Sequelize = require("sequelize")

module.exports = function (sequelize) {
    return sequelize.define("reservation", {
        client: {
            type: Sequelize.STRING,
            allowNull: false
        },

        client_number: {
            type: Sequelize.STRING,
            allowNull:false
        },

        only_individual_words_found: {
            type: Sequelize.STRING,
            allowNull:false
        }

    }, {
        timestamps: false})
        }