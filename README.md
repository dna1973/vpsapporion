# Dashboard de Ferramentas Web - EstudioAI

Um dashboard moderno e responsivo que exibe mais de 70 aplicações web como cards interativos, com suporte a temas claro e escuro para as ferramentas VPS do estdudioai.site.

## 🚀 Características

- **Interface Moderna**: Design limpo e intuitivo com React 18 e TypeScript
- **Temas**: Suporte completo a modo claro e escuro
- **Responsivo**: Funciona perfeitamente em desktop e mobile
- **70+ Ferramentas**: Cards organizados por categorias
- **Busca Avançada**: Filtros por categoria e busca por texto
- **Performance**: Carregamento rápido com Vite

## 🛠️ Tecnologias

### Frontend
- React 18 com TypeScript
- Tailwind CSS para estilização
- Radix UI + shadcn/ui para componentes
- Wouter para roteamento
- TanStack Query para gerenciamento de estado

### Backend
- Node.js com Express
- PostgreSQL com Drizzle ORM
- Neon Database (serverless)
- TypeScript em todo o projeto

## 📦 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_SEU_REPOSITORIO]
cd [NOME_DO_PROJETO]
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
# Edite o .env com suas configurações
```

4. Execute o projeto:
```bash
npm run dev
```

O aplicativo estará rodando em `http://localhost:5000`

## 🚀 Deploy

### Replit
Este projeto está configurado para deploy no Replit:
- Faça push do código para o repositório
- Importe no Replit
- As configurações estão em `.replit`

### Produção
```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── hooks/         # Hooks customizados
│   │   └── lib/           # Utilitários
├── server/                # Backend Express
│   ├── index.ts           # Entrada principal
│   ├── routes.ts          # Rotas da API
│   └── storage.ts         # Camada de dados
├── shared/                # Código compartilhado
│   └── schema.ts          # Esquemas do banco
└── README.md
```

## 🎨 Categorias de Ferramentas

- **Automação**: Ferramentas de automação e workflows
- **Dados**: Análise e processamento de dados
- **Monitoramento**: Sistemas de monitoramento e logs
- **IA**: Ferramentas de inteligência artificial
- **Produtividade**: Apps para produtividade
- **Comunicação**: Ferramentas de comunicação

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- Website: [estdudioai.site](https://estdudioai.site)
- GitHub: [SEU_USUARIO](https://github.com/SEU_USUARIO)

---

Desenvolvido com ❤️ para organizar suas ferramentas web de forma eficiente.