function checkEvenOdd(number) {
  if (typeof number !== 'number') {
      console.log('Please enter a valid number.');
      return;
  }

  if (number % 2 === 0) {
      console.log(`${number} is even.`);
  } else {
      console.log(`${number} is odd.`);
  }
}

// Example usage:
checkEvenOdd(10); // Output: 10 is even.
checkEvenOdd(7);  // Output: 7 is odd.
checkEvenOdd('a'); // Output: Please enter a valid number.
