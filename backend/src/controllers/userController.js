import User from '../models/User.js';
import userValidationSchema from './userValidationSchema.js';

//Create a User
export const createUser = async (req,res) => {
    try {
        const validatedData = userValidationSchema.parse(req.body);
        const newUser = new User(validatedData);
        
        await newUser.save();
        
        res.status(201).json({
            message:"User Created Successfully",
            user:newUser
        });
    
    } catch (error) {
        res.status(400).json({ 
            message: 'Invalid input', error 
        });
    }
};

// Retrieve All Users
export const retrieveAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    
    } catch (error) {
        res.status(500).json({
             message: 'Error fetching users', error 
        });
    }
};

// Retrieve a Single User
export const retrieveSingleUser =  async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        
        if (!user) return res.status(404).json({
            message: 'User not found' 
        });
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({
             message: 'Error fetching user', error
         });
    }
};

// Update a User
export const updateUser =  async (req, res) => {
    try {
        const validatedData = userValidationSchema.partial().parse(req.body);
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            validatedData, { 
                new: true, runValidators: true 
        });
       
        if (!updatedUser) 
            return res.status(404).json({
            message: 'User not found' 
        });
        
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({
             message: 'Invalid input',error 
        });
    }
};

// Delete a User
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
       
        if (!deletedUser){
            return res.status(404).json({
                 message: 'User not found' 
            });
        }
        res.status(200).json({ 
            message: 'User deleted successfully' 
        });
    } catch (error) {
        res.status(500).json({
             message: 'Error deleting user', error 
        });
    }
};
