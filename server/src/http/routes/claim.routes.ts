import { Application } from 'express';
import CommonRoutes from './common.routes';
import createClaimAction from '../actions/create.claim.action';

class ClaimRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'Claim');
  }

  public setUpRoutes(): Application {
    this.app.post('/claim', createClaimAction.run);

    return this.app;
  }
}

export default ClaimRoutes;