import Category from "../../domain/entities/category.entity";
import categoryRepository, { CategoryRespository } from "../../infrastructure/repositories/category.repository";
import getCategoriesCommand from "../commands/get.categories.command";

class GetCategoriesHandler {
    private categoryRepository: CategoryRespository;

    public constructor(
        categoryRepository: CategoryRespository,
    ){
        this.categoryRepository = categoryRepository;
    }

    public async execute(command: getCategoriesCommand): Promise<void>{
        const category = Category.create(
            command.getColor(),
            command.getName()
        )

        await this.categoryRepository.save(category);
    }
}

export default new GetCategoriesHandler(categoryRepository);