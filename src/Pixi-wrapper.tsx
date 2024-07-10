// import {Stage, Container, Sprite, Text} from '@pixi/react';
// import * as PIXI from 'pixi.js';
// import { Emitter, ParticleUtils } from '@pixi/particle-emitter';
// import React, { useEffect, useRef } from 'react';

// function Whale() {
    
//     return (
//         <canvas></canvas>
//     );
// }

import { useApp } from '@pixi/react';
import run from './Pixi';
import {Application} from 'pixi.js';

// type runprops  = {
//     app: Application;
//     delta: any;
// }

export default function PixiApp() {
  let app = useApp();
  app.stage.removeChildren();
  run(app);

  return (
    <></>
  );
}