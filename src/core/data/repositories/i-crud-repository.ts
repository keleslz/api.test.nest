
export interface ICRUDRepository<E> {
  create(entity: E): boolean;
  update(entity: E): boolean;
  remove(entity: E): boolean;
}
