import "regenerator-runtime/runtime";
import "./constants/DOM";
import { ALL_FRUIT_ENDPOINT, BASE_URL } from "./constants/api";
import { isEmpty, pick } from "lodash";
import $ from "jquery";
import { $BODY_ELEMENT } from "./constants/DOM";
import { AuthorFooter } from "./components/AuthorFooter";
import { FruitsSection } from "./components/FruitsSection";
import { http } from "./utilities/http";

$(document).ready(async () => {
  const endpoint = BASE_URL + ALL_FRUIT_ENDPOINT;
  const rowData = await http(endpoint);
  if (!isEmpty(rowData)) {
    const data = remap(rowData, ["name", "family", "nutritions"]);
    new FruitsSection(data).mount($BODY_ELEMENT);
  }
  new AuthorFooter().mount($BODY_ELEMENT);
});

const remap = (data, elementsToKeep) => {
  return data.map((pieceOfData) => {
    return pick(pieceOfData, elementsToKeep);
  });
};
