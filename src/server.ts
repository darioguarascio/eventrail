import http from 'http'
import env from '@utils/env.ts'
import express from '@utils/express.ts'


http.createServer(express).listen(env.LISTENING_PORT, () => {
  console.log(`http listening on ${env.LISTENING_PORT}`)
});
