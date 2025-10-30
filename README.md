# Projeto TodaHelp

Bem-vindo ao projeto **TodaHelp**! 

Este é um site desenvolvido para a ONG **TodaHelp**, que tem como missão ajudar pessoas e animais em situação de vulnerabilidade, promovendo ações solidárias, voluntariado e doações.

---

## Estrutura do projeto
```
todahelp/
├── index.html
├── assets/
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ └── script.js
│ └── img/
│   ├── adultos.jpg
│   ├── adultos.webp
│   ├── agradece.png
│   ├── agradece.webp
│   ├── animais.jpg
│   ├── animais.webp
│   ├── criancas.jpg
│   ├── criancas.webp
│   ├── doacao.png
│   ├── doacao.webp
│   ├── logo.png
│   └── logo.webp
├── dist/ (gerado)
├── package.json
├── .gitattributes
├── .editorconfig
├── .github/
│ └── workflows/build.yml
└── README.md
```
---

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 (Design System + Responsividade)
- JavaScript (SPA + validação de formulários)
- GitFlow + commits semânticos
- Acessibilidade (WCAG 2.1 AA)
- Otimização (minificação + compressão automática)

---

## Funcionalidades

- Navegação entre páginas (SPA)
- Formulário de cadastro de voluntários
- Página de projetos com imagens ilustrativas
- Formulário de doação com valor numérico
- Layout semântico e organizado
- Responsividade
- Acessibilidade (WCAG 2.1 Nível AA)
- Feedback visual e mensagens de alerta 

---

## Funcionalidades Técnicas

- Manipulação do DOM
- Sistema de Templates JavaScript
- Estrutura SPA (Single Page Application)
- Validação de Formulários
- Sistema de Build Automatizado (NPM Scripts)
- Controle de Versão (Git/GitHub)
- Padrões de Acessibilidade e Boas Práticas

## Acessibilidade (WCAG 2.1 AA)
Implementações:
- Estrutura semântica (header, main, footer, article)
- Skip link para pular a navegação
- ARIA roles (`role="alert"`, `aria-live`)
- Foco visível em todos os elementos interativos
- Navegação 100% por teclado
- Contraste mínimo 4.5:1
- Modo alto contraste (`.high-contrast`)
- Modo escuro (`prefers-color-scheme: dark`)
- Suporte a leitores de tela (uso de `tabindex` e foco dinâmico)

---

## Otimização e Build
```bash
npm install
npm run build
```

Gera a pasta /dist com:
HTML, CSS e JS minificados
Imagens otimizadas (imagemin)

## Fluxo Git (GitFlow)

Branches principais:

main — produção

develop — integração

feature/*, hotfix/*, release/*

Exemplo:

git checkout -b feature/acessibilidade
git commit -m "feat(acessibilidade): adicionar skip-link e modo escuro"
git push -u origin feature/acessibilidade


Versionamento semântico:

git tag -a v1.1.0 -m "Acessibilidade e otimização de build"
git push origin v1.1.0

----

## CI/CD com GitHub Actions

Build e otimização automáticos a cada push em develop ou main.

## Como executar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/WenderMilitao/todahelp.git
```

