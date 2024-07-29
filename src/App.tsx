import React from "react";
import Map from "./map/Map";
import "./App.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider} from '@mantine/core';

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

export default function App() {
    return (
      <MantineProvider>
        <MainContainer>
            <Map />
         </MainContainer>
      </MantineProvider>
    );
  }
