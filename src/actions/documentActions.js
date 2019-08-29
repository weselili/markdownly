export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';

export const updateMarkdown = markdown => ({
  type: UPDATE_MARKDOWN,
  payload: markdown
});

export const UPDATE_TITLE = 'UPDATE_TITLE';

export const updateTitle = title => ({
  type: UPDATE_TITLE,
  payload: title
});
