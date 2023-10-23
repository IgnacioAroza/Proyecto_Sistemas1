import claimRepository from '../../infrastructure/repositories/claim.repository';

class getOnFireClaimAction {
  static async run(){ return claimRepository.onFireLastHour(); }
}

export default new getOnFireClaimAction();
