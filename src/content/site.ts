/**
 * CONTEÚDO INSTITUCIONAL — Alma de Fênix
 * ------------------------------------------------------------------
 * Arquivo único onde ficam TODOS os textos e dados do site.
 *
 * REGRA: nenhum dado abaixo foi inventado. Tudo que ainda não foi
 * fornecido pela instituição está identificado como "provisório",
 * "a confirmar" ou `null`, e aparece no site como placeholder.
 *
 * Para publicar o site definitivo, basta substituir os valores
 * marcados com TODO(sem inventar) por informações reais.
 */

export const organizacao = {
  nome: 'Associação Alma de Fênix',
  nomeCurto: 'Alma de Fênix',
  /**
   * TODO(instituição): frase institucional oficial, se existir.
   * Abaixo está um texto PROVISÓRIO, escrito apenas para compor o layout.
   */
  manifesto: 'Renovar vidas, acolher histórias, despertar potências.',
  /** Texto curto de apresentação — PROVISÓRIO. */
  apresentacao:
    'Uma associação que atua com projetos sociais, formação profissional, esporte e cultura, caminhando ao lado de mulheres, crianças, adolescentes e suas famílias.',
  /** TODO(instituição): texto oficial de "quem somos". PROVISÓRIO. */
  sobre:
    'A Alma de Fênix é uma associação que nasceu do compromisso com pessoas em situação de vulnerabilidade. Os detalhes da nossa história — quando e por que começamos, onde atuamos e o que já construímos com a comunidade — serão publicados aqui assim que a diretoria validar o texto oficial.',
} as const

/**
 * CONTATO
 * TODO(instituição): preencher com os canais reais.
 * Enquanto forem `null`, o site exibe placeholders e NÃO gera links falsos.
 */
export const contato = {
  whatsapp: null as string | null, // formato: 5511999999999 (com DDI/DDD)
  email: null as string | null,
  instagram: null as string | null, // URL completa ou @usuario
  endereco: null as string | null,
  horario: null as string | null,
  /** URL do Google Maps para incorporação. */
  mapa: null as string | null,
  /** TODO(instituição): dados reais para exibição. */
  cnpj: null as string | null,
} as const

/**
 * DOAÇÃO / PIX
 * NENHUMA chave ou dado bancário foi criado. Substitua quando houver.
 */
export const doacao = {
  pixChave: null as string | null,
  pixTipo: null as string | null, // ex.: "CNPJ", "telefone", "e-mail", "aleatória"
  pixBeneficiario: null as string | null,
  pixQrCode: null as string | null, // caminho para a imagem do QR Code
  dadosBancarios: null as string | null, // texto completo, quando fornecido
} as const

/** Categorias de atuação, conforme briefing da instituição. */
export const areas = [
  {
    id: 'projetos-sociais',
    titulo: 'Projetos sociais',
    descricao:
      'Iniciativas estruturadas que acompanham pessoas e famílias ao longo do tempo.',
  },
  {
    id: 'mulheres',
    titulo: 'Mulheres',
    descricao:
      'Acolhimento, formação e fortalecimento de mulheres em diferentes fases da vida.',
  },
  {
    id: 'criancas-adolescentes',
    titulo: 'Crianças e adolescentes',
    descricao:
      'Espaços de proteção, convivência, aprendizado e desenvolvimento para a infância e a juventude.',
  },
  {
    id: 'formacao-profissional',
    titulo: 'Formação profissional',
    descricao:
      'Cursos e oficinas que ampliam repertórios e abrem caminhos para o mercado de trabalho.',
  },
  {
    id: 'esporte',
    titulo: 'Esporte',
    descricao:
      'Atividades esportivas como ferramenta de disciplina, saúde e convivência.',
  },
  {
    id: 'cultura',
    titulo: 'Cultura',
    descricao:
      'Expressão artística e cultural como forma de pertencimento e transformação.',
  },
  {
    id: 'acoes-sociais',
    titulo: 'Ações sociais',
    descricao:
      'Ações pontuais e campanhas realizadas com a comunidade e com parceiros.',
  },
] as const

