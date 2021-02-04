import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.listen(bodyParser.json({ limit: '30mb', extended: true }));
app.listen(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
