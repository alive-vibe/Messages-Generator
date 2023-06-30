// Stoic quotes array
const stoicQuotes = [
    "The happiness of your life depends upon the quality of your thoughts.",
    "He who fears death will never do anything worthy of a living man.",
    "The greater the difficulty, the more glory in surmounting it.",
    "It is not the man who has too little that is poor, but the one who hankers after more.",
    "The best revenge is not to be like your enemy.",
    "No person has the power to have everything they want, but it is in their power not to want what they don't have.",
    "Waste no more time arguing about what a good man should be. Be one.",
    "If a man knows not to which port he sails, no wind is favorable.",
    "Don't explain your philosophy. Embody it.",
    "The soul becomes dyed with the color of its thoughts.",
  ];
  
  // Function to generate a random Stoic quote
  function generateStoicQuote() {
    const randomIndex = Math.floor(Math.random() * stoicQuotes.length);
    return stoicQuotes[randomIndex];
  }
  
//   Example usage
  const randomStoicQuote = generateStoicQuote();
//   console.log(randomStoicQuote);

  // Get the quote display element
    const quoteDisplay = document.getElementById('myQuote');

  // Get the quote button element
    const quoteButton = document.getElementsByClassName('myButton')[0];

  // Event listener for the button click
    quoteButton.addEventListener('click', function() {
    const randomStoicQuote = generateStoicQuote();
    const quote = generateStoicQuote();
    quoteDisplay.textContent = `"${quote}"`;

  });




  