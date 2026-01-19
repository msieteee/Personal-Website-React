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

app.get("/config", (req, res) => {
  const configData = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
  };
  res.json(configData);
});

// Serve the static files from the "build" folder
app.use(express.static(path.join(__dirname, "..", "build")));

// Handle React routing — return index.html for all unmatched routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
