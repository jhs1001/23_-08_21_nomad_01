function getLowestNumber(numbers) {
  return numbers.reduce((acc, curr) => {
    if (acc < curr) {
      return acc;
    }
    return curr;
  });
}