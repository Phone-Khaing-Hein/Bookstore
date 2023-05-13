import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Rootlayout from './components/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Rootlayout />}
    >
      <Route
        index
        element={<BookList />}
      />

      <Route
        path="category"
        element={<Categories />}
      />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
