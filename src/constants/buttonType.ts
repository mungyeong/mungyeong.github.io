export const BUTTON_COLOR = {
  BlUE: 'blue' as const,
  BLACK: 'black' as const,
};

type Keys = keyof typeof BUTTON_COLOR;
export type ButtonColorType = typeof BUTTON_COLOR[Keys];
