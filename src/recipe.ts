import { IRecipe } from "./app/app.component";

export type NewRecipe = Omit<IRecipe, 'id'>;