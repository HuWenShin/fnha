import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import MapDisplay from "./Map";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider} from '@mantine/core';


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

const theme = createTheme({
    // Put your mantine theme override here
  });

export default function App() {
    return (
      <MantineProvider>
        <MainContainer>
             <Header />
             <MapDisplay />
         </MainContainer>
      </MantineProvider>
    );
  }

// export default function App() {
//     return (
        
//         <MainContainer>
//             <Header />
//             <MapDisplay />
//         </MainContainer>
//     );
// };

// withGlobalStyles withNormalizeCSS
