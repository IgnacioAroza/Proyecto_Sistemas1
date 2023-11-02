class CreateLikeCommand {
    private readonly ownerId:string;
    private readonly pin: string;
    private readonly claimId: string;

    constructor(
        ownerId: string,
        pin: string,
        claimId: string,
    ){
        this.ownerId = ownerId;
        this.pin = pin;
        this.claimId = claimId;
    }

    getOwner(): string{
        return this.ownerId;
    }
    
    getPin(): string{
        return this.pin;
    }

    getClaim(): string{
        return this.claimId;
    }
}

export default CreateLikeCommand;