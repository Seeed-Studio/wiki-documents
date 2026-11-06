---
description: "Uma leitura detalhada de VLA-JEPA: ações latentes, supervisão por vídeo, controle de robôs, treinamento e inferência, e evidências de robustez."
title: "VLA-JEPA: Aprendendo Ações Latentes a partir de Vídeo"
hide_title: true
keywords:
  - Análise Detalhada de Artigo
  - VLA-JEPA
  - JEPA
  - Modelo de Mundo
  - Vídeo Humano
  - Modelo Visão-Linguagem-Ação
  - LeRobot
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/fig02-training-framework.png
slug: /robotics/paper_reading_vla_jepa
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-04
createdAt: '2026-11-03'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/pt-br/robotics/paper_reading_vla_jepa/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page vla-jepa-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-vla-jepa-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · ANÁLISE DETALHADA DE ARTIGO</span>
  <h1 id="paper-reading-vla-jepa-title">VLA-JEPA: Aprendendo Ações Latentes a partir de Vídeo</h1>
  <p className="paper-reading-lead">VLA-JEPA: Aprimorando o Modelo Visão-Linguagem-Ação com um Modelo de Mundo Latente</p>
  <ul className="paper-reading-badges" aria-label="Neste guia">
    <li>Pré-treinamento com vídeos humanos</li>
    <li>Modelo de mundo latente</li>
    <li>Head de ação com flow matching</li>
    <li>Robustez a perturbações</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2602.10098v2" target="_blank" rel="noopener noreferrer" aria-label="Ler o artigo VLA-JEPA no arXiv">
    <span className="paper-reading-source-tag">arXiv</span>
    <span>Ler o artigo</span>
    <span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Principais comandos do LeRobot">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/main/en/vla_jepa" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="Hugging Face" width="24" height="24" /> Hugging Face · Documentação do LeRobot VLA-JEPA ↗</a>

**Principais comandos do LeRobot**

Estes são os principais fragmentos de argumentos do LeRobot para `lerobot-train`, usados junto com dataset, diretório de saída e outras configurações. Consulte a documentação acima para os requisitos de instalação.

- `--policy.freeze_qwen=true`: Congela o Qwen e treina apenas o head de ação; esta implementação também desativa o treinamento do modelo de mundo.
- `--policy.enable_world_model=false`: Desativa o modelo de mundo e a loss JEPA; Qwen e o head de ação continuam treináveis quando o Qwen não está congelado.
- `--policy.reinit_modules`: Para fine-tuning entre diferentes corpos (cross-embodiment), forneça uma lista de prefixos de projeção de ação/estado que podem ser reinicializados quando as dimensões mudam.

</aside>

Vídeos humanos mostram como colocar uma maçã em uma tigela, mas não contêm comandos de controle para um robô específico. **VLA-JEPA primeiro aprende como os objetos mudam a partir de vídeo, depois aprende como agir a partir de demonstrações de robôs.** Um modelo de mundo conecta esses dois sinais de aprendizado.

## Pré-requisitos

Três quantidades importam. Considere colocar uma maçã em uma tigela:

- **Características de estado do mundo** $s_i$ descrevem a cena e o estado dos objetos, conforme extraídos por um codificador de vídeo.
- **Ações latentes** $z_i$ são características ocultas que ajudam a prever mudanças de estado, como a maçã se movendo da mesa para acima da tigela. Elas não têm unidades físicas predefinidas.
- **Ações do robô** $a_t$ contêm valores enviados ao controlador, como translação e rotação do efetuador final e comandos da garra.

![Ilustração didática: características de estado, ações latentes e valores de controle físico](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/guide03-state-latent-control-en.png)

JEPA (Joint-Embedding Predictive Architecture) prevê características futuras. Ele compara características previstas com características codificadas a partir de imagens futuras reais, sem reconstruir cada pixel. VLA-JEPA usa esse objetivo para ensinar a um modelo visão-linguagem (VLM) mudanças relacionadas à manipulação.

## Resumo

**Paráfrase:** Vídeo da Internet pode ajudar a lidar com a escassez de dados de robôs para modelos visão-linguagem-ação (VLAs). Métodos existentes de ação latente, porém, podem aprender mudanças de aparência, movimento irrelevante ou atalhos a partir de imagens futuras. VLA-JEPA gera ações latentes a partir de observações atuais e linguagem, depois prevê características de estado futuras. Imagens futuras fornecem supervisão sem entrar diretamente no VLM que gera ações latentes. Pré-treinamento conjunto em vídeo e dados de robôs, seguido de adaptação em tarefas downstream, produz resultados competitivos em simulação e hardware.

