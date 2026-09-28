# Projeto 02 - Portal Fatec Zona Sul

## Descrição
Portal web completo (Frontend e Backend) para o site do curso, aplicando na prática os conceitos de Desenvolvimento Web abordados em aula.

## Tecnologias Utilizadas

### Backend
- **Node.js** - Ambiente de execução JavaScript
- **Módulo HTTP nativo** - Para criação do servidor web

### Frontend
- **HTML5** - Estrutura das páginas
- **Tailwind CSS** - Framework CSS utilitário
- **DaisyUI** - Biblioteca de componentes para Tailwind CSS (tema cupcake)

## Estrutura do Projeto

```
projeto-02/
├── app.js              # Entry point do servidor
├── config.js           # Configurações (porta 2000)
├── index.html          # Página inicial
├── src/
│   └── rotas.js        # Definição das rotas
├── lib/
│   └── enviar-arquivos.js  # Função para servir arquivos
├── pages/
│   ├── vestibular.html     # Página do vestibular
│   ├── cursos.html         # Listagem de cursos
│   ├── curso-ads.html      # Página do curso ADS
│   ├── curso-dsm.html      # Página do curso DSM
│   ├── curso-gestao.html   # Página do curso Gestão Empresarial
│   ├── curso-logistica.html # Página do curso Logística
│   ├── infraestrutura.html # Página de infraestrutura
│   ├── eventos.html        # Página de eventos
│   └── quem-somos.html     # Página quem somos
└── README.md
```

## Como Executar

1. Certifique-se de ter o Node.js instalado
2. Navegue até a pasta do projeto:
   ```bash
   cd projeto-02
   ```
3. Execute o servidor:
   ```bash
   node app.js
   ```
4. Acesse no navegador:
   ```
   http://localhost:2000
   ```

## Rotas Disponíveis

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial |
| `/vestibular` | Informações sobre o vestibular |
| `/cursos` | Listagem de cursos |
| `/cursos/ads` | Análise e Desenvolvimento de Sistemas |
| `/cursos/dsm` | Desenvolvimento de Software Multiplataforma |
| `/cursos/gestao-empresarial` | Gestão Empresarial |
| `/cursos/logistica` | Logística |
| `/infraestrutura` | Infraestrutura do campus |
| `/eventos` | Calendário de eventos |
| `/quem-somos` | Equipe do projeto |

## Requisitos

- Node.js (versão 14 ou superior)
- Navegador web moderno

## Equipe
- Diego
- Gabriel Lima
