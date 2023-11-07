import { Application } from 'express';
import CommonRoutes from './common.routes';
import createVisitorAction from '../actions/create.visitor.action';
import findVisitorAction from 'http/actions/find.visitor.action';

class VisitorRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'Visitor');
  }

  public setUpRoutes(): Application {
    this.app.post('/visitor', createVisitorAction.run);
    this.app.get('/visitor', findVisitorAction.run);

    return this.app;
  }
}

export default VisitorRoutes;