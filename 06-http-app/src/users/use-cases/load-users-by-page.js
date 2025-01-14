import { localhostUserToModel } from "../mappers/localhost-user.mappers";
import { User } from "../models/users";


/**
 * 
 * @param {Number} page 
 * @returns { Promise<User[]> }
 */
export const loadUsersByPage = async( page = 1 ) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    const users = data.data.map( localhostUserToModel );
    // console.log(users)  [User, User, User, x7]

    return users;
} 