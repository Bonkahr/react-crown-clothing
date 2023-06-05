import { Routes, Route } from 'react-router-dom';

import './categories.styles.scss';

import Home from './components/routes/home/home.component';
import NavigationBar from './components/routes/navigationBar/navigationbar.component';
import Authentication from './components/routes/authentication/authentication.component';

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<NavigationBar />}
      >
        <Route
          index
          element={<Home />}
        />

        <Route
          path='auth'
          element={<Authentication />}
        />
      </Route>
    </Routes>
  );
};

export default App;
