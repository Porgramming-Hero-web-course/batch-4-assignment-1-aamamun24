{
  // Problem 3
  function countWordOccurrences(sen: string, wor: string): number {
    const sentence = sen.toLowerCase();
    const word = wor.toLowerCase();

    const words = sentence.split(" ");

    const wordCount = words.filter(singleWord => singleWord === word);

    return wordCount.length;
  }

  const result = countWordOccurrences("I love typescript typescript", "typescript")
  console.log(result);
}
