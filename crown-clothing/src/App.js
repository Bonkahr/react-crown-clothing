import { Routes, Route } from 'react-router-dom';

import './categories.styles.scss';

import Home from './components/routes/home/home.component';
import NavigationBar from './components/routes/navigationBar/navigationbar.component';
import SignIn from './components/routes/sign-in/sign-in.component';

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
          path='sign-in'
          element={<SignIn />}
        />
      </Route>
    </Routes>
  );
};

export default App;
