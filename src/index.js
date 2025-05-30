import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js"

home();

document.querySelector("nav").addEventListener("click", e => {
  if (e.target.id) {
    document.querySelector("#content").textContent = "";
    switch (e.target.id) {
      case "home":
        home();
        break;
      case "menu":
        menu();
        break;
      case "contact":
        contact();
        break;
    }
  }
});