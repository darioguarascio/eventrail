import env from '@utils/env.ts'
import { rateLimit } from 'express-rate-limit'
import { Request } from 'express'


// @TODO - considering this could be behind proxies,
// the incoming ip might be contained in some http header
export const keygen = function(req : Request ) : string {
  return req.get('cf-connecting-ip') ?? req.ip ?? 'x';
}


export default rateLimit({
  windowMs: env.LIMITER_WINDOW * 1000,
  limit: env.LIMITER_LIMIT,
  standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  message: {
    error: "Limit reached"
  },
  keyGenerator: keygen,
  // keyGenerator: async (req, _res) => {
  //   return new Promise( (resolve) => resolve( keygen(req) ) )
  // },
  // skip: (req, _res) => {
  //   return iswhitelisted(keygen(req)) ||  !!req.headers['x-skip-limiter']
  // }
})