**Nota de leitura:** A ausência de rótulos de ação se aplica a vídeos humanos. Vídeos ensinam mudanças; demonstrações de robôs ainda ensinam valores de controle. As ablações mostram benefícios mais claros para robustez a perturbações do que melhoria consistente em todas as tarefas.

## Introdução e Trabalhos Relacionados

**Comece pelo problema de dados.** Demonstrações de robôs são caras, enquanto vídeos humanos são abundantes. Os autores, portanto, buscam transferir experiência de vídeo para aprendizado de robôs (Seção 1 do artigo). Mais vídeo por si só é insuficiente: predição de pixels pode focar em textura, iluminação e movimento de câmera em vez de mudanças úteis para controle.

**Depois examine a supervisão.** Se um extrator de ações latentes vê imagens atuais e futuras, ele pode codificar a resposta futura. Extrair ações latentes antes de alinhar separadamente uma política também adiciona estágios de treinamento. Os autores mudam tanto o alvo de predição quanto a fonte de informação: prever características futuras e gerar ações latentes apenas a partir de observações iniciais.

A Seção 2 discute dois grupos principais: VLAs como a série RT, que dependem de demonstrações rotuladas com ações, e métodos como LAPA, UniVLA e MotoGPT, que extraem ações latentes de vídeo antes de conectá-las ao controle de robôs. **VLA-JEPA, em vez disso, deixa o erro de predição de estado treinar diretamente o VLM que gera ações latentes, enquanto a supervisão de ações de robôs treina o mesmo backbone.** Isso forma um processo unificado de pré-treinamento, ainda seguido de fine-tuning em tarefas downstream.

## Como o VLA-JEPA Aprende Ações a partir de Vídeo

### A Rede Geral

![Figura 2: caminhos de treinamento com vídeos humanos e dados de robôs](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/fig02-training-framework.png)

Cada um dos quatro módulos tem um papel: **Qwen3-VL-2B** lê imagens atuais e instruções para produzir ações latentes e condicionamento de ação; o **V-JEPA2** congelado codifica vídeo em características de estado; o **modelo de mundo** prevê estados subsequentes; e o **head de ação** gera sequências de controle de robô.

O caminho superior treina predição de estado em vídeo humano. O caminho inferior treina predição de estado e geração de ação em dados de robôs. Ambos compartilham o VLM, permitindo que a experiência em vídeo influencie o controle posterior.

### Treinando Ações Latentes por meio de Predição de Estado

Um codificador fixo $F$ extrai características de cada visão e as concatena ao longo da dimensão de características (Equação (1) do artigo):

$$
s_i=\mathop{\|}_{v=1}^{V}F(I_{v,t_i}).
$$

$I_{v,t_i}$ é a imagem da visão $v$ na posição temporal $t_i$. Na interface da Tabela 5, dois arrays de características $256\times1024$ tornam-se $256\times2048$: a contagem de tokens visuais permanece inalterada, e cada token combina duas visões.

Consultas de ação latente aprendíveis seguem as imagens iniciais e a linguagem. Suas características no VLM tornam-se $z_i$. O modelo de mundo $P_\theta$ prevê o próximo estado a partir de estados históricos e ações latentes. As Equações (2)–(3) podem ser encurtadas para:

$$
z_i=\mathrm{VLM}_\theta(\langle\mathrm{latent}_i\rangle\mid I_{1:V,t_0},\ell),
\qquad
\hat s_{i+1}=P_\theta(s_{0:i},z_{0:i}).
$$

$\ell$ é a instrução, e $\langle\mathrm{latent}_i\rangle$ é um token de consulta aprendível. Todas as ações latentes usam as mesmas observações iniciais em vez de suas imagens futuras correspondentes. O treinamento usa teacher forcing: prever $s_2$ pode usar o histórico verdadeiro $s_0,s_1$, mas prever $s_1$ não pode usar $s_1$ como entrada.

![Ilustração didática: supervisionando ações latentes atuais com estados futuros](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/guide01-video-supervision-en.png)

**A conexão crucial é o caminho do gradiente.** Imagens futuras passam pelo codificador fixo para formar alvos. O erro de predição se propaga pelo modelo de mundo até o VLM, incentivando as ações latentes a carregarem informação útil para prever mudanças. Para prever uma maçã saindo da mesa, por exemplo, a ação latente deve ajudar a explicar essa transição sem um rótulo semântico manual para cada característica oculta.

A implementação dos autores usa erro L1 médio. O seguinte expande essa loss implementada; a Equação (5) em si não especifica a norma de erro:

$$
\mathcal L_{\mathrm{WM}}=\frac1M\sum_{m=1}^{M}|\hat S_m-\operatorname{sg}(S_m)|.
$$

