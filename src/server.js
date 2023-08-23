const express = require("express");
const app = express();

/**
 * app.[method]([route], [route handler])
 */
app.get("/", (req, res) => {
  res.json({
    'message': 'Hello, world!'
  });
});

module.exports = app;