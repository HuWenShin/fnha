import React from "react";
import Map from "./map/Map";
import "./App.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider} from '@mantine/core';

const logo = '/img/all-logo.svg';

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
            <a className="fnha-logo" href="https://www.fnha.ca" target="_blank">
                <img src={logo} alt="FNHA logo"></img>
            </a>
        </div>
    );
}

export default function App() {
    return (
      <MantineProvider>
        <MainContainer>
            <Header />
            <Map />
         </MainContainer>
      </MantineProvider>
    );
  }
