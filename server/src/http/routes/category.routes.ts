import { Application } from 'express';
import CommonRoutes from './common.routes';
import GetCategoriesAction from '../actions/getCategories.action';
import GetCategoriesCommand from '../../application/commands/getCategories.command';
import GetCategoriesHandler from '../../application/handlers/getCategories.handlers';



class CategoryRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'Booking');
  }

  public setUpRoutes(): Application {
    this.app.post('/category', GetCategoriesAction.run);
    this.app.get('/category/command', GetCategoriesCommand.run);
    this.app.put('/category/handler', GetCategoriesHandler.run);

    return this.app;
  }
}

export default CategoryRoutes;
