import { EtiquetaPendente } from './Pendencias'

/**
 * Indicador de impacto. Quando o valor real ainda não existe,
 * exibe um marcador discreto — nunca um número inventado.
 */
export function ImpactCard({ valor, rotulo }: { valor: string | null; rotulo: string }) {
  return (
    <div className="flex flex-col items-center gap-3 border-t border-paper-50/25 pt-6 text-center">
      {valor ? (
        <span className="font-serif text-[clamp(2.5rem,5vw,3.75rem)] leading-none text-gold-300">
          {valor}
        </span>
      ) : (
        <span
          className="flex h-[clamp(2.5rem,5vw,3.75rem)] items-center font-serif text-[clamp(2rem,4vw,3rem)] leading-none text-paper-50/35"
          aria-hidden="true"
        >
          ···
        </span>
      )}
      <span className="max-w-[14rem] text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-paper-200/85">
        {rotulo}
      </span>
      {!valor && <EtiquetaPendente texto="Dado a inserir" />}
    </div>
  )
}

/**
 * Depoimento/história. Estrutura pronta para foto, nome, história
 * e resultado — sem nenhum conteúdo inventado.
 */
export function Testimonial({
  nome,
  projeto,
}: {
  nome: string | null
  projeto: string | null
}) {
  return (
    <figure className="flex flex-col gap-5 border border-navy-800/15 bg-white p-6 sm:p-8">
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-gold-400"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7.5 6C5 6 3 8.2 3 11c0 2.5 1.9 4.4 4.3 4.4.4 0 .8 0 1.1-.1-.6 1.7-2.1 3-4 3.4l.7 1.7c3.6-1 6.4-4.2 6.4-8.5C11.5 8.2 9.9 6 7.5 6zm10 0C15 6 13 8.2 13 11c0 2.5 1.9 4.4 4.3 4.4.4 0 .8 0 1.1-.1-.6 1.7-2.1 3-4 3.4l.7 1.7c3.6-1 6.4-4.2 6.4-8.5C21.5 8.2 19.9 6 17.5 6z" />
      </svg>

      <blockquote className="text-[1.0625rem] leading-relaxed text-ink-700">
        <span className="text-ink-400">
          Espaço reservado para a história de participante — o texto será publicado após
          autorização da pessoa e validação da instituição.
        </span>
      </blockquote>

      <figcaption className="flex items-center gap-4 border-t border-navy-800/10 pt-5">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-dashed border-gold-500/60 bg-gold-400/10 text-gold-600"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-5 w-5">
            <circle cx="12" cy="8.5" r="3.5" />
            <path d="M4.5 20c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5" />
          </svg>
        </span>
        <span className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-navy-900">
            {nome ?? <span className="text-ink-400">Nome a inserir</span>}
          </span>
          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold-600">
            {projeto ?? 'Projeto a inserir'}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}
