import { expect, test } from 'vitest';


import cors from '@utils/cors.ts';

test("CORS", async () => {
  let name = (cors +'').split(/\s|\(/)[1];
  expect(name).toEqual('corsMiddleware')
})
