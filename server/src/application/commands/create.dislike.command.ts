class CreateDislikeCommand {
    private readonly ownerId:string;
    private readonly dislikeCount:number | null;

    constructor(
        ownerId: string,
        dislikeCount: number | null,
    ){
        this.ownerId = ownerId;
        this.dislikeCount = dislikeCount;
    }

    getOwner(): string{
        return this.ownerId;
    }
    
    getDislikeCount(): number | null{
        return this.dislikeCount;
    }
}

export default CreateDislikeCommand;