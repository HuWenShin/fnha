import './Map.css';
import {Dispatch, SetStateAction, useState} from 'react';
import Houseone from './houseone';
import { Drawer } from '@mantine/core';


const LandImg = '/img/land.png'
const HouseImg = '/img/08.png'
const PinImg = '/img/location-pin.png'


const houseData = [
    {className: 'House-1', url: '', content: <Houseone/>},
    {className: 'House-2', url: '', content:  <div>content 2</div>},
    {className: 'House-3', url: '', content:  <div>content 3</div>},
    {className: 'House-4', url: '', content:  <div>content 4</div>},
    {className: 'House-5', url: '', content:  <div>content 5</div>},
];


type HouseProps = {
    className: string;
    url: string;
    onClick: Dispatch<SetStateAction<string | null>>;
}

function House({className, url, onClick}: HouseProps) {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    const handleClick = () => {
        onClick(className);
    }

    return (
        <button className={`Houses ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
            {isVisible && <img className='Marker' src={PinImg} alt='Map marker'/>}
            <div >
                <img className='House-img' src={HouseImg} alt="House on land" />
            </div>
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
            <Drawer  opened={currentHouse !== null} onClose={close} title="Info">
                {selectedContent}
            </Drawer>
            <div className='map-holder'>
                {houseData.map((house, index) => 
                    <House
                        key={index}
                        className={house.className}
                        url={house.url}
                        onClick={setCurrentHouse}
                    />
                )}
                <img 
                className="Map"
                src={LandImg}
                alt="example land">
                </img>
            </div>
        </>
    );
}