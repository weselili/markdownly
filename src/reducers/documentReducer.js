import { UPDATE_MARKDOWN } from '../actions/documentActions';

const initialState = {
  currentDocument: 0,
  documents: ['hello']
};

export default function documentReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN: {
      const newDocuments = [...state.documents];
      // line 13 is making sure that our markdown is being edited in the correct document
      // editing the correct document 
      const index = state.currentDocument;
      console.log('LANCE', state.currentDocument)
      newDocuments[index] = action.payload.markdown;
      console.log(newDocuments);
      return { ...state, 
        documents: newDocuments };
    }
    default:
      return state;
  }
}
