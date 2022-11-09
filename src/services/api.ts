/* eslint-disable*/
import axios from 'axios';

const api = axios.create({ baseURL: 'https://piupiuwer.polijrinternal.com' });

const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc4NzcwNDAsImV4cCI6MTY2Nzk2MzQ0MCwic3ViIjoiODMwNDkwOGEtNmY2ZC00NjE1LThjNDgtN2ZkNDdlYTViNGNiIn0.vLm90xf7s1P9GNTlQWpXG2L99nny7b04-q4QVLOfuug';
(api.defaults.headers as any).Authorization = `Bearer ${token}`;

export default api;
