export class createVisitorCommand{

    private readonly ipId:string;
    private readonly nickname:string;

    constructor(
        ipId: string,
        nickname: string,
    ){
        this.ipId = ipId;
        this.nickname = nickname;
    }

    getIp(): string{
        return this.ipId;
    }

    getNickname(): string{
        return this.nickname;
    }
}