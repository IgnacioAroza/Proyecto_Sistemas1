class CreateLikeCommand {
    private readonly ownerId:string;
    private readonly likeCount:number;
    private readonly pin: string;
    private readonly claimId: string;

    constructor(
        ownerId: string,
        likeCount: number,
        pin: string,
        claimId: string,
    ){
        this.ownerId = ownerId;
        this.likeCount = likeCount;
        this.pin = pin;
        this.claimId = claimId;
    }

    getOwner(): string{
        return this.ownerId;
    }
    
    getPin(): string{
        return this.pin;
    }

    getLike(): number{
        return this.likeCount;
    }

    getClaim(): string{
        return this.claimId;
    }
}

export default CreateLikeCommand;