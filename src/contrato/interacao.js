import {ethers} from 'ethers'

const endereco_contrato = "0xA7efc572c81bCc607a0fee39a5Ca7612735d02F8";
const json = require('./contratoOrcamento.json');
const abi = json.abi;

export async function conectar_contrato(){
    if (window.ethereum){

        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const contrato = new ethers.Contract(endereco_contrato, abi, signer);

            return contrato;
        } catch (error) {
            console.log('Erro conectando...', error);
            return error.toString();
        }
    } else {
        alert("Carteira não encontrada.");
        return null;
    }
}

export async function obtem_orcamentos_usuario(contrato){

    let signer = await contrato.signer;
    let endereco = await signer.getAddress();
    try{
        let id_orcamentos = await contrato.getBudgetsByAddress(endereco);


        let orcamentos = [];
        let conteudo_rows = [];
        for (let i = 0; i < id_orcamentos.length; i++){
            let orcamento = await contrato.getBudget(id_orcamentos[i]);
            const jsonData = ethers.utils.toUtf8String(orcamento[0]);
            const dadosOrcamento = JSON.parse(jsonData);
            orcamentos.push(dadosOrcamento);
            conteudo_rows.push([i, orcamento[1], orcamento[3]])
        }
        return [orcamentos, conteudo_rows];
    } catch (e) {
        return [];
    }

}


export async function orquestrador_novo_orcamento(orcamento) {

    let valor = 0;
    let contrato = await conectar_contrato();
    for (let i = 0; i < orcamento.services.length; i++) {
        valor = valor + parseFloat(orcamento.services[i].price);
    }

    if (orcamento.parts.length > 0 ){
        for (let i = 0; i < orcamento.parts.length; i++) {
            valor = valor + parseFloat(orcamento.parts[i].price);
        }
    } 

    const jsonData = JSON.stringify(orcamento);

    const etherValue = ethers.utils.parseUnits(valor.toString(), 'ether');
    console.log("Valor em wei:", etherValue.toString());

    const tx = await contrato.storeBudget(
        ethers.utils.toUtf8Bytes(jsonData),
        etherValue
    );
    await tx.wait();
    console.log("Orçamento armazenado!");
}

export async function orquestrador_orcamentos_usuario(){
    let contrato = await conectar_contrato();
    let dados = await obtem_orcamentos_usuario(contrato);
    let conteudo_rows = dados[1];
    let orcamento = dados[0];

    return [orcamento, conteudo_rows];
}

export async function getOrcamentoById(id) {
    let contratoInstance = await conectar_contrato();
    try {
        // Obtém o orçamento do contrato
        const orcamento = await contratoInstance.getBudget(id); // Supondo que getBudget retorne detalhes completos
        // Desestrutura a resposta
        let [jsonData, precoWei, endereco, status] = orcamento;

        // Converte o JSON de hexadecimal para string
        const jsonString = ethers.utils.toUtf8String(jsonData);

        // Parse o JSON para obter as partes e serviços
        const parsedData = JSON.parse(jsonString);

        precoWei = precoWei._hex;
        // Converte o preço de Wei para Ether
        const preco = ethers.utils.formatEther(precoWei.toString());


        // Formata as partes
        const partesFormatadas = parsedData.parts.map(part => ({
            nome: part.name,
            quantidade: part.quantity.toString(),
            preco: part.price.toString()
        }));

        // Formata os serviços
        const servicosFormatados = parsedData.services.map(service => ({
            nome: service.name,
            descricao: service.description,
            preco: service.price.toString()
        }));

        return {
            servico: servicosFormatados,
            descricao: parsedData.description,
            preco,
            partes: partesFormatadas,
            endereco,
            status
        };
    } catch (error) {
        console.error('Erro ao buscar orçamento:', error);
        throw error;
    }
}

export async function pagarOrcamento(id) {
    let contratoInstance = await conectar_contrato();
    const orcamento = await contratoInstance.getBudget(id);
    let [jsonData, precoWei, endereco, status] = orcamento;
    try {

        const tx = await contratoInstance.payBudget(id,{
            value: precoWei
        });
        await tx.wait();
    } catch (error) {
        console.error('Erro ao processar pagamento:', error);
        throw error;
    }
}
