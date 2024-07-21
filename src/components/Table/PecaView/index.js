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

const PecaView = ({ pecas }) => {
    return (
        <TableContainer component={Paper} sx={{ borderRadius: '12px' }}>
            <Table sx={{ minWidth: 500 }} size="small" aria-label="Tabela de peças">
                <TableHead sx={{ height: "50px", background: "#D9D9D9" }}>
                    <TableRow>
                        <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>PEÇA</TableCell>
                        <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>QTD</TableCell>
                        <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>PREÇO (ETH)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pecas.map((part, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 2, borderColor: "#D9D9D9" }, height: "35px" }}>
                            <TableCell align="center" sx={{ width: "70%", border: 2, borderColor: "#D9D9D9" }} component="th" scope="row">
                                {part.name}
                            </TableCell>
                            <TableCell align="center" sx={{ width: "15%", border: 2, borderColor: "#D9D9D9" }}>
                                {part.quantity}
                            </TableCell>
                            <TableCell align="center" sx={{ width: "15%", border: 2, borderColor: "#D9D9D9" }}>
                                {part.price}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PecaView;
