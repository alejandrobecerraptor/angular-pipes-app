export enum Color {
  red,
  black,
  blue,
  green,
  silver,
  yellow,
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
