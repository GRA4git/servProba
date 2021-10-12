const Student = require("../models/Student.model")

module.exports.studentControllers={
    postStudent: (req,res)=>{
        Student.create({
            name: req.body.name,
            phone: req.body.phone,
            age: req.body.age
        }).then(()=>{
            res.json("student add")
        })
    }
}