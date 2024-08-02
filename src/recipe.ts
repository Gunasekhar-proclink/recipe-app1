import { Irecipies } from "./app/app.component";

export type NewRecipe = Omit<Irecipies, 'id'>;