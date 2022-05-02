import styled, { css } from 'styled-components/macro'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { gallery, selectOptions } from '../data'
import { flex } from '../../../styles/mxins'
import { TOption } from '../type'
import { galleryFilter } from '../utils/galleryUtils'

const TextStyled = styled.h1`
  text-align: center;
  margin: 24px 0;
  color: ${({ theme }) => theme.colors.yellow800};
`

const SelectStyled = styled.ul`
  ${flex({ justify: 'center', align: 'center' })}
`

const Option = styled.li<{ selected: boolean }>`
  margin: 10px 16px;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 24px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;

  ${({ selected }) => selected && css`
    color: ${({ theme }) => theme.colors.chart.lynch};
  `}
  :hover {
    color: ${({ theme }) => theme.colors.chart.lynch};
  }
`

const GalleryContainerStyled = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
  justify-items: center;
  align-items: center;
  grid-gap: 16px;
`

const ImageStyled = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;

  :hover {
    transform: scale(1.1) rotate(3deg) translate(10px, 20px);
    transition: all .4s ease-in-out;
  }
`

const Gallery = () => {
  const [optionSelect, setOptionSelect] = useState<TOption>('All')
  const { t } = useTranslation('translation')
  return (
    <>
      <TextStyled>{t('gallery')}</TextStyled>
      <SelectStyled>
        {selectOptions.map(({ value, label }) => (
          <Option
            selected={optionSelect === value}
            value={value}
            onClick={() => setOptionSelect(value as TOption)}>
            {t(label)}
          </Option>
        ))}
      </SelectStyled>
      <GalleryContainerStyled>
        {
          galleryFilter(gallery, optionSelect).map(({ image }) =>
            // eslint-disable-next-line global-require,import/no-dynamic-require
            <ImageStyled src={require(`../assets/rooms/${image}`)} alt={image}/>)
        }
      </GalleryContainerStyled>
    </>
  )
}

export default Gallery
