const person = {
  name: "Antoine",
  age: 23,
  hobbies: ["Football", "Musculation"]
};

let favoriteActivities: string[];
favoriteActivities = ["Football"];

console.log(person.name);

for (let hobbie of person.hobbies) {
  console.log(hobbie.toUpperCase());
}
