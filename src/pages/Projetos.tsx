import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { CtaFinal } from '../components/CtaFinal'
import { ProjectCard } from '../components/ProjectCard'
import { areas, projetos } from '../content/site'

export function Projetos() {
  const destaque = projetos.filter((p) => p.destaque)
  const demais = projetos.filter((p) => !p.destaque)

  return (
    <>
      <PageHero
        eyebrow="Projetos"
        titulo="Iniciativas que transformam em conjunto"
        intro={
          <p>
            Cada projeto responde a uma necessidade. O destaque é para o Projeto Estrela, projeto
            central da Alma de Fênix.
          </p>
        }
        descricaoSeo="Projetos sociais da Associação Alma de Fênix: Projeto Estrela, mulheres, crianças e adolescentes, ações sociais, esporte, cultura e formação profissional."
      />

      {/* Destaque */}
      <section className="bg-paper-50" aria-labelledby="destaque-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <h2 id="destaque-titulo" className="sr-only">
              Projeto em destaque
            </h2>
            <div className="flex flex-col gap-6">
              {destaque.map((projeto) => (
                <ProjectCard key={projeto.id} projeto={projeto} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Todos os projetos */}
      <section className="border-t border-navy-800/12 bg-paper-100" aria-labelledby="todos-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTitle
              id="todos-titulo"
              eyebrow="Linhas de atuação"
              titulo="Todos os nossos projetos"
              intro="Estrutura pronta para crescer: cada projeto ganha espaço próprio conforme o conteúdo oficial for recebido."
            />
          </Reveal>

          <ul className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {demais.map((projeto, i) => (
              <Reveal as="li" key={projeto.id} delay={i * 60}>
                <ProjectCard projeto={projeto} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Áreas */}
      <section className="bg-navy-900" aria-labelledby="areas-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTitle
              id="areas-titulo"
              tono="claro"
              eyebrow="Áreas de atuação"
              titulo="Onde os projetos acontecem"
              intro="As sete frentes de atuação da instituição, conforme o nosso trabalho comunitário."
            />
          </Reveal>

          <ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area, i) => (
              <Reveal as="li" key={area.id} delay={i * 50}>
                <div className="border-t border-paper-50/25 pt-5">
                  <h3 className="text-lg text-paper-50">{area.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper-200/75">{area.descricao}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaFinal titulo="Quer participar de um projeto?" />
    </>
  )
}
