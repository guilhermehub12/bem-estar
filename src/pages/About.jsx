import { Header } from "./Header";

export function About() {
    return (
        <>
            <Header></Header>

            <main className="container mx-auto px-4 py-8">
                <section className="text-center mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Bem-estar</h1>
                    <p className="text-lg md:text-xl text-gray-600">
                        Bem-vindo à nossa plataforma de gerenciamento de agendamento de consultas! Nós somos apaixonados por simplificar o processo de agendamento, tornando-o mais eficiente e conveniente para profissionais e pacientes.
                    </p>
                </section>

                <section className="text-justify">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                        Nosso compromisso é com a excelência e a inovação. Desde o início, buscamos criar uma solução que não apenas atenda às necessidades de clínicas, consultórios e profissionais de saúde, mas que também melhore a experiência do usuário para pacientes. Acreditamos que cada consulta é uma oportunidade para fazer a diferença na vida das pessoas, e é por isso que nos esforçamos para oferecer uma plataforma que facilite o acesso aos cuidados de saúde.
                    </p>

                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                        Nossa equipe é composta por especialistas em tecnologia, design e saúde, unidos por um objetivo comum: revolucionar a maneira como consultas médicas são marcadas e gerenciadas. Trabalhamos incansavelmente para desenvolver recursos inovadores, garantir a segurança dos dados e proporcionar uma experiência intuitiva para todos os usuários.
                    </p>

                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                        Acreditamos no poder da tecnologia para transformar a saúde e estamos comprometidos em continuar aprimorando nossa plataforma para atender às necessidades em constante evolução do setor. Obrigado por fazer parte dessa jornada conosco. Estamos ansiosos para ajudá-lo a simplificar o processo de agendamento e tornar a experiência de cuidados de saúde mais agradável para todos.
                    </p>

                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        Se você tiver alguma dúvida, sugestão ou feedback, não hesite em entrar em contato conosco. Estamos aqui para ajudar!
                    </p>
                </section>
            </main>
        </>
    );
}