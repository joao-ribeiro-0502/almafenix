import { useState, type FormEvent } from 'react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { CtaFinal } from '../components/CtaFinal'
import { EtiquetaPendente } from '../components/Pendencias'
import { Botao } from '../components/Botao'
import { areasVoluntariado, linkWhatsapp, organizacao } from '../content/site'

/**
 * Página de voluntariado.
 *
 * O formulário é VISUAL: nesta versão não há envio, gravação nem
 * confirmação automática. A mensagem exibida ao enviar deixa isso
 * claro e direciona para os canais oficiais.
 */
export function Voluntariado() {
  const [enviado, setEnviado] = useState(false)
  const whats = linkWhatsapp(`Olá! Quero ser voluntário(a) da ${organizacao.nome}.`)

  const campo =
    'w-full border border-navy-800/25 bg-white px-4 py-3 text-[0.9375rem] text-navy-900 placeholder:text-ink-400 transition-colors focus:border-gold-500 focus:outline-none'
  const rotulo = 'block text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600'

  function aoEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Seja voluntário"
        titulo="O seu tempo pode ser o recomeço de alguém"
        intro={
          <p>
            O voluntariado sustenta boa parte do trabalho da Alma de Fênix: presença, ofícios,
            escuta e dedicação.
          </p>
        }
        descricaoSeo="Seja voluntário da Associação Alma de Fênix: áreas de interesse, disponibilidade, habilidades e contato."
      />

      {/* Importância */}
      <section className="bg-paper-50" aria-labelledby="importancia-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <SectionTitle
              id="importancia-titulo"
              eyebrow="Por que ser voluntário"
              titulo="Voluntariado é presença, não só ajuda"
              intro="Ser voluntário é dividir o que você sabe, ouvir quem precisa e estar presente com constância. Cada habilidade encontra um lugar nos nossos projetos."
            />
          </Reveal>

          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-3">
            {[
              {
                titulo: 'Disponibilidade',
                texto: 'Defina quantas horas por semana ou mês você pode dedicar.',
              },
              {
                titulo: 'Habilidades',
                texto: 'Ensino, ofícios, comunicação, apoio administrativo ou logística.',
              },
              {
                titulo: 'Experiência',
                texto: 'Conte o que você já fez — experiência também se constrói aqui.',
              },
            ].map((item, i) => (
              <Reveal as="li" key={item.titulo} delay={i * 60}>
                <div className="border-t border-navy-800/20 pt-5">
                  <h3 className="text-xl text-navy-900">{item.titulo}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{item.texto}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Formulário visual */}
      <section
        className="border-t border-navy-800/12 bg-paper-100"
        aria-labelledby="form-voluntario-titulo"
      >
        <div className="mx-auto grid max-w-[80rem] gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <SectionTitle
              id="form-voluntario-titulo"
              eyebrow="Cadastro de interesse"
              titulo="Conte quem você é"
              intro="Este formulário apresenta o modelo do cadastro de voluntariado. Na primeira versão do site ele não envia dados — o contato real acontece pelos canais oficiais."
            />

            <div className="mt-8 flex flex-col gap-3">
              <Botao href={whats ?? '/contato'} variante="gold">
                {whats ? 'Falar no WhatsApp' : 'Falar com a equipe'}
              </Botao>
              <EtiquetaPendente texto="Canal oficial em atualização" />
            </div>
          </Reveal>

          <Reveal delay={100} className="md:col-span-7">
            <form onSubmit={aoEnviar} className="flex flex-col gap-5 border border-navy-800/15 bg-paper-50 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className={rotulo} htmlFor="vol-nome">
                    Nome completo
                  </label>
                  <input className={campo} id="vol-nome" name="nome" type="text" required autoComplete="name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={rotulo} htmlFor="vol-email">
                    E-mail
                  </label>
                  <input className={campo} id="vol-email" name="email" type="email" required autoComplete="email" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className={rotulo} htmlFor="vol-telefone">
                    Telefone / WhatsApp
                  </label>
                  <input className={campo} id="vol-telefone" name="telefone" type="tel" autoComplete="tel" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={rotulo} htmlFor="vol-cidade">
                    Cidade / bairro
                  </label>
                  <input className={campo} id="vol-cidade" name="cidade" type="text" />
                </div>
              </div>

              <fieldset className="flex flex-col gap-3 border border-navy-800/15 p-4">
                <legend className="px-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
                  Áreas de interesse
                </legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {areasVoluntariado.map((area) => (
                    <label
                      key={area}
                      className="flex cursor-pointer items-start gap-3 text-[0.9375rem] leading-snug text-navy-900"
                    >
                      <input
                        type="checkbox"
                        name="areas"
                        value={area}
                        className="mt-1 h-4 w-4 shrink-0 accent-[#c8862b]"
                      />
                      {area}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className={rotulo} htmlFor="vol-disponibilidade">
                    Disponibilidade
                  </label>
                  <select className={campo} id="vol-disponibilidade" name="disponibilidade" defaultValue="">
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="semanal">Horas semanais</option>
                    <option value="quinzenal">Quinzenal</option>
                    <option value="mensal">Mensal</option>
                    <option value="eventos">Somente em eventos e campanhas</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className={rotulo} htmlFor="vol-experiencia">
                    Experiência prévia
                  </label>
                  <select className={campo} id="vol-experiencia" name="experiencia" defaultValue="">
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="nenhuma">Primeira experiência</option>
                    <option value="alguma">Já fui voluntário antes</option>
                    <option value="profissional">Atuação profissional na área</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className={rotulo} htmlFor="vol-habilidades">
                  Habilidades e observações
                </label>
                <textarea
                  className={`${campo} min-h-32 resize-y`}
                  id="vol-habilidades"
                  name="habilidades"
                  placeholder="Conte rapidamente o que você sabe fazer e o que gostaria de contribuir."
                />
              </div>

              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center border border-navy-800 bg-navy-800 px-7 py-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-paper-50 transition-colors hover:bg-navy-700"
                >
                  Registrar interesse
                </button>

                <p className="caption-text border-l-2 border-gold-500 pl-4">
                  <strong className="font-semibold text-navy-900">Formulário demonstrativo.</strong>{' '}
                  Nenhum dado digitado aqui é enviado ou armazenado. Esta versão do site é apenas
                  visual; o cadastro de voluntariado será integrado num próximo momento.
                </p>

                {enviado && (
                  <p
                    role="status"
                    className="border border-gold-500/50 bg-gold-400/10 px-4 py-3 text-sm text-navy-900"
                  >
                    Obrigado pelo interesse! Como o envio ainda não está ativo, seu cadastro não foi
                    registrado. Fale com a equipe pelo WhatsApp ou e-mail oficial para se cadastrar.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <CtaFinal
        titulo="Ainda tem dúvidas sobre voluntariado?"
        texto="A equipe pode explicar como funcionam as frentes de atuação e o que é necessário para começar."
      />
    </>
  )
}
