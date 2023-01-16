const express = require("express");
const { auth } = require("../middlewares/atuh");
const { validateTodo, TodoModel } = require("../models/todoModel");
const { UserModel } = require("../models/userModel");
const router = express.Router();
// main route 

/*
date,time,title,description,user_id,created_at
*/

router.post('/', auth, async(req, res) => {
    let validBody = validateTodo(req.body); //validation the request of Create user
    if (validBody.error) {
        return res.status(400).json({ err_msg: validBody.error.details });
    }
    try {
        const todoObj = req.body;
        todoObj.user_id = req.tokenData._id;
        const todo = new TodoModel(todoObj);
        await todo.save()
        let user = await UserModel.findById(req.tokenData._id);
        user.todos_id.push(todo._id);
        await user.save();
        res.json({ todo })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ err_msg: err });
    }

})

router.get("/", (req, res) => {
    res.json({ msg: "Welcome to my TODOS " });
})

module.exports = router;