class User {
  #password;
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }
  login(email, password) {
    if (!email || !password) {
      return `You can't login without credentials`;
    }
    const user = this.email === email;
    const match = this.#password === password;

    if (!user) {
      return "User not found";
    }
    if (!match) {
      return "Invalid credentials";
    }
    if ((email, password, user, match)) {
      return `${this.name} Login Successful `;
    } else {
      return "Unhandled error";
    }
  }

  changePassword(password, newPassword) {
    if (!password || !newPassword) {
      return "Please provide your Credentials";
    }
    if (this.#password !== password) {
      return "Sorry you cant change your password";
    } else {
      this.#password = newPassword;
      return "Your password is changed";
    }
  }
  get userInfo() {
    return { name: this.name, email: this.email, password: this.#password };
  }
}

const user1 = new User("Akash", "test@pest.com", "2435326");
console.log(user1);
// console.log(user1.login("test@pest.com", "2435326"));
console.log(user1.changePassword("2435326f", "123456"));
console.log(user1.userInfo);
