import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { CtaFinal } from '../components/CtaFinal'
import { CourseCard } from '../components/CourseCard'
import { EtiquetaPendente, LinhaPendente } from '../components/Pendencias'
import { Botao } from '../components/Botao'
import { cursos, linkWhatsapp, organizacao } from '../content/site'

export function Cursos() {
  const whats = linkWhatsapp(`Olá! Tenho interesse nos cursos da ${organizacao.nome}.`)

  return (
    <>
      <PageHero
        eyebrow="Cursos"
        titulo="Formação profissional para abrir caminhos"
        intro={
          <p>
            Os cursos da Alma de Fênix unem teoria e prática. Turmas, datas e inscrições são
            publicados aqui sempre que abertos.
          </p>
        }
        descricaoSeo="Cursos de formação profissional da Associação Alma de Fênix: descrição, público-alvo, carga horária, próximas turmas e inscrições."
      />

      {/* Como funciona */}
      <section className="bg-paper-50" aria-labelledby="como-funciona-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <SectionTitle
              id="como-funciona-titulo"
              eyebrow="Como funciona"
              titulo="Do interesse à sua primeira aula"
              intro="O caminho abaixo é o mesmo que usaremos quando as inscrições forem abertas. Enquanto isso, fale com a equipe para receber avisos das próximas turmas."
            />
          </Reveal>

          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { titulo: 'Veja o curso', texto: 'Descrição, conteúdo, público e carga horária.' },
              { titulo: 'Tenha interesse', texto: 'Fale com a equipe pelo canal oficial.' },
              { titulo: 'Inscrição', texto: 'Confirmação de vaga e documentação.' },
              { titulo: 'Comece a estudar', texto: 'Frequência, prática e certificado.' },
            ].map((passo, i) => (
              <Reveal as="li" key={passo.titulo} delay={i * 60}>
                <div className="border-t border-navy-800/20 pt-5">
                  <span className="text-[0.6875rem] font-semibold tracking-[0.24em] text-gold-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 text-xl text-navy-900">{passo.titulo}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{passo.texto}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Cursos */}
      <section className="border-t border-navy-800/12 bg-paper-100" aria-labelledby="lista-cursos-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionTitle
                id="lista-cursos-titulo"
                eyebrow="Cursos disponíveis"
                titulo="Estrutura pronta para os cursos oficiais"
                intro="Nenhum curso, data ou turma foi inventado. Cada espaço abaixo será preenchido com as informações reais assim que enviadas pela instituição."
              />
              <EtiquetaPendente texto="Conteúdo em atualização" />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {cursos.map((curso, i) => (
              <Reveal key={curso.id} delay={i * 80}>
                <CourseCard curso={curso} />
              </Reveal>
            ))}
          </div>

          {/* Avisos de turmas */}
          <Reveal className="mt-16">
            <div className="border border-navy-800/15 bg-white p-6 sm:p-8">
              <h3 className="text-xl text-navy-900">Próximas turmas e calendário</h3>
              <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-600">
                Assim que as turmas forem confirmadas, datas, horários e locais passam a aparecer
                aqui — e nas nossas redes sociais.
              </p>
              <dl className="mt-6 divide-y divide-navy-800/10 border-y border-navy-800/10">
                <LinhaPendente rotulo="Próxima turma" />
                <LinhaPendente rotulo="Inscrições abertas de" />
                <LinhaPendente rotulo="Local das aulas" />
                <LinhaPendente rotulo="Certificação" />
              </dl>
            </div>
          </Reveal>

          {/* CTA de interesse */}
          <Reveal className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Botao href={whats ?? '/contato'} variante="gold">
              {whats ? 'Tenho interesse (WhatsApp)' : 'Tenho interesse'}
            </Botao>
            <p className="caption-text max-w-md">
              Ao tocar no botão você será levado ao contato oficial da instituição — nenhuma
              inscrição é processada automaticamente nesta versão do site.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaFinal
        titulo="Quer saber quando abrir a próxima turma?"
        texto="Deixe seu contato com a equipe e receba as informações dos próximos cursos."
      />
    </>
  )
}
