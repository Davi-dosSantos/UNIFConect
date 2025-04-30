export class UserResourceLog {
  constructor(
    public id: string,
    public userId: string,
    public type: string,
    public action: string,
    public value: number,
    public createdAt?: Date
  ) {}
}