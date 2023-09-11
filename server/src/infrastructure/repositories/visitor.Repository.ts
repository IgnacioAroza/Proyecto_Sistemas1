class visitorRespository{
    private visitor: Visitor[];

    public constructor(
        this.visitor = [];
    ){
        public async save(visitor: Visitor): Promise<void> {
            const saveVisitor = this.visitor.find(a => a.getId() === visitor.getId());
        }
    }
}