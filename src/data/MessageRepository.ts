import { Message } from "src/core/data/models/entities/message";
import { ICRUDRepository } from "src/core/data/repositories/i-crud-repository";

export class MessageRepository implements Pick<ICRUDRepository<Message>, "create"> {
    create(entity: Message): boolean {
        return true;
    }
}