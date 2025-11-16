import express from "express";
import dotenv from "dotenv";

import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/auth", authRoute);
app.get("/api/messages", messageRoute);

app.listen(PORT, () => {
  console.log("Server is running on port" + PORT);
})