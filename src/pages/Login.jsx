import { Link } from 'react-router-dom'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Card, CardContent, CardDescription, CardFooter, CardHeader,CardTitle,} from "@/components/ui/card"


export function Login (){
    return (
    <main className="h-screen flex w-full">
        <div className ="bg-background w-full max-w3xl h-full flex">
            <div className=" bg-green-300 flex bg-background h-full max-w4xl p-52">
                <Card className="relative h-96 w-80 top-12 left-96">
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
                </div>
                </main>
    )
}