import { Link } from 'react-router-dom'
import { contato, navegacao, organizacao } from '../content/site'

/** Rodapé institucional. */
export function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="border-t border-paper-50/10 bg-navy-900 text-paper-200">
      <div className="mx-auto max-w-[80rem] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Identidade */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img src="/assets/logo-simbolo.png" alt="" aria-hidden="true" className="h-14 w-auto" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold text-paper-50">
                  {organizacao.nomeCurto}
                </span>
                <span className="mt-1 text-[0.5625rem] font-semibold uppercase tracking-[0.28em] text-gold-300">
                  Associação
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper-200/75">
              {organizacao.apresentacao}
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé" className="md:col-span-3">
            <h2 className="eyebrow text-gold-300">Navegação</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navegacao.map((item) => (
                <li key={item.caminho}>
                  <Link
                    to={item.caminho}
                    className="text-paper-200/80 transition-colors hover:text-gold-300"
                  >
                    {item.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Participar */}
          <nav aria-label="Formas de participar" className="md:col-span-2">
            <h2 className="eyebrow text-gold-300">Participe</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/apoie" className="text-paper-200/80 transition-colors hover:text-gold-300">
                  Doações
                </Link>
              </li>
              <li>
                <Link
                  to="/voluntariado"
                  className="text-paper-200/80 transition-colors hover:text-gold-300"
                >
                  Voluntariado
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-paper-200/80 transition-colors hover:text-gold-300">
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-paper-200/80 transition-colors hover:text-gold-300">
                  Fale conosco
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contato */}
          <div className="md:col-span-3">
            <h2 className="eyebrow text-gold-300">Contato</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="text-paper-200/80">
                <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-paper-200/50">
                  WhatsApp
                </span>
                {contato.whatsapp ? (
                  <a
                    href={`https://wa.me/${contato.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold-300"
                  >
                    {contato.whatsapp}
                  </a>
                ) : (
                  <span className="text-paper-200/45">A inserir</span>
                )}
              </li>
              <li className="text-paper-200/80">
                <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-paper-200/50">
                  E-mail
                </span>
                {contato.email ? (
                  <a
                    href={`mailto:${contato.email}`}
                    className="transition-colors hover:text-gold-300"
                  >
                    {contato.email}
                  </a>
                ) : (
                  <span className="text-paper-200/45">A inserir</span>
                )}
              </li>
              <li className="text-paper-200/80">
                <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-paper-200/50">
                  Endereço
                </span>
                {contato.endereco ?? <span className="text-paper-200/45">A inserir</span>}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper-50/12 pt-7 text-xs text-paper-200/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {organizacao.nome}. Todos os direitos reservados.
          </p>
          <p className="text-paper-200/40">
            Conteúdo institucional em atualização — dados oficiais serão publicados em breve.
          </p>
        </div>
      </div>
    </footer>
  )
}
