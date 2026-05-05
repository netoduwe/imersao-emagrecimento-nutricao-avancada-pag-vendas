# Memória do Projeto: Imersão Nutrição Avançada (Vendas Astro)

**Última Atualização:** 03/05/2026

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
