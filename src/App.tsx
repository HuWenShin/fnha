import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MapDisplay from "./Map";

const mapImg = "/Users/Ruby/Desktop/land.png"

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
type MainContainerProps = {
    children: React.ReactNode;
}

function MainContainer({children}: MainContainerProps) {
  return (
    <div className="Main-container">
        {children}
    </div>
  );
}

function Header() {
    return (
        <div className="Header">
            <a className="Home-button" href="#">Home</a>
            <a className="About-us-button" href="#">About Us</a>
        </div>
    );
}


export default function App() {
    return (
        
        <MainContainer>
            <Header />
            <MapDisplay />
        </MainContainer>
    );
};
