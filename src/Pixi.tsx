import { Container, Sprite, Stage, Text } from '@pixi/react';
import { useMemo } from 'react';
import { BlurFilter, TextStyle } from 'pixi.js';

export default function PixiApp() {

    return(
        <div className='PixiDiv'>
            <Stage options={{ backgroundAlpha: 0, resizeTo: window }}>
                <Sprite image='/img/ocean-wave.svg' />
            </Stage>
        </div>
    );
    
    
}
