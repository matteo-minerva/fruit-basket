import { UNKNOWN_VALUE } from "./constants/api";
import { get } from "lodash";

export const fruitCard = (name, family, nutritions) => {
  const carbohydrates = get(nutritions, "carbohydrates", UNKNOWN_VALUE);
  const protein = get(nutritions, "protein", UNKNOWN_VALUE);
  const fat = get(nutritions, "fat", UNKNOWN_VALUE);
  const calories = get(nutritions, "calories", UNKNOWN_VALUE);
  const sugar = get(nutritions, "sugar", UNKNOWN_VALUE);

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
