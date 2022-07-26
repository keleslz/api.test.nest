export interface  ICRUDRepository<Entity> {
  create(entity: Entity): boolean;
  update(entity: Entity): boolean;
  remove(entity: Entity): boolean;
}
