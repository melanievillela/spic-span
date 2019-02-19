//Global variables
const date = new Date();
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const contact = document.querySelector("#contact");

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

//Modal open/close
contact.addEventListener("click", () => {
    const modal = document.querySelector(".modal-background");
    modal.style.display="flex";
    const body = document.querySelector("body");
    body.style.overflowY="hidden"
    const close = document.querySelector("#close");
    close.addEventListener("click", () => {
        modal.style.display="none";
        body.style.overflowY="auto";
    })
})
