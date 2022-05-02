const fags = document.querySelectorAll(".fag");
fags.forEach(fag => {
    fag.addEventListener("click", () => {
        fag.classList.toggle("active");
    });
});