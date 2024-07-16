import './Map.css';
import { Dispatch, SetStateAction, useState } from 'react';
import ExaminationRoom from './ExaminationRoom';
import CounsellingRoom from './CounsellingRoom';
import HealingRoom from './HealingRoom';
import Pharmacy from './Pharmacy';
import MedicineRoom from './MedicineRoom';
import { Drawer } from '@mantine/core';
import { Stage, Container, Sprite, Text } from '@pixi/react';
// import PixiApp from "./Pixi";
import 'animate.css';

const LandImg = '/img/base-map-no-bg.svg';
const OceanImg = '/img/ocean-wave.svg';
const houseData = [
    {className: 'Examination-room', image: '/img/examination-room.svg', marker: '/img/examination-room-tag.svg', content: <ExaminationRoom/>},
    {className: 'Counselling-room', image: '/img/counselling-room.svg', marker: '/img/counselling-room-tag.svg', content:  <CounsellingRoom/>},
    {className: 'Healing-room', image: '/img/healing-room.svg', marker: '/img/healing-room-tag.svg', content:  <HealingRoom/>},
    {className: 'Pharmacy', image: '/img/pharmacy.svg', marker: '/img/pharmacy-tag.svg', content:  <Pharmacy/>},
    {className: 'Medicine-room', image: '/img/medicine-room.svg', marker: '/img/medicine-room-tag.svg', content:  <MedicineRoom/>},
];


type HouseProps = {
    className: string;
    image: string;
    marker: string;
    onClick: Dispatch<SetStateAction<string | null>>;
}

function House({className, image, marker, onClick}: HouseProps) {

    // for showing name tag
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    // for showing side panel
    const handleClick = () => {
        onClick(className);
    }

    return (
        <button className={`Houses ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
            {isVisible && <img className='Marker' src={marker} alt={`${marker}`}/>}
            <img className='House-img' src={image} alt={`${image}`} />
        </button>
    );
}


export default function Map() {
    const [currentHouse, setCurrentHouse] = useState<string | null>(null)
    function close()  {
        setCurrentHouse(null);
    }

    const selectedContent = houseData.find(el => el.className === currentHouse)?.content;


    return (
        <>
            <Drawer opened={currentHouse !== null} onClose={close} size="40%">
                {selectedContent}
            </Drawer>
            
            <div className='map-container'>
                
                <img 
                    className="Map"
                    src={LandImg}
                    alt="Island">
                </img>
                
                <img 
                    className="Ocean"
                    src={OceanImg}
                    alt="Waves">
                </img>
            
                {houseData.map((house, index) => 
                    <House
                        image={house.image}
                        marker={house.marker}
                        key={index}
                        className={house.className}
                        onClick={setCurrentHouse}
                    />
                )}
            </div>

        </>
    );
}