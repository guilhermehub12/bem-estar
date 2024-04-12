import {Card, CardContent, CardDescription, CardFooter, CardHeader,CardTitle,} from "@/components/ui/card"
import Header from "./Header"

export function Home() {
    return (
    <body>
        <main className="container mx-auto p-10">
            <Header></Header>
            <section>
                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-slate-600">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-center">Novos Pacientes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    <img className=""></img>
                                    <p>6</p>
                                    </div>
                            </CardContent>
                            </Card></div>
                    <div className="bg-slate-600">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center">Agendamentos Hoje</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <img className=""></img>
                                        <p>6</p>
                                        </div>
                                        </CardContent>
                                        </Card></div>
                                        <div className="bg-slate-600">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-center">Agendamentos Hoje</CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div>
                                                            <img className=""></img>
                                                            <p>6</p>
                                                            </div>
                                                            </CardContent>
                                                            </Card></div>
                                                            </div>
                                                            <div className="bg-slate-600">
                                                                <Card>
                                                                    <CardHeader>
                                                                        <CardTitle className="text-center">Agendamentos Hoje</CardTitle>
                                                                        </CardHeader>
                                                                        <CardContent>
                                                                            <div>
                                                                                <img className=""></img>
                                                                                <p>6</p>
                                                                                </div>
                                                                                </CardContent>
                                                                                </Card></div>
                                                                                <div className="bg-slate-600">
                                                                                    <Card>
                                                                                        <CardHeader>
                                                                                            <CardTitle></CardTitle>
                                                                                        </CardHeader>
                                                                                        <CardContent>

                                                                                        </CardContent>
                                                                                        </Card></div>
                                                                                        <div className="bg-slate-600">
                                                                                            <Card>
                                                                                            <CardHeader>
                                                                                                <CardTitle></CardTitle>
                                                                                            </CardHeader>
                                                                                            <CardContent>

                                                                                            </CardContent>
                                                                                            </Card></div>
                                                                                            </section>
                                                                                            </main>
                                                                                            </body>
    )
}
