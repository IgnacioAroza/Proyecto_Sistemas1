class CreateLikeCommand {
    private readonly ownerId:string;
    private readonly likeCount:number;
    private readonly pin: string;

    constructor(
        ownerId: string,
        likeCount: number,
        pin: string,
    ){
        this.ownerId = ownerId;
        this.likeCount = likeCount;
        this.pin = pin;
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
}

export default CreateLikeCommand;