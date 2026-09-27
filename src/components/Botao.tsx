import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variante = 'primary' | 'gold' | 'outline' | 'light'

type BotaoProps = {
  children: ReactNode
  /** Caminho interno (react-router). */
  to?: string
  /** Link externo completo. */
  href?: string
  variante?: Variante
  className?: string
  /** Ação simples, sem navegação. */
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  ariaLabel?: string
}

const variantes: Record<Variante, string> = {
  primary:
    'bg-navy-800 text-paper-50 hover:bg-navy-700 border border-navy-800 hover:border-navy-700',
  gold: 'bg-gold-500 text-navy-950 hover:bg-gold-400 border border-gold-500 hover:border-gold-400',
  outline:
    'bg-transparent text-navy-800 border border-navy-800/35 hover:border-navy-800 hover:bg-navy-800 hover:text-paper-50',
  light:
    'bg-transparent text-paper-50 border border-paper-50/40 hover:bg-paper-50 hover:text-navy-900',
}

const base =
  'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none'

export function Botao({
  children,
  to,
  href,
  variante = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled,
  ariaLabel,
}: BotaoProps) {
  const classes = `${base} ${variantes[variante]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  if (href) {
    const externo = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
