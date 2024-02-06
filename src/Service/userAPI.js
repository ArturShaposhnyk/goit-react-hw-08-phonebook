import { backAPI } from "./contactsAPI";

export const token = {
    set: token => {
        backAPI.defaults.headers.Authorization = `Bearer ${token}`
    },
    unSet: token => {
        backAPI.defaults.headers.Authorization = '';
    }
};

export const signUpUser = async credentials => {
    return await backAPI.post('users/signup', credentials)
};

export const loginUser = async credentials => {
    return await backAPI.post('users/login', credentials)
};

export const logoutUser = async () => {
    return backAPI.post('users/logout')
};

export const currentUser = async () => {
    return await backAPI.get('users/current')
};