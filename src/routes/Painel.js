import "./Painel.css"
import TableTotal from "../components/Table/Total";
import { Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';


const Painel = () => {
    return (<>
        <div className="painel">
        <div className="tituloPainel">
            <h1>MEUS ORÇAMENTOS</h1>
                <div className="btnAdd">
                    <Button 
                        sx={{
                        borderRadius: 3,
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontSize: "1rem",
                        fontWeight: 900,
                        backgroundColor: "#D9D9D9",
                        color: "#274DB7",
                        ":hover": { backgroundColor: "#274DB7", color: "#D1D3E2" },
                        height: "50px",
                    }}
                        size="large"
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                    >
                        Adicionar Orçamento
                    </Button>
                </div>
            </div>
            <div className="tableTotal">
                <TableTotal />
            </div>
        </div>
    </>)

}

export default Painel;