import logo from './logo.svg';
import './App.css';
import { Dashboard } from './screens';
import './constants/fonts.module.css';

function App() {
  return (
    <div className="body">
      <div className="container">
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
