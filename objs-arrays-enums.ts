enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "Antoine",
  age: 23,
  hobbies: ["Football", "Sport"],
  role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ["Football"];

console.log(person.name);

for (let hobbie of person.hobbies) {
  console.log(hobbie.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("It's Admin");
}
