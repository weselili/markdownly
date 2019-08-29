export const getCurrentDocument = state => state.documents.documents[state.documents.currentDocument];

export const getAllDocuments = state => state.documents.documents;

export const getAllTitles = state => {
  return getAllDocuments(state).map(doc => {
    return doc.title;
  });
};

export const getFormTitle = state => {
  return state.documents.formTitle;
};
