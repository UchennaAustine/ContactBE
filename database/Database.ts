import mongoose from "mongoose";
import { envs } from "../config/env";

const url: string = envs.db;

const Database = async () => {
  try {
    const active = await mongoose.connect(url).then(() => {
      console.log(`Database is Active`);
    });
  } catch (error: any) {
    console.log(`Database error: ${error.message}`);
    console.log(error);
  }
};

export default Database;
