import {
  CLOSE_MODAL_ELEMENT,
  ERROR_MESSAGE_ELEMENT,
  ERROR_TITLE_ELEMENT,
  MODAL_ELEMENT,
} from "./constants/DOM";
import { RESPONSE_OK } from "./constants/api";
import axios from "axios";

export const http = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);
    const { data, status, statusText: message } = response;

    if (status === RESPONSE_OK) {
      return data;
    }
    const name = `Error ${status}`;
    return handleError(name, message);
  } catch (error) {
    const { name, message } = error;
    return handleError(name, message);
  }
};

const handleError = (name, message) => {
  ERROR_TITLE_ELEMENT.text(name);
  ERROR_MESSAGE_ELEMENT.text(message);
  MODAL_ELEMENT.toggle();
  CLOSE_MODAL_ELEMENT.click(() => {
    MODAL_ELEMENT.toggle();
  });
};
