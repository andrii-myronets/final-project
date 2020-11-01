import styled from 'styled-components'
import { device } from '../../styles/breakpoints/breakpoints'
import { Link } from 'react-router-dom'

export const ConteinerItem = styled.li`
width: 29rem;
list-style: none;
border: .1rem solid #e6e9ef;
transition: all .3s linear;
margin-bottom: 2rem;
    &:hover{
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    };
    @media ${device.tabletS}{
        width: 33rem;
    };
    @media ${device.tabletM}{
        width: 25.2rem;
    };
    @media ${device.tabletL}{
        width: 21.5rem;
    };
    @media ${device.desktop}{
        width: 100%;
    };
`

export const PhotoBox = styled.div`
display: flex;
height: 29rem;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;
padding: .5rem;
    @media ${device.tabletS}{
        height: 33rem;
    };
    @media ${device.tabletM}{
        height: 25.2rem;
        padding: 1rem;
    };
    @media ${device.tabletL}{
        height: 21.5rem;
    };
    @media ${device.desktop}{
        height: 26.5rem;
        padding: 1.3rem;
    };
`

export const Photo = styled.img`
max-width: 100%;
max-height: 100%;
cursor: pointer;
`

export const ProductActivityContainer = styled.div`
position: absolute; 
top: 0;
left: 0;
width: 6.7rem;
height: 6.7rem;
border-bottom-right-radius: 100%;
background-color: #e6e9ef;
`

export const IconContainer = styled.span`
display: flex;
justify-content: center;
align-items: center;
width: 5rem;
`

export const SaleIcon = styled.span`
    fill: #8D145E;
`

export const NewIcon = styled.span`
    fill: #8CB6DB;
`

export const TopRatedIcon = styled.span`
    fill: #7D37A3;
`

export const TitleBox = styled.div`
display: flex;
flex-direction: column;
position: relative;
padding: .5rem 1.4rem 1.4rem 1.4rem;
`

export const NameContainer = styled.div`
height: 4rem;
`

export const Name = styled.span`
font-size: 1.4rem;
font-weight: 700;
cursor: pointer;
    @media ${device.tabletS}{
        font-size: 1.6rem;
    };
`

export const Price = styled.span`
font-size: 2.5rem;
font-weight: 800;
color: #6F909A;
    &::after{
        content: 'грн';
        position: relative;
        left: .5rem;
        font-size: 1.3rem;
        font-weight: 700;
    }
    @media ${device.tabletM}{
        font-weight: 800;
        font-size: 3rem;
            &::after{
                left: 1rem;
                font-size: 1.8rem;
                font-weight: 700;
        };
    };
`

export const ItemFavoriteContainer = styled.div`
position: absolute;
top: 2rem;
right: 1.4rem;
width: 2.5rem;
height: 2.5rem;
cursor: pointer;
fill: #aecfd9;
transition: all .3s linear;
    &:hover{
        transform:scale(1.2);
    };
    @media ${device.desktop}{
        top: 2.2rem;
    };
`

export const StyledLink = styled(Link)`
text-decoration: none;
color: #333333;
`
