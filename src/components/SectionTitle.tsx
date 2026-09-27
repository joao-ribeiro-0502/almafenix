import type { ReactNode } from 'react'

/** Título de seção editorial: sobretítulo, título e texto de apoio. */
export function SectionTitle({
  eyebrow,
  titulo,
  intro,
  align = 'left',
  tono = 'escuro',
  id,
}: {
  eyebrow?: string
  titulo: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  tono?: 'escuro' | 'claro'
  id?: string
}) {
  const corTitulo = tono === 'claro' ? 'text-paper-50' : 'text-navy-900'
  const corIntro = tono === 'claro' ? 'text-paper-200/85' : 'text-ink-600'
  const corEyebrow = tono === 'claro' ? 'text-gold-300' : 'text-gold-600'
  const alinhamento = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-4 ${alinhamento}`}>
      {eyebrow && (
        <p className={`eyebrow ${corEyebrow}`} aria-hidden="true">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={`text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.12] ${corTitulo}`}>
        {titulo}
      </h2>
      {intro && <p className={`max-w-2xl text-[1.0625rem] leading-relaxed ${corIntro}`}>{intro}</p>}
    </div>
  )
}
