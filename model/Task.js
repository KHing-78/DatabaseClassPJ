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
        
    },
    {
        timestamps: false
    },
    // "member",
    // {
    //     StudenID: {
    //         type: Sequelize.STRING(20),
    //         primaryKey: true,
    //     },
    //     // FirstName: {
    //     //     type: Sequelize.TEXT
    //     // },
    //     // LastName: {
    //     //     type: Sequelize.TEXT
    //     // },
    //     // Faculty: {
    //     //     type: Sequelize.TEXT
    //     // },
    //     // PhoneNumber: {
    //     //     type: Sequelize.STRING(20)
    //     // },
    //     // Email: {
    //     //     type: Sequelize.TEXT
    //     // }
    // },{
    //     timestamps: false
    // },
    // "borrow",{
    //     BorrowID: {
    //         type: Sequelize.STRING(20),
    //         primaryKey: true,
    //     },
    //     status: { 
    //         type: Sequelize.ENUM("borrowed","free"),
    //     },
    //     MemberID: {
    //         type: Sequelize.STRING(20)
    //     },
    //     EquipID: {
    //         type: Sequelize.STRING(20)
    //     },
    //     borrowDate: {
    //         type: Sequelize.timestamps
    //     },
    //     ReturnDate: {
    //         type: Sequelize.timestamps
    //     }
    // },
    // {
    //     timestamps: false
    // }
)