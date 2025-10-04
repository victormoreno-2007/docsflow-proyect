// src/services/authService.ts
import axios from 'axios';
import type { LoginData, AuthResponse, User } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Interceptor para responses
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('authToken');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export const authService = {
    async login(credentials: LoginData): Promise<AuthResponse> {
        // El backend devuelve {access_token, token_type, expires_in}
        const response = await api.post('/auth/login', credentials);
        const { access_token} = response.data;
        
        if (access_token) {
            localStorage.setItem('authToken', access_token);
            
            // Obtener información del usuario después del login exitoso
            const userResponse = await api.get('/users/me', {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            });
            
            return {
                user: userResponse.data,
                token: access_token,
                message: 'Login exitoso'
            };
        }
        
        throw new Error('Token no recibido del servidor');
    },

    async getCurrentUser(): Promise<User> {
        const response = await api.get<User>('/users/me');
        return response.data;
    },

    async logout(): Promise<void> {
        localStorage.removeItem('authToken');
        delete api.defaults.headers.Authorization;
    },

    async validateToken(): Promise<boolean> {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) return false;

            await this.getCurrentUser();
            return true;
        } catch (error) {
            return false;
        }
    }
};

export const authServicePassword = {
  
    async forgotPassword(email: string): Promise<{ message: string }> {
      const response = await api.post<{ message: string }>('/auth/forgot-password', { email });
      return response.data;
    },
  
    async resetPassword(token: string, password: string): Promise<{ message: string }> {
      const response = await api.post<{ message: string }>('/auth/reset-password', { 
        token, 
        new_password: password 
      });
      return response.data;
    },
  
    // Función simple para verificar si el token existe
    async validateResetToken(token: string): Promise<{ valid: boolean; email?: string }> {
      // Simplemente verificamos que el token exista como parámetro
      // La validación real se hará cuando el usuario intente resetear
      return { valid: !!token && token.length > 10 };
    }
  };