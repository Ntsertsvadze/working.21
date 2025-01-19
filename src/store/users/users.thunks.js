import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    '/users/GET',
    async (_, ThunkAPI) => {
        try {
            const res = await fetch('https://example.com/api/v1/users', { 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            });
            
            if (!res.ok) {
                throw new Error('Failed to fetch users');
            }

            const data = await res.json();
            return data.items;  
        } catch (error) {
            return ThunkAPI.rejectWithValue(error.message || 'Something went wrong');
        }
    }
);
