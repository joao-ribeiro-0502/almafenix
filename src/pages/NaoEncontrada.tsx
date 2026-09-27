import { Botao } from '../components/Botao'
import { useSeo } from '../components/Layout'

export function NaoEncontrada() {
  useSeo('Página não encontrada', 'A página solicitada não existe.')

  return (
    <section className="bg-paper-100">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-5 py-28 text-center sm:px-8">
        <img
          src="/assets/logo-simbolo.png"
          alt=""
          aria-hidden="true"
          className="h-24 w-auto opacity-80"
        />
        <p className="eyebrow text-gold-600">Erro 404</p>
        <h1 className="text-[clamp(2rem,5vw,3.25rem)] leading-tight text-navy-900">
          Esta página ainda não existe
        </h1>
        <p className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-600">
          O endereço acessado não faz parte do site da Associação Alma de Fênix. Volte ao início ou
          escolha uma das opções abaixo.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Botao to="/" variante="primary">
            Ir para o início
          </Botao>
          <Botao to="/contato" variante="outline">
            Fale conosco
          </Botao>
        </div>
      </div>
    </section>
  )
}
