import { fileURLToPath } from "node:url";

export function previewAnnotations(entry: string[] = []) {
  return [...entry, fileURLToPath(import.meta.resolve("../dist/preview.js"))];
}

export function managerEntries(entry: string[] = []) {
  return [...entry, fileURLToPath(import.meta.resolve("../dist/manager.js"))];
}

export { viteFinal, webpackFinal } from "../dist/preset.js";
