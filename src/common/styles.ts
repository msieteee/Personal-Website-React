export const ALABASTER = "#FCF7F2";
export const ALMOND = "#DFDAD5";
export const DARK_CHARCOAL = "#2C2C2C";
export const GREIGE = "#88807B";
export const MATTE_BLACK = "#161513";
export const STONE_GRAY = "#A8A39F";
export const TAUPE = "#B6AA9B";
export const WHITE = "#FFF";

export const hexOpacity = (hex: string, opacityPercent: number) => {
  const cleanHex = hex.replace("#", "");

  const hexFull =
    cleanHex.length === 3
      ? cleanHex
          .split("")
          .map((c) => c + c)
          .join("")
      : cleanHex;

  const alpha = Math.round(
    (Math.max(0, Math.min(100, opacityPercent)) * 255) / 100
  );
  const alphaHex = alpha.toString(16).padStart(2, "0");

  return `#${hexFull}${alphaHex.toUpperCase()}`;
};
