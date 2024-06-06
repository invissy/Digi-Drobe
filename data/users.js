import { users } from "../config/mongoCollections.js";

const getAllUsers = async () => {
    const userCollection = await users();
    return userCollection.find({}).toArray();
}

const createUser = async (username, firstName, lastName, birthday, email, password) => {

}