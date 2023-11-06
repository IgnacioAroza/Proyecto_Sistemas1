import claimRepository, {ClaimRepository} from "../../../infrastructure/repositories/claim.repository";
import {ReportClaimCommand} from "../../application/commands/report.claim.command"


export class ReportClaimCommand {

  constructor(
    private claimRepository: ClaimRepository,
  ) {
  }

  public async handle(command: ReportClaimCommand): Promise<void> {

    const duplicatedClaim = await this.claimRepository.findOneById(command.getId());

    if (!duplicatedClaim) {
      throw new Error('Claim not found');
    }

    const originalClaim = await this.claimRepository.findOneById(command.getOriginalId());

    if (!originalClaim) {
      throw new Error('Claim not found');
    }

    duplicatedClaim.report(originalClaim);
  }
}

export default new ReportClaimCommand(claimRepository)