export class Match {
  constructor(
    public id: string,
    public studentId: string,
    public tutorId: string,
    public subjectId?: string,
    public status: 'pending' | 'accepted' | 'rejected',
    public createdAt?: Date
  ) {}
}