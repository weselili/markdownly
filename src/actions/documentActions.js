export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';

export const updateMarkdown = markdown => ({
  type: UPDATE_MARKDOWN,
  payload: { markdown }
});

export const UPDATE_CURRENT_DOCUMENT = 'UPDATE_CURRENT_DOCUMENT';

export const updateCurrentDocument = (id) => ({
  type: UPDATE_CURRENT_DOCUMENT,
  payload: { id }
});
