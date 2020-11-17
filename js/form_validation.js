export const visitorsPerYearInput = document.getElementById("visitors-amount");
export const hotelNameInput = document.getElementById("hotel-name");
export const roomsCountInput = document.getElementById("rooms-count");

export const getInputValues = () => {
  return {
    visitorsPerYear: visitorsPerYearInput.value,
    hotelName: hotelNameInput.value.trim(),
    roomsCount: roomsCountInput.value,
  };
};

export function checkInputs() {
  const userInput = getInputValues();

  var numberRegExp = /[1-9]+/;

  if (userInput.visitorsPerYear === "") {
    setErrorFor(visitorsPerYearInput, "Please input people count");
  } else if (parseInt(userInput.visitorsPerYear) <= 0) {
    setErrorFor(visitorsPerYearInput, "Count must be more than 0");
  } else if (userInput.visitorsPerYear.match(numberRegExp) == null) {
    setErrorFor(visitorsPerYearInput, "Count cannot start from 0");
  } else {
    setSuccessFor(visitorsPerYearInput);
  }

  userInput.hotelName === ""
    ? setErrorFor(hotelNameInput, "Please input zoo name")
    : setSuccessFor(hotelNameInput);

  if (userInput.roomsCount === "") {
    setErrorFor(roomsCountInput, "Please input animal count");
  } else if (parseInt(userInput.roomsCount) <= 0) {
    setErrorFor(roomsCountInput, "Count must be more than 0");
  } else if (userInput.roomsCount.match(numberRegExp) == null) {
    setErrorFor(roomsCountInput, "Count cannot start from 0");
  } else {
    setSuccessFor(roomsCountInput);
  }
}

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
};

const setSuccessFor = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};
