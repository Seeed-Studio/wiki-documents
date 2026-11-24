---
description: "Um mergulho profundo em FineART-VLA: mecanismos, treinamento, experimentos e escopo de integração com o LeRobot v0.7.0."
title: "FineART-VLA: Conectando metas de longo horizonte a ações bimanipulares por meio de subtarefas"
hide_title: true
keywords: ["Paper Deep-Dive","FineART-VLA","VLA","Subtask Prediction","Bimanual Manipulation","Knowledge Insulation","LeRobot"]
slug: /robotics/paper_reading_fineart_vla
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
    "value": "Pré-requisitos: três escalas temporais de controle",
    "id": "prerequisites-three-timescales-of-control",
    "level": 2
  },
  {
    "value": "Resumo e guia de leitura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Por que demonstrações longas precisam de rótulos de fase",
    "id": "why-long-demonstrations-need-phase-labels",
    "level": 2
  },
  {
    "value": "Dados: cobrindo habilidades reutilizáveis e tarefas ricas em contato",
    "id": "data-covering-reusable-skills-and-contact-rich-tasks",
    "level": 2
  },
  {
    "value": "Arquitetura: prever uma subtarefa e depois gerar suas ações",
    "id": "architecture-predict-a-subtask-then-generate-its-actions",
    "level": 2
  },
  {
    "value": "Três objetivos e isolamento de conhecimento",
    "id": "three-objectives-and-knowledge-insulation",
    "level": 3
  },
  {
    "value": "Treinamento e execução: alinhando duas decisões aprendidas",
    "id": "training-and-execution-aligning-two-learned-decisions",
    "level": 2
  },
  {
    "value": "Experimentos: o que melhora e sob quais condições",
    "id": "experiments-what-improves-and-under-which-conditions",
    "level": 2
  },
  {
    "value": "Condições iniciais compatíveis",
    "id": "matched-initial-conditions",
    "level": 3
  },
  {
    "value": "Palavras espaciais e orientação de longo horizonte",
    "id": "spatial-words-and-long-horizon-guidance",
    "level": 3
  },
  {
    "value": "Dados de cauda longa e transferência de embodiment",
    "id": "long-tail-data-and-embodiment-transfer",
    "level": 3
  },
  {
    "value": "Integração com LeRobot: preservando o planejador de linguagem",
    "id": "lerobot-integration-preserving-the-language-planner",
    "level": 2
  },
  {
    "value": "Conclusão",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-fineart_vla-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-fineart_vla-title">FineART-VLA: Conectando metas de longo horizonte a ações bimanipulares por meio de subtarefas</h1>
  <p className="paper-reading-lead">FineART: conjunto de dados de trajetórias robóticas anotadas em nível fino e modelo visão-linguagem-ação para manipulação bimanipular</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-predict-a-subtask-then-generate-its-actions">Previsão de subtarefas</a></li>
    <li><a href="#three-objectives-and-knowledge-insulation">Isolamento de conhecimento</a></li>
    <li><a href="#experiments-what-improves-and-under-which-conditions">Experimentos</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2609.36416v3" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Ler o artigo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/fineart_vla" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentação do LeRobot FineART-VLA ↗</a>

**Parâmetros do LeRobot**

- `--policy.path=lerobot/fineart_vla_base` inicia a adaptação a partir do checkpoint de meio de treinamento do FineART.
- `--policy.type=fineart_vla --policy.pretrained_path=lerobot/pi05_base` inicia uma rota de treinamento diferente a partir dos pesos de π0.5.
- O planejamento em linguagem precisa de anotações `subtask` alinhadas temporalmente. Uma string de tarefa em nível de episódio sozinha não fornece essa supervisão.
- `lerobot-rollout` gerencia a execução interativa; `--autosteer_interval_s=3` define o intervalo de consulta de planejamento. Consulte o guia versionado para a configuração completa de hardware.

</aside>

Um robô preparando o café da manhã precisa colocar uma xícara, organizar talheres e mover alimentos. A instrução geral permanece a mesma por vários minutos, enquanto o movimento necessário muda após cada etapa concluída. **Se cada quadro carrega apenas a meta geral, onde a política aprende qual etapa ela deve executar agora?**

## Pré-requisitos: três escalas temporais de controle

Uma meta especifica o resultado final, uma subtarefa especifica a operação atual e um bloco de ações especifica comandos numéricos ao longo de vários ciclos de controle. FineART alinha instruções de subtarefa com a linha do tempo da demonstração.

| Exemplo de café da manhã | Significado | Papel no aprendizado |
| --- | --- | --- |
| Preparar o café da manhã | Meta geral | Condiciona a previsão de subtarefas |
| Colocar a xícara na prateleira | Operação atual | Alvo de linguagem e condição de ação |
| Alvos de juntas e garra | Movimento físico | Supervisão de ações contínuas e discretas |

Uma subtarefa ainda contém vários movimentos. Colocar uma xícara inclui alcançar, agarrar, carregar e soltar. A anotação restringe o problema de controle sem descrever em palavras cada ciclo de motor.

## Resumo e guia de leitura

**Resumo em poucas palavras.** FineART contém 40.543 episódios, 1.718 horas, 151 tarefas e 533.913 subtarefas. FineART-VLA estende π0.5 com previsão da próxima subtarefa e controle contínuo condicionado à subtarefa. Seus experimentos investigam separadamente a granularidade das anotações, o treinamento de subtarefas, o isolamento de conhecimento e a adaptação a um embodiment diferente.

**Nota de leitura.** Mais demonstrações, rótulos de fase e roteamento de gradiente servem a propósitos diferentes. Uma comparação controlada deve manter os outros fatores fixos antes de atribuir uma melhoria a um deles.

## Por que demonstrações longas precisam de rótulos de fase

Imagens semelhantes podem pertencer a diferentes fases da tarefa, e o mesmo movimento pode servir a metas diferentes. Instruções apenas em nível de episódio deixam essas diferenças implícitas. Subtarefas alinhadas temporalmente fornecem supervisão direta para a operação atual.

Comparado com a interface de ação direta de π0.5, FineART-VLA adiciona um caminho de geração de linguagem. Comparado com um planejador e um controlador separados, ele treina linguagem e ação dentro de uma única política e também aceita subtarefas especificadas por humanos. Uma legenda mais longa para o vídeo inteiro não pode substituir rótulos alinhados com operações individuais.

## Dados: cobrindo habilidades reutilizáveis e tarefas ricas em contato

FineART combina pick-and-place repetidos e organização semântica com uma cauda longa de manipulação de tecido, montagem de ferramentas, roteamento de cabos e inserção precisa. Essas tarefas expõem a política a diferentes requisitos de contato e precisão.

Para dobrar toalhas, os rótulos precisam seguir a sequência real de agarrar, mover e colocar. Fronteiras incorretas associam uma instrução às ações de outra operação, enfraquecendo diretamente a condição de treinamento do controlador.

No meio do treinamento, amostra-se uma tarefa com peso proporcional a $n_i^{0.5}$, onde $n_i$ é sua contagem de quadros. Em um exemplo didático, tarefas com 100 e 400 quadros recebem pesos 10 e 20: uma razão de amostragem de 1:2 em vez da razão bruta de 1:4.

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/subtask-annotations">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fineart_vla/subtask-annotations.png" alt="Temporal alignment of task and subtasks" loading="lazy" />
  <figcaption><strong>Alinhamento temporal de tarefa e subtarefas.</strong> Fonte: o artigo FineART. Uma tarefa de empacotamento é segmentada em fases de duração desigual, ilustrando por que rótulos de subtarefa precisam de fronteiras temporais. Os nomes exibidos são categorias ilustrativas, não anotações literais do conjunto de dados.</figcaption>
</figure>

## Arquitetura: prever uma subtarefa e depois gerar suas ações

A configuração ALOHA do artigo usa a visão superior e duas visões de punho, um estado de junta/garra de 14 dimensões e blocos de 50 passos de ações de 14 dimensões. Seu backbone visão-linguagem combina SigLIP e Gemma com um especialista em ações separado no estilo Gemma.

| Caminho | Entrada | Cálculo | Saída |
| --- | --- | --- | --- |
| Planejamento de subtarefa | Observação e meta geral | Geração de linguagem autoregressiva | Instrução de baixo nível |
| Aprendizado de ações discretas | Observação e subtarefa | Previsão de tokens FAST | Supervisão de ações para o backbone |
| Controle contínuo | Observação, estado, subtarefa e ações ruidosas | Especialista em ações de flow-matching | Bloco de ações executável |

O planejador pode gerar “colocar a xícara na prateleira”, enquanto várias chamadas de ação seguem essa instrução. Consultas de planejamento periódicas usam observações recentes e a meta de alto nível original para inferir a subtarefa ativa. O runtime não detecta a conclusão da subtarefa; o intervalo de consulta é configurável. Planejamento e geração de ações podem rodar em taxas diferentes.

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/teaching-three-timescales-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/fineart-three-timescales-en-v2.png" alt="Three timescales: high-level goal, subtask, and continuous actions" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>Três escalas temporais: meta de alto nível, subtarefa e ações contínuas.</strong> Ilustração didática gerada por IA. Uma única política oferece suporte à inferência autônoma de subtarefas (Sistema 2) e à execução de ações contínuas (Sistema 1). O runtime consulta subtarefas periodicamente a partir da meta de alto nível e das observações atuais; ele não detecta a conclusão da subtarefa. Uma subtarefa pode guiar vários blocos de ações. As observações também incluem o estado do robô, omitido aqui para maior clareza. Fases de movimento nomeadas ilustram uma trajetória; as saídas executáveis são valores contínuos.</figcaption>
</figure>

### Três objetivos e isolamento de conhecimento

O objetivo de treinamento é

$$
\mathcal L=10\mathcal L_{\mathrm{flow}}+\mathcal L_{\mathrm{FAST}}+\lambda_{\mathrm{text}}\mathcal L_{\mathrm{text}}.
$$

Com o treinamento de subtarefas habilitado, 30% das amostras treinam a previsão de meta para subtarefa e 70% treinam ações condicionadas à subtarefa. Essas são proporções de amostragem, não alocações em tempo de execução.

O isolamento de conhecimento desacopla as chaves e valores do backbone lidos pelo especialista em ações. O especialista ainda usa o contexto visual‑linguagem, mas a perda contínua de ação não atualiza o backbone por esse caminho. As perdas de texto e de ações discretas continuam a treiná‑lo; o backbone não fica permanentemente congelado.

## Treinamento e Execução: Alinhando Duas Decisões Aprendidas

Demonstrações fornecem o subtarefa correta durante o treinamento, enquanto a implantação normalmente usa uma subtarefa gerada. O controlador deve seguir subtarefas, e o planejador deve reconhecer a fase atual. Aprender apenas uma dessas capacidades deixa o outro problema sem solução.

Um ciclo de controle lê imagens e estado, consulta ou mantém uma subtarefa, prediz ações, executa parte do plano e observa novamente. A entrada de subtarefa humana ajuda a distinguir falhas de planejamento de falhas de movimento. O horizonte de predição de 50 passos e o intervalo de planejamento em tempo de execução são configurações separadas.

## Experimentos: O Que Melhora e em Quais Condições

### Condições Iniciais Compatíveis

As avaliações ALOHA usam 25 rollouts por tarefa com arranjos iniciais prescritos. A taxa de sucesso conta conclusões completas; a taxa de progresso mede estágios concluídos. Para um exemplo de colocação de copo em quatro estágios, alcançar, agarrar e carregar sem colocação bem‑sucedida pode marcar 75% de progresso e zero de sucesso.

Uma ablação 2×2 varia o treinamento de subtarefa e o isolamento de conhecimento de forma independente. A combinação deles oferece a generalização fora de distribuição mais forte, mas tarefas individuais se comportam de maneira diferente. Em uma colocação simples em prateleira, o isolamento sem treinamento de subtarefa supera habilitar ambos; tarefas mais ambíguas podem se beneficiar de supervisão de fase.

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/subtask-insulation-ablation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fineart_vla/subtask-insulation-ablation.png" alt="Subtask training and knowledge-insulation ablation" loading="lazy" />
  <figcaption><strong>Ablação de treinamento de subtarefa e isolamento de conhecimento.</strong> Fonte: o artigo FineART. Barras sólidas mostram sucesso e barras claras mostram progresso. Combinar ambos os mecanismos ajuda mais no grupo fora de distribuição. Há 25 tentativas por tarefa, 50 por regime e 150 no total; as médias por regime não descrevem todas as tarefas.</figcaption>
</figure>

### Palavras Espaciais e Orientação de Longo Horizonte

Ao colocar um donut no compartimento esquerdo, do meio ou direito, com isolamento desativado em ambas as condições, o treinamento de subtarefa eleva o sucesso de 32% para 100%, em 25 tentativas cada. Todas as 17 falhas sem treinamento de subtarefa selecionam o compartimento errado. Isso testa especificamente se a linguagem espacial altera a seleção de alvo.

A tarefa de café da manhã recombina subtarefas familiares em uma sequência completa inédita. Orientação humana passo a passo eleva o sucesso de 16% para 76%. Esse resultado inclui orientação humana e não mede planejamento totalmente autônomo.

### Dados de Cauda Longa e Transferência de Corpo

Remover a cauda rica em contato mantendo fixos os passos de treinamento reduz o sucesso geral de 24,7% para 14,0% na configuração dessa ablação. Esses números pertencem àquela comparação controlada, não à melhor configuração de outro experimento.

O estudo ALOHA‑para‑YAM mede eficiência de dados e composição de tarefas após adaptação ao YAM. A transferência entre corpos ainda requer uma interface de controle de destino compatível e dados de adaptação.

## Integração com LeRobot: Preservando o Planejador de Linguagem

A versão 0.7.0 oferece suporte a treinamento FineART‑VLA, consultas de texto e execução de ações. Junto com imagens, estado, ações e tarefas, a receita selecionada precisa de seus alvos em `language_persistent` e `language_events`. A receita padrão usa uma linha do tempo contínua de subtarefas; memória e VQA exigem suas próprias anotações e suporte em tempo de execução.

Preserve a receita do checkpoint, o tokenizador de ações e os processadores e, em seguida, alinhe nomes de câmeras, estatísticas de ações e dimensões de estado com o robô de destino. Alterar apenas um nome de política π0.5 não reproduz o planejador do artigo.

A seguir estão fragmentos de parâmetros de treinamento; forneça separadamente o conjunto de dados real e a configuração de saída:

```bash
--policy.path=lerobot/fineart_vla_base
--policy.dtype=bfloat16
--policy.gradient_checkpointing=true
--policy.tokenizer_max_length=256
```

Essas configurações de integração não reproduzem por si só o protocolo de avaliação do artigo.

## Conclusão

FineART‑VLA conecta objetivos gerais, linguagem de fase e ações contínuas em um único pipeline de aprendizado. Rótulos densos explicam o que cada segmento de ação realiza, subtarefas geradas fornecem um ponto de intervenção e o isolamento de conhecimento ajuda a preservar a capacidade do backbone. Sua evidência mais forte vem de ablações compatíveis; o comportamento autônomo ainda depende de reconhecimento de fase, execução precisa e dados de alvo‑corpo.

</div>
