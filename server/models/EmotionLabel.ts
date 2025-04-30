export class EmotionLabel {
  constructor(
    public id: string,
    public messageId: string,
    public emotion: string,
    public labeledBy: string,
    public createdAt?: Date
  ) {}
}