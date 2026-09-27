import { Link } from 'react-router-dom'
import { EspacoFoto, LinhaPendente } from './Pendencias'

type Curso = {
  id: string
  nome: string
  descricao: string
  publicoAlvo: string
  cargaHoraria: string
  proximaTurma: string
  horario: string
  local: string
  status: string
  imagem: string | null
}

/** Cartão de curso com toda a estrutura de informação pronta. */
export function CourseCard({ curso }: { curso: Curso }) {
  return (
    <article className="flex flex-col border border-navy-800/15 bg-white">
      <div className="border-b border-navy-800/10">
        {curso.imagem ? (
          <img
            src={curso.imagem}
            alt={`Imagem do curso ${curso.nome}`}
            className="aspect-[16/10] w-full object-cover"
            loading="lazy"
          />
        ) : (
          <EspacoFoto
            legenda="Espaço para imagem do curso"
            proporcao="aspect-[16/10]"
            className="border-0"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
        <p className="eyebrow text-gold-600">{curso.status}</p>
        <h3 className="text-2xl leading-snug text-navy-900">{curso.nome}</h3>
        <p className="text-[0.9375rem] leading-relaxed text-ink-600">{curso.descricao}</p>

        <dl className="mt-1 divide-y divide-navy-800/10 border-y border-navy-800/10">
          <div className="flex items-baseline justify-between gap-4 py-3.5">
            <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
              Público-alvo
            </dt>
            <dd className="text-right text-sm text-navy-800">{curso.publicoAlvo}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 py-3.5">
            <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
              Carga horária
            </dt>
            <dd className="text-right text-sm text-navy-800">{curso.cargaHoraria}</dd>
          </div>
          <LinhaPendente rotulo="Próxima turma" />
          <LinhaPendente rotulo="Horário" />
          <LinhaPendente rotulo="Local" />
        </dl>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <InscricaoBotao />
        </div>
      </div>
    </article>
  )
}

/** CTA de inscrição: preparado para WhatsApp/futura integração. */
function InscricaoBotao() {
  // Enquanto não houver WhatsApp real, o botão leva à página de contato.
  return (
    <Link
      to="/contato"
      className="inline-flex items-center justify-center border border-navy-800/35 px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-navy-800 transition-colors hover:border-navy-800 hover:bg-navy-800 hover:text-paper-50"
    >
      Tenho interesse
    </Link>
  )
}
