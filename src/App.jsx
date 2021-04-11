import s from './App.modue.scss';
import Fhotosession from './components/blocks/fhotosession/Fhotosession';
import Header from './components/blocks/header/Header';
import Main from './components/blocks/main/Main';

function App() {
  return (
    <div className={s.App}>
      <Header/>
      <Main/>
      <Fhotosession/>
    </div>
  );
}

export default App;
