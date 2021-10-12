const {Router} = require("express")
const {studentControllers} = require("../controllers/students.controllers")

const router = Router()
router.post("/student",studentControllers.postStudent)


module.exports=router