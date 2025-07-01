import cors from 'cors'
import env from '@utils/env.ts'

const corsOptions = {
  "origin": env.CORS_ORIGIN,
  "methods": env.CORS_METHODS,
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

export default cors(corsOptions)