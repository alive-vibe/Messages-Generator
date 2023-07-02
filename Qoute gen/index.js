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
    "The obstacle is the way.",
    "True happiness is to enjoy the present, without anxious dependence upon the future.",
    "It is not death that a man should fear, but he should fear never beginning to live.",
    "Choose not to be harmed, and you won't feel harmed. Don't feel harmed, and you haven't been.",
    "The soul's job is to reason and understand. A human being's job is to be patient, helpful, and fair-minded.",
    "No person has the power to have everything they want, but it is within their power not to want what they don't have.",
    "He who has a why to live can bear almost any how.",
    "If you want to improve, be content to be thought foolish and stupid.",
    "It's not what happens to you, but how you react to it that matters.",
    "The happiness of your life depends upon the quality of your thoughts.",
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
    const quoteDisplay1 = document.getElementById('myQuote');

    const quoteDisplay2 = document.getElementById('moriRemind');

  // Get the quote button element
    const quoteButton = document.getElementsByClassName('myButton')[0];

    // Memento Mori reminders array
const mementoMoriReminders = [
    "Remember, you will die. Live accordingly.",
  "Do not take anything for granted. Life is fleeting.",
  "Time is precious. Make the most of it.",
  "Death is the great equalizer. Stay humble.",
  "Reflect on your mortality and find meaning in the present.",
  "Each day is a gift. Cherish it.",
  "Remembering death keeps us focused on what truly matters.",
  "Live with intention. Death reminds us of the urgency.",
  "Your time is limited. Don't waste it on trivial matters.",
  "Memento Mori - Remember that you must die.",
  "Embrace the impermanence of life and find beauty in the present moment.",
  "Your legacy is shaped by how you live each day, knowing it could be your last.",
  "Death is the ultimate motivator. Let it inspire you to pursue your dreams.",
  "The awareness of death gives life its true value and significance.",
  "Acknowledge your mortality and let it guide you to live a life of purpose and meaning.",
  "Every breath you take brings you closer to the end. Make it count.",
  "Memento Mori - Remember that time is your most valuable resource.",
  "Let go of trivial worries and focus on what truly matters in the grand scheme of things.",
  "In the face of death, all superficial differences fade away. We are all part of the same journey.",
  "Use the reminder of death to prioritize what truly brings you joy and fulfillment.",
  ];
  
  // Function to generate a random Memento Mori reminder
  function generateMementoMoriReminder() {
    const randomIndex = Math.floor(Math.random() * mementoMoriReminders.length);
    return mementoMoriReminders[randomIndex];
  }

  // Event listener for the button click
    function showQuote() {
    const quote = generateStoicQuote();
    const mori = generateMementoMoriReminder();
    quoteDisplay1.textContent = `"${quote}"`;
    quoteDisplay2.textContent = `"${mori}"`;
    quoteButton.innerHTML = 'Memento Mori';
    quoteButton.removeEventListener('click', showQuote);

  };

  quoteButton.addEventListener('click', showQuote);
  

  