import React, { useState } from 'react';
import "./Orcamento.css";
import TableServ from "../components/Table/Serv";
import TablePeca from "../components/Table/Peca";
import { Button, IconButton } from "@mui/material";
import { ArrowForwardRounded, FileDownloadRounded } from "@mui/icons-material";

const Orcamento = () => {

  const [services, setServices] = useState([{ name: '', description: '', price: '' }]);
  const [parts, setParts] = useState([{ name: '', quantity: '', price: '' }]);

  const handleServiceChange = (e, index, field) => {
    const newServices = [...services];
    newServices[index][field] = e.target.value;
    setServices(newServices);
  };

  const handlePartChange = (e, index, field) => {
    const newParts = [...parts];
    newParts[index][field] = e.target.value;
    setParts(newParts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para envio dos dados do formulário
    console.log('Serviços:', services);
    console.log('Peças:', parts);
  };

  // const avancarBtn = () => {
  //   alert('Botão clicado!');
  // };

  const downloadBtn = () => {
    alert('Botão Download clicado!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="orcamento">
        <div className="titulo">
          <h1>ORÇAMENTO #XXXX</h1>
        </div>
        <div className="table">
          <div className="tableServ">
            <TableServ services={services} handleServiceChange={handleServiceChange} />
          </div>
          <div className="tablePeca">
            <TablePeca parts={parts} handlePartChange={handlePartChange} />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <Button
              sx={{
                borderRadius: 3,
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: "1rem",
                fontWeight: 900,
                backgroundColor: "#D9D9D9",
                color: "#274DB7",
                ":hover": { backgroundColor: "#274DB7", color: "#D1D3E2" },
                height: "60px",
              }}
              size="large"
              variant="contained"
              onClick={downloadBtn}
              endIcon={<FileDownloadRounded />}
            >
              DOWNLOAD
            </Button>
          </div>
          <div className="bottom-right">
            <div className="display">
              <div className="textoTotal">
                  <h2>TOTAL:</h2>
              </div>
              <div className="displayTotal">
                  <p>R$ 9999.99</p>
              </div>
            </div>
              <IconButton
                sx={{
                  borderRadius: 3,
                  fontWeight: "bolder",
                  backgroundColor: "#D9D9D9",
                  color: "#274DB7",
                  ":hover": { backgroundColor: "#274DB7", color: "#D1D3E2" },
                  height: "60px",
                  width: "70px",
                }}
                size="large"
                // href="./painel"
                // onClick={formRef.current.submit()}
                type="submit"
              >
                <ArrowForwardRounded fontSize="inherit" />
              </IconButton>
          </div>
        </div>
      </div>
    </form>

  );
};

export default Orcamento;
