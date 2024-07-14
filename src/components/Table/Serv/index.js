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

function createData(servico, descricao, preco) {
  return { servico, descricao, preco };
}

const rows = [
  createData('001', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'R$'+6.0),
  createData('002', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', 'R$'+9.0),
  createData('003', 'It has survived not only five centuries', 'R$'+16.0),
  //createData('Cupcake', 305, 3.7, 67, 4.3),
  //createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const TableServ = () => {
  return (
    <TableContainer component={Paper} sx={{borderRadius: '12px'}}>
      <Table sx={{ minWidth: 500 }} size="small" aria-label="Tabela de serviços">
        <TableHead sx={{height: "50px", background: "#D9D9D9"}}>
          <TableRow>
            <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>SERVIÇO</TableCell>
            <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>DESCRIÇÃO</TableCell>
            <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>PREÇO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.servico}
              sx={{ '&:last-child td, &:last-child th': { border: 2, borderColor: "#D9D9D9" }, height: "35px" }}
            >
              <TableCell align="center" sx={{width: "15%", border: 2, borderColor: "#D9D9D9"}} component="th" scope="row">{row.servico}</TableCell>
              <TableCell align="left" sx={{width: "70%", border: 2, borderColor: "#D9D9D9"}}>{row.descricao}</TableCell>
              <TableCell align="center" sx={{width: "15%", border: 2, borderColor: "#D9D9D9"}}>{row.preco}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableServ;
