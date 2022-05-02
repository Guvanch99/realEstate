import * as React from 'react'
import { FC } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import styled from 'styled-components/macro'
import { NavLink, useNavigate } from 'react-router-dom'
import { TApartments } from '../../../apartments/list/types'
import { flex } from '../../../../styles/mxins'

const Wrapper = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  flex-direction: column;
`

const Navigation = styled(NavLink)`
  text-align: center;
  padding: 10px;
  margin: 16px;
  background: ${({ theme }) => theme.colors.blue700};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`

const ApartmentsTable: FC<{ tableData: TApartments[] }> = ({ tableData }) => {
  const navigate = useNavigate()
  const preparedRow = tableData.map(({ id, guest, price, room, square, status }) => ({
    id,
    guest,
    price,
    room,
    square,
    status
  }))

  return (
    <Wrapper>
      <Navigation to="/admin/apartments/1">Add Apartment</Navigation>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Guest</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Room</TableCell>
              <TableCell align="right">Square</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {preparedRow.map((row) => (
              <TableRow
                onClick={() => navigate(`/admin/apartments-edit/${row.id}`)}
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
              >
                <TableCell component="th" align="center" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.guest}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.room}</TableCell>
                <TableCell align="right">{row.square}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  )
}

export default ApartmentsTable
