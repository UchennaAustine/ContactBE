import { Request, Response } from "express";
import { userModel } from "../model/userModel";

export const createContact = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { contactCategory, phoneNumber, contactName } = req.body;

    const avatar = await contactName.charAt().toUpperCase();

    const User = await userModel.create({
      contactCategory,
      phoneNumber,
      contactName,
      contactAvatar: avatar,
    });

    return res.status(201).json({
      message: `${User?.contactName} contact have being created`,
      data: User,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: `Error creating a contact: ${error.message}`,
      error,
    });
  }
};

export const getAllContacts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await userModel.find().sort({ contactName: 1 });

    if (!user) {
      return res.status(400).json({
        message: "No Available Contacts",
      });
    } else {
      return res.status(201).json({
        message: "All Available Contacts",
        data: user,
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: `Error getting for all contacts: ${error.message}`,
      error,
    });
  }
};

export const getAContact = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { contactID } = req.params;

    const user = await userModel.findById(contactID);

    if (!user) {
      return res.status(404).json({
        message: "Requested User does not exist",
      });
    } else {
      return res.status(200).json({
        message: "Requested user",
        data: user,
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: `Error requesting for a user: ${error.message}`,
      error,
    });
  }
};

export const updateContactDetails = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { contactID } = req.params;
    const { contactCategory, phoneNumber, contactName } = req.body;

    const avatar = await contactName.charAt().toUpperCase();
    const User = await userModel.findByIdAndUpdate(contactID);

    if (!User) {
      return res.status(404).json({
        message: `Invalid user`,
      });
    } else {
      const user = await userModel.findByIdAndUpdate(
        contactID,
        {
          contactCategory,
          phoneNumber,
          contactName,
          contactAvatar: avatar,
        },
        { new: true }
      );

      return res.status(201).json({
        message: "view one",
        data: user,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const getContactByCategory = async (req: Request, res: Response) => {
  try {
    const { contactCategory } = req.body;

    const user = await userModel
      .find({ contactCategory })
      .sort({ contactName: 1 });

    return res.status(200).json({
      message: "View all contacts under requested category",
      data: user,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: `Error requesting for a user: ${error.message}`,
      error,
    });
  }
};

export const getContactByAlphabet = async (req: Request, res: Response) => {
  try {
    const { contactAvatar } = req.params;

    const alphabet = await contactAvatar.toUpperCase();

    const user = await userModel
      .find({ contactAvatar: alphabet })
      .sort({ contactName: 1 });

    return res.status(200).json({
      message: "View all contacts under requested category",
      data: user,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: `Error requesting for a user: ${error.message}`,
      error,
    });
  }
};

export const deleteContact = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { contactID } = req.params;
    const User = await userModel.findById(contactID);

    if (!User) {
      return res.status(404).json({
        message: `Invalid user`,
      });
    } else {
      const user = await userModel.findByIdAndDelete(contactID);

      return res.status(201).json({
        message: "contact have being deleted from your contact list",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: `Error requesting for a category : ${error.message}`,
      error,
    });
  }
};
