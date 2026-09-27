import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navegacao } from '../content/site'
import { Botao } from './Botao'

/** Cabeçalho fixo com navegação principal e menu mobile. */
export function Header() {
  const [aberto, setAberto] = useState(false)
  const [rolado, setRolado] = useState(false)
  const local = useLocation()

  // Fecha o menu ao trocar de página.
  useEffect(() => {
    setAberto(false)
  }, [local.pathname])

  // Bloqueia a rolagem do corpo quando o menu está aberto.
  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [aberto])

  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 8)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    const aoEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberto(false)
    }
    window.addEventListener('keydown', aoEsc)
    return () => window.removeEventListener('keydown', aoEsc)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        rolado || aberto
          ? 'border-navy-800/12 bg-paper-50/97 backdrop-blur-sm'
          : 'border-transparent bg-paper-50'
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[80rem] items-center justify-between gap-6 px-5 sm:px-8">
        {/* Identidade */}
        <Link to="/" className="flex items-center gap-3" aria-label="Alma de Fênix — página inicial">
          <img
            src="/assets/logo-simbolo.png"
            alt=""
            aria-hidden="true"
            className="h-11 w-auto sm:h-12"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.0625rem] font-semibold tracking-tight text-navy-900 sm:text-[1.1875rem]">
              Alma de Fênix
            </span>
            <span className="mt-1 text-[0.5625rem] font-semibold uppercase tracking-[0.28em] text-gold-600">
              Associação
            </span>
          </span>
        </Link>

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 xl:flex">
          {navegacao.map((item) => (
            <NavLink
              key={item.caminho}
              to={item.caminho}
              end={item.caminho === '/'}
              className={({ isActive }) =>
                `relative py-1 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                  isActive ? 'text-gold-600' : 'text-navy-800 hover:text-cobalt-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.rotulo}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-gold-500 transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Botao to="/apoie" variante="gold" className="hidden px-5 py-2.5 sm:inline-flex">
            Quero Apoiar
          </Botao>

          {/* Botão de menu mobile */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border border-navy-800/25 text-navy-800 xl:hidden"
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setAberto((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              {aberto ? (
                <path d="M5 5l14 14M19 5L5 19" />
              ) : (
                <path d="M3.5 7.5h17M3.5 12h17M3.5 16.5h17" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Painel mobile */}
      <div
        id="menu-mobile"
        hidden={!aberto}
        className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto border-t border-navy-800/10 bg-paper-50 xl:hidden"
      >
        <nav aria-label="Navegação principal (celular)" className="flex flex-col px-5 py-6 sm:px-8">
          {navegacao.map((item, i) => (
            <NavLink
              key={item.caminho}
              to={item.caminho}
              end={item.caminho === '/'}
              className={({ isActive }) =>
                `flex items-baseline gap-4 border-b border-navy-800/10 py-4 font-serif text-2xl transition-colors ${
                  isActive ? 'text-gold-600' : 'text-navy-900'
                }`
              }
            >
              <span className="text-[0.6875rem] font-semibold tracking-[0.2em] text-ink-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.rotulo}
            </NavLink>
          ))}
          <div className="mt-7 flex flex-col gap-3">
            <Botao to="/apoie" variante="gold">
              Quero Apoiar
            </Botao>
            <Botao to="/voluntariado" variante="outline">
              Seja Voluntário
            </Botao>
          </div>
        </nav>
      </div>
    </header>
  )
}
