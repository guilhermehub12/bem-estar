import { Link } from 'react-router-dom'
import '@/assets/css/header.css'
import {Card, CardContent, CardDescription, CardFooter, CardHeader,CardTitle,} from "@/components/ui/card"
import { Button } from '../components/ui/button'

function Header() {
    return (
        <>
            <header>
                <div className="header-content">
                    <h4>Início</h4>
                </div>
                <CardContent></CardContent>
                <div>

                    <CardTitle>
                    <p>Consultório Dra Carolina</p>
                    </CardTitle>
                </div>
            </header>
            <div className="navbar">
                <Link to='/inicio' >Início</Link>
                <Link to='pacientes/cadastro'>Novo Paciente</Link>
            </div>

        </>
    )
}

export default Header