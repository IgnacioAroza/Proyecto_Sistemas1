import Claim from "../../domain/entities/claim.entity";
import categoryRepository, { CategoryRespository } from "../../infrastructure/repositories/category.repository";
import CreateClaimCommand  from "../commands/create.claim.command";
import visitorRepository, { VisitorRepository } from "../../infrastructure/repositories/visitor.Repository";
import claimRepository, { ClaimRepository } from "../../infrastructure/repositories/claim.repository";

class CreateClaimHandler {
    private claimRepository: ClaimRepository;
    private visitorRepository: VisitorRepository;
    private categoryRepository: CategoryRespository
    
    public constructor(
        claimRepository: ClaimRepository,
        visitorRepository: VisitorRepository,
        categoryRepository: CategoryRespository
        ){
        this.claimRepository = claimRepository;
        this.visitorRepository = visitorRepository;
        this.categoryRepository = categoryRepository;
    }

    public async execute(command: CreateClaimCommand): Promise<void> {
        if(!command.getCategory().includes(command.getOwner())){
            throw new Error('Claim must be in claims list');
        }
        const owner = await this.visitorRepository.findOneById(command.getOwner());
        if (!owner) {
            throw new Error('Owner does not exist');
        }
        
        const category = await this.categoryRepository.findOneById(command.getCategory());
        if (!category){
            throw new Error('Category does not exist');
        }


        const claim = Claim.create(
            owner,
            command.getTitle(),
            command.getDescription(),
            category,
            command.getLocation()
        )

        await this.claimRepository.save(claim);
    }
}

export default new CreateClaimHandler(
    claimRepository,
    visitorRepository,
    categoryRepository
);