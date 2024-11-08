## Type Guards in TypeScript

Type guards are important thing in TypeScript that help make sure the right type of data is used in code. TypeScript check types when writing code but sometime it can't know what type is in runtime. Type guards help to fix this problem and stop mistake when running the code.

### Types of Type Guards

1. **`typeof` Guard**

The `typeof` guard checks if a value is a certain type like `string`, `number`, or `boolean`. It is very simple to use. For example:

`const add = (a: string | number, b: string | number) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // It will add the numbers
  } else {
    return a.toString() + b.toString(); // It will concat strings
  }
};` 

Here, we check if both `a` and `b` are numbers before adding them. If not, we just turn them into strings and add them together.

2.  **`in` Guard**

The `in` guard is used when we have objects with different properties. We can check if a property exists in an object to determine the type. For example:

    type User = { name: string };
    type Admin = { name: string; role: string };
    
    const getInfo = (person: User | Admin) => {
      if ('role' in person) {
        console.log(`${person.name} is an admin.`);
      } else {
        console.log(`${person.name} is a regular user.`);
      }
    };

Here, the `in` guard checks if the `role` property exists in the object. If it does, it means the person is an admin.

3.  **`instanceof` Guard**

The `instanceof` guard checks if an object is an instance of a class. It is useful when you are working with classes. Here's an example:

    class Animal {
      name: string;
      constructor(name: string) {
        this.name = name;
      }
    }
    
    class Dog extends Animal {
      bark() {
        console.log('Woof!');
      }
    }
    
    const dog = new Dog('Buddy');
    
    if (dog instanceof Dog) {
      dog.bark(); 
    }

In this example, `instanceof` checks if the `dog` is an instance of the `Dog` class. If it is, it can safely call `dog.bark()`.

### When to Use Type Guards?

You should use type guards when you need to check and narrow down types. For example, when you're working with objects that can be different types, or when you want to ensure that you're using a value in a way that is safe for that type.

In the end, type guards are a powerful way to make your code more reliable and avoid bugs. They help you tell TypeScript exactly what kind of value you're working with, making it easier to work with complex code.