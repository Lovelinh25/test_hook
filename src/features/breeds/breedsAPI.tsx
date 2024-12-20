// src/features/breeds/breedsAPI.tsx
import axios from 'axios';

const BASE_URL = 'https://dogapi.dog/api/v2';

// Hàm để gọi API lấy danh sách các giống chó
export const fetchBreedsAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/breeds`);
    return response.data.data;
  } catch (error: any) {
    // Ghi lỗi ra console để giúp debug
    console.error('API fetch error:', error);
    // Ném một lỗi có thông điệp rõ ràng hơn
    throw new Error(error.response?.data?.message || 'Failed to fetch breeds');
  }
};
