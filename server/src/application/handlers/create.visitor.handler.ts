import Visitor from "../../domain/entities/visitor.entity";
import visitorRepository, { VisitorRespository } from "../../infrastructure/repositories/visitor.Repository";
import createVisitorCommand from "../commands/create.visitor.command";

class CreateVisitorHandler {
    private visitorRepository: VisitorRespository;

    public constructor(
        visitorRepository: VisitorRespository,
    ){
        this.visitorRepository = visitorRepository;
    }

    public async execute(command: createVisitorCommand): Promise<void> {
        const visitor = Visitor.create(
            command.getIp(),
            command.getNickname(),
            command.getPin()
        )

        await this.visitorRepository.save(visitor);
    }
}

export default new CreateVisitorHandler(
    visitorRepository
)