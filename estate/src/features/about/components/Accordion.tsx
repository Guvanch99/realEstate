import * as React from 'react'
import { Accordion as MuiAccordion, AccordionSummary } from '@mui/material'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { fontFamily } from '../../../styles/mxins'
import { AccordionData } from '../data'

const AccordionWrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`

const HeaderText = styled.p`
  ${fontFamily('Inter')};
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`

const BodyText = styled.p`
  ${fontFamily('Inter')};
  font-size: 14px;
  font-weight: 400;
`

const LabelStyled = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.yellow500};
  margin: 20px 0;
`

const Accordion = () => {
  const { t } = useTranslation('translation')
  return (
    <>
      <AccordionWrapper>
        <LabelStyled>{t('questionLabel')}</LabelStyled>

        {
          AccordionData.map(({ id, header, body }) => (
            <MuiAccordion sx={{ marginTop: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls={id}
                id={id}
              >
                <HeaderText>{t(header)}</HeaderText>
              </AccordionSummary>
              <AccordionDetails>
                <BodyText>
                  {t(body)}
                </BodyText>
              </AccordionDetails>
            </MuiAccordion>
          ))
        }
      </AccordionWrapper>
    </>
  )
}

export default Accordion
