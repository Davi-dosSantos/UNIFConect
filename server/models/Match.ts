export class Match {
  constructor(
    public id: string,
    public studentId: string,
    public tutorId: string,
    public status: 'pending' | 'accepted' | 'rejected',
    public subjectId?: string,
    public createdAt?: Date
  ) {}
}