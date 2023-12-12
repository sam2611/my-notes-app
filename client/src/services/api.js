import axios from 'axios';
import { LOGIN } from './apiConstans';

export const login = async (data) => {
    return axios.post(LOGIN , data)
}