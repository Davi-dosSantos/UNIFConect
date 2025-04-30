export class Event {
  constructor(
    public id: string,
    public title: string,
    public description?: string,
    public organizerId: string,
    public subjectId?: string,
    public scheduledFor: Date,
    public createdAt?: Date
  ) {}
}