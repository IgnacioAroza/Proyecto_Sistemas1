export class createVisitorCommand{

    private readonly id:string;
    private readonly ip:string;
    private readonly nickname:string;

    constructor(
        id: string,
        ip: string,
        nickname: string,
    ){
        this.id = id;
        this.ip = ip;
        this.nickname = nickname;
    }

    getIp(): string{
        return this.ip;
    }

    getNickname(): string{
        return this.nickname;
    }
}