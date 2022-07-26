import { Cat } from "src/core/data/models/entities/cat";
import { ICRUDRepository } from "src/core/data/repositories/i-crud-repository";

export class CatRepository implements ICRUDRepository<Cat> {
    create(entity: Cat): boolean {
        throw new Error("Method not implemented.");
    }
    update(entity: Cat): boolean {
        throw new Error("Method not implemented.");
    }
    remove(entity: Cat): boolean {
        throw new Error("Method not implemented.");
    }
}