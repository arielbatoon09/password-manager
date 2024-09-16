import { Request, Response } from 'express';
import * as userService from '../services/userServices';
import { createUserSchema, updateUserSchema } from '../schema/userSchema';

// Get All Users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const response = await userService.getAllUsers();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create new User
export const createUser = async (req: Request, res: Response) => {
  // Schema Validation
  const validation = createUserSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).json(validation.error.errors);

  // Init Request
  const { name, email, password } = validation.data;
  try {
    const response = await userService.createUser(name, email, password);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

// Get User by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const response = await userService.getUserById(req.params.id);
    if (!response) return res.status(404).json({ message: 'User not found' });

    return res.json(response);

  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

// Update User
export const updateUser = async (req: Request, res: Response) => {
  // Schema Validation
  const validation = updateUserSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).json(validation.error.errors);

  // Init Request
  const { name, email, password } = validation.data;
  try {
    const response = await userService.updateUser(req.params.id, { name, email, password });
    if (!response) return res.status(404).json({ message: 'User not found' });

    return res.json(response);
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

// Delete User
export const deleteUser = async (req: Request, res: Response) => {
  const response = await userService.deleteUser(req.params.id);
  if (!response) return res.status(404).json({ message: 'User not found' });

  return res.json({ message: 'User removed' });
};