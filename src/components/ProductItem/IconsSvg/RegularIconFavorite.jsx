import React from 'react'

import { ItemFavoriteContainer } from '../StyledProductItem'

export const RegularIconFavorite = (props) => {
    const{ onClick} = props;
    return (
        <ItemFavoriteContainer>
            <svg width="100%" height="100%" viewBox="0 0 485 485" onClick={onClick}>
                <g>
                    <path d="M343.611,22.543c-22.613,0-44.227,5.184-64.238,15.409c-13.622,6.959-26.136,16.205-36.873,27.175
                    c-10.738-10.97-23.251-20.216-36.873-27.175c-20.012-10.225-41.625-15.409-64.239-15.409C63.427,22.543,0,85.97,0,163.932
                    c0,55.219,29.163,113.866,86.678,174.314c48.022,50.471,106.816,92.543,147.681,118.95l8.141,5.261l8.141-5.261
                    c40.865-26.406,99.659-68.479,147.682-118.95C455.838,277.798,485,219.151,485,163.932C485,85.97,421.573,22.543,343.611,22.543z
                     M376.589,317.566c-42.918,45.106-95.196,83.452-134.089,109.116c-38.893-25.665-91.171-64.01-134.088-109.116
                    C56.381,262.884,30,211.194,30,163.932c0-61.42,49.969-111.389,111.389-111.389c35.361,0,67.844,16.243,89.118,44.563
                    l11.993,15.965l11.993-15.965c21.274-28.32,53.757-44.563,89.118-44.563c61.42,0,111.389,49.969,111.389,111.389
                    C455,211.194,428.618,262.884,376.589,317.566z"/>
                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
        </ItemFavoriteContainer>
    )
}

// const ItemFavoriteContainer = styled.div`
// position: absolute;
// top: 2rem;
// right: 1.4rem;
// width: 2.5rem;
// height: 2.5rem;
// cursor: pointer;
// fill: #aecfd9;
// transition: all .3s linear;
//     &:hover{
//         transform:scale(1.2);
//     };
//     @media ${device.desktop}{
//         top: 2.2rem;
//     };
// `;