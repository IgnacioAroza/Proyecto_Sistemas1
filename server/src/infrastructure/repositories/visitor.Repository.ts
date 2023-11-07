import Visitor from "../../domain/entities/visitor.entity";

class VisitorRepository {
    private visitor: Visitor[];

    public constructor(){
        this.visitor = [];
    }

    public async save(visitor: Visitor): Promise<void> {
        const saveVisitor = this.visitor.find(a => a.getId() === visitor.getId());

        if(saveVisitor) {
            this.visitor.splice(this.visitor.indexOf(saveVisitor), 1);
        }
        this.visitor.push(visitor);
    }

    public async findOneById(id: string): Promise<Visitor | null> {
        const visitor = this.visitor.find(a => a.getId() === id);
        return visitor ? visitor : null;
    }

    public async findAll(): Promise<Visitor[]> {
        const visitor = this.visitor;
        return visitor;
    }
}

export{VisitorRepository};
export default new VisitorRepository();