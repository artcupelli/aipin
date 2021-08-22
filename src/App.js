import logo from './logo.svg';
import './App.css';
import { Dashboard,  } from './screens';
import './constants/fonts.module.css';
import { useState } from 'react';

function App() {

  const [screen, setScreen] = useState(<Dashboard/>);

  return (
    <div className="body">
      <div className="container">
        {
          screen
        }
      </div>
    </div>
  );
}

export default App;
