var express = require("express")
var bodyParser = require("body-parser")

var tasks = require("./routes/tasks")
var core = require("cors")

var port = 3000

var app = express()
app.use(core())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/api", tasks)

app.listen(port, function() {
  console.log('Server started on port ' + port)  
})