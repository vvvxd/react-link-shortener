const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'),{
    
    })
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

start()
const PORT = config.get('port') || 5000;
app.listen(PORT, () => console.log(`App has been started on port ${PORT} ...`));