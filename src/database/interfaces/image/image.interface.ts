import { Document } from 'mongoose';

interface Localpath {
  original: string;
  thumb: string;
}

interface Metadata {
  ALL_EXIF_DATA_KEY: object;
}

export interface ImageInterface extends Document {
  readonly localpath: Localpath;
  readonly metadata: Metadata;
}
