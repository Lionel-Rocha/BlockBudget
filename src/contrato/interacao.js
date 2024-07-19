import {ethers} from 'ethers'

const endereco_contrato = "0xA7efc572c81bCc607a0fee39a5Ca7612735d02F8";
const json = require('./contratoOrcamento.json');
const abi = json.abi;

async function conectar_contrato(){
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

async function obtem_orcamentos_usuario(contrato){
    let signer = await contrato.signer;
    let endereco = await signer.getAddress();
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
}

async function envia_orcamento_contrato(){

}

export async function orquestrador_novo_orcamento(orcamento) {

    let valor = 0;
    let contrato = await conectar_contrato();
    for (let i = 0; i < orcamento.services.length; i++) {
        valor = valor + parseFloat(orcamento.services[i].price);
    }

    for (let i = 0; i < orcamento.parts.length; i++) {
        valor = valor + parseFloat(orcamento.parts[i].price);
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

export async function download_orcamentos(){

}