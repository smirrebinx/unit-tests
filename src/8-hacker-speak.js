export const hackerSpeak = (words) => {
  const replacements = {
    a: '4',
    e: '3',
    i: '1',
    o: '0',
    s: '5',
  };

  const replaceLetters = (letter) => {
    const lowercaseLetter = letter.toLowerCase();
    return replacements[lowercaseLetter] || letter;
  };

  return words.split('').map(replaceLetters).join('');
};

// Added variables and another return to pass the tests

// The hackerSpeak function takes a 'words' string as input. It defines an object replacements that 
// maps the letters to their respective replacements.
// The function then defines an inner function replaceLetters which 
// takes a letter as input and returns its replacement if it exists 
// in the replacements object. The letter is converted to lowercase 
// before checking in the replacements object to handle both uppercase 
// and lowercase letters.
// The main function splits the words string into an array of characters 
// using split(''), maps each character to its replacement using the 
// replaceLetters function, and then joins the resulting array of characters 
// back into a string using join('').
// With these changes, the hackerSpeak function will pass the provided tests 
// by replacing the specified letters with their corresponding numbers.