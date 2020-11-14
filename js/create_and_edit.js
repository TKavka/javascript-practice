const submitButton = document.getElementById("submit-button")
const peopleCountInput = document.getElementById("people-count");
const zooNameInput = document.getElementById("zoo-name");
const animalCountInput = document.getElementById("animal-count");



const getInputValues = () => {
    return {
        peopleCount: peopleCountInput.value,
        zooName: zooNameInput.value.trim(),
        animalCount: animalCountInput.value
    }
};


submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    checkInputs();
});

function checkInputs() {
    const userInput = getInputValues();

    var numberRegExp = /^[1-9][0-9]/;

    if(userInput.peopleCount === "") {
        setErrorFor(peopleCountInput, "Please input people count")
    } else if (parseInt(userInput.peopleCount) <= 0) {
        setErrorFor(peopleCountInput, "Count must be more than 0");
    } else if (userInput.peopleCount.match(numberRegExp) == null) {
        setErrorFor(peopleCountInput, "Count cannot start from 0");
    } else {
        setSuccessFor(peopleCountInput);
    }



    userInput.zooName === "" ? 
        setErrorFor(zooNameInput, "Please input zoo name") : setSuccessFor(zooNameInput);


    if(userInput.animalCount === "") {
        setErrorFor(animalCountInput, "Please input animal count")
    } else if (parseInt(userInput.animalCount) <= 0){
        setErrorFor(animalCountInput, "Count must be more than 0")
    } else if (userInput.animalCount.match(numberRegExp) == null) {
        setErrorFor(animalCountInput, "Count cannot start from 0");
    } else {
        setSuccessFor(animalCountInput);
    }
    
}

const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.className = "form-control error";
}

const setSuccessFor = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}