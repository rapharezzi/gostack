import { Router } from "express";
import appointmentRouter from "./appointment.routes";
import userRouter from "./user.routes";

const routes = Router();

routes.use("/appointments", appointmentRouter);
routes.use("/users", userRouter);

export default routes;
