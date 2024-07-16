import "./Painel.css"
import TableTotal from "../components/Table/Total";


const Painel = () => {
    return (<>
        <div className="painel">
            <h1>MEUS ORÇAMENTOS</h1>
        <TableTotal />
        </div>
    </>)

}

export default Painel;