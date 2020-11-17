import { updateHotels } from "./api.js";
import {
  checkInputs,
  getInputValues,
  visitorsPerYearInput,
  hotelNameInput,
  roomsCountInput,
} from "./form_validation.js";

const editElement = JSON.parse(sessionStorage.getItem("editElement"));
visitorsPerYearInput.value = editElement.visitorsPerYear;
hotelNameInput.value = editElement.hotelName;
roomsCountInput.value = editElement.roomsCount;

const editSubmitButton = document.getElementById("edit-submit-button");
editSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  checkInputs();

  const { visitorsPerYear, hotelName, roomsCount } = getInputValues();
  updateHotels({ id: editElement.id, visitorsPerYear, hotelName, roomsCount });
});
