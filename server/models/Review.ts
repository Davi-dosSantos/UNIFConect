export class Review {
  constructor(
    public id: string,
    public reviewerId: string,
    public revieweeId: string,
    public rating?: number,
    public comment?: string,
    public createdAt?: Date
  ) {}
}