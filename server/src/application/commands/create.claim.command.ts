class CreateClaimCommand {
    private readonly ownerId:string;
    private readonly title:string;
    private readonly description:string;
    private readonly categoryId:string;
    private readonly location:string;
    private readonly likeCount:number;
    private readonly dislikeCount:number;

    constructor(
        ownerId: string,
        title: string,
        description: string,
        categoryId: string,
        location: string,
        likeCount: number,
        dislikeCount: number
    ){
        this.ownerId = ownerId;
        this.title = title;
        this.description = description;
        this.categoryId = categoryId;
        this.location = location;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
    }

    getOwner(): string{
        return this.ownerId;
    }
    getTitle(): string{
        return this.title;
    }
    getDescription(): string{
        return this.description;
    }
    getCategory(): string{
        return this.categoryId;
    }
    getLocation(): string{
        return this.location;
    }
    getLike(): number{
        return this.likeCount;
    }
    getDislike(): number{
        return this.dislikeCount;
    }
}

export default CreateClaimCommand;