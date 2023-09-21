import Category from "../../domain/entities/category.entity";
import Claim from "../../domain/entities/claim.entity";
import ClaimRepository from "../../infrastructure/repositories/claim.repository";
import categoryRepository from "../../infrastructure/repositories/category.repository";
import { createClaimCommand } from "../commands/create.claim.command";
import visitorRepository from "../../infrastructure/repositories/visitor.Repository";

class CreateClaimHandler {
    async execute(command: createClaimCommand) {
        if(!command.getCategory().includes(command.getOwner())){
            throw new Error('Owner must be in passengers list');
        }
        //if (command.getFrom() > command.getTo()) {
        //    throw new Error('(From) date must be before (to) date');
        //}
        const owner = await visitorRepository.findOneById(command.getOwner());
        if (!owner) {
          throw new Error('Owner does not exist');
        }
        const categories = command.getCategory();
        const categoriesFromDb: Category[] = [];
        for (let i = 0; i < categories.length; i++) {
            const category = await categoryRepository.findOneById(categories[i]);
            if (!category) {
              throw new Error('Passenger does not exist');
            } else {
                categoriesFromDb.push(category);
            }
        }
        //const visitor = await visitorRepository.findOneById(command.getAccomodation());
        //if (!visitor) {
        //   throw new Error('Accommodation does not exist');
        //}
    
        //const claim = Claim.create(owner, categoriesFromDb, visitor, command.getFrom(), command.getTo());
    
        //await ClaimRepository.save(claim);
    }
}
export default new CreateClaimHandler();