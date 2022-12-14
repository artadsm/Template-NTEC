import { AxiosResponse } from 'axios';

import User from 'interfaces/User';
import { setCookie } from 'nookies';

import api from './api';

interface ILoginRequest {
    email: string;
    password: string;
}

interface ILoginResponse {
    token: string;
    user: User;
}

export default class UserService {
    static async login(data: ILoginRequest): Promise<ILoginResponse> {
        const response: AxiosResponse<ILoginResponse> = await api.post(
            '/session/login',
            data
        );

        setCookie(undefined, '@app:token', response.data.token);
        setCookie(undefined, '@app:useId', response.data.user.id);

        return response.data;
    }

    static async getUsers(): Promise<User[]> {
        const response = await api.get('/users');
        return response.data;
    }

    static async getUser(id: string): Promise<User> {
        const response = await api.get(`/users/${id}`);
        return response.data;
    }
}
