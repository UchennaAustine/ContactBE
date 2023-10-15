"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
router.route("/create").post(userController_1.createContact);
router.route("/view-all").get(userController_1.getAllContacts);
router.route("/:contactCategory/view-category").get(userController_1.getContactByCategory);
router.route("/:contactAvatar/view-alpha").get(userController_1.getContactByAlphabet);
router.route("/:contactID/view-one").get(userController_1.getAContact);
router.route("/:contactID/update-one").patch(userController_1.updateContactDetails);
router.route("/:contactID/delete-one").delete(userController_1.deleteContact);
exports.default = router;
