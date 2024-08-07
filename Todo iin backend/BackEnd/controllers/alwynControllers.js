import Data from "../model/MyData.js";

const addData = async (req, res) => {
  console.log(req.body);
  const alwyn = await Data.create({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    course: req.body.course,
  });
  res.json(alwyn);
};

const getData = async (req, res) => {
  const alwyn = await Data.find();
  res.json(alwyn);
};

const deleteData = async (req, res) => {
  await Data.findByIdAndDelete(req.params.id);

  res.status(200).send("Deleted");
};

const updateData = async (req, res) => {
  const { name, email, age, course } = req.body;
  const alwyn = await Data.findById(req.params.id);
  alwyn.name = name || alwyn.name;
  alwyn.email = email || alwyn.email;
  alwyn.age = age || alwyn.age;
  alwyn.course = course || alwyn.course;

  const updatedAlwyn = await alwyn.save();
  res.json(updatedAlwyn);
};

export { addData, getData, deleteData, updateData };
