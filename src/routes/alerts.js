import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const mostrarToastProcessando = () => {
    toast.info("Processando o orçamento...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};

export const mostrarToastSucesso = () => {
    toast.success("Orçamento armazenado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};

export const mostrarToastErro = (mensagem) => {
    toast.error(`Erro ao processar o orçamento: ${mensagem}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};
