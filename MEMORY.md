# Memória do Projeto: Imersão Nutrição Avançada (Vendas Astro)

**Última Atualização:** 09/07/2026

## Criação da Página V4 e Remoção da Integração com Supabase — 09/07/2026
- **Ajustes Visuais de Contraste na V4:** Envolvido todo o conteúdo da página `imersao-5ed-v4.astro` dentro da classe `.v4-wrapper`, forçando a aplicação do fundo dark-green em todas as seções e corrigindo a ilegibilidade das fontes claras em fundos brancos residuais.
- **Seção de Preços Simétrica:** Substituída a exibição de oferta única pelo grid simétrico com os 2 tipos de ingressos lado a lado (Básico por R$ 19,90 vs VIP por R$ 147,00 ou 12x de R$ 15,20), no mesmo estilo premium das demais páginas.
- **Remoção do Supabase (Todas as Versões):** Removidas as consultas de API dinâmicas ao Supabase nos componentes `ProgressBar.astro` e `PriceCard.astro`, além da página `/v5` (`src/pages/v5.astro`).
- **Escassez Temporal e Countdown Predefinido:** Implementada lógica local de contagem regressiva e escassez baseada em 3 datas de lote predefinidas (Lotes 1, 2 e 3 até 01/08/2026). A barra de preenchimento e a quantidade de ingressos decrescem dinamicamente em tempo real (de 65% a 99%) à medida que o tempo limite do lote se aproxima, gerando o gatilho sem dependências de rede.
- **Estrutura Modular e Limite de Linhas:** Toda a estilização detalhada da V4 foi isolada em `src/styles/imersao-v4.css` para manter o código da página `.astro` leve e com fácil manutenção, ficando com 320 linhas.
- **Geração de Assets Visuais:** Criadas e salvas 4 imagens conceituais premium para os pilares na pasta `/public/images/pilares/` (`pilar1.png` a `pilar4.png`) com a ferramenta `generate_image`, eliminando placeholders.
- **Verificação de Builds:** Build compilado com sucesso, gerando estaticamente a nova página `/imersao-5ed-v4/index.html`.

## Otimizações Mobile, Lightbox de Vídeo e Simplificação do Cronograma — 09/07/2026
- **Vídeo Lightbox:** Adicionado modal overlay na própria página nas versões V1, V2 e V3. Ao clicar em "🎥 VER CHAMADA" da Jéssica, abre-se o vídeo Shorts do YouTube (`https://www.youtube.com/embed/vPnW2rWVQHY?autoplay=1`) em proporção 9:16 vertical, prevenindo que o lead saia da página de conversão.
- **Correção da Hero V2:** O botão da Hero na página V2 (`imersao-5ed-v2.astro`) foi alterado de um elemento `<button>` estático para uma âncora `<a>` redirecionando para a seção de preços `#preco`.
- **Desacoplamento do Cronograma/Módulos:** Removido o detalhamento técnico associado a minutagens de horários específicos. A linha do tempo agora exibe apenas 4 slots logísticos (09h30 — Início, 12h00 — Almoço, 13h30 — Retorno, 17h30 — Encerramento).
- **Seção "O Que Você Vai Aprender":** Criada seção exclusiva com os módulos divididos em duas colunas (Ney Felipe à esquerda, Jéssica Wszolek à direita), listando os temas técnicos estáticos para V1, V2 e V3.
- **Otimização de Notícias no Mobile:** Ajustados os estilos da seção de manchetes no celular para evitar que textos cortem ou toquem as bordas da tela. Implementadas margens negativas horizontais, espaçamento interno proporcional (`padding: 20px 16px`), `scroll-padding-left` de 20px e `scroll-snap-align: start` para uma navegação nativa premium de rolagem horizontal por toque. Reduzido o tamanho da fonte do título das manchetes para `15px` para evitar quebras abruptas de linhas no mobile.

