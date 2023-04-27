import {
  getMenus,
  getProductLists,
  getProductTypeById,
  getAllProductTypes,
  getHomePage,
} from './controller.js';

import {
  getAllMenus,
  bestRateMenus,
  detailMenuById,
  testPromise,
} from './CafeStreetController.js';

export const WaroengDigitalRouter = (app) => {
  app.get('/', getHomePage);

  app.get('/menus', getMenus);

  app.get('/product-lists', getProductLists);

  app.get('/product-type/:id', getProductTypeById);

  app.get('/product-types/', getAllProductTypes);
};

export const CafeStreetRouter = (app) => {
  app.get('/list-menus', getAllMenus);
  app.get('/best-rate', bestRateMenus);
  app.get('/detail-menu/:id', detailMenuById);
  app.get('/testing', testPromise);
};
