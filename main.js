import {
  themeSwitch,
  filterBtn,
  filterDropDown,
  onThemeSwitcherClick,
  onFilterButtonClick,
  onFilterCheckClick,
  onNewInvoiceBtnClick,
  drawer,
  overlay,
} from "./src/components.js";
import { appState as state, appLocalState as localState } from "./src/state.js";

themeSwitch.addEventListener("click", onThemeSwitcherClick(state));

filterBtn.addEventListener("click", onFilterButtonClick(localState));

filterDropDown.addEventListener("click", onFilterCheckClick(state));

document
  .querySelector(".new-invoice-btn")
  .addEventListener("click", onNewInvoiceBtnClick(localState));

document.body.addEventListener("click", (event) => {
  console.log(event.target.className);
  if (
    event.target.className != "filter-dropdown" &&
    event.target.className != "filter-btn" &&
    event.target.className != "filter-dropdown-item"
  ) {
    if (localState.dropDownIndex == 0) {
      filterDropDown.style.display = "none";
      filterBtn.children[2].style.transform = "rotate(0deg)";
      localState.dropDownIndex = 1;
    }
  }
  if (localState.drawerState) {
    if (event.target.className == "overlay") {
      localState.drawerState = 0;
      drawer.style.transform = "translateX(-750px)";
      overlay.style.display = "none";
    }
  }
});
