import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import { useMutation } from '@apollo/client';
import { GET_ME } from './utils/queries';
import { SAVE_BOOK } from './utils/mutations';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// const [saveBook, { error }] = useMutation(SAVE_BOOK, {
//   update(cache, { data: { saveBook } }) {
    
//       // could potentially not exist yet, so wrap in a try/catch
//     try {
//       // update me array's cache
//       const { me } = cache.readQuery({ query: GET_ME });
//       cache.writeQuery({
//         query: GET_ME,
//         data: { me: { ...me, books: [...me.books, saveBook] } },
//       });
//     } catch (e) {
//       console.warn("First thought insertion by user!")
//     }
//   }
// });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={SearchBooks} />
            <Route exact path='/saved' component={SavedBooks} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
