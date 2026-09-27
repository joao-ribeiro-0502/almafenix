import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { CtaFinal } from '../components/CtaFinal'
import { Gallery } from '../components/TransparenciaGallery'
import { EspacoFoto } from '../components/Pendencias'
import { galeria } from '../content/site'

/**
 * Página de ações e galeria: fotos, vídeos, eventos, campanhas.
 * Todos os espaços são placeholders reais — nenhuma imagem externa
 * é apresentada como fotografia da instituição.
 */
export function Acoes() {
  const categorias = [
    {
      titulo: 'Ações sociais',
      texto: 'Campanhas, mutirões e ações realizadas com a comunidade.',
    },
    {
      titulo: 'Eventos',
      texto: 'Encontros, celebrações e atividades abertas ao público.',
    },
    {
      titulo: 'Cursos e oficinas',
      texto: 'Momentos de formação, aprendizado e troca de experiências.',
    },
    {
      titulo: 'Projetos',
      texto: 'Registros dos projetos com mulheres, crianças e adolescentes.',
    },
    {
      titulo: 'Esporte',
      texto: 'Atividades esportivas e encontros de convivência.',
    },
    {
      titulo: 'Cultura',
      texto: 'Oficinas artísticas, apresentações e expressão cultural.',
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="Ações"
        titulo="O trabalho da Alma de Fênix, registro por registro"
        intro={
          <p>
            Fotos, eventos, cursos, campanhas e projetos. Esta galeria recebe as imagens oficiais da
            instituição.
          </p>
        }
        descricaoSeo="Galeria de ações, eventos, cursos, campanhas e projetos da Associação Alma de Fênix."
      />

      {/* Categorias */}
      <section className="bg-paper-50" aria-labelledby="categorias-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <SectionTitle
              id="categorias-titulo"
              eyebrow="O que você encontra aqui"
              titulo="Seis frentes de registro"
            />
          </Reveal>

          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {categorias.map((cat, i) => (
              <Reveal as="li" key={cat.titulo} delay={i * 50}>
                <div className="border-t border-navy-800/20 pt-5">
                  <h3 className="text-xl text-navy-900">{cat.titulo}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{cat.texto}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Galeria */}
      <section className="border-t border-navy-800/12 bg-paper-100" aria-labelledby="galeria-titulo">
        <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionTitle
              id="galeria-titulo"
              eyebrow="Galeria"
              titulo="Fotografias das nossas ações"
              intro="Os blocos abaixo aguardam as fotografias reais. Nenhuma imagem ilustrativa é exibida no lugar de registros da instituição."
            />
          </Reveal>

          <Reveal delay={80} className="mt-12">
            <Gallery itens={galeria} />
          </Reveal>
        </div>
      </section>

      {/* Vídeos */}
      <section className="bg-navy-900" aria-labelledby="videos-titulo">
        <div className="mx-auto grid max-w-[80rem] gap-10 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5">
            <SectionTitle
              id="videos-titulo"
              tono="claro"
              eyebrow="Vídeos"
              titulo="Movimento em imagem"
              intro="Espaço reservado para vídeos dos projetos, eventos e campanhas — publicados quando autorizados pela instituição."
            />
          </Reveal>
          <Reveal delay={100} className="md:col-span-7">
            <EspacoFoto
              legenda="Espaço para vídeo institucional"
              proporcao="aspect-video"
              tono="escuro"
            />
          </Reveal>
        </div>
      </section>

      <CtaFinal titulo="Quer ver de perto?" texto="Participe das próximas ações da Alma de Fênix." />
    </>
  )
}
