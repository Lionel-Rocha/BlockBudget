import "./Orcamento.css";
import TableServ from "../components/Table/Serv";
import TablePeca from "../components/Table/Peca";
import { Button, IconButton } from "@mui/material";
import { ArrowForwardRounded, FileDownloadRounded } from "@mui/icons-material";

const Orcamento = () => {
  return (
    <div className="orcamento">
      <div className="titulo">
        <h1>ORÇAMENTO #XXXX</h1>
      </div>
      <div className="table">
        <div className="tableServ">
          <TableServ />
        </div>
        <div className="tablePeca">
          <TablePeca />
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <Button
            sx={{
              borderRadius: 3,
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: "1rem",
              fontWeight: 900,
              backgroundColor: "#D9D9D9",
              color: "#274DB7",
              ":hover": { backgroundColor: "#274DB7", color: "#D1D3E2" },
              height: "60px",
            }}
            size="large"
            variant="contained"
            endIcon={<FileDownloadRounded />}
          >
            DOWNLOAD
          </Button>
        </div>
        <div className="bottom-right">
          <div className="display">
            <div className="textoTotal">
                <h2>TOTAL:</h2>
            </div>
            <div className="displayTotal">
                <p>R$ 9999.99</p>
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
          >
            <ArrowForwardRounded fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Orcamento;
