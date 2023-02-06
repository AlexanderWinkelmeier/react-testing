import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  // ! Test  state
  test('should render the initial count', () => {
    // den custom hook "useCounter" der Funktion renderHook übergeben und dessen Rückgabe speichern
    const { result } = renderHook(useCounter);
    // der state "count" sollte 0 sein
    expect(result.current.count).toBe(0);
  });

  test('should accept and render the same initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  // ! Test setState
  test('should increment the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test('should decrement the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
