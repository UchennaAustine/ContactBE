import mongoose, { Document } from "mongoose";

export interface iUser {
  contactName: string;
  contactAvatar: string;
  phoneNumber: string;
  contactCategory: string;
}

export interface iUserData extends iUser, Document {}
