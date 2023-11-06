import {v4} from 'uuid';
import Visitor from "./visitor.entity";
import Category from "./category.entity";

class Claim{
    private id:string;
    private owner:Visitor;
    private title: string;
    private description:string;
    private category:Category;
    private location:string;
    private createdAt:Date;
    private cloneOf: Claim | null;

    private constructor(
        id:string,
        owner:Visitor,
        title: string,
        description:string,
        category:Category,
        location:string,
        createdAt:Date,
        cloneOf:Claim | null,
    ){
        this.id = id;
        this.owner = owner;
        this.title = title;
        this.description = description;
        this.category = category;
        this.location = location;
        this.createdAt = createdAt;
        this.cloneOf = cloneOf;
    }
    
    public static create(
        owner: Visitor,
        title: string,
        description:string,
        category:Category,
        location:string
    ): Claim {
        return new Claim(
            v4(),
            owner,
            title,
            description,
            category,
            location,
            new Date(),
            null
        );
    }

  public static create(
    owner: Visitor,
    title: string,
    description: string,
    category: Category,
    location: string,
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
    );
  }

  public getId(): string {
    return this.id;
  }

  public getOwner(): Visitor {
    return this.owner;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescripcion(): string {
    return this.description;
  }

  public getCategory(): Category {
    return this.category;
  }

  public getLocation(): string {
    return this.location;
  }

    public getCloneOf():Claim | null{
        return this.cloneOf;
    }
  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getCloneOf(): Claim | null {
    return this.cloneOf;
  }

  public addLike(id: string): void {
    if (this.hasVisitorLiked(id)) {
      throw new Error('Visitor has already liked this claim.')
    }
    this.likeCount.push(id)
  }

  public addDislike(id: string): void {

    this.dislikeCount.push(id)
  }

  public getLike(): number {
    return this.likeCount.length;
  }

  public getDislike(): number {
    return this.dislikeCount.length;
  }


  hasVisitorLiked(id: string) {
    return this.likeCount.includes(id);
  }

  report(originalClaim: Claim) {
    if (this.createdAt.getTime() < originalClaim.createdAt.getTime()) {
      throw new Error('Original claim is older than duplicated claim');
    }
  }
 
}

export default Claim;