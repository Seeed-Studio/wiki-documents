---
description: 'Capítulo 18 do Curso para Iniciantes em IA Física da Seeed — fundamentos de aprendizado multimodal e VLA: visão/linguagem/ação, VLM vs VLA, ACT vs VLA, tarefas condicionadas por linguagem, tarefa única vs múltiplas tarefas vs generalização, ações contínuas vs tokens de ação, e capacidades e limitações de VLA.'
title: Capítulo 18 - Aprendizado Multimodal e Fundamentos de VLA
hide_title: true
keywords:
  - reBot
  - VLA
  - VLM
  - GR00T
  - Multimodal
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_18
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-24
  author: ZhuYaoHui
createdAt: '2026-09-24'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_18/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 4 · Capítulo 18 · Teoria</span>
    <h2>18. Aprendizado Multimodal e Fundamentos de VLA</h2>
    <p>
      Capítulo 18 do Curso para Iniciantes em IA Física da Seeed — visão/linguagem/ação,
      VLM vs VLA, ACT vs VLA, tarefas condicionadas por linguagem, tarefa única vs múltiplas tarefas vs
      generalização, ações contínuas vs tokens de ação, e capacidades e limitações de VLA.
    </p>
    <div className="hero-actions">
      <a href="#vlm-vla">VLM vs VLA</a>
      <a href="#act-vla">ACT vs VLA</a>
      <a href="#capabilities">Capacidades</a>
    </div>
  </div>
</section>

### Hardware necessário para este estágio

O que preparar para este estágio. A lista completa para cada estágio está no [Capítulo 3](/pt-br/rebot_physical_ai_course_chapter_3/).

**Unidade de controle principal**

