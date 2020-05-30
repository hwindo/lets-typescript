enum Role {
    ADMIN = 5, 
    READ_ONLY,  // 6
    AUTHOR      // 7
}

const person: {
    name: string;
    age: number;
    member: boolean;
    hobbies: string[];
    role: Role;
} = {
    name: "Windo",
    age: 30,
    member: true,
    hobbies: ["sport", "other thing"],
    role: Role.ADMIN
}

console.log(Role.READ_ONLY);