## Integração de Vídeos de Convite — 14/05/2026
- Criado o componente `VideoRecado.astro` para exibir os convites (YouTube Shorts) das Profas. Cássia e Jéssica em formato vertical (9:16).
- Vídeos integrados nas páginas: `imersao`, `imersao-blue`, `v1`, `v2`, `v3`, `v4`, `v5` (inline) e `v6`.
- Estilização focada em mobile-first, com cards responsivos e sombra/glassmorphism sutil.

## Atualização de Conteúdo (Prof. Cássia) — 13/05/2026
- Adicionados os bullet points detalhados do conteúdo da Prof. Cássia Helena em todas as páginas de venda (`imersao`, `v1`, `v2`, `v3`, `v4`, `v5`, `v6`).
- **Bullets:** Redução de abandono, ajuste de expectativas, autonomia pós medicação, prevenção de recaídas, planos sustentáveis e adesão sem força de vontade.

## Alteração de Preço — 13/05/2026
- Ajustado o preço de **R$24,90** para **R$29,90** em todas as variações de páginas de venda e componentes.


## Variação de Urgência (Última Semana) — 09/05/2026
- Criada a rota `/v6` (`src/pages/v6.astro`) focada na última semana de vendas.
- **Identidade Visual:** Botões de conversão e elementos de escassez alterados para **VERMELHO** para maximizar o gatilho de urgência.
- **Componentes:** Atualizados `Hero.astro`, `CTAButton.astro`, `PriceCard.astro` e `ProgressBar.astro` para suportar o novo `variant="red"`.
- **Heavy Urgency (v6):** Implementado contador regressivo gigante (D/H/M/S), barra de topo preta/vermelha, notificações de prova social (toast) e botão flutuante no mobile.
- As outras páginas (index, v1-v5) permanecem com o padrão verde original.

## Alteração de Preço — 07/05/2026
- Ajustado o preço de **R$19,90** para **R$24,90** em todas as variações de páginas de venda e componentes (`PriceCard`, `ProgressBar`).


## Variações de Headline para Teste A/B — 03/05/2026
- Criadas 4 novas rotas para split test. Página original `/imersao` **intocada**.
- `/v1` — Foco em **Canetas Emagrecedoras / GLP-1 / Mounjaro** (`src/pages/v1.astro`)
- `/v2` — Foco em **Curso ao vivo de Emagrecimento** (`src/pages/v2.astro`)
- `/v3` — Foco em **Além das Calorias / Novo Método** (`src/pages/v3.astro`)
- `/v4` — **Enxuta**: estrutura Promessa → Resumo rápido (horário, formato, conteúdo) → Preço (`src/pages/v4.astro`)
- `/quiz` — Landing page standalone focada APENAS no formulário de gamificação diagnóstica. Ideal para tráfego frio. (`src/pages/quiz.astro`)
- `/v5` — **Funil Interativo**: Une o layout premium com o mecanismo diagnóstico do Quiz e elevação de consciência de Eugene Schwartz. (`src/pages/v5.astro`)
- Todas usam componentes em comum ou padronizados.
- Build OK: Várias páginas estáticas geradas com sucesso.

- **Escassez:** A barra de escassez exibe a porcentagem real de vendas vinda do Supabase (`data.percentual`). 
  - **Dinamismo de Cores:** Implementada troca de cor baseada no preenchimento: Verde (<70%), Laranja (70-90%) e Vermelho (>90%) para aumentar o gatilho de urgência visual.
  - **Sem Trava de 100%:** O texto pode exibir valores acima de 100% (ex: 110%), enquanto a largura física da barra fica limitada a 100% (29/04).
  - O número absoluto de ingressos restantes continua oculto como "virada de lote".
  - *💡 Ideia Salva para o Futuro (Malandragem Per-User):* Criar urgência via `localStorage`. A barra começa aleatoriamente entre 68-74% e a cada refresh soma de 1.5% a 4% (limite de 99%). Excelente para lançamentos frios onde não se quer depender do banco de dados real.

## Melhorias de CRO (Conversion Rate Optimization) - 25/04/2026
- **Oferta VIP:** Bônus foram "abertos" (removido details/summary). Valores em R$ de cada e-book agora estão expostos para aumentar percepção de valor imediata.
- **Seção Chega (Pendente):** Recomendada a troca da imagem por uma foto de estúdio do Ney com expressão de autoridade/seriedade para manter o tom premium.
- **Prompt Recomendado para Imagem "Chega":** "Professional studio portrait, Ney Felipe, serious and authoritative expression, high-end lighting, Sage Green and Off-White palette, ultra-minimalist background, 8k photorealistic."

## Identidade do Projeto
- **Produto:** Imersão em Atualização no Tratamento do Sobrepeso e Obesidade (4ª Edição)
- **Tipo:** Página de Vendas Principal (Checkout / Conversão)
- **Stack:** Astro, HTML/CSS nativo, JS puro (sem frameworks pesados).
- **Repositório Git Original:** `imersao-emagrecimento-nutricao-avancada-pag-vendas` (Já no ar).

## Regras de Negócio e Contexto Atual
- **Data do Evento:** 16/05/2026 (das 9h às 18h).
- **Status das Vendas:** ABERTAS.
- **TopBar:** Configurada para mostrar o evento como **LOTE 01** (atualizado de LOTE ZERO em 29/04/2026). Se a data do evento (16/05/2026) chegar, o script do `Layout.astro` mudará automaticamente para "VENDAS ABERTAS" (ou encerradas, dependendo do direcionamento futuro).
- O texto do countdown foi ajustado para **"O evento começa em:"** (antes estava "Vendas iniciam em", o que era um erro pois as vendas já estão abertas).
- **UI Mobile:** O cabeçalho (Header) foi ocultado em dispositivos móveis (`max-width: 768px`) para reduzir a poluição visual, mantendo apenas a `top-bar` com o contador.
- **Cronograma Premium:** Implementado o novo componente `Schedule.astro` com design inspirado em Linear/Stripe, incluindo Timeline horizontal, glassmorphism sutil e ícones minimalistas.
- **Hero Premium (Rebuilt):** Reconstrução total mobile-first seguindo o prompt técnico `astro-hero-prompt-v1`. Layout ultra-limpo com background off-white, navbar simplificada, PriceCard sem bordas duplicadas e BenefitsGrid 2x2. Componentizado em `Hero`, `CTAButton`, `PriceCard` e `BenefitsGrid`.

## Estrutura Chave
- `src/layouts/Layout.astro`: Onde fica a TopBar, o script do cronômetro global e a chamada do Chatbase.
- `src/components/`: Componentes principais da landing page (Hero, FAQ, Cronograma, etc).

## Histórico Recente de Decisões
- O workspace foi reestruturado e este projeto foi renomeado de `imersao-consolidated-repo` para `imersao/vendas-astro` para melhor clareza.

## Atualizações de UI e Mobile Optimization - 25/04/2026
- **News Carousel:** Implementado carrossel interativo usando Swiper.js na seção de notícias. Isso resolve o problema de leitura das notícias, permitindo que o usuário pause e navegue entre os slides.
- **Hero Footer (Segunda Dobra):** Removido o item "CERTIFICADO" completamente (Desktop e Mobile) para simplificar a oferta. No mobile, os 3 itens restantes ficam lado a lado para melhor aproveitamento de tela.
- **Correção TopBar:** Removida a duplicação do texto "O evento começa em:" no banner de urgência.
- **PriceCard & ProgressBar Fix:** Ajustado o layout de ambos os componentes de escassez. Na seção de preços, a barra agora é ultra-minimalista, posicionada abaixo do botão de compra, sem exibir o preço interno ou nome do lote, focando apenas no progresso e ingressos restantes.
- **Schedule (Cronograma):** Implementado grid 2x2 no mobile para reduzir a altura da seção e evitar a necessidade de "2 scrolls" para passar pela informação.

