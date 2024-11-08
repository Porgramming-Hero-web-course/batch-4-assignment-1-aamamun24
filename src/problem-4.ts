{
  // Problem 4

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else {
      return shape.width * shape.height;
    }
  }

  const circle: Circle = { shape: "circle", radius: 5 };

  const circleArea = calculateShapeArea(circle);
  console.log(circleArea);

  const rectangle: Rectangle = {
    shape: "rectangle",
    width: 4,
    height: 6,
  };

  const rectangleArea = calculateShapeArea(rectangle);
  console.log(rectangleArea);
}
