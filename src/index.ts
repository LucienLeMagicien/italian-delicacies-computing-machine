import express from "express";
import cors from "cors";
import "./env";
import { router } from "./api";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT);
