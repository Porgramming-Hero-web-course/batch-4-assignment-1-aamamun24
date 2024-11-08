{
  // Problem 8

  interface Person {
    name: string;
    age: number;
    email: string;
  }

  function validateKeys<T extends Person>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in obj);
  }

  const person: Person = {
    name: "Abdullah",
    age: 26,
    email: "bdmamun100@gmail.com",
  };

  const result = validateKeys(person, ["name", "age"]);
  console.log(result);
}
