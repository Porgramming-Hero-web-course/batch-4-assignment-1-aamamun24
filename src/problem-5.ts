{
  // Problem 5

  interface Person {
    name: string;
    age: number;
  }

  function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key];
  }

  const person: Person = { name: "Abdullah", age: 26 };

  const result = getProperty(person, "name");
  console.log(result);
}
