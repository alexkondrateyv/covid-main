import './App.scss';

import Countries from './components/countries/countries';
import { Header } from './components/header/header';
import { Modal } from './components/modal/modal';

function App() {
  return (
    <div className="container App">
      <Modal />
      <Header />
      <Countries />
    </div>
  );
}

export default App;