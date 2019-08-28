const initialState = {
  markdown: '# Hi there'
};

export default function documentReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
