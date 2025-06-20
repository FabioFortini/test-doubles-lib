export type User = {
  name: string;
  lastname: string;
}

export interface UserRepository {
  getUserByEmail(email: string): User;
}

export class Greetings {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  sayHelloTo(email: string): string {
    const user = this.userRepository.getUserByEmail(email);
    return `Hello, ${user.name} ${user.lastname}`;
  }
}
