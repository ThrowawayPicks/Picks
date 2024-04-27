const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the Express application
const app = express();

// Apply middleware
app.use(cors()); // Enable All CORS Requests
app.use(bodyParser.json()); // Parse JSON bodies

// POST endpoint for subscription
app.post('/subscribe', (req, res) => {
    // Here you would handle the subscription, e.g., save the email to a database
    const email = req.body.email;
    
    // For now, let's just log it to the console
    console.log('New subscription:', email);

    // Send a response back to the client
    res.json({ message: 'Subscription successful!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
