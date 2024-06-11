import express from "express";
import authRouter from "./routes/auth.route.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
