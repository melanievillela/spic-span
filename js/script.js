//Global variables
const date = new Date();
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const contact = document.querySelector("#contact");
const submit = document.querySelector("#submit-btn");
const modal = document.querySelector(".modal-background");

//Set initial max days to 31 for January
day.setAttribute("max", 31);

//Check month to restrict number of days available when changed
month.addEventListener("change", () => {
    if (month.value === "2") {
        day.setAttribute("max", 28)
    } else if (month.value === "4" || month.value === "6" || month.value === "9" || month.value === "11") {
        day.setAttribute("max", 30)
    } else {
        day.setAttribute("max", 31)        
    }
});

//Modal open
contact.addEventListener("click", () => {
    modal.style.display="flex";
    //Modal close
    const close = document.querySelector("#close");
    close.addEventListener("click", closed);
});

//Submit confirmation 
submit.addEventListener("submit", (e) => { 
    e.preventDefault();
    const success = document.querySelector("#success");
    success.style.display="flex";
    window.setTimeout(closed, 1500)
    window.setTimeout(function() {success.style.display="none"}, 1500);
});   

//Modal close
function closed() {
    modal.style.display="none";
}

