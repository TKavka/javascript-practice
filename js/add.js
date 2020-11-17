import { postHotels } from "./api.js";
import { checkInputs, getInputValues } from "./form_validation.js";
const addSubmitButton = document.getElementById("add-submit-button");

addSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  checkInputs();

  const { visitorsPerYear, hotelName, roomsCount } = getInputValues();

  postHotels({ visitorsPerYear, hotelName, roomsCount });
});
