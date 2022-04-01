import * as React from 'react'
import { Accordion as MuiAccordion, AccordionSummary } from '@mui/material'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styled from 'styled-components/macro'
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

const Accordion = () => (
  <AccordionWrapper>
    {
      AccordionData.map(({ id, header, body }) => (
        <MuiAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls={id}
            id={id}
          >
            <HeaderText>{header}</HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <BodyText>
              {body}
            </BodyText>
          </AccordionDetails>
        </MuiAccordion>
      ))
    }
  </AccordionWrapper>
)

export default Accordion
