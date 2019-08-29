
export const getDocuments = state => state.documents.documents;

export const getCurrentDocument = state => state.documents.currentDocument;

// getting a document based on its integer
export const getDocument = state => {
  const index = getCurrentDocument(state);
  const documents = getDocuments(state);
  return documents[index];
};
