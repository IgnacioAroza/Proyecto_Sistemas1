import { Application } from 'express';
import CommonRoutes from './common.routes';
import GetCategoriesAction from '../actions/get.categories.action';
import createCategoriesAction from '../actions/create.categories.action';

class CategoryRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'Categories');
  }

  public setUpRoutes(): Application {
    this.app.post('/categories', createCategoriesAction.run)
    this.app.get('/categories', GetCategoriesAction.run);
    return this.app;
  }
}

export default CategoryRoutes;
