import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  surface: string;
  iconButtonBg: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
}

export const lightColors: ThemeColors = {
  background: '#FFFFFF',
  surface: '#FFFFFF',
  iconButtonBg: '#F3F4F6',
  textPrimary: '#000000',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  border: '#F3F4F6',
};

export const darkColors: ThemeColors = {
  background: '#0B0B0F',
  surface: '#16171C',
  iconButtonBg: '#1F2026',
  textPrimary: '#FFFFFF',
  textSecondary: '#A1A1AA',
  textMuted: '#71717A',
  border: '#232428',
};

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
