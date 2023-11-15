import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className="App">
     
     <ParticlesBg color='#FFFFFF' type="cobweb" bg={true} />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>

             {/* 
      FaceRecognition*/}
    </div>
  );
}

export default App;
