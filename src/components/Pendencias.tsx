/**
 * Blocos de apoio para dados que ainda não foram fornecidos pela
 * instituição. Eles deixam a pendência VISÍVEL sem fingir conteúdo.
 */

/** Etiqueta discreta de dado pendente. */
export function EtiquetaPendente({ texto = 'A inserir' }: { texto?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-dashed border-gold-500/60 bg-gold-400/10 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-600">
      {texto}
    </span>
  )
}

/**
 * Espaço reservado para fotografia real.
 * Usa um bloco de marca d'água — nunca uma imagem falsa passando-se
 * por foto da instituição.
 */
export function EspacoFoto({
  legenda,
  proporcao = 'aspect-[4/3]',
  className = '',
  tono = 'claro',
}: {
  legenda: string
  proporcao?: string
  className?: string
  tono?: 'claro' | 'escuro'
}) {
  const base =
    tono === 'escuro'
      ? 'border-paper-50/20 bg-paper-50/5 text-paper-200/70'
      : 'border-navy-800/15 bg-navy-800/[0.03] text-ink-400'

  return (
    <div
      className={`photo-frame relative flex ${proporcao} w-full flex-col items-center justify-center gap-3 border ${base} ${className}`}
      role="img"
      aria-label={legenda}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="h-7 w-7 opacity-70"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="M3 16l5-5 4 4 3-3 6 6" />
        <circle cx="8.5" cy="9.5" r="1.5" />
      </svg>
      <span className="px-6 text-center text-[0.6875rem] font-semibold uppercase tracking-[0.18em]">
        {legenda}
      </span>
    </div>
  )
}

/** Linha de dado pendente usada em listas de informações. */
export function LinhaPendente({ rotulo }: { rotulo: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-navy-800/10 py-3.5">
      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
        {rotulo}
      </dt>
      <dd>
        <EtiquetaPendente />
      </dd>
    </div>
  )
}
