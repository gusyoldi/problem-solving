import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['katas/**/*.test.ts'],
    passWithNoTests: true,
  },
});
