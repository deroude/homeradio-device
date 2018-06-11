import express from "express";
import bodyParser from "body-parser";
import shoutcastRoute from "./routes/shoutcast";
import cors from "cors";

const app = express();
const router = express.Router()

app.use(cors());
app.use(bodyParser.json());
app.use("/shoutcast",shoutcastRoute);

app.listen(9090);