const Task = require("../model/Task");
const GetAllTask = async (req, res) => {
  try {
    const data = await Task.find();

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json("not found");
    console.log(error);
  }
};

const CreateTask = async (req, res) => {
  try {
    const data = await req.body;
    Task.create(data);
    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const GetTask = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Task.findOne({ _id: id });
    // res.json(req.params);
    if (!data) {
      return res.status(404).json("thik se id dal lund ke bal");
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json("fuck");
  }
};

const DeleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const Thatone = await Task.findOneAndDelete({ _id: id });
    if (!Thatone) {
      res.status(404).json("Lavde thik se dal id");
    }
    res.status(200).json({ Thatone });
  } catch (error) {
    res.status(500).json("bhosdike");
  }
};
const UpdateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const { id } = req.params;
    const Thatone = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!Thatone) {
      res.status(404).json("Lavde thik se dal id");
    }
    res.status(200).json({ Thatone });
  } catch (error) {
    res.status(500).json("bhosdike");
  }
};

module.exports = { GetAllTask, CreateTask, GetTask, DeleteTask, UpdateTask };
