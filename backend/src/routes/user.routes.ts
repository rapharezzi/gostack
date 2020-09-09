import { Router } from "express";
import UserService from "../service/user/UserService";

const routes = Router();

routes.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userService = new UserService();

    const user = await userService.execute({ name, email, password });

    return res.json(user);
  } catch (exception) {
    return res.status(400).json({ error: exception.message });
  }
});

export default routes;
