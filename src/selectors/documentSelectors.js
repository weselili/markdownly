export const getMarkdown = state => state.documents.markdown;

const getAllDocuments = state => state.documents.documents;

export const getAllTitles = state => {
  return getAllDocuments(state).map(doc => {
    return doc.title;
  });
};
