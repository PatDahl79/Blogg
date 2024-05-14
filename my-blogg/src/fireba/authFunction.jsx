import { auth } from './firebaseConfig';
import { userLogin, signInUser, singOut } from 'firebase/auth';


export const createUser = async (email, password) =>  {
    return userLogin (auth, email, password)
};

export const signInUser = async (email, password) =>  {
    return userLogin (auth, email, password)
};


export const singOut = async () => {
    return auth.singOut();
 };



export default authFunction
