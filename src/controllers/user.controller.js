const create = (req, res) => {
  const { name, lastName, age } = req.body;
  if (!name || !lastName || !age){
    res.status(400).send("Missing information");
  }

  res.status(200).send({ user: { name, lastName, age }, message: "User created"});
};

module.exports = { create };
