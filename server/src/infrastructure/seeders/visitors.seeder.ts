import Visitor from "../../domain/entities/visitor.entity";
import visitorRepository from "../repositories/visitor.repository";

class VisitorSeeder {
  private visitors: Array<Visitor> = [];
  
  public constructor() {
    this.visitors.push(Visitor.create('IP 1', "nickname1"));
    this.visitors.push(Visitor.create('IP 2', "nickname2"));
    this.visitors.push(Visitor.create('IP 3', "nickname3"));
    this.visitors.push(Visitor.create('IP 4', "nickname4"));
    this.visitors.push(Visitor.create('IP 4', "nickname5"));
  }

  public async generate(): Promise<void> {
    for (const visitor of this.visitors) {
      await visitorRepository.save(visitor);
    }
  }
}

export default new VisitorSeeder();