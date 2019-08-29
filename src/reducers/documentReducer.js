import { UPDATE_MARKDOWN, UPDATE_TITLE } from '../actions/documentActions';

const initialState = {
  markdown: '# Hi there',
  documents: [{ title: 'title' }]
};

export default function documentReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, markdown: action.payload };
    case UPDATE_TITLE:
      return { ...state, documents: [{ title: action.payload }] };
    default:
      return state;
  }
}
