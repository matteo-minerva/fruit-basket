import $ from "jquery";
import { ACTIVE_CARD_CLASS } from "../constants/DOM";
import { FruitCard } from "./FruitCard";
import { UNKNOWN_VALUE } from "../constants/api";
import { get } from "lodash";

export class FruitsSection {
  constructor(data) {
    this.fruits = data;
  }

  onClickEvtListener() {
    return $(".card").click(function () {
      $(this).toggleClass(ACTIVE_CARD_CLASS);
    });
  }

  mount($element) {
    $element.append('<section class="fruits"></section>');
    const $FRUITS_SECTION = $(".fruits");

    this.fruits.map((fruit) => {
      const name = get(fruit, "name", UNKNOWN_VALUE);
      const family = get(fruit, "family", UNKNOWN_VALUE);
      const nutritions = get(fruit, "nutritions", UNKNOWN_VALUE);
      const card = new FruitCard(name, family, nutritions).mount(
        $FRUITS_SECTION,
      );
      return $FRUITS_SECTION.append(card);
    });

    return this.onClickEvtListener();
  }
}
