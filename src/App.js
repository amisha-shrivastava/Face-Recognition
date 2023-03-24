import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
// import Particles from './components/Particles/Particles';


function App() {
  return (
    <div className="App">
      {/* <Particles className="particles"/> */}
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      
      {/*  <FaceRecog/> */}
    </div>
  );
}

export default App;
