// Mock database
const users = [
  {
    id: 1,
    email: "admin@example.com",
    password: "admin123",
    name: "Admin User",
    role: "admin",
  },
  {
    id: 2,
    email: "teacher@example.com",
    password: "teacher123",
    name: "Teacher User",
    role: "teacher",
  },
  {
    id: 3,
    email: "student@example.com",
    password: "student123",
    name: "Student User",
    role: "student",
  },
];

// Simulate API calls with delays
const simulateApiCall = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

export const loginUser = async (credentials) => {
  const user = users.find(
    (u) => u.email === credentials.email && u.password === credentials.password,
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return simulateApiCall({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  });
};

export const registerUser = async (userData) => {
  const emailExists = users.some((u) => u.email === userData.email);

  if (emailExists) {
    throw new Error("Email already registered");
  }

  const newUser = {
    id: users.length + 1,
    ...userData,
    role: "student", // Default role
  };

  users.push(newUser);

  return simulateApiCall({
    id: newUser.id,
    email: newUser.email,
    name: newUser.name,
    role: newUser.role,
  });
};

export const resetPassword = async (email) => {
  const user = users.find((u) => u.email === email);

  if (!user) {
    throw new Error("Email not found");
  }

  return simulateApiCall({
    message: "Password reset link sent to your email",
  });
};
