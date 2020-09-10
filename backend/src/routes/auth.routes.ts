import { Router } from "express";
import AuthenticationService from "../service/auth/AuthenticationService";

const routes = Router();

routes.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    const service = new AuthenticationService();

    const { user, token } = await service.execute({
      email,
      password,
    });

    delete user.password;

    return res.json({ user, token });
  } catch (exception) {
    return res.status(400).json({ error: exception.message });
  }
});

export default routes;
