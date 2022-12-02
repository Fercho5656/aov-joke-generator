export default interface IJoke {
  error: boolean;
  category: string;
  setup: string;
  delivery: string;
  flags: IFlag
  id: number;
  safe: boolean;
  lang: string;
}

interface IFlag {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
}