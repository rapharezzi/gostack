import { getRepository } from "typeorm";
import User from "../../models/user/User";

interface Request {
  name: string;
  email: string;
  password: string;
}

class UserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const repository = getRepository(User);

    const userAlready = await repository.findOne({
      where: { email },
    });

    if (userAlready) {
      throw new Error("Email already used!");
    }

    const user = repository.create({
      name,
      email,
      password,
    });

    await repository.save(user);

    return user;
  }
}

export default UserService;
