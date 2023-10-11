import { v4 } from 'uuid';
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
    private cloneOf: Claim | null;
    private likeCount: number;
    private dislikeCount: number;

    private constructor(
        id:string,
        owner:Visitor,
        title: string,
        description:string,
        category:Category,
        location:string,
        createdAt:Date,
        cloneOf:Claim | null,
        likeCount: number,
        dislikeCount: number,
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
        this.dislikeCount = dislikeCount;
    }
    
    public static create(
        owner: Visitor,
        title: string,
        description:string,
        category:Category,
        location:string,
        likeCount:number,
        dislikeCount: number,
    ): Claim {
        return new Claim(
            v4(),
            owner,
            title,
            description,
            category,
            location,
            new Date(),
            null,
            likeCount,
            dislikeCount
        );
    }

    public getId():string{
        return this.id;
    }

    public getOwner():Visitor{
        return this.owner;
    }

    public getTitle():string{
        return this.title;
    }

    public getDescripcion():string{
        return this.description;
    }

    public getCategory():Category{
        return this.category;
    }

    public getLocation():string{
        return this.location;
    }

    public getCreatedAt():Date{
        return this.createdAt;
    }

    public getCloneOf():Claim | null{
        return this.cloneOf;
    }

    public addLike(): void {
        this.likeCount++;
    }

    public addDislike(): void {
        this.dislikeCount++;
    }

    public getLike(): number{
        return this.likeCount;
    }

    public getDislike(): number{
        return this.dislikeCount;
    }
}

export default Claim;