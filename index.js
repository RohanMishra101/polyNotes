
const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Don't worry about being successful but work toward being significant and the success will naturally follow.",
      author: "Oprah Winfrey"
    },
    {
      quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
      author: "Jimmy Dean"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer"
    },
    {
      quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
      author: "C.S. Lewis"
    }
  ];
  
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  function changeText() {
    const quote = getRandomQuote();
    document.querySelector(".quote").innerHTML = `"${quote.quote}"`;
    document.querySelector(".author").innerHTML = `- ${quote.author}`;
  }
  
  changeText(); // generate a random quote and author when the page loads
  


