import Category from "../../domain/entities/category.entity";
import Claim from "../../domain/entities/claim.entity";
import categoryRepository, { CategoryRespository } from "../../infrastructure/repositories/category.repository";
import { createClaimCommand } from "../commands/create.claim.command";
import visitorRepository, { VisitorRespository } from "../../infrastructure/repositories/visitor.Repository";
import claimRepository, { ClaimRepository } from "../../infrastructure/repositories/claim.repository";

class CreateClaimHandler {
    private claimRepository: ClaimRepository;
    private visitorRepository: VisitorRespository;
    private categoryRepository: CategoryRespository
    
    public constructor(
        claimRepository: ClaimRepository,
        visitorRepository: VisitorRespository,
        categoryRepository: CategoryRespository
        ){
        this.claimRepository = claimRepository;
        this.visitorRepository = visitorRepository;
        this.categoryRepository = categoryRepository;
    }


    public async execute(command: createClaimCommand): Promise<void> {
        if(!command.getCategory().includes(command.getOwner())){
            throw new Error('Claim must be in claims list');
        }
        const owner = await claimRepository.findOneById(command.getOwner());
        if (!owner) {
            throw new Error('Owner does not exist');
        }
        const title = await claimRepository.findOneById(command.getTitle());
        if (!title){
            throw new Error('Title does not exist');
        }
        const description = await claimRepository.findOneById(command.getDescription());
        if (!description){
            throw new Error('Description does not exist');
        }
        const category = await claimRepository.findOneById(command.getCategory());
        if (!category){
            throw new Error('Category does not exist');
        }
        const location = await claimRepository.findOneById(command.getLocation());
        if (!location){
            throw new Error('Location does not exist');
        }
        const categories = command.getCategory();
        const categoriesFromDb: Category[] = [];
        for (let i = 0; i < categories.length; i++) {
            const category = await categoryRepository.findOneById(categories[i]);
            if (!category) {
                throw new Error('Category does not exist');
            } else {
                categoriesFromDb.push(category);
            }
        }

        //const claim = Claim()

        //await ClaimRepository.save();
    }
}
export default new CreateClaimHandler(
    claimRepository,
    visitorRepository,
    categoryRepository
);