import { Application } from 'express';
import CommonRoutes from './common.routes';
import createClaimCommand from '../../application/commands/create.claim.command';
import createClaimAction from '../actions/create.claim.action';
import createClaimHandler from '../../application/handlers/create.claim.handler';

class ClaimRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'Claim');
  }

  public setUpRoutes(): Application {
    this.app.post('/claim', createClaimAction.run);
    this.app.get('/claim/command', createClaimCommand.run);
    this.app.put('/claim/handler', createClaimHandler.run);

    return this.app;
  }
}

export default ClaimRoutes;