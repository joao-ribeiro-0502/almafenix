import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Atraso em milissegundos para a animação de entrada. */
  delay?: number
  as?: ElementType
  className?: string
}

/**
 * Entrada suave ao rolar a página (fade + deslocamento curto).
 * Respeita prefers-reduced-motion (o conteúdo já fica visível via CSS).
 */
export function Reveal({ children, delay = 0, as: Tag = 'div', className }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const no = ref.current
    if (!no) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisivel(true)
      return
    }

    const observer = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            setVisivel(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(no)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visivel ? 'is-visible' : ''} ${className ?? ''}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
