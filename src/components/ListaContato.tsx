import { contato, linkEmail, linkWhatsapp, organizacao } from '../content/site'
import { EtiquetaPendente } from './Pendencias'

/**
 * Lista de canais de contato. Cada linha mostra o dado real quando
 * existe e um placeholder explícito quando ainda não foi fornecido.
 */
export function ListaContato() {
  const whats = linkWhatsapp(`Olá! Vim pelo site da ${organizacao.nome}.`)
  const email = linkEmail()

  const itens = [
    {
      rotulo: 'WhatsApp',
      valor: contato.whatsapp ? (
        <a
          href={whats!}
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy-800 underline decoration-gold-500 underline-offset-4 transition-colors hover:text-gold-600"
        >
          {contato.whatsapp}
        </a>
      ) : null,
    },
    {
      rotulo: 'E-mail',
      valor: email ? (
        <a
          href={email}
          className="text-navy-800 underline decoration-gold-500 underline-offset-4 transition-colors hover:text-gold-600"
        >
          {contato.email}
        </a>
      ) : null,
    },
    {
      rotulo: 'Instagram',
      valor: contato.instagram ? (
        <a
          href={contato.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy-800 underline decoration-gold-500 underline-offset-4 transition-colors hover:text-gold-600"
        >
          {contato.instagram}
        </a>
      ) : null,
    },
    { rotulo: 'Endereço', valor: contato.endereco },
    { rotulo: 'Horário de atendimento', valor: contato.horario },
    { rotulo: 'CNPJ', valor: contato.cnpj },
  ]

  return (
    <dl className="divide-y divide-navy-800/10 border-y border-navy-800/15">
      {itens.map((item) => (
        <div key={item.rotulo} className="flex flex-wrap items-baseline justify-between gap-3 py-4">
          <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600">
            {item.rotulo}
          </dt>
          <dd className="text-right text-[0.9375rem] text-navy-900">
            {item.valor ?? <EtiquetaPendente texto="Dado a inserir" />}
          </dd>
        </div>
      ))}
    </dl>
  )
}
