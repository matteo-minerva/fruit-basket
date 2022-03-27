import { UNKNOWN_VALUE } from "../constants/api";
import { get } from "lodash";

export class FruitCard {
  constructor(name, family, nutritions) {
    this.name = name;
    this.family = family;
    this.carbohydrates = get(nutritions, "carbohydrates", UNKNOWN_VALUE);
    this.protein = get(nutritions, "protein", UNKNOWN_VALUE);
    this.fat = get(nutritions, "fat", UNKNOWN_VALUE);
    this.calories = get(nutritions, "calories", UNKNOWN_VALUE);
    this.sugar = get(nutritions, "sugar", UNKNOWN_VALUE);
  }

  mount($element) {
    return $element.append(`<div class="card">
      <div class="card__inner">
          <div class="card__front">
              <span class="fruit-name">${this.name}</span>
              <em class="fruit-family">(${this.family})</em>
          </div>
          <div class="card__back">
              <div class="nutrients">
                  <div class="nutrient">carbs <span class="nutrient__value">${this.carbohydrates}</span></div>
                  <div class="nutrient">protein <span class="nutrient__value">${this.protein}</span></div>
                  <div class="nutrient">fat <span class="nutrient__value">${this.fat}</span></div>
                  <div class="nutrient">calories <span class="nutrient__value">${this.calories}</span></div>
                  <div class="nutrient">sugar <span class="nutrient__value">${this.sugar}</span></div>
              </div>
          </div>
      </div>
  </div>`);
  }
}
