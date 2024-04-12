import Header from "./Header";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Modificado
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Register() {
    const navigate = useNavigate(); // Adicionado

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRepeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value);
    };

    const isRegisterFormValid = email.trim() !== '' && fullName.trim() !== '' && password.trim() !== '' && repeatPassword.trim() !== '';

    const handleRegister = () => {
        // Simular lógica de registro aqui
        // Se o registro for bem-sucedido, redirecione para /inicio
        if (isRegisterFormValid) {
            navigate('/inicio'); // Alterado
        }
    };

    return (
        <>
            <Header></Header>
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Cadastro</CardTitle>
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
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="nome-completo">Nome Completo</Label>
                                <Input
                                    id="nome-completo"
                                    type="text"
                                    placeholder="Alfred Mesquita Filho"
                                    value={fullName}
                                    onChange={handleFullNameChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="senha">Senha</Label>
                            <Input
                                id="senha"
                                type="password"
                                placeholder="Insira uma senha"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="repet-senha">Repetir Senha</Label>
                            <Input
                                id="repet-senha"
                                type="password"
                                placeholder="Repita sua senha"
                                value={repeatPassword}
                                onChange={handleRepeatPasswordChange}
                                required
                            />
                        </div>
                        <Button
                            type="button"
                            className={`w-full ${isRegisterFormValid ? '' : 'opacity-50 pointer-events-none'}`}
                            onClick={handleRegister}
                        >
                            Cadastrar
                        </Button>
                        <Button variant="outline" className="w-full">
                            Fazer Login
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
