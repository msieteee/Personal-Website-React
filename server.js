const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Force HTTPS in production
if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] !== "https") {
      // Redirect HTTP to HTTPS
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  });
}

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
