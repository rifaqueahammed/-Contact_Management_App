import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './layout/sidebar';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <div className="App flex">
      <Provider store={store}>
      <Router>
          <Sidebar/>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
