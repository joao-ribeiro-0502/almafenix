import type { ReactNode } from 'react'
import { useSeo } from './Layout'

/**
 * Cabeçalho padrão das páginas internas.
 * Composição editorial: sobretítulo, título grande e texto de apoio
 * sobre uma faixa de papel com filete dourado.
 */
export function PageHero({
  titulo,
  eyebrow,
  intro,
  tituloSeo,
  descricaoSeo,
  children,
}: {
  titulo: string
  eyebrow: string
  intro?: ReactNode
  tituloSeo?: string
  descricaoSeo?: string
  children?: ReactNode
}) {
  useSeo(tituloSeo ?? titulo, descricaoSeo)

  return (
    <section className="border-b border-navy-800/10 bg-paper-100">
      <div className="mx-auto max-w-[80rem] px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
          <p className="eyebrow text-gold-600">{eyebrow}</p>
        </div>
        <div className="mt-6 grid gap-8 md:grid-cols-12 md:items-end">
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05] text-navy-900 md:col-span-7">
            {titulo}
          </h1>
          {intro && (
            <div className="text-[1.0625rem] leading-relaxed text-ink-600 md:col-span-5">{intro}</div>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
