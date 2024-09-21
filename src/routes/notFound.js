// NotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // Redireciona para a página inicial
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404 - Página Não Encontrada</h1>
            <p style={styles.message}>A página que você está procurando não existe.</p>
            <button onClick={handleGoHome} style={styles.button}>
                Voltar para a Página Inicial
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

export default NotFound;