$S$ reúne características alvo, $M$ conta elementos, e $\operatorname{sg}$ denota stop-gradient; o codificador permanece fixo. Em um exemplo didático, alvo $[0.2,-0.4]$ e predição $[0.5,-0.2]$ dão erro médio $(0.3+0.2)/2=0.25$.

Isso restringe a entrada de imagens futuras ao VLM. A máscara temporal do preditor por si só não garante causalidade estrita das características históricas do codificador de vídeo.

### De Ações Latentes para Ações de Robô

As características de estado ainda precisam de uma conexão com o controle. Um segundo conjunto de consultas de ação segue as consultas de ação latente, lendo imagens anteriores, linguagem e ações latentes para formar o condicionamento $z_a$ (Equação (6)). Um head de ação DiT (Diffusion Transformer) então gera uma sequência contínua de ações.

![Ilustração didática: condicionando a geração de um bloco completo de ações](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/guide02-action-generation-en.png)

O head usa **conditional flow matching**. Ele mistura um bloco de ações demonstradas $A$ com ruído Gaussiano $\epsilon$ de mesmo formato, depois aprende a direção do ruído em direção às ações. As Equações (7)–(8) podem ser escritas como:

$$
X_\tau=(1-\tau)\epsilon+\tau A,
\qquad
\mathcal L_{\mathrm{FM}}=\mathbb E\left[\|v_\theta(X_\tau,\tau\mid z_a)-(A-\epsilon)\|_2^2\right].
$$

$\tau$ é o progresso da geração, distinto do tempo do robô. $v_\theta$ retorna atualizações com o formato do bloco de ações. Para um elemento, $A=0.6$, $\epsilon=-0.2$ e $\tau=0.5$ dão um valor intermediário de 0.2 e direção alvo de 0.8. Prever 0.5 dá erro quadrático de 0.09.

A inferência começa a partir de ruído novo e segue as direções previstas. A implementação fixada usa atualizações de Euler:

$$
X_{\tau+\Delta\tau}=X_\tau+\Delta\tau\,v_\theta(X_\tau,\tau\mid z_a).
$$

Quatro atualizações geram um bloco de ações de $7\times7$: sete passos de controle com sete valores cada. As quatro atualizações ocorrem dentro da cabeça de ação, em vez de representar quatro passos do robô. A implementação também fornece estado proprioceptivo e progresso da geração para a cabeça, que lê $z_a$ por meio de cross-attention. O artigo usa amostragem temporal uniforme, enquanto a implementação fixada usa amostragem Beta, uma diferença de configuração de treinamento.

## Treinamento e Inferência

O pré-treinamento conjunto usa aproximadamente **220.000 vídeos humanos Something-Something-v2** e **76.000 trajetórias de robô DROID**. Os vídeos humanos fornecem imagens e linguagem para predição de estado. Os dados de robô fornecem adicionalmente rótulos de ação para otimização conjunta (Equação (9)):

$$
\mathcal L_{\mathrm{robot}}=\mathcal L_{\mathrm{FM}}+\beta\mathcal L_{\mathrm{WM}}.
$$

$\beta$ pondera as duas perdas. A implementação do autor e a versão fixada do LeRobot usam ambas 0,1. Após 50.000 passos de pré-treinamento, ramos separados continuam a partir desse checkpoint para treinamento em simulação (30.000 passos) e ajuste fino em hardware (20.000 passos).

![Teaching illustration: human-video training, robot training, and deployment](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/guide11-training-inference-en.png)

**Durante o treinamento**, o codificador de vídeo fornece histórico e alvos; o erro do modelo de mundo treina o VLM, e as demonstrações de robô adicionam supervisão de controle. **Durante a implantação**, imagens atuais, instruções e as entradas de estado exigidas pela cabeça de ação são suficientes. O cálculo de ações latentes e a cabeça de ação permanecem; o codificador de vídeo e o preditor do modelo de mundo são omitidos. O controlador executa ações e, em seguida, novas observações sustentam outra predição.

O modelo de mundo, portanto, atua principalmente como um professor em tempo de treinamento. Ele incentiva representações que expliquem mudanças, sem buscar vídeos futuros para escolher ações durante a implantação.

## Resultados Experimentais

### Tarefas Padrão e Perturbações

O ajuste fino no LIBERO usa demonstrações de especialistas. Quatro suítes contêm cada uma dez tarefas, avaliadas 50 vezes por tarefa: 2.000 tentativas no total. A Tabela 1 compara métodos completos e inclui a ablação de vídeo humano em suas duas últimas linhas:

<div className="vla-jepa-paper-table">

![Table 1: LIBERO success-rate comparison](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/table01-libero.png)

</div>

