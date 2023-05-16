export const filterNumbers = (array, largerThan) => {
  return array.filter((number) => number <= largerThan);
};

// Added code to the return to pass the tests
// The filterNumbers function takes an array and 
// a value (largerThan) as input. It uses the filter 
// method on the array to create a new array that only 
/// contains the elements satisfying the given condition. 
// The condition is defined using an arrow function, which 
// checks if each number in the array is less than or equal 
// to the largerThan value. The resulting filtered array is 
// returned as the output of the function, containing only the 
// numbers that are less than or equal to the largerThan value.