import express from 'express';

import morgan from '@utils/morgan.ts';
import cors from '@utils/cors.ts'
import router from '@utils/router.ts'


const app = express()

app.use(cors);
app.use(morgan)
app.use("/", router)


export default app;