## Alteração de Copy - 05/05/2026
- Alterada a headline da `Hero.astro` de "Um dia inteiro de Imersão em atualização no tratamento do sobrepeso e obesidade" para "Um dia inteiro de atualização em emagrecimento por R$19.90" conforme pedido.
- Ajustado layout da headline para ocupar apenas 2 linhas no desktop (aumento da coluna, redução leve do font-size e remoção de `<br/>`).

## Ajustes no Funil Interativo (v5) e Hero — 05/05/2026
- **Hero.astro (página principal):** Headline alterada para "Aprenda um Novo Método de Emagrecimento que vai além das calorias." + sub "Como dominar o manejo de canetas emagrecedoras, compostos bioativos e a prática clínica de forma atualizada."
- **Hero v5:** Mesmo copy acima aplicado no slide 1 do funil interativo.
- **Navegação:** Botão "Voltar" em todas as etapas (slides 2-7) com estilo mais visível (fundo cinza, border-radius, hover animado).
- **Oferta VIP correta (v5 + todas as páginas):** 
  - 🚀 Tudo do básico + gravação por 1 ano + certificado 8h
  - 🎁 E-book Tópicos Avançados (R$99)
  - 🎁 E-book "Me Formei, e agora?" (R$59)
  - 🎁 E-book Desaprendendo a Dieta (R$39)
  - 🎓 Ressaca do Evento (encontro extra Zoom)
  - 💰 Cashback integral na Formação ou Pós
- **Renomeação:** "Ingresso Normal" → "Ingresso Básico" no v5.
- **Selo:** Badge "50% DE DESCONTO" no card VIP do v5.
- **Push:** Commit `5166636` em 05/05/2026 — build OK, push para `main`.

## Nova Página: Imersão 5ª Edição (FNAT9) — 08/07/2026
- **Rota:** `/imersao-5ed`
- **Arquivo:** `src/pages/imersao-5ed.astro`
- **Campanha:** FNAT9 (Formação Nutrição Avançada Turma 9)
- **Data do evento:** 01/08/2026 (9h às 18h · Online via Zoom)
- **Preço:** R$ 19,90 (Lote Zero)
- **Palestrantes:** Ney Felipe + Jéssica Wszolek
- **Formulário:** Usa `FormModal.astro` existente (links GHL: `Z1AkP8zQTM` Normal, `XuSUwksfyVTSPoPKdMe8` VIP)
- **CRO aplicado (cro-landing-pages-evidencias.md):**
  - Message match: headline espelha "imersão em emagrecimento FNAT9"
  - Preço visível no Hero (antes do clique)
  - Mecanismo explicado ("por que funciona") — não só benefícios
  - Depoimentos antes do CTA de compra (prova perto da ansiedade)
  - Garantia de 7 dias no ponto de decisão (dentro do card de oferta)
  - FAQ focado em objeções reais (adesão, reembolso, nível, pagamento)
  - Única ação na página (abrir formulário modal) — sem fricção concorrente
- **Build:** OK · 12 páginas geradas

## Variação de Teste: Imersão 5ª Edição V2 (A/B Test) — 08/07/2026
- **Rota:** `/imersao-5ed-v2`
- **Arquivo:** `src/pages/imersao-5ed-v2.astro`
- **Design:** Inspirado na referência com fundo ultra-escuro (dark green/black), sem obstruções na cara do Ney.
- **Hero V2:**
  - Headline limpa e direta em Sans-serif branco.
  - Price Card destacado no Hero: Fundo escuro translúcido com borda verde brilhante, badge de "Lote zero", preço antigo riscado em vermelho e preço atual gigante.
  - Botão de CTA retangular em gradiente verde limão brilhante com indicação de clique/chevron.
  - **Correções (09/07/2026):** Centralizado o container do Hero para não grudar no canto esquerdo da tela em monitores largos, removido a faixa de urgência que flutuava em cima do rosto do Ney, removido todos os badges de seções estilo IA ("O Problema", etc.) e excluído o depoimento Screenshot_2.png.
  - **Masonry Grid (09/07/2026):** Substituído o CSS da grade de depoimentos por colunas do tipo Masonry flexíveis (alturas nativas sem corte), permitindo leitura perfeita e natural idêntica à referência do Vini.
  - **Atualização de Conteúdo (09/07/2026):** Atualizado todo o conteúdo programático do Ney (8 tópicos) e Jéssica (Tema + 5 tópicos de GLP-1), além da inclusão do botão discreto "VER CHAMADA" no card da Profa. Jéssica.
  - **Sanfona de Benefícios & Manchetes (09/07/2026):** Implementado menu sanfonado (details/summary) na lista de vantagens do Ingresso VIP (com explicações dos e-books e bônus) e a seção "Manchetes de Jornal" responsiva (slider horizontal no mobile) com realce nos dados de GLP-1/obesidade.
