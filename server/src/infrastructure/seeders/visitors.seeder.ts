import Visitor from "../../domain/entities/visitor.entity";
import visitorRepository from "../repositories/visitor.Repository";

class VisitorSeeder {
  private visitors: Array<Visitor> = [];
  
  public constructor() {
    this.visitors.push(Visitor.create('IP 1', "nickname1", "pin 1"));
    this.visitors.push(Visitor.create('IP 2', "nickname2", "pin 2"));
    this.visitors.push(Visitor.create('IP 3', "nickname3", "pin 3"));
    this.visitors.push(Visitor.create('IP 4', "nickname4", "pin 4"));
    this.visitors.push(Visitor.create('IP 5', "nickname5", "pin 5"));
  }

  public async generate(): Promise<void> {
    for (const visitor of this.visitors) {
      await visitorRepository.save(visitor);
    }
  }
}

export default new VisitorSeeder();