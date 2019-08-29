import { UPDATE_MARKDOWN, CREATE_DOCUMENT } from '../actions/documentActions';

const initialState = {
  documents: [{ title: 'title', markdown: '# Hello there' }],
  currentDocument: 0
};

export default function documentReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, documents: state.documents.map((doc, i) => {
        return i === state.currentDocument ? 
          { ...doc, markdown: action.payload } :
          doc; 
      }) };
    case CREATE_DOCUMENT:
      return { ...state, documents: [...state.documents, { title: action.payload, markdown: '' }] }; 
    default:
      return state;
  }
}