- **Preços (Básico vs VIP):** Restaurados ambos os ingressos lado a lado no final da página com a ProgressBar de urgência integrada.
- **Build:** OK · 13 páginas geradas no total.

## Variação de Teste: Imersão 5ª Edição V3 (A/B Test - Dark & Red) — 08/07/2026
- **Rota:** `/imersao-5ed-v3`
- **Arquivo:** `src/pages/imersao-5ed-v3.astro`
- **Tema:** Dark & Red (fundo preto com detalhes e botões em vermelho vivo).
- **Subheadline Especial:** *"Um dia inteiro destravando o raciocínio clínico que você precisa para atender com segurança e entregar resultados duradouros para seus pacientes."*
- **Efeitos de Animação e Interação:**
  - **Sticky Bottom Bar:** Barra fixada ao rodapé que desliza de forma suave (`translateY` via CSS + class toggle em JS) quando o scroll do usuário passa de 450px. Mostra a pílula de compra com preço promocional, porcentagem de escassez e barra de progresso.
  - **Linha do Tempo Fisiológica Dinâmica:** Conforme o scroll desce na seção de Timeline, a linha vertical esquerda é "preenchida" de vermelho sutilmente e os pontos correspondentes são ativados.
  - **Provas com Lightbox Modal:** Grid com os depoimentos reais com efeito hover de ampliação e zoom completo e nítido ao clicar.
  - **Correções (09/07/2026):** Centralizado o container do Hero, removido os badges de seções estilo IA ("Programação", etc.) e excluído o depoimento Screenshot_2.png.
  - **Masonry Grid & Copy (09/07/2026):** Substituído o CSS da grade de depoimentos por colunas do tipo Masonry (alturas nativas sem corte) e corrigido a legenda de subtexto para indicar que são alunos participantes da imersão (e não "parceiros de projetos").
  - **Atualização de Conteúdo (09/07/2026):** Mapeado todo o conteúdo programático atualizado na linha do tempo e na grade de tópicos detalhados (13 cards divididos entre Ney e Jéssica), com o botão de vídeo convite integrado de forma compacta.
  - **Sanfona de Benefícios & Manchetes (09/07/2026):** Implementado menu sanfonado (details/summary) na lista de vantagens do Ingresso VIP (com explicações dos e-books e bônus) e a seção "Manchetes de Jornal" responsiva (slider horizontal no mobile) com realce nos dados de GLP-1/obesidade integrado no bloco de pergunta de mercado.
- **Build:** OK · 14 páginas geradas no total.

## Página de Check-in Interativa — 12/05/2026
- **Check-in Virtual:** Criada a rota `/checkin` (`src/pages/checkin.astro`) para gerar um ingresso personalizado estilo neon para compartilhamento.
- **Funcionalidades:** Upload/Captura de foto de perfil, inserção de nome com limite de caracteres, e geração em client-side utilizando HTML5 Canvas (não requer servidor de imagem).
- **Identidade Visual:** Fundo escuro (Dark Green), detalhes e textos em verde neon (`#00ff41`), com efeito de brilho e recortes característicos de ingressos físicos. Permite download nativo via blob/data URI.