/**
 * PROJETOS
 * TODO(instituição): descrições, imagens e resultados reais de cada projeto.
 * O Projeto Estrela recebe destaque por ser apontado como projeto central.
 */
export const projetos = [
  {
    id: 'estrela',
    nome: 'Projeto Estrela',
    destaque: true,
    categoria: 'Projeto em destaque',
    /** PROVISÓRIO — aguardando a descrição oficial do projeto. */
    descricao:
      'O Projeto Estrela é um dos projetos centrais da Alma de Fênix. A descrição completa, os objetivos, o público atendido e os resultados serão publicados aqui assim que confirmados pela instituição.',
    imagem: null as string | null,
  },
  {
    id: 'mulheres',
    nome: 'Projetos com mulheres',
    destaque: false,
    categoria: 'Mulheres',
    descricao:
      'Frente de atuação voltada ao acolhimento, à formação e ao fortalecimento de mulheres.',
    imagem: null as string | null,
  },
  {
    id: 'criancas-adolescentes',
    nome: 'Projetos com crianças e adolescentes',
    destaque: false,
    categoria: 'Crianças e adolescentes',
    descricao:
      'Atividades de convivência, aprendizado e proteção para crianças e adolescentes.',
    imagem: null as string | null,
  },
  {
    id: 'acoes-sociais',
    nome: 'Ações sociais',
    destaque: false,
    categoria: 'Ações sociais',
    descricao:
      'Campanhas, mutirões e ações realizadas com a comunidade e com parceiros institucionais.',
    imagem: null as string | null,
  },
  {
    id: 'esporte-cultura',
    nome: 'Esporte e cultura',
    destaque: false,
    categoria: 'Esporte e cultura',
    descricao:
      'Oficinas e atividades esportivas e culturais como caminhos de convivência e expressão.',
    imagem: null as string | null,
  },
  {
    id: 'formacao',
    nome: 'Formação profissional',
    destaque: false,
    categoria: 'Formação profissional',
    descricao:
      'Cursos de formação que preparam participantes para novas oportunidades profissionais.',
    imagem: null as string | null,
  },
] as const

/**
 * CURSOS
 * NENHUM curso, turma, data ou carga horária foi inventado.
 * A lista abaixo é apenas a ESTRUTURA de demonstração, com campos
 * claramente pendentes. Substitua por cursos reais.
 */
export const cursos = [
  {
    id: 'curso-1',
    nome: 'Nome do curso a inserir',
    descricao:
      'Descrição do curso, conteúdo abordado e metodologia de ensino serão publicados aqui.',
    publicoAlvo: 'A confirmar',
    cargaHoraria: 'A confirmar',
    proximaTurma: 'A confirmar',
    horario: 'A confirmar',
    local: 'A confirmar',
    status: 'Estrutura pronta para o curso real',
    imagem: null as string | null,
  },
  {
    id: 'curso-2',
    nome: 'Nome do curso a inserir',
    descricao:
      'Descrição do curso, conteúdo abordado e metodologia de ensino serão publicados aqui.',
    publicoAlvo: 'A confirmar',
    cargaHoraria: 'A confirmar',
    proximaTurma: 'A confirmar',
    horario: 'A confirmar',
    local: 'A confirmar',
    status: 'Estrutura pronta para o curso real',
    imagem: null as string | null,
  },
] as const

/**
 * INDICADORES DE IMPACTO
 * NENHUM número foi inventado. Enquanto `valor` for null, o site
 * exibe um marcador discreto no lugar do número.
 */
export const indicadores = [
  { valor: null as string | null, rotulo: 'Pessoas atendidas' },
  { valor: null as string | null, rotulo: 'Cursos realizados' },
  { valor: null as string | null, rotulo: 'Ações sociais realizadas' },
  { valor: null as string | null, rotulo: 'Anos de atuação' },
] as const

/**
 * MISSÃO, VISÃO E VALORES — estrutura pronta, textos oficiais pendentes.
 */
export const pilares = [
  {
    titulo: 'Missão',
    texto: 'Texto oficial de missão a ser inserido pela instituição.',
    pendente: true,
  },
  {
    titulo: 'Visão',
    texto: 'Texto oficial de visão a ser inserido pela instituição.',
    pendente: true,
  },
  {
    titulo: 'Valores',
    texto: 'Lista oficial de valores a ser inserida pela instituição.',
    pendente: true,
  },
] as const

