import React, { useState } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { deleteBook } from '../utils/API';
import Auth from '../utils/auth';
import { getSavedBookIds, removeBookId } from '../utils/localStorage';
import { REMOVE_BOOK } from '../utils/mutations';

const SavedBooks = () => {
  // const [setUserData] = useState({});
  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());
  // // const { username: userParam } = useParams();
  
  // // console.log(user.savedBooks);
  // console.log(user.savedBooks);

  // const userDataLength = user.bookCounter;

  const { data: userData } = useQuery(GET_ME);
  const user = userData?.me || {};
  console.log(user);

  const result1 = user.savedBooks?.length;
  console.log(result1);

  const userDataLength = result1;

  const [removeBook] = useMutation(REMOVE_BOOK);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeBook({
        variables: { bookId: bookId }
      });
      console.log(data);
      // upon success, remove book's id from localStorage
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {user.savedBooks?.length
            ? `Viewing ${user.savedBooks.length} saved ${user.savedBooks?.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {user.savedBooks?.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
