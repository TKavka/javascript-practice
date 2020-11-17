import { getAllHotels, deleteHotels } from "./api.js";

const sectionInfoBlocks = document.getElementById("section__info-blocks");
const sortButton = document.getElementById("sidebar__sort__button");
const visitorsPerYearButton = document.getElementById(
  "sidebar__visitors-amount__button"
);
const body = document.querySelector("body");
let visitorsPerYearResult = document.getElementById("result__text");
const searchButton = document.getElementById("header__search-button");
const searchText = document.getElementById("search-text");
const clearButton = document.getElementById("header__clear-button");

let hotels = [];

const itemTemplate = ({ id, visitorsPerYear, hotelName, roomsCount }) =>
  `<div id="${id}" class="block">
        <p>${visitorsPerYear}</p>
        <p>${hotelName}</p>
        <p>${roomsCount}</p>
        <button id="edit-button">
            Edit
        </button>
        <button id="delete-button">
            Delete
        </button>
   </div>`;

body.addEventListener("click", (event) => {
  if (!event.target) {
    return;
  }
  if (event.target.matches("#edit-button")) {
    const parentId = event.target.parentElement.id;
    const editElement = hotels.find((b) => b.id == parentId);
    sessionStorage.setItem("editElement", JSON.stringify(editElement));
    location.href = "/edit_hotel.html";
  } else if (event.target.matches("#delete-button")) {
    const deletedElementId = event.target.parentElement.id;
    deleteHotels(deletedElementId).then(refetchAllHotels);
  }
});

visitorsPerYearButton.addEventListener("click", () => {
  let totalCount = 0;
  hotels.forEach((e) => (totalCount += parseInt(e.roomsCount)));
  visitorsPerYearResult.innerHTML = totalCount;
});

searchButton.addEventListener("click", () => {
  const foundHotels = hotels.filter(
    (hotel) => hotel.hotelName === searchText.value
  );
  renderItemList(foundHotels);
});

clearButton.addEventListener("click", () => {
  renderItemList(hotels);
  searchText.value = "";
});

sortButton.addEventListener("click", () => {
  const foundHotels = hotels.sort((a, b) =>
    parseInt(a.visitorsPerYear) > parseInt(b.visitorsPerYear) ? 1 : -1
  );
  renderItemList(foundHotels);
});

const addItemToPage = ({ id, visitorsPerYear, hotelName, roomsCount }) => {
  sectionInfoBlocks.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, visitorsPerYear, hotelName, roomsCount })
  );
};

const renderItemList = (items) => {
  sectionInfoBlocks.innerHTML = "";
  for (const item of items) {
    addItemToPage(item);
  }
};

const refetchAllHotels = async () => {
  const allHotels = await getAllHotels();
  hotels = allHotels;
  renderItemList(hotels);
};

refetchAllHotels();
