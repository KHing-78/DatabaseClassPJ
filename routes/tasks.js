var express = require("express")
var router = express.Router()
const Task = require("../model/Task")

//Get All Tasks
router.get("/task/equipment", (req,res) => {
    Task.findAll()
    .then(tasks => {
        res.json(tasks)
    }) 
    .catch(err => {
        res.send("error: " + err)
    })
    
})

//Get by id Tasks
router.get("/task/equipment/:id", (req,res) => {
    Task.findByPk(req.params.id)
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err => {
        res.send("Error: " + err)
    })
})

//Get by name Tasks
// router.get("/task/equipment/:name", (req,res) => {
//     Task.findByPk({
//         where: {
//             EquipName: req.params.id
//         }
//     })
//     .then(tasks => {
//         res.json(tasks)
//     })
//     .catch(err => {
//         res.send("Error: " + err)
//     })
// })

//Add task
router.post("/task/equipment", (req, res) => {
    if(!req.body.EquipName) {
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    }else{
        Task.create(req.body)
        .then(() => {
            res.send("Task Added")
        })
        .catch(err=> {
            res.send("Error: " + err)
        })
    }
})


//delete
router.delete("/task/equipment/:id", (req, res) => {
    Task.destroy({
        where: {
            EquipID: req.params.id
        }
    })
        .then(() => {
            res.send("Task Deleted")
        })
        .catch(err => {
            res.send("error: " + err)
        })
})

//Update Task
router.put("/task/equipment/:id" , (req,res) => {
    if (!req.body.EquipName) {
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    } else {
        Task.update(
            { where: { EquipID: req.params.id}},
            { EquipName: req.body.EquipName},
            { Type: req.body.Type},
            
        )
            .then(() => {
                res.send("Task Updated!")
            })
            .error(err => res.send(err))
    }
})

// router.get("/task/member", (req,res) => {
//     Task.findAll()
//     .then(tasks => {
//         res.json(tasks)
//     }) 
//     .catch(err => {
//         res.send("error: " + err)
//     })
    
// })

module.exports = router