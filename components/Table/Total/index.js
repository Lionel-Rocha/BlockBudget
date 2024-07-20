import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
} from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import {orquestrador_orcamentos_usuario} from "../../../contrato/interacao";
import {ethers} from "ethers";
import * as XLSX from 'xlsx';
let orcamento_download;
function createData(servico, descricao, preco) {
    return { servico, descricao, preco };
}


const coloca_em_excel = async () => {
    let servicos = [];
    let pecas = [];
    orcamento_download = orcamento_download[0];

    orcamento_download.services.forEach(service => {
        servicos.push({
            servico: service.name,
            descricao: service.description,
            preco: service.price
        });
    });

    orcamento_download.parts.forEach(part => {
        pecas.push({
            peca: part.name,
            quantidade: part.quantity,
            preco: part.price
        });
    });


    const ws = XLSX.utils.json_to_sheet(servicos);
    const wp = XLSX.utils.json_to_sheet(pecas);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Serviços");
    XLSX.utils.book_append_sheet(wb, wp, "Peças");

    XLSX.writeFile(wb, "orcamentos.xlsx");

}
const TableTotal = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        function weiToEther(wei) {
            let weiValue = wei.replace(/^0x/, '');
            let weiDecimal = ethers.BigNumber.from('0x' + weiValue);
            let etherValue = ethers.utils.formatUnits(weiDecimal, 'ether');

            return parseFloat(etherValue);
        }


        async function loadOrcamentos() {
            try {
                let orcamentos = await orquestrador_orcamentos_usuario();
                orcamento_download = orcamentos[0];
                orcamentos = orcamentos[1];

                const conteudo_rows = orcamentos;
                const combinedRows = [];

                conteudo_rows.forEach(item => {
                    let valor = item[1]._hex;

                    valor = weiToEther(valor);

                    combinedRows.push(createData(
                        item[0],
                        item[2].toString(),
                        valor
                    ));
                });

                setRows(combinedRows);
            } catch (error) {
                console.error('Erro ao carregar orçamentos:', error);
            }
        }
        try{
            loadOrcamentos();
        } catch (e) {
            alert("Erro no carregamento de orçamentos.")
        }

    }, []);



    return (
        <TableContainer component={Paper} sx={{ borderRadius: '14px', maxHeight: 500 }}>
            <Table hoverRow sx={{ minWidth: 500 }} aria-label="Tabela de exibição" size='large'>
                <TableHead sx={{ height: '50px', background: '#D9D9D9' }}>
                    <TableRow>
                        <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>Nº</TableCell>
                        <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>PAGO</TableCell>
                        <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>PREÇO</TableCell>
                        <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 2, borderColor: "#D9D9D9" }, height: "35px" }}
                        >
                            <TableCell align="center" sx={{ width: "20%", border: 2, borderColor: "#D9D9D9" }} component="th" scope="row">{row.servico}</TableCell>
                            <TableCell align="left" sx={{ width: "40%", border: 2, borderColor: "#D9D9D9" }}>{row.descricao}</TableCell>
                            <TableCell align="left" sx={{ width: "20%", border: 2, borderColor: "#D9D9D9" }}>{row.preco}</TableCell>
                            <TableCell align="center" sx={{ width: "5%", border: 2, borderColor: "#D9D9D9", padding: "0" }}>
                                <IconButton
                                    sx={{
                                        borderRadius: 10,
                                        fontWeight: "bolder",
                                        color: "#274DB7",
                                        ":hover": { backgroundColor: "#274DB7", color: "#D1D3E2" },
                                        width: "30px",
                                        height: "30px"
                                    }}
                                    size="large"
                                    onClick={coloca_em_excel}
                                >
                                    <FileDownloadOutlinedIcon fontSize="inherit"/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableTotal;