import './Map.css';
import { Dispatch, SetStateAction, useState } from 'react';
import Houseone from './houseone';
import { Drawer } from '@mantine/core';


const LandImg = '/img/base-map-no-bg.svg'
const HouseImg = '/img/08.png'
const PinImg = '/img/location-pin.png'

// const ExaminationImg = 'public/img/examine-room.svg'
// const CounsellingImg = 'public/img/consulting-room.svg'
// const HealingImg = 'public/img/healing-room.svg'
// const Img4 = 'public/img/examine-room.svg'
// const Img5 = 'public/img/examine-room.svg'


const houseData = [
    {className: 'Examination-room', image: '/img/examine-room.svg', marker: '/img/examine-room-tag.svg', content: <Houseone/>},
    {className: 'Counselling-room', image: '/img/consulting-room.svg', marker: '/img/counseling-room-tag.svg', content:  <div>content 2</div>},
    {className: 'Healing-room', image: '/img/healing-room.svg', marker: '/img/healing-room-tag.svg', content:  <div>content 3</div>},
    {className: 'House-4', image: '/img/examine-room.svg', marker: '', content:  <div>content 4</div>},
    {className: 'House-5', image: '/img/examine-room.svg', marker: '', content:  <div>content 5</div>},
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
            {isVisible && <img className='Marker' src={marker} alt='Map marker'/>}
            <img className='House-img' src={image} alt="House on land" />
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
            <Drawer opened={currentHouse !== null} onClose={close} title="Info">
                {selectedContent}
            </Drawer>
            <div className='map-conatiner'>
                <img 
                    className="Map"
                    src={LandImg}
                    alt="Island">
                </img>
                <div className='house-container'>
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
                
                
            </div>

        </>
    );
}

export {HouseImg, LandImg}