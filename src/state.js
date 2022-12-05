// load from local storage
let appState = {
  theme: 0, // light theme
  filterChecked: "filter-draft-check",
  dropDown: 0,
};

let appLocalState = {
  dropDownState: ["none", "block"],
  dropDownIndex: 1,
  drawerState: 0,
  invoiceCount: 0,
};
export { appState, appLocalState };
