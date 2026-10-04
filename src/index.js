import "./styles.css";
import { mainPageLoad } from "./modules/main-page-load.js"
import { menuPageLoad } from "./modules/menu-page-load.js";
import { aboutPageLoad } from "./modules/about-page-load.js";
import { clearpage } from "./modules/clear-page-load.js";

mainPageLoad()

const homeButton = document.querySelector("#home")
const menuButton = document.querySelector("#menu")
const aboutButton = document.querySelector("#about")

homeButton.addEventListener("click", ()=> {
    clearpage()
    mainPageLoad()
})

menuButton.addEventListener("click", ()=> {
    clearpage()
    menuPageLoad()
})

aboutButton.addEventListener("click", ()=> {
    clearpage()
    aboutPageLoad()
})

