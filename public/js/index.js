import "regenerator-runtime/runtime";
import "./constants/DOM";
import { $FRUITS_SECTION_ELEMENT, ACTIVE_CARD_CLASS } from "./constants/DOM";
import { ALL_FRUIT_ENDPOINT, BASE_URL, UNKNOWN_VALUE } from "./constants/api";
import { get, pick } from "lodash";
import $ from "jquery";
import { fruitCard } from "./fruitCard";
import { http } from "./http";

$(document).ready(async () => {
  const endpoint = BASE_URL + ALL_FRUIT_ENDPOINT;
  const rowData = await http(endpoint);
  const data = remap(rowData, ["name", "family", "nutritions"]);
  appendToDOM(data);
  addCardClickListener();
});

const remap = (data, elementsToKeep) => {
  return data.map((pieceOfData) => {
    return pick(pieceOfData, elementsToKeep);
  });
};

const appendToDOM = (data) => {
  data.map((fruit) => {
    const name = get(fruit, "name", UNKNOWN_VALUE);
    const family = get(fruit, "family", UNKNOWN_VALUE);
    const nutritions = get(fruit, "nutritions", UNKNOWN_VALUE);
    const fruitCardElement = fruitCard(name, family, nutritions);
    return $FRUITS_SECTION_ELEMENT.append(fruitCardElement);
  });
};

const addCardClickListener = () => {
  return $(".card").click(function () {
    $(this).toggleClass(ACTIVE_CARD_CLASS);
  });
};
