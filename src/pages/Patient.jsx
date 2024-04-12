import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableHeader, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { CgProfile, CgMoreVerticalAlt } from "react-icons/cg";
import { Header } from "@/pages/Header";
import faker from 'faker';

// Função para gerar pacientes fakes a partir da lib Faker
function generatePatients() {
    const patients = Array.from({ length: 10 }, () => ({
        name: faker.name.findName(),
        status: faker.random.arrayElement(['Ativo', 'Inativo']),
        plan: faker.random.arrayElement(['Básico', 'Premium']),
        totalConsultations: faker.random.number({ min: 1, max: 10 }),
        createdAt: faker.date.past().toLocaleDateString(),
    }));
    return patients;
}

export function Patient() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        setPatients(generatePatients());
    }, []);

    return (
        <>
            <Header />

            <main className="container mx-auto p-4">
                <Card>
                    <CardHeader className="flex justify-center">
                        <div className="mt-4 text-center">
                            <Link to="/pacientes/cadastro">
                                <Button>Cadastrar Novo Paciente</Button>
                            </Link>
                        </div>
                        <CardTitle>Pacientes</CardTitle>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead></TableHead>
                                        <TableHead>Nome</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Plano</TableHead>
                                        <TableHead>Total de Consulta</TableHead>
                                        <TableHead>Criado em</TableHead>
                                        <TableHead></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {patients.map(patient => (
                                        <TableRow key={patient.id}>
                                            <TableCell>
                                                <CgProfile className="h-6 w-6 text-gray-600" />
                                            </TableCell>
                                            <TableCell className="font-medium">{patient.name}</TableCell>
                                            <TableCell>
                                                <Badge variant="outline">{patient.status}</Badge>
                                            </TableCell>
                                            <TableCell>{patient.plan}</TableCell>
                                            <TableCell>{patient.totalConsultations}</TableCell>
                                            <TableCell>{patient.createdAt}</TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button size="icon" variant="ghost">
                                                            <CgMoreVerticalAlt className="h-5 w-5 text-gray-600" />
                                                            <span className="sr-only">Toggle menu</span>
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuItem>Editar</DropdownMenuItem>
                                                        <DropdownMenuItem>Deletar</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                        <CardFooter>
                            <div className="text-xs text-gray-600">
                                Mostrando <strong>1-10</strong> de <strong>{patients.length}</strong> pacientes
                            </div>
                        </CardFooter>
                    </CardHeader>
                </Card>
            </main>
        </>
    );
}
