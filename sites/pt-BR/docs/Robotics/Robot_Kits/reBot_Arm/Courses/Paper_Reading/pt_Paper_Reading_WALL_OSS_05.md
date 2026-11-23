---
description: "Um mergulho profundo em WALL-OSS-0.5: mecanismos, treinamento, experimentos e escopo de integração com o LeRobot v0.7.0."
title: "WALL-OSS-0.5: Conectando Aprendizado Visão-Linguagem e Ações Contínuas"
hide_title: true
keywords: ["Paper Deep-Dive","WALL-OSS-0.5","VLA","Gradient-Bridged Co-Training","RVQ","Flow Matching","LeRobot"]
slug: /robotics/paper_reading_wall_oss_05
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
    "value": "Pré-requisitos: Roteamento e Gradientes",
    "id": "prerequisites-routing-and-gradients",
    "level": 2
  },
  {
    "value": "Resumo e Guia de Leitura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Arquitetura: Contexto Compartilhado, Caminhos Separados",
    "id": "architecture-shared-context-separate-paths",
    "level": 2
  },
  {
    "value": "RVQ: Mais do que Compressão de Trajetória",
    "id": "rvq-more-than-trajectory-compression",
    "level": 2
  },
  {
    "value": "Treinamento Conjunto: Três Sinais Complementares",
    "id": "joint-training-three-complementary-signals",
    "level": 2
  },
  {
    "value": "Supervisão no Espaço de Ação",
    "id": "action-space-supervision",
    "level": 2
  },
  {
    "value": "A Interface de Controle 26D",
    "id": "the-26d-control-interface",
    "level": 2
  },
  {
    "value": "Experimentos: Progresso, Comportamento Zero-Shot e Adaptação",
    "id": "experiments-progress-zero-shot-behavior-and-adaptation",
    "level": 2
  },
  {
    "value": "Comportamento Pré-treinado",
    "id": "pretrained-behavior",
    "level": 3
  },
  {
    "value": "Dados de Fine-Tuning Compatíveis",
    "id": "matched-fine-tuning-data",
    "level": 3
  },
  {
    "value": "Ablations Controladas",
    "id": "controlled-ablations",
    "level": 3
  },
  {
    "value": "Integração com LeRobot e Limites de Treinamento",
    "id": "lerobot-integration-and-training-boundaries",
    "level": 2
  },
  {
    "value": "Conclusão",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-wall_oss_05-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-wall_oss_05-title">WALL-OSS-0.5: Conectando Aprendizado Visão-Linguagem e Ações Contínuas</h1>
  <p className="paper-reading-lead">Relatório Técnico Wall-OSS-0.5</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#joint-training-three-complementary-signals">Ponte de gradiente</a></li>
    <li><a href="#action-space-supervision">Supervisão no espaço de ação</a></li>
    <li><a href="#experiments-progress-zero-shot-behavior-and-adaptation">Experimentos</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2605.30877v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Ler o artigo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/wall_oss_05" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentação do LeRobot WALL-OSS-0.5 ↗</a>

**Parâmetros do LeRobot**

- `--policy.type=wall_oss_05` seleciona esta versão; `wall_x` aponta para uma versão WALL diferente.
- `--policy.path=lerobot/wall-oss-0.5` carrega a base para adaptação ao alvo.
- A versão usa um layout canônico 26D, blocos de 32 passos, normalização q01/q99 e dez passos de Euler.
- O adaptador oferece suporte a ações contínuas e objetivos de texto, mas não expõe o caminho de ação RVQ autorregressivo completo para reproduzir o pré-treinamento conjunto.

</aside>

Um robô organiza blocos por cor e localização. O VLM entende esses conceitos, mas um novo especialista em ações pode não usá-los corretamente. **A supervisão apenas em ações contínuas é suficiente para organizar o backbone em torno do controle?**

## Pré-requisitos: Roteamento e Gradientes

O roteamento no forward seleciona parâmetros de especialistas e tokens visíveis. Os gradientes determinam quais perdas atualizam esses parâmetros. Especialistas separados não implicam automaticamente em gradientes interrompidos.

A entropia cruzada de ações discretas oferece um sinal de aprendizado de ação nativo de VLM, enquanto o flow matching contínuo fornece ações de implantação. O relatório estuda como esses objetivos conectam entendimento a controle.

## Resumo e Guia de Leitura

**Resumo em poucas palavras.** O modelo de aproximadamente 4B estende o Qwen2.5-VL-3B com um especialista em ações, um tokenizador RVQ alinhado à visão e supervisão no espaço de ação. A predição multimodal preserva o grounding, a predição de ações discretas molda o backbone e o flow matching gera trajetórias executáveis.

**Nota de leitura.** Este é um relatório separado 0.5, não a receita de treinamento WALL-OSS mais antiga. Sua principal métrica em robôs reais é o progresso na tarefa, em vez de sucesso em concluir a tarefa.

## Arquitetura: Contexto Compartilhado, Caminhos Separados

Visão, linguagem, estado e ações discretas passam pelo VL Expert; ações contínuas ruidosas passam pelo Action Expert. A atenção compartilhada fornece contexto. Alvos de ações discretas e contínuas são mutuamente invisíveis, evitando vazamento de respostas.

| Objetivo | Papel no treinamento | Papel na implantação |
| --- | --- | --- |
| CE de texto multimodal | Preservar grounding e conhecimento semântico | Entendimento e geração de texto |
| CE de tokens de ação (alvos RVQ) | Tornar o backbone ciente de ações | Principalmente uma ponte de treinamento |
| Flow matching contínuo | Aprender trajetórias com gradientes no backbone | Saída executável padrão |

Para ordenação, a supervisão de texto ensina conceitos de cor/localização, tokens de ação os conectam ao movimento e o especialista contínuo aprende trajetórias numéricas. Estes não são três planejadores de implantação sequenciais.

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/gradient-bridge">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/gradient-bridge.png" alt="Multimodal, discrete-action, and continuous-action co-training" loading="lazy" />
  <figcaption><strong>Treinamento conjunto multimodal, de ações discretas e de ações contínuas.</strong> Fonte: o artigo WALL-OSS-0.5. A entropia cruzada de ações discretas fornece supervisão relacionada a controle para o backbone visão-linguagem; o flow matching treina ações contínuas implantadas. A atenção conjunta conecta os grupos de tokens. Especialização de roteamento e conectividade de gradiente são questões separadas.</figcaption>
</figure>

## RVQ: Mais do que Compressão de Trajetória

A quantização vetorial residual atribui estrutura de movimento grosseira aos primeiros codebooks e correções residuais aos posteriores. Um codificador condicionado à observação comprime ações delta, e um decodificador condicionado ao estado as reconstrói.

Alinhamento visão-ação, predição de próximo frame e reconstrução no domínio DCT incentivam adicionalmente códigos semânticos, cientes de consequências e suaves. A implantação contínua pode se beneficiar dessas representações discretas de treinamento mesmo sem decodificá-las diretamente em controles.

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/vision-aligned-rvq">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/vision-aligned-rvq.png" alt="Residual action quantization with visual-alignment objectives" loading="lazy" />
  <figcaption><strong>Quantização residual de ações com objetivos de alinhamento visual.</strong> Fonte: o artigo WALL-OSS-0.5. Junto com a reconstrução de ações, alinhamento visão-ação e predição de features de contexto futuro moldam códigos semânticos. O preditor de features à direita não sintetiza diretamente imagens futuras da câmera.</figcaption>
</figure>

## Treinamento Conjunto: Três Sinais Complementares

Amostras de ação e multimodais são misturadas em 9:1 com

$$
\mathcal L=\mathcal L_{\mathrm{flow}}+0.01\mathcal L_{\mathrm{act\text{-}CE}}+0.01\mathcal L_{\mathrm{mm\text{-}CE}}.
$$

Os coeficientes de perda equilibram escalas numéricas, não porcentagens de capacidade. Diferente do isolamento por stop-gradient, o relatório mantém gradientes de flow no backbone VL.

O pré-treinamento abrange mais de vinte encarnações e mais de um milhão de trajetórias por época, juntamente com grounding multimodal. Instruções em nível de objetivo e de passo, paráfrases e perturbações de estado reduzem a dependência de uma única formulação ou propriocepção ideal.

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/teaching-gradient-bridge-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/wall-gradient-bridge-en-v2.png" alt="Forward information and backward gradients in block sorting" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>Informação no forward e gradientes no backward na ordenação de blocos.</strong> Ilustração didática gerada por IA. Setas contínuas mostram informação no forward e setas tracejadas mostram caminhos de retropropagação. A entropia cruzada (CE) de tokens de ação prediz autoregressivamente tokens RVQ e fornece a ponte de gradiente para o VL Expert; a CE multimodal ancora o grounding. O flow matching treina ações contínuas com supervisão no espaço de ação, e seus gradientes também alcançam o VL Expert por meio de atenção compartilhada. Máscaras internas de atenção são omitidas; a implantação tem como padrão ações contínuas.</figcaption>
</figure>

## Supervisão no Espaço de Ação

O caminho e a ação reconstruída são

$$
\begin{aligned}
A^\tau &= \tau A+(1-\tau)\epsilon,\\
\hat A &= A^\tau+(1-\tau)f_\theta(A^\tau,\tau).
\end{aligned}
$$

A rede prediz velocidade, mas a perda compara ações reconstruídas e limpas. Isso equivale a um erro de velocidade ponderado por $(1-\tau)^2$. Em $\tau=0.2$ o peso é 0.64; em 0.8 é 0.04, um fator de 16. Este cálculo didático explica a ênfase mais forte na formação de trajetórias com alto ruído, não uma garantia de que qualquer trajetória suave terá sucesso.

## A Interface de Controle 26D

Cada braço contribui com posição relativa 3D, rotação relativa 6D e um canal de garra: 20 dimensões para dois braços. Velocidade da base adiciona três, elevação uma e atuação da cabeça duas. A largura da codificação de rotação é distinta dos graus de liberdade físicos.

Na implantação, ações contínuas são denoised a partir de observações, estado e linguagem sem decodificar ações RVQ. O horizonte de um segundo dependente da fonte no artigo e a configuração de versão de 32 passos do adaptador são ajustes separados.

## Experimentos: progresso, comportamento zero-shot e adaptação

### Comportamento pré-treinado

O conjunto zero-shot contém doze tarefas vistas e cinco reservadas, avaliadas por uma rubrica de progresso predefinida ao longo de dez trajetórias por tarefa. Em 400k, o progresso médio nas tarefas vistas é 50,0, nas reservadas 53,6 e, no geral, 51,1 de 100.

Alcançar e carregar sem um posicionamento final bem-sucedido pode render progresso parcial, mas zero sucesso de tarefa completa. Assim, 51,1 de progresso não pode ser chamado de 51,1% de sucesso. Os grupos visto/reservado também têm dificuldade não correspondente.

### Dados de fine-tuning correspondentes

Quinze tarefas reais usam aproximadamente 500 demonstrações cada e avaliação correspondente:

| Modelo | Manipulação, 10 | Raciocínio, 5 | Geral |
| --- | ---: | ---: | ---: |
| WALL-OSS-0.5 | 61.1 | 59.3 | 60.5 |
| π0.5 | 35.0 | 58.9 | 43.0 |
| DreamZero | 33.7 | 32.7 | 33.4 |

Esses são escores de progresso. A diferença geral do π0.5 é de 17,5 pontos, mas a diferença em raciocínio é de apenas 0,4. A correspondência de objetos e o posicionamento de cestas de frutas ainda favorecem o π0.5.

### Ablations controladas

Na ablation from-scratch em cinco tarefas reais, o co-training obtém 57,00 de progresso em comparação com 36,68 para treinamento flow-plus-multimodal sem action CE, 31,93 para stop-gradient e 49,58 para um aquecimento em duas etapas que primeiro interrompe os gradientes e depois alterna para co-training. Um estudo separado de tokenizer com quatro tarefas melhora o progresso de execução contínua de 29,3 para 48,1 com RVQ. Esses subconjuntos devem permanecer separados da comparação principal de quinze tarefas.

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/bridge-ablation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/bridge-ablation.png" alt="Gradient and co-training ablations from scratch" loading="lazy" />
  <figcaption><strong>Ablations de gradiente e co-training from scratch.</strong> Fonte: o artigo WALL-OSS-0.5. O progresso médio em cinco tarefas físicas é 36,68 apenas para flow, 31,93 com gradientes interrompidos, 49,58 para um aquecimento em duas etapas que primeiro interrompe os gradientes e depois alterna para co-training, e 57,00 para co-training completo. Esses são escores de progresso, não taxas de sucesso de tarefa completa.</figcaption>
</figure>

## Integração com LeRobot e limites de treinamento

A versão 0.7.0 oferece suporte a controle contínuo e geração/treinamento de linguagem. Estados/ações mais estreitos são normalizados e preenchidos até 26D; as saídas são recortadas antes da desnormalização. O preenchimento não converte juntas em coordenadas do efetuador final.

```bash
--policy.path=lerobot/wall-oss-0.5
--policy.device=cuda
--policy.dtype=bfloat16
```

Estes são fragmentos de carregamento para fine-tuning direcionado. Alinhe `camera_key_mapping`, unidades físicas e estatísticas. O caminho completo de treinamento de ações autorregressivo RVQ não é exposto, portanto o fine-tuning de adaptadores não é reprodução do pré-treinamento de três objetivos. Novas interfaces de robô ainda exigem preparação e adaptação.

## Conclusão

WALL-OSS-0.5 usa supervisão de ações discretas para moldar um backbone ciente de controle enquanto preserva o conhecimento multimodal e os gradientes de ações contínuas. A supervisão no espaço de ações enfatiza a reconstrução de alto ruído. Progresso de tarefa, sucesso completo, pré-treinamento original e funcionalidade de adaptadores devem permanecer distintos.

</div>
