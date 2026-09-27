import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { CtaFinal } from '../components/CtaFinal'
import { DocumentCard } from '../components/TransparenciaGallery'
import { EtiquetaPendente } from '../components/Pendencias'
import { contato, documentos, equipe, parceiros } from '../content/site'

export function Transparencia() {
  return (
    <>
      <PageHero
        eyebrow="Transparência"
        titulo="Prestação de contas aberta à comunidade"
        intro={
          <p>
            Documentos institucionais, diretoria, parcerias e a destinação das doações — tudo em um
            só lugar.
          </p>
        }
        descricaoSeo="Transparência da Associação Alma de Fênix: estatuto, CNPJ, prestação de contas, relatórios, diretoria e parceiros."
      />

      {/* Dados institucionais */}
      <section className="bg-paper-50" aria-labelledby="dados-titulo">
        <div className="mx-auto grid max-w-[80rem] gap-12 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <SectionTitle
              id="dados-titulo"
              eyebrow="Dados oficiais"
              titulo="Identificação da instituição"
              intro="Somente dados confirmados pela diretoria são publicados. Os campos pendentes aparecem sinalizados."
            />
          </Reveal>

          <Reveal delay={100} className="md:col-span-7">
            <dl className="divide-y divide-navy-800/10 border-y border-navy-800/15">
              <div className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                  Razão social
                </dt>
                <dd className="text-right text-[0.9375rem] text-navy-900">
                  Associação Alma de Fênix
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                  CNPJ
                </dt>
                <dd className="text-right text-[0.9375rem] text-navy-900">
                  {contato.cnpj ?? <EtiquetaPendente texto="A inserir" />}
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                  Endereço
                </dt>
                <dd className="text-right text-[0.9375rem] text-navy-900">
                  {contato.endereco ?? <EtiquetaPendente texto="A inserir" />}
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                  E-mail oficial
                </dt>
                <dd className="text-right text-[0.9375rem] text-navy-900">
                  {contato.email ?? <EtiquetaPendente texto="A inserir" />}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Documentos */}
      <section className="border-t border-navy-800/12 bg-paper-100" aria-labelledby="docs-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTitle
              id="docs-titulo"
              eyebrow="Documentos"
              titulo="Estatuto, relatórios e prestação de contas"
              intro="Cada item abaixo recebe o arquivo oficial em PDF quando disponibilizado pela instituição."
            />
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documentos.map((doc, i) => (
              <Reveal as="li" key={doc.titulo} delay={i * 50}>
                <DocumentCard documento={doc} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Diretoria */}
      <section className="bg-paper-50" aria-labelledby="diretoria-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTitle
              id="diretoria-titulo"
              eyebrow="Diretoria"
              titulo="Quem responde pela instituição"
              intro="Nomes e cargos serão publicados mediante confirmação da própria diretoria."
            />
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipe.map((pessoa, i) => (
              <Reveal as="li" key={i} delay={i * 50}>
                <div className="flex flex-col gap-2 border border-navy-800/15 bg-white p-6">
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold-600">
                    Diretor(a) {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-lg font-semibold text-navy-900">
                    {pessoa.nome ?? <span className="font-normal text-ink-400">Nome a inserir</span>}
                  </p>
                  <p className="text-sm text-ink-600">
                    {pessoa.cargo ?? <span className="text-ink-400">Cargo a inserir</span>}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Parceiros */}
      <section className="border-t border-navy-800/12 bg-paper-100" aria-labelledby="parceiros-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTitle
              id="parceiros-titulo"
              eyebrow="Parceiros e convênios"
              titulo="Quem caminha com a Alma de Fênix"
              intro="Logotipos e nomes dos parceiros oficiais serão exibidos aqui."
            />
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {parceiros.map((p, i) => (
              <Reveal as="li" key={i} delay={i * 50}>
                <div className="flex h-28 items-center justify-center border border-dashed border-navy-800/25 bg-white px-4 text-center">
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
                    {p.nome ?? 'Parceiro a inserir'}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-14">
            <div className="border-l-2 border-gold-500 bg-paper-50 p-6">
              <h3 className="text-lg text-navy-900">Utilização das doações</h3>
              <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-600">
                A prestação de contas com a destinação dos recursos recebidos será publicada nesta
                seção, acompanhada dos relatórios de atividades correspondentes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaFinal titulo="Tem dúvidas sobre a nossa transparência?" />
    </>
  )
}
