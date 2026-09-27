import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { CtaFinal } from '../components/CtaFinal'
import { EspacoFoto, EtiquetaPendente } from '../components/Pendencias'
import { equipe, galeria, organizacao, pilares } from '../content/site'

export function QuemSomos() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        titulo="Uma associação que acredita em recomeços"
        intro={
          <p>
            História, propósito e pessoas: o que sustenta o trabalho da Alma de Fênix todos os dias.
          </p>
        }
        descricaoSeo="Conheça a história, a missão, a visão, os valores e a equipe da Associação Alma de Fênix."
      />

      {/* História */}
      <section className="bg-paper-50" aria-labelledby="historia-titulo">
        <div className="mx-auto grid max-w-[80rem] gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-7">
            <SectionTitle
              id="historia-titulo"
              eyebrow="Nossa história"
              titulo="De onde viemos e para onde vamos"
            />
            <div className="mt-7 flex flex-col gap-5 text-[1.0625rem] leading-relaxed text-ink-600">
              <p>{organizacao.sobre}</p>
              <p className="border-l-2 border-gold-500 pl-5 text-ink-700">
                <strong className="font-semibold text-navy-900">Texto histórico em elaboração.</strong>{' '}
                A versão definitiva deste espaço — fundação, marcos, conquistas e os projetos que
                deram origem à associação — será escrita a partir das informações oficiais
                fornecidas pela diretoria.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-5">
            <EspacoFoto
              legenda="Espaço para fotografia histórica da instituição"
              proporcao="aspect-[4/5]"
            />
          </Reveal>
        </div>
      </section>

      {/* Missão, visão, valores */}
      <section className="border-y border-navy-800/12 bg-paper-100" aria-labelledby="pilares-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTitle
              id="pilares-titulo"
              eyebrow="Missão, visão e valores"
              titulo="O que nos orienta"
              intro="A estrutura abaixo está pronta para receber os textos oficiais da instituição."
            />
          </Reveal>

          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {pilares.map((pilar, i) => (
              <Reveal as="li" key={pilar.titulo} delay={i * 80}>
                <article className="flex h-full flex-col gap-4 border-t-2 border-gold-500 bg-paper-50 p-7">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-2xl text-navy-900">{pilar.titulo}</h3>
                    {pilar.pendente && <EtiquetaPendente texto="Texto oficial" />}
                  </div>
                  <p className="text-[0.9375rem] leading-relaxed text-ink-600 italic">
                    {pilar.texto}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Equipe */}
      <section className="bg-paper-50" aria-labelledby="equipe-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTitle
              id="equipe-titulo"
              eyebrow="Equipe e diretoria"
              titulo="As pessoas por trás da Alma de Fênix"
              intro="Nenhum nome ou cargo foi publicado sem autorização. Os perfis oficiais entram aqui assim que enviados pela instituição."
            />
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipe.map((pessoa, i) => (
              <Reveal as="li" key={i} delay={i * 60}>
                <article className="flex flex-col items-start gap-4 border border-navy-800/15 bg-white p-6">
                  <span
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-gold-500/60 bg-gold-400/10 text-gold-600"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      className="h-7 w-7"
                    >
                      <circle cx="12" cy="8.5" r="3.5" />
                      <path d="M4.5 20c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-navy-900">
                      {pessoa.nome ?? <span className="text-ink-400 font-normal">Nome a inserir</span>}
                    </p>
                    <p className="mt-1 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold-600">
                      {pessoa.cargo ?? 'Cargo a inserir'}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Fotos */}
      <section className="border-t border-navy-800/12 bg-paper-100" aria-labelledby="fotos-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTitle
              id="fotos-titulo"
              eyebrow="A Alma de Fênix em ação"
              titulo="Fotos das nossas ações"
              intro="Galeria preparada para receber as fotografias oficiais da instituição."
            />
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galeria.slice(0, 3).map((item, i) => (
                <li key={i} className="flex flex-col gap-3">
                  <EspacoFoto legenda={item.legenda} proporcao="aspect-[4/3]" />
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                    {item.categoria}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaFinal titulo="Quer conhecer de perto?" />
    </>
  )
}
