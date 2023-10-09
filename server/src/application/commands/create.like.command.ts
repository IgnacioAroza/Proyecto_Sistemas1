class CreateLikeCommand {
    private readonly ownerId:string;
    private readonly likeCount:number | null;

    constructor(
        ownerId: string,
        likeCount: number | null,
    ){
        this.ownerId = ownerId;
        this.likeCount = likeCount;
    }

    getOwner(): string{
        return this.ownerId;
    }
    
    getLikeCount(): number | null{
        return this.likeCount;
    }
}

export default CreateLikeCommand;