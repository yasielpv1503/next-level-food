import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  // await new Promise((resolve)=>setTimeout( resolve, 5000))
  // throw new Error("Loading meal error")
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
