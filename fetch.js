const fs = require('fs');
const axios = require('axios');

// Make the API request
axios.get('http://localhost:3000/data')
  .then(response => {
    // Parse the API response
    const data = response.data;

    // Store the data in a file
    fs.writeFileSync('data.json', JSON.stringify(data));

    console.log('Data saved to file.');
  })
  .catch(error => {
    console.error('Error:', error);
  });
