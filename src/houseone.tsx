import { HouseImg } from "./Map";
import { useCallback, useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Image, Modal, Progress } from '@mantine/core'
import { Carousel, Embla } from '@mantine/carousel'


// place holder images
const images = [
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
  ];


// description to each image
const imgDescription = [
    'Image Description 1',
    'Image Description 2',
    'Image Description 3',
    'Image Description 4',
    'Image Description 5'
];


export default function HouseOne() {
    //side panel controls
    const [opened, { open, close }] = useDisclosure(false);
    
    //carousel controls
    const [scrollProgress, setScrollProgress] = useState(0);
    const [embla, setEmbla] = useState<Embla | null>(null);

    const handleScroll = useCallback(() => {
        if (!embla) return;
        const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
        setScrollProgress(progress * 100);
    }, [embla, setScrollProgress]);

    useEffect(() => {
        if (embla) {
        embla.on('scroll', handleScroll);
        handleScroll();
        }
    }, [embla]);

    // mapping place holder images into the carousel
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
          <Image src={url} />
        </Carousel.Slide>
      ));

    const description = imgDescription.map();
    

    return (
        <div>
            <h1>House 1</h1>
            <img className='House-img' src={HouseImg} alt="House on land" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean eget sem tincidunt, rhoncus libero vel, iaculis mi. 
                Nunc molestie consequat luctus. Sed sodales ac turpis eu vulputate. 
                Duis faucibus aliquam risus, condimentum laoreet nisi bibendum et. 
                Sed semper dictum turpis, et finibus urna ultrices ac. 
                Cras bibendum, metus eu interdum consectetur, tortor lacus tincidunt odio, sed molestie ligula enim sed quam. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sed tempor massa. 
                Aliquam cursus tempus odio, et auctor mi euismod in.
            </p>

            <Modal
                opened={opened}
                onClose={close}
                title="This is a fullscreen modal"
                fullScreen
                radius={0}
                transitionProps={{ transition: 'fade', duration: 500 }}
            >   

                <p></p>

                <Carousel
                    loop
                    dragFree
                    slideSize="50%"
                    slideGap="md"
                    getEmblaApi={setEmbla}
                    initialSlide={1}
                >
                    {slides}
                </Carousel>
                <Progress
                    value={scrollProgress}
                    maw={320}
                    size="sm"
                    mt="xl"
                    mx="auto"
                />
            </Modal>

            <button onClick={open}>Open Modal</button>
        </div>
    );
}