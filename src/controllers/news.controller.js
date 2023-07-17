import { createService, findAllService } from "../services/news.service.js";

const create = async (req, res) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);

    if(!authorization){
      return res.status(401).send({message: "Not authorized"});
    }

    const parts = authorization.split(" "); 
    const [schema, token] = parts;

    if(parts.length !== 2){
      return res.send(401);
    }

    if (schema !== "Bearer"){
      return res.send(401);
    }

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
