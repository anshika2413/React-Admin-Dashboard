const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();
const port = 3000;

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/BlackCoffer';

// Connect to the MongoDB server
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  
    // Define a mongoose schema and model for your collection
    const dataSchema = mongoose.Schema({
      // Define your schema fields
      field1: String,
      field2: Number,
      field3: String,
      field4: String,
      field5: String,
      field6: String,
      field7: String,
      field8: String,
      field9: String,
      field10: String,
      field11: String,
      field12: String,
      field13: Number,
      field14: String,
      field15: String,
      field16: String,
      field17: Number,

    });

    // Specify the custom collection name
    const collectionName = 'Db1';
  
    const DataModel = mongoose.model('Data', dataSchema, collectionName);

    // Define a route to retrieve data from MongoDB
    app.get('/data', async (req, res) => {
        try {
          const documents = await DataModel.find({}).exec();
          res.json(documents);

          fs.writeFileSync('data.json', JSON.stringify(documents));

         console.log('Data saved to file.');
        } catch (err) {
          console.error('Failed to fetch data:', err);
          res.status(500).send('Internal Server Error');
        }
      });
    // Start the server
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });

 

    // Save the data in a file
    