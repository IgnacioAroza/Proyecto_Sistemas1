class createVisitorCommand{

    private readonly ipId:string;
    private readonly nickname:string;
    private readonly pin:string;

    constructor(
        ipId: string,
        nickname: string,
        pin: string,
    ){
        this.ipId = ipId;
        this.nickname = nickname;
        this.pin = pin;
    }

    getIp(): string{
        return this.ipId;
    }

    getNickname(): string{
        return this.nickname;
    }

    getPin(): string{
        return this.pin;
    }
}
export default createVisitorCommand;