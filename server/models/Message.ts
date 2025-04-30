export class Message {
  constructor(
    public id: string,
    public senderId: string,
    public receiverId: string,
    public content: string,
    public sentAt?: Date
  ) {}
}