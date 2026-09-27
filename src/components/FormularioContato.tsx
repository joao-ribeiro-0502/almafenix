import { useState, type FormEvent } from 'react'

/**
 * Formulário VISUAL de contato.
 *
 * IMPORTANTE: este formulário não envia dados para nenhum servidor
 * (a V1 é apenas front-end). Ao enviar, ele exibe uma mensagem
 * explicando como entrar em contato de verdade — sem prometer
 * gravação, cadastro ou confirmação automática.
 */
export function FormularioContato({ assuntoPadrao = '' }: { assuntoPadrao?: string }) {
  const [enviado, setEnviado] = useState(false)

  function aoEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEnviado(true)
  }

  const campo =
    'w-full border border-navy-800/25 bg-white px-4 py-3 text-[0.9375rem] text-navy-900 placeholder:text-ink-400 transition-colors focus:border-gold-500 focus:outline-none'
  const rotulo = 'block text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-600'

  return (
    <form onSubmit={aoEnviar} className="flex flex-col gap-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={rotulo} htmlFor="campo-nome">
            Nome completo
          </label>
          <input className={campo} id="campo-nome" name="nome" type="text" required autoComplete="name" />
        </div>
        <div className="flex flex-col gap-2">
          <label className={rotulo} htmlFor="campo-email">
            E-mail
          </label>
          <input className={campo} id="campo-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={rotulo} htmlFor="campo-telefone">
            Telefone / WhatsApp
          </label>
          <input className={campo} id="campo-telefone" name="telefone" type="tel" autoComplete="tel" />
        </div>
        <div className="flex flex-col gap-2">
          <label className={rotulo} htmlFor="campo-assunto">
            Assunto
          </label>
          <select className={campo} id="campo-assunto" name="assunto" defaultValue={assuntoPadrao}>
            <option value="">Selecione</option>
            <option value="quero-participar">Quero participar</option>
            <option value="preciso-de-ajuda">Preciso de ajuda</option>
            <option value="quero-apoiar">Quero apoiar</option>
            <option value="voluntariado">Voluntariado</option>
            <option value="cursos">Cursos</option>
            <option value="parceria">Parceria</option>
            <option value="outro">Outro assunto</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={rotulo} htmlFor="campo-mensagem">
          Mensagem
        </label>
        <textarea className={`${campo} min-h-36 resize-y`} id="campo-mensagem" name="mensagem" required />
      </div>

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center border border-navy-800 bg-navy-800 px-7 py-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-paper-50 transition-colors hover:bg-navy-700"
        >
          Enviar mensagem
        </button>

        <p className="caption-text border-l-2 border-gold-500 pl-4">
          <strong className="font-semibold text-navy-900">Formulário demonstrativo.</strong> Esta é a
          primeira versão do site, sem servidor de envio: nenhuma informação digitada aqui é
          armazenada ou enviada. Para falar de verdade com a instituição, use o WhatsApp ou o e-mail
          informados na página de contato.
        </p>

        {enviado && (
          <p
            role="status"
            className="border border-gold-500/50 bg-gold-400/10 px-4 py-3 text-sm text-navy-900"
          >
            Obrigado! Como este formulário ainda não transmite dados, sua mensagem não foi enviada.
            Entre em contato pelo WhatsApp ou e-mail da instituição — os canais estão na página de
            contato.
          </p>
        )}
      </div>
    </form>
  )
}
