import { IRecipe } from './app.component';

export type NewRecipe = Omit<IRecipe, 'id'>;