import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import { Header } from "@/pages/Header"

export function Home() {

    return (
        <>
            <Header></Header>
            <main className="container mx-auto p-10">
                <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-4">
                    <div className="bg-white rounded-lg shadow-lg">
                        <Card>

                            <CardHeader className="pb-2">
                                <CardTitle className="text-center text-lg font-semibold">Novos Pacientes</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center py-6">
                                <FaUser className="text-5xl text-blue-500 mr-4" />
                                <p className="text-3xl font-semibold">6</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-center text-lg font-semibold">Agendamentos Hoje</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center py-6">
                                <FaCalendarAlt className="text-5xl text-green-500 mr-4" />
                                <p className="text-3xl font-semibold">6</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-center text-lg font-semibold">Agendamentos da Semana</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center py-6">
                                <FaCalendarAlt className="text-5xl text-green-500 mr-4" />
                                <p className="text-3xl font-semibold">12</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 mb-4">
                    <div className="bg-white rounded-lg shadow-lg">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-center text-lg font-semibold">Novas Consultas</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center py-6">
                                <FaUser className="text-5xl text-blue-500 mr-4" />
                                <p className="text-3xl font-semibold">6</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 mb-4">
                    <div className="bg-white rounded-lg shadow-lg">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-center text-lg font-semibold">Consultas Canceladas</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center py-6">
                                <FaUser className="text-5xl text-blue-500 mr-4" />
                                <p className="text-3xl font-semibold">6</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
        </>
    )
}
