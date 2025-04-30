export class Resource {
  constructor(
    public id: string,
    public subjectId: string,
    public title: string,
    public description?: string,
    public fileId?: string,
    public addedBy?: string,
    public createdAt?: Date
  ) {}
}