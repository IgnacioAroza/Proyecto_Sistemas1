import { Application } from 'express';
import CommonRoutes from './common.routes';
import GetCategoriesAction from '../actions/get.categories.action';

class CategoryRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'Booking');
  }

  public setUpRoutes(): Application {
    this.app.post('/category', GetCategoriesAction.run);
    return this.app;
  }
}

export default CategoryRoutes;
