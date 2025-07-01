import { expect, test } from 'vitest';


import env from '@utils/env.ts';

test("GET /", async () => {
  expect(env).toEqual(
{
  "APP_ENV": "dev",
  "CORS_METHODS": "GET,POST",
  "CORS_ORIGIN": ["*"],
  "LISTENING_PORT": 3000,
  "LIMITER_LIMIT": 3,
  "LIMITER_WINDOW": 900,
  "VERSION": "0.0.0",

})

})
