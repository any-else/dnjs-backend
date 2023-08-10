import express, { Express, Response, Request } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app: Express = express();

//middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//Router

//Handle Error

export default app;
