import { Router } from "express";
import multer from "multer";
import UserService from "../service/user/UserService";
import doAuthentication from "../middlewares/doAuthentication";
import uploadConfig from "../config/upload";
import UserUploadService from "../service/user/UserUploadService";

const routes = Router();
const upload = multer(uploadConfig);

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

routes.patch(
  "/avatar",
  doAuthentication,
  upload.single("avatar"),
  async (req, res) => {
    try {
      const updateUserAvatar = new UserUploadService();

      const user = await updateUserAvatar.execute({
        user_id: req.user.id,
        avatarFilename: req.file.filename,
      });

      delete user.password;

      return res.json(user);
    } catch (exception) {
      return res.status(400).json({ error: exception.message });
    }
  }
);

export default routes;
