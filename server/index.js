const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const connectDB = require('./config/db')

// routes
const experiment = require('./routes/api/experiment');

// Connect Database
connectDB();

// BodyParser MiddleWare
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// cors
app.use(cors({ origin: true, credentials: true }));

app.use("/api/experiment", experiment);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('frontend/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}