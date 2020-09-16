import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { parseISO } from "date-fns";

import AppointmentRepository from "../repository/appointment/AppointmentRepository";
import AppointmentService from "../service/appointment/AppointmentService";
import doAuthentication from "../middlewares/doAuthentication";

const routes = Router();

routes.use(doAuthentication);

routes.get("/", async (req, res) => {
  const repository = getCustomRepository(AppointmentRepository);
  const appointments = await repository.find();
  return res.json(appointments);
});

routes.post("/", async (req, res) => {
  const { provider_id, date } = req.body;
  const parsedDate = parseISO(date);

  const service = new AppointmentService();

  const appointment = await service.execute({
    date: parsedDate,
    provider_id,
  });

  return res.json(appointment);
});

export default routes;
