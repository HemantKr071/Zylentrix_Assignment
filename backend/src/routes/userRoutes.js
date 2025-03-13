import express from "express";
import { createUser,updateUser,retrieveAllUsers,retrieveSingleUser,deleteUser } from "../controllers/userController.js";

const router = express.Router();

// Routes
router.post('/', createUser);         // Create a new user

router.get('/', retrieveAllUsers);    // Get all users

router.get('/:id', retrieveSingleUser); // Get a single user by ID

router.put('/:id', updateUser);       // Update a user by ID

router.delete('/:id', deleteUser);    // Delete a user by ID

export default router;
