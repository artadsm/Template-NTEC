import Piu from 'interfaces/Piu';
import api from './api';

interface PiuLikeInterface {
    piu: Piu;
    operation: string;
}

export default class PiusServices {
    static async getPius(): Promise<Piu[]> {
        const response = await api.get('/pius');
        return response.data;
    }

    static async deletePiu(piuId: string) {
        await api.delete(`/pius/${piuId}`);
    }

    static async postPiu(text: string): Promise<Piu> {
        const response = await api.post('/pius', { text });
        return response.data;
    }

    static async likePiu(piuId: string): Promise<PiuLikeInterface> {
        const response = await api.patch(`/pius/like/${piuId}`);
        return response.data;
    }
}
