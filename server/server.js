import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import path from "path";
import { fileURLToPath } from "url";
import { schema } from "./schema.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const ORIGIN_LINK = "https://www.miguelsietereales.com";

const corsOptions =
  process.env.NODE_ENV === "production"
    ? {
        origin: ORIGIN_LINK,
        methods: ["POST"],
        allowedHeaders: ["Content-Type", "X-Requested-With"],
      }
    : {
        origin: true,
      };

app.use(cors(corsOptions));

// Force HTTPS in production
if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  });
}

app.use("/graphql", (req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    if (req.method !== "POST") {
      return res.sendStatus(405);
    }

    if (!req.is("application/json")) {
      return res.sendStatus(415);
    }

    const origin = req.headers.origin;
    if (origin && origin !== ORIGIN_LINK) {
      return res.sendStatus(403);
    }

    if (!req.headers["x-requested-with"]) {
      return res.sendStatus(403);
    }
  }

  next();
});
app.use(
  "/graphql",
  graphqlHTTP({ schema, graphiql: process.env.NODE_ENV !== "production" }),
);

// Serve static files
app.use(express.static(path.join(__dirname, "..", "build")));

// Handle React routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
