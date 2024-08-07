import express from "express";
import Data from '../model/MyData.js'
import { addData, getData, deleteData, updateData } from "../controllers/alwynControllers.js";

const router = express.Router()

router.route("/").get(getData).post(addData);
router.route("/:id").delete(deleteData).patch(updateData)

// router.get("/", getData)
// router.post("/", addData)

// router.post('/', async(req, res) => {
//   console.log(req.body);
//   const alwyn = await Data.create({
//     name: req.body.name,
//     email: req.body.email,
//     age: req.body.age,
//     course: req.body.course
//   });
//   res.json(alwyn)
// })

// router.get('/', async(req, res) => {
//   const alwyn = await Data.find();
//   res.json(alwyn)
// })

export default router;