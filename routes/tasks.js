var express = require("express")
var router = express.Router()
const Task = require("../model/Task")

//Get All Tasks
router.get("/task/:id", (req,res) => {
    Task.findAll()
    .then(tasks => {
        res.json(tasks)
    }) 
    .catch(err => {
        res.send("error: " + err)
    })
    
})

//Get id Tasks
router.get("/task/:id", (req,res) => {

    Task.findById()
    .then(tasks => {
        res.send("Task get by id")
    })
    .catch(err => {
        res.send("Error: " + err)
    })
})
//Add task
router.post("/task", (req, res) => {
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
router.delete("/task/:id", (req, res) => {
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
router.put("/task/:id" , (req,res) => {
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
            { Total: req.body.Total},
            
        )
            .then(() => {
                res.send("Task Updated!")
            })
            .error(err => res.send(err))
    }
})


module.exports = router