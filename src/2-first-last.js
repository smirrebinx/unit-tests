export const firstLast = (items) => {
  if (items.length === 1) {
    return `Only item: ${items[0]}`;
  } else if (items.length > 1) {
    return `First: ${items[0]}, Last: ${items[items.length - 1]}`;
  } else {
    return 'No items!';
  }
}; 

// Added if else statments to pass test

