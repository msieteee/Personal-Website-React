const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the static files from the "build" folder
app.use(express.static(path.join(__dirname, "build")));

// Handle React routing — return index.html for all unmatched routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
