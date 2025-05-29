// Mock database
const users = [
    {
        id: 1,
        email: 'admin@example.com',
        name: 'Admin User',
        role: 'admin',
        lastLogin: '2025-05-15T10:30:00Z'
    },
    {
        id: 2,
        email: 'teacher@example.com',
        name: 'Teacher User',
        role: 'teacher',
        lastLogin: '2025-05-14T09:15:00Z'
    },
    {
        id: 3,
        email: 'student@example.com',
        name: 'Student User',
        role: 'student',
        lastLogin: '2025-05-13T14:45:00Z'
    }
];

const simulateApiCall = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
};

export const getUsers = async () => {
    return simulateApiCall(users);
};

export const getUserById = async (id) => {
    const user = users.find(u => u.id === id);
    return simulateApiCall(user || null);
};