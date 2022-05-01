import styled from 'styled-components/macro'
import { Accordion as MuiAccordion, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useComments } from '../querries'
import { flex, fontFamily } from '../../../../styles/mxins'
import Spinner from '../../../../components/Loader'

const Wrapper = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  margin: 0 auto;
  height: 100%;
  background: ${({ theme }) => theme.colors.lightBlue};
  flex-direction: column;

`

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flex({ justify: 'center', align: 'center' })};
`

const HeaderTextStyled = styled.div`
  ${fontFamily('Inter')};
  font-size: 18px;
  font-weight: 600;
`

const BodyTextStyled = styled.div`
  ${fontFamily('Inter')};
  font-size: 14px;
  font-weight: 400;
`
export const NavigationBackStyled = styled.div`
  text-align: center;
  padding: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.blue200};
  cursor: pointer;
  width: 200px;
  margin: 40px auto;
  border-radius: 10px;
`

const Commets = () => {
  const { data, isLoading } = useComments()
  const navigate = useNavigate()
  const { t } = useTranslation('translation')

  if (isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner/>
      </SpinnerWrapper>
    )
  }

  if (!data) {
    return null
  }

  return (
    <Wrapper>
      <NavigationBackStyled onClick={() => navigate(-1)}>{t('goBack')}</NavigationBackStyled>
      {
        data.map(({ user: { name, email, comment } }) => (
          <MuiAccordion sx={{ marginTop: 1, width: 700 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls={name}
              id={name}
            >
              <HeaderTextStyled>
                {name}
                {' '}
                {email}
              </HeaderTextStyled>
            </AccordionSummary>
            <AccordionDetails>
              <BodyTextStyled>
                {comment}
              </BodyTextStyled>
            </AccordionDetails>
          </MuiAccordion>
        ))
      }
    </Wrapper>

  )
}
export default Commets
