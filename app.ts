enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "Antoine",
  age: 23,
  hobbies: ["Football", "Musculation"],
  role: [2, "author"]
};

let favoriteActivities: string[];
favoriteActivities = ["Football"];

console.log(person.name);

for (let hobbie of person.hobbies) {
  console.log(hobbie.toUpperCase());
}
