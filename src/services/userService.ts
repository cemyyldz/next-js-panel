import axios from 'axios';


export interface User {
  id: string; 
  name: string;
  surname: string;
  email: string;
  isActive: boolean;
  description: string;
  phone: string;
}

interface ApiUser {
  id: string;
  isim: string;
  soyisim: string;
  email: string;
  telefon: string;
  aciklama: string;
  isActive: boolean;
}

const API_URL = 'https://697e36ac97386252a26a2c01.mockapi.io/kullanici';

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<ApiUser[]>(API_URL);
    return response.data.map((user) => ({
      id: user.id,
      name: user.isim,
      surname: user.soyisim,
      email: user.email,
      phone: user.telefon,
      description: user.aciklama,
      isActive: user.isActive
    }));
  } catch (error) {
    console.error('Kullanıcılar alınırken hata oluştu:', error);
    throw error;
  }
};