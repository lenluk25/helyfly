import s from './App.modue.scss';
import Fhotosession from './components/blocks/fhotosession/Fhotosession';
import Header from './components/blocks/header/Header';
import Main from './components/blocks/main/Main';
import PackagePhotos from './components/blocks/packagePhotos/PackagePhotos';
import Profile from './components/blocks/profile/Profile';

function App() {
  return (
    <div className={s.App}>
      <Header/>
      <Main/>
      <Fhotosession/>
      <PackagePhotos/>
      <Profile/>
    </div>
  );
}

export default App;
