import './Rooms.css';
import { useCallback, useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Image, Modal} from '@mantine/core'
import { Carousel} from '@mantine/carousel'


// place holder images and descriptions
const images = [
    {source: '/img/team-base_0708.jpg', text: 'FNPCCs will see different types of Traditional and western care providers working together in a “team-based approach" in the same space to meet the health care needs of First Nations peoples. Elders, Sacred Knowledge Keepers and Traditional Wellness Practitioners will be key members of the primary health care team and work in close collaboration with western medicine practitioners.', ref: 'https://www.fnha.ca/what-we-do/health-system/first-nations-led-primary-health-care-initiative'},
    {source: '/img/examine-room_0708.jpg', text: 'FNPCCs provide physical healthcare services such as nursing services and appointments with family practice physicians. Other services include health assessments; immunizations; reproductive health, including PAPs & STI screening; advanced foot care; wound care; health education/promotion and assessment support for Virtual physician appointments.', ref: 'https://www.allnationshealingwl.ca/services/ '},
  ];


export default function ExaminationRoom() {
    //side panel controls
    const [opened, { open, close }] = useDisclosure(false);

    //text change with image change
    const [currentIndex, setCurrentIndex] = useState(0);

    // mapping place holder images into the carousel
    const slides = images.map((img, index) => (
        <Carousel.Slide key={index}>
            <Image src={img.source}  alt={`Slide ${index}`}/>
        </Carousel.Slide>
    ));

    const handleSlideChange = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div>
            <div className="modal-content">
                <h1>Examination Room</h1>
                <img className='modal-img-1' src='/img/examination-room.svg' alt="Examination Room Interior" />
                <p>
                    The First Nations-led Primary Health Care Centre​ (FNPCCs) recognize the importance of mental, emotional, 
                    spiritual and physical facets of a healthy, well and balanced life. 
                    The FNPCCs offer wrap-around care where clients can access various healthcare services at one stop to maintain physical wellness. 
                </p>
                <button onClick={open}>LEARN MORE</button>
            </div>
            

            <Modal
                opened={opened}
                onClose={close}
                fullScreen
                radius={0}
                transitionProps={{ transition: 'fade', duration: 500 }}
            >   

                <Carousel 
                    loop
                    withIndicators 
                    dragFree
                    slideSize="60%"
                    slideGap="xl" 
                    align="center"
                    onSlideChange={handleSlideChange}>
                    {slides}
                </Carousel>


                <div className="img-text">
                    <p>{images[currentIndex].text}</p>
                    <span>Source: <a href={images[currentIndex].ref}>{images[currentIndex].ref}</a></span>
                </div>
            </Modal>

            
        </div>
    );
}