import { User, IUser } from '../model/User';

// Fetch all users
export const getAllUsers = async (): Promise<IUser[]> => {
  return await User.find();
};

// Fetch User By Id
export const getUserById = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};

// Create new User
export const createUser = async (name: string, email: string, password: string): Promise<IUser> => {
  const response = new User({ name, email, password });
  return await response.save();
};

// Update an existing user
export const updateUser = async (id: string, updateData: Partial<IUser>): Promise<IUser | null> => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
}

// Delete user
export const deleteUser = async (id: string): Promise<IUser | null> => {
  return await User.findByIdAndDelete(id);
};