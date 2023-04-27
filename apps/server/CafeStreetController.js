import fs from 'fs';
import { timeAgo, getFormattedDate } from './helpers.js';
import db from './coffeeshop.json';

const getAllMenus = async (req, res) => {
  await new Promise((resolve, reject) => {
    try {
      let menus = db.menus.data.map((d) => d);
      resolve(
        res.json({
          message: 'List of caffe street menus',
          data: menus,
        })
      );
    } catch (err) {
      reject(
        res
          .json({
            message: err.message,
          })
          .status(400)
      );
    }
  });
};

const bestRateMenus = async (req, res) => {
  await new Promise((resolve, reject) => {
    try {
      const bests = db.menus.data.map((d) => d);
      const filteringBestRate = bests.filter((d) => d.rate >= 5);
      resolve(
        res.json({
          message: 'Best rate cafe street',
          data: filteringBestRate,
        })
      );
    } catch (err) {
      reject(
        res
          .json({
            message: err.message,
          })
          .status(400)
      );
    }
  });
};

const detailMenuById = async (req, res) => {
  await new Promise((resolve, reject) => {
    try {
      const id = req.params.id;
      const menus = db.menus.data.map((d) => d);
      const filteringById = menus.find((d) => d.id >= id);
      resolve(
        res.json({
          message: 'Get menu by id',
          data: filteringById,
        })
      );
    } catch (err) {
      reject(
        res
          .json({
            message: err.message,
          })
          .status(400)
      );
    }
  });
};

const testPromise = async (req, res) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('Hello');
      resolve();
    }, 1000);
  });
  console.log('world');
};

export { getAllMenus, bestRateMenus, detailMenuById, testPromise };
