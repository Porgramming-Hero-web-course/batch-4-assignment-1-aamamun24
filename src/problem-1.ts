{
  // Problem 1

  function sumArray(arr: number[]): number {
    let sum = 0;

    // for (let i = 0; i < arr.length; i++) {
    //   sum = sum + arr[i];
    // }

    for (const num of arr) {
      sum += num;
    }
    return sum;
  }

  const result = sumArray([1, 2, 3, 4, 5]);
  console.log(result);
}
