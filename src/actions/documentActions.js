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
