import Card from "../Card";
import Hero from "../Hero";
import Section from "../Section";

const Main = () => {

    const works = [
        {
            title: "Desenvolvedor FullStack",
            text: "Manutenção e desenvolvimento de novas funcionalidades no sistema principal, utilizando HTML, CSS, JAVASCRIPT (Vue.JS) e PHP (Laravel)",
            badges: [
                {
                    text: 'Socialhub'
                },
                {
                    text: '03/2022 - 02/2023'
                }
            ]
        },
        {
            title: "Analista de Sistemas",
            text: "Realização de análise do sistema de gestão TopSaúde, buscando soluções para adequação do sistema à regra de negócio da empresa e também buscando correções para erros no software.",
            badges: [
                {
                    text: 'CAMARJ'
                },
                {
                    text: '01/2019 - 12/2021'
                }
            ]
        },
        {
            title: "Consultor de sistemas",
            text: "Realização de consultoria do sistema de ERP Protheus desenvolvido pela Totvs, atuando nos módulos de Plano de Saúde, Financeiro, Contabilidade e outros. Adequando o sistema às regras de negócio do cliente e vice-versa",
            badges: [
                {
                    text: 'R.R Consultoria'
                },
                {
                    text: '01/2018 - 12/2018'
                }
            ]
        },
        {
            title: "Estagiário de Suporte Técnico",
            text: "Realização de serviços de manutenção de computadores, impressoras, instalação de programas, manutenção e configuração de servidores Active Directory, e outros equipamentos.",
            badges: [
                {
                    text: 'R.R Consultoria'
                },
                {
                    text: '01/2016 - 01/2018'
                }
            ]
        },
    ]

    const projects = [
        {
            title: "MyBox",
            text: "Aplicativo de controle de estoque feito em React.JS. Login: igorflores | Senha: igorfloresdev",
            src: "./images/mybox.png",
            button: {
                text: "Ver projeto",
                href: "https://mybox.vercel.app",
                github: "https://github.com/igorfloresdev/mybox"
            },
            badges: [
                {
                    text: 'React'
                },
                {
                    text: 'Tailwind'
                }
            ]
        },
        {
            title: "Organo",
            text: "Organizador empresarial de equipes na área de TI",
            src: "./images/organo.png",
            button: {
                text: "Ver projeto",
                href: "https://organo-igordev.vercel.app",
                github: "https://github.com/igorfloresdev/organo"
            },
            badges: [
                {
                    text: 'React'
                },
                {
                    text: 'CSS'
                }
            ]
        },
        {
            title: "Lobo",
            text: "Projeto de portfólio online.",
            src: "./images/lobo.png",
            button: {
                text: "Ver projeto",
                href: "https://igorfloresdev.github.io/lobo/",
                github: "https://github.com/igorfloresdev/lobo"
            },
            badges: [
                {
                    text: 'HTML'
                },
                {
                    text: 'CSS'
                },
                {
                    text: 'Javascript'
                }
            ]
        },
        {
            title: "Bikecraft",
            text: "Projeto de site de vendas de bicicletas.",
            src: "./images/bikcraft.png",
            button: {
                text: "Ver projeto",
                href: "https://igorfloresdev.github.io/bikcraft/",
                github: "https://github.com/igorfloresdev/bikcraft"
            },
            badges: [
                {
                    text: 'HTML'
                },
                {
                    text: 'CSS'
                },
                {
                    text: 'Javascript'
                }
            ]
        },
        {
            title: "Flexblog",
            text: "Blog feito totalmente com Flexbox.",
            src: "./images/flexblog.png",
            button: {
                text: "Ver projeto",
                href: "https://igorfloresdev.github.io/flexblog/",
                github: "https://github.com/igorfloresdev/flexblog"
            },
            badges: [
                {
                    text: 'HTML'
                },
                {
                    text: 'CSS'
                },
                {
                    text: 'Javascript'
                }
            ]
        },
    ]

    const graduations = [
        {
            icon: 'fa-solid fa-graduation-cap',
            title: "Sistemas de Informação",
            text: "Formado em 2020 como bacharel em Sistemas de Informação pela Universidade Estácio de Sá (UNESA)."
        },
        {
            icon: 'fa-solid fa-code',
            title: "Web Design Completo",
            text: "Curso de Web Design completo na origamid com HTML, CSS e Javascript."
        },
        {
            icon: 'fa-brands fa-react',
            title: "React.js",
            text: "Curso completo da biblioteca javascript React realizado na plataforma Alura."
        },
        {
            icon: 'fa-brands fa-vuejs',
            title: "Vue.js",
            text: "Curso completo da framework javascript Vue.js realizado na plataforma Alura."
        },
        {
            icon: 'fa-brands fa-windows',
            title: "Pacote Office",
            text: "Curso completo do pacote Office, incluindo Word, Excel, Access"
        },
        {
            icon: 'fa-solid fa-language',
            title: "Inglês",
            text: "Curso de Inglês nivel avançado."
        }
    ]

    return (
        <div>
            <div className="p-10">
                <Section id="works" title="Experiências">
                    <div className="flex flex-row flex-wrap justify-center">
                        {works.map(work => (
                            <div key={work.title} className="flex px-1">
                                <Card title={work.title} src={work.src} alt={work.alt} text={work.text} badges={work.badges} />
                            </div>
                        ))}
                    </div>
                </Section>
                <Section id="graduation" title="Graduação">
                    <div className="flex flex-wrap justify-center">
                        {graduations.map(graduation =>
                            <div key={graduation.title} className="p-2">
                                <Hero icon={graduation.icon} iconImg={graduation.iconImg} title={graduation.title} text={graduation.text} />
                            </div>
                        )
                        }
                    </div>
                </Section>
                <Section id="projects" title="Projetos">
                    <div className="flex flex-row flex-wrap justify-center">
                        {projects.map(project => (
                            <div key={project.title} className="flex px-5">
                                <Card
                                    title={project.title}
                                    src={project.src}
                                    alt={project.alt}
                                    text={project.text}
                                    badges={project.badges}
                                    button={project.button}
                                    github={project.button.github} />
                            </div>
                        ))}
                    </div>
                </Section>
            </div>
            <Section id="contact" title="Contato" className="bg-base-300">
                <div className="flex flex-row flex-wrap justify-center">
                    <h2 className="text-2xl text-center">Entre em contato através do e-mail: <a href="mailto:dev.igorflores@gmail.com">dev.igorflores@gmail.com</a></h2>
                </div>
            </Section>
        </div>
    )
}

export default Main;