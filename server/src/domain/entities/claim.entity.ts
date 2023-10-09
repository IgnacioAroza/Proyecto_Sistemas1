import Visitor from "./visitor.entity";
import Category from "./category.entity";

class Claim{
    private id:string;
    private owner:Visitor;
    private title:string;
    private description:string;
    private category:Category;
    private location:string;
    private createdAt:Date;
    private cloneOf:Claim;
    private likeCount:string;
    private disLikeCount:string;

    private constructor(
        id:string,
        owner:Visitor,
        title: string,
        description:string,
        category:Category,
        location:string,
        createdAt:Date,
        cloneOf:Claim,
        likeCount: string,
        disLikeCount: string,
    ){
        this.id = id;
        this.owner = owner;
        this.title = title;
        this.description = description;
        this.category = category;
        this.location = location;
        this.createdAt = createdAt;
        this.cloneOf = cloneOf;
        this.likeCount = likeCount;
        this.disLikeCount = disLikeCount;
    }
}

export default Claim;