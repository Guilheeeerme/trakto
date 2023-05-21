export interface IImageResponse {
  localpath: {
    original: string;
    thumb: string;
  };
  metadata: {
    ALL_EXIF_DATA_KEY: object;
  };
}
