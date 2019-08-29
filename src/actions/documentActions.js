export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';

export const updateMarkdown = markdown => ({
  type: UPDATE_MARKDOWN,
  payload: markdown
});

export const GET_TITLE = 'GET_TITLE';

export const getTitle = title => ({
  type: GET_TITLE,
  payload: title
});
