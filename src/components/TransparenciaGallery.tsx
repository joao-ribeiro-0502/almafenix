import { EspacoFoto, EtiquetaPendente } from './Pendencias'

type Documento = { titulo: string; tipo: string; status: string }

/** Item de documento institucional (transparência). */
export function DocumentCard({ documento }: { documento: Documento }) {
  return (
    <li className="flex flex-col gap-3 border border-navy-800/15 bg-white p-5 transition-colors duration-200 hover:border-navy-800/35">
      <div className="flex items-start justify-between gap-3">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          className="h-6 w-6 shrink-0 text-cobalt-600"
          aria-hidden="true"
        >
          <path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5z" />
          <path d="M14 3v4.5h4.5M8.5 12.5h7M8.5 16h7" />
        </svg>
        <EtiquetaPendente texto={documento.status} />
      </div>
      <h3 className="text-lg leading-snug text-navy-900">{documento.titulo}</h3>
      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
        Formato {documento.tipo} · arquivo ainda não publicado
      </p>
    </li>
  )
}

/** Galeria de ações: blocos prontos para receber fotografias reais. */
export function Gallery({
  itens,
}: {
  itens: { src: string | null; legenda: string; categoria: string }[]
}) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {itens.map((item, i) => (
        <li key={i} className="flex flex-col gap-3">
          {item.src ? (
            <img
              src={item.src}
              alt={item.legenda}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          ) : (
            <EspacoFoto legenda={item.legenda} proporcao="aspect-[4/3]" />
          )}
          <div className="flex items-center justify-between gap-3">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
              {item.categoria}
            </span>
            {!item.src && <EtiquetaPendente texto="Foto pendente" />}
          </div>
        </li>
      ))}
    </ul>
  )
}
