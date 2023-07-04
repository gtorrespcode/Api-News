const userService = require("../services/user.service");
const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;
  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Missing information" });
  }

  const user = await userService.create(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error while creating User" });
  }

  res.status(200).send({
    message: "User created successfully",
    user: { id: user._id, name, username, email, password, avatar, background }
  });
};

module.exports = { create };
