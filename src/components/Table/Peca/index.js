// import "./Peca.css";
import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Input,
    Box
} from '@mui/material';

const TablePeca = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0 },
      }}
      noValidate
      autoComplete="off"
    >
    <TableContainer component={Paper} sx={{borderRadius: '12px'}}>
      <Table sx={{ minWidth: 500 }} size="small" aria-label="Tabela de serviços">
        <TableHead sx={{height: "50px", background: "#D9D9D9"}}>
          <TableRow>
            <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>PEÇA</TableCell>
            <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>QTD</TableCell>
            <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>PREÇO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2, borderColor: "#D9D9D9" }, height: "display: flex;px" }}
            >
              <TableCell align="center" sx={{width: "70%", border: 2, borderColor: "#D9D9D9"}} component="th" scope="row">
                <Input fullWidth />
              </TableCell>
              <TableCell  align="center" sx={{width: "15%", border: 2, borderColor: "#D9D9D9"}}>
                <Input fullWidth />
              </TableCell>
              <TableCell align="center" sx={{width: "15%", border: 2, borderColor: "#D9D9D9"}}>
                <Input fullWidth />
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}

export default TablePeca;
