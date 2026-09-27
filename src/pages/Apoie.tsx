import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { CtaFinal } from '../components/CtaFinal'
import { EtiquetaPendente } from '../components/Pendencias'
import { Botao } from '../components/Botao'
import { doacao, linkWhatsapp, organizacao } from '../content/site'

export function Apoie() {
  const whats = linkWhatsapp(`Olá! Quero apoiar a ${organizacao.nome}.`)

  const formas = [
    {
      titulo: 'Doação',
      texto:
        'Qualquer valor sustenta os projetos: alimentação, material, estrutura das aulas e das ações sociais.',
      cta: 'Ver dados para doação',
      destino: '#pix',
    },
    {
      titulo: 'Voluntariado',
      texto: 'Some tempo, presença e habilidades às frentes de atuação da instituição.',
      cta: 'Quero ser voluntário',
      destino: '/voluntariado',
    },
    {
      titulo: 'Parceria',
      texto:
        'Empresas, escolas, coletivos e órgãos públicos podem construir projetos conosco.',
      cta: 'Propor parceria',
      destino: '/contato',
    },
    {
      titulo: 'Divulgação',
      texto:
        'Compartilhe nossos projetos com a sua rede. Divulgação também é forma de apoiar.',
      cta: 'Falar com a equipe',
      destino: '/contato',
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="Apoie a Alma de Fênix"
        titulo="Seu apoio vira recomeço na prática"
        intro={
          <p>
            Doação, voluntariado, parceria ou divulgação: há mais de um jeito de manter os projetos
            em movimento.
          </p>
        }
        descricaoSeo="Formas de apoiar a Associação Alma de Fênix: doação, PIX, voluntariado, parceria e divulgação."
      />

      {/* Por que apoiar */}
      <section className="bg-paper-50" aria-labelledby="por-que-apoiar-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <SectionTitle
              id="por-que-apoiar-titulo"
              eyebrow="Por que apoiar"
              titulo="O que o seu apoio torna possível"
              intro="Cada contribuição se transforma em algo concreto no dia a dia dos projetos — aulas, materiais, ações sociais e a presença constante com as famílias."
            />
          </Reveal>

          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {formas.map((forma, i) => (
              <Reveal as="li" key={forma.titulo} delay={i * 60}>
                <div className="flex h-full flex-col gap-3 border-t-2 border-gold-500 pt-5">
                  <span className="text-[0.6875rem] font-semibold tracking-[0.24em] text-gold-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl text-navy-900">{forma.titulo}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-ink-600">{forma.texto}</p>
                  <div className="mt-auto pt-3">
                    <Botao
                      {...(forma.destino.startsWith('/') ? { to: forma.destino } : { href: forma.destino })}
                      variante="outline"
                      className="w-full px-4 py-2.5 text-[0.6875rem]"
                    >
                      {forma.cta}
                    </Botao>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PIX / doação */}
      <section
        id="pix"
        className="border-y border-navy-800/12 bg-paper-100"
        aria-labelledby="pix-titulo"
      >
        <div className="mx-auto grid max-w-[80rem] gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-6">
            <SectionTitle
              id="pix-titulo"
              eyebrow="Doação via PIX"
              titulo="Contribua de forma simples e imediata"
              intro="Quando a chave PIX oficial for informada, ela aparece aqui junto com o QR Code e os dados bancários da instituição."
            />

            <dl className="mt-8 divide-y divide-navy-800/10 border-y border-navy-800/15">
              <div className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                  Tipo da chave
                </dt>
                <dd className="text-right text-[0.9375rem] text-navy-900">
                  {doacao.pixTipo ?? <EtiquetaPendente texto="A inserir" />}
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                  Chave PIX
                </dt>
                <dd className="break-all text-right text-[0.9375rem] text-navy-900">
                  {doacao.pixChave ?? <EtiquetaPendente texto="Chave a inserir" />}
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                  Beneficiário
                </dt>
                <dd className="text-right text-[0.9375rem] text-navy-900">
                  {doacao.pixBeneficiario ?? <EtiquetaPendente texto="A inserir" />}
                </dd>
              </div>
            </dl>

            <p className="caption-text mt-5 border-l-2 border-gold-500 pl-4">
              Nenhuma chave PIX ou dado bancário foi criado para esta demonstração. Assim que a
              instituição fornecer os dados oficiais, eles passam a aparecer aqui e o botão de
              copiar será ativado.
            </p>
          </Reveal>

          <Reveal delay={100} className="md:col-span-6">
            <div className="flex flex-col items-center gap-6 border border-navy-800/15 bg-white p-8 text-center">
              <div className="flex aspect-square w-full max-w-72 items-center justify-center border border-dashed border-navy-800/30 bg-paper-100">
                {doacao.pixQrCode ? (
                  <img
                    src={doacao.pixQrCode}
                    alt="QR Code PIX da Associação Alma de Fênix"
                    className="h-full w-full object-contain p-4"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 px-6 text-ink-400">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      className="h-9 w-9"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <path d="M14 14h3v3h-3zM20 14h1M14 20h3M20 17v4" />
                    </svg>
                    <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em]">
                      QR Code PIX a inserir
                    </span>
                  </div>
                )}
              </div>
              <h3 className="text-xl text-navy-900">Escaneie ou copie a chave</h3>
              <p className="max-w-sm text-[0.9375rem] leading-relaxed text-ink-600">
                O QR Code oficial será publicado aqui. Até lá, fale com a equipe para conhecer as
                formas de contribuir.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Botao href={whats ?? '/contato'} variante="gold">
                  {whats ? 'Falar no WhatsApp' : 'Falar com a equipe'}
                </Botao>
                <Botao to="/transparencia" variante="outline">
                  Prestação de contas
                </Botao>
              </div>
            </div>

            {doacao.dadosBancarios && (
              <pre className="mt-6 overflow-x-auto border border-navy-800/15 bg-white p-5 text-sm text-navy-900">
                {doacao.dadosBancarios}
              </pre>
            )}
          </Reveal>
        </div>
      </section>

      <CtaFinal
        titulo="Prefere conversar antes de doar?"
        texto="A equipe pode explicar como sua contribuição se transforma em ação nos projetos da Alma de Fênix."
      />
    </>
  )
}
