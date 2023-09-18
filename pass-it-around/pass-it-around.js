const express = require('express');
const app = express();
const port = 3000; // You can choose any port you prefer

// Define a route for the home page
app.get('/', (req, res) => {
  res.redirect('/99'); // Redirect to start with 99 bottles
});

// Define a route for handling the number of bottles
app.get('/:number_of_bottles', (req, res) => {
  const bottles = parseInt(req.params.number_of_bottles, 10);

  // Check if bottles is a valid number
  if (isNaN(bottles) || bottles < 0) {
    return res.status(400).send('Invalid input. Please enter a valid number of bottles.');
  }

  const nextBottles = bottles - 1;
  let message = `${bottles} Bottles of Beer on the Wall`;

  if (bottles > 0) {
    message += `<br><a href="/${nextBottles}">Take one down, pass it around</a>`;
  }

  message += `<br><a href="/">Start over</a>`;

  res.send(`<h1>${message}</h1>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
