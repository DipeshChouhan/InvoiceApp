// load from local storage
const appState = {
  theme: 0, // light theme
  filterChecked: "filter-draft-check",
  dropDown: 0,
};

const appLocalState = {
  dropDownState: ["none", "display"],
  dropDownIndex: 1,
  drawerState: 0,
};
export { appState, appLocalState };
