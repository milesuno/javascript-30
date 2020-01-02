const panels = document.querySelectorAll(".panel");

function toggleOpen() {
    console.log("thus", this.classList);
    this.classList.toggle("open");
}

function toggleOpenActive() {
    return event.propertyName.includes("flex")
        ? this.classList.toggle("open-active")
        : null;
}

panels.forEach(panel => {
    panel.addEventListener("click", toggleOpen);

    //This code toggles the className of any click event in .panel
    // 		panels.forEach(panel => {
    // panel.addEventListener("click", event => {
    //   event.target.classList.toggle("open");
    // });

    panel.addEventListener("transitionend", toggleOpenActive);

    //This code toggles the className of any click event in .panel

    // panel.addEventListener("transitionend", event => {
    // 	return event.propertyName.includes("flex")
    // 		? event.target.classList.toggle("open-active")
    // 		: null;
    // });
});