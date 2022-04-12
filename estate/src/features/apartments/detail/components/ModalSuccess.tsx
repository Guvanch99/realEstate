import {
  Dialog as MuiDialog,
  DialogActions as MuiDialogActions,
  DialogContent as MuiDialogContent,
  DialogContentText as MuiDialogContentText,
  DialogTitle as MuiDialogTitle
} from '@mui/material'
import styled from 'styled-components/macro'
import { flex, fontFamily } from '../../../../styles/mxins'
import { useApartmentContext } from '../state/useDetailedApartment'
import { BaseButton } from '../../../../components/Button'

const Dialog = styled.div`
  ${flex({ align: 'flex-start' })};
  position: relative;
  width: 480px;
  background: ${({ theme }) => theme.colors.white};;
  border: none;
  outline: none;
  box-shadow: ${({ theme }) => theme.colors.shadow200};
  border-radius: 6px;
  padding: 24px;
  margin: 0;
`

const IconContainerStyled = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkBlack};
`

const DialogTitle = styled(MuiDialogTitle)`
  && {
    ${fontFamily('Inter')};
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: ${({ theme }) => theme.colors.darkBlack};
    padding: 0;
  }
`

const DialogContent = styled(MuiDialogContent)`
  && {
    padding: 0;
    margin: 24px 0 32px 0;
  }
`

const DialogContentText = styled(MuiDialogContentText)`
  && {
    ${fontFamily('Inter')};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.darkBlack};

  }
`

const FormStyled = styled.form`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-gap: 16px;

`

const DialogActions = styled(MuiDialogActions)`
{
  align-self: flex-end;
  padding: 0 !important;
}
`

const ButtonCancelStyled = styled(BaseButton)`
  && {
    background: ${({ theme }) => theme.colors.grey300};
    color: ${({ theme }) => theme.colors.darkBlack};
    margin-right: 8px;
    padding: 8px 16px;
    max-width: 98px;

    &:hover {
      background: ${({ theme }) => theme.colors.grey500};
    }
  }
`

const ButtonActionStyled = styled(BaseButton)`
  && {
    background: ${({ theme }) => theme.colors.blue500};
    color: ${({ theme }) => theme.colors.white};
    margin-left: -8px;
    padding: 8px 16px;
    max-width: 98px;

    &:hover {
      background: ${({ theme }) => theme.colors.blue700};
    }
  }
`

const Modal = () => {
  const { isModalSuccess, handleSuccessClose } = useApartmentContext()

  return (
    <MuiDialog
      sx={{ overflow: 'hidden' }}
      open={isModalSuccess}
      onClose={handleSuccessClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperComponent={Dialog}
    >
      <IconContainerStyled onClick={handleSuccessClose}>
        x
      </IconContainerStyled>
      <DialogTitle id="alert-dialog-title">
        Thank you for choosing us!
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Our Client must be
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonActionStyled form="form" onClick={handleSuccessClose} autoFocus>
          Submit
        </ButtonActionStyled>
      </DialogActions>
    </MuiDialog>
  )
}

export default Modal
