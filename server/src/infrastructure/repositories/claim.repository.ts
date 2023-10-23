import Claim from '../../domain/entities/claim.entity';

class ClaimRepository{
  private claims:Claim[];

  public constructor() {
    this.claims = [];
  }

  public async save(claim: Claim): Promise<void> {
    const saveClaim = this.claims.find(a => a.getId() === claim.getId());
    
    if (saveClaim) {
      this.claims.splice(this.claims.indexOf(saveClaim), 1);
    }
        
    this.claims.push(claim);
  }

  public async findOneById(id: string): Promise<Claim | null> {
    const claim = this.claims.find(a => a.getId() === id);
    return claim ? claim : null;
  }

  public async onFireLastHour(): Promise<Array<Claim>> {
    let lastHour = new Date;
    lastHour.setHours(lastHour.getHours() - 1);

    const recentClaims = this.claims.filter(claim => claim.getCreatedAt() >= lastHour);

    recentClaims.sort((a, b) => b.getLike() - a.getLike());
    
    return recentClaims.slice(0, 4);
  }
}

export{ClaimRepository};
export default new ClaimRepository();


