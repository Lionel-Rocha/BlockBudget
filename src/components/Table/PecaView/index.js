import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

const PecaView = ({ products }) => {
    return (
        <TableContainer component={Paper} sx={{ borderRadius: '12px' }}>
            <Table sx={{ minWidth: 500 }} size="small" aria-label="Tabela de peças">
                <TableHead sx={{ height: "50px", background: "#D9D9D9" }}>
                    <TableRow>
                        <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>PEÇA</TableCell>
                        <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>QTD</TableCell>
                        <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>PREÇO (LAC)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(products) && products.length > 0 ? (
                        products.map((product, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 2, borderColor: "#D9D9D9" }, height: "35px" }}>
                                <TableCell align="center" sx={{ width: "45%", border: 2, borderColor: "#D9D9D9" }} component="th" scope="row">
                                    {product.nome}
                                </TableCell>
                                <TableCell align="left" sx={{ width: "40%", border: 2, borderColor: "#D9D9D9" }}>
                                    {product.quantidade}
                                </TableCell>
                                <TableCell align="center" sx={{ width: "15%", border: 2, borderColor: "#D9D9D9" }}>
                                    {product.preco}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} align="center">
                                Nenhum produto disponível
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PecaView;
