import {Greetings, UserRepository} from "../src";

describe('Say Hello Greeting', () => {
  it('contains name and last name with stub', () => {
    const stubUserRepository: UserRepository = {
      getUserByEmail: (_: string) => {
        return {
          name: 'Fabio',
          lastname: 'Fortini'
        }
      }
    }
    const greetings = new Greetings(stubUserRepository);

    const result = greetings.sayHelloTo('any-mail@example.com');

    expect(result).toBe('Hello, Fabio Fortini');
  });
  it('should use the repository properly', () => {
    // Arrange: Think how the repository spy looks like

    // Act: greetings.sayHelloTo('any-mail@example.com');

    // Assert: the get user by email method is called with the given mail
  });
  it('contains name and last name with mock', () => {
    // Arrange: Think how to mock an implementation for the method getUserByEmail

    // Act: const result = greetings.sayHelloTo('any-mail@example.com');

    // Assert: The result should be 'Hello, Programmed Name'
  });
});