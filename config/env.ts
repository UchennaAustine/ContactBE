import dotenv from "dotenv";
dotenv.config();

export const envs = {
  port: parseInt(process.env.port!) as number,
  db: process.env.DB! as string,
};
