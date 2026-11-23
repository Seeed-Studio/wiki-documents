---
description: "Um mergulho profundo em MolmoAct2: mecanismos, treinamento, experimentos e escopo de integração com o LeRobot v0.7.0."
title: "MolmoAct2: Do Aprendizado de Ações Discretas ao Controle Contínuo por Camada"
hide_title: true
keywords: ["Paper Deep-Dive","MolmoAct2","VLA","Layer-Wise KV","Action Tokenization","Continuous Control","LeRobot"]
slug: /robotics/paper_reading_molmoact2
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
    "value": "Pré-requisitos: Duas Representações de Uma Demonstração",
    "id": "prerequisites-two-representations-of-one-demonstration",
    "level": 2
  },
  {
    "value": "Resumo e Guia de Leitura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Por Que Introduzir Ações em Etapas",
    "id": "why-introduce-actions-in-stages",
    "level": 2
  },
  {
    "value": "Dados: Duração Compartilhada, Semânticas de Controle Distintas",
    "id": "data-shared-duration-distinct-control-semantics",
    "level": 2
  },
  {
    "value": "Pré-treinamento Discreto: Ensinando Ações de Robô ao Backbone",
    "id": "discrete-pretraining-teaching-the-backbone-robot-actions",
    "level": 2
  },
  {
    "value": "Pós-treinamento Contínuo: Lendo KV em Cada Camada",
    "id": "continuous-post-training-reading-kv-at-every-layer",
    "level": 2
  },
  {
    "value": "Prevenindo Vazamento de Alvo e Controlando Gradientes",
    "id": "preventing-target-leakage-and-controlling-gradients",
    "level": 3
  },
  {
    "value": "Think: Atualizando Apenas Regiões de Profundidade que Mudaram",
    "id": "think-updating-only-changed-depth-regions",
    "level": 2
  },
  {
    "value": "Experimentos: Comparando Checkpoints com Históricos de Treinamento Diferentes",
    "id": "experiments-comparing-checkpoints-with-different-training-histories",
    "level": 2
  },
  {
    "value": "Integração com LeRobot e Limites dos Resultados",
    "id": "lerobot-integration-and-result-boundaries",
    "level": 2
  },
  {
    "value": "Conclusão",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-molmoact2-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-molmoact2-title">MolmoAct2: Do Aprendizado de Ações Discretas ao Controle Contínuo por Camada</h1>
  <p className="paper-reading-lead">MolmoAct2: Modelos de Raciocínio sobre Ações para Implantação no Mundo Real</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#discrete-pretraining-teaching-the-backbone-robot-actions">Discreto para contínuo</a></li>
    <li><a href="#continuous-post-training-reading-kv-at-every-layer">KV por camada</a></li>
    <li><a href="#think-updating-only-changed-depth-regions">Profundidade adaptativa</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2605.02881v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Ler o artigo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/molmoact2" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentação do LeRobot MolmoAct2 ↗</a>

**Parâmetros do LeRobot**

- `--policy.type=molmoact2 --policy.checkpoint_path=allenai/MolmoAct2` inicializa a partir do formato dos autores.
- `--policy.path=allenai/MolmoAct2-LIBERO-LeRobot` carrega um checkpoint e processadores LeRobot salvos.
- LIBERO usa `--policy.chunk_size=10 --policy.n_action_steps=10` com controle relativo do efetuador final.
- O adaptador oferece suporte ao MolmoAct2 padrão, não à variante MolmoAct2-Think com profundidade adaptativa.

</aside>

Um robô deve colocar o copo mais próximo de uma tigela dentro dela. Entender a relação espacial e produzir movimento preciso são requisitos diferentes. **Como um controlador contínuo pode usar de forma confiável o conhecimento já presente em um backbone de visão e linguagem?**

## Pré-requisitos: Duas Representações de Uma Demonstração

Tokens de ação discretos permitem que um modelo de linguagem aprenda trajetórias por meio de predição do próximo token. Ações contínuas preservam valores numéricos de controle para flow matching. Elas podem supervisionar a mesma demonstração sem se tornarem controladores sequenciais de implantação.

Chaves e valores de atenção, ou KV, codificam contexto em cada camada. Lê-los ao longo da rede dá a um especialista em ações acesso a mais do que um único recurso final agregado.

## Resumo e Guia de Leitura

**Resumo em poucas palavras.** MolmoAct2 fortalece o entendimento incorporado, aprende uma interface discreta de robô e depois adiciona um especialista contínuo de fluxo. Ele disponibiliza dados multi-embodiment, um tokenizador de ações, código e modelos, e estuda uma variante de raciocínio sobre profundidade que reutiliza regiões espaciais inalteradas.

**Nota de leitura.** O MolmoAct2 padrão e o Think são caminhos de inferência diferentes. A geração intermediária de profundidade deste último não é uma capacidade de todo checkpoint nem do adaptador LeRobot versionado.

## Por Que Introduzir Ações em Etapas

Ajustar conjuntamente uma nova interface de estado, codificação de ação e um especialista contínuo aleatório é um problema de otimização difícil. O pré-treinamento discreto primeiro torna o VLM ciente de ações usando seu objetivo familiar. O especialista posterior pode então aprender controle contínuo a partir de um backbone ciente de robôs.

KV por camada difere do condicionamento na camada final. O isolamento de conhecimento também depende da etapa: pós-treinamento e fine-tuning específico de embodiment usam configurações de gradiente diferentes.

## Dados: Duração Compartilhada, Semânticas de Controle Distintas

As principais fontes de robô são YAM bimanual, SO-100/101 e DROID, complementadas por conjuntos de dados de robôs menores e exemplos multimodais. QA espacial, apontamento, correspondência multi-view e entendimento de vídeo fornecem grounding incorporado.

Blocos de ações cobrem um segundo: 30 passos para YAM/SO-100/101 a 30 Hz, 15 para DROID e 10 para a configuração LIBERO de 10 Hz do artigo. As ações são preenchidas até largura 32, com máscaras excluindo dimensões e passos de tempo artificiais. Strings de configuração/controle distinguem juntas absolutas de poses relativas do efetuador final; o preenchimento não torna seus significados físicos intercambiáveis.

## Pré-treinamento Discreto: Ensinando Ações de Robô ao Backbone

O tokenizador no estilo FAST transforma trajetórias para o domínio da frequência, quantiza coeficientes e aplica BPE com um vocabulário de ações de 2.048 tokens. Canais contínuos usam estatísticas de percentil, garras recebem tratamento separado e o estado discretizado entra no prompt.

O VLM lê observações, instruções, descrições de configuração/controle e estado, depois prediz tokens de ação. Esta etapa não tem especialista contínuo. O co-treinamento multimodal ajuda a preservar uma competência mais ampla em visão e linguagem.

## Pós-treinamento Contínuo: Lendo KV em Cada Camada

O especialista DiT de 36 camadas corresponde à profundidade do backbone. Seus blocos aplicam auto-atenção de ação, atenção cruzada a KV projetado da camada VLM correspondente e uma transformação feed-forward.

| Caminho | Papel na tarefa do copo |
| --- | --- |
| Imagens, linguagem, estado → VLM | Representar o copo alvo, a tigela e o robô |
| KV de camada → projeção → atenção cruzada | Fornecer contexto ao longo de toda a geração de ações |
| Ações ruidosas → especialista de fluxo | Coordenar a trajetória ao longo do tempo |
| Ações → pós-processador | Restaurar unidades de controle |

Para o bloco de demonstração $A$ e ruído $\epsilon$,

$$
X_t=(1-t)\epsilon+tA,\qquad u^\star=A-\epsilon.
$$

A perda de fluxo mascarada treina o preditor de velocidade. Em um exemplo didático com alvo 0,6 e ruído −0,2, o ponto médio é 0,2 e a velocidade alvo é 0,8. Esta é a velocidade ao longo do caminho generativo normalizado, não um comando de velocidade de motor.

<figure className="paper-reading-figure" data-reading-figure="molmoact2/layerwise-kv">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/molmoact2/layerwise-kv.png" alt="Condicionamento KV do backbone por camada para o especialista em ações" loading="lazy" />
  <figcaption><strong>Condicionamento KV do backbone por camada para o especialista em ações.</strong> Fonte: o artigo MolmoAct2. Cada camada do especialista lê chaves e valores projetados do backbone. Supervisão discreta e flow matching contínuo cumprem papéis diferentes; tokens de ação alvo são mascarados do caminho de condicionamento contínuo para evitar vazamento.</figcaption>
</figure>

### Prevenindo Vazamento de Alvo e Controlando Gradientes

O pós-treinamento supervisiona saídas discretas e contínuas, mas mascara tokens de ação ground truth do contexto do especialista. Caso contrário, o controlador poderia aprender a partir de respostas indisponíveis na implantação.

O pós-treinamento desacopla KV: a perda de fluxo treina o especialista e os adaptadores, enquanto a perda de próximo token treina o VLM. O fine-tuning específico de embodiment remove esse isolamento e permite gradientes de fluxo no backbone. Portanto, o VLM não fica congelado em todo o pipeline.

## Think: Atualizando Apenas Regiões de Profundidade que Mudaram

Think gera uma grade de 10×10 tokens de profundidade antes das ações. A primeira consulta preenche todas as 100 posições. Consultas posteriores comparam regiões RGB atuais e anteriores, regeneram células alteradas e reproduzem códigos em cache para células inalteradas.

O prefixo de profundidade preenchido condiciona o especialista por meio de KV. Copos e garras em movimento podem acionar atualizações enquanto o fundo estático é reutilizado. Estes são códigos de profundidade previstos, não medições de sensor garantidas, e a detecção de mudanças ainda pode falhar.

<figure className="paper-reading-figure" data-reading-figure="molmoact2/adaptive-depth">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/molmoact2/adaptive-depth.png" alt="Raciocínio de profundidade adaptativa com reutilização de regiões estáticas" loading="lazy" />
  <figcaption><strong>Raciocínio de profundidade adaptativa com reutilização de regiões estáticas.</strong> Fonte: o artigo MolmoAct2. Códigos de profundidade são atualizados onde as observações mudam antes de condicionar ações por meio de conexões KV. Isto representa a variante Think; a política comum e a integração com LeRobot não executam automaticamente esse raciocínio.</figcaption>
</figure>

## Experimentos: Comparando Checkpoints com Históricos de Treinamento Diferentes

O resultado versionado do LeRobot começa a partir do checkpoint LIBERO dos autores e realiza mais 10k passos de fine-tuning em oito GPUs H100 com batch 32 por GPU.

| Conjunto LIBERO | Resultado original | Checkpoint LeRobot adicionalmente treinado |
| --- | ---: | ---: |
| Espacial | 97.8% | 98.4% |
| Objeto | 100.0% | 100.0% |
| Objetivo | 97.8% | 98.0% |
| Longo / 10 | 93.2% | 96.6% |
| Média | 97.20% | 98.25% |

Estas são taxas de sucesso de tarefa completa. A diferença de 1,05 ponto não pode ser atribuída apenas à conversão de formato porque o treinamento mudou. A maior diferença ocorre no conjunto longo.

Embodied QA, raciocínio de profundidade e ações em malha fechada testam capacidades diferentes. A identificação correta do alvo não garante uma pega bem-sucedida, e o custo de geração de geometria do Think deve ser medido separadamente da inferência de ação comum.

## Integração com LeRobot e Limites dos Resultados

A versão 0.7.0 oferece suporte a treinamento e avaliação padrão. Use `checkpoint_path` para pesos HF originais e `policy.path` para diretórios de políticas LeRobot salvas.

Para LIBERO, combine o `norm_stats.json` lançado, a ordem das câmeras, a augmentação, o tratamento do gripper e o modo de controle. Quantis aproximados do conjunto de dados não são idênticos às estatísticas dos autores. Os sinais das juntas e os deslocamentos de zero do SO-100/101 também exigem uma conversão de referencial físico; o padding não pode realizá-la.

```bash
--policy.type=molmoact2
--policy.checkpoint_path=allenai/MolmoAct2
--policy.action_mode=continuous
--policy.norm_tag=libero
--policy.chunk_size=10
--policy.n_action_steps=10
```

Estes são fragmentos de treinamento que exigem dados, estatísticas e configurações de imagem correspondentes. Estude o Think por meio da implementação dos autores; o nome de política comum não o habilita nesta versão.

## Conclusão

MolmoAct2 primeiro estabelece uma interface discreta de robô e depois transfere o contexto visual-linguístico para ações contínuas por meio de KV por camada. A máscara de alvo e os gradientes específicos de estágio explicam como ele aprende. A implantação deve distinguir entre modelos padrão e Think e entre checkpoints de adaptador originais e adicionalmente treinados.

</div>
