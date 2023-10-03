import Category from "../../domain/entities/category.entity";
import categoryRepository from "../../infrastructure/repositories/category.repository";
import { getCategoriesCommand } from "../commands/get.categories.command";

class GetCategoriesHandler {
    async execute(command: getCategoriesCommand) {
        if(!command.getName().includes(command.getColor())){
            throw Error('Color must be in category list');
        }
    }

    //const category = Category
}