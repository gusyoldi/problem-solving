import { describe, expect, it } from 'vitest';
import { paperwork } from './copy-paperwork.ts';

describe('paperwork', () => {
  it('multiplica la cantidad de compañeros por la cantidad de páginas', () => {
    expect(paperwork(5, 5)).toBe(25);
  });

  it('devuelve 0 cuando la cantidad de compañeros es negativa', () => {
    expect(paperwork(-5, 5)).toBe(0);
  });

  it('devuelve 0 cuando la cantidad de páginas es negativa', () => {
    expect(paperwork(5, -5)).toBe(0);
  });

  it('devuelve 0 cuando no hay compañeros', () => {
    expect(paperwork(0, 5)).toBe(0);
  });

  it('devuelve 0 cuando el papeleo no tiene páginas', () => {
    expect(paperwork(5, 0)).toBe(0);
  });
});
