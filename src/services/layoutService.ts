// src/services/siteService.ts
import { layoutData } from "../data/layoutData";

export async function getLayoutData() {
  return Promise.resolve(layoutData);
}
