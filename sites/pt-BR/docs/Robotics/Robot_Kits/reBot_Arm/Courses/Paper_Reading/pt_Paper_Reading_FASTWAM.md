---
description: "Um mergulho profundo em Fast-WAM: mecanismos, treinamento, experimentos e escopo de integração com o LeRobot v0.7.0."
title: "Fast-WAM: Aprendendo com vídeo futuro sem gerá-lo na execução"
hide_title: true
keywords: ["Paper Deep-Dive","Fast-WAM","World-Action Models","Video Co-Training","Direct Action Inference","LeRobot"]
slug: /robotics/paper_reading_fastwam
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
    "value": "Pré-requisitos: aprender com o futuro versus gerá-lo",
    "id": "prerequisites-learning-from-the-future-versus-generating-it",
    "level": 2
  },
  {
    "value": "Resumo e guia de leitura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Por que as variantes controladas importam",
    "id": "why-the-controlled-variants-matter",
    "level": 2
  },
  {
    "value": "Arquitetura: ações leem apenas a observação atual",
    "id": "architecture-actions-read-only-the-current-observation",
    "level": 2
  },
  {
    "value": "Treinamento e inferência",
    "id": "training-and-inference",
    "level": 3
  },
  {
    "value": "Dados: o que significa “sem pré-treinamento incorporado”",
    "id": "data-what-without-embodied-pretraining-means",
    "level": 2
  },
  {
    "value": "Experimentos: evidências para remover a geração de futuro",
    "id": "experiments-evidence-for-removing-future-generation",
    "level": 2
  },
  {
    "value": "Integração com LeRobot e limites dos resultados",
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-fastwam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-fastwam-title">Fast-WAM: Aprendendo com vídeo futuro sem gerá-lo na execução</h1>
  <p className="paper-reading-lead">Fast-WAM: modelos mundo-ação precisam de imaginação de futuro em tempo de teste?</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#data-what-without-embodied-pretraining-means">Co-treinamento de vídeo</a></li>
    <li><a href="#architecture-actions-read-only-the-current-observation">Inferência direta de ação</a></li>
    <li><a href="#experiments-evidence-for-removing-future-generation">Experimentos</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2603.16666v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Ler o artigo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/fastwam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentação do LeRobot Fast-WAM ↗</a>

**Parâmetros do LeRobot**

- `--policy.type=fastwam` seleciona a política de treinamento; use `--policy.path` para pesos treinados.
- `--policy.path=lerobot/fastwam_libero_uncond_2cam224` carrega o checkpoint LIBERO documentado.
- `action_horizon` controla o comprimento da predição; `n_action_steps` controla quantas ações são consumidas antes do replanejamento e não pode excedê-lo.
- A partir do checkout do código-fonte, instale com `pip install -e ".[fastwam,libero]"`. Veja o guia versionado para os comandos completos de avaliação.

</aside>

Um robô que dobra toalhas poderia gerar um vídeo da próxima dobra antes de escolher os movimentos do braço. Isso adiciona remoção de ruído de vídeo a cada consulta de controle. **A predição de futuro ajuda porque o modelo aprendeu mudança física durante o treinamento, ou porque ele imagina explicitamente o futuro enquanto age?** Fast-WAM separa esses fatores.

## Pré-requisitos: aprender com o futuro versus gerá-lo

A supervisão por vídeo futuro molda os parâmetros do modelo durante o treinamento. A geração de futuro realiza computação adicional durante a implantação. Pular a decodificação RGB ainda permite a predição de latentes futuros; o Fast-WAM padrão vai além e não instancia tokens de vídeo futuro na inferência.

## Resumo e guia de leitura

**Resumo em breve.** Fast-WAM co-treina vídeo e ações, mas gera ações diretamente a partir de representações visuais atuais na implantação. Variantes controladas de remoção conjunta de ruído, vídeo-depois-ação e sem-treinamento-de-vídeo separam a supervisão da imaginação em tempo de inferência. Nos cenários testados, remover o treinamento de vídeo causa a maior perda de desempenho.

**Nota de leitura.** Este é um resultado condicional sobre os modelos e tarefas avaliados. Ele não estabelece que condicionamento ao futuro seja desnecessário para todo problema dinâmico ou fora da distribuição, e o backbone de vídeo continua fazendo parte da política.

## Por que as variantes controladas importam

Modelos mundo-ação convencionais ou predizem vídeo antes das ações ou removem ruído de ambos conjuntamente. Ambos combinam supervisão de vídeo em tempo de treinamento com geração de futuro em tempo de implantação. Um framework compartilhado que altera atenção e supervisão de vídeo torna seus efeitos individuais mais fáceis de avaliar do que uma comparação entre modelos não relacionados.

## Arquitetura: ações leem apenas a observação atual

O modelo reutiliza o DiT de vídeo, VAE e codificador de texto do Wan2.2-5B, adicionando um especialista de ação de aproximadamente 1B, para cerca de 6B parâmetros no total. Um padrão estruturado de atenção MoT conecta os ramos.

| Grupo de tokens | Acesso no treinamento | Mantido na implantação? |
| --- | --- | --- |
| Observação atual limpa | Âncora visual atual e linguagem | Sim; contexto visual computado uma vez |
| Vídeo futuro ruidoso | Âncora atual e grupo de vídeo futuro | Não |
| Bloco de ação ruidoso | Âncora atual, linguagem e ações | Sim; remoção iterativa de ruído de ação |

As ações não podem prestar atenção a tokens de vídeo futuro, e a âncora limpa não lê os outros grupos. Isso evita uma dependência do treinamento de ações em informação futura que desaparece na implantação.

No exemplo da toalha, a supervisão de vídeo ensina como mover um canto altera o pano. O ramo de ação sempre aprende seu movimento a partir da toalha atual e da instrução. Parâmetros compartilhados transferem estrutura útil sem fornecer o futuro como entrada de ação.

<figure className="paper-reading-figure" data-reading-figure="fastwam/architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fastwam/architecture.png" alt="Ramos de vídeo e ação durante o co-treinamento" loading="lazy" />
  <figcaption><strong>Ramos de vídeo e ação durante o co-treinamento.</strong> Fonte: o artigo do Fast-WAM. O treinamento prediz latentes de vídeo futuro e blocos de ação a partir de linguagem e observações atuais. A máscara de atenção determina se as ações podem ler o futuro; desenhar ambos os ramos não implica por si só essa dependência.</figcaption>
</figure>

### Treinamento e inferência

O objetivo combina perdas de fluxo de vídeo e de ação:

$$
\mathcal L=\lambda_v\mathcal L_{\mathrm{video}}+\lambda_a\mathcal L_{\mathrm{action}}.
$$

A remoção de ruído de vídeo molda representações dinâmicas; a remoção de ruído de ação reconstrói demonstrações. A implantação executa observação atual → uma codificação visual → remoção de ruído de ação → execução parcial → nova observação. Um horizonte de predição de 32 passos não exige executar todos os 32 passos antes de replanejar.

<figure className="paper-reading-figure" data-reading-figure="fastwam/attention-masks">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fastwam/attention-masks.png" alt="Dependências de atenção no treinamento e na inferência" loading="lazy" style={{maxWidth: "380px", marginInline: "auto"}} />
  <figcaption><strong>Dependências de atenção no treinamento e na inferência.</strong> Fonte: o artigo do Fast-WAM. As linhas são consultas e as colunas são chaves legíveis. As ações leem o quadro atual e as ações, mas não quadros futuros. Remover tokens futuros na inferência preserva esse caminho de condicionamento, separando a supervisão de vídeo da geração de vídeo em tempo de execução.</figcaption>
</figure>

## Dados: o que significa “sem pré-treinamento incorporado”

O backbone parte de pesos de vídeo pré-treinados. A ausência de pré-treinamento incorporado no artigo significa que não há uma etapa adicional de grande pré-treinamento em ações de robô, não inicialização aleatória.

As avaliações cobrem LIBERO, RoboTwin 2.0 limpo e randomizado, e uma tarefa real de dobrar toalhas com um Galaxea R1 Lite. A tarefa real usa 60 horas de teleoperação e 30 mil passos de treinamento por modelo, relatando tanto sucesso quanto tempo de conclusão.

## Experimentos: evidências para remover a geração de futuro

| Método de framework compartilhado | Média LIBERO | Média RoboTwin |
| --- | ---: | ---: |
| Fast-WAM | 97,6% | 91,8% |
| Remoção conjunta de ruído de vídeo/ação | 98,5% | 90,6% |
| IDM vídeo-depois-ação | 98,0% | 91,3% |
| Sem co-treinamento de vídeo | 93,5% | 83,8% |

Estas são taxas de sucesso do artigo em benchmarks separados. A inferência direta de ação fica abaixo das variantes que geram futuro no LIBERO e ligeiramente acima delas no RoboTwin. Remover o treinamento de vídeo produz a perda mais consistente: 4,1 e 8,0 pontos percentuais, respectivamente. As evidências apoiam a supervisão de vídeo em vez de uma superioridade universal de acurácia para inferência direta.

RoboTwin usa 100 tentativas por tarefa para cada configuração limpa/randomizada. Uma tentativa conta como bem-sucedida apenas após completar a tarefa, e médias podem esconder tarefas individuais difíceis.

Para dobragem, sucesso eventual sozinho pode ocultar repetidas preensões fracassadas. O tempo de conclusão mede se a execução é eficiente. A latência de inferência relatada de aproximadamente 190 ms pertence à configuração de medição dos autores; ela não é a frequência de controle do motor.

## Integração com LeRobot e limites dos resultados

A versão 0.7.0 consome imagens, estado, ações e instruções. As visões de câmera são concatenadas horizontalmente e devem corresponder a `image_size`. O checkpoint usa pré-processamento visual externo `IDENTITY` porque o modelo redimensiona imagens internamente; aplicar ambas as transformações normalizaria duas vezes.

O checkpoint documentado obtém 97,6%, 99,0%, 95,0% e 94,0% nas quatro suítes LIBERO: 96,4% em 2.000 episódios. A média de 97,6% do artigo é um resultado experimental diferente.

Os fragmentos de parâmetros de avaliação são:

```bash
--policy.path=lerobot/fastwam_libero_uncond_2cam224
--policy.dtype=float32
--policy.n_action_steps=10
--env.type=libero
--env.task=libero_10
--eval.n_episodes=50
```

Uma avaliação completa percorre todas as quatro suítes e suas tarefas com renderização correspondente, processamento do gripper, sementes e limites de episódios.

## Conclusão

Fast-WAM separa um sinal de treinamento útil de computação recorrente de implantação. Sua máscara impede vazamento futuro, e suas variantes controladas mostram maior benefício em reter o treinamento em vídeo do que em reter a geração de vídeo nos cenários testados. A distribuição de tarefas e as condições de latência definem o escopo dessa conclusão.

</div>
