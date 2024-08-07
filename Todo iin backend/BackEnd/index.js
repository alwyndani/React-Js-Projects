import express from "express";
import connectDb from "./config/db.js";
import todoRoutes from "./routes/todoRoutes.js"
// import Alwyn from "./model/MyData.js";
import alwynRoutes from './routes/alwynRoute.js'

connectDb();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ name: "Alwyn", Course: "Mern" });
});

app.use("/api/todo", todoRoutes)

// app.post("/api/todo", async (req, res) => {
//   console.log(req.body);
//   const todo = await Todo.create({  
//     title: req.body.title,
//     descr: req.body.descr,
//     status: req.body.status
//   });

//   res.json(todo);
// });

// app.get("/api/todo", async (req, res) => {
//   const alwyn = await Todo.find();
//   res.json(alwyn);
// });

app.use("/api/alwyn", alwynRoutes)

// app.post('/api/alwyn', async(req, res) => {
//   console.log(req.body);
//   const alwyn = await Alwyn.create({
//     name: req.body.name,
//     email: req.body.email,
//     age: req.body.age,
//     course: req.body.course
//   });
//   res.json(alwyn)
// })

// app.get('/api/alwyn', async(req, res) => {
//   const alwyn = await Alwyn.find();
//   res.json(alwyn)
// })

app.listen(8000, () => {
  console.log("Server is running");
});
