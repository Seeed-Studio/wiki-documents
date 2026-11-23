---
description: "Um mergulho profundo em FLUX 3 Action: mecanismos, treinamento, experimentos e escopo de integração com LeRobot v0.7.0."
title: "FLUX 3 Action: Equilibrando Previsão Conjunta Vídeo-Ação e Custo em Tempo de Execução"
hide_title: true
keywords: ["Paper Deep-Dive","FLUX 3 Action","World-Action Models","Joint Video-Action Prediction","Distillation","Real-Time Control","LeRobot"]
slug: /robotics/paper_reading_flux3
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
    "value": "Pré-requisitos: Latência e Fator de Tempo Real",
    "id": "prerequisites-latency-and-real-time-factor",
    "level": 2
  },
  {
    "value": "Afirmações do Relatório e Guia de Leitura",
    "id": "report-claims-and-reading-guide",
    "level": 2
  },
  {
    "value": "Arquitetura: Conectando Movimento e Consequências Visuais",
    "id": "architecture-connecting-motion-and-visual-consequences",
    "level": 2
  },
  {
    "value": "Dados e Interfaces de Corpo (Embodiment)",
    "id": "data-and-embodiment-interfaces",
    "level": 2
  },
  {
    "value": "Treinamento: Além de um Objetivo Conjunto",
    "id": "training-beyond-a-joint-objective",
    "level": 2
  },
  {
    "value": "Guidance Separado",
    "id": "split-guidance",
    "level": 3
  },
  {
    "value": "Média de Pesos e Destilação",
    "id": "weight-averaging-and-distillation",
    "level": 3
  },
  {
    "value": "Experimentos: Mantenha Checkpoints e Protocolos Associados",
    "id": "experiments-keep-checkpoints-and-protocols-attached",
    "level": 2
  },
  {
    "value": "Simulação e Eficiência",
    "id": "simulation-and-efficiency",
    "level": 3
  },
  {
    "value": "Avaliação Física",
    "id": "physical-evaluation",
    "level": 3
  },
  {
    "value": "Integração com LeRobot: Preservar Condições Salvas",
    "id": "lerobot-integration-preserve-saved-conditions",
    "level": 2
  },
  {
    "value": "Conclusão",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-flux3-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · MERGULHO EM ARTIGO</span>
  <h1 id="paper-reading-flux3-title">FLUX 3 Action: Equilibrando Previsão Conjunta Vídeo-Ação e Custo em Tempo de Execução</h1>
  <p className="paper-reading-lead">FLUX 3 Action</p>
  <ul className="paper-reading-badges" aria-label="Tópicos de leitura">
    <li><a href="#architecture-connecting-motion-and-visual-consequences">Vídeo e ações conjuntos</a></li>
    <li><a href="#training-beyond-a-joint-objective">Treinamento e destilação</a></li>
    <li><a href="#experiments-keep-checkpoints-and-protocols-attached">Experimentos</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://bfl.ai/models/flux-3-action" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">Relatório</span><span>Ler o relatório</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Versão de integração e parâmetros">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/flux3" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentação do LeRobot FLUX 3 Action ↗</a>

**Parâmetros do LeRobot**

- `--policy.path=black-forest-labs/flux-3-action-so101` carrega um checkpoint adaptado para SO-101.
- `--config_path=examples/flux3/lora.json` seleciona a receita versionada de adaptação de tarefa.
- A versão SO-101 prevê 42 ações e executa 32 a 30 Hz usando câmeras `scene`/`wrist`.
- O adaptador oferece suporte a inferência e adaptação de tarefa via PEFT; use o repositório independente dos autores para novos corpos (embodiments) e fine-tuning completo.

</aside>

Um robô coloca uma caixa azul em um recipiente. Um modelo conjunto mundo-ação prevê tanto o movimento do braço quanto seu resultado visual, mas a geração de vídeo adiciona computação. **Receitas de treinamento e destilação podem preservar previsões conjuntas úteis enquanto reduzem o custo de execução?**

## Pré-requisitos: Latência e Fator de Tempo Real

Latência mede uma consulta. O fator de tempo real compara seu custo de processamento com o movimento que ela prevê:

$$
\mathrm{RTF}=\frac{\text{processing time}}{\text{predicted motion duration}}.
$$

Em um exemplo didático, 0,4 segundos de computação para dois segundos de movimento dão RTF 0,2, enquanto 0,25 segundos para um segundo dão 0,25. O primeiro tem melhor custo por movimento, mas resposta imediata mais lenta. Replanejamento dinâmico depende dessa diferença.

## Afirmações do Relatório e Guia de Leitura

**Visão geral do relatório.** O modelo de aproximadamente 7B começa com pré-treinamento multimodal pesado em vídeo, continua com mid-training em ações e adapta-se a corpos-alvo. Ele prevê conjuntamente futuros latentes de vídeo e ações contínuas. O relatório estuda formatos de ação, cronogramas de ruído, guidance separado, média de pesos e destilação.

**Nota de leitura.** Checkpoints base, destilados por guidance e de passo único têm precisão e velocidade diferentes. Seus melhores números não podem ser combinados em uma única configuração.

## Arquitetura: Conectando Movimento e Consequências Visuais

Um VAE de vídeo congelado codifica observações e um codificador de texto congelado fornece instruções. O Transformer remove o ruído das representações de vídeo e ação em conjunto. Observações/ações futuras emparelhadas supervisionam o treinamento; observações atuais e linguagem condicionam a implantação.

| Estágio de controle | Exemplo de colocação da caixa |
| --- | --- |
| Observar | Localizar a caixa, o recipiente e o gripper |
| Denoising conjunto | Prever movimento e mudanças visuais esperadas |
| Pós-processar | Restaurar a convenção de controle do corpo |
| Executar | Consumir parte do bloco de ações |
| Observar novamente | Responder aos resultados reais de preensão e colocação |

Pular a decodificação RGB ainda deixa a previsão de latentes futuros no modelo. Isso difere da remoção de tokens de vídeo futuro em tempo de inferência no Fast-WAM.

<figure className="paper-reading-figure" data-reading-figure="flux3/joint-architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/flux3/joint-architecture.svg" alt="Previsão conjunta vídeo-ação em um backbone compartilhado" loading="lazy" />
  <figcaption><strong>Previsão conjunta vídeo-ação em um backbone compartilhado.</strong> Fonte: relatório oficial da Black Forest Labs. Tarefa, histórico visual e estado condicionam camadas compartilhadas que carregam recursos futuros e de ação, que são decodificados separadamente. A destilação altera o custo de amostragem enquanto mantém essa estrutura de previsão conjunta.</figcaption>
</figure>

## Dados e Interfaces de Corpo (Embodiment)

Vídeo responde por mais de 95% dos tokens de pré-treinamento. O mid-training em ações adiciona gameplay, mãos egocêntricas, grippers de mão e teleoperação enquanto mantém dados multimodais. Taxas de amostragem e taxas de tokens representam orçamentos diferentes.

A maior parte dos dados de pose usa EE50: 25 canais por efetuador primário/secundário, incluindo posição, rotação 6D e valores de mão/gripper, com dimensões não usadas preenchidas. Alguns dados usam em vez disso cabeças em espaço de juntas. O adaptador SO-101 usa seis comandos absolutos de junta/gripper com ordem e unidades de estado medido correspondentes; ele não executa os primeiros seis valores EE50.

## Treinamento: Além de um Objetivo Conjunto

Vídeo e ações têm estruturas de sinal/ruído diferentes. O relatório mede o comportamento de reconstrução e ajusta distribuições em tempo de treinamento em vez de assumir dificuldade idêntica no mesmo nível nominal de ruído.

Estudos DROID também variam representação de ação e tamanho de batch. Fine-tuning conjunto com batch maior eventualmente supera o fine-tuning de efetuador final, enquanto cabeças de efetuador final existentes podem ajudar com orçamentos menores. Queda na loss de treinamento não garante melhora no sucesso em malha fechada.

### Guidance Separado

Guidance livre de classificador reforça a diferença entre previsões condicionadas e não condicionadas. O guidance de vídeo e de ação pode ser definido de forma independente. No sweep do relatório, guidance de vídeo 4 e guidance de ação 1 superam o aumento indiscriminado de ambos. Esta é uma configuração empírica para este modelo, não uma constante universal de WAM.

<figure className="paper-reading-figure" data-reading-figure="flux3/split-guidance">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/flux3/split-guidance.svg" alt="Sweep conjunto das escalas de guidance de vídeo e ação" loading="lazy" />
  <figcaption><strong>Sweep conjunto das escalas de guidance de vídeo e ação.</strong> Fonte: relatório oficial da Black Forest Labs. CFG de ação é horizontal e CFG de vídeo vertical. Este sweep completo RoboLab-120 atinge pico em 42,00% com vídeo 4 e ação 1. Maximizar ambos não é o melhor, e este sweep é separado dos resultados multi-seed para checkpoints destilados.</figcaption>
</figure>

### Média de Pesos e Destilação

EMA suaviza pesos ao longo das atualizações de treinamento. Na comparação DROID, pesos brutos marcam 36,50% e o Power EMA online selecionado atinge 42,00%. A integração SO-101 relata benefícios mistos de EMA, exigindo avaliação compatível.

A destilação de guidance ensina a um aluno a previsão guiada do professor, evitando computação condicional/não condicional repetida. A destilação de passos então aproxima a amostragem multi-passos em uma única atualização, aumentando a velocidade com um custo em precisão.

## Experimentos: Mantenha Checkpoints e Protocolos Associados

### Simulação e Eficiência

O relatório fornece aproximadamente 38,3% de sucesso no RoboLab-120 para o checkpoint de passo único e 42,2% para a destilação de guidance. A variante mais rápida não é a variante com maior pontuação. Vantagens de RTF sobre π0.5 dependem de precisão e classe de GPU; GPUs de consumo não compartilham automaticamente o resultado de workstation/datacenter.

O artigo de lançamento dos autores lista separadamente 42,92%. Esse registro de publicação não é substituído por cada configuração do relatório.

### Avaliação Física

A Positronic avalia dez tarefas DROID em uma Franka com três tentativas cada, limite de 240 segundos, condições combinadas e um operador cego. FLUX completa 28/30. Esse protocolo pequeno não estabelece aproximadamente 93% de sucesso em todos os ambientes.

Demonstrações SO-101 mostram objetos, recipientes e posições de câmera alterados. Clipes bem-sucedidos ilustram o comportamento, mas não podem estabelecer uma taxa de sucesso de generalização sem contagem de tentativas e um protocolo correspondente.

## Integração com LeRobot: Preservar Condições Salvas

O checkpoint SO-101 da v0.7.0 carrega condições históricas de estado/ação, oito ticks de observação e dois instantâneos visuais codificados separadamente. Ele prevê 42 ações e executa 32 antes de replanejar, separado das variantes de avaliação de aproximadamente 2,13 segundos do relatório.

```bash
lerobot-train \
  --config_path=examples/flux3/lora.json \
  --policy.path=black-forest-labs/flux-3-action-so101 \
  --dataset.repo_id=YOUR_ORG/YOUR_SO101_DATASET \
  --output_dir=outputs/so101_lora
```

Substitua o placeholder do conjunto de dados. LoRA adapta o tronco enquanto as cabeças de ação/condicionamento são treinadas completamente e salvas. Use chaves `observation.images.scene` e `observation.images.wrist` correspondentes, ou o mesmo mapa de renomeação no treinamento e na execução. Chame a política a cada ciclo de controle para manter o histórico atualizado.

A instalação requer versões compatíveis de PyTorch, CUDA e NATTEN. Alterar histórico, orientação, amostragem ou destilação modifica a configuração experimental mesmo quando o tipo de política permanece o mesmo.

## Conclusão

FLUX 3 Action mantém a predição conjunta de vídeo/ação enquanto ajusta dados, formatos de ação, orientação, média e destilação. Uma avaliação significativa considera em conjunto a duração da predição, o tempo de consulta, o comprimento da execução e a identidade do checkpoint.

</div>
