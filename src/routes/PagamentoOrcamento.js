import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ethers } from 'ethers';
import {getOrcamentoById, pagarOrcamento} from "../contrato/interacao"; // Importe sua função para obter o orçamento específico

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

    return (
        <div>
            <h1>Detalhes do Orçamento</h1>
            <h2>Serviços</h2>
            <ul>
                {orcamento.servico.map((service, index) => (
                    <li key={index}>
                        <strong>Nome:</strong> {service.nome}<br />
                        <strong>Descrição:</strong> {service.descricao}<br />
                        <strong>Preço:</strong> {service.preco} ETH
                    </li>
                ))}
            </ul>
            <h2>Peças</h2>
            <ul>
                {orcamento.partes.map((part, index) => (
                    <li key={index}>
                        <strong>Nome:</strong> {part.nome}<br />
                        <strong>Quantidade:</strong> {part.quantidade}<br />
                        <strong>Preço:</strong> {part.preco} ETH
                    </li>
                ))}
            </ul>
            <p><strong>Preço Total:</strong> {orcamento.preco} ETH</p>
            <button onClick={handlePagamento}>Pagar</button>
        </div>
    );
};

export default PagamentoOrcamento;
