import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../../commons/Header/Header';
import { ContentContairer } from '../../components/Content/Content';
import { getProducts } from '../../store/products_draft/middlware';
import { selectByRoute } from '../../store/products_draft/selectors';
import { useToggle } from '../../utils/useToggle';
import { Title } from '../../components/Title/Title';
import { Button } from '../../components/Button';
import {
  ContainerDetails,
  ContainerProduct,
  Price,
  Article,
  AvailabilityArticleWrap,
  Availability,
  DimensionsContainer,
  Description,
  Subtitle,
  ActionsContainer,
  Actions,
  SpecificationContainer,
  DescriptionKey,
  ShowMore,
  PriceContainer,
  CurrentPrice,
  PreviousPrice
} from './StyledProductPage';
import { RegularIconFavorite } from '../../components/ProductItem/IconsSvg/RegularIconFavorite';
import { SolidIconFavorite } from '../../components/ProductItem/IconsSvg/SolidIconFavorite';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { ProductCounter } from '../../components/Counter/ProductCounter';
import { ProductSlider } from '../../components/ProductSlider';
import { IconSale } from '../../components/ProductItem/IconsSvg/IconSale';

export const ProductPage = ({ match }) => {
  const { params: { route } } = match;

  const { screenWidth } = useWindowDimensions();
  const [inFavorite, toggleInFavorite] = useToggle();
  const [isSpecification, setIsSpecification] = useState(false);
  const [isDimensions, setIsDimensions] = useState(false);
  const [value, setValue] = useState(1) // myronets

  const dispatch = useDispatch();
  const product = useSelector(selectByRoute(match.params.route));

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const toggleSpecificationBtn = () => {
    if (isSpecification) {
      return (
        <ShowMore onClick={() => setIsSpecification(false)}>&#9650;</ShowMore>
      );
    }
    return (
      <ShowMore onClick={() => setIsSpecification(!isSpecification)}>&#9660;</ShowMore>
    );
  };

  const toggleDimensionsBtn = () => {
    if (isDimensions) {
      return (
        <ShowMore onClick={() => setIsDimensions(false)}>&#9650;</ShowMore>
      );
    }
    return (
      <ShowMore onClick={() => setIsDimensions(!isDimensions)}>&#9660;</ShowMore>
    );
  };

  return (
    <>
      <Header />
      <ContentContairer>
        {
          product && (
            <>
              <Title text={product.name} />
              <ContainerDetails>
                <ProductSlider id={product._id} />
                <ContainerProduct>
                  {product.isSale &&
                    <PriceContainer>
                      <CurrentPrice>{product.currentPrice.toLocaleString()}</CurrentPrice>
                      <PreviousPrice>{product.previousPrice.toLocaleString()}</PreviousPrice>
                    </PriceContainer>}
                  {!product.isSale &&
                    <PriceContainer>
                      <Price>{product.currentPrice.toLocaleString()}</Price>
                    </PriceContainer>}
                  {!inFavorite && <RegularIconFavorite onClick={toggleInFavorite} />}
                  {inFavorite && <SolidIconFavorite onClick={toggleInFavorite} />}
                  <Subtitle>Бренд: {product.brand}</Subtitle>
                  <AvailabilityArticleWrap>
                    <Availability>&#10004; в наличии</Availability>
                    {/* <Availability>&#10006; нет в наличии</Availability> */}
                    <Article>Артикул: {product.itemNo}</Article>
                  </AvailabilityArticleWrap>
                  <Subtitle>Описание товара</Subtitle>
                  <Description>{product.description}</Description>
                  {screenWidth >= 768
                    ? <>
                      <Subtitle>Габариты</Subtitle>
                      <Description>Высота - {product.sizes.height} cм, </Description>
                      <Description>Ширина - {product.sizes.width} cм, </Description>
                      <Description>Глубина - {product.sizes.length} cм </Description>
                    </>
                    : <>
                      <Subtitle>Габариты{toggleDimensionsBtn()}</Subtitle>
                      {isDimensions && <DimensionsContainer>
                        <Description>Высота - {product.sizes.height} cм, </Description>
                        <Description>Ширина - {product.sizes.width} cм, </Description>
                        <Description>Глубина - {product.sizes.length} cм </Description>
                      </DimensionsContainer>}
                    </>
                  }
                  <ActionsContainer>
                    <Actions>
                      <ProductCounter value={value} setValue={setValue} />
                    </Actions>
                    <Actions>
                      <Button text={'Купить'} />
                    </Actions>
                  </ActionsContainer>
                </ContainerProduct>
                {screenWidth >= 768
                  ? <Subtitle>Характеристики
                    <SpecificationContainer>
                      <DescriptionKey>Покрытие</DescriptionKey>
                      <Description>{product.specifications.covering}</Description>
                      <DescriptionKey>Обивка</DescriptionKey>
                      <Description>{product.specifications.casing}</Description>
                    </SpecificationContainer>
                  </Subtitle> : <Subtitle>Характеристики
                    {toggleSpecificationBtn()}
                    {isSpecification && <SpecificationContainer>
                      <DescriptionKey>Покрытие</DescriptionKey>
                      <Description>{product.specifications.covering}</Description>
                      <DescriptionKey>Обивка</DescriptionKey>
                      <Description>{product.specifications.casing}</Description>
                    </SpecificationContainer>}
                  </Subtitle>
                }
              </ContainerDetails>
            </>
          )
        }
      </ContentContairer>
    </>
  )
}

