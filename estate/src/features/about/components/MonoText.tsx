import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import { flex } from '../../../styles/mxins'

const Wrapper = styled.div`
  margin: 44px 0;
`

const ContentStyled = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  flex-direction: column;
  max-width: 1250px;
  margin: 32px auto;
`

const LabelStyled = styled.h1`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.yellow500};
`

const TextStyled = styled.p`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.secondary};
`

const ReadMoreContainer = styled.div`
  cursor: pointer;
`

const ReadMoreText = styled.div`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.yellow500};
`

const MonoText = () => {
  const [isReadMore, setIsReadMore] = useState<boolean>(false)
  const { t } = useTranslation('translation')
  return (
    <Wrapper>
      <ContentStyled>
        <LabelStyled>{t('WhyWeMain')}</LabelStyled>
        <TextStyled>
          {isReadMore ? t('whyWe').slice(0, 150) : t('whyWe')}
        </TextStyled>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <ReadMoreContainer onClick={() => setIsReadMore(!isReadMore)}>
          <ReadMoreText>
            {isReadMore
              ? '...read more'
              : ' show less'}
          </ReadMoreText>
        </ReadMoreContainer>
      </ContentStyled>
    </Wrapper>
  )
}

export default MonoText
