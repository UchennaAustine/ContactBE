import express, { Application, Request, Response } from "express";
import cors from "cors";
import user from "./router/router";

export const App = (app: Application) => {
  try {
    app.use(express.json());
    app.use(cors());

    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "Welcome",
        });
      } catch (error: any) {
        return res.status(400).json({
          message: `app route error:${error}`,
        });
      }
    });
    app.use("/api", user);
  } catch (error: any) {
    console.log(`Application Error: ${error}`);
  }
};
