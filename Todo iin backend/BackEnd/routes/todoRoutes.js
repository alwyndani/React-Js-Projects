import express from "express";
import Todo from "../model/TodoModel.js"
import { getTodo, addTodo, deleteTodo, updateTodo } from "../controllers/todoCoontrollers.js";

const router = express.Router();

router.route("/").get(getTodo).post(addTodo);
router.route("/:id").delete(deleteTodo).patch(updateTodo);

// router.get("/", getTodo)
// router.post("/", addTodo);

// router.post("/", async (req, res) => {
//   console.log(req.body);
//   const todo = await Todo.create({
//     title: req.body.title,
//     descr: req.body.descr,
//     status: req.body.status,
//   });

//   res.json(todo);
// });

// router.get("/", async (req, res) => {
//   const alwyn = await Todo.find();
//   res.json(alwyn);
// });

export default router;