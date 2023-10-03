export class getCategoriesCommand {
    private readonly nameId:string;
    private readonly color:string;

    constructor(
        nameId: string,
        color: string,
    ){
        this.nameId = nameId;
        this.color = color;
    }

    getName(): string{
        return this.nameId;
    }
    getColor(): string{
        return this.color;
    }
}