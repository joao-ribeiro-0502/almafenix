import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { CtaFinal } from '../components/CtaFinal'
import { ListaContato } from '../components/ListaContato'
import { FormularioContato } from '../components/FormularioContato'
import { EspacoFoto, EtiquetaPendente } from '../components/Pendencias'
import { Botao } from '../components/Botao'
import { contato, linkWhatsapp, organizacao } from '../content/site'

export function Contato() {
  const whats = linkWhatsapp(`Olá! Vim pelo site da ${organizacao.nome}.`)

  return (
    <>
      <PageHero
        eyebrow="Contato"
        titulo="A conversa começa aqui"
        intro={
          <p>
            Fale com a equipe da Alma de Fênix para participar, pedir ajuda, apoiar ou propor uma
            parceria.
          </p>
        }
        descricaoSeo="Entre em contato com a Associação Alma de Fênix: WhatsApp, e-mail, Instagram, endereço e formulário."
      />

      {/* Canais */}
      <section className="bg-paper-50" aria-labelledby="canais-titulo">
        <div className="mx-auto grid max-w-[80rem] gap-12 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <SectionTitle
              id="canais-titulo"
              eyebrow="Canais oficiais"
              titulo="Como falar com a gente"
              intro="Os canais abaixo são os únicos oficiais da instituição. Os campos ainda não preenchidos serão publicados assim que confirmados."
            />
            <div className="mt-8 flex flex-col gap-3">
              <Botao href={whats ?? undefined} variante="gold">
                {whats ? 'Falar no WhatsApp' : 'WhatsApp — a inserir'}
              </Botao>
              {contato.email ? (
                <Botao href={`mailto:${contato.email}`} variante="outline">
                  Enviar e-mail
                </Botao>
              ) : (
                <Botao to="/apoie" variante="outline">
                  Enquanto isso, apoie o trabalho
                </Botao>
              )}
            </div>
          </Reveal>

          <Reveal delay={100} className="md:col-span-7">
            <ListaContato />
          </Reveal>
        </div>
      </section>

      {/* Mapa */}
      <section className="border-y border-navy-800/12 bg-paper-100" aria-labelledby="mapa-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <SectionTitle id="mapa-titulo" eyebrow="Localização" titulo="Onde estamos" />
              <EtiquetaPendente texto="Endereço e mapa a inserir" />
            </div>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            {contato.mapa ? (
              <iframe
                src={contato.mapa}
                title="Mapa da localização da Associação Alma de Fênix"
                className="h-[22rem] w-full border border-navy-800/15"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <EspacoFoto
                legenda="Mapa será incorporado quando o endereço oficial for informado"
                proporcao="aspect-[21/9]"
              />
            )}
          </Reveal>
          {contato.endereco && (
            <p className="mt-5 text-[1.0625rem] text-navy-900">{contato.endereco}</p>
          )}
        </div>
      </section>

      {/* Formulário */}
      <section className="bg-paper-50" aria-labelledby="formulario-titulo">
        <div className="mx-auto grid max-w-[80rem] gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <SectionTitle
              id="formulario-titulo"
              eyebrow="Formulário"
              titulo="Escreva para a Alma de Fênix"
              intro="Este formulário é visual nesta primeira versão: ele mostra como será o contato no futuro, mas ainda não transmite dados."
            />
          </Reveal>
          <Reveal delay={100} className="md:col-span-7">
            <FormularioContato />
          </Reveal>
        </div>
      </section>

      <CtaFinal
        titulo="Prefere conversar agora?"
        texto="O WhatsApp é o caminho mais rápido para falar com a equipe — assim que o número oficial for publicado, o botão abre a conversa."
      />
    </>
  )
}
