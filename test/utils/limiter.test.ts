import { describe, expect, test } from 'vitest';

import MockExpressRequest from 'mock-express-request';

import { keygen } from '@utils/limiter.ts';

describe('Rate limiter', async () => {
  test("keygen", async () => {
      const req1 = new (MockExpressRequest as any)({
        method: 'GET',
        url: '/',
        headers: {
          'Cf-Connecting-IP': '1.2.3.4'
        }
      });
      expect(keygen(req1)).toEqual('1.2.3.4')

      const req2 = new (MockExpressRequest as any)();
      expect(keygen(req2)).toBe('localhost')
  })

})
