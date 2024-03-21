export type artist = {
  name: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: image[];
  tags: tag[];
};

export type image = {
  text: string;
  size: string;
};

export type album = {
  name: string;
  playcount: string;
  mbid: string;
  url: string;
  artist: artist;
  image: image[];
};

export type tag = {
  count: number;
  name: string;
  url: string;
};

export type error = {
  message: string;
  status: string;
};
