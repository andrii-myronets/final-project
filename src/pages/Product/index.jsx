import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Header } from '../../commons/Header/Header'
import { ContentContairer } from '../../components/Content/Content'
import { getProducts } from '../../store/products_draft/middlware'
import { selectByRoute, selectProducts } from '../../store/products_draft/selectors'
import { useToggle } from '../../utils/useToggle'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'
import { Title } from '../../components/Title/Title'
import { Button } from '../../components/Button'
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
  ShowMore
} from './StyledProductPage'
import { RegularIconFavorite } from '../../components/ProductItem/IconsSvg/RegularIconFavorite'
import { SolidIconFavorite } from '../../components/ProductItem/IconsSvg/SolidIconFavorite'
import useWindowDimensions from '../../utils/useWindowDimensions'
import { ProductCounter } from '../../components/Counter/ProductCounter'
import { ProductSlider } from '../../components/ProductSlider'
import { Footer } from '../../commons/Footer'

export const ProductPage = ({ match }) => {
  const { params: { route } } = match

  const { screenWidth } = useWindowDimensions()
  const [inFavorite, toggleInFavorite] = useToggle()
  const [isSpecification, setIsSpecification] = useState(false)
  const [isDimensions, setIsDimensions] = useState(false)
  const [value, setValue] = useState(1) // myronets

  const dispatch = useDispatch()
  const product = useSelector(selectByRoute(match.params.route))

  const products = useSelector(selectProducts)
  console.log(products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const toggleSpecificationBtn = () => {
    if (isSpecification) {
      return (
        <ShowMore onClick={() => setIsSpecification(false)}>&#9650;</ShowMore>
      )
    }
    return (
      <ShowMore onClick={() => setIsSpecification(!isSpecification)}>&#9660;</ShowMore>
    )
  }

  const toggleDimensionsBtn = () => {
    if (isDimensions) {
      return (
        <ShowMore onClick={() => setIsDimensions(false)}>&#9650;</ShowMore>
      )
    }
    return (
      <ShowMore onClick={() => setIsDimensions(!isDimensions)}>&#9660;</ShowMore>
    )
  }

  return (
    <>
      <Header />
      <ContentContairer>
        {
          product && (
            <>
              <Title text={capitalizeFirstLetter(`${product.name}`)} />
              <ContainerDetails>
                <ProductSlider id={product._id} />
                <ContainerProduct>
                  <Price>{product.currentPrice.toLocaleString()}</Price>
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
                    </>}
                  <ActionsContainer>
                    <Actions>
                      <ProductCounter value={value} setValue={setValue} />
                    </Actions>
                    <Actions>
                      <Button text='Купить' />
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
                  </Subtitle>}
              </ContainerDetails>
            </>
          )
        }
      </ContentContairer>
      <Footer />
    </>
  )
}
