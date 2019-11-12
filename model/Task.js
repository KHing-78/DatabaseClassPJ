const Sequelize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    "equipment",
    {
        EquipID: {
            type: Sequelize.STRING(10),
            primaryKey: true,
        },
        EquipName: {
            type: Sequelize.STRING(20)
        },
        Type: {
            type: Sequelize.STRING
        },
        Total: {
            type: Sequelize.INTEGER(50)
        }
    },
    {
        timestamps: false
    }
)