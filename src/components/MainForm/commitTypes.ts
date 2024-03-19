interface commitTypes {
  build: string;
  static: string;
  ci: string;
  cd: string;
  docs: string;
  feat: string;
  fix: string;
  perf: string;
  refactor: string;
  improve: string;
  style: string;
  test: string;
  revert: string;
}

export const commitTypes: commitTypes = {
  build: "alterações que afetam o sistema de build ou dependências externas",
  static:
    "alterações no conteúdo de arquivos estáticos (dados .json, imagens, etc)",
  ci: "alterações em nossos arquivos e scripts de configuração de CI",
  cd: "alterações em nossos arquivos e scripts de configuração para CD",
  docs: "somente alterações na documentação",
  feat: "um novo recurso",
  fix: "uma correção de bug da aplicação",
  perf: "alteração de código que melhora o desempenho da aplicação e não altera a forma como o usuário utiliza a aplicação",
  refactor:
    "alteração de código, que não corrige um bug e nem altera a forma como o usuário utiliza a aplicação",
  improve:
    "alguma alteração de código que melhore o comportamento de um recurso",
  style:
    "alterações que não afetam o significado do código (espaço em branco, formatação, ponto e vírgula, etc)",
  test: "adicionando testes ausentes ou corrigindo testes existentes",
  revert: "reverter para um commit anterior",
};
