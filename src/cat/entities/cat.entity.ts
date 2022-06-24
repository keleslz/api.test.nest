export class Cat {
  constructor(private readonly type?: string, private readonly name?: string) {}

  getCatInfo(): string {
    if (this.type != null && this.name != null) {
      return `${this.type} - ${this.name}`;
    }
    throw new Error('Missing cats info');
  }
}
