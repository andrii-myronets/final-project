import React, { useState } from 'react';

import useWindowDimensions from '../../../../utils/useWindowDimensions';
import {
  NewItem,
  IconContainer,
  ItemText,
  SubList,
  SubItem,
  ImageIcon,
  StyledLink,
  ItemContainer,
  TextContainer,
  ArrowContainer,
  Arrow,
  StyledLinkMainCategory
} from '../StyledCatalog';
import { useSelector } from 'react-redux';
import { selectByParentCategory } from '../../../../store/categories/selectors';
import PropTypes from 'prop-types';

export const CatalogItem = (props) => {
  const { category, icon, id, route } = props;
  console.log(typeof id);
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const { screenWidth } = useWindowDimensions();
  const subCategory = useSelector(selectByParentCategory(category));

  return (
    <>
      {screenWidth < 1200 && (
        <NewItem key={id}>
          <ItemContainer>
            <StyledLinkMainCategory to={`/catalog/${route}`}>
              <TextContainer>
                <IconContainer>
                  <ImageIcon src={icon} />
                </IconContainer>
                <ItemText>{category}</ItemText>
              </TextContainer>
            </StyledLinkMainCategory>
            <ArrowContainer onClick={() => {
              setIsOpen(!isOpen)
            }}
            >
              <Arrow src='https://res.cloudinary.com/dg-home/image/upload/v1604669007/General/down-arrow_1_whfnzc.png' />
            </ArrowContainer>
          </ItemContainer>
          {isOpen &&
            <SubList>
              {subCategory.map((e, index) => (
                <StyledLink to={`/catalog/${e.route}`} key={index}>
                  <SubItem>{e.category}</SubItem>
                </StyledLink>
              ))}
            </SubList>}

        </NewItem>
      )}
      {screenWidth >= 1200 && (
        <NewItem key={id} onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
          <ItemContainer>
            <StyledLinkMainCategory to={`/catalog/${route}`}>
              <TextContainer>
                <IconContainer>
                  <ImageIcon src={icon} />
                </IconContainer>
                <ItemText>{category}</ItemText>
              </TextContainer>
            </StyledLinkMainCategory>
          </ItemContainer>
          {hover &&

            <SubList>
              {subCategory.map((e, index) => (
                <StyledLink to={`/catalog/${e.route}`} key={index}>
                  <SubItem>{e.category}</SubItem>
                </StyledLink>
              ))}
            </SubList>}
        </NewItem>
      )}
    </>
  )
}

CatalogItem.propTypes = {
  category: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  route: PropTypes.string,
};

CatalogItem.defaultProps = {
  category: 'Категория',
  icon: 'https://res.cloudinary.com/dg-home/image/upload/v1604312381/General/dg-home-logo_onswjp.png',
  id: '1',
  route: '/'
};
