const express = require('express');
const app = express();
const port = 3000; // You can choose any port you prefer

//Greeting App
// Define the route for '/greeting/:name'
app.get('/greeting/:name', function(req, res) {
  const { name } = req.params;
  let greetingMessage = `Wow! Whatupdoe, ${name}`;
  res.send(greetingMessage);
});

//Forgot to make a proper message for the commit

//Tip Calculator App
app.get('/tip/:total/:tipPercentage', (req, res) => {
  const { total, tipPercentage } = req.params;

  // Parse the parameters as numbers
  const totalAmount = parseFloat(total);
  const tipPercentageValue = parseFloat(tipPercentage);

  // Calculate the tip amount
  const tipAmount = (totalAmount * (tipPercentageValue / 100)).toFixed(2);

  // Calculate the total amount including the tip
  const totalWithTip = (totalAmount + parseFloat(tipAmount)).toFixed(2);

  res.send(`Total: $${totalWithTip}, Tip: $${tipAmount}`);
});


//Magic 8 ball App
// Array of Magic 8 ball responses
const magic8BallResponses = [
  "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
  "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes",
  "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
  "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"
];

// Define the route for '/magic/:question'
app.get('/magic/:question', (req, res) => {
  const { question } = req.params;

  // Get a random Magic 8 ball response from the array
  const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];

  // Send the question and response as HTML
  res.send(`<h1>Your Question: ${decodeURIComponent(question)}</h1><h1>Magic 8 Ball Response: ${randomResponse}</h1>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

