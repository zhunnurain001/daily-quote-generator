const quotes = [
   "Believe you can and you're halfway there.",
   "Push yourself, because no one else is going to do it for you.",
   "Success doesn’t just find you. You have to go out and get it.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
 "Don't watch the clock; do what it does. Keep going.",
 "The harder you work for something, the greater you’ll feel when you achieve it."
  
 ];
//const quotes = [
 // "Talk is cheap. Show me the code. — Linus Torvalds",
  //"First, solve the problem. Then, write the code. — John Johnson",
 // "Programs must be written for people to read, and only incidentally for machines to execute. — Harold Abelson",
  //"Code is like humor. When you have to explain it, it’s bad. — Cory House",
 // "Fix the cause, not the symptom. — Steve Maguire",
 // "Before software can be reusable it first has to be usable. — Ralph Johnson",
 // "Make it work, make it right, make it fast. — Kent Beck",
 // "Experience is the name everyone gives to their mistakes. — Oscar Wilde",
 // "Simplicity is the soul of efficiency. — Austin Freeman",
//  "Deleted code is debugged code. — Jeff Sickel
  //];
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[randomIndex];
  document.getElementById("quote").innerText = quoteText;
}

function copyQuote() {
  const quoteText = document.getElementById("quote").innerText;
  navigator.clipboard.writeText(quoteText).then(() => {
    alert("Quote copied to clipboard!");
  });
}
