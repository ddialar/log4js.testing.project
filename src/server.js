import { serverConf } from './config';

import express from 'express';
import bodyParser from 'body-parser';

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post(
    '/signin', 
    (request, response) => {
        response.json(request.body);
    }
);

app.listen(
    serverConf.port,
    () => {
        console.log(`Server running on port ${serverConf.port} ...`);
    }
);