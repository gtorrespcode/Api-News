import { createService, findAllService } from "../services/news.service.js";

const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(500).send({ message: "Submit all fields" });
    }

    await createService({ title, text, banner, user: "Object id fake" });

    res.send({ message: "News created" });
    
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const findAll = async (req, res) => {
  try {
    const news = await findAllService();
    if (news.length === 0) {
        return res.status(400).send({ message: "There are no news" });
      }
    res.send(news);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { create, findAll };
