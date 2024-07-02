import './houseone.css';
import { useCallback, useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Image, Modal, Progress } from '@mantine/core'
import { Carousel, Embla } from '@mantine/carousel'


// place holder images and descriptions
const images = [
    {source: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png', text: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit magna et nunc volutpat malesuada. Integer justo enim, fermentum eu ullamcorper sed, vulputate ut ipsum. Morbi id orci vitae lectus lobortis vulputate in a sapien. Integer eu placerat enim. Proin dolor est, tincidunt sit amet urna eu, volutpat rutrum metus. Fusce mattis dignissim augue, nec placerat justo dignissim non. Aenean non tellus vel nibh aliquam aliquet. Fusce at lectus condimentum, dignissim elit a, bibendum felis. Praesent et volutpat est, non commodo sapien. Morbi accumsan, lectus eu consequat ornare, sapien purus tempus nulla, in egestas nibh erat sed purus. Proin pulvinar imperdiet lacinia. Quisque arcu sapien, fermentum et eleifend et, placerat nec purus.'},
    {source: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', text: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit magna et nunc volutpat malesuada. Integer justo enim, fermentum eu ullamcorper sed, vulputate ut ipsum. Morbi id orci vitae lectus lobortis vulputate in a sapien. Integer eu placerat enim. Proin dolor est, tincidunt sit amet urna eu, volutpat rutrum metus. Fusce mattis dignissim augue, nec placerat justo dignissim non. Aenean non tellus vel nibh aliquam aliquet. Fusce at lectus condimentum, dignissim elit a, bibendum felis. Praesent et volutpat est, non commodo sapien. Morbi accumsan, lectus eu consequat ornare, sapien purus tempus nulla, in egestas nibh erat sed purus. Proin pulvinar imperdiet lacinia. Quisque arcu sapien, fermentum et eleifend et, placerat nec purus.'},
    {source: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', text: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit magna et nunc volutpat malesuada. Integer justo enim, fermentum eu ullamcorper sed, vulputate ut ipsum. Morbi id orci vitae lectus lobortis vulputate in a sapien. Integer eu placerat enim. Proin dolor est, tincidunt sit amet urna eu, volutpat rutrum metus. Fusce mattis dignissim augue, nec placerat justo dignissim non. Aenean non tellus vel nibh aliquam aliquet. Fusce at lectus condimentum, dignissim elit a, bibendum felis. Praesent et volutpat est, non commodo sapien. Morbi accumsan, lectus eu consequat ornare, sapien purus tempus nulla, in egestas nibh erat sed purus. Proin pulvinar imperdiet lacinia. Quisque arcu sapien, fermentum et eleifend et, placerat nec purus.'},
    {source: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', text: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit magna et nunc volutpat malesuada. Integer justo enim, fermentum eu ullamcorper sed, vulputate ut ipsum. Morbi id orci vitae lectus lobortis vulputate in a sapien. Integer eu placerat enim. Proin dolor est, tincidunt sit amet urna eu, volutpat rutrum metus. Fusce mattis dignissim augue, nec placerat justo dignissim non. Aenean non tellus vel nibh aliquam aliquet. Fusce at lectus condimentum, dignissim elit a, bibendum felis. Praesent et volutpat est, non commodo sapien. Morbi accumsan, lectus eu consequat ornare, sapien purus tempus nulla, in egestas nibh erat sed purus. Proin pulvinar imperdiet lacinia. Quisque arcu sapien, fermentum et eleifend et, placerat nec purus.'},
    {source: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png', text: '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit magna et nunc volutpat malesuada. Integer justo enim, fermentum eu ullamcorper sed, vulputate ut ipsum. Morbi id orci vitae lectus lobortis vulputate in a sapien. Integer eu placerat enim. Proin dolor est, tincidunt sit amet urna eu, volutpat rutrum metus. Fusce mattis dignissim augue, nec placerat justo dignissim non. Aenean non tellus vel nibh aliquam aliquet. Fusce at lectus condimentum, dignissim elit a, bibendum felis. Praesent et volutpat est, non commodo sapien. Morbi accumsan, lectus eu consequat ornare, sapien purus tempus nulla, in egestas nibh erat sed purus. Proin pulvinar imperdiet lacinia. Quisque arcu sapien, fermentum et eleifend et, placerat nec purus.'},
  ];


export default function HouseOne() {
    //side panel controls
    const [opened, { open, close }] = useDisclosure(false);
    
    //carousel controls
    // const [scrollProgress, setScrollProgress] = useState(0);
    // const [embla, setEmbla] = useState<Embla | null>(null);

    //text change with image change
    const [currentIndex, setCurrentIndex] = useState(0);

    // carousel scroll
    // const handleScroll = useCallback(() => {
    //     if (!embla) return;
    //     const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    //     setScrollProgress(progress * 100);
    // }, [embla, setScrollProgress]);

    // selected carousel image
    // const handleSelect = useCallback(() => {
    //     if (!embla) return;
    //     setCurrentIndex(embla.selectedScrollSnap());
    //   }, [embla]);

    // useEffect(() => {
    //     if (embla) {
    //     embla.on('scroll', handleScroll);
    //     embla.on('select', handleSelect);
    //     handleScroll();
    //     }
    // }, [embla, handleScroll, handleSelect]);

    // mapping place holder images into the carousel
    const slides = images.map((img, index) => (
        <Carousel.Slide key={index}>
            <Image src={img.source}  alt={`Slide ${index}`}/>
        </Carousel.Slide>
    ));

    const handleSlideChange = (index: number) => {
        setCurrentIndex(index);
    };

    // text description
    // const text = images.map((img, index) => ());

    return (
        <div>
            <div className="modal-content">
                <h1>Examination Room</h1>
                <img className='modal-img-1' src='/img/examine-room.svg' alt="House on land" />
                <p>
                    The First Nations-led Primary Health Care Centre​ (FNPCCs) recognize the importance of mental, emotional, 
                    spiritual and physical facets of a healthy, well and balanced life. 
                    The FNPCCs offer wrap-around care where clients can access various healthcare services at one stop to maintain physical wellness. 
                </p>
                <button onClick={open}>Learn More</button>
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
                </div>
            </Modal>

            
        </div>
    );
}