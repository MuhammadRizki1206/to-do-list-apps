import environment from "dotenv";
import cors from "cors";
import express from "express";

environment.config();

const app = express();
const PORT = process.env.SERVER_PORT_DEV;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on Port : ${PORT}`);
});
