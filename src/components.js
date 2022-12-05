import { applyTheme } from "./theme_switch.js";

let themeSwitch = document.querySelector(".theme-img");
let filterBtn = document.querySelector(".filter-btn");
let filterDropDown = document.querySelector(".filter-dropdown");

let drawer = document.querySelector(".drawer");
let overlay = document.querySelector(".overlay");

const LightTheme = 0;
const DarkTheme = 1;

function onThemeSwitcherClick(state) {
  let themeImg = document.querySelector(".theme-img");
  return () => {
    if (state.theme == 0) {
      // light theme
      themeImg.setAttribute("src", "assets/icon-sun.svg");
      state.theme = DarkTheme;
      applyTheme(DarkTheme);
    } else {
      themeImg.setAttribute("src", "assets/icon-moon.svg");
      state.theme = LightTheme;
      applyTheme(LightTheme);
    }
  };
}

function onFilterButtonClick(state) {

  return () => {
    filterDropDown.style.display = state.dropDownState[state.dropDownIndex];
    filterBtn.children[2].style.transform = `rotate(${-180 * state.dropDownIndex
      }deg)`;
    state.dropDownIndex ^= 1;
  };
}

function onFilterCheckClick(state) {
  let currFilterChecked = null;
  if (state.filterChecked) {
    // select filter
    currFilterChecked = document.getElementById(state.filterChecked);
    currFilterChecked.classList.add("filter-checked");
  }

  return (event) => {
    let filterCheckId = event.target.attributes.getNamedItem("key");
    if (filterCheckId != null) {
      filterCheckId = filterCheckId.value;

      let newFilterCheked = document.getElementById(filterCheckId);
      try {
        currFilterChecked.classList.remove("filter-checked");
      } catch (exceptionNull) {
        currFilterChecked = newFilterCheked;
        currFilterChecked.classList.add("filter-checked");
        return;
      }

      if (newFilterCheked != currFilterChecked) {
        currFilterChecked = newFilterCheked;
        currFilterChecked.classList.add("filter-checked");
        return;
      }

      currFilterChecked = null;
    }
  };
}

function onNewInvoiceBtnClick(state) {
  return () => {
    drawer.style.transform = "translateX(0px)";
    overlay.style.display = "block";
    state.drawerState = 1;
  };
}

export {
  themeSwitch,
  filterBtn,
  filterDropDown,
  drawer,
  overlay,
  onFilterCheckClick,
  onThemeSwitcherClick,
  onFilterButtonClick,
  onNewInvoiceBtnClick,
};
