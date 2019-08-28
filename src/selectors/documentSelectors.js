
export const getDocuments = state => state.document.documents;

export const getCurrentDocument = state => state.document.currentDocument;

// getting a document based on its integer
export const getDocument = state => {
  const index = getCurrentDocument(state);
  const documents = getDocuments(state);
  console.log(documents[index]);
  return documents[index];
};
