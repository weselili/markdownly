export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';

export const updateMarkdown = markdown => ({
  type: UPDATE_MARKDOWN,
  payload: { markdown }
});

export const UPDATE_CURRENT_DOCUMENT = 'UPDATE_CURRENT_DOCUMENT';

export const updateCurrentDocument = (currentDocument) => ({
  type: UPDATE_CURRENT_DOCUMENT,
  payload: currentDocument
});
