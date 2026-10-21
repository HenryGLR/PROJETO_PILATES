# Studio Essenza Pilates

Landing page demonstrativa para o portfólio da **Nexo Web**, desenvolvida em React, Vite, JavaScript e CSS puro, com ícones Lucide. Sem backend, banco de dados, formulários simulados ou ferramentas de rastreamento.

## Executar

Use Node.js 22.12+ (ou 20.19+) e npm.

```sh
npm install
npm run dev
```

Abra a URL exibida pelo Vite, normalmente **http://127.0.0.1:5173/**. Se a porta estiver ocupada, o Vite informa a próxima disponível.

```sh
npm run lint     # revisão estática
npm run build    # arquivos de produção em dist/
npm run preview  # conferir o build localmente
```

O projeto não foi publicado e não foi enviado ao GitHub.

## Verificação realizada

- `npm run lint` e `npm run build` concluídos sem erros.
- Chrome: larguras de 320, 375, 390, 500, 768, 1024 e 1440 px, sem transbordamento horizontal.
- Menu mobile, fechamento por Escape e seleção de seção, FAQ por teclado e preferência de movimento reduzido verificados.
- Nenhuma imagem quebrada, âncora inexistente ou exceção JavaScript encontrada.
- Verificação automática com axe-core sem violações nas regras WCAG A/AA analisadas em desktop e celular. Essa análise não substitui uma avaliação humana completa de acessibilidade.
- Links de WhatsApp conferidos quanto ao número e à mensagem; nenhuma mensagem foi enviada.

## Onde editar

| Informação                                                              | Arquivo                                                 |
| ----------------------------------------------------------------------- | ------------------------------------------------------- |
| WhatsApp, telefone, mensagem pronta, endereço, e-mail e horários        | `src/data/site.js` → `studio`                           |
| Instagram                                                               | `src/data/site.js` → `studio.instagram`                 |
| Nomes, especialidades, descrições e retratos das profissionais          | `src/data/site.js` → `professionals`                    |
| Imagens do hero, espaço e aula, com textos alternativos                 | `src/data/site.js` → `images`                           |
| Modalidades, depoimentos e FAQ                                          | `src/data/site.js` → `services`, `testimonials`, `faqs` |
| Textos das demais seções                                                | Componente correspondente em `src/components/`          |
| Paleta, tipografia, espaçamentos, responsividade e estados de interação | `src/styles.css`                                        |
| Título, descrição, Open Graph e fontes                                  | `index.html`                                            |
| Favicon                                                                 | `public/favicon.svg`                                    |

O número é demonstrativo: `5511999999999`. Substitua por um número autorizado, com código do país e DDD, apenas dígitos. Todos os botões recebem a mesma URL centralizada, com a mensagem já codificada. Os links abrem o WhatsApp; nenhum agendamento é confirmado pelo site.

O Instagram permanece sem link externo até existir um perfil oficial. Preencha a URL completa em `studio.instagram` para ativar o ícone clicável do rodapé. O mapa é uma composição ilustrativa em CSS e não aponta para uma empresa real.

Antes de usar para um negócio real, substitua os dados fictícios, confirme horários e informações de estacionamento, obtenha autorização para fotografias e depoimentos e valide a identificação profissional.

## Estrutura criada

```text
public/
  favicon.svg
  images/                    # imagens locais otimizadas
src/
  components/
    Header.jsx               # menu responsivo, Escape e controle de foco
    Hero.jsx
    Benefits.jsx
    About.jsx
    Services.jsx
    Conversion.jsx
    Professionals.jsx
    Testimonials.jsx
    HowItWorks.jsx
    FAQ.jsx                  # acordeão com aria-expanded e aria-controls
    Contact.jsx              # contatos e mapa ilustrativo
    Footer.jsx
    WhatsAppButton.jsx
    Shared.jsx               # marca, botões, títulos e ícone do WhatsApp
  data/site.js               # conteúdo e configurações centralizados
  App.jsx
  main.jsx
  styles.css
index.html
vite.config.js
eslint.config.js
package.json
package-lock.json
.gitignore
```

As imagens abaixo da primeira tela usam carregamento tardio; a imagem principal tem preload e prioridade alta. O menu mobile aceita Escape, contém o foco enquanto aberto e fecha ao selecionar uma seção. Há link para pular ao conteúdo, foco visível, HTML semântico e respeito a `prefers-reduced-motion`. Os depoimentos usam grade estática.

## Imagens e créditos

As fotografias foram baixadas e estão no projeto: a página não depende de URLs externas para carregá-las. Foram convertidas para WebP, mantendo um JPEG para compartilhamento Open Graph.

- Hero: [Ahmet Kurt / Pexels — foto 25596679](https://www.pexels.com/photo/fit-woman-exercising-on-pilates-reformer-25596679/).
- Espaço: [Ahmet Kurt / Pexels — foto 25596895](https://www.pexels.com/photo/pilates-studio-with-orange-and-black-equipment-25596895/).
- Aula: [Ahmet Kurt / Pexels — foto 33360221](https://www.pexels.com/photo/woman-practicing-reformer-pilates-in-modern-studio-33360221/).
- [Licença Pexels](https://www.pexels.com/license/). As fotografias representam ambientes e práticas ilustrativas, sem alegação de vínculo ou endosso ao estúdio fictício.
- `public/images/marina.webp` e `public/images/camila.webp`: retratos fictícios criados com a ferramenta integrada de geração de imagens. Não representam as profissionais de um negócio real.

Para substituir uma imagem, salve o novo arquivo em `public/images/`, atualize o caminho e o texto alternativo em `src/data/site.js`. Preserve as proporções ou ajuste o componente correspondente. Se trocar o hero, atualize também o preload e a imagem Open Graph em `index.html`.

Os prompts dos retratos estão em [ASSETS.md](ASSETS.md).

As fontes Cormorant Garamond e DM Sans são carregadas pelo Google Fonts; há fontes de sistema como fallback. Para produção sem serviços externos, hospede os arquivos de fonte localmente e adapte `index.html` e `src/styles.css`.

## Preparação para hospedagem futura

O build estático está em `dist/`. Não é necessário servidor de aplicação. Quando houver um domínio aprovado, configure a URL absoluta de `og:image`, adicione `og:url` e uma URL canônica. Os valores relativos atuais permitem desenvolvimento sem inventar um endereço público. Não há publicação automática configurada.
