import { getRepository } from "typeorm";
import { hash } from "bcryptjs";
import User from "../../models/user/User";
import AppError from "../../errors/AppError";

interface RequestUser {
  name: string;
  email: string;
  password: string;
}

interface RequestEmail {
  email: string;
}

class UserService {
  public async find({ email }: RequestEmail): Promise<User> {
    const repository = getRepository(User);

    const userFind = await repository.findOne({
      where: { email },
    });

    if (!userFind) {
      throw new AppError("User not founded!");
    }

    return repository.create({ email });
  }

  public async execute({ name, email, password }: RequestUser): Promise<User> {
    const repository = getRepository(User);

    const userAlready = await repository.findOne({
      where: { email },
    });

    if (userAlready) {
      throw new AppError("Email already used!");
    }

    const hashPass = await hash(password, 8);

    const user = repository.create({
      name,
      email,
      password: hashPass,
    });

    await repository.save(user);

    return user;
  }
}

export default UserService;