/**
 * EQUIPE / DIRETORIA
 * NENHUM nome ou cargo foi inventado. Slots prontos para receber.
 */
export const equipe = [
  { nome: null as string | null, cargo: null as string | null },
  { nome: null as string | null, cargo: null as string | null },
  { nome: null as string | null, cargo: null as string | null },
  { nome: null as string | null, cargo: null as string | null },
] as const

/**
 * HISTÓRIAS E DEPOIMENTOS
 * NENHUM depoimento foi inventado. Estrutura pronta para receber
 * foto, nome, história e resultado.
 */
export const historias = [
  { id: 'h1', nome: null as string | null, projeto: null as string | null },
  { id: 'h2', nome: null as string | null, projeto: null as string | null },
] as const

/**
 * DOCUMENTOS DE TRANSPARÊNCIA
 * NENHUM documento foi criado. Cada item já aponta o tipo de
 * arquivo esperado, com status pendente.
 */
export const documentos = [
  { titulo: 'Estatuto social', tipo: 'PDF', status: 'A inserir' },
  { titulo: 'Certificado CNPJ', tipo: 'PDF', status: 'A inserir' },
  { titulo: 'Prestação de contas', tipo: 'PDF', status: 'A inserir' },
  { titulo: 'Relatórios de atividades', tipo: 'PDF', status: 'A inserir' },
  { titulo: 'Utilização das doações', tipo: 'PDF', status: 'A inserir' },
  { titulo: 'Parcerias e convênios', tipo: 'PDF', status: 'A inserir' },
] as const

export const parceiros = [
  { nome: null as string | null },
  { nome: null as string | null },
  { nome: null as string | null },
  { nome: null as string | null },
] as const

/**
 * ÁREAS DE INTERESSE DO VOLUNTARIADO (conforme briefing).
 */
export const areasVoluntariado = [
  'Projetos sociais',
  'Apoio a mulheres',
  'Apoio a crianças e adolescentes',
  'Formação profissional e oficinas',
  'Esporte',
  'Cultura',
  'Ações sociais e campanhas',
  'Comunicação e divulgação',
  'Apoio administrativo e logística',
] as const

/** Imagens institucionais (fotografias reais, quando forem enviadas). */
export const galeria: { src: string | null; legenda: string; categoria: string }[] = [
  { src: null, legenda: 'Espaço para foto de ação social', categoria: 'Ações sociais' },
  { src: null, legenda: 'Espaço para foto de curso', categoria: 'Cursos' },
  { src: null, legenda: 'Espaço para foto de atividade esportiva', categoria: 'Esporte' },
  { src: null, legenda: 'Espaço para foto de oficina cultural', categoria: 'Cultura' },
  { src: null, legenda: 'Espaço para foto de evento', categoria: 'Eventos' },
  { src: null, legenda: 'Espaço para foto de projeto com crianças', categoria: 'Projetos' },
]

/** Navegação principal. */
export const navegacao = [
  { rotulo: 'Início', caminho: '/' },
  { rotulo: 'Quem Somos', caminho: '/quem-somos' },
  { rotulo: 'Projetos', caminho: '/projetos' },
  { rotulo: 'Cursos', caminho: '/cursos' },
  { rotulo: 'Ações', caminho: '/acoes' },
  { rotulo: 'Transparência', caminho: '/transparencia' },
  { rotulo: 'Contato', caminho: '/contato' },
] as const

/**
 * Link auxiliar: quando o WhatsApp real existir, os botões usam wa.me.
 * Enquanto for null, os CTAs direcionam para a página de contato.
 */
export function linkWhatsapp(mensagem?: string): string | null {
  if (!contato.whatsapp) return null
  const texto = mensagem ? `?text=${encodeURIComponent(mensagem)}` : ''
  return `https://wa.me/${contato.whatsapp}${texto}`
}

export function linkEmail(): string | null {
  return contato.email ? `mailto:${contato.email}` : null
}
