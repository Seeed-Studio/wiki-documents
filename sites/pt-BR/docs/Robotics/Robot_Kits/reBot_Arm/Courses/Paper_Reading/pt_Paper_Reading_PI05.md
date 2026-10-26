---
description: "Uma análise detalhada do treinamento conjunto do π0.5 em múltiplas fontes de dados, geração hierárquica de ações, generalização para casas desconhecidas e diferenças em relação ao π0."
title: "π₀.₅ — Generalização em Mundo Aberto"
hide_title: true
keywords:
  - Análise Detalhada de Artigo
  - pi05
  - Aprendizado de Robôs
  - reBot
  - B601-DM
  - B601-RS
  - Braço Robótico
  - IA Física
  - Curso
  - Tutorial
  - SO101
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Braço
  - Robótica
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_pi05
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/robotics/paper_reading_pi05/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-pi05-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · ANÁLISE DETALHADA DE ARTIGO</span>
  <h1 id="paper-reading-pi05-title">π₀.₅ — Generalização em Mundo Aberto</h1>
  <p className="paper-reading-lead">π0.5: um Modelo Visão-Linguagem-Ação com Generalização em Mundo Aberto</p>
  <ul className="paper-reading-badges" aria-label="Neste guia">
    <li>Generalização em mundo aberto</li>
    <li>Dados heterogêneos</li>
    <li>Controle hierárquico</li>
    <li>Treinamento conjunto</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2504.16054" target="_blank" rel="noopener noreferrer" aria-label="Ler o artigo do π0.5 no arXiv">
    <span className="paper-reading-source-tag">arXiv</span>
    <span>Ler o artigo</span>
    <span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

## Pré-requisitos

### Como Robôs Aprendem a Partir de Demonstrações

**Explicação:** Aprendizado por imitação usa operações humanas gravadas para aprender como se mover em uma cena específica sob uma instrução.

Um VLA recebe imagens, texto de tarefa e estado do robô e produz ações de controle. Para “coloque o prato na pia”, as imagens localizam o prato, o estado descreve o braço, a instrução define o objetivo e as ações controlam a preensão e a colocação.

π0.5 também prediz uma subtarefa curta, como “pegar o prato”, que então condiciona a geração de ações.

### De Ações Diretas à Seleção de Subtarefas

