import { UUIDTypes } from "uuid";

export interface user {
  id: number;
  name: string;
  email: string;
  password: string;
};

export const User: user[] = [
  //sample data for 5 user
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "password123",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "password123",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    password: "password123",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    password: "password123",
  },
];

export const userFinder = (email: string, password: string) => {
  const exestingUser = User.find((u) => {
    u.email === email && u.password === password;
  });
  if (exestingUser) {
    return true;
  } else {
    return false;
  }
};

export const addUser = (user: any, exestingUser: boolean) => {
  if (!exestingUser) {
  User.push(user);
  }
};

export const findUser = (id: number): user | undefined => {
  return User.find((u) => u.id === id);
};
