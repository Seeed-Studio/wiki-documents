---
description: "Um mergulho profundo no Cosmos 3: mecanismos, treinamento, experimentos e escopo de integração do LeRobot v0.7.0."
title: "Cosmos 3: Do Modelamento Omnimodal do Mundo a Políticas Conjuntas de Vídeo-Ação"
hide_title: true
keywords: ["Paper Deep-Dive","Cosmos 3","Omnimodal World Models","MoT","Joint Video-Action Prediction","LeRobot"]
slug: /robotics/paper_reading_cosmos3
displayed_sidebar: PaperReadingSidebar
last_update:
  date: 2026-11-20
  author: liujunjie
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Pré-requisitos: Três Modos de Ação",
    "id": "prerequisites-three-action-modes",
    "level": 2
  },
  {
    "value": "Resumo e Guia de Leitura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Arquitetura: Caminhos de Compreensão e Geração",
    "id": "architecture-understanding-and-generation-paths",
    "level": 2
  },
  {
    "value": "Ações: Geometria Compartilhada com Interfaces Específicas de Domínio",
    "id": "actions-shared-geometry-with-domain-specific-interfaces",
    "level": 2
  },
  {
    "value": "Treinamento: Três Usos de Uma Mesma Trajetória",
    "id": "training-three-uses-of-one-trajectory",
    "level": 2
  },
  {
    "value": "Fechando o Ciclo",
    "id": "closing-the-loop",
    "level": 3
  },
  {
    "value": "Experimentos: Especificidade de Instruções e Inicialização",
    "id": "experiments-instruction-specificity-and-initialization",
    "level": 2
  },
  {
    "value": "Instruções do RoboLab",
    "id": "robolab-instructions",
    "level": 3
  },
  {
    "value": "Adaptação ao LIBERO-10",
    "id": "adaptation-to-libero-10",
    "level": 3
  },
  {
    "value": "Avaliações de Preferência Física",
    "id": "physical-preference-ratings",
    "level": 3
  },
  {
    "value": "Integração com LeRobot: Compatibilizar Tamanho, Controles e Receita",
    "id": "lerobot-integration-match-size-controls-and-recipe",
    "level": 2
  },
  {
    "value": "Conclusão",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-cosmos3-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-cosmos3-title">Cosmos 3: Do Modelamento Omnimodal do Mundo a Políticas Conjuntas de Vídeo-Ação</h1>
  <p className="paper-reading-lead">Cosmos 3: Modelos Omnimodais do Mundo para IA Física</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-understanding-and-generation-paths">Arquitetura multimodal</a></li>
    <li><a href="#actions-shared-geometry-with-domain-specific-interfaces">Ações e treinamento</a></li>
    <li><a href="#experiments-instruction-specificity-and-initialization">Experimentos</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2606.02800v4" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Ler o artigo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/cosmos3" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentação do LeRobot Cosmos 3 ↗</a>

**Parâmetros do LeRobot**

- `--policy.type=cosmos3_nano` e `--policy.type=cosmos3_edge` selecionam tamanhos compatíveis.
- `--policy.path=lerobot/Cosmos3-Nano-Policy-LIBERO` carrega uma política treinada em todas as quatro suítes LIBERO.
- `--policy.save_predicted_video=true` adicionalmente decodifica/salva previsões, adicionando custo de visualização.
- Domínio, canvas da câmera, taxa de quadros real e representação de ação são todas condições do modelo.

</aside>

Um robô coloca uma tigela preta em uma gaveta e a fecha. Podemos perguntar o que uma determinada ação fará, que ação explica uma transição visual ou que ação deve alcançar um objetivo. **Um único modelo pode aprender os três apenas mudando quais partes de uma trajetória são conhecidas?**

## Pré-requisitos: Três Modos de Ação

| Modo | Conhecido | Previsto | Exemplo da gaveta |
| --- | --- | --- | --- |
| Dinâmica direta | Visão atual e ações | Visões futuras | Para onde puxar move a gaveta |
| Dinâmica inversa | Transição visual | Ações | Como transformar fechada em aberta |
| Política | Observação atual e objetivo | Ações e visões futuras | Movimento e resultado esperado juntos |

Um vídeo de uma gaveta abrindo não é um comando executável de robô. O aprendizado de políticas precisa de supervisão de ação e de uma interface específica do corpo, com previsões corrigidas por feedback real.

<figure className="paper-reading-figure" data-reading-figure="cosmos3/teaching-three-conditioning-modes-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/cosmos-three-conditioning-modes-en-v2.png" alt="Três tarefas de previsão condicional para abertura de gaveta" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>Três tarefas de previsão condicional para abertura de gaveta.</strong> Ilustração didática gerada por IA. As colunas mostram dinâmica direta, dinâmica inversa e previsão conjunta de vídeo-ação (política), com diferentes entradas conhecidas e alvos de previsão. Elas são modos alternativos de geração, não estágios sequenciais de execução. Cenas visuais representam sequências de vídeo; condicionamento por linguagem e tokens especiais é simplificado.</figcaption>
</figure>

## Resumo e Guia de Leitura

**Resumo em poucas palavras.** Cosmos 3 unifica linguagem, imagem, vídeo, áudio e ação em uma arquitetura MoT que combina compreensão autoregressiva com geração contínua. Escolhas de tokens limpos/ruidosos implementam dinâmica direta, dinâmica inversa e aprendizado de políticas. Ação em meio ao treinamento fornece priors entre domínios antes do pós-treinamento no alvo.

**Nota de leitura.** Este artigo foca em mecanismos relevantes para robótica. Rankings de qualidade de imagem/vídeo não medem sucesso de controle, e o adaptador Nano/Edge do LeRobot não expõe toda a plataforma omnimodal.

## Arquitetura: Caminhos de Compreensão e Geração

O caminho causal de compreensão processa texto e tokens de visão ViT opcionais. O caminho de geração remove ruído de tokens contínuos de vídeo, áudio e ação. Cada camada tem normalização, projeções e parâmetros de feed-forward separados, com atenção compartilhada conectando o contexto.

Recursos ViT dão suporte à compreensão, enquanto um VAE de vídeo congelado fornece latentes generativos. Esse MoT baseado em caminhos difere do roteamento MoE esparso que seleciona vários especialistas feed-forward por token.

No modo de política, a imagem atual é limpa e o vídeo/ações futuros são ruidosos e restaurados em conjunto. Prompts descrevem adicionalmente taxa de quadros, resolução, layout de visão e quadros ociosos para alinhar tempo visual e de ação.

<figure className="paper-reading-figure" data-reading-figure="cosmos3/mot-architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/cosmos3/mot-architecture.png" alt="Roteamento de atenção entre compreensão autoregressiva e geração por difusão" loading="lazy" />
  <figcaption><strong>Roteamento de atenção entre compreensão autoregressiva e geração por difusão.</strong> Fonte: a documentação oficial do LeRobot. A compreensão usa autoatenção causal; a geração usa atenção completa e lê o contexto de compreensão. A máscara bloqueia consultas de compreensão a partir de tokens gerados. A atenção compartilhada conecta os cálculos sem tornar idênticas suas regras de decodificação.</figcaption>
</figure>

## Ações: Geometria Compartilhada com Interfaces Específicas de Domínio

O relatório organiza ações em torno de movimento ego, efetores e estados de preensão. Poses consecutivas podem definir

$$
\Delta T_t=T_{t-1}^{-1}T_t.
$$

Translação e rotação 6D codificam movimento; canais de preensão codificam o estado atual de manipulação. Projeções específicas de domínio mapeiam os vetores de cada corpo em dimensões ocultas compartilhadas.

Representações de pré-treinamento e formatos de controle alvo podem diferir. DROID usa oito canais de junta/garra na receita do adaptador; LIBERO usa dez canais com rotação 6D, convertidos de volta para as ações de sete dimensões do simulador. Preenchimento não pode substituir essas conversões.

<figure className="paper-reading-figure" data-reading-figure="cosmos3/action-representation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/cosmos3/action-representation.png" alt="Componentes geométricos compartilhados entre vetores de ação específicos de encarnação" loading="lazy" />
  <figcaption><strong>Componentes geométricos compartilhados entre vetores de ação específicos de encarnação.</strong> Fonte: o artigo do Cosmos 3. Posição, rotação 6D e componentes de preensão formam vetores de comprimentos diferentes, conectados por meio de projeções específicas de domínio. Seis números de rotação não implicam seis graus de liberdade rotacionais, e componentes compartilhados não tornam os comandos intercambiáveis.</figcaption>
</figure>

## Treinamento: Três Usos de Uma Mesma Trajetória

Para uma demonstração de gaveta, a dinâmica direta mantém ações limpas e prevê vídeo. A dinâmica inversa mantém transições visuais limpas e prevê ações. O modo de política adiciona ruído e prevê ambos.

O treinamento geral de compreensão/geração precede o treinamento intermediário de ação em múltiplos domínios e o pós-treinamento no alvo. Priors de ação dão suporte à adaptação, enquanto demonstrações alvo alinham controles e cenas reais. Geração geral de vídeo sozinha não cria uma política implantável.

### Fechando o Ciclo

Vistas são compostas em um canvas fixo. Latentes atuais limpos condicionam a amostragem conjunta de vídeo e ações futuros. O robô executa um segmento e então observa novamente. A decodificação de vídeo é opcional para inspeção.

Se o modelo imagina a tigela dentro da gaveta, mas a garra a deixa cair, a próxima chamada deve usar a posição real da tigela. Previsão conjunta vincula movimento a consequências esperadas sem garantir sua correção física.

## Experimentos: Especificidade de Instruções e Inicialização

### Instruções do RoboLab

O relatório avalia 120 tarefas com dez tentativas cada:

| Modelo | Vaga | Padrão | Específica |
| --- | ---: | ---: | ---: |
| Cosmos3-Nano, inicialização com treinamento intermediário de ação | 20,6% | 36,8% | 39,7% |
| Cosmos3-Nano, inicialização com pré-treinamento geral | 16,7% | 28,1% | 30,2% |
| π0.5 | 15,2% | 28,0% | 28,1% |

Estas são taxas de sucesso sob diferentes condições de instrução. Os valores de 36,8% e 39,7% não são intercambiáveis, e pedidos vagos continuam substancialmente mais difíceis.

### Adaptação ao LIBERO-10

Cinquenta tentativas para cada uma das dez tarefas resultam em 500 rollouts por checkpoint:

| Atualizações | MT-init | PT-init |
| --- | ---: | ---: |
| 500 | 24.6% | 0.0% |
| 1,000 | 91.4% | 73.8% |
| 2,000 | 97.4% | 95.2% |

A maior diferença inicial confirma uma adaptação mais rápida a partir de ação em meio ao treinamento. O estreitamento dessa diferença não implica que a inicialização pré-treinada de forma geral nunca possa aprender.

### Avaliações de Preferência Física

O RoboArena agrega comparações pareadas às cegas. O relatório registra uma avaliação líder em 30 de maio de 2026. Uma avaliação de preferência não é nem uma porcentagem de sucesso em uma suíte fixa nem uma afirmação sobre o ranking de hoje.

## Integração com LeRobot: Combine Tamanho, Controles e Receita

A versão 0.7.0 oferece suporte a aproximadamente 16,5B Nano e 4,6B Edge, treinando principalmente o caminho de geração e os módulos de ação por padrão. Checkpoints Base, DROID, LIBERO de quatro suítes e apenas LIBERO-10 atendem a propósitos diferentes.

Os resultados documentados de quatro suítes Nano/Edge têm média de 97,90%/97,95%, com 500 episódios por suíte. O checkpoint Nano apenas LIBERO-10 marca 97,6%; o MT-init do relatório em 2.000 atualizações marca 97,4%. Diferentes conjuntos de treinamento, implementações e pesos devem manter rótulos separados.

```bash
--policy.path=lerobot/Cosmos3-Nano-Policy-LIBERO
--policy.dtype=bfloat16
--env.type=libero
--env.task=libero_spatial,libero_object,libero_goal,libero_10
--env.observation_height=256
--env.observation_width=256
```

Esses fragmentos de avaliação exigem as configurações de avaliação versionadas restantes. Novos conjuntos de dados precisam de taxas de quadros corretas, descrições de visualização, estatísticas e identificadores de domínio. Com condicionamento de estado, os canais de estado/ação devem ter larguras e semânticas correspondentes. Processadores de dados/ambiente realizam conversões físicas.

Ao adaptar uma base, `load_action_modules=false` pode inicializar módulos de destino; a avaliação deve carregar os módulos treinados. Receitas baseadas em EMA exigem o checkpoint EMA correspondente. Estas são instruções de integração, não evidências de uma execução de benchmark na máquina atual.

## Conclusão

Cosmos 3 aprende várias relações condicionais entre mudança visual e ações em uma arquitetura unificada. A ação em meio ao treinamento fornece priors de adaptação reutilizáveis. Interpretar a política exige separar seus três modos, representações específicas do corpo, condições de instrução e protocolos pós-treinamento.

</div>
