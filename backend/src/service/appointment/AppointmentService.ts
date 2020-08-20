import { startOfHour } from "date-fns";
import { getCustomRepository } from "typeorm";
import AppointmentRepository from "../../repository/appointment/AppointmentRepository";
import Appointment from "../../models/appointment/Appointment";

interface Request {
  provider: string;
  date: Date;
}
class AppointmentService {
  public async execute({ date, provider }: Request): Promise<Appointment> {
    const repository = getCustomRepository(AppointmentRepository);
    const appointmentDate = startOfHour(date);
    const appointmentFinded = await repository.findByDate(appointmentDate);

    if (appointmentFinded) {
      throw Error("This appointment is already booked");
    }

    const appointment = repository.create({
      provider,
      date: appointmentDate,
    });

    await repository.save(appointment);

    return appointment;
  }
}

export default AppointmentService;
