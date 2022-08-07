const defaultState = {
  files: [],
  currentDir: null,
  popupDisplay: "none",
  dirStack: [],
  view: "list",
};

export default function fileReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return defaultState;
  }
}
