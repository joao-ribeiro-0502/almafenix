import { Link } from 'react-router-dom'
import { EspacoFoto, EtiquetaPendente } from './Pendencias'

type Projeto = {
  id: string
  nome: string
  destaque: boolean
  categoria: string
  descricao: string
  imagem: string | null
}

/** Cartão de projeto. O Projeto Estrela usa a variante de destaque. */
export function ProjectCard({ projeto }: { projeto: Projeto }) {
  if (projeto.destaque) {
    return (
      <article className="grid gap-8 border border-navy-800/15 bg-paper-100 md:grid-cols-12 md:items-center">
        <div className="md:col-span-6">
          {projeto.imagem ? (
            <img
              src={projeto.imagem}
              alt={`Imagem do projeto ${projeto.nome}`}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          ) : (
            <EspacoFoto
              legenda="Espaço para imagem do Projeto Estrela"
              proporcao="aspect-[4/3]"
              className="border-0"
            />
          )}
        </div>
        <div className="flex flex-col gap-5 px-6 pb-10 md:col-span-6 md:px-10 md:py-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow text-gold-600">Projeto em destaque</span>
            <EtiquetaPendente texto="Conteúdo a inserir" />
          </div>
          <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-navy-900">
            {projeto.nome}
          </h3>
          <p className="text-[1.0625rem] leading-relaxed text-ink-600">{projeto.descricao}</p>
          <div className="mt-1">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 border-b border-gold-500 pb-1 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-navy-800 transition-colors hover:text-gold-600"
            >
              Quero saber mais
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group flex h-full flex-col gap-5 border-t border-navy-800/15 pt-6">
      <div className="flex items-start justify-between gap-4">
        <p className="eyebrow text-gold-600">{projeto.categoria}</p>
        <img
          src="/assets/logo-simbolo.png"
          alt=""
          aria-hidden="true"
          className="h-9 w-auto opacity-45 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
      <h3 className="text-xl leading-snug text-navy-900">{projeto.nome}</h3>
      <p className="text-[0.9375rem] leading-relaxed text-ink-600">{projeto.descricao}</p>
      <Link
        to="/contato"
        className="mt-auto inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-navy-800 transition-colors hover:text-gold-600"
      >
        Saiba mais <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}
