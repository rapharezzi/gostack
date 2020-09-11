import { Router } from "express";
import UserService from "../service/user/UserService";
import doAuthentication from "../middlewares/doAuthentication";

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

routes.patch("/avatar", doAuthentication, async (req, res) => {
  return res.json({ message: "ok" });
});

export default routes;
