import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import User from "../../models/user/User";
import authConfig from "../../config/auth";
import AppError from "../../errors/AppError";

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticationService {
  public async execute({ email, password }: Request): Promise<Response> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });
    if (!user) {
      throw new AppError("Email ou Senha incorretos!", 401);
    }

    const isValidPass = await compare(password, user.password);
    if (!isValidPass) {
      throw new AppError("Email ou senha incorretos!", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export default AuthenticationService;
