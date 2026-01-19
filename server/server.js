import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import dotenv from "dotenv";

dotenv.config({ path: path.resolve("config/.env") });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Force HTTPS in production
if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  });
}

// app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "..", "build")));

// Handle React routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
