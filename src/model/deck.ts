export interface IDeck {
  id: string;
  name: string;
  cards: ICard[];
}

export interface ICard {
  id: string;
  img?: string;
  title?: string;
  subtitle?: string;
  textA: string;
  textB: string;
}