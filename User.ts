interface user {
    id: number;
    name: string;
    email: string;
    password: string;
}

export const User: user[] = [
    //sample data for 5 user
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "password123"
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        password: "password123"
    },
    {
        id: 4,
        name: "Bob Brown",
        email: "bob.brown@example.com",
        password: "password123"
    },
    {
        id: 5,
        name: "Charlie Davis",
        email: "charlie.davis@example.com",
        password: "password123"
    }

]