export function padImageName(imageNumber: number|string) {
  // Convert the number to a string and pad it with leading zeros to a length of 4
  return imageNumber.toString().padStart(4, "0");
}
