export const getSafetyLevel = (dehp: string | number) => {
  if (typeof dehp === "string") return "Yellow";
  if (dehp < 50) return "Green";
  if (dehp < 100) return "Yellow";
  return "Red";
};
