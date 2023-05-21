import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';

@Schema({
  timestamps: true,
  collection: 'images',
  _id: true,
})
export class Image {
  @Prop({
    type: String,
    default: () => randomUUID(),
  })
  _id!: string;

  @Prop({ type: Object, required: true })
  localpath: object;

  @Prop({ type: Object, required: true })
  metadata: object;

  @Prop({
    type: String,
    default: new Date().toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
    }),
  })
  createdAt: String;

  @Prop({
    type: String,
    default: new Date().toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
    }),
  })
  updatedAt: String;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
