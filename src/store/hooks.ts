import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { darkColors, lightColors, ThemeColors } from './themeSlice';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useThemeColors(): { isDark: boolean; colors: ThemeColors } {
  const mode = useAppSelector((state) => state.theme.mode);
  const isDark = mode === 'dark';
  return { isDark, colors: isDark ? darkColors : lightColors };
}
