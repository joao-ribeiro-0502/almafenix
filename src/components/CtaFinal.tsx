import { Botao } from './Botao'
import { SectionTitle } from './SectionTitle'
import { linkWhatsapp, organizacao } from '../content/site'

/**
 * Chamada final em faixa escura — usada ao pé de várias páginas.
 */
export function CtaFinal({
  titulo = 'Vamos caminhar juntos?',
  texto = 'Participar, apoiar, divulgar ou pedir ajuda: escolha o caminho e fale com a Alma de Fênix.',
}: {
  titulo?: string
  texto?: string
}) {
  const whats = linkWhatsapp(`Olá! Vim pelo site da ${organizacao.nome} e gostaria de conversar.`)

  return (
    <section className="bg-navy-900" aria-labelledby="cta-final-titulo">
      <div className="mx-auto grid max-w-[80rem] gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <SectionTitle
            id="cta-final-titulo"
            tono="claro"
            eyebrow="Fale com a Alma de Fênix"
            titulo={titulo}
            intro={texto}
          />
        </div>
        <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
          <Botao href={whats ?? '/contato'} variante="gold" className="w-full md:w-auto">
            {whats ? 'Falar no WhatsApp' : 'Entrar em contato'}
          </Botao>
          <Botao to="/voluntariado" variante="light" className="w-full md:w-auto">
            Quero ser voluntário
          </Botao>
          <Botao to="/apoie" variante="light" className="w-full md:w-auto">
            Quero apoiar
          </Botao>
        </div>
      </div>
    </section>
  )
}
