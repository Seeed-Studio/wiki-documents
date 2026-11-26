---
description: "Um mergulho profundo em Long-WAM: mecanismos, treinamento, experimentos e escopo de integração do LeRobot v0.7.0."
title: "Long-WAM: Tornando o Histórico Visual Útil para Predição e Controle"
hide_title: true
keywords: ["Paper Deep-Dive","Long-WAM","World-Action Models","Long Context","Inverse Dynamics","Real-Time Control","LeRobot"]
slug: /robotics/paper_reading_long_wam
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
    "value": "Pré-requisitos: Histórico, Predição e Execução",
    "id": "prerequisites-history-prediction-and-execution",
    "level": 2
  },
  {
    "value": "Resumo e Guia de Leitura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Por que a Inicialização por Vídeo Importa",
    "id": "why-video-initialization-matters",
    "level": 2
  },
  {
    "value": "Pré-treinamento em Vídeo: Prevendo Mudanças a Partir do Passado",
    "id": "video-pretraining-predicting-change-from-the-past",
    "level": 2
  },
  {
    "value": "Arquitetura: Como Passado e Futuro Chegam ao Controlador",
    "id": "architecture-how-past-and-future-reach-the-controller",
    "level": 2
  },
  {
    "value": "Futuros de Treinamento e Futuros de Implantação",
    "id": "training-futures-and-deployment-futures",
    "level": 3
  },
  {
    "value": "Tempo de Execução: Reduzindo o Custo do Histórico",
    "id": "runtime-reducing-the-cost-of-history",
    "level": 2
  },
  {
    "value": "Experimentos: Separando Efeitos de Histórico, Futuro e Sistema",
    "id": "experiments-separating-history-future-and-systems-effects",
    "level": 2
  },
  {
    "value": "Inicialização e Contexto",
    "id": "initialization-and-context",
    "level": 3
  },
  {
    "value": "Condicionamento no Futuro e Tarefas Dinâmicas",
    "id": "future-conditioning-and-dynamic-tasks",
    "level": 3
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-long_wam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-long_wam-title">Long-WAM: Tornando o Histórico Visual Útil para Predição e Controle</h1>
  <p className="paper-reading-lead">Long-WAM: Ampliando o Contexto dos World-Action Models</p>
  <ul className="paper-reading-badges" aria-label="Tópicos de leitura">
    <li><a href="#video-pretraining-predicting-change-from-the-past">Histórico visual</a></li>
    <li><a href="#architecture-how-past-and-future-reach-the-controller">Predição e ações</a></li>
    <li><a href="#runtime-reducing-the-cost-of-history">Execução em tempo real</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2610.10528v1" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Ler o artigo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Versão de integração e parâmetros">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/longwam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentação do LeRobot Long-WAM ↗</a>

**Parâmetros do LeRobot**

- `--policy.path=Efficient-Large-Model/Long-WAM-LIBERO-IDM-LeRobot` carrega pesos de prever-e-depois-agir.
- `past_obs_steps=48` conta tics de controle passados, não ações futuras.
- `inference_action_horizon=80` e `n_action_steps=10` distinguem o comprimento da predição do comprimento da execução.
- Chame `select_action` a cada tic de controle, inclusive enquanto consome ações em fila. A integração versionada valida inferência síncrona.

</aside>

Um copo se move para a esquerda em uma esteira. Uma imagem o localiza; várias imagens revelam seu movimento. Em outra tarefa, um robô já removeu um copo de um armário, mas a visão atual se assemelha à cena inicial. O histórico identifica a próxima fase. **Aceitar mais histórico faz automaticamente com que uma política o utilize?**

## Pré-requisitos: Histórico, Predição e Execução

O histórico contém observações antes de uma decisão; a predição cobre o futuro; a execução determina quando o robô replaneja. A 20 Hz, 48 tics de controle passados abrangem 2,4 segundos e 10 ações executadas abrangem 0,5 segundo. Nenhum deles determina o horizonte de predição, e quadros de vídeo podem ser amostrados com um passo separado.

<figure className="paper-reading-figure" data-reading-figure="long_wam/teaching-history-future-feedback-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/long-wam-history-future-feedback-en-v2.png" alt="Histórico observado, futuro previsto e feedback da execução real" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>Histórico observado, futuro previsto e feedback da execução real.</strong> Ilustração didática gerada por IA da variante de modelagem de dinâmica inversa (IDM). O histórico de vídeo observado e os latentes de vídeo futuros parcialmente denoised condicionam conjuntamente as ações. A remoção de ruído do vídeo futuro para em um nível de ruído diferente de zero, sem decodificação de pixels. O condicionamento por linguagem e estado do robô é omitido para clareza. Somente novas observações da execução real entram no histórico observado; futuros previstos não são observações passadas.</figcaption>
</figure>

## Resumo e Guia de Leitura

**Resumo em poucas palavras.** Long-WAM aprende dependências de histórico-para-futuro por meio de pré-treinamento autoregressivo em vídeo e depois preserva essa estrutura causal durante a adaptação para ações. As ações usam tanto o histórico observado quanto latentes de futuro previstos. Codificação em streaming, execução assíncrona e otimizações de hardware reduzem o custo em tempo de execução.

**Nota de leitura.** Uma janela de entrada mais longa e a capacidade de explorar o histórico são coisas diferentes. Da mesma forma, o sistema de implantação original e um adaptador síncrono do LeRobot têm capacidades validadas diferentes.

## Por que a Inicialização por Vídeo Importa

Geração bidirecional de vídeo pode ler tanto quadros anteriores quanto posteriores. O controle de robôs deve inferir o que vem a seguir a partir de observações já disponíveis. Adicionar histórico apenas durante o ajuste fino para ações não ensina necessariamente uma dependência temporal eficaz.

Ao contrário do Fast-WAM padrão, Long-WAM mantém condições de futuro previstas. Diferente de simplesmente estender um buffer de contexto, ele aprende causalidade temporal durante o pré-treinamento em vídeo.

## Pré-treinamento em Vídeo: Prevendo Mudanças a Partir do Passado

LongLive2.0-Robot continua a partir de um checkpoint autoregressivo LongLive-2.0 usando vídeo de robô e egocêntrico sem exigir um espaço de ações comum. Atenção bloco-causal permite que cada bloco-alvo leia seu contexto anterior genuíno.

Teacher forcing supervisiona múltiplos blocos em paralelo. Perturbações de erro em buffer ensinam recuperação de erros de histórico que se assemelham a condições de rollout. O histórico fornece a condição; o vídeo futuro fornece a supervisão. A imagem de condição limpa é excluída do alvo de remoção de ruído.

## Arquitetura: Como Passado e Futuro Chegam ao Controlador

Consultas de vídeo leem seus próprios blocos visuais e os anteriores, nunca ações. Consultas de ação leem o histórico, latentes de futuro parcialmente denoised e todo o bloco de ações.

| Estágio IDM | Entrada | Resultado |
| --- | --- | --- |
| Prever latentes futuros | Histórico, instrução e condição de estado | Dinâmica antecipada |
| Prefill visual | Latentes observados e previstos | Chaves e valores visuais por camada |
| Remoção de ruído das ações | Cache visual, estado e ruído de ação | Bloco de ações contínuas |
| Feedback | Execução recém-observada | Histórico genuíno atualizado |

IDM infere ações depois de prever a mudança visual. Nenhuma decodificação RGB futura é necessária. A configuração V4 do artigo interrompe a remoção de ruído do vídeo em $\sigma_\star=0.9$ e reutiliza o cache visual resultante durante a geração de ações.

<figure className="paper-reading-figure" data-reading-figure="long_wam/overview">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/overview.png" alt="Do pré-treinamento causal em vídeo a ações condicionadas ao histórico" loading="lazy" />
  <figcaption><strong>Do pré-treinamento causal em vídeo a ações condicionadas ao histórico.</strong> Fonte: o artigo do Long-WAM. O pipeline inferior distingue histórico observado, futuros imaginados e o especialista em ações; o cache de KV preserva o contexto histórico. A implantação ainda precisa de novas observações reais em vez de tratar previsões como eventos que já aconteceram.</figcaption>
</figure>

### Futuros de Treinamento e Futuros de Implantação

O treinamento primeiro otimiza o flow matching de vídeo e depois condiciona o treinamento de ações em latentes de futuro de verdade com ruído progressivo para frente. A implantação substitui futuros previstos. A passagem de ação destaca o cache visual, atualizando o especialista em ações e o adaptador proprioceptivo enquanto o objetivo de vídeo treina o preditor.

Essa escolha de gradiente difere da máscara direta que impede o vídeo de ler ações. A informação de futuro previsto também deve permanecer distinta das observações reais no próximo ciclo de controle.

## Tempo de Execução: Reduzindo o Custo do Histórico

Um VAE em streaming codifica observações recebidas de forma incremental em vez de recomputar todo o histórico. Execução assíncrona prepara outro bloco enquanto o robô consome o atual.

Com uma sobreposição de $O$ tics e duração de tic $\Delta t$, uma transferência oportuna requer

$$
T_{\mathrm{ready}}\leq O\Delta t.
$$

Um prazo perdido ocasional pode causar espera mesmo quando a inferência média é rápida. Os 107,4 ms reportados em uma RTX 5090 incluem predição de latentes futuros na configuração otimizada do artigo; não é uma latência universal de dispositivo ou adaptador.

<figure className="paper-reading-figure" data-reading-figure="long_wam/streaming-execution">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/streaming-execution.png" alt="Transferência assíncrona com streaming e codificação de janela completa" loading="lazy" />
  <figcaption><strong>Transferência assíncrona com streaming e codificação de janela completa.</strong> Fonte: o artigo Long-WAM. O streaming codifica observações à medida que chegam, enquanto a codificação de janela completa atrasa as transferências. Ambos os agendamentos usam o mesmo intervalo nominal de gatilho e sobreposição. O diagrama ilustra esperas de agendamento reduzidas, não um ganho de taxa de sucesso medido separadamente.</figcaption>
</figure>

## Experimentos: Separando efeitos de histórico, futuro e sistema

### Inicialização e contexto

O artigo compara inicialização de vídeo bidirecional, autoregressiva geral e autoregressiva específica do domínio de robôs. O desempenho do RoboCasa GR-1 com contexto longo atinge 78,7%; a inicialização autoregressiva se beneficia mais do histórico, enquanto a inicialização bidirecional não apresenta a mesma melhoria líquida. O comprimento útil do histórico depende da tarefa.

<figure className="paper-reading-figure" data-reading-figure="long_wam/context-scaling">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/context-scaling.png" alt="Escalonamento de contexto sob diferentes inicializações de vídeo" loading="lazy" />
  <figcaption><strong>Escalonamento de contexto sob diferentes inicializações de vídeo.</strong> Fonte: o artigo Long-WAM. Configurações discretas de contexto são plotadas com espaçamento igual. A inicialização causal de robô atinge o pico em 2,4 segundos no LIBERO-Long e 19,2 segundos no RoboCasa. Janelas mais longas não continuam melhorando o sucesso, e a inicialização bidirecional não obtém os mesmos ganhos.</figcaption>
</figure>

### Condicionamento no futuro e tarefas dinâmicas

| Configuração do artigo | Média LIBERO | LIBERO-Long | Média RoboTwin |
| --- | ---: | ---: | ---: |
| Sem predição de futuro | 97,3% | 94,5% | 92,0% |
| Co-denoising conjunto | 97,8% | 95,8% | 93,6% |
| IDM | 99,5% | 99,5% | 94,4% |

Estas são taxas de sucesso em benchmarks distintos. Após fine-tuning com dados dinâmicos, o sucesso do DOMINO é 34,9%, substancialmente abaixo das pontuações de manipulação estática. Resultados quase saturados no LIBERO não implicam que o controle dinâmico esteja resolvido.

Em plataformas físicas Unitree G1 e YAM, o artigo estuda tanto tarefas dinâmicas quanto de longo horizonte. O empilhamento dinâmico de copos é bem-sucedido em 19 de 20 execuções do Long-WAM, contra zero para π0.5 e Fast-WAM nessa configuração. Experimentos de tarefas compostas usam adicionalmente um planejador de alto nível separado; seus resultados pertencem ao sistema combinado.

## Integração com LeRobot e limites dos resultados

A versão 0.7.0 oferece suporte nativo a checkpoints IDM/CoD, fine-tuning e inferência síncrona. A versão LIBERO usa duas câmeras 224×224, ações 7D, estado 8D e histórico P48. Forneça observações novas a cada tick de controle, mesmo enquanto ações ainda estiverem enfileiradas.

O checkpoint IDM documentado obtém 99,4%, 99,8%, 97,8% e 99,0%, com 500 episódios por suíte: 99,00% no total. CoD tem média de 98,45%. Estes são resultados do adaptador, separados dos 99,5% do artigo. Pacotes `model.pt` originais não são diretórios de checkpoint nativos do LeRobot.

`reset()` limpa tanto o histórico quanto as ações enfileiradas. Alterar apenas `past_obs_steps` não constitui treinamento de escalonamento de contexto. Async/RTC genérico não é validado neste adaptador; a execução otimizada do projeto original permanece uma capacidade separada.

## Conclusão

Long-WAM aprende a prever a partir do histórico antes de conectar essa predição às ações. Streaming e execução assíncrona tornam esse caminho mais prático. Seus ganhos dependem da inicialização, dos requisitos de memória da tarefa, do condicionamento no futuro e do sistema de implantação utilizado.

</div>
