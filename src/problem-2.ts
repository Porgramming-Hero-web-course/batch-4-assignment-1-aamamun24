{
  // Problem 2

  function removeDuplicates(arr: number[]): number[] {
    const arrWithoutDuplicates = arr.filter((item, idx) => arr.indexOf(item) === idx);
    return arrWithoutDuplicates;
  }

  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.log(result);
}
