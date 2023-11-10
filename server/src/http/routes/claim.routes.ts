import { Application } from 'express';
import CommonRoutes from './common.routes';
import createClaimAction from '../actions/create.claim.action';
import createLikeAction from '../actions/create.like.action';
import getLastClaimsByVisitorAction from '../actions/get.last.claims.by.visitor.action';
import findLastClaimsAction from '../actions/find.last.claims.action';
import getOnfireclaimAction from '../actions/get.onfireclaim.action';
import reportClaimAction from '../actions/report.claim.action';

class ClaimRoutes extends CommonRoutes {
  public constructor(app: Application) {
    super(app, 'Claim');
  }

  public setUpRoutes(): Application {
    this.app.post('/claim', createClaimAction.run);
    this.app.put('/claim/like', createLikeAction.run);
    this.app.put('/claim/:id/report', reportClaimAction.run);
    this.app.get('/claim/visitor/:visitorId', getLastClaimsByVisitorAction.run);
    this.app.get('/claim', findLastClaimsAction.run);
    this.app.get('/claim/on-fire', getOnfireclaimAction.run);
    
    return this.app;
  }
}

export default ClaimRoutes;