import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
import Header from "@/pages/Header"


export function Patient() {
    return (
        <>
            <Header></Header>
            <main className="container mx-auto">
                Conteúdo dos pacientes
            </main>
        </>
    )
}
