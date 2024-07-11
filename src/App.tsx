import React from "react";
import Map from "./Map";
import "./App.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { createTheme, MantineProvider} from '@mantine/core';
// import { Stage, Container, Sprite, Text } from '@pixi/react';
import PixiApp from "./Pixi";



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
            {/* <Header />
            <Map /> */}
            <PixiApp />
            
         </MainContainer>
      </MantineProvider>
    );
  }
