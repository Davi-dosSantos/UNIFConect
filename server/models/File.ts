export class File {
  constructor(
    public id: string,
    public uploaderId: string,
    public name: string,
    public path: string,
    public type?: string,
    public size?: number,
    public uploadedAt?: Date
  ) {}
}