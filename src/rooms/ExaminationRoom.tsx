import './Rooms.css';
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Image, Modal, Paper} from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import classes from '/src/hotspot/hotspot.module.css';
import { ExamineImg2Hotspot } from '../hotspot/examination-hotspot';


// images, hotspot content and descriptions
const images = [
    {source: '/img/examination-room-carousel-1.jpg', content: <></>, text: 'FNPCCs will see different types of Traditional and western care providers working together in a “team-based approach" in the same space to meet the health care needs of First Nations peoples. Elders, Sacred Knowledge Keepers and Traditional Wellness Practitioners will be key members of the primary health care team and work in close collaboration with western medicine practitioners.', ref: 'https://www.fnha.ca/what-we-do/health-system/first-nations-led-primary-health-care-initiative'},
    {source: '/img/examination-room-carousel-2.jpg', content: <ExamineImg2Hotspot/>, text: 'FNPCCs provide physical healthcare services such as nursing services and appointments with family practice physicians. Other services include health assessments; immunizations; reproductive health, including PAPs & STI screening; advanced foot care; wound care; health education/promotion and assessment support for virtual physician appointments.', ref:'https://www.allnationshealingwl.ca/services/'},
  ];


export default function ExaminationRoom() {
    //side panel controls
    const [opened, { open, close }] = useDisclosure(false);

    //text change with image change
    const [currentIndex, setCurrentIndex] = useState(0);

    // mapping images into the carousel
    const hotspotContent = images[currentIndex].content;
    const slides = images.map((img, index) => (
        <Carousel.Slide key={index}>
            <Paper className={classes.imageMap__container}>
                <Image src={img.source} className={classes.img} />
                {hotspotContent}
            </Paper>
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
                    dragFree
                    withIndicators 
                    slideSize="70%"
                    slideGap="xl" 
                    align="center"
                    onSlideChange={handleSlideChange}
                    >
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