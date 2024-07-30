import './Rooms.css';
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Image, Modal, Paper } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import classes from '/src/hotspot/hotspot.module.css';
import { HealingImg1Hotspot } from '../hotspot/healing-hotspot';


// Carousel page content
const images = [
    {source: '/img/healing-room-carousel-1.jpg', 
    content: <HealingImg1Hotspot/>, 
    text: 'Healing room is the sacred space of FNPCCs where talking circles and groups are offered to support healing journeys. Elders and healers engage clients in drumming and singing ceremonies to promote spiritual wellness. The design of the healing room is led by Elders which aims to create a physical environment that is culturally safe for First Nations people.', 
    ref1: 'https://www.fnha.ca/what-we-do/health-system/first-nations-led-primary-health-care-initiative',
    ref2: 'https://www.facebook.com/firstnationshealthauthority/posts/in-stsailes-councillor-chad-paul-has-also-joined-the-drumming-at-700-pm-every-ni/1553241014829970/'
    }
  ];


export default function HealingRoom() {
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
                <h1>Healing Room</h1>
                <img className='modal-img-1' src='/img/healing-room.svg' alt="Healing Room Interior" />
                <p>
                    The First Nations-led Primary Health Care Centre​ (FNPCCs) recognize the importance of mental, emotional, spiritual and physical facets of a healthy, well and balanced life. 
                    Traditional Elders and Healers at FNPCCs share cultural knowledge and teachings and engage clients in practices, ceremonies, and wholistic ways of healing from trauma.
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
                    slideSize="70%"
                    slideGap="xl" 
                    align="center"
                    onSlideChange={handleSlideChange}>
                    {slides}
                </Carousel>


                <div className="img-text">
                    <p>{images[currentIndex].text}</p>
                    <p>Source 1: <a href={images[currentIndex].ref1}>{images[currentIndex].ref1}</a></p>
                    <p>Source 2: <a href={images[currentIndex].ref2}>{images[currentIndex].ref2}</a></p>
                </div>
            </Modal>

            
        </div>
    );
}