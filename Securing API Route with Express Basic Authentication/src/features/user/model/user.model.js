const users = [];
let id = 0;
class UserSchema {
  constructor(name, email, password) {
    this.id = ++id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
export const addUser = (data) => {
  const { name, email, password } = data;
  const newUser = new UserSchema(name, email, password);
  users.push(newUser);
  return newUser;
};
addUser({ name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" });

export const confirmLogin = (data) => {
  const { email, password } = data;
  let isValidUser = false;
  users.forEach((user) => {
    if (user.email === email && user.password === password) isValidUser = true;
  });
  return isValidUser;
};

export const getUserCredentials = (username, password) => {
  let foundUser = null;

  users.forEach((user) => {
    if (user.email === username && user.password === password) {
      foundUser = user;
    }
  });
  return foundUser;
};

// response.utils.js
export const unauthorized = (res, message) => {
  return res.status(401).json({ success: false, message });
};


export const getAllUsers = () => {
  return users;
};
