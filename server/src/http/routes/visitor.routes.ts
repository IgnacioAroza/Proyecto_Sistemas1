import { Application } from 'express';
import CommonRoutes from './common.routes';
import createVisitorAction from '../actions/create.visitor.action';
import createVisitorCommand  from '../../application/commands/create.visitor.command';
import createVisitorHandler  from '../../application/handlers/create.visitor.handler';

class VisitorRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'Booking');
  }

  public setUpRoutes(): Application {
    this.app.post('/visitor', createVisitorAction.run);
    this.app.get('/visitor/command', createVisitorCommand.run);
    this.app.put('/visitor/handler', createVisitorHandler.run);

    return this.app;
  }
}

export default VisitorRoutes;