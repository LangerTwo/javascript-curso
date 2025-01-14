import { User } from "../models/users";


/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = ( localhostUser ) => { 

    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localhostUser;

    return new User({
        id,
        isActive,
        balance,
        avatar,
        gender,
        firstName: first_name,
        lastName: last_name
    })
}