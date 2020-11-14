const infoBlocks = document.getElementById("section__info-blocks");
const sortButton = document.getElementById("sidebar__sort__button");
const countButton = document.getElementById("sidebar__animal-count__button");
let countResult = document.getElementById("result-test");
const searchButton = document.getElementById("header__search-button");
const searchText = document.getElementById("search-text");
const clearButton = document.getElementById("header__clear-button");

let zoos = [];

const itemTemplate = ({peopleCount, zooName, animalCount}) => 
   `<div class="block">
        <p>${peopleCount}</p>
        <p>${zooName}</p>
        <p>${animalCount}</p>
   </div>`;


const getInputValues = () => {
    return {
        peopleCount: peopleCountInput.value,
        zooName: zooNameInput.value,
        animalCount: animalCountInput.value
    }
}

const addItemToPage = ({peopleCount, zooName, animalCount}) => {
    infoBlocks.insertAdjacentHTML(
        'afterbegin', 
        itemTemplate({peopleCount, zooName, animalCount})
        );
}

const addItem = ({peopleCount, zooName, animalCount}) => {
    const newItem = {
        peopleCount, 
        zooName,
        animalCount
    }

    zoos.push(newItem);
    addItemToPage(newItem);
}


countButton.addEventListener("click", () => {
    let totalCount = 0;
    zoos.forEach(e => totalCount += e.animalCount);
    countResult.innerHTML = totalCount;
});

searchButton.addEventListener("click", () => {
    const foundZoos = zoos.filter(zoo => zoo.zooName === searchText.value)
    renderItemList(foundZoos);
    
});

clearButton.addEventListener("click", () => {
    renderItemList(zoos);
    searchText.value = "";
})

sortButton.addEventListener("click", () => {
    const foundZoos = zoos.sort((a, b) => a.peopleCount > b.peopleCount ? 1 : -1);
    renderItemList(foundZoos);
})


const renderItemList = (items) => {
    infoBlocks.innerHTML = "";
    for(const item of items) {
        addItemToPage(item);
    }
}


addItem({peopleCount: 40, zooName: "LP", animalCount: 20});
addItem({peopleCount: 25, zooName: "LPN", animalCount: 15});
addItem({peopleCount: 90, zooName: "LPNU", animalCount: 90});


renderItemList(zoos);