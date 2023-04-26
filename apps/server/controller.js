import fs from 'fs';
import { timeAgo, getFormattedDate } from './helpers.js';
import db from './warung.json';

const getHomePage = (req, res, next) => {
  res.json({
    message: 'Welcome To JSON SERVER',
  });
};

const getMenus = async (req, res) => {
  try {
    let menus = db.menus.data.map((d) => d);

    res.json({
      message: 'List of dashboard menus',
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

const getAllProductTypes = (req, res) => {
  try {
    const productTypes = db.product_types.data.map((d) => d);
    res.json({
      message: 'All product types',
      data: productTypes,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

const getProductTypeById = (req, res) => {
  try {
    const id = Number(req.params.id);
    const types = db.product_types.data.map((d) => d);
    const productType = types.find((o) => o.id === id);
    if (productType) {
      res.json({
        message: 'Product type by id',
        data: productType,
      });
    } else {
      res.json({
        message: 'Product not found !',
      });
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

const getProductLists = (req, res) => {
  try {
    const products = db.products.data.map((d) => d);
    const productTypes = db.product_types.data.map((d) => d);
    // console.log(req.query);
    if (req.query.query) {
      const query = req.query.query;
      if (query) {
        const queryRegex = new RegExp(query, 'i');
        const filterProduct = products.filter((p) =>
          queryRegex.test(p.permalink)
        );
        const mappingProduct = {
          products: [...filterProduct],
          types: [...productTypes.filter((t) => t.id === filterProduct[0].id)],
        };

        res.json({
          message: 'List of products',
          data: filterProduct ? mappingProduct : null,
        });
      } else {
        res.json({
          message: 'List of products',
          data: products,
        });
      }
    } else if (req.query.type) {
      const key = req.query.type.toLowerCase();
      const types = db.product_types.data.map((d) => d);
      const queryKey = new RegExp(key, 'g');
      const filterProductType = types.filter((t) => queryKey.test(t.id));

      const productTypes = [
        ...types.filter((t) => t.id === filterProductType[0].id),
      ];

      res.json({
        message: 'List of product type',
        data: productTypes,
      });
    } else {
      res.json({
        message: 'No query in your request!',
        data: products,
      });
    }
  } catch (err) {
    res
      .json({
        message: err.message,
      })
      .status(400);
  }
};

export {
  getMenus,
  getProductLists,
  getProductTypeById,
  getAllProductTypes,
  getHomePage,
};
