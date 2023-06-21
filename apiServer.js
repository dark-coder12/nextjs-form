
const express = require('express');
var cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const port = 4000; // Choose a port number for the API server


// Enable CORS
app.use(cors());
app.use(bodyParser.json());
// API endpoint to handle form submissions
app.post('/api/submitForm', (req, res) => {
  const { email, password, confirmPassword } = req.body;

  // Perform your validation and processing logic here
  if (password.length < 6) {
    res.status(400).json({ message: 'Your password length must be greater than 6' });
    return;
  }
  if (password !== confirmPassword) {
    res.status(400).json({ message: 'Password and confirm password fields do not match' });
    return;
  }
  if (!email.includes('@educative.io')) {
    res.status(400).json({ message: 'Email domain does not match' });
    return;
  }

  // Send the form data to your backend or perform any desired actions
  // ...

  // Return a success response
  res.status(200).json({ message: 'Form submitted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
