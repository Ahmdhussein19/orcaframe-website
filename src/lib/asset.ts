/** Normalize Vite-style string assets and Next.js StaticImageData to a URL string. */
export function assetSrc(asset: string | { src: string }): string {
  return typeof asset === "string" ? asset : asset.src;
}
