import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrcamentoNotFound = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Volta para a página anterior
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Orçamento não encontrado</h1>
            <p style={styles.message}>O orçamento que você está procurando não existe ou foi removido.</p>
            <button onClick={handleGoBack} style={styles.button}>
                Voltar
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
    },
    title: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '1rem',
    },
    message: {
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '2rem',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default OrcamentoNotFound;
