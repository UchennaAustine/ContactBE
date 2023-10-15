"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.getContactByAlphabet = exports.getContactByCategory = exports.updateContactDetails = exports.getAContact = exports.getAllContacts = exports.createContact = void 0;
const userModel_1 = require("../model/userModel");
const createContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactCategory, phoneNumber, contactName } = req.body;
        const avatar = yield contactName.charAt().toUpperCase();
        const User = yield userModel_1.userModel.create({
            contactCategory,
            phoneNumber,
            contactName,
            contactAvatar: avatar,
        });
        return res.status(201).json({
            message: `${User === null || User === void 0 ? void 0 : User.contactName} contact have being created`,
            data: User,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: `Error creating a contact: ${error.message}`,
            error,
        });
    }
});
exports.createContact = createContact;
const getAllContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.userModel.find().sort({ contactName: 1 });
        if (!user) {
            return res.status(400).json({
                message: "No Available Contacts",
            });
        }
        else {
            return res.status(201).json({
                message: "All Available Contacts",
                data: user,
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: `Error getting for all contacts: ${error.message}`,
            error,
        });
    }
});
exports.getAllContacts = getAllContacts;
const getAContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactID } = req.params;
        const user = yield userModel_1.userModel.findById(contactID);
        if (!user) {
            return res.status(404).json({
                message: "Requested User does not exist",
            });
        }
        else {
            return res.status(200).json({
                message: "Requested user",
                data: user,
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: `Error requesting for a user: ${error.message}`,
            error,
        });
    }
});
exports.getAContact = getAContact;
const updateContactDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactID } = req.params;
        const { contactCategory, phoneNumber, contactName } = req.body;
        const avatar = yield contactName.charAt().toUpperCase();
        const User = yield userModel_1.userModel.findByIdAndUpdate(contactID);
        if (!User) {
            return res.status(404).json({
                message: `Invalid user`,
            });
        }
        else {
            const user = yield userModel_1.userModel.findByIdAndUpdate(contactID, {
                contactCategory,
                phoneNumber,
                contactName,
                contactAvatar: avatar,
            }, { new: true });
            return res.status(201).json({
                message: "view one",
                data: user,
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error",
        });
    }
});
exports.updateContactDetails = updateContactDetails;
const getContactByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactCategory } = req.body;
        const user = yield userModel_1.userModel
            .find({ contactCategory })
            .sort({ contactName: 1 });
        return res.status(200).json({
            message: "View all contacts under requested category",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `Error requesting for a user: ${error.message}`,
            error,
        });
    }
});
exports.getContactByCategory = getContactByCategory;
const getContactByAlphabet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactAvatar } = req.params;
        const alphabet = yield contactAvatar.toUpperCase();
        const user = yield userModel_1.userModel
            .find({ contactAvatar: alphabet })
            .sort({ contactName: 1 });
        return res.status(200).json({
            message: "View all contacts under requested category",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `Error requesting for a user: ${error.message}`,
            error,
        });
    }
});
exports.getContactByAlphabet = getContactByAlphabet;
const deleteContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactID } = req.params;
        const User = yield userModel_1.userModel.findById(contactID);
        if (!User) {
            return res.status(404).json({
                message: `Invalid user`,
            });
        }
        else {
            const user = yield userModel_1.userModel.findByIdAndDelete(contactID);
            return res.status(201).json({
                message: "contact have being deleted from your contact list",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: `Error requesting for a category : ${error.message}`,
            error,
        });
    }
});
exports.deleteContact = deleteContact;
