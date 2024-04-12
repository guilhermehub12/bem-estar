import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Header from "@/pages/Header"


export function RegisterPatient() {
    return (
        <>
            <Header></Header>
            <main className="container mx-auto">
                <Card className="mx-auto max-w-sm my-4">
                    <CardHeader>
                        <CardTitle className="text-xl">Novo paciente</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="nome-completo">Nome Completo</Label>
                                    <Input id="nome-completo" type="text" placeholder="Alfred Mesquita Filho" required /></div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="email@example.com" required /></div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="cpf">CPF</Label>
                                <Input id="cpf" type="number" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="endereco">Endereço</Label>
                                <Input id="endereco" type="text" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="tel">Telefone</Label>
                                <Input id="tel" type="number" required />
                            </div>
                            <Button type="submit" className="w-full">
                                Salvar
                            </Button>
                            <Button variant="outline" className="w-full">
                                Cancelar
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </>
    )
}
