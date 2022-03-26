import "regenerator-runtime/runtime";
import "./constants/DOM";
import { $BODY_ELEMENT, ACTIVE_CARD_CLASS } from "./constants/DOM";
import { ALL_FRUIT_ENDPOINT, BASE_URL, UNKNOWN_VALUE } from "./constants/api";
import { get, isEmpty, pick } from "lodash";
import $ from "jquery";
import { fruitCard } from "./fruitCard";
import { fruitsSection } from "./fruits-section";
import { http } from "./http";

$(document).ready(async () => {
  const endpoint = BASE_URL + ALL_FRUIT_ENDPOINT;
  const rowData = await http(endpoint);
  if (!isEmpty(rowData)) {
    const data = remap(rowData, ["name", "family", "nutritions"]);
    appendToDOM(data);
    addCardClickListener();
  }
});

const remap = (data, elementsToKeep) => {
  return data.map((pieceOfData) => {
    return pick(pieceOfData, elementsToKeep);
  });
};

const appendToDOM = (data) => {
  $BODY_ELEMENT.append(fruitsSection());
  data.map((fruit) => {
    const name = get(fruit, "name", UNKNOWN_VALUE);
    const family = get(fruit, "family", UNKNOWN_VALUE);
    const nutritions = get(fruit, "nutritions", UNKNOWN_VALUE);
    const fruitCardElement = fruitCard(name, family, nutritions);
    return $(".fruits").append(fruitCardElement);
  });
};

const addCardClickListener = () => {
  return $(".card").click(function () {
    $(this).toggleClass(ACTIVE_CARD_CLASS);
  });
};
