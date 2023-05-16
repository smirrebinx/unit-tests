export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string' || Array.isArray(stringArrayOrObject)) {
    return stringArrayOrObject.length === 0;
  }

  if (type === 'object') {
    return Object.keys(stringArrayOrObject).length === 0;
  }

  return false;
};

// Added another if-statement to pass the tests
// The isEmpty function takes a stringArrayOrObject as input. 
// It first checks the type of the input using the typeof operator and performs different 
// checks based on the type.
// If the input is a string or an array, it checks if the length of the string or array is 
// equal to 0. If it is, it returns true indicating that it is empty.
// If the input is an object, it uses Object.keys() to retrieve an array of the object's 
// keys and checks if the length of the keys array is equal to 0. If it is, it returns true 
// indicating that it is empty.
// If none of the above conditions are met, it means the input is of an unsupported type, 
// and the function returns false as the default case.
// With these changes, the isEmpty function will pass the provided tests by correctly 
// determining if a string, array, or object is empty.