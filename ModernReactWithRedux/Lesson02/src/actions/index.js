export function selectBook(book){
  // console.log('a book has been selected:', book.title);
  // sleectBook is an action creator, needs to return an actions
  // object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book

  }
}
