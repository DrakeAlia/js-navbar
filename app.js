// classList - shows/gets all classes (X)
// contains - checks classList for specific class (X)
// add - add class (x)
// remove - remove class (x)
// toggle - toggles class (x)

const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener("click", function () {
    // console.log(links.classList)
    // console.log(links.classList.contains("random"))
    // console.log(links.classList.contains("links"))
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links")
    // }
    // else {
    //     links.classList.add("show-links")
    // }
    // OR:
    links.classList.toggle("show-links")
})