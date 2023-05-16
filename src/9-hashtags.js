export const hashtags = (text) => {
  const hashtagRegex = /#[^\s#]+/g;
  return text.match(hashtagRegex) || [];
};

// Added variables and code to the return to pass the tests.
// In this updated version, the hashtags function takes a text string as input. 
// It defines a regular expression hashtagRegex that matches hashtags in the text. 
// The regular expression #[^\s#]+ matches a "#" followed by one or more non-whitespace and non-"#" characters.
// The function then uses the match method on the text string with the hashtagRegex to extract all the matches, 
// which will be an array of hashtags. If no hashtags are found, it returns an empty array using the || [] syntax.
// The hashtags function will pass the provided test by extracting all the hashtags from the 
// given sentence and returning them as an array.
// Using regular expressions (Regex) provides a more concise and flexible solution for extracting hashtags from 
// a sentence compared to splitting the text by spaces and filtering words.
// Using regular expressions provides a more robust and scalable solution that can handle different patterns and 
// edge cases for hashtag extraction from text. It offers better flexibility in defining and adapting the hashtag pattern, 
// handles punctuation and special characters, and can be more efficient for large texts.