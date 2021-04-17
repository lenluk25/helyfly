import s from './App.modue.scss';
import Fhotosession from './components/blocks/fhotosession/Fhotosession';
import Header from './components/blocks/header/Header';
import Main from './components/blocks/main/Main';
import Map from './components/blocks/map/Map';
import PackagePhotos from './components/blocks/packagePhotos/PackagePhotos';
import Profile from './components/blocks/profile/Profile';
import Schedule from './components/blocks/schedule/Schedule';

function App() {
  return (
    <div className={s.App}>
      <Header/>
      <Main/>
      <Fhotosession/>
      <PackagePhotos/>
      <Profile/>
      <Schedule/>
      <Map/>
    </div>
  );
}

export default App;
