document.addEventListener('DOMContentLoaded', function () {
    // Select the form
    const form = document.getElementById('subscribeForm');

    // Add an event listener for the submit event
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the email address from the form
        const email = document.getElementById('email').value;

        // Define the data to be sent
        const data = {
            email: email
        };

        // Send the data to the server
        fetch('https://example.com/subscribe', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())  // Assuming the server responds with JSON
        .then(data => {
            console.log('Success:', data);
            alert('Thank you for subscribing!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});