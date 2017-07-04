export function selectBook(book) {
  // selectBook is ActionCreator, must return action.
  // Object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