O sucesso médio é de **97,2%**, contra **96,1%** sem vídeo humano. O modelo completo lidera os métodos listados, mas está próximo dos 97,1% do OpenVLA-OFT. A tabela principal não apresenta barras de erro em execuções de treinamento independentes, portanto pequenas diferenças não devem ser superestimadas.

LIBERO-Plus adiciona sete tipos de perturbação enquanto mantém os dados de treinamento LIBERO originais:

<div className="vla-jepa-paper-table">

![Table 3: LIBERO-Plus success under seven perturbation types](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/table03-libero-plus.png)

</div>

O vídeo humano eleva o sucesso médio de **62,9% para 79,5%**, melhorando todas as sete categorias. Esse ganho de 16,6 pontos percentuais é maior que o ganho de 1,1 ponto em tarefas padrão, fornecendo evidência mais clara de benefícios sob perturbações.

### Transferência e Desempenho em Hardware

SimplerEnv avalia a transferência de dados de treinamento de robô real para simulação:

<div className="vla-jepa-paper-table">

![Table 2: SimplerEnv tasks and ablation results](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/table02-simpler.png)

</div>

Os benefícios não são universais. Adicionar vídeo humano reduz o sucesso médio do Google Robot de **78,4% para 65,2%**; WidowX permanece em **57,3%**. A experiência em vídeo não substitui demonstrações de robô para tarefas específicas de controle. Algumas médias de baseline e classificações textuais são inconsistentes, portanto a conclusão aqui usa a ablação do modelo.

Os testes em hardware usam um Franka Research 3, garra Robotiq e três câmeras D435, com dez tentativas por tarefa. A Figura 4 apresenta os resultados:

![Figure 4: real-world success under three conditions](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/vla_jepa/fig04-real-world-results.png)

VLA-JEPA atinge **0,70** em condições dentro da distribuição e **0,47** após mudanças de layout, liderando as duas linhas de base. Sua pontuação em tarefas não vistas é **0,17**, abaixo dos **0,20** do π0.5. Nenhum dos três modelos conclui colocar uvas no nível superior de uma prateleira não vista, e o VLA-JEPA ainda pode selecionar o objeto errado.

Esses experimentos apoiam a competitividade do método geral e a contribuição do vídeo humano para a robustez a perturbações. Eles não isolam separadamente os efeitos do objetivo JEPA, do acesso à informação e das etapas de treinamento.

## Conclusão

**VLA-JEPA transforma mudanças de estado em vídeo em supervisão para representações de robô.** Ações latentes explicam mudanças, a cabeça de ação produz valores de controle, e demonstrações de robô conectam as duas coisas. Esse desenho de supervisão melhora o desempenho sob as perturbações testadas, enquanto a execução confiável e a generalização para tarefas não vistas permanecem em aberto.

## Referências

1. [VLA-JEPA paper v2](https://arxiv.org/abs/2602.10098v2) e [paper PDF](https://arxiv.org/pdf/2602.10098v2). Introdução e trabalhos relacionados: Seções 1–2; método: Seção 3; experimentos: Seção 4; configuração e protocolo de hardware: Apêndices A–B.
2. [Página de projeto do autor](https://ginwind.github.io/VLA-JEPA/) e [repositório do modelo](https://huggingface.co/ginwind/VLA-JEPA).
3. Código do autor no commit [ec90777](https://github.com/ginwind/VLA-JEPA/tree/ec907778b4af46a45742baf5ebfb2e055560346e): [modelo e perdas](https://github.com/ginwind/VLA-JEPA/blob/ec907778b4af46a45742baf5ebfb2e055560346e/starVLA/model/framework/VLA_JEPA.py), [configuração de pré-treinamento](https://github.com/ginwind/VLA-JEPA/blob/ec907778b4af46a45742baf5ebfb2e055560346e/scripts/configs/vlajepa_pretrain.yaml).
4. LeRobot no commit [f5c9bc0](https://github.com/huggingface/lerobot/tree/f5c9bc02137c331b009eccd44ece6f11b62187a8): [modelo](https://github.com/huggingface/lerobot/blob/f5c9bc02137c331b009eccd44ece6f11b62187a8/src/lerobot/policies/vla_jepa/modeling_vla_jepa.py), [cabeça de ação](https://github.com/huggingface/lerobot/blob/f5c9bc02137c331b009eccd44ece6f11b62187a8/src/lerobot/policies/vla_jepa/action_head.py) e [configuração](https://github.com/huggingface/lerobot/blob/f5c9bc02137c331b009eccd44ece6f11b62187a8/src/lerobot/policies/vla_jepa/configuration_vla_jepa.py). As diferenças de implementação complementam detalhes de fluxo de dados e treinamento; elas não são fontes para os resultados do artigo.

</div>
