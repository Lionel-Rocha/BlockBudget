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

const ServView = ({ services }) => {
    return (
        <TableContainer component={Paper} sx={{ borderRadius: '12px' }}>
            <Table sx={{ minWidth: 500, maxHeight: 200 }} size="small" aria-label="Tabela de serviços">
                <TableHead sx={{ height: "50px", background: "#D9D9D9" }}>
                    <TableRow>
                        <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>SERVIÇO</TableCell>
                        <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>DESCRIÇÃO</TableCell>
                        <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>PREÇO (ETH)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {services.map((service, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 2, borderColor: "#D9D9D9" }, height: "35px" }}>
                            <TableCell align="center" sx={{ width: "45%", border: 2, borderColor: "#D9D9D9" }} component="th" scope="row">
                                {service.nome}
                            </TableCell>
                            <TableCell align="left" sx={{ width: "40%", border: 2, borderColor: "#D9D9D9" }}>
                                {service.descricao}
                            </TableCell>
                            <TableCell align="center" sx={{ width: "15%", border: 2, borderColor: "#D9D9D9" }}>
                                {service.preco}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ServView;
