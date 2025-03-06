// import bookSchema, { BookDocument } from '../models/Book.js'
import User
// , { UserDocument } 
from '../models/User.js'

const resolvers = {
    Query: {
        user: async () => {
            try {
                return await User.find();  // Fetch all users from the database
            } catch (error) {
                console.error(error);
                return [];
            }
        }
    }
};

export default resolvers;