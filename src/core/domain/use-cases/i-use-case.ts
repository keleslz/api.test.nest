export interface IUseCase<Entity> {
  execute(...args: any): Entity;
}
