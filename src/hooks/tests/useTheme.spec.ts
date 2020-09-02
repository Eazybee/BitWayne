import { renderHook, act, RenderHookResult} from '@testing-library/react-hooks';
import useTheme, { ThemeType, ThemeMode } from '../useTheme';

describe('useTheme', () => {
  beforeEach(() => {
    window.localStorage.removeItem('theme');
  });

  it('should return theme', () => {
    const { result } = renderHook(() => useTheme());
    const { theme } = result.current as { theme: ThemeType };

    expect(theme.mode).toEqual(ThemeMode.Light);
  });


  it('should update the theme', () => {
    const { result } = renderHook(() => useTheme());

    const { theme: initialTheme } = result.current as { theme: ThemeType };
    expect(initialTheme.mode).toEqual(ThemeMode.Light);

    act(() => {
      initialTheme.changeTheme(ThemeMode.Dark);
    });

    const { theme: updatedTheme } = result.current as { theme: ThemeType };
    expect(updatedTheme.mode ).toEqual(ThemeMode.Dark);

    act(() => {
      initialTheme.changeTheme(ThemeMode.Light);
    });

    const { theme: anotherUpdatedTheme } = result.current as { theme: ThemeType };
    expect(anotherUpdatedTheme.mode ).toEqual(ThemeMode.Light);
  });

  it('should not update the theme', () => {
    const { result } = renderHook(() => useTheme());
    const { theme: initialTheme } = result.current as { theme: ThemeType };

    expect(initialTheme.mode).toEqual(ThemeMode.Light);

    act(() => {
      initialTheme.changeTheme(ThemeMode.Light);
    })

    const { theme: updatedTheme } = result.current as { theme: ThemeType };

    expect(updatedTheme).toEqual(initialTheme);

  });

  it('should update theme mode from local storage', () => {
    window.localStorage.setItem('theme', ThemeMode.Dark);

    const { result } = renderHook(() => useTheme());
    const { theme: initialTheme } = result.current as { theme: ThemeType };

    expect(initialTheme.mode).toEqual(ThemeMode.Dark);
  })
});


