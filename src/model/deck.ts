export interface IDeck {
  id: string;
  name: string;
  cards: ICard[];
}

export interface ICard {
  id: string;
  style: sideStyle;
  img?: string;
  title?: string;
  subtitle?: string;
  textA: string;
  textB: string;
}

export type sideStyle = "hiragana" | "katakana" | "kanji" | "romanji";
