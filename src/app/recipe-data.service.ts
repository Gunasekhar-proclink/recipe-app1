import { Injectable } from '@angular/core';
import { NewRecipe } from '../recipe';

export type recipe = {
  id : string 
  itemTitle: string;
  itemposter: string;
  itemImage: string;
  itemType: string;
  itemDuration: string;
  itemLink: string;
  itemProcedure: string;
  itemIngredients: string;
};

@Injectable({
  providedIn: 'root',
})
export class RecipeDataService {
  getRecipeByIdP(id: string) {
    throw new Error('Method not implemented.');
  }

  recipeData: Array<recipe> = [
    { 
      id : '1', 
      itemTitle: ' Chicken Biriyani',
      itemposter:
        'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemType: 'Non-Veg',
      itemDuration: '55 Minnutes',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
      itemProcedure:
        'Marinate chicken with yogurt, ginger, garlic, and spices. Cook with ground masala and rice.',
      itemIngredients:
        'Chicken, basmati rice, yogurt, ginger, garlic, onions, ghee, cooking oil, spices',
    },
    {
      id : '2', 
      itemTitle: 'Chicken Korma',
      itemType: 'Non-Veg',
      itemDuration: '1 hour',
      itemProcedure:
        'Marinate chicken in yogurt and spices. Grill or bake until cooked. Simmer in a tomato-based sauce with spices.',
      itemIngredients:
        'Chicken, yogurt, onions, garlic, ginger, tomatoes, cream, spices',
      itemposter:
        'https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Chicken-Korma-square-FS-74.jpg',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    },
    {
      id : '3', 
      itemTitle: 'Mughali Chicken',
      itemType: 'Non-Veg',
      itemDuration: '1 hour',
      itemProcedure:
        'Marinate chicken in yogurt and spices. Cook in a tomato-based sauce with butter and cream.',
      itemIngredients:
        'Chicken, yogurt, onions, garlic, ginger, tomatoes, butter, cream, spices',
      itemposter:
        'https://i0.wp.com/mykitchenlittle.com/wp-content/uploads/2023/12/Easy-Chicken-Mughlai-9-scaled.jpg?fit=1707%2C2560&ssl=1',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    },
    {
      id : '4', 
      itemTitle: 'Tandoori Chicken Thighs',
      itemType: 'Non-Veg',
      itemDuration: '30 minutes',
      itemProcedure:
        'Marinate chicken thighs in a spiced yogurt sauce. Grill until juicy and flavorful.',
      itemIngredients: 'Chicken thighs, yogurt, spices',
      itemposter:
        'https://vikalinka.com/wp-content/uploads/2022/05/Tandoori-Chicken-Air-Fryer-13-Edit.jpg',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    },
    {
      id : '5', 
      itemTitle: 'Chicken Tikka Masala',
      itemType: 'Non-Veg',
      itemDuration: '1 hour',
      itemProcedure:
        'Marinate chicken in a spiced yogurt mixture. Grill or bake until cooked. Simmer in a tomato-based sauce.',
      itemIngredients:
        'Chicken, yogurt, onions, garlic, ginger, tomatoes, cream, spices',
      itemposter:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcNTu6mSvUxTmg0k8qX70DsuxwrG-FqC29g&s',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    },
    {
      id : '6', 
      itemTitle: 'Butter Chicken',
      itemType: 'Non-Veg',
      itemDuration: '1 hour',
      itemProcedure: 'Cook chicken in a rich, creamy tomato-based sauce.',
      itemIngredients: 'Chicken, tomatoes, cream, butter, spices',
      itemposter:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFjjnBRSbS3KfH6STLM6J753Mk86DSo5aDQ&s',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    },
    {
      id : '7', 
      itemTitle: 'Lamb Curry',
      itemType: 'Non-Veg',
      itemDuration: '1 hour',
      itemProcedure: 'Cook lamb in a spicy, aromatic curry sauce.',
      itemIngredients:
        'Lamb, onions, garlic, ginger, tomatoes, spices, basmati rice',
      itemposter:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoiYpcZhCBeXVFOt22R_GvujCtDElyOe2pww&s',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    },
    {
      id : '8', 
      itemTitle: 'Saag Paneer',
      itemType: 'Veg',
      itemDuration: '30 minutes',
      itemProcedure:
        'Cook spinach with onions and garlic. Add paneer cubes and simmer in a creamy sauce.',
      itemIngredients: 'Spinach, onions, garlic, paneer, cream, spices',
      itemposter:
        'https://healthynibblesandbits.com/wp-content/uploads/2020/01/Saag-Paneer-FF-500x500.jpg',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    },
    {
      id : '9', 
      itemTitle: 'Chana Masala',
      itemType: 'Veg',
      itemDuration: '30 minutes',
      itemProcedure:
        'Cook chickpeas with onions, garlic, and spices. Simmer in a tomato-based sauce.',
      itemIngredients: 'Chickpeas, onions, garlic, tomatoes, spices',
      itemposter:
        'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/01/easy-chana-masala-pan-768x1152.jpg',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    },
    {
      id : '10', 
      itemTitle: 'Aloo Gobi',
      itemType: 'Veg',
      itemDuration: '30 minutes',
      itemProcedure:
        'Cook potatoes and cauliflower with onions, garlic, and spices. Simmer in a tomato-based sauce.',
      itemIngredients:
        'Potatoes, cauliflower, onions, garlic, tomatoes, spices',
      itemposter:
        'https://shwetainthekitchen.com/wp-content/uploads/2024/01/aloo-gobi.jpg',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    },
    {
      id : '11', 
      itemTitle: 'Vegetable Biryani',
      itemType: 'Veg',
      itemDuration: '1 hour',
      itemProcedure:
        'Cook vegetables and rice separately. Layer and bake to create a flavorful, aromatic dish.',
      itemIngredients:
        'Vegetables, basmati rice, onions, garlic, ginger, spices',
      itemposter:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Vegetable-Biryani-With-Green-Raita-159c15d.jpg?quality=90&resize=556,505',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    },
    {
      id : '12', 
      itemTitle: 'Gobi Manchurian',
      itemType: 'Veg',
      itemDuration: '30 minutes',
      itemProcedure:
        'Steam cauliflower until tender. Fry until crispy. Coat in a spicy sauce.',
      itemIngredients: 'Cauliflower, onions, garlic, ginger, spices, soy sauce',
      itemposter:
        'https://thehappyfoodie.co.uk/wp-content/uploads/2023/03/Cauliflower-Gobi-Manchurian-Recipe-.jpg',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    },
    {
      id : '13', 
      itemTitle: 'Bread Machine Naan',
      itemType: 'Veg',
      itemDuration: '30 minutes',
      itemProcedure:
        'Use a bread machine to create the perfect dough for a chewy, fluffy flatbread.',
      itemIngredients: 'Flour, yeast, sugar, salt, water',
      itemposter:
        'https://www.thespeltkitchen.com/wp-content/uploads/2019/10/Simple-Bread-Machine-Garlic-Butter-Naan-Bread-1-1024x909.jpg.jpg',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    },
    {
      id : '14', 
      itemTitle: 'Coconut Burfi Brownie Bites',
      itemType: 'Veg',
      itemDuration: '30 minutes',
      itemProcedure:
        'Mix shredded coconut with sweetened condensed milk and cardamom. Shape into bites and coat with chocolate.',
      itemIngredients:
        'Shredded coconut, sweetened condensed milk, cardamom, dark chocolate chips',
      itemposter:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkf8DjpDeix-Nh4EjQZQ2O3V0TiXamosWqFQ&s',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    },
    {
      id : '15', 
      itemTitle: 'Kulfi',
      itemType: 'Veg',
      itemDuration: '1 hour',
      itemProcedure:
        'Cook milk with sugar and cardamom. Cool and churn into a creamy dessert.',
      itemIngredients: 'Milk, sugar, cardamom',
      itemposter:
        'https://www.sharmispassions.com/wp-content/uploads/2016/06/MalaiKulfi2.jpg',
      itemImage:
        'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
      itemLink:
        'https://www.youtube.com/watch?v=95BCU1n268w&ab_channel=SpiceEats',
    },
  ];

  constructor() {}
  

  getRecipesByIdP(id: string): Promise<recipe> {
    return fetch(
      `https://669a424b9ba098ed61fef5da.mockapi.io/Recipes/${id}`
    ).then((res) => res.json());
  }
  getAllRecipesP(): Promise<recipe[]> {
    return fetch('https://669a424b9ba098ed61fef5da.mockapi.io/Recipes').then(
      (res) => res.json()
    );
  }

  deleteRecipeP(item: recipe) {
    // let idx = this.recipeData.indexOf(item);
    // this.recipeData.splice(idx, 1);
    return fetch(
      `https://669a424b9ba098ed61fef5da.mockapi.io/Recipes/${item.id}`,
      {
        method: 'DELETE',
      }
    ).then((res) => res.json());
  }
  

  
  addRecipe(newRecipe: NewRecipe) {

    // Post
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON

    return fetch(`https://669a424b9ba098ed61fef5da.mockapi.io/Recipes`, {
      method: 'POST',
      body: JSON.stringify(newRecipe),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }

}
