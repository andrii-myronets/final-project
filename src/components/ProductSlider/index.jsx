import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from 'styled-components';
import { device } from '../../styles/breakpoints/breakpoints';
import { getProducts } from '../../store/products_draft/middlware';
import { selectProducts, selectById } from '../../store/products_draft/selectors';
import useWindowDimensions from '../../utils/useWindowDimensions';


export const ProductSlider = (props) => {
    const [controll, setControll] = useState({ nav1: null, nav2: null });
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const { screenWidth } = useWindowDimensions();

    useEffect(() => {
        setControll({
            nav1: controll.slider1,
            nav2: controll.slider2
        })
    }, [screenWidth]);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    console.log(products);

    const img = [
        './img/chairs/bar/chair_Bontempi/chair_Bontempi_main.png',
        './img/chairs/bar/chair_Bontempi/chair_Bontempi1.jpg',
        './img/chairs/bar/chair_Bontempi/chair_Bontempi2.jpg',
        './img/chairs/bar/chair_Bontempi/chair_Bontempi3.jpg',
        './img/sofas/simple_sofa/sofa_Arketipo_Auto/sofa_Arketipo_Auto4.jpeg',
        './img/chairs/kitchen/chair_Hollywood_Loft/chair1_Hollywood_Loft1.jpg',
        './img/sofas/simple_sofa/sofa_Arketipo/sofa_Arketipo_main.jpg',
        './img/sofas/simple_sofa/sofa_Arketipo/sofa_Arketipo6.jpg',
    ];

    const slides = [];
    for (let i = 0; i < img.length; i++) {
        slides.push(
            <ImageMainContainer key={`slide-${i}`}>
                <ImageMain src={img[i]} alt={`Slide ${i}`} />
            </ImageMainContainer>
        )
    };

    const thumbs = [];
    for (let i = 0; i < img.length; i++) {
        thumbs.push(
            <ImageThumbsContainer key={`thumb-${i}`}>
                <ImageThumbs src={img[i]} alt={`Thumbnail ${i}`} />
            </ImageThumbsContainer>
        )
    };

    const gallerySlyderParams = {
        adaptive: true,
        dots: true,
        fade: true,
        swipe: true,
        touchMove: true
    };

    const thumbsHorizontalParams = {
        slidesToShow: 5,
        swipeToSlaide: true,
        focusOnSelect: true,
        arrows: false
    }
    const thumbsVerticalParams = {
        slidesToShow: 6,
        swipeToSlaide: true,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        arrows: false
    }

    return (
        <>
            {screenWidth <= 768 ?
                <ContainerHorizontal>
                    <SliderGalleryHorizontal id='product-slider'>
                        <Slider
                            asNavFor={controll.nav2}
                            ref={(slider => controll.slider1 = slider)}
                            {...gallerySlyderParams}
                        >
                            {slides}
                        </Slider>
                    </SliderGalleryHorizontal>
                    <SliderThumbsHorizontal>
                        <Slider
                            asNavFor={controll.nav1}
                            ref={slider => (controll.slider2 = slider)}
                            {...thumbsHorizontalParams}
                        >
                            {thumbs}
                        </Slider>
                    </SliderThumbsHorizontal>
                </ContainerHorizontal> :
                <ContainerVertical>
                    <SliderThumbsVertical>
                        <Slider
                            asNavFor={controll.nav1}
                            ref={slider => (controll.slider2 = slider)}
                            {...thumbsVerticalParams}
                        >
                            {thumbs}
                        </Slider>
                    </SliderThumbsVertical>
                    <SliderGalleryVertical id='product-slider'>
                        <Slider
                            asNavFor={controll.nav2}
                            ref={(slider => controll.slider1 = slider)}
                            {...gallerySlyderParams}
                        >
                            {slides}
                        </Slider>
                    </SliderGalleryVertical>
                </ContainerVertical>
            }
        </>
    )
}

const ContainerHorizontal = styled.section`
padding: 2rem;
/* background: coral; */
min-height: 40rem;
`;

const ContainerVertical = styled.section`
padding: 2rem;
background: #e6e9ef;
min-height: 40rem;
display: flex;
flex-flow: row;
justify-content: space-between;
`;

const SliderGalleryHorizontal = styled.div`
width: 100%;
margin-bottom: 3rem;
`;

const SliderGalleryVertical = styled.div`
width: 80%`;

const SliderThumbsHorizontal = styled.div`
width: 100%;`

const SliderThumbsVertical = styled.div`
width: 15%;`

const ImageMainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 28rem;
overflow: hidden;
/* border: .1rem solid #e6e9ef; */
    @media ${device.tabletS}{
        height: 52rem;
    };
    @media ${device.tabletM}{
        height: 57.6rem;
    };
    @media ${device.tabletL}{
        height: 51rem;
    };
`;

export const ImageMain = styled.img`
display: block;
max-width: 100%;
height: unset;
overflow: hidden;
margin: 0 auto;
padding: .5rem;
background: #d0dcf3;
`;

const ImageThumbsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 7rem;
overflow: hidden;
/* border: .1rem solid #e6e9ef; */
    @media ${device.tabletS}{
        height: 9rem;
    };
    @media ${device.tabletM}{
        height: 8rem;
    };
    @media ${device.tabletL}{
        height: 8rem;
    };
`;

export const ImageThumbs = styled.img`
display: block;
max-width: 100%;
height: unset;
margin: 0 auto;
padding: .5rem;
transition: all .3s linear;
background: #d0dcf3;
    &:hover{
        transform: scale(1.2);
    }
`;