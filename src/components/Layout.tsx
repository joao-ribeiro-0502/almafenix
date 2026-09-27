import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

/** Título/descrição padrão, usado quando a página não define os seus. */
const TITULO_PADRAO = 'Associação Alma de Fênix'
const DESCRICAO_PADRAO =
  'Site institucional da Associação Alma de Fênix: projetos sociais, formação profissional, esporte, cultura e ações com mulheres, crianças e adolescentes.'

/** Define title, meta description e Open Graph da página atual. */
export function useSeo(titulo: string, descricao?: string) {
  const { pathname } = useLocation()

  useEffect(() => {
    const desc = descricao ?? DESCRICAO_PADRAO
    document.title = titulo ? `${titulo} | ${TITULO_PADRAO}` : TITULO_PADRAO

    const garantirMeta = (seletor: string, attr: string, attrValor: string, valor: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(seletor)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, attrValor)
        document.head.appendChild(el)
      }
      el.setAttribute('content', valor)
    }

    garantirMeta('meta[name="description"]', 'name', 'description', desc)
    garantirMeta(
      'meta[property="og:title"]',
      'property',
      'og:title',
      titulo ? `${titulo} | ${TITULO_PADRAO}` : TITULO_PADRAO,
    )
    garantirMeta('meta[property="og:description"]', 'property', 'og:description', desc)
  }, [titulo, descricao, pathname])
}

/** Volga ao topo da página ao navegar entre rotas. */
function AoTopo() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:text-paper-50"
      >
        Pular para o conteúdo
      </a>
      <AoTopo />
      <Header />
      <main id="conteudo" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
