import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../model';
import { LOCAL_STORAGE_KEY_NAME } from '@/shared/enums/localStorageKeyName';

const {IS_AUTHENTICATED, USER_NAME} = LOCAL_STORAGE_KEY_NAME

const initialState: IAuthState = {
  isAuthenticated: localStorage.getItem(IS_AUTHENTICATED) === 'true',
  username: localStorage.getItem(USER_NAME) || ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
      localStorage.setItem(IS_AUTHENTICATED, 'true');
      localStorage.setItem(USER_NAME, action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = '';
      localStorage.removeItem(IS_AUTHENTICATED);
      localStorage.removeItem(USER_NAME);
    }
  }
});
export const {login, logout} = authSlice.actions
export const authReducer = authSlice.reducer