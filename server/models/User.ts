export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public role: 'student' | 'tutor',
    public bio?: string,
    public createdAt?: Date
  ) {}
}