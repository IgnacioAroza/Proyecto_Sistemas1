class CreateClaimCommand {
    private readonly ownerId:string;
    private readonly title:string;
    private readonly description:string;
    private readonly categoryId:string;
    private readonly location:string;

    constructor(
        ownerId: string,
        title: string,
        description: string,
        categoryId: string,
        location: string,
    ){
        this.ownerId = ownerId;
        this.title = title;
        this.description = description;
        this.categoryId = categoryId;
        this.location = location;
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
}

export default CreateClaimCommand;