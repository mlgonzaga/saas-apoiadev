export function createSlug(username: string): string {
  return username
    .toLowerCase()
    .trim()
    .normalize("NFD") // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9-]/g, "-") // Replace special characters with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ""); // Remove hyphens from start and end
}
