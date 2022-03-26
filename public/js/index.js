import "regenerator-runtime/runtime";
import { allFruitEndpoint, baseURL, unknownValue } from "./constants";
import { get, pick } from "lodash";

import $ from "jquery";
import { fruitCard } from "./fruitCard";
import { http } from "./http";

$(document).ready(async () => {
  const endpoint = baseURL + allFruitEndpoint;
  const rowData = await http(endpoint);
  const data = remap(rowData, ["name", "family", "nutritions"]);
  appendToDOM(data);
  addCardClickListener();
});

const remap = (data, elementsToKeep) => {
  return data.map((fruit) => {
    return pick(fruit, elementsToKeep);
  });
};

const appendToDOM = (data) => {
  data.map((fruit) => {
    const name = get(fruit, "name", unknownValue);
    const family = get(fruit, "family", unknownValue);
    const nutritions = get(fruit, "nutritions", unknownValue);
    const fruitCardElement = fruitCard(name, family, nutritions);
    return $(".fruits").append(fruitCardElement);
  });
};

const addCardClickListener = () => {
  return $(".card").click(function () {
    $(this).toggleClass("card--active");
  });
};
