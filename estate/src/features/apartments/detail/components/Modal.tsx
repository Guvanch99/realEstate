import {
  Dialog as MuiDialog,
  DialogActions as MuiDialogActions,
  DialogContent as MuiDialogContent,
  DialogContentText as MuiDialogContentText,
  DialogTitle as MuiDialogTitle,
  TextField
} from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import styled from 'styled-components/macro'
import { format, isAfter, isBefore } from 'date-fns'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { flex, fontFamily } from '../../../../styles/mxins'
import { BaseButton } from '../../../../components/Button'
import { useApartmentContext } from '../state/useDetailedApartment'

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

const ErrorTextStyled = styled.p`
  ${fontFamily('Inter')};
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.red};
  margin-top: 8px;
`

type TState = {
  from: Date | string
  to: Date | string
}

const Modal = () => {
  const { t } = useTranslation('translation')
  const { isModal, setModal } = useApartmentContext()
  const [datePicked, setDatePicked] = useState<TState>({
    from: new Date(),
    to: new Date()
  })
  const [error, setError] = useState('')

  const onSubmit = () => {
    if (isAfter(new Date(datePicked.from), new Date(datePicked.to))) {
      setError('Date from can not be after than date to')
    }
    if (format(new Date(datePicked.from), 'yyyy-MM-dd') === format(new Date(datePicked.to), 'yyyy-MM-dd')) {
      setError('Date from can not be same date to')
    }

    if (isBefore(new Date(datePicked.to), new Date(datePicked.from))) {
      setError('Date to can not be before than date from')
    }
  }

  const handleClose = () => {
    setModal(false)
    setDatePicked({
      from: new Date(),
      to: new Date()
    })
  }
  return (
    <MuiDialog
      sx={{ overflow: 'hidden' }}
      open={isModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperComponent={Dialog}
    >
      <IconContainerStyled onClick={handleClose}>
        x
      </IconContainerStyled>
      <DialogTitle id="alert-dialog-title">
        {t('modalBook')}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label={t('dateBookFrom')}
              disablePast
              value={datePicked?.from}
              inputFormat="yyyy-MM-dd"
              views={['year', 'month', 'day']}
              onChange={(fromDate) => {
                setError('')
                setDatePicked({
                  ...datePicked,
                  from: fromDate ? format(new Date(fromDate), 'yyyy-MM-dd') : datePicked?.from
                })
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  sx={{
                    marginTop: 1
                  }}
                  {...params} />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label={t('dateBookTo')}
              value={datePicked?.to}
              inputFormat="yyyy-MM-dd"
              disablePast
              views={['year', 'month', 'day']}
              onChange={(toDate) => {
                setError('')
                setDatePicked({
                  ...datePicked,
                  to: toDate ? format(new Date(toDate), 'yyyy-MM-dd') : datePicked?.to
                })
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  sx={{
                    marginTop: 1
                  }}
                  {...params} />
              )}
            />
          </LocalizationProvider>
          <ErrorTextStyled>{error}</ErrorTextStyled>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonCancelStyled onClick={handleClose}>{t('cancel')}</ButtonCancelStyled>
        <ButtonActionStyled form="form" onClick={onSubmit} autoFocus>
          {t('approve')}
        </ButtonActionStyled>
      </DialogActions>
    </MuiDialog>
  )
}

export default Modal
