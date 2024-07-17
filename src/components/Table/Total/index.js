import * as React from 'react';
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

function createData(servico, descricao, preco, emissao, status, down) {
  return { servico, descricao, preco, emissao, status, down };
};

const rows = [
  createData('001', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'R$ '+600.0, '15/07/2024', 'CONCLUÍDO'),
  createData('002', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', 'R$ '+9000.0, '15/07/2024', 'CONCLUÍDO'),
  createData('003', 'It has survived not only five centuries', 'R$ '+1600.0, '15/07/2024', 'CONCLUÍDO'),
  createData('004', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'R$ '+300.75, '15/07/2024', 'EM ABERTO'),
  createData('005', 'It has survived not only five centuries', 'R$ '+165.90, '15/07/2024', 'EM ABERTO'),
  createData('006', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'R$ '+765.25, '15/07/2024', 'CONCLUÍDO'),
  createData('007', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', 'R$ '+955.10, '15/07/2024', 'EM ABERTO'),
  createData('008', 'It has survived not only five centuries', 'R$ '+7816.35, '15/07/2024', 'EM ABERTO'),
  createData('009', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'R$ '+3000.75, '15/07/2024', 'CONCLUÍDO'),
  createData('010', 'It has survived not only five centuries', 'R$ '+1006.0, '15/07/2024', 'EM ABERTO'),
];

const TableTotal = () => {
    return (<>
      <TableContainer component={Paper} sx={{borderRadius: '14px', maxHeight: 500}}>      
        <Table hoverRow sx={{ minWidth: 500 }} aria-label="Tabela de exibicao" size='large'>          
          <TableHead sx={{height: '50px', background: '#D9D9D9'}}>
            <TableRow>
              <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>Nº</TableCell>
              <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>DESCRIÇÃO</TableCell>
              <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>VALOR</TableCell>
              <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>EMISSÃO</TableCell>
              <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}>STATUS</TableCell>
              <TableCell align="center" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 900 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
              <TableRow hover 
                role="checkbox"
                tabIndex={-1}
                key={row.servico}
                sx={{ '&:last-child td, &:last-child th': { border: 2, borderColor: "#D9D9D9" }, height: "35px" }}
              >
                <TableCell align="center" sx={{width: "10%", border: 2, borderColor: "#D9D9D9"}} component="th" scope="row">{row.servico}</TableCell>
                <TableCell align="left" sx={{width: "55%", border: 2, borderColor: "#D9D9D9"}}>{row.descricao}</TableCell>
                <TableCell align="left" sx={{width: "10%", border: 2, borderColor: "#D9D9D9"}}>{row.preco}</TableCell>
                <TableCell align="center" sx={{width: "10%", border: 2, borderColor: "#D9D9D9"}}>{row.emissao}</TableCell>
                <TableCell align="center" sx={{width: "10%", border: 2, borderColor: "#D9D9D9", fontWeight: "bold"}}>{row.status}</TableCell>
                <TableCell align="center" sx={{width: "5%", border: 2, borderColor: "#D9D9D9", padding: "0"}}>
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
                  >
                    <FileDownloadOutlinedIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            )})}
          </TableBody>
        </Table>
    </TableContainer>
    </>)
}

export default TableTotal;