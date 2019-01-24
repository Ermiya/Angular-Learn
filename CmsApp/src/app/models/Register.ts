export class Register {
  username: string;
  password: string;
  email: string;
  address: string;

  constructor(username = '', password = '', email= '', address = '')
  {
    this.username = username;
    this.password = password;
    this.email = email;
    this.address = address;
  }
}
