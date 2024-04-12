import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Card, CardContent, CardDescription, CardFooter, CardHeader,CardTitle,} from "@/components/ui/card"


export function Patient (){
    return (
    <main className="container mx-auto">
        <div className ="grid grid-cols-2 grid-flow-col">
            <div className="bg-green-400 row-start-1 row-end-4">
                <Card className="relative h-50 w-80 top-64 left-52">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Faça Login</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                    id="email"
                                    type="email"
                                    placeholder="email@example.com"
                                    required></Input>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Senha</Label>
                                    <Input 
                                    id="password" 
                                    type="password"
                                    placeholder="Insira sua senha"
                                    required></Input>
                                </div>
                                    <Button type="submit">Entrar</Button>
                                    <Button variant="outline" className="w-full"><Link to='/cadastro' >Fazer Cadastro</Link></Button>
                            </div>
                            <div className="text-center"><Link to='/sobre'>Sobre</Link></div>
                        </div>
                    </CardContent>
                </Card>
                </div>
                <div className = "bg-slate-600 row-start-1 row-end-4"></div>
                </div>
                </main>
    )
}
