import * as React from 'react'
import { FC } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { format } from 'date-fns'
import { TBooked } from '../type'

const ApartmentTable: FC<{ tableData: TBooked[] }> = ({ tableData }) => {
  const preparedRow = tableData.map(({ apartmentId, from, to }) => ({
    name: apartmentId,
    from: format(new Date(from.seconds * 1000), 'yyyy-MM-dd'),
    to: format(new Date(to.seconds * 1000), 'yyyy-MM-dd')
  }))

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ApartmentId</TableCell>
            <TableCell align="right">Booked From</TableCell>
            <TableCell align="right">Booked To</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {preparedRow.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" align="center" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.from}</TableCell>
              <TableCell align="right">{row.to}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ApartmentTable
