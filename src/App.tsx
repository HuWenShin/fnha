import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapDisplay from './Map';

const mapImg = '/Users/Ruby/Desktop/land.png'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function MainContainer() {
  return (
    <div className='main-container'>

    </div>
  );
}

function Header() {
    return (
        <div className='header'>
            <h3>About Us</h3>
            <h3>Hello</h3>
            <h3>Nice To Meet You</h3>
            <ul></ul>
        </div>
    );
}





export default function App() {
    return (
        <>
            <MainContainer />
            <Header />
            <MapDisplay />
        </>
    );
};
