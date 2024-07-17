import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Input
} from '@mui/material';

const TablePeca = ({ parts, handlePartChange }) => {
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
          {parts.map((part, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 2, borderColor: "#D9D9D9" }, height: "35px" }}>
              <TableCell align="center" sx={{width: "70%", border: 2, borderColor: "#D9D9D9"}} component="th" scope="row">
                <Input 
                  fullWidth 
                  value={part.name} 
                  onChange={(e) => handlePartChange(e, index, 'name')}
                />
              </TableCell>
              <TableCell align="center" sx={{width: "15%", border: 2, borderColor: "#D9D9D9"}}>
                <Input 
                  fullWidth 
                  type="number" 
                  value={part.quantity} 
                  onChange={(e) => handlePartChange(e, index, 'quantity')}
                />
              </TableCell>
              <TableCell align="center" sx={{width: "15%", border: 2, borderColor: "#D9D9D9"}}>
                <Input 
                  fullWidth 
                  type="number" 
                  value={part.price} 
                  onChange={(e) => handlePartChange(e, index, 'price')}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablePeca;
