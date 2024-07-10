import { useApp } from '@pixi/react';
import run from './Pixi';


export default function PixiApp() {
  let app = useApp();
  app.stage.removeChildren();
  run(app);

  return (
    <></>
  );
}