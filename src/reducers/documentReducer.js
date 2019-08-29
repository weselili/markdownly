import { UPDATE_MARKDOWN } from '../actions/documentActions';

const initialState = {
  currentDocument: 0,
  documents: ['']
};

export default function documentReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN: {
      const newDocuments = [...state.documents];
      // editing the correct document 
      const index = state.currentDocument;
      newDocuments[index] = action.payload.markdown;
      return { ...state, 
        documents: newDocuments };
    }
    default:
      return state;
  }
}
