import './App.scss';

import { Header } from './components/header/header';
import Countries from './components/countries/countries';

function App() {
  return (
    <div className="container App">
      <Header />
      <Countries />
    </div>
  );
}

export default App;