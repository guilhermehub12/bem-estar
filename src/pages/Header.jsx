import { Link } from 'react-router-dom'
import '@/assets/css/header.css'

function Header() {
    return (
        <>
            <header>
                <div className="header-content">
                    <h1>Agendamento de Consultas</h1>
                    <p>Marque sua consulta facilmente online!</p>
                </div>
            </header>

            <div className="navbar">
                <Link to='/' >Início</Link>
                <Link to='/pacientes'>Pacientes</Link>
                <Link to='/sobre' >Sobre</Link>
            </div>

        </>
    )
}

export default Header