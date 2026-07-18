/**
 * GitHub Pages serves this project from a sub-path (e.g. /saqibsoft), while local
 * dev and any future custom-domain deploy run from the root. `next/image` doesn't
 * apply `basePath` to `src` automatically, so every public asset path must be
 * prefixed manually using this constant.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
