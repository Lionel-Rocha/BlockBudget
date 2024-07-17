import "./Banner.css";
import { Button } from "@mui/material";

const Banner = () => {
  
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <>
      <div className="banner">
        <div className="text-container">
          <div className="top-side">
            <div className="title-container">
              <h1 className="text-block">Block</h1>
              <h1 className="text-budget">Budget</h1>
            </div>
            <p>
              BlockBudget é uma aplicação destinada a permitir que usuários
              criem e gerenciem orçamentos financeiros de forma segura e
              transparente, utilizando tecnologia blockchain para garantir a
              integridade e a privacidade dos dados.
            </p>
            <div className="btnOrc">
                <Button
                  sx={{
                    borderRadius: 3,
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: "1rem",
                    fontWeight: 900,
                    backgroundColor: "#274DB7",
                    color: "#D1D3E2",
                    ":hover": { backgroundColor: "#D9D9D9", color: "#274DB7" },
                    height: "50px",
                  }}
                  size="large"
                  variant="contained"
                  onClick={handleClick}
                  href="./painel"
                >
                  Autenticar
                </Button>
            </div>
          </div>
          <div className="funcoes">
            <h2>Crie</h2>
            <h2>Visualize</h2>
            <h2>Altere</h2>
          </div>
        </div>
        <img src="/images/cubes.png" alt="" />
      </div>
    </>
  );
};

export default Banner;
