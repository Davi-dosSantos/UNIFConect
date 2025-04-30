export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public bio?: string,
    public role: 'student' | 'tutor',
    public createdAt?: Date
  ) {}
}