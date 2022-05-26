const { Router } = require("express");
const { route } = require("express/lib/application");

const router=Router();

const {getToDo,saveToDo,deleteToDo,updateToDo}=require("../controllers/ToDoController");

router.get("/get-todo", getToDo);
router.post("/save-todo",saveToDo);
router.post("/delete-todo",deleteToDo);
router.post("update-todo",updateToDo);

module.exports=router;




