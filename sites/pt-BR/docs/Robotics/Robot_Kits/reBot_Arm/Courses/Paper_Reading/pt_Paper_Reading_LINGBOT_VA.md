---
description: "Uma leitura atenta de LingBot-VA: correspondência entre fluxo de vídeo e ações, atenção causal, feedback real e correção assíncrona para controle de robôs."
title: "LingBot-VA: Um Modelo de Mundo Causal de Imagens Futuras para Ações de Robôs"
hide_title: true
keywords: [Paper Deep-Dive, LingBot-VA, World Model, Video-Action Model, MoT, LeRobot]
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/fig02-framework.png
slug: /robotics/paper_reading_lingbot_va
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-06
createdAt: '2026-11-06'
updatedAt: '2026-11-06'
url: https://wiki.seeedstudio.com/pt-br/robotics/paper_reading_lingbot_va/
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Pré-requisitos: Prever Imagens e Escolher Ações",
    "id": "prerequisites-predicting-images-and-choosing-actions",
    "level": 2
  },
  {
    "value": "Resumo: Paráfrase e Notas de Leitura",
    "id": "abstract-paraphrase-and-reading-notes",
    "level": 2
  },
  {
    "value": "Introdução e Trabalhos Relacionados: Trazendo Geração de Vídeo para o Controle",
    "id": "introduction-and-related-work-bringing-video-generation-into-control",
    "level": 2
  },
  {
    "value": "Processo Geral: Prever o Futuro, Depois Inferir Ações a partir da Mudança",
    "id": "overall-process-predict-the-future-then-infer-actions-from-change",
    "level": 2
  },
  {
    "value": "Como Vídeo e Ações Entram em um Único Modelo",
    "id": "how-video-and-actions-enter-one-model",
    "level": 2
  },
  {
    "value": "Comprimir Imagens Preservando Diferentes Taxas de Amostragem",
    "id": "compress-images-while-preserving-different-sampling-rates",
    "level": 3
  },
  {
    "value": "MoT: Processamento Separado com Troca Baseada em Atenção",
    "id": "mot-separate-processing-with-attention-based-exchange",
    "level": 3
  },
  {
    "value": "A Arquitetura Disponibilizada e a Arquitetura do Artigo",
    "id": "the-released-architecture-and-the-papers-architecture",
    "level": 3
  },
  {
    "value": "Treinamento: Dois Objetivos de Flow Matching e Supervisão de Histórico",
    "id": "training-two-flow-matching-objectives-and-history-supervision",
    "level": 2
  },
  {
    "value": "Do Ruído ao Vídeo e do Ruído às Ações",
    "id": "from-noise-to-video-and-from-noise-to-actions",
    "level": 3
  },
  {
    "value": "Teacher Forcing: Qual Histórico é Visível durante o Treinamento?",
    "id": "teacher-forcing-which-history-is-visible-during-training",
    "level": 3
  },
  {
    "value": "Histórico Ruidoso: Gerar Ações antes de o Vídeo Estar Totalmente Desruído",
    "id": "noisy-history-generate-actions-before-video-is-fully-denoised",
    "level": 3
  },
  {
    "value": "Execução em Malha Fechada: O que Fazer Cache e o que Corrigir",
    "id": "closed-loop-execution-what-to-cache-and-what-to-correct",
    "level": 2
  },
  {
    "value": "Atualizar o Cache KV com Feedback Real",
    "id": "update-the-kv-cache-with-real-feedback",
    "level": 3
  },
  {
    "value": "Assincronia Exige Mais do que Iniciar Duas Threads",
    "id": "asynchrony-requires-more-than-starting-two-threads",
    "level": 3
  },
  {
    "value": "Dados, Representação de Ação e Estágios de Treinamento",
    "id": "data-action-representation-and-training-stages",
    "level": 2
  },
  {
    "value": "Experimentos: Evidências e Condições",
    "id": "experiments-evidence-and-conditions",
    "level": 2
  },
  {
    "value": "Simulação: Comparar dentro da Mesma Avaliação",
    "id": "simulation-compare-within-the-same-evaluation",
    "level": 3
  },
  {
    "value": "Hardware: Sucesso e Progresso Podem Contar Histórias Diferentes",
    "id": "hardware-success-and-progress-can-tell-different-stories",
    "level": 3
  },
  {
    "value": "Assincronia e Ablations de Pré-treinamento: Benefícios com Custos",
    "id": "asynchrony-and-pretraining-ablations-benefits-with-costs",
    "level": 3
  },
  {
    "value": "O que Testes de Few-Shot, Memória e Generalização Mostram",
    "id": "what-few-shot-memory-and-generalization-tests-show",
    "level": 3
  },
  {
    "value": "Integração com LeRobot: Conectando Mecanismos à Interface Atual",
    "id": "lerobot-integration-connecting-mechanisms-to-the-current-interface",
    "level": 2
  },
  {
    "value": "Conclusão",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-lingbot-va-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-lingbot-va-title">LingBot-VA: Um Modelo de Mundo Causal de Imagens Futuras para Ações de Robôs</h1>
  <p className="paper-reading-lead">Modelagem de Mundo Causal para Controle de Robôs</p>
  <ul className="paper-reading-badges" aria-label="Neste guia">
    <li>Geração de vídeo e ações</li><li>Histórico causal</li><li>Feedback real</li><li>Correção assíncrona</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2601.21998v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Ler o artigo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Principais Comandos do LeRobot">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/lingbot_va" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="Hugging Face" width="24" height="24" /> Hugging Face · Documentação do LeRobot LingBot-VA ↗</a>

**Principais Comandos do LeRobot**

Esses fragmentos de argumentos de integração acompanham, respectivamente, as configurações de ambiente, conjunto de dados e saída para `lerobot-eval` ou `lerobot-train`.

- `--policy.path=lerobot/lingbot_va_libero_long --eval.batch_size=1`: Carrega o checkpoint LIBERO-Long; a inferência em streaming atual mantém um cache para um único ambiente.
- `--policy.attn_mode=flex --policy.use_peft=true`: Usa atenção causal em blocos e adaptação PEFT durante o treinamento. A memória necessária para o treinamento com AdamW do modelo completo de 5B não pode ser inferida a partir dos requisitos de inferência em uma única GPU.
- `--policy.save_predicted_video=true`: Além disso, decodifica e salva o vídeo imaginado pelo modelo durante a avaliação. Essas previsões e as gravações do ambiente real são saídas separadas.

</aside>

Um robô precisa abrir uma caixa de entrega. Sua câmera vê a caixa e um estilete, mas uma única imagem não consegue dizer se o lacre foi cortado, se a lâmina está estendida ou qual etapa deve ser repetida após uma falha. Se um modelo apenas gera o próximo segmento de movimento do braço, a relação entre mudanças visuais e consequências das ações precisa permanecer implícita dentro de sua política.

LingBot-VA torna essa relação explícita na geração: **prevê possíveis estados futuros em um espaço de vídeo comprimido, gera ações a partir deles e depois atualiza o contexto com imagens reais após a execução.** Isso introduz desafios: imagens imaginadas podem ser imprecisas, a geração de vídeo leva tempo e o robô não pode ficar parando para esperar. Este guia acompanha como o futuro afeta as ações, como o feedback real corrige previsões e como o cálculo se encaixa em torno da execução.

## Pré-requisitos: Prever Imagens e Escolher Ações

Um **modelo de mundo** aprende como o ambiente muda. Quando um gripper sobe, por exemplo, a tampa de uma caixa pode subir junto ou permanecer parada se a preensão falhou. Aqui, o mundo é a cena de manipulação visível pelas câmeras; o termo não implica um simulador de física completo e preciso.

**Dinâmica inversa** infere ações a partir de uma mudança de estado: se o gripper está atualmente fora da tampa e deve agarrá-la em seguida, como ele deve se mover e fechar? **Dinâmica direta** prevê consequências a partir do estado atual e de uma ação dada. Elas respondem, respectivamente, como alcançar uma mudança e o que uma ação específica irá causar.

Um **latente de vídeo** é a representação produzida quando um VAE de vídeo comprime imagens. A maior parte da predição acontece nessa representação, sem exigir um vídeo RGB reproduzível antes de cada passo de controle. **Autoregressivo (AR)** significa que a geração posterior depende do histórico existente. Este modelo gera variáveis contínuas em blocos, com múltiplas atualizações de flow matching dentro de cada bloco, em vez de escolher uma palavra discreta por vez como faz um modelo de linguagem.

Mantenha três escalas de tempo separadas: o tempo real de execução do robô, os índices de blocos de vídeo/ação e o tempo de geração que gradualmente transforma ruído em dados. Uma atualização extra de desruído não executa automaticamente outra ação do robô.

## Resumo: Paráfrase e Notas de Leitura

**Paráfrase:** Os autores argumentam que a modelagem de mundo em vídeo pode fornecer uma base para o aprendizado de robôs ao lado do pré-treinamento visão-linguagem. LingBot-VA é um framework de difusão autoregressivo que aprende conjuntamente predição de quadros futuros e execução de política. Seus três principais componentes integram tokens visuais e de ação em um espaço latente compartilhado por meio de um Mixture-of-Transformers, atualizam continuamente rollouts em malha fechada com observações reais e coordenam a predição de ações de forma assíncrona com a execução do robô. Experimentos em simulação e hardware examinam manipulação de longo horizonte, eficiência de dados após o treinamento e generalização para novas configurações. Código e modelos são disponibilizados.

**Nota de leitura:** O primeiro componente diz respeito à troca de informação, o segundo diz respeito ao contato com o ambiente real e o terceiro diz respeito à latência de geração no laço de controle. Todos os três precisam funcionar juntos: melhor predição de imagens não implica necessariamente melhores ações, histórico armazenado não garante tratamento de perturbações e operação assíncrona não justifica usar previsões obsoletas indefinidamente. As seções a seguir avaliam essas afirmações por meio de mecanismos e experimentos.

## Introdução e Trabalhos Relacionados: Trazendo Geração de Vídeo para o Controle

O primeiro parágrafo da introdução identifica uma carga de aprendizado: quando ações são previstas diretamente a partir de observações, semântica de cena, mudanças físicas e controle motor são ligados principalmente pelo mesmo tipo de supervisão por demonstração. Os autores chamam isso de emaranhamento de representação e sugerem que aprender explicitamente a evolução do ambiente pode melhorar a eficiência de amostragem e a generalização. A questão é se a supervisão de dinâmica entra explicitamente no objetivo; VLAs com histórico de observação também podem usar informação temporal.

O argumento então se volta para modelos de mundo existentes. Simuladores neurais interativos preveem consequências de ações, difusão conjunta de vídeo-ação usa ambos os tipos de supervisão, e abordagens que primeiro geram imagens-alvo fornecem objetivos visuais para uma política. No entanto, previsões longas sem feedback real subsequente se afastam da execução, enquanto blocos sem contexto persistente podem perder o estado de manipulação anterior. Os autores, portanto, predizem bloco a bloco a partir do histórico e incorporam observações reais por meio de um cache.

A Seção 5 divide trabalhos relacionados em políticas visão-linguagem e modelos de mundo para robôs. Estes últimos podem prever estados latentes de baixa dimensão, nuvens de pontos 3D ou imagens 2D. LingBot-VA segue a geração de vídeo, com computação no espaço latente do VAE. Sua contribuição vai além de uma perda auxiliar de vídeo: **representações futuras previstas participam da geração de ações no momento da inferência**.

Aqui, causal descreve principalmente dependências temporais e visibilidade de atenção. Ela organiza a geração em torno das informações disponíveis; não estabelece causalidade no mundo real por meio de intervenções nem garante correção física. A Seção 3.2 permite explicitamente atenção bidirecional dentro de um bloco de geração. A fronteira causal separa principalmente blocos históricos e futuros.

## Processo geral: prever o futuro e então inferir ações a partir da mudança

![Paper Figure 2: video latents, action prediction, and real-observation feedback](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/fig02-framework.png)

Na Figura 2, distinga primeiro as duas linhas. A linha superior contém imagens e ações previstas; a inferior fornece observações reais e ações executadas entre blocos. A geração à direita lê o contexto atualizado, então uma tampa imaginada como aberta não se torna automaticamente um fato no ambiente.

Seja $o_t$ uma observação, $z_t=E(o_t\mid o_{<t})$ o estado latente do codificador de vídeo causal, $a_t$ uma ação e $c$ a instrução em linguagem natural. As relações de condicionamento na Seção 3.2, Equações (8)–(9), podem ser organizadas como:

$$
\hat z_{t+1:t+K}\sim p_\theta(\cdot\mid z_{\le t},a_{<t},c),
\qquad
a_{t:t+K-1}\sim g_\psi(\cdot\mid \hat z_{t+1:t+K},z_{\le t},a_{<t},c).
$$

A primeira expressão prevê latentes futuros; a segunda gera ações condicionadas a eles. Os acentos circunflexos indicam previsões. Seguindo a indexação simplificada do artigo, cada estado futuro corresponde a um segmento de controle; o sistema real combina vídeo mais esparso com ações mais densas. O condicionamento por linguagem, omitido em algumas expressões abreviadas no artigo, é escrito explicitamente aqui para deixar claro que instruções são entradas.

Para abrir a tampa de uma caixa, as representações atual e futura previstas em conjunto dizem ao ramo de ação para onde o gripper deve ir e como a tampa deve mudar. Ações e observações passadas também ajudam a determinar se ela já foi agarrada. Uma interface de controle de baixo nível executa as ações, e o resultado real é codificado de volta no histórico. Esse caminho gera ações diretamente a partir de estados previstos; ele não enumera trajetórias candidatas nem seleciona uma usando uma função de custo explícita.

![Teaching illustration 1: future latents condition action inference, and real feedback closes the loop](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/guide01-world-model-loop-en.png)

[View full size](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/guide01-world-model-loop-en.png)

*Ilustração didática: as caixas verdes são representações latentes previstas; a caixa azul na parte inferior vem da câmera real. Siga a seta de feedback à direita para ver como a execução real atualiza a base para a próxima previsão.*

## Como vídeo e ações entram em um único modelo

### Comprimir imagens preservando diferentes taxas de amostragem

O artigo usa o VAE causal Wan2.2 para comprimir vídeo em aproximadamente `4 × 16 × 16` no tempo, altura e largura, e então aplica patchificação espacial `2 × 2` para reduzir tokens. Codificações de múltiplas câmeras são concatenadas ao longo da largura. A Seção 4.2 relata 192 tokens espaciais por quadro para sua configuração. Isso depende da resolução e do arranjo das câmeras e não é fixo em todas as configurações do LeRobot.

Mudanças visuais geralmente são mais lentas do que mudanças em comandos de controle. A Seção 3.3 usa $\tau=4$: cada ponto de tempo de vídeo retido é associado a 4 ações. Gerar $K=4$ desses pontos de tempo visuais corresponde, portanto, a $4K=16$ posições de ação. Amostragem esparsa de vídeo e compressão temporal do VAE são operações separadas; elas não significam em conjunto que o robô só precisa olhar a cada 16 passos.

**Exemplo de forma:** Com os padrões do LeRobot `frame_chunk_size=4`, `action_per_frame=4` e `action_dim=30`, o ruído interno do fluxo de ações pode ter forma `[1,30,4,4,1]`: 16 posições temporais com 30 canais cada. Canais de ação válidos são selecionados da saída e convertidos para `[batch,action_steps,robot_action_dimensions]`. Este é um exemplo de interface da implementação fixada, em vez de uma forma de tensor universal para todas as plataformas no artigo.

![Teaching illustration 2: four video time points correspond to sixteen actions; denoising repeatedly updates the same chunk](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/guide02-three-timescales-en.png)

[View full size](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/guide02-three-timescales-en.png)

*Ilustração didática: as duas linhas superiores seguem o tempo do robô; a linha inferior segue o progresso da geração. Cada atualização de remoção de ruído modifica o mesmo bloco de ações sem adicionar um ponto de tempo de execução.*

### MoT: processamento separado com troca baseada em atenção

O **Mixture-of-Transformers (MoT)** do artigo tem dois ramos parametrizados. O ramo de vídeo parte do Wan2.2-5B, com largura oculta 3072 e 30 camadas. O ramo de ação tem a mesma profundidade, mas largura 768, adicionando aproximadamente 350M parâmetros para um total de cerca de 5,3B. Mudanças visuais de alta dimensão recebem mais capacidade, enquanto o controle de baixa dimensão usa um ramo de ação menor (Seção 4.2).

Em cada camada, vídeo e ações formam queries, keys e values por meio de suas próprias projeções. As características de ação são então projetadas em um espaço para atenção conjunta, trocam informações com características visuais e retornam ao ramo de ação. Uma cabeça linear final as mapeia de volta para vetores de controle. Um codificador T5 congelado fornece condicionamento de texto por meio de cross-attention.

O MoT aborda como modalidades mantêm seu próprio processamento enquanto compartilham informações. O MoE do LingBot-VLA 2.0, por sua vez, permite que tokens selecionem alguns especialistas feed-forward para distribuir capacidade e computação ativa. Os nomes são semelhantes, mas os mecanismos diferem.

Os autores também interpolam pesos de vídeo para a largura de ação e escalam a inicialização por $\alpha=\sqrt{d_v/d_a}$. Substituindo `3072/768=4` obtemos $\alpha=2`. Isso estabiliza distribuições de saída iniciais entre ramos de larguras diferentes. A Figura 7 compara perda de treinamento, normas de gradiente e perda de validação, apoiando maior estabilidade do que a inicialização aleatória; essas curvas não são taxas de sucesso do robô.

### A arquitetura liberada e a arquitetura do artigo

O checkpoint liberado usa um **backbone compartilhado**, também integrado ao LeRobot. Ele trata vídeo e ações como dois fluxos de geração, com mapeamentos de entrada/saída separados, mas blocos Transformer principais compartilhados. Os ramos assimétricos 3072/768 e o total de aproximadamente 5,3B do artigo descrevem uma organização de parâmetros diferente e não permitem estimar diretamente o tamanho ou a computação do checkpoint com backbone compartilhado.

## Treinamento: dois objetivos de flow matching e supervisão de histórico

### Do ruído ao vídeo e do ruído às ações

Seguindo a direção do tempo na Seção 2, seja $z$ latentes de vídeo limpos e $a$ dados de ação, com ruídos Gaussianos independentes $\epsilon_z,\epsilon_a$ das formas correspondentes:

$$
z^{(s)}=(1-s)\epsilon_z+sz,\qquad
a^{(s)}=(1-s)\epsilon_a+sa,\qquad s\in[0,1].
$$

As redes aprendem alvos de velocidade $z-\epsilon_z$ e $a-\epsilon_a$, respectivamente. A Seção 3.3, Equações (11)–(12), define $\mathcal L_{\rm dyn}$ por meio do erro de geração de latentes de vídeo e $\mathcal L_{\rm inv}$ por meio do erro de geração de ações condicionado às representações visuais atuais e futuras. O objetivo total é:

$$
\mathcal L=\mathcal L_{\rm dyn}+\lambda\mathcal L_{\rm inv}.
$$

O pré-treinamento usa $\lambda=1`. Ambos os termos são erros quadráticos de campo de velocidade, em vez de uma soma direta de erros de pixels e juntas. O LeRobot adicionalmente pondera pelo tempo de ruído e reduz o erro de ação usando uma máscara de canais válidos, então valores numéricos de perda não podem ser inferidos apenas a partir desse coeficiente.

**Cálculo didático:** Simplifique um latente para um número, com valor de dado 0,2 e ruído 1,0. Em $s=0{,}5$, a entrada é 0,6 e o alvo de velocidade é `0.2−1.0=−0.8`. Com um modelo preciso, uma atualização de Euler de $\Delta s=0{,}1` dá `0.6+0.1×(−0.8)=0.52`; integrando até 1 chega a 0,2. O fluxo de ações aprende sua própria direção sob seu condicionamento e ruído. Aqui, $s$ é o progresso da geração, não o tempo de execução do robô decorrido.

### Teacher forcing: qual histórico é visível durante o treinamento?

![Paper Figure 3: attention visibility for real history and noisy prediction branches](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/fig03-causal-mask.png)

**Teacher forcing** condiciona o treinamento ao histórico real dos dados, em vez de primeiro executar uma trajetória completa prevista pelo modelo. Na Figura 3, as linhas são tokens de consulta e as colunas são chaves legíveis. Amarelo denota visão, verde ações e entradas em branco bloqueiam o acesso. A metade superior organiza o cache de histórico; a metade inferior organiza os alvos ruidosos. Isso não é uma máscara triangular inferior simples que restringe cada token individualmente: a geração de ações deve ler as condições visuais futuras correspondentes, e a geração conjunta dentro de um bloco é permitida.

Ações futuras reais não devem condicionar diretamente a previsão atual. Fronteiras entre blocos de histórico e de previsão permitem que o treinamento processe múltiplos pontos de tempo em paralelo em um único forward pass. Durante a execução, o feedback da câmera real reentra no histórico, fazendo com que algumas condições de treinamento se assemelhem à implantação. Latentes futuros previstos, erros de controle e latência de feedback ainda podem causar mudança de distribuição.

![Teaching illustration 3: future access is restricted across temporal blocks, while bidirectional exchange is allowed within a block](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/guide03-block-causal-en.png)

[View full size](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/guide03-block-causal-en.png)

*Ilustração didática: leia as linhas para identificar quem está lendo e, em seguida, as colunas para identificar o que está sendo lido. Esta matriz apenas resume relações temporais entre blocos. A Figura 3 do artigo define a visibilidade detalhada entre fluxos de vídeo e de ações, em particular as conexões de dinâmica inversa com as condições visuais futuras correspondentes.*

### Histórico ruidoso: gerar ações antes que o vídeo esteja totalmente denoised

A Equação (10) adiciona ruído ao histórico de vídeo com probabilidade 0,5: $\tilde z=(1-s_{\rm aug})\epsilon+s_{\rm aug}z$, com $s_{\rm aug}$ amostrado de `[0.5,1]`; caso contrário, o histórico permanece limpo. Assim, o fluxo de ações aprende a inferir ações a partir de representações visuais que continuam ruidosas, mas contêm a estrutura da tarefa.

Isso dá suporte à denoising parcial de vídeo na inferência, reservando computação para as ações. O Algoritmo 1 ilustra a integração até 0,5; a Seção 4.2 na verdade relata **3 passos de vídeo até 0,6** e **10 passos de ação até 1,0**. Estes são, respectivamente, um algoritmo conceitual e uma configuração experimental. Os padrões atuais do LeRobot, em vez disso, usam **20 passos de vídeo** e **50 passos de ação**, com `video_exec_step=-1` desativando o truncamento antecipado. Essas três configurações não são intercambiáveis, e a configuração de 3 passos do artigo não pode estimar a velocidade do código padrão atual.

## Execução em malha fechada: o que armazenar em cache e o que corrigir

### Atualizar o cache KV com feedback real

O cache KV de um Transformer armazena as chaves e valores formados por tokens históricos em cada camada, evitando o recálculo de todo o histórico. O Algoritmo 1 começa com uma observação inicial, prediz latentes e ações futuras, executa as ações atuais, coleta observações reais e adiciona latentes reais e ações executadas ao cache.

O cache armazena características internas do modelo. Ele disponibiliza o histórico, enquanto o uso efetivo desse histórico ainda depende do aprendizado. O contexto também é finito. O LeRobot atual usa `attn_window=30` e chama `reset` para um novo episódio, limpando a fila de ações, o cache do Transformer e o cache de streaming da VAE. Isso não é memória ilimitada nem retenção automática de memória entre tarefas.

### Assincronia exige mais do que iniciar duas threads

![Paper Figure 4: synchronous execution, naive asynchrony, and forward-dynamics grounding](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/fig04-async-grounding.png)

A sequência síncrona da Figura 4A é executar, observar, esperar pela geração e então continuar a execução. As hachuras vermelhas marcam a espera pela computação. A Figura 4B prediz o próximo bloco enquanto o robô executa o bloco atual, sobrepondo execução e geração.

O custo é informação desatualizada: o bloco atual não terminou quando o próximo é previsto. Se o modelo apenas reutiliza imagens imaginadas, ele ainda pode acreditar que a tampa está agarrada, apesar de observações reais recentes mostrarem um escorregamento. A Figura 4B-1 ilustra essas previsões antigas continuando a ocupar o contexto.

O artigo chama isso de **grounding com Forward Dynamics Model (FDM)**: um cálculo de dinâmica direta que corrige previsões desatualizadas. Partindo da observação real mais recente e das ações que estão sendo executadas no momento, ele prediz novamente o resultado delas e então usa esse estado futuro realinhado para predizer o vídeo e as ações subsequentes. Ele usa a capacidade de predição direta do próprio modelo; o artigo não exige um simulador totalmente separado. O pós-treinamento adiciona a perda de predição direta na Equação (13), enquanto o Algoritmo 2 descreve a coordenação entre os ramos de execução e inferência.

![Teaching illustration 4: the latest observation and ongoing actions correct the starting state for the next prediction](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/guide04-async-grounding-en.png)

[View full size](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/guide04-async-grounding-en.png)

*Ilustração didática: os dois caminhos diferem em se o feedback mais recente é usado para predizer novamente as consequências das ações atuais. A linha do tempo abaixo mostra computação e execução sobrepostas, não observação direta do futuro nem proporções de tempo fixas.*

**Exemplo de temporização:** suponha que executar o bloco atual leve 320 ms e gerar o próximo leve 180 ms. Um ciclo síncrono leva cerca de `320+180=500 ms`. Se a execução cobrir totalmente a geração, o ciclo ideal em pipeline é de cerca de 320 ms, uma razão de velocidade de `500/320=1.56`. Este exemplo didático ignora comunicação, inicializações frias e espera por feedback; não é uma medição do artigo. A assincronia reduz a espera, mas não torna atuais observações desatualizadas.

O `select_action` atual do LeRobot espera até que a fila de ações esteja vazia, atualiza o cache com keyframes reais em buffer e o bloco de ação precedente e então gera vídeo e ações em série. Ele implementa feedback real entre blocos. O Algoritmo 2 exige adicionalmente execução e predição em paralelo, além do grounding FDM de previsões desatualizadas.

## Dados, representação de ações e estágios de treinamento

A Seção 4.1 lista seis fontes — AgiBot, RoboMind, InternData-A1, o subconjunto OpenVLA de OXE, a família UMI excluindo DexUMI e RoboCOIN — mais trajetórias coletadas internamente, totalizando aproximadamente **16.000 horas de dados de manipulação robótica**. Cada conjunto de dados é dividido em 90%/10% para treinamento e validação. O conhecimento de vídeos da Internet entra principalmente por meio da inicialização Wan; essas 16.000 horas não devem ser descritas como inteiramente vídeo humano sem rótulo de ação.

O espaço de ação canônico aloca para cada braço 7 dimensões de pose do efetuador final, até 7 dimensões de junta e 1 dimensão de garra: `2×(7+7+1)=30` para dois braços. Juntas ausentes são preenchidas. Poses de efetuador final e posições de juntas são representações de controle diferentes; os slots não representam 30 graus de liberdade físicos independentes.

Nas interfaces disponibilizadas, o LIBERO usa 7 canais para deltas do efetuador final e a garra. O RoboTwin usa 16 canais para `XYZ+quaternion+garra` de dois braços e depois os converte em trajetórias de juntas com cinemática inversa CuRobo. Embora a estrutura de 30 dimensões reserve slots de juntas, **esses dois checkpoints disponibilizados não predizem diretamente posições de juntas**. Apenas preencher não completa a adaptação a um conjunto de dados personalizado em espaço de juntas.

| Estágio | Informação aprendida ou usada | Configurações para distinguir |
|---|---|---|
| Inicialização | Pré-treinamento de geração de vídeo Wan2.2; VAE de vídeo e codificador de texto congelados | Os ramos assimétricos do artigo diferem da versão atual com backbone compartilhado |
| Pré-treinamento vídeo-ação | Vídeo de robô, ações e linguagem; objetivos de dinâmica e dinâmica inversa | O artigo relata 1,4T tokens, taxa de aprendizado máxima `1e-4`, BF16 e $\lambda=1$ |
| Pós-treinamento downstream | Demonstrações da plataforma e tarefas-alvo | Exemplo de adaptação geral: `1e-5`, 3K passos; seis tarefas de hardware: 50 demonstrações por tarefa, `1e-4`, 500 passos |
| Implantação | Instrução, imagens iniciais, feedback real subsequente e histórico de ações | Ações de saída; a decodificação de vídeo pode inspecionar previsões e não precisa rodar a cada passo de controle |

A seção de método usa `[1,8]` para ilustrar comprimentos de bloco variáveis; a Seção 4.2 relata treinamento real com `[1,4]`. Taxas de aprendizado e contagens de passos de pós-treinamento também variam conforme a plataforma-alvo e o experimento.

## Experimentos: evidências e condições

### Simulação: comparar dentro da mesma avaliação

O treinamento do RoboTwin 2.0 usa 2.500 demonstrações limpas e 25.000 randomizadas em 50 tarefas, ou 50 e 500 por tarefa. O vídeo é subamostrado de 50 Hz para 12,5 Hz enquanto as ações permanecem em 50 Hz. Easy fixa configurações iniciais; Hard randomiza poses de objetos e layouts de cena (Seção 4.3.2).

| Método | RoboTwin Easy | RoboTwin Hard |
|---|---:|---:|
| π0.5 | 82.7% | 76.8% |
| Motus | 88.7% | 87.0% |
| LingBot-VA | **92.93%** | **91.55%** |

A Tabela 1 relata o sucesso médio em 50 tarefas. As margens sobre o Motus são de cerca de 4,2/4,6 pontos percentuais, ou 8,2/9,1 pontos no grupo Horizon=3. Aqui, horizon agrupa passos de tarefa; não é o comprimento de bloco de geração $K$. A Tabela S1 do apêndice também mantém fraquezas: Hanging Mug atinge apenas 40%/28% e Turn Switch 44%/45%, que médias globais não devem obscurecer.

Cada uma das quatro suítes LIBERO contém 10 tarefas com 50 demonstrações por tarefa. O artigo relata 3 seeds aleatórias por suíte e 500 avaliações por seed, totalizando 1.500 por suíte. A Tabela 2 apresenta:

| Método | Spatial | Object | Goal | Long | Média |
|---|---:|---:|---:|---:|---:|
| X-VLA | 98.2 | 98.6 | 97.8 | 97.6 | 98.1 |
| LingBot-VA | 98.5 ± 0.3 | 99.6 ± 0.3 | 97.2 ± 0.2 | 98.5 ± 0.5 | 98.5 |

Os valores são taxas de sucesso em %. LingBot-VA não supera X-VLA em Goal. Os valores de baseline vêm do artigo do X-VLA, sem condições de treinamento e implementação totalmente correspondentes. Os valores originais de ± são mantidos; o artigo não especifica se são desvios padrão, erros padrão ou intervalos de confiança. As altas taxas de sucesso se aplicam a essas tarefas e protocolos de simulação.

### Hardware: sucesso e progresso podem contar histórias diferentes

![Paper Figure 5: six hardware tasks, progress scores, and success rates](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/fig05-real-world.png)

O topo da Figura 5 mostra seis tarefas: Make Breakfast, Unpack Delivery, Insert Tubes, Pick Screws, Fold Clothes e Fold Pants. Cada tarefa usa 50 demonstrações em robô real para pós-treinamento. As Tabelas S2–S7 do apêndice listam cada uma **20 avaliações**. A pontuação de progresso é a pontuação de subetapa dividida pela pontuação máxima; a taxa de sucesso é calculada a partir dos rótulos `Success` dos testes e não pode ser simplesmente inferida a partir de se o progresso atinge seu máximo.

| Tarefa | Pontuação de progresso / taxa de sucesso do LingBot-VA | Pontuação de progresso / taxa de sucesso do π0.5 |
|---|---:|---:|
| Make Breakfast | 97.0 / 75.0 | 73.0 / 70.0 |
| Unpack Delivery | 84.5 / 65.0 | 73.0 / 25.0 |
| Insert Tubes | 85.8 / 40.0 | 79.2 / 30.0 |
| Pick Screws | 82.5 / 70.0 | 74.0 / 50.0 |
| Fold Clothes | 48.8 / 35.0 | 62.9 / 30.0 |
| Fold Pants | 76.7 / 70.0 | 30.0 / 30.0 |

Todos os valores são porcentagens, retiradas das tabelas do apêndice. O sucesso em breakfast é `15/20=75%`: mesmo com 97% de progresso médio, um quarto dos testes não tem rótulo de sucesso. **Clothes folding tem um teste bem-sucedido a mais, mas uma pontuação média de progresso 14,1 pontos menor.** Isso difere da afirmação ampla do texto principal de liderança em ambas as métricas para todas as seis tarefas; a Figura 5 em si mostra o contraexemplo.

A tabela produz taxas médias de sucesso de aproximadamente `59.2%` e `39.2%`, mas um teste em hardware corresponde a 5 pontos percentuais. Os resultados apoiam uma melhoria geral nesse conjunto de tarefas, sem isolar a contribuição causal de cada componente. Nem 50 demonstrações de tarefa-alvo significam que o modelo foi treinado do zero com apenas 50 amostras.

### Assincronia e ablações de pré-treinamento: benefícios com custos

A Tabela 3 relata o seguinte em RoboTwin Easy:

| Configuração | Sucesso médio em todas as tarefas | Horizon=3 |
|---|---:|---:|
| Linha de referência LingBot-VA | 92.9% | 93.2% |
| Assíncrono com grounding FDM | 90.4% | 85.6% |
| Assíncrono ingênuo | 74.3% | 32.9% |
| Pós-treinamento a partir de inicialização WAN | 80.6% | 67.6% |

O grounding FDM melhora em relação à assincronia ingênua em 16,1 pontos percentuais no geral e 52,7 no grupo de tarefas longas, apoiando o realinhamento de previsões obsoletas com o feedback. Ainda fica atrás da linha de referência em 2,5 pontos no geral e 7,6 em tarefas longas. Os autores relatam aproximadamente 2× de velocidade para execução assíncrona, mas a tabela não lista tempos nem hardware de teste. As taxas de sucesso mostram um custo de desempenho para reduzir a espera. O resultado de velocidade também não se aplica diretamente ao caminho de geração serial do LeRobot atual.

A diferença entre inicialização WAN e pré-treinamento completo apoia o valor do pré-treinamento de vídeo-ação de robô. Essa comparação altera a experiência de pré-treinamento, então a lacuna completa não pode ser atribuída a um único módulo de atenção. A Tabela 3 não compara diretamente AR e modelagem de mundo bidirecional e, portanto, não quantifica separadamente o benefício da estrutura autoregressiva.

### O que os testes de few-shot, memória e generalização mostram

![Figura 8 do artigo: progresso pós-treinamento com diferentes números de demonstrações](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/fig08-sample-efficiency.png)

A Figura 8 traça a contagem de demonstrações de tarefa-alvo em relação à **pontuação de progresso**. Para breakfast à direita, 10 demonstrações produzem `61.1%` versus `45.5%`, uma diferença de 15,6 pontos; 50 produzem `97.0%` versus `73.0%`. Para RoboTwin Easy à esquerda, 10 demonstrações produzem `58.2%` versus `50.7%`, uma diferença de 7,5 pontos. O texto afirma 10,3, mas a figura associa `46.6−36.3=10.3` a 5 demonstrações. Este guia segue a correspondência da figura. Esses resultados indicam menos demonstrações necessárias nas condições de pós-treinamento testadas, não menores custos de dados ou computação de pré-treinamento.

![Figura 9 do artigo: testes de memória exigindo seis limpezas de prato e busca sequencial em caixas](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lingbot-va/fig09-temporal-memory.png)

Limpar o prato exige exatamente seis repetições; a busca em caixas exige lembrar que a caixa da direita estava vazia e então buscar na esquerda. As barras à direita da Figura 9 relatam 100% para LingBot-VA em ambas, versus 47% e 50% para π0.5. Esses testes sondam o uso de estado temporal de forma mais direta do que agarrar em quadro único. No entanto, o artigo não fornece contagens de testes para essas barras e não remove independentemente o cache KV aqui, então eles não estabelecem confiabilidade em tarefas arbitrárias de histórico longo.

A Figura 10 visualiza substituições de objetos e faixas mais amplas de posição de objetos, sugerindo generalização. Sem uma tabela completa de sucesso fora da distribuição ou contagens de amostras, algumas demonstrações bem-sucedidas não podem estabelecer robustez geral. Continuidade visual, conclusão da tarefa e correção física permanecem em níveis diferentes de avaliação.

## Integração com LeRobot: conectando mecanismos à interface atual

LeRobot fornece um modelo base e checkpoints pós-treinados de LIBERO-Long e RoboTwin. Os checkpoints armazenam os pesos principais do Transformer treinável; o VAE congelado, o codificador de texto e o tokenizer são obtidos separadamente durante o carregamento, então o carregamento prático também requer esses componentes.

A ordem das câmeras faz parte da definição de entrada. LIBERO coloca a visão externa antes da visão do punho, concatenando latentes ao longo da largura. RoboTwin usa visões de cabeça, punho esquerdo e punho direito no layout `robotwin_tshape`. Trocar nomes de câmeras sem ajustar o layout altera o significado espacial. Canais de ação válidos, convenções de pose do efetuador final e estatísticas de normalização também devem corresponder ao checkpoint.

O padrão `4×4=16` descreve um chunk de ação comum. No código fixado, o primeiro chunk inclui o quadro de condicionamento inicial e descarta suas ações correspondentes, então retorna `(4−1)×4=12` passos; chunks posteriores retornam 16. A interface atual prevê novamente após a fila esvaziar. Suas atualizações de geração 20/50 não devem ser chamadas de frequências de controle.

O `forward` de treinamento codifica janelas temporais de câmera e calcula as perdas de flow matching de vídeo e de ação. `attn_mode=flex` é necessário para o caminho de treinamento causal em blocos. `save_predicted_video` adiciona decodificação VAE para inspecionar mudanças ambientais previstas; a avaliação deve comparar esse vídeo imaginado com gravações reais de execução.

## Conclusão

A percepção central do LingBot-VA é que **representações futuras podem condicionar a geração de ações, mas devem ser continuamente corrigidas pelo ambiente real**. O ramo de vídeo aprende mudanças, o ramo de ação infere controle a partir delas, e o cache de histórico preserva o contexto de interação. Desnoising parcial e execução assíncrona abordam o custo de tempo de trazer a geração para dentro do controle.

Os experimentos apoiam essa abordagem nos cenários testados de simulação, hardware e few-shot, ao mesmo tempo em que mantêm limites claros: menor progresso em clothes folding, degradação substancial com assincronia ingênua e um custo em taxa de sucesso mesmo com grounding FDM. O backbone compartilhado lançado e a interface LeRobot também diferem do sistema completo do artigo. Essas condições ajudam a determinar experimentos de acompanhamento adequados mais do que uma taxa média de sucesso sozinha.

</div>
