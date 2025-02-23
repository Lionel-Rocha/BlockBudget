import React, {useState} from 'react';
import "./Orcamento.css";
import {conectar_contrato, orquestrador_novo_orcamento} from '../contrato/interacao';
import TableServ from "../components/Table/Serv";
import TablePeca from "../components/Table/Peca";
import {IconButton} from "@mui/material";
import {Add, ArrowForwardRounded, Remove} from "@mui/icons-material";


async function redirecionaParaOrcamento (){
  let contrato = await conectar_contrato();
  let signer = await contrato.signer;
  let endereco = await signer.getAddress();
  console.log(endereco);
  let orcamentos_usuario = await contrato.getBudgetsByAddress(endereco);
  let restante_url = (orcamentos_usuario[orcamentos_usuario.length - 1]).toString();
  console.log(restante_url);
  window.location = "/pagamento_orcamento/" + restante_url;
}


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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let orcamento = {services, parts}
    await orquestrador_novo_orcamento(orcamento);
    redirecionaParaOrcamento();
  };

  const addServiceRow = () => {
    setServices([...services, { name: '', description: '', price: '' }]);
  };

  const removeServiceRow = () => {
    if (services.length > 1) {
      const newServices = services.slice(0, -1);
      setServices(newServices);
    }
  };

  const addPartRow = () => {
    setParts([...parts, { name: '', description: '', price: '' }]);
  };

  const removePartRow = () => {
    if (parts.length > 1) {
      const newParts = parts.slice(0, -1);
      setParts(newParts);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="orcamento">
        <div className="titulo">
          <h1>NOVO ORÇAMENTO</h1>
        </div>
        <div className="table">
          <div className="tableServ">
            <TableServ services={services} handleServiceChange={handleServiceChange} />
              <div className='btnContainer'>
              <IconButton onClick={removeServiceRow} variant="contained" color="secondary" sx={{
                borderRadius: 10,
                fontWeight: "bolder",
                color: "#274DB7",
                backgroundColor: "#D1D3E2",
                ":hover": { backgroundColor: "#274DB7", color: "#D1D3E2" },
                width: "40px",
                height: "40px",
                marginBottom: "5px"               
                }} 
              size="large"             
              >
                  <Remove fontSize="inherit"/>
              </IconButton>
              <IconButton onClick={addServiceRow} variant="contained" color="primary" sx={{
                borderRadius: 10,
                fontWeight: "bolder",
                color: "#274DB7",
                backgroundColor: "#D1D3E2",
                ":hover": { backgroundColor: "#274DB7", color: "#D1D3E2" },
                width: "40px",
                height: "40px",
                marginBottom: "5px"
                }}
              size="large"
              >
                <Add fontSize="inherit"/>
              </IconButton>
              </div>
          </div>
          <div className="tablePeca">
            <TablePeca parts={parts} handlePartChange={handlePartChange} />
            <div className='btnContainer'>
              <IconButton onClick={removePartRow} variant="contained" color="secondary" sx={{
                borderRadius: 10,
                fontWeight: "bolder",
                color: "#274DB7",
                backgroundColor: "#D1D3E2",
                ":hover": { backgroundColor: "#274DB7", color: "#D1D3E2" },
                width: "40px",
                height: "40px",
                marginBottom: "5px"               
                }} 
              size="large"             
              >
                  <Remove fontSize="inherit"/>
              </IconButton>
              <IconButton onClick={addPartRow} variant="contained" color="primary" sx={{
                borderRadius: 10,
                fontWeight: "bolder",
                color: "#274DB7",
                backgroundColor: "#D1D3E2",
                ":hover": { backgroundColor: "#274DB7", color: "#D1D3E2" },
                width: "40px",
                height: "40px",
                marginBottom: "5px"
                }}
              size="large"
              >
                <Add fontSize="inherit"/>
              </IconButton>
              </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-left">

          </div>
          <div className="bottom-right">
            <div className="display">

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
