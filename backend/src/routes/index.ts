import { Router } from "express";
import appointmentRouter from "./appointment.routes";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";

const routes = Router();

routes.use("/appointments", appointmentRouter);
routes.use("/users", userRouter);
routes.use("/auth", authRouter);

export default routes;
