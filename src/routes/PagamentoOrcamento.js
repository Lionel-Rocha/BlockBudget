import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrcamentoById, pagarOrcamento } from "../contrato/interacao"; // Importe sua função para obter o orçamento específico
import ServView from "../components/Table/ServView";
import PecaView from "../components/Table/PecaView";
import "./Orcamento.css";
import {ArrowForwardRounded} from "@mui/icons-material";
import {IconButton} from "@mui/material";
const PagamentoOrcamento = () => {
    const { id } = useParams();
    const [orcamento, setOrcamento] = useState(null);

    useEffect(() => {
        async function loadOrcamento() {
            try {
                // Obtém o orçamento específico pelo ID
                const dadosOrcamento = await getOrcamentoById(id);
                // console.log(dadosOrcamento);

                setOrcamento(dadosOrcamento);
                console.log(orcamento)
            } catch (error) {
                console.error('Erro ao carregar orçamento:', error);
            }
        }

        loadOrcamento();
    }, [id]);

    const handlePagamento = async () => {
        try {
            await pagarOrcamento(id);
            console.log('Pagamento realizado com sucesso!');
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
                <div className="tablePeca">
                    <PecaView products={orcamento.partes} />
                </div>
            </div>


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
