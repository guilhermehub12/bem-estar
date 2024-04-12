import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Header } from "@/pages/Header"


export function RegisterPatient() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cpf: '',
        endereco: '',
        telefone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const isFormValid = () => {
        return Object.values(formData).every(value => value.trim() !== '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            navigate('/pacientes');
        }
    };

    const handleCancel = () => {
        navigate('/pacientes');
    };

    return (
        <>
            <Header></Header>
            <main className="container mx-auto">
                <Card className="mx-auto max-w-sm my-4">
                    <CardHeader>
                        <CardTitle className="text-xl">Novo paciente</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="nome-completo">Nome Completo</Label>
                                    <Input
                                        id="nome-completo"
                                        type="text"
                                        placeholder="Alfred Mesquita Filho"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="email@example.com"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="cpf">CPF</Label>
                                    <Input
                                        id="cpf"
                                        type="number"
                                        name="cpf"
                                        value={formData.cpf}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="endereco">Endereço</Label>
                                    <Input
                                        id="endereco"
                                        type="text"
                                        name="endereco"
                                        value={formData.endereco}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="tel">Telefone</Label>
                                    <Input
                                        id="tel"
                                        type="number"
                                        name="telefone"
                                        value={formData.telefone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className={`w-full ${isFormValid() ? '' : 'opacity-50 pointer-events-none'}`}
                                    disabled={!isFormValid()}
                                >
                                    Salvar
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={handleCancel}
                                >
                                    Cancelar
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </>
    )
}
