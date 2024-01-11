// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
  { name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];

export const registerUser = (user) => {
  // Write your code here
  users.push(user);
};

export const authenticateUser = ({ email, password }) => {
  // Write your code here
  const user = users.find((u) => u.email === email && u.password === password);
  return !!user;
};
