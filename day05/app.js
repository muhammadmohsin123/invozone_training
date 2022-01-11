const express = require("express");
const { sequelize, User, Post } = require("./models");
const app = express();

//JSON parser middleware
app.use(express.json());

//Routes

//GET
app.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//Get one user
app.get("/users/:id", async (req, res) => {
  const id = +req.params.id;
  console.log("id ", req.params.id);
  try {
    const users = await User.findOne({
      where: { id: id },
    });
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//Post
app.post("/users", async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const user = await User.create({ name, email, phone });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Server...
app.listen(3000, async () => {
  console.log("Server is running...");
  await sequelize.sync();
  console.log("Database synced");
});
