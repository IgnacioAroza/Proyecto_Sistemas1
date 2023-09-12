import Visitor from '../../domain/entities/visitor.entity';



class ClaimRepository{
    private claims:Visitor[];
    public constructor() {
        this.claims = [];
      }
    public async save(visitor: Visitor): Promise<void> {
        const saveVisitor = this.claims.find(a => a.getId() === visitor.getId());
    
        if (saveVisitor) {
          this.claims.splice(this.claims.indexOf(saveVisitor), 1);
        }
        
        this.claims.push(visitor);
      }

      public async findOneById(id: string): Promise<Visitor | null> {
        const claim = this.claims.find(a => a.getId() === id);
        
        return claim ? claim : null;
      }
}

export default new ClaimRepository();


