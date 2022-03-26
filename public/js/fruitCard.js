import { get } from "lodash";
import { unknownValue } from "./constants";

export const fruitCard = (name, family, nutritions) => {
  const carbohydrates = get(nutritions, "carbohydrates", unknownValue);
  const protein = get(nutritions, "protein", unknownValue);
  const fat = get(nutritions, "fat", unknownValue);
  const calories = get(nutritions, "calories", unknownValue);
  const sugar = get(nutritions, "sugar", unknownValue);

  return `<div class="card">
    <div class="card__inner">
        <div class="card__front">
            <span class="fruit-name">${name}</span>
            <em class="fruit-family">(${family})</em>
        </div>
        <div class="card__back">
            <div class="nutrients">
                <div class="nutrient">carbs <span class="nutrient__value">${carbohydrates}</span></div>
                <div class="nutrient">protein <span class="nutrient__value">${protein}</span></div>
                <div class="nutrient">fat <span class="nutrient__value">${fat}</span></div>
                <div class="nutrient">calories <span class="nutrient__value">${calories}</span></div>
                <div class="nutrient">sugar <span class="nutrient__value">${sugar}</span></div>
            </div>
        </div>
    </div>
</div>`;
};
