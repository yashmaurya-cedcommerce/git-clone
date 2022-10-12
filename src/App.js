import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>

      </div>
    </Provider>
  );
}

export default App;
