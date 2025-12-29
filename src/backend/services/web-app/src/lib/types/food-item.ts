import { z } from 'zod';

export const FoodItemScheme = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
  currency: z.string()
});

export const FoodItemsScheme = z.object({
  catalog_items: z.array(FoodItemScheme),
  total: z.number(),
  offset: z.number(),
  limit: z.number()
});

export const CategoriesScheme = z.array(
  z.object({
    id: z.number(),
    name: z.string()
  })
);

export type FoodItem = z.infer<typeof FoodItemScheme>;
export type FoodItems = z.infer<typeof FoodItemsScheme>;
export type Categories = z.infer<typeof CategoriesScheme>;
