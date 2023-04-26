/* eslint-disable turbo/no-undeclared-env-vars */
import dotenv from 'dotenv';
import { App } from './app.js';
dotenv.config();

const port = process.env.PORT || 6666;
const baseUrl = process.env.BASEURL || 'http://localhost:6666';

const appPackageMapping = {
  baseUrl: baseUrl,
  port: port,
};

App(appPackageMapping, () =>
  console.log(`Server berjalan di port ${baseUrl}:${port}`)
);
