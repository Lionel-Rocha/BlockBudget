import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

function createData(peca, qtd, preco) {
  return { peca, qtd, preco };
}

const rows = [
  createData('Teclado', 2, 'R$'+60),
  createData('Notebook', 1, 'R$'+3000),
  createData('Celular', 3, 'R$'+2000),
  //createData('Cupcake', 305, 3.7, 67, 4.3),
  //createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TablePeca = () => {
  return (
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
          {rows.map((row) => (
            <TableRow
              key={row.peca}
              sx={{ '&:last-child td, &:last-child th': { border: 2, borderColor: "#D9D9D9" }, height: "display: flex;px" }}
            >
              <TableCell align="center" sx={{width: "70%", border: 2, borderColor: "#D9D9D9"}} component="th" scope="row">{row.peca}</TableCell>
              <TableCell align="center" sx={{width: "15%", border: 2, borderColor: "#D9D9D9"}}>{row.qtd}</TableCell>
              <TableCell align="center" sx={{width: "15%", border: 2, borderColor: "#D9D9D9"}}>{row.preco}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablePeca;