![π0.5 Análise detalhada: 1.2 De Ações Diretas à Seleção de Subtarefas (imagem 08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-08-en.png)

Mapear “limpar a cozinha” diretamente para movimentos de juntas combina decidir o que fazer com decidir como se mover. Tarefas mais longas tornam as transições mais difíceis.

π0.5 separa essas decisões dentro do mesmo modelo: selecionar a subtarefa atual e depois gerar ações contínuas. Por exemplo:

```text
Clean the kitchen → Pick up the plate → Grasping action chunk
Observe again → Put the plate in the sink → Transport action chunk
```

**Artigo:** Cada predição cobre 50 pontos de controle futuros, um bloco de ação. Subtarefas de alto nível são atualizadas mais lentamente; o nível baixo gera blocos condicionados a elas, e o controlador executa os pontos sequencialmente.

**Exemplo:** Uma junta pode ter um alvo de passo único `[0.1]` ou um bloco de três passos `[0.1, 0.12, 0.15]`. As saídas reais são multidimensionais e têm 50 passos. O robô ainda precisa de novas observações e predições; uma tarefa doméstica inteira não é gerada de uma vez e executada às cegas.

### Treinamento, Inferência e Avaliação

| Etapa | O que acontece |
|---|---|
| Treinamento | Aprende saídas de texto e ação a partir de demonstrações, anotações de subtarefas e dados imagem-texto, depois adapta para manipulação móvel em casas. |
| Inferência | Seleciona uma subtarefa a partir das imagens atuais e da instrução geral, depois gera ações contínuas a partir da subtarefa e do estado. |
| Avaliação | Executa em cômodos reservados para teste e pontua passos concluídos; testa separadamente se o objeto e o destino solicitados são selecionados. |

Erro de treinamento baixo não garante trabalho doméstico bem-sucedido; isso exige testes com robôs reais.

---

## Resumo

### Tradução

Robôs úteis devem executar tarefas reais além do laboratório. VLAs mostram fortes capacidades de controle direto, mas a adaptação a ambientes reais desconhecidos permanece uma questão em aberto.

Com base no π0, o π0.5 melhora a adaptabilidade por meio de treinamento conjunto em tarefas e fontes heterogêneas: múltiplos robôs, predição semântica de alto nível e dados da web. Amostras combinam imagens, instruções, detecção de objetos, predição de subtarefas e ações de baixo nível.

Os experimentos sugerem que a transferência entre essas fontes de conhecimento é importante para a generalização. Os autores descrevem um sistema aprendido de ponta a ponta que realiza tarefas longas e hábeis de limpeza de cozinha e quarto em casas totalmente inéditas, e o reivindicam como o primeiro sistema com essa combinação de capacidades.

### Comentário

- **A questão central é se o robô funciona em outra casa.** Pegar um prato em uma sala de treinamento é diferente de encontrar um, escolher o próximo passo e colocá-lo na pia de uma cozinha desconhecida.

- **Fontes servem a propósitos diferentes.** Outros robôs fornecem experiência de manipulação, dados imagem-texto fornecem conhecimento de objetos e cenas, e anotações de subtarefas ensinam organização de tarefas.

- **“Primeiro” é a reivindicação dos autores.** Avalie o escopo da avaliação e as comparações em vez de tratar a formulação como solução para toda tarefa doméstica.

    ---

---

## Introdução

![π0.5 Análise detalhada: 3. Introdução (imagem 00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-00-en.png)

### Parágrafo 1: Ambientes Desconhecidos São Difíceis

- **Conteúdo:** Fora do laboratório, robôs enfrentam objetos diferentes, ordenações de habilidades diferentes e propósitos de cena diferentes.

- **Problema:** Sucesso em uma cena fixa é insuficiente para o mundo real.

- **Configuração:** A receita de treinamento deve cobrir vários níveis de capacidade.

![π0.5 Análise detalhada: Parágrafo 1: Ambientes Desconhecidos São Difíceis (imagem 10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-10-en.png)

### Parágrafo 2: Por Que Usar Experiências Diferentes?

- **Conteúdo:** As pessoas combinam experiência direta, conhecimento de outras pessoas e lições de outras tarefas. Robôs também devem usar múltiplas fontes.

- **Problema:** Demonstrações no robô-alvo não podem cobrir todas as situações do mundo real.

- **Configuração:** VLAs fornecem uma interface compartilhada para imagens, texto e ações.

![π0.5 Análise detalhada: Parágrafo 2: Por Que Usar Experiências Diferentes? (imagem 03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-03-en.png)

### Parágrafo 3: Um Framework de Treinamento Conjunto

- **Conteúdo:** Os autores propõem treinar conjuntamente um VLA em diferentes tipos e fontes de conhecimento.

- **Problema:** Transformar a motivação anterior em uma abordagem de pesquisa concreta.

- **Configuração:** Introduzir o π0.5 e sua composição de dados.

![π0.5 Análise detalhada: Parágrafo 3: Um Framework de Treinamento Conjunto (imagem 12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-12-en.png)

### Parágrafo 4: A Receita de Dados

- **Conteúdo:** Estender o π0 com cerca de 400 horas de dados de robô móvel doméstico, além de outros robôs e tarefas imagem-texto. No estágio 1, 97,6% das amostras de treinamento vêm de fora dos dados-alvo de manipulação móvel em casas.

- **Problema:** Como essas fontes podem, em conjunto, ajudar o robô-alvo?

- **Configuração:** Demonstrar comportamento de 10–15 minutos em casas desconhecidas e depois ablar as fontes. O valor de 97,6% é uma proporção de amostras, não de duração.

![π0.5 Análise detalhada: Parágrafo 4: A Receita de Dados (imagem 07)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-07-en.png)

### Parágrafo 5: Execução Hierárquica

- **Conteúdo:** Após o pré-treinamento heterogêneo, faz-se pós-treinamento para manipulação móvel. O mesmo modelo seleciona subtarefas e produz ações, com atualizações de alto nível menos frequentes.

- **Problema:** Tarefas longas exigem tanto escolhas corretas do próximo passo quanto execução precisa.

- **Configuração:** Explicar como diferentes fontes apoiam o julgamento de cena e o controle.

![π0.5 Análise detalhada: Parágrafo 5: Execução Hierárquica (imagem 11)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-11-en.png)

### Parágrafo 6: Contribuições e Validação

- **Conteúdo:** A contribuição é o sistema π0.5 e a receita de treinamento, com uma prova de conceito em casas inéditas.

- **Problema:** Os experimentos devem estabelecer se o treinamento conjunto realmente melhora a adaptabilidade.

- **Configuração:** Testar novas cenas, remover fontes de dados e comparar políticas de alto nível. A formulação “primeiro” continua sendo uma reivindicação dos autores.

    ---



---

## Trabalhos Relacionados

![π0.5 Análise detalhada: 4. Trabalhos Relacionados (imagem 01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-01-en.png)

- **Políticas generalistas de robôs:** Trabalhos anteriores ampliam a cobertura de tarefas e cenas, mas muitos testes permanecem próximos às condições de treinamento. Este artigo enfatiza tarefas domésticas em múltiplas etapas em casas desconhecidas.

- **Treinamento conjunto com dados não robóticos:** Trabalhos anteriores inicializam ou continuam o treinamento com dados imagem-texto. Aqui, ações de outros robôs, predição de subtarefas e orientação em linguagem humana são combinadas e avaliadas.

- **Organização de tarefas baseada em linguagem:** Um projeto comum separa modelos de planejamento e de execução. O π0.5 usa um único modelo para ambos os níveis, embora eles rodem em frequências diferentes.

- **Sistemas de mundo aberto:** Robôs anteriores executam tarefas básicas como preensão em novos cenários. Este trabalho estende para arrumação em múltiplos passos; novas casas significam principalmente novos layouts, fundos e objetos, não categorias de tarefas totalmente inéditas.



---

## Plataformas de Robô e Dados

### Objetivos e Componentes

**Artigo:** Duas plataformas móveis bimanuais são usadas, visando um único modelo que possa arrumar e limpar casas diferentes.

![π0.5 Análise detalhada: 5.1 Objetivos e Componentes (imagem 05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-05.png)

| Componente | Configuração e papel |
|---|---|
| Braços e garras | Seis DoF de movimento mais um controle de garra por braço, 14 dimensões no total. |
| Base móvel | Duas velocidades translacionais e uma rotacional, três dimensões no total. |
| Mecanismo de elevação | Uma ou duas dimensões para ajuste de altura ou frente-trás. |
| Estado e ação | 18 ou 19 dimensões, dependendo da plataforma. |
| Câmeras | Quatro visões RGB: frontal, traseira e dois pulsos. |

As saídas são posições-alvo para braços, garras e elevação, além de velocidades da base. Um controlador PD simples as acompanha; o sistema relatado não possui módulo adicional de planejamento de trajetória ou detecção de colisão.

**Explicação:** Braços manipulam, enquanto mobilidade e elevação estendem o alcance. Hardware por si só não estabelece capacidade de tarefa; os experimentos o fazem.

### Conectando Operação e Gravação

Demonstrações gravam imagens, estados e ações. Tarefas em múltiplos passos também recebem anotações humanas de subtarefas e localização de objetos. O pós-treinamento adiciona demonstrações em linguagem: um especialista seleciona a próxima instrução e uma política de baixo nível já treinada a executa.

```text
Expert selects “pick up the pillow” → Low-level policy executes → Record the images and chosen instruction
```

**Explicação:** Esses registros supervisionam diretamente o que fazer em seguida, em vez de apenas como as juntas se movem. Eles assumem que a política de baixo nível já consegue executar a subtarefa. Na implantação, o modelo seleciona os passos por conta própria.

### Sensores, Coleta e Capacidades

Decisões de alto nível usam as quatro visões; ações de baixo nível usam a visão frontal e as duas visões de punho. Os alvos de controle são executados a 50 Hz, o que não significa executar o modelo completo 50 vezes por segundo.

Cerca de 400 horas de demonstrações móveis vêm de aproximadamente 100 casas. Outras fontes incluem braços domésticos estacionários, robôs de laboratório e OXE. Resoluções de imagem, taxas de amostragem por fonte e durações das demonstrações não são especificadas de forma uniforme; a taxa de controle de 50 Hz não preenche essas lacunas.

Comportamentos demonstrados incluem coleta de roupas, colocação de pratos, organização de gavetas, arrumar a cama e pendurar toalhas. Testes quantitativos em casas reais cobrem três casas não vistas, com foco em tarefas de carregamento de gavetas, roupas-para-o-cesto e pratos-para-a-pia; comparações controladas também incluem arrumar a cama.

---

## Co-treinamento Heterogêneo e Ações Hierárquicas

### Selecione Primeiro a Subtarefa Atual

“Limpar o quarto” não especifica o que pegar agora. O modelo precisa inspecionar a cena, escolher o próximo passo e condicionar a geração de ações a ele.

Dois relacionamentos condicionais resumem isso:

```text
Current images + state + overall task → Subtask s
Current images + state + subtask s → Action chunk A
```

Aqui, s é um texto como “pegar o travesseiro”, e A é uma sequência de controle. Na fatorização do artigo, ações de baixo nível dependem da subtarefa em vez de depender diretamente da instrução geral.

![π0.5 Análise detalhada: 6.1 Selecione Primeiro a Subtarefa Atual (imagem 06)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-06.png)

Um travesseiro no chão pode levar a “pegá-lo”, seguido de “colocá-lo na cabeceira da cama”. Se a escolha de alto nível estiver errada, movimentos precisos ainda podem executar a tarefa errada. Abrir e fechar gavetas repetidamente é uma falha observada.

### Ações Codificadas para Treino, Ações Contínuas para Execução

O modelo precisa de aprendizado eficiente e controle oportuno e preciso, então as etapas usam representações diferentes.

- **Pré-treinamento:** FAST comprime ações contínuas em símbolos discretos, aprendidos junto com texto por meio de predição do próximo token.

- **Pós-treinamento:** Adicionar um especialista em ações treinado com flow matching, mantendo a predição de texto e de ações discretas.

- **Execução:** Gerar o texto da subtarefa de forma autoregressiva e, em seguida, usar dez atualizações a partir de uma inicialização aleatória para obter um bloco contínuo.



Para 50 passos futuros e 18 controles por passo, o controlador precisa, em última análise, de um array numérico 50 × 18, não de texto. Treinamento codificado seguido de controle contínuo é uma distinção importante entre as etapas.

**Explicação:** O comprimento do bloco controla o horizonte de predição; a contagem de atualizações controla o refinamento interno. Predição de passo único não tem planejamento dentro do bloco, enquanto horizontes longos encontram mais mudanças de cena. O artigo usa 50 pontos de controle e dez atualizações sem estabelecer sistematicamente que sejam ideais para todo robô.

A geração conjunta de blocos não elimina a necessidade de realimentação. O artigo não fornece uma fração de execução universal para todas as plataformas, e o agrupamento temporal ao estilo ACT não é seu mecanismo central.

### O que Cada Fonte de Dados Adiciona

![π0.5 Análise detalhada: 6.3 O que Cada Fonte de Dados Adiciona (imagem 13)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-13.png)

| Dados | Oportunidade de aprendizado |
|---|---|
| Dados de robôs móveis domésticos | Combinar movimento, levantamento e manipulação bimanual em casas reais. |
| Braços estacionários em diferentes ambientes | Mais casas, objetos e cenas de manipulação. |
| Dados de laboratório entre robôs | Mais habilidades e tarefas. |
| Anotações de subtarefas | Escolher o próximo passo e localizar objetos relevantes. |
| Dados web de imagem-texto | Manter capacidades de reconhecimento, compreensão de cena e linguagem. |
| Demonstrações de linguagem de especialistas | Conduzir uma política de baixo nível existente por meio de tarefas de múltiplos passos. |

Essas fontes treinam um único modelo; a execução não percorre os conjuntos de dados em ciclo. Amostras diferentes pedem saídas diferentes: um par imagem-pergunta-resposta não precisa de ações de robô fabricadas.

**Limite de evidência:** Remover dados de outros robôs reduz o desempenho em tarefas domésticas controladas. Remover dados da web não causa queda estatisticamente significativa nesse grupo de teste, mas piora o acompanhamento de instruções com objetos desconhecidos e o julgamento de alto nível. Fontes diferentes não são igualmente importantes em todo teste.

![π0.5 Análise detalhada: 6.3 O que Cada Fonte de Dados Adiciona (imagem 14)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-14.png)

![π0.5 Análise detalhada: 6.3 O que Cada Fonte de Dados Adiciona (imagem 09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-09.png)

### Conectando as Duas Etapas de Treinamento

**Pré-treinamento:** Começar a partir de PaliGemma e misturar ações de robô, subtarefas, localizações de objetos e tarefas de imagem-texto por 280.000 passos. Nenhuma perda de treinamento do especialista contínuo é usada nessa etapa.

Normalizar ações para [−1, 1] usando os percentis 1 e 99 de cada dimensão do conjunto de dados, e preencher robôs de menor dimensionalidade com zeros. Marcas de modo de controle nas instruções distinguem alvos de juntas de alvos de efetuador final.

**Pós-treinamento:** Adicionar um especialista em ações com inicialização aleatória e aproximadamente 300M de parâmetros e treinar por 80.000 passos. Manter demonstrações bem-sucedidas, sem timeout, de robôs móveis domésticos e braços estacionários e remover dados de ações de laboratório entre robôs. Manter subtarefas e dados web relevantes e adicionar demonstrações de linguagem de especialistas.

O objetivo pode ser resumido como:

**Perda total = perda de predição de tokens + 10 × perda de ações contínuas.**

O primeiro termo é entropia cruzada para texto e tokens FAST; o segundo é erro quadrático nas direções de atualização de ações. Seu peso é dez durante o pós-treinamento e zero durante o pré-treinamento. A atenção separa as representações de ações para que o especialista contínuo não possa ler as respostas de ações FAST.

O treinamento com flow matching mistura ações reais A com ruído Gaussiano padrão ε: `noisy action = τA + (1−τ)ε`, com τ entre zero e um. A Equação (1) escreve o alvo como `ε−A`. Para A=0.6, ε=−0.2 e τ=0.5, a entrada é 0.2 e o alvo −0.8. Esta é uma convenção de sinal de campo vetorial, não um comando para mover o robô para trás.

τ é o progresso interno da geração; ε e A são arrays normalizados 50 × d, em que d é a dimensionalidade da ação. Eles não são segundos. O exemplo escalar explica a equação; o treinamento usa arrays completos. A inferência começa a partir de ruído e não requer A de verdade-terreno.

### Rede Completa, Experimentos e Limites

**Artigo:** Imagens se tornam recursos visuais, e instruções e estado entram no VLM. Diferente de π0, π0.5 discretiza o estado como tokens de texto. O backbone prediz subtarefas e fornece recursos de observação ao especialista menor, que gera ações contínuas a partir de entradas ruidosas.

| Entrada ou módulo | Forma ou processamento |
|---|---|
| Imagens | Quatro visões de alto nível, três visões de baixo nível; codificadas como sequências de recursos visuais. |
| Instrução geral, subtarefa e estado | Sequências de tokens que formam o prefixo de observação com recursos visuais. |
| Backbone VLM | Largura 2048, 18 camadas; prediz texto e, durante o pré-treinamento, tokens FAST. |
| Especialista em ações | Largura 1024, 18 camadas, cerca de 300M de parâmetros; incorpora linearmente ações ruidosas 50 × d. |
| Progresso de geração τ | Codificado separadamente e injetado nas camadas do especialista; a atenção lê o prefixo de observação. |
| Saída contínua | Projetar de volta para atualizações 50 × d; dez atualizações geram um bloco. |

O especialista lê observações e seus próprios recursos de ação, mas não tokens FAST. O backbone não lê recursos do especialista. A atenção compartilha informações de observação sem somar diretamente larguras 2048 e 1024. O artigo não especifica de forma uniforme o comprimento da sequência visual ou uma dimensão máxima de ação em todos os conjuntos de dados.

**Cuidado:** A Figura 3 rotula Gemma como 2,6B, enquanto o Apêndice E a chama de “VLM de 2B”. As contagens de camadas e larguras verificáveis são mantidas sem inventar uma contagem exata de parâmetros totais.

O apêndice fornece **50 pontos de controle**. A convenção de ponto final inclusivo escreve H=49; “50 passos” evita confusão. As duas plataformas produzem arrays 50 × 18 ou 50 × 19, com preenchimento para treinamento entre robôs.

```text
Training: heterogeneous data → backbone predicts text / action tokens
          post-training adds noisy actions → expert learns continuous updates

Inference: observations + overall task → subtask text
           observations + subtask + random actions → ten updates → continuous chunk → execute and observe again
```

**Três pontos a observar nos experimentos:**

1. **Mais locais de treinamento geralmente ajudam.** As comparações usam 3, 12, 22, 53, 82 e 104 locais. O modelo com 104 locais se aproxima de um modelo que viu o cenário de avaliação nessas tarefas; isso não é uma garantia para toda casa nova.

2. **A receita completa supera mudar apenas o treinamento de ações.** Com o mesmo conjunto de dados de robôs e passos semelhantes, π0.5 supera π0 e π0-FAST+Flow. FAST sozinho não explica o ganho; subtarefa e co-treinamento de imagem-texto também diferem.

3. **Raciocínio de alto nível ajuda, e dados de treinamento de alto nível também importam.** Uma variante que mantém todos os dados de treinamento, mas omite a seleção explícita de subtarefas no tempo de inferência, fica em segundo lugar. Remover demonstrações de linguagem ou dados web reduz o desempenho. Dizer uma subtarefa antes de agir não é toda a explicação.



A maioria das figuras principais apresenta **pontuações de conclusão de tarefa**, não taxas de sucesso de tarefa completa. Normalmente há cerca de dez tentativas por política por tarefa, ou aproximadamente 40 nas quatro tarefas controladas; algumas tentativas canceladas são excluídas. Dishes-to-sink tem oito pontos possíveis, concedidos separadamente para pegar e colocar. Metade da pontuação não significa que metade das tentativas tenha sido totalmente bem-sucedida.

![π0.5 Análise detalhada: 6.5 Rede Completa, Experimentos e Limites (imagem 02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-02.png)

O artigo demonstra comportamentos de 10–15 minutos, enquanto muitas tarefas em casas reais avaliadas quantitativamente duram cerca de 2–5 minutos. Não confunda as duas coisas. Maçanetas desconhecidas, portas difíceis, oclusão, decisões de alto nível repetidas, preferências complexas e memória entre cômodos continuam sendo desafios. O trabalho valida comportamentos úteis em novas casas, em vez da conclusão confiável de todas as tarefas domésticas.

*Locais de referência: resumo e introdução; Seções II, IV-A–IV-E, V-A–V-E e VI; Figuras 3, 5 e 7–13; Apêndices B e E. Este guia não adiciona suposições de transferência de hardware específicas de projeto.*

---

## Comparando π0 e π0.5
### Principais mudanças
**Explicação:** π0 estuda controle generalista e hábil em diferentes robôs e tarefas. π0.5 estende isso em direção ao entendimento de casas desconhecidas e à organização de trabalho doméstico em múltiplas etapas.

| Aspecto | π0 | π0.5 |
|---|---|---|
| Foco | Manipulação geral em diferentes robôs e tarefas. | Manipulação em múltiplas etapas em novas casas, com novos objetos e layouts. |
| Dados | Inicialização com VLM, principalmente demonstrações entre robôs e rótulos em linguagem para treinamento da política. | Co-treinamento contínuo em ações, subtarefas, localização e dados da web; demonstrações em linguagem de especialistas no pós-treinamento. |
| Treinamento de ação | Especialista contínuo tanto no pré-treinamento quanto no pós-treinamento. | Tokens FAST durante o pré-treinamento; adiciona o especialista durante o pós-treinamento mantendo ambas as representações. |
| Ações executadas | Blocos contínuos de flow matching. | Também blocos contínuos de flow matching; FAST melhora principalmente o treinamento. |
| Organização de tarefas longas | Segue instruções de uma pessoa ou de um VLM externo de alto nível quando é necessário planejamento semântico explícito. | O mesmo modelo seleciona subtarefas a partir da tarefa geral e gera ações para elas. |
| Entrada de estado | Estado contínuo projetado no especialista de ação. | Estado discretizado como tokens no VLM. |
| Objetivo do pós-treinamento | Melhorar a proficiência em tarefas com demonstrações mais limpas e consistentes. | Adaptar tanto a execução de ações quanto a seleção de subtarefas para manipulação móvel doméstica. |

Ambos usam PaliGemma e um especialista de ação com aproximadamente 300M de parâmetros, com 50 pontos de controle e dez atualizações de fluxo. π0.5 muda principalmente a receita de treinamento e a organização de tarefas; seus ganhos não vêm simplesmente de um modelo maior ou de blocos mais longos.

### Exemplo: Colocar um prato na pia
```text
π0：
Images + state + “put the plate in the sink” → continuous chunk → execute
A person or external high-level model can supply intermediate instructions for an explicitly decomposed kitchen-cleaning task.

π0.5：
Images + state + “clean the kitchen” → model selects “pick up the plate”
Images + state + “pick up the plate” → continuous chunk → execute and observe again
Then select another subtask, such as “put the plate in the sink,” from the updated scene.
```

**Atenção:** Isto compara caminhos de execução. O π0 original também demonstra tarefas longas; ele não se limita a operações de etapa única. π0.5 adiciona seleção explícita de subtarefas dentro do mesmo modelo.

### O que os experimentos sustentam?
![π0.5 Análise detalhada: 7.3 O que os experimentos sustentam? (imagem 04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/pi05/image-04.png)

**Artigo:** Sob o mesmo conjunto de dados de robô e etapas semelhantes, a receita completa de π0.5 supera π0 e π0-FAST+Flow nas casas controladas desconhecidas testadas. Este último já combina FAST e flow matching, mas usa apenas dados de ações de robô e carece de raciocínio de alto nível. Mudar apenas o treinamento de ação é insuficiente para igualar o π0.5 completo.

**Atenção:** Estas são bases de comparação retreinadas dentro do artigo de π0.5, não pontuações emendadas de publicações separadas. Elas sustentam melhorias nessas tarefas e condições, não um ganho fixo em todos os cenários.

Compare cuidadosamente os escopos de dados: os “mais de 10.000 horas” de π0 referem-se ao total de demonstrações de robô, enquanto as “cerca de 400 horas” de π0.5 referem-se apenas à manipulação móvel doméstica e excluem uma quantidade substancial de dados de outros robôs e de imagem-texto. Os números não mostram que π0.5 vence universalmente com menos dados totais.

*Fontes de comparação: π0, 2410.24164v4, Seções III–V e experimentos de instruções de alto nível; π0.5, 2504.16054v1, Seções IV, V-D, V-E, Figura 12 e Apêndice E.*

</div>
