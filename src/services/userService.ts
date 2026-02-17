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

const API_URL = 'https://697e36ac97386252a26a2c01.mockapi.io/kullanici';

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Kullanıcılar alınırken hata oluştu:', error);
    throw error;
  }
};