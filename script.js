const inputElements = document.querySelectorAll(".card__input");
const submitButton = document.querySelector(".card__button");

// a function to calculate and return the age
const calculateAge = (year, month, day) => {
    const today = new Date();
    const birthdate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age-- ;
    }

    return age;
}

// a function that gets user inputs and pass to calculateAge function to show the result to the user
const onClickHandler = () => {
    const dayElement = document.querySelector(".card__input[name='day']");
    const monthElement = document.querySelector(".card__input[name='month']");
    const yearElement = document.querySelector(".card__input[name='year']");
    const resultElement = document.querySelector(".card__resultValue");

    resultElement.textContent = calculateAge(yearElement.value, monthElement.value, dayElement.value);
}

// Add keyboard accessibility
inputElements.forEach((input) => {
    input.addEventListener("keydown", event => event.key === "Enter" && onClickHandler());
})

submitButton.addEventListener("click", onClickHandler);