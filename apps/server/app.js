import { WaroengDigitalRouter, CafeStreetRouter } from './router.js';
import express from 'express';
import jsonServer from 'json-server';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

export const App = ({ ...app }, next) => {
  server.use(middlewares);
  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  server.use('/public', express.static(path.join(__dirname, 'public')));

  WaroengDigitalRouter(server);

  CafeStreetRouter(server);

  server.use(router);

  server.listen(app.port, next());
};
