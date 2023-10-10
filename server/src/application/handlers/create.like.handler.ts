import CreateLikeCommand from "application/commands/create.like.command";
import { ClaimRepository } from "infrastructure/repositories/claim.repository";
import { VisitorRespository } from "infrastructure/repositories/visitor.repository";

class CreateLikeHandler {
    private visitorRepository: VisitorRespository;
    private claimRepository: ClaimRepository;

    public constructor(
        visitorRepository: VisitorRespository,
        claimRepository: ClaimRepository,
    ){
        this.visitorRepository = visitorRepository;
        this.claimRepository = claimRepository;
    }

    public async excute(command: CreateLikeCommand): Promise<void> {
        const ownerId = await this.visitorRepository.findOneById(command.getOwner());
        if (!ownerId) {
            throw new Error('Owner does not exist');
        }

        // if(ownerId === command.getPin()){}
    }
}