export interface IGood {
  B: boolean;
  C: number;
  CV?: any;
  G: number;
  P: number;
  Pl?: any;
  T: number;
}

export interface IValue {
  Goods: IGood[];
}

export interface IProducts {
  Error: string;
  Id: number;
  Success: boolean;
  Value: IValue;
}

