import express from "express";
import {
  createContact,
  getAContact,
  getAllContacts,
  getContactByAlphabet,
  getContactByCategory,
  updateContactDetails,
} from "../controller/userController";

const router = express.Router();

router.route("/create").post(createContact);
router.route("/view-all").get(getAllContacts);
router.route("/:contactCategory/view-category").get(getContactByCategory);
router.route("/:contactAvatar/view-alpha").get(getContactByAlphabet);
router.route("/:contactID/view-one").get(getAContact);
router.route("/:contactID/update-one").patch(updateContactDetails);
router.route("/:contactID/delete-one").delete(updateContactDetails);

export default router;
