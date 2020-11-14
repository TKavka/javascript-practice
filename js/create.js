
const submitButton = document.getElementById("submit-button")
const peopleCountInput = document.getElementById("people-count");
const zooNameInput = document.getElementById("zoo-name");
const animalCountInput = document.getElementById("animal-count");
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

const clearInputs = () => {
    peopleCountInput.value = "";
    zooNameInput.value = "";
    animalCountInput.value = "";
}

const addItemToPage = ({peopleCount, zooName, animalCount}) => {
    sectionBlocks.insertAdjacentHTML(
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

    console.log(newItem)
    zoos.push(newItem);
    // addItemToPage(newItem);
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const {peopleCount, zooName, animalCount} = getInputValues()

    // clearInputs();

    addItem({peopleCount, zooName, animalCount});

    
})
