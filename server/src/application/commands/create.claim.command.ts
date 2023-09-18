export class createClaimCommand {
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
}