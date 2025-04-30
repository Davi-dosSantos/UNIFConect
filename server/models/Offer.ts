export class Offer {
  constructor(
    public id: string,
    public userId: string,
    public subjectId?: string,
    public description: string,
    public availableDays?: string,
    public availableHours?: string,
    public price?: number,
    public createdAt?: Date
  ) {}
}