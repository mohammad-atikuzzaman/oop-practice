class App {
  constructor(name) {
    this.name = name;
    this.users = [];
    this.products = [];
  }
  register(user) {
    return user ? this.users.push(user) : "Please Register";
  }
  login(email, password) {
    if (!email || !password) {
      return "Please Provide your credentials";
    }
    const user = this.users.find((u) => u.email === email);

    if (!user) {
      return "Invalid Credentials";
    }
    if ((email, password, user)) {
      if (user.privetInfo !== password) {
        return "Invalid Credentials";
      }
      return `${user.name} login successful`;
    } else {
      return "Unhandled error";
    }
  }
  //   changePassword() {}
  //   forgetPassword() {}

  //   addProducts() {}

  //   removeProduct() {}
}

class User {
  #password;
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }
  get privetInfo() {
    return this.#password;
  }
}

const u1 = new User("Akash", "akash@gmail.com", 1234);
const u2 = new User("Atik", "atik@gmail.com", 4321);
const u3 = new User("M.Atik", "matik@gmail.com", 2134);
// console.log(u1);
// console.log(u1.privetInfo);

const app1 = new App("Softpirex");
app1.register(u1);
app1.register(u2);
app1.register(u3);
// console.log(app1);
// console.log(app1.users[1].privetInfo);

console.log(app1.login("akash@gmail.com", 1234));
