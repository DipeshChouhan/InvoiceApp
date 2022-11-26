
const lBgPrimaryClr = "rgb(248, 248, 251)";
const dBgPrimaryClr = "rgb(20, 22, 37)";


const lBgListItemClr = "rgb(255, 255, 255)";
const dBgListItemClr = "rgb(30, 33, 57)";

const lBgDropdownClr = "rgb(255, 255, 255)";
const dBgDropdownClr = "rgb(37, 41, 69)";

const lBgTernaryClr = "rgb(55, 59, 83)";
const dBgTernaryClr = "rgb(30, 33, 57)";
const lBgSecondaryClr = "rgb(248, 248, 251)";
const dBgSecondaryClr = "rgb(37, 41, 69)";

const lTxtPrimaryClr = "rgb(136, 142, 176)";
const dTxtPrimaryClr = "rgb(223, 227, 250)";
const lTxtSecondaryClr = "rgb(12, 14, 22)";
const dTxtSecondaryClr = "rgb(255, 255, 255)";

const lBoxShadowValue = "rgba(72, 84, 159, 0.25) 0px 10px 20px";
const dBoxShadowValue = "rgba(0, 0, 0, 0.25) 0px 10px 20px";

const lBgCheckClr = "rgb(223, 227, 250)";
const dBgCheckClr = "rgb(30, 33, 57)";

const lBgPageDueBox = "rgb(55, 59, 83)";
const dBgPageDueBox = "rgb(0, 0, 0)";

const lBgDrawer = "rgb(255, 255, 255)";
const dBgDrawer = "rgb(20, 22, 37)";

const lBgDrawerAddBtn = "rgb(249, 250, 254)";
const dBgDrawerAddBtn = "rgb(37, 41, 69)";

const themeClrs = new Map([
  ["--bg-primary", [lBgPrimaryClr, dBgPrimaryClr]],
  ["--bg-secondary", [lBgSecondaryClr, dBgSecondaryClr]],
  ["--bg-list-item", [lBgListItemClr, dBgListItemClr]],
  ["--bg-dropdown", [lBgDropdownClr, dBgDropdownClr]],
  ["--bg-ternary", [lBgTernaryClr, dBgTernaryClr]],
  ["--txt-primary-clr", [lTxtPrimaryClr, dTxtPrimaryClr]],
  ["--txt-secondary-clr", [lTxtSecondaryClr, dTxtSecondaryClr]],
  ["--dropdown-box-shadow", [lBoxShadowValue, dBoxShadowValue]],
  ["--bg-check", [lBgCheckClr, dBgCheckClr]],
  ["--bg-page-due-box", [lBgPageDueBox, dBgPageDueBox]],
  ["--bg-drawer", [lBgDrawer, dBgDrawer]],
  ["--bg-drawer-add-btn", [lBgDrawerAddBtn, dBgDrawerAddBtn]],
]);


function applyTheme(theme) {

  themeClrs.forEach((value, key) => {
    document.documentElement.style.setProperty(key, value[theme]);
  });
}

export {applyTheme};
