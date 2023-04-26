import fs from 'fs';
import { timeAgo, getFormattedDate } from './helpers.js';
import db from './coffeeshop.json';

const getAllMenus = (req, res) => {
  try {
    let menus = db.menus.data.map((d) => d);

    res.json({
      message: 'List of caffe street menus',
      data: menus,
    });
  } catch (err) {
    res
      .json({
        message: err.message,
      })
      .status(400);
  }
};

const bestRateMenus = (req, res) => {
  try {
    const bests = db.menus.data.map((d) => d);
    const filteringBestRate = bests.filter((d) => d.rate >= 5);
    res.json({
      message: 'Best rate cafe street',
      data: filteringBestRate,
    });
  } catch (err) {
    res
      .json({
        message: err.message,
      })
      .status(400);
  }
};

const detailMenuById = (req, res) => {
  try {
    const id = req.params.id;
    const menus = db.menus.data.map((d) => d);
    const filteringById = menus.find((d) => d.id >= id);
    res.json({
      message: 'Get menu by id',
      data: filteringById,
    });
  } catch (err) {
    res
      .json({
        message: err.message,
      })
      .status(400);
  }
};

export { getAllMenus, bestRateMenus, detailMenuById };
