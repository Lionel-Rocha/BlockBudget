import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ethers } from 'ethers';
import {getOrcamentoById, pagarOrcamento} from "../contrato/interacao"; // Importe sua função para obter o orçamento específico
import "./Orcamento.css";
import ServView from "../components/Table/ServView";
import PecaView from "../components/Table/PecaView";
import { IconButton } from "@mui/material";
import {
    ArrowForwardRounded,
    ArrowBack
  } from "@mui/icons-material";

const PagamentoOrcamento = () => {
    const { id } = useParams();
    const [orcamento, setOrcamento] = useState(null);

    let valor_total = 0;

    useEffect(() => {
        async function loadOrcamento() {
            try {
                // Obtém o orçamento específico pelo ID
                const dadosOrcamento = await getOrcamentoById(id);

                console.log(dadosOrcamento);
                const valor = dadosOrcamento.preco;
                valor_total = dadosOrcamento.preco;


                setOrcamento(dadosOrcamento);
            } catch (error) {
                console.error('Erro ao carregar orçamento:', error);
            }
        }

        loadOrcamento();
    }, [id]);

    const handlePagamento = async () => {
        try {
            pagarOrcamento(id)
        } catch (error) {
            console.error('Erro ao processar pagamento:', error);
        }
    };

    if (!orcamento) {
        return <div>Carregando...</div>;
    }

    return (<>
        <div className="orcamento">
        <div className="titulo">
          <h1>Detalhes do Orçamento</h1>
        </div>
            <div className="table">
            <div className="tableServ">
            <ServView services={orcamento.servico} />
            </div>
            <ul>
                {orcamento.servico.map((service, index) => (
                    <li key={index}>
                        <strong>Nome:</strong> {service.nome}<br />
                        <strong>Descrição:</strong> {service.descricao}<br />
                        <strong>Preço:</strong> {service.preco} ETH
                    </li>
                ))}
            </ul>
            <div className="tablePeca">
            <PecaView pecas={orcamento.partes} />
            </div>
            <ul>
                {orcamento.servico.map((service, index) => (
                    <li key={index}>
                        <strong>Nome:</strong> {service.nome}<br />
                        <strong>Descrição:</strong> {service.descricao}<br />
                        <strong>Preço:</strong> {service.preco} ETH
                    </li>
                ))}
            </ul>
            </div>
                {orcamento.partes.map((part, index) => (
                    <li key={index}>
                        <strong>Nome:</strong> {part.nome}<br />
                        <strong>Quantidade:</strong> {part.quantidade}<br />
                        <strong>Preço:</strong> {part.preco} ETH
                    </li>
                ))}   


<div className="bottom">
          <div className="bottom-left">
          </div>
          <div className="bottom-right">
            <div className="display">
              <div className="textoTotal">
                  <h2>TOTAL:</h2>
              </div>
              <div className="displayTotal">
                  <p>{orcamento.preco} ETH</p>
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
                onClick={handlePagamento}
                // type="submit"
              >
                <ArrowForwardRounded fontSize="inherit" />
              </IconButton>
          </div>
          </div>
          </div>

    </>);
};

export default PagamentoOrcamento;
