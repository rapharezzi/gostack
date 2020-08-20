import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { parseISO } from "date-fns";

import AppointmentRepository from "../repository/appointment/AppointmentRepository";
import AppointmentService from "../service/appointment/AppointmentService";

const routes = Router();

routes.get("/", async (req, res) => {
  const repository = getCustomRepository(AppointmentRepository);
  const appointments = await repository.find();
  return res.json(appointments);
});

routes.post("/", async (req, res) => {
  try {
    const { provider, date } = req.body;
    const parsedDate = parseISO(date);

    const service = new AppointmentService();

    const appointment = await service.execute({
      date: parsedDate,
      provider,
    });

    return res.json(appointment);
  } catch (exception) {
    return res.status(400).json({ error: exception.messages });
  }
});

export default routes;
