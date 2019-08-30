export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';

export const updateMarkdown = markdown => ({
  type: UPDATE_MARKDOWN,
  payload: markdown
});

export const CREATE_DOCUMENT = 'CREATE_DOCUMENT';

export const createDocument = title => ({
  type: CREATE_DOCUMENT,
  payload: title
});

export const CHANGE_CURRENT_DOCUMENT = 'CHANGE_CURRENT_DOCUMENT';

export const changeCurrentDocument = currentDocument => ({
  type: CHANGE_CURRENT_DOCUMENT,
  payload: currentDocument
});
