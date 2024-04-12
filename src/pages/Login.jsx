import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const isLoginFormValid = email.trim() !== '' && password.trim() !== '';

    const handleLogin = () => {
        // Se o login for bem-sucedido, redirecione para /inicio
        if (isLoginFormValid) {
            navigate('/inicio');
        }
    };

    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12 bg-green-300">
                <div className="mx-auto grid w-[350px] gap-6">
                    <Card className="p-8">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold text-center">Faça Login</CardTitle>
                        </CardHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Senha</Label>
                                    <a
                                        href="/forgot-password"
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        Esqueceu sua senha?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </div>
                            <Button
                                type="button"
                                className={`w-full ${isLoginFormValid ? '' : 'opacity-50 pointer-events-none'}`}
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                            <Button variant="outline" className="w-full">
                                Login com o Google
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Não possui conta?{' '}
                            <a href="/cadastro" className="underline">
                                Registrar-se
                            </a>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="sm:hidden bg-muted lg:block bg-red w-full">
                <img
                    src="Logo.svg"
                    alt="img"
                    className="h-60 w-60 object-cover dark:brightness-[0.2] dark:grayscale mx-auto my-40"
                />
            </div>
        </div>
    );
}

export default Login;
