class CreateDislikeCommand {
    private readonly ownerId:string;
    private readonly dislikeCount:number;
    private readonly pin: string;
    private readonly claimId: string;

    constructor(
        ownerId: string,
        dislikeCount: number,
        pin: string,
        claimId: string,
    ){
        this.ownerId = ownerId;
        this.dislikeCount = dislikeCount;
        this.pin = pin;
        this.claimId = claimId;
    }

    getOwner(): string{
        return this.ownerId;
    }
    
    getPin(): string{
        return this.pin;
    }

    getDislike(): number{
        return this.dislikeCount;
    }

    getClaim(): string{
        return this.claimId;
    }
}

export default CreateDislikeCommand;