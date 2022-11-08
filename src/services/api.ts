/* eslint-disable*/
import axios from 'axios';

const api = axios.create({ baseURL: 'https://piupiuwer.polijrinternal.com' });

const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc4NDMzMDMsImV4cCI6MTY2NzkyOTcwMywic3ViIjoiM2MwZTU4OWQtZGFhMi00N2Q2LTg5MGItM2EyNGMxMzZiNDIzIn0.1RdvtHmqUKJo0-a2bpk12kyavFGvyTKvvuj9EQqul_g';
(api.defaults.headers as any).Authorization = `Bearer ${token}`;

export default api;
