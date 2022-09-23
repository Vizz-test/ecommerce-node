import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productsRouter from "./routes/productsRouter.js";
import apiAuth from "./middlewares/apiAuth.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", apiAuth, productsRouter);

app.get("/", (req, res) => {
  const token = jwt.sign({ name: "ali" }, jwtSecret);
  const tk =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWxpIiwiaWF0IjoxNjYzODY3MTAyfQ.yKXqzKmaDIXHjMTZZOKoDvXf1j442fqk4HQ-Io45z_g";
  jwt.verify(tk, jwtSecret, (err, decode) => {
    if (err) throw err;
    res.send(decode);
  });
});

app.listen(port, () => {
  console.log(`Server is active on http://localhost:${port}`);
});

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true }, () => {
  console.log("Database established successfuly");
});