| Item | Comprar | Qtde |
| :--- | :---: | :---: |
| [reComputer Robotics J4012](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 🛒 | 1 |
| [NVIDIA Jetson AGX Thor 128G](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 🛒 | 1 |

Também é necessário um desktop ou laptop: Ubuntu 22.04, GTX 4080 ou superior com 12GB+ de VRAM, 16GB+ de RAM.

**Para este estágio**

| Item | Comprar | Qtde |
| :--- | :---: | :---: |
| [reBot Arm B601 DM/RS](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html) | 🛒 | 1 |
| [reBot Arm 102 Leader Arm](https://www.seeedstudio.com/Star-Arm-102-p-6765.html) | 🛒 | 1 |
| [Câmera Monocular de Pulso 720P](https://www.seeedstudio.com/ET-S231-90-USB-Camera-p-6684.html) | 🛒 | 2 |
| [Suporte para Câmera de Pulso](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/camera-mounts/b601-camera-mounts/UVC32_mount.step) | 🛒 | 1 |
| [Suporte Suspenso para Câmera Hikvision](https://item.taobao.com/item.htm?spm=tbpc.boughtlist.suborder_itemtitle.1.49cb2e8dt6KH1K&id=797067194359&mi_id=0000qWvzUV0CAietxWIGsLRo68nEdNUwWmvnKFhXbqbu1Ac) | 🛒 | 1 |


<section className="section-card">
  <p>Nos capítulos anteriores, você utilizou políticas como <strong>ACT (Action Chunking with Transformers)</strong> no reBot Arm para concluir aprendizado por imitação que "olha para uma imagem e gera ações de juntas". Esses métodos geralmente são treinados para uma <strong>única tarefa</strong>: o modelo aprende apenas o comportamento de "colocar o cubo vermelho dentro da caixa", e trocar de tarefa exige coletar dados novamente e retreinar.</p>

  <p>Este capítulo apresenta a ideia central de <strong>VLA (Vision-Language-Action)</strong>: permitir que o robô não apenas "veja", mas também "entenda" instruções em linguagem natural, e compartilhe uma única rede de política entre múltiplas tarefas.</p>

  <div className="image-frame">
    <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-01.png" alt="Visão geral de VLA" />
  </div>
</section>

## 18.1 Modelos Multimodais

<section id="multimodal" className="section-card">
  <div className="section-title">
    <span>Multimodal</span>
    <h2>18.1 O Que é um Modelo Multimodal?</h2>
  </div>

Um modelo multimodal funde mais de um tipo de informação — imagens, texto e estado do robô — em uma única decisão unificada. No contexto de VLA, as três modalidades abaixo são combinadas e decodificadas em ações do robô.

</section>

## 18.2 Visão, Linguagem e Ação

<section id="vla-modalities" className="section-card">
  <div className="section-title">
    <span>Modalidades</span>
    <h2>18.2 Visão, Linguagem e Ação</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-02.png" alt="Visão, linguagem e ação" />
</div>

No framework VLA, as três modalidades têm cada uma uma divisão de trabalho clara:

| Modalidade | Significado | Fonte típica no reBot Arm |
| :--- | :--- | :--- |
| **Visão** | Imagens RGB capturadas por câmeras externas e câmeras de pulso | Câmera frontal, câmera de pulso RealSense / USB |
| **Linguagem** | Descrição em linguagem natural da tarefa | "Coloque a chave de fenda na caixa de ferramentas" |
| **Ação** | Os comandos de controle que o robô deve executar | Ângulos alvo de cada junta, largura de abertura/fechamento do gripper |

**Estado** geralmente aparece em par com Ação: Estado descreve "onde o robô está agora", e Ação descreve "para onde ir em seguida". Em datasets do LeRobot, eles são armazenados nos campos `observation.state` e `action`; no GR00T eles são ainda divididos via `meta/modality.json` em subchaves como `single_arm` e `gripper`.

A principal diferença entre VLA e políticas puramente visuais: **a linguagem se torna uma variável de condicionamento**. Durante o treinamento, cada trajetória de demonstração é vinculada a uma descrição de tarefa; no momento da inferência, o usuário só precisa mudar o texto da instrução, sem alterar os pesos do modelo (dentro da cobertura dos dados).

</section>

## 18.3 Diferença Entre VLM e VLA

<section id="vlm-vla" className="section-card">
  <div className="section-title">
    <span>VLM vs VLA</span>
    <h2>18.3 Diferença Entre VLM e VLA</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-03.png" alt="VLM vs VLA" />
</div>

| Aspecto | VLM (Vision-Language Model) | VLA (Vision-Language-Action) |
| :--- | :--- | :--- |
| Saída | Texto, descrições, resultados de raciocínio | **Sequência de ações do robô** |
| Uso típico | Perguntas e respostas sobre imagens, compreensão de cena, legendagem | Agarrar, posicionar, abrir/fechar portas e outras manipulações |
| Modelos representativos | LLaVA, Qwen-VL, Cosmos-Reason2 | GR00T, pi0, OpenVLA |
| Relação com o robô | Pode auxiliar no planejamento, não aciona motores diretamente | Gera comandos de controle de ponta a ponta |

Pode-se entender de forma simples como: **VLM é responsável por "entender o mundo e falar sobre ele", enquanto VLA é responsável por "entender o mundo e agir".**

Isaac GR00T N1.7 reutiliza arquiteturalmente capacidades de VLM: seu backbone é o **Cosmos-Reason2-2B** (baseado na arquitetura Qwen3-VL, substituindo o backbone Eagle do N1.6), responsável por codificar imagens e linguagem, seguido por uma **cabeça de ação Diffusion Transformer (DiT)** que decodifica representações semânticas em blocos de ações contínuas. Portanto, GR00T é ao mesmo tempo um VLA e incorpora fortes capacidades de representação de VLM.

</section>

## 18.4 Diferença Entre ACT e VLA

<section id="act-vla" className="section-card">
  <div className="section-title">
    <span>ACT vs VLA</span>
    <h2>18.4 Diferença Entre ACT e VLA</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-04.png" alt="ACT vs VLA" />
</div>

O ACT que você encontrou nos capítulos anteriores e o VLA deste capítulo pertencem ambos à família de aprendizado por imitação (Behavior Cloning), mas seus objetivos de projeto são diferentes:

| Aspecto | ACT | VLA (GR00T como exemplo) |
| :--- | :--- | :--- |
| Condição de tarefa | Geralmente **sem linguagem**, tarefa única implícita | **Linguagem + visão**, múltiplas tarefas explícitas |
| Tamanho do modelo | Menor (dezenas de milhões de parâmetros) | Maior (modelo base com bilhões de parâmetros) |
| Método de treinamento | Treinar do zero ou leve fine-tuning | Pré-treinamento de modelo base + fine-tuning downstream |
| Representação de ação | Bloco de ação (action chunk) | Bloco de ação + denoising por Flow Matching |
| Generalização | Bom desempenho dentro da distribuição; retreinar ao trocar de tarefa | Condicionamento por linguagem suporta transferência zero/few-shot |
| Tipo de política no LeRobot | `act` | `groot` |

A técnica central do ACT é o **Action Chunking**: prever múltiplos passos de ação futuros de uma vez para reduzir o erro acumulado da inferência passo a passo. O GR00T também prevê blocos de ação, mas o comprimento da janela varia por versão:

- **N1.5 / N1.6:** `action_horizon = 16`
- **N1.7:** `action_horizon` se expande de 16 para **40**, e a dimensão máxima do espaço geral de estado/ação pré-treinado se expande de forma correspondente (o reBot na prática usa apenas 7 dimensões; as demais dimensões são automaticamente preenchidas com zero)
- **Política `groot` do LeRobot:** fonte com padrão `chunk_size=50`, `n_action_steps=50`

Este tutorial segue o exemplo oficial de fine-tuning do N1.7, usando **`chunk_size=40`** durante o treinamento para alinhar com a janela de ação pré-treinada. Não mantenha 16 — uma janela incompatível degrada os resultados do fine-tuning. `action_horizon` é gravado na cabeça de difusão durante o treinamento e não pode ser ampliado arbitrariamente na inferência.

**Caminho de migração:** se você já possui um dataset ACT para o reBot Arm (formato LeRobot v2), o Capítulo 20 exige apenas adicionar anotações de linguagem e configuração de Modalidade antes que ele possa ser usado para fine-tuning do GR00T, sem precisar recoletar todas as demonstrações.

</section>

## 18.5 Tarefas de Robô Condicionadas por Linguagem

<section id="language-conditioned" className="section-card">
  <div className="section-title">
    <span>Linguagem</span>
    <h2>18.5 Tarefas de Robô Condicionadas por Linguagem</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-05.png" alt="Tarefas de robô condicionadas por linguagem" />
</div>

A forma padrão de uma tarefa condicionada por linguagem é:

```text
Input: image I_t + language instruction L + current state S_t
Output: actions A_{t:t+H} (action chunk for the next H steps)
```

A **granularidade da instrução** pode variar:

- **Nível de tarefa:** "coloque o cubo vermelho na caixa azul" (uma frase compartilhada por toda a trajetória)
- **Nível de subobjetivo:** "primeiro aproxime-se do objeto" -> "depois feche o gripper" (anotação segmentada, cenários avançados)
- **Nível de restrição:** "coloque com cuidado", "evite obstáculos" (modifica como a ação é executada)

Nos conjuntos de dados LeRobot, a linguagem geralmente é escrita em `meta/tasks.jsonl` ou no campo `annotation`. O GR00T a lê por meio da chave `annotation` em `modality.json`; duas formas comuns são:

| Nome da chave | Conjuntos de dados típicos | Recomendação do reBot |
| :--- | :--- | :--- |
| `human.task_description` | SO-100, cube_to_bowl e outras tarefas simples de mesa | **Recomendado**: consistente com o exemplo do Capítulo 20 |
| `human.action.task_description` | LIBERO, SimplerEnv e outros benchmarks de simulação | Use apenas se seus dados vierem desses benchmarks |

Ambas as chaves são válidas, mas devem corresponder aos campos reais no conjunto de dados; não as misture entre treinamento e inferência.

**Orientações práticas (reBot Arm):**

1. Ao gravar cada demonstração, descreva a tarefa em **uma frase curta, começando com verbo**, em chinês ou inglês.
2. Mantenha a formulação consistente para tarefas semelhantes, por exemplo, use de forma uniforme "put X on Y."
3. Evite que um ponto de dado corresponda a múltiplas formulações; quanto mais consistente, melhor durante o ajuste fino inicial.

</section>

## 18.6 Tarefa Única, Multitarefas e Generalização

<section id="generalization-levels" className="section-card">
  <div className="section-title">
    <span>Generalização</span>
    <h2>18.6 Tarefa Única, Multitarefas e Generalização</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-06.png" alt="Tarefa única, multitarefas e generalização" />
</div>

| Paradigma de treinamento | Descrição | Cenários adequados |
| :--- | :--- | :--- |
| **Tarefa única** | Aprende apenas uma habilidade | Padrão do ACT; poucos dados, objetivo claro |
| **Multitarefas** | O mesmo modelo aprende múltiplas habilidades, diferenciadas pela linguagem | Ajuste fino de VLA; organização de mesa, classificação etc. |
| **Generalização entre corpos (cross-embodiment)** | Diferentes robôs compartilham um modelo de base | Pré-treinamento do GR00T; adaptado via `embodiment_tag` |

"Generalização" em VLAs tem vários níveis — não os confunda:

1. **Mesma tarefa, nova pose inicial:** ainda consegue agarrar quando a posição do cubo muda — o ACT geralmente também consegue fazer isso.
2. **Novos objetos, novos recipientes:** depende de generalização visual — requer diversidade suficiente nos dados de treinamento.
3. **Novas combinações de instruções em linguagem:** "put A on B" nunca visto antes, mas o padrão de frase é familiar — a vantagem de condicionamento por linguagem do VLA.
4. **Novo corpo de robô:** ainda utilizável ao trocar de braço — requer a camada de projeção de embodiment do GR00T mais uma pequena quantidade de dados de ajuste fino.

Para usuários do reBot Arm, a expectativa realista é: **após o ajuste fino, você pode alternar entre as múltiplas tarefas em linguagem já coletadas**; para objetos totalmente novos ou padrões de frase totalmente novos, ainda são necessários dados adicionais de demonstração.

</section>

## 18.7 Ações Contínuas e Tokens de Ação

<section id="action-representations" className="section-card">
  <div className="section-title">
    <span>Espaço de ação</span>
    <h2>18.7 Ações Contínuas e Tokens de Ação</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-07.png" alt="Ações contínuas e tokens de ação" />
</div>

Existem duas representações principais para comandos de controle de robô:

### Ações Contínuas

Produz diretamente um vetor de ponto flutuante, por exemplo, 6 ângulos de junta + 1 valor de abrir/fechar do gripper:

```python
action = [q1, q2, q3, q4, q5, q6, gripper]   # shape: (7,)
```

- **Vantagem:** alta precisão, consistente com a interface real do motor.
- **Desvantagem:** regressão em espaço de alta dimensão é difícil.
- **GR00T usa:** DiT + Flow Matching para remover ruído em espaço contínuo, produzindo blocos de ações.

### Tokens de Ação (Ações Discretizadas)

Quantiza valores contínuos em símbolos discretos, como um modelo de linguagem prevendo o próximo token:

```text
action_tokens = [tok_42, tok_17, tok_89, ...]
```

- **Vantagem:** pode reutilizar arquiteturas LLM autorregressivas; adotado por alguns VLAs como o pi0-FAST.
- **Desvantagem:** perda por quantização, design de vocabulário complexo.

**Ações relativas vs. absolutas:**

1. **O núcleo do pré-treinamento do GR00T N1.7 é o espaço de ação Relative EEF (end-effector relativo)**: as ações são representadas como incrementos cartesianos relativos à **pose atual do end-effector**, em vez de incrementos de ângulo de junta. Incrementos do end-effector têm semântica mais consistente entre diferentes robôs (até mesmo vídeo humano), o que é fundamental para a generalização entre corpos do N1.7. O código oficial configura isso por grupo de ação: `eef_9d` usa end-effector relativo, `joint_position` usa junta relativa, e `gripper_position` permanece absoluto.
2. **O `--policy.use_relative_actions=true` do LeRobot** é uma chave em nível de framework: aplica uma transformação relativa de `action - state` às dimensões de junta. Isso **não é o mesmo que** o Relative EEF do artigo, nem é "a recomendação padrão do N1.7." Quando o reBot Arm roda em espaço de juntas (`NON_EEF`), essa chave é apenas uma etapa opcional de pré-processamento do LeRobot; não a descreva como "consistente com o design de pré-treinamento do GR00T."
3. Quantidades que não são de junta, como o gripper, comumente usam `relative_exclude_joints` para manter o controle absoluto. Trajetórias relativas de junta são mais suaves, mas a execução de longo prazo pode sofrer deriva.

</section>

## 18.8 Capacidades e Limitações do VLA

<section id="capabilities" className="section-card">
  <div className="section-title">
    <span>Capacidades</span>
    <h2>18.8 Capacidades e Limitações do VLA</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-08.png" alt="Capacidades e limitações do VLA" />
</div>

### Capacidades

- **Guiado por linguagem:** um modelo, muitas tarefas; altere o comportamento mudando a instrução.
- **Robustez visual:** pré-treinamento em larga escala traz melhor compreensão de cena do que um ACT pequeno.
- **Transferência entre tarefas:** representações podem ser compartilhadas entre padrões de frase semelhantes e objetos semelhantes.
- **Previsão de blocos de ação:** uma inferência produz múltiplos passos, adequado para controle em tempo real (com política de inferência RTC).

### Limitações

- **Alta demanda computacional:** N1.7-3B **recomenda mais de 40 GB de VRAM para ajuste fino** (H100 / L40; treinar apenas o projetor + cabeça DiT atinge pico em torno de 35 GB; o tutorial oficial de ajuste fino em simulação requer ≥ 48 GB). **Inferência** precisa apenas de 16 GB+ (uma RTX 4090 consegue rodar inferência). Ajuste fino completo em uma placa de 24 GB é basicamente inviável, a menos que se use ajuste fino eficiente como LoRA / PEFT.
- **Formato de dados mais complexo:** além dos campos padrão do LeRobot, são necessários um `modality.json` e uma tag de embodiment.
- **Não é uma panaceia:** objetos, instruções e layouts de estação de trabalho não cobertos pelo conjunto de treinamento ainda podem falhar.
- **Latência:** inferência com modelo grande é mais lenta que ACT; configure `n_action_steps` e parâmetros de RTC de forma apropriada.
- **Gap sim-to-real:** os dados de pré-treinamento são dominados por plataformas humanoides/específicas; braços de mesa exigem ajuste fino suficiente.

### Quando Escolher ACT, Quando Escolher VLA?

| Cenário | Recomendação |
| :--- | :--- |
| Tarefa repetitiva única, dispositivo de borda, baixa latência | ACT |
| Multitarefas, interação em linguagem, disposição para investir em GPU e anotação | VLA / GR00T |
| Já possui dados de ACT, quer expandir para multitarefas | Adicione linguagem aos dados LeRobot existentes -> ajuste fino com GR00T |

</section>

## 18.9 Resumo do Capítulo

<section id="summary" className="section-card">
  <div className="section-title">
    <span>Resumo</span>
    <h2>18.9 Resumo do Capítulo</h2>
  </div>

- Modelos multimodais fundem visão, linguagem e estado em decisões unificadas.
- VLA adiciona saída de ação em cima de VLM, suportando manipulação condicionada por linguagem.
- ACT é uma solução leve de tarefa única; GR00T é uma solução VLA de pré-treinamento em larga escala + ajuste fino.
- O pré-treinamento N1.7 usa Relative EEF e `action_horizon=40`; ações relativas de junta no LeRobot são uma etapa opcional de pré-processamento separada — não confunda as duas coisas.
- O próximo capítulo apresenta como aplicar o VLA geral **neste embodiment específico, o reBot Arm**.

</section>

</div>
