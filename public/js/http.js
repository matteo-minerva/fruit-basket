import axios from "axios";

export const http = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);
    const { data, status, statusText: message } = response;

    if (status === 200) {
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
  $(".error__title").text(name);
  $(".error__message").text(message);
  $(".modal").toggle();
  $(".close").click(() => {
    $(".modal").toggle();
  });
};
