import './Banner.css';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';

const Banner = () => {

    return (<>
        <div className="banner">
            <div className="text-container">
                <div className="title-container">
                    <h1 className="text-block">Block</h1>
                    <h1 className="text-budget">Budget</h1>
                </div>
                <p>BlockBudget é uma aplicação destinada a permitir que usuários criem e gerenciem orçamentos financeiros de forma segura e transparente, utilizando tecnologia blockchain para garantir a integridade e a privacidade dos dados.</p>                          
                <Button sx={{marginTop: "32px",
                    borderRadius: 3,
                    backgroundColor: "#274DB7",
                    ':hover': {backgroundColor: "#518BD2"}
                }} size="large" variant='contained'>Orçamento</Button>
                <div className='funcoes'>
                    <Stack spacing={15} direction="row">
                        <h2>Crie</h2>
                        <h2>Visualize</h2>
                        <h2>Altere</h2>
                    </Stack>
                </div>
            </div>
            <img src='/images/cubes.png' alt=''/>
        </div>
    </>)
}

export default Banner