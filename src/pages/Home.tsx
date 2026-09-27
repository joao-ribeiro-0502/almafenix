import { Link } from 'react-router-dom'
import { Botao } from '../components/Botao'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { CtaFinal } from '../components/CtaFinal'
import { ProjectCard } from '../components/ProjectCard'
import { EspacoFoto, EtiquetaPendente } from '../components/Pendencias'
import { ImpactCard } from '../components/ImpactoBlocks'
import { useSeo } from '../components/Layout'
import {
  areas,
  indicadores,
  organizacao,
  projetos,
  cursos,
} from '../content/site'

export function Home() {
  useSeo(
    '',
    'Site institucional da Associação Alma de Fênix: projetos sociais, formação profissional, esporte, cultura e ações com mulheres, crianças e adolescentes.',
  )

  const destaque = projetos.filter((p) => p.destaque)
  const demais = projetos.filter((p) => !p.destaque).slice(0, 4)

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-paper-100" aria-labelledby="hero-titulo">
        {/* Filete dourado superior, eco do aro da logo */}
        <div className="absolute inset-x-0 top-0 h-px bg-gold-500/70" aria-hidden="true" />

        <div className="mx-auto grid max-w-[80rem] gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 md:grid-cols-12 md:items-center md:gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
                <p className="eyebrow text-gold-600">Associação Alma de Fênix</p>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h1
                id="hero-titulo"
                className="mt-7 text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.04] text-navy-900"
              >
                Renovar vidas,
                <br />
                <em className="font-normal italic text-cobalt-600">acolher histórias</em>,
                <br />
                despertar potências.
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-7 max-w-xl text-[1.125rem] leading-relaxed text-ink-600">
                {organizacao.apresentacao}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Botao to="/projetos" variante="primary">
                  Conheça nossos projetos
                </Botao>
                <Botao to="/apoie" variante="outline">
                  Apoiar a Alma de Fênix
                </Botao>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <p className="mt-6 text-sm text-ink-400">
                Já quer participar?{' '}
                <Link
                  to="/voluntariado"
                  className="border-b border-gold-500 pb-0.5 font-semibold text-navy-800 transition-colors hover:text-gold-600"
                >
                  Seja voluntário
                </Link>{' '}
                ou{' '}
                <Link
                  to="/cursos"
                  className="border-b border-gold-500 pb-0.5 font-semibold text-navy-800 transition-colors hover:text-gold-600"
                >
                  conheça os cursos
                </Link>
                .
              </p>
            </Reveal>
          </div>

          {/* Selo institucional */}
          <div className="md:col-span-5">
            <Reveal delay={160} className="mx-auto max-w-[24rem] md:max-w-none">
              <img
                src="/assets/logo-circular.png"
                alt="Selo da Associação Alma de Fênix: fênix de asas azuis e chamas douradas emoldurada pelo nome da associação"
                width={1132}
                height={1134}
                className="mx-auto w-full max-w-[21rem] md:max-w-none"
                fetchPriority="high"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== FAIXA DAS ÁREAS DE ATUAÇÃO ==================== */}
      <section className="border-y border-navy-800/12 bg-paper-50" aria-label="Áreas de atuação">
        <div className="mx-auto max-w-[80rem] px-5 py-6 sm:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {areas.map((a) => (
              <li
                key={a.id}
                className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy-800/75"
              >
                {a.titulo}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ======================== QUEM SOMOS ======================== */}
      <section className="bg-paper-50" aria-labelledby="quem-somos-titulo">
        <div className="mx-auto grid max-w-[80rem] gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <EspacoFoto
              legenda="Espaço para fotografia das ações da Alma de Fênix"
              proporcao="aspect-[4/5]"
            />
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-7 md:col-span-7 md:pt-6">
            <SectionTitle
              id="quem-somos-titulo"
              eyebrow="01 — Quem somos"
              titulo={
                <>
                  Uma associação feita de presença:{' '}
                  <em className="font-normal italic text-cobalt-600">estar junto</em> de quem procura
                  um recomeço.
                </>
              }
              intro={organizacao.sobre}
            />
            <div>
              <Link
                to="/quem-somos"
                className="inline-flex items-center gap-2 border-b border-gold-500 pb-1 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-navy-800 transition-colors hover:text-gold-600"
              >
                Conheça nossa história <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================== O QUE FAZEMOS ======================== */}
      <section className="bg-navy-900" aria-labelledby="o-que-fazemos-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTitle
              id="o-que-fazemos-titulo"
              tono="claro"
              eyebrow="02 — O que fazemos"
              titulo={
                <>
                  Frentes de atuação que se cruzam{' '}
                  <em className="font-normal italic text-gold-300">no mesmo propósito</em>
                </>
              }
              intro="Cada frente responde a uma necessidade concreta. Juntas, formam o trabalho cotidiano da Alma de Fênix com pessoas, famílias e comunidades."
            />
          </Reveal>

          <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, i) => (
              <Reveal as="li" key={area.id} delay={i * 60} className="border-t border-paper-50/25 pt-6">
                <span className="text-[0.6875rem] font-semibold tracking-[0.24em] text-gold-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-xl text-paper-50">{area.titulo}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-paper-200/75">
                  {area.descricao}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ======================== NOSSOS PROJETOS ======================== */}
      <section className="bg-paper-50" aria-labelledby="projetos-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTitle
              id="projetos-titulo"
              eyebrow="03 — Nossos projetos"
              titulo="Projetos que ganham vida quando as pessoas entram"
              intro="Conheça as iniciativas da Alma de Fênix — com destaque para o Projeto Estrela, projeto central da instituição."
            />
          </Reveal>

          <div className="mt-12 flex flex-col gap-6">
            {destaque.map((projeto, i) => (
              <Reveal key={projeto.id} delay={i * 60}>
                <ProjectCard projeto={projeto} />
              </Reveal>
            ))}
          </div>

          <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {demais.map((projeto, i) => (
              <Reveal as="li" key={projeto.id} delay={i * 60}>
                <ProjectCard projeto={projeto} />
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-14">
            <Botao to="/projetos" variante="outline">
              Ver todos os projetos
            </Botao>
          </Reveal>
        </div>
      </section>

      {/* ==================== FORMAÇÃO PROFISSIONAL ==================== */}
      <section className="border-y border-navy-800/12 bg-paper-100" aria-labelledby="cursos-titulo">
        <div className="mx-auto grid max-w-[80rem] gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12 md:gap-16">
          <Reveal className="flex flex-col gap-7 md:col-span-6">
            <SectionTitle
              id="cursos-titulo"
              eyebrow="04 — Formação profissional"
              titulo={
                <>
                  Aprender um ofício é abrir uma{' '}
                  <em className="font-normal italic text-cobalt-600">nova porta</em>
                </>
              }
              intro="A formação profissional é uma das frentes mais importantes da Alma de Fênix. Os cursos reúnom teoria e prática, com turmas, horários e certificação publicados nesta página sempre que as inscrições forem abertas."
            />
            <dl className="divide-y divide-navy-800/10 border-y border-navy-800/15">
              <div className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                  Cursos disponíveis
                </dt>
                <dd className="text-sm text-navy-800">
                  {cursos.length} estruturas prontas para publicação
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                  Próximas turmas
                </dt>
                <dd>
                  <EtiquetaPendente texto="A confirmar" />
                </dd>
              </div>
            </dl>
            <div>
              <Botao to="/cursos" variante="primary">
                Conheça os cursos
              </Botao>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-6">
            <EspacoFoto
              legenda="Espaço para fotografia de turma em formação"
              proporcao="aspect-[4/3]"
            />
            <p className="mt-4 caption-text">
              As fotografias oficiais dos cursos serão publicadas assim que enviadas pela
              instituição.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ========================== FAÇA PARTE ========================== */}
      <section className="bg-paper-50" aria-labelledby="faca-parte-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTitle
              id="faca-parte-titulo"
              align="center"
              eyebrow="05 — Faça parte"
              titulo="Existem muitos modos de chegar até nós"
              intro="Seja para participar das atividades, para pedir ajuda, para apoiar ou para dar o seu tempo — há um caminho para cada história."
            />
          </Reveal>

          <ul className="mt-14 grid gap-px border border-navy-800/15 bg-navy-800/15 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: 'Quero participar',
                texto: 'Atividades, projetos e cursos abertos à comunidade.',
                caminho: '/projetos',
                cta: 'Ver projetos',
              },
              {
                titulo: 'Preciso de ajuda',
                texto: 'Conte sua situação. A conversa começa pelo contato.',
                caminho: '/contato',
                cta: 'Falar com a equipe',
              },
              {
                titulo: 'Quero apoiar',
                texto: 'Doação, parceria ou divulgação do nosso trabalho.',
                caminho: '/apoie',
                cta: 'Formas de apoiar',
              },
              {
                titulo: 'Quero ser voluntário',
                texto: 'Some tempo, talento e presença a quem precisa.',
                caminho: '/voluntariado',
                cta: 'Saiba como',
              },
            ].map((opcao, i) => (
              <Reveal as="li" key={opcao.titulo} delay={i * 60}>
                <Link
                  to={opcao.caminho}
                  className="group flex h-full flex-col gap-4 bg-paper-50 p-7 transition-colors duration-200 hover:bg-navy-900"
                >
                  <span className="text-[0.6875rem] font-semibold tracking-[0.24em] text-gold-600 transition-colors group-hover:text-gold-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl text-navy-900 transition-colors group-hover:text-paper-50">
                    {opcao.titulo}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-ink-600 transition-colors group-hover:text-paper-200/80">
                    {opcao.texto}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-navy-800 transition-colors group-hover:text-gold-300">
                    {opcao.cta} <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================== IMPACTO =========================== */}
      <section className="bg-cobalt-600" aria-labelledby="impacto-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow text-gold-300">06 — Nosso impacto</p>
              <h2 id="impacto-titulo" className="mt-4 text-[clamp(1.75rem,3.4vw,2.75rem)] leading-tight text-paper-50">
                Os números da Alma de Fênix, quando validados pela diretoria
              </h2>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-paper-200/85">
                Esta área foi preparada para receber os indicadores oficiais da instituição. Nenhum
                número foi estimado ou estimado — os dados reais entram aqui assim que forem
                confirmados.
              </p>
            </div>
          </Reveal>

          <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {indicadores.map((ind, i) => (
              <Reveal as="li" key={ind.rotulo} delay={i * 70}>
                <ImpactCard valor={ind.valor} rotulo={ind.rotulo} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================ APOIE ============================ */}
      <section className="bg-paper-100" aria-labelledby="apoie-titulo">
        <div className="mx-auto grid max-w-[80rem] gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12 md:items-center md:gap-16">
          <Reveal className="md:col-span-6">
            <SectionTitle
              id="apoie-titulo"
              eyebrow="07 — Apoie"
              titulo={
                <>
                  Todo recomeço precisa de{' '}
                  <em className="font-normal italic text-cobalt-600">alguém do lado</em>
                </>
              }
              intro="Sua doação, o seu tempo como voluntário, uma parceria ou simplesmente a divulgação do nosso trabalho mantém os projetos da Alma de Fênix em movimento."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Botao to="/apoie" variante="gold">
                Quero apoiar
              </Botao>
              <Botao to="/voluntariado" variante="outline">
                Ser voluntário
              </Botao>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-6">
            <div className="grid gap-px bg-navy-800/15 sm:grid-cols-2">
              {[
                { titulo: 'Doação', texto: 'Contribuição financeira, incluindo PIX.' },
                { titulo: 'Voluntariado', texto: 'Tempo, presença e habilidades.' },
                { titulo: 'Parceria', texto: 'Empresas, escolas e coletivos.' },
                { titulo: 'Divulgação', texto: 'Compartilhe nossos projetos.' },
              ].map((forma) => (
                <div key={forma.titulo} className="flex flex-col gap-2 bg-paper-100 p-6">
                  <h3 className="text-lg text-navy-900">{forma.titulo}</h3>
                  <p className="text-sm leading-relaxed text-ink-600">{forma.texto}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaFinal />
    </>
  )
}
