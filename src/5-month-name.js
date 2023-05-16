const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  if (monthNumber < 1 || monthNumber > 12) {
    return null;
  }
  return months[monthNumber -1]
}

// Added if statement to pass the tests
// The monthName function takes the monthNumber as input. 
// It first checks if the monthNumber is less than 1 or greater than 12. 
// If it is, it means the month number is invalid, and the function returns null as specified in the tests.
// If the monthNumber is within the valid range, it subtracts 1 from it and uses it as the index to retrieve 
// the corresponding month name from the months array. The retrieved month name is then returned as the output of the function.