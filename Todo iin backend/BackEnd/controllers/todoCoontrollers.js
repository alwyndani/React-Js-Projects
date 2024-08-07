import Todo from "../model/TodoModel.js";

const addTodo = async (req, res) => {
  console.log(req.body);
  // const combinedDateTime = new Date(`${date}T${time}`);
  const todo = await Todo.create({
    title: req.body.title,
    descr: req.body.descr,
    // date: new Date(date),
    // time: combinedDateTime,
    // status: req.body.status,
  });

  res.json(todo);
};

const getTodo = async (req, res) => {
  const alwyn = await Todo.find();
  res.json(alwyn);
};

const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);

  res.status(200).send("Todo Deleted");
};

const updateTodo = async (req, res) => {
  const { title, descr, date, time } = req.body;
  const todo = await Todo.findById(req.params.id);
  todo.title = title || todo.title;
  todo.descr = descr || todo.descr;
  // todo.date = date || todo.date;
  // todo.time = time || todo.time;

  const updatedTodo = await todo.save();
  res.json(updatedTodo);
};

export { getTodo, addTodo, deleteTodo, updateTodo };
