'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { organizationRouter, userRouter } from './app';

const app = express();
app.use(bodyParser.json())
app.use(cors());
app.use('/api/user', userRouter);


export default app