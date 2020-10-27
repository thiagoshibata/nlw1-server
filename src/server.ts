import express from 'express';
import routes from './routes';

const app = express(); //criando aplicação

app.use(express.json());
app.use(routes);

app.listen(3333);

//instalar dependência ts-node -D
//npx tsc --init
//npx ts-node src/server.ts
//npm install ts-node-dev -D