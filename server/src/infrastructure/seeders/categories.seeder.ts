import Category from "../../domain/entities/category.entity";
import categoryRepository from "../repositories/category.repository";

class CategoriesSeeder {
  private categories: Array<Category> = [];
  
  public constructor() {
    this.categories.push(Category.create('Categoria 1', "Rojo"));
    this.categories.push(Category.create('Categoria 2', "Azul"));
    this.categories.push(Category.create('Categoria 3', "Verde"));
    this.categories.push(Category.create('Categoria 4', "Amarillo"));
    this.categories.push(Category.create('Categoria 4', "Celeste"));
  }

  public async generate(): Promise<void> {
    for (const category of this.categories) {
      await categoryRepository.save(category);
    }
  }
}

export default new CategoriesSeeder();