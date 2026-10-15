---
description: "Capítulo 31 do Curso de Iniciação em IA Física da Seeed — Comunicação ROS2 e arquitetura de software de robôs: por que um robô precisa de ROS2, nós, os mecanismos Topic / Service / Action, interfaces de mensagens, QoS, o servidor de parâmetros, arquivos de launch, a ferramenta rosbag e por que o software modular de robôs é construído dessa forma."
title: Capítulo 31 - Comunicação ROS2 e Arquitetura de Software de Robôs
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - ROS2
  - Node
  - Topic
  - Service
  - Action
  - QoS
  - Launch
  - rosbag
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_31
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_31/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 7 · Capítulo 31 · Teoria</span>
    <h2>31. Comunicação ROS2 e Arquitetura de Software de Robôs</h2>
    <p>
      Capítulo 31 do Curso de Iniciação em IA Física da Seeed — Comunicação ROS2 e arquitetura de software de robôs: por que um robô precisa de ROS2, nós, os mecanismos Topic / Service / Action, interfaces de mensagens, QoS, o servidor de parâmetros, arquivos de launch, a ferramenta rosbag e por que o software modular de robôs é construído dessa forma.
    </p>
    <div className="hero-actions">
      <a href="#overview">Visão geral do capítulo</a>
      <a href="#nodes">Nós e comunicação</a>
      <a href="#interfaces">Mensagens e QoS</a>
      <a href="#launch">Launch, parâmetros e rosbag</a>
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


<a id="overview"></a>

## 31.1 Por Que os Robôs Precisam de ROS2?

Um robô moderno geralmente é composto por vários hardwares complexos: câmeras que "veem", computadores que "pensam" e motores que "se movem". Se cada peça de hardware funcionar sozinha, o robô não consegue se mover um centímetro. ROS2 (Robot Operating System 2) não é realmente um sistema operacional tradicional como Windows ou Linux; ele é o "sistema nervoso" ou a "ponte de comunicação" do robô. **Ele fornece um conjunto padrão de regras de comunicação** para que os módulos de percepção (olhos), planejamento (cérebro) e controle (membros) possam trocar informações de forma eficiente e fluida.

**As principais diferenças entre ROS2 e a geração anterior ROS1 (abrindo caminho para QoS):**

- **Pontos problemáticos do ROS1 (centralizado):** Depende de um "gerente" chamado `roscore`. Uma vez que o "gerente" trava, a comunicação de todo o robô entra em colapso; também exige um ambiente de rede de alta qualidade — um Wi-Fi um pouco fraco já causa desconexões.
- **Evolução do ROS2 (descentralizado com DDS):** O "gerente" é completamente removido, e os nós se comunicam diretamente ponto a ponto (com base na tecnologia DDS). Não só o risco de ponto único de falha desaparece, como também é introduzido o QoS (Quality of Service), adaptando-se a ambientes de rede extremamente ruins e a cenários industriais com requisitos rígidos de tempo real.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-31/ch31-01.png" alt="Arquitetura DDS descentralizada do ROS2 comparada ao roscore central do ROS1" />
</div>

<a id="nodes"></a>

## 31.2 Nó: A Unidade Básica de Trabalho de um Robô

No mundo ROS2, um **Node é uma entidade independente (processo/programa)**. Ele é a unidade de trabalho mais básica em uma arquitetura de software de robô.

- **Característica:** Uma especialidade por tarefa. Um sistema de robô bem projetado é composto por muitos Nodes de propósito único.
- **Exemplo:** O "nó da câmera" apenas captura imagens; o "nó do motor" apenas aciona as rodas. Eles rodam de forma independente — mesmo que o nó da câmera trave, o nó do motor ainda funciona normalmente.

:::note
Como os nós são independentes, como eles cooperam? Isso nos leva aos três principais métodos de comunicação entre nós.
:::

## 31.3 Comunicação Entre Nós (Mecanismos): "Tipos de Interface" para Interação de Nós

A comunicação entre nós se divide principalmente em três tipos: **Topic**, **Service** e **Action**.

### A. Topic

| | Topic | Service | Action |
| :--- | :--- | :--- | :--- |
| O que é | Publish/Subscribe, como uma conta oficial (feed público do WeChat) | Client/Server, como ligar para pedir direções | Uma combinação de Topic e Service, para tarefas complexas, como pedir delivery em um app |
| Características | Assíncrono, fluxo de dados unidirecional; um publicador para muitos assinantes, e os leitores podem cancelar a assinatura a qualquer momento | Síncrono, bidirecional: uma requisição, uma resposta, e o cliente geralmente fica bloqueado enquanto espera | Assíncrono com feedback de progresso e capacidade de cancelar no meio; possui Goal, Feedback e Result |
| Exemplo | Um nó de sensor de temperatura publica a "temperatura atual" como uma conta de clima; um nó de ar-condicionado assina e começa a resfriar acima de 28 graus | Como ligar para pedir direções: uma pergunta, uma resposta, resposta rápida, usado para tarefas como "abrir a garra do braço" | Como pedir delivery: enquanto você espera, recebe feedback de progresso, pode cancelar se algo der errado e, por fim, recebe o resultado |
| Casos de uso | Dados contínuos de alta frequência que não precisam de resposta imediata: vídeo de câmera, nuvens de pontos de LiDAR, ângulos de junta em tempo real | Comandos curtos e rápidos que precisam de um resultado claro: consultar o nível da bateria, abrir ou fechar a garra, alternar o modo de trabalho | Ações físicas complexas e de longa duração que podem ser interrompidas a qualquer momento: mover o braço de A para B, com progresso e cancelamento |

### B. Service

Service é o modelo **Client/Server**: uma requisição, uma resposta, e o cliente geralmente fica bloqueado enquanto espera — a coluna **Service** da tabela acima traz os detalhes.

### C. Action

Action é uma combinação de Topic e Service para tarefas longas, composta por três partes — **Goal**, **Feedback** e **Result** — a coluna **Action** da tabela acima traz os detalhes.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-31/ch31-02.png" alt="Padrões de comunicação Topic, Service e Action lado a lado" />
</div>

:::note
Agora já conhecemos os métodos de comunicação entre nós. Mas o que exatamente eles transmitem? E quais regras seguem? Em seguida vem Message — a "forma padrão" ou "linguagem comum" (formato de dados) que eles usam ao trocar informações.
:::

<a id="interfaces"></a>

## 31.4 Message: O "Formato de Transporte" para Interação de Nós

Depois de entender "como os nós conversam" (Topic/Service/Action), ainda precisamos especificar "sobre o que falar e em qual formato". Isso nos leva a Message.

- **O que é:** Uma estrutura de dados padronizada para passar dados entre nós (como uma tabela rigidamente formatada).
- **Por que é necessário:** Se o nó da câmera envia dados de imagem no formato A, mas o nó cérebro só entende o formato B, eles não conseguem se comunicar. O ROS2 predefine um grande conjunto de Messages padrão (por exemplo, imagens genéricas, comandos genéricos de velocidade). Contanto que todos preencham o formulário de acordo com o padrão, hardwares de qualquer fabricante podem se conectar sem problemas.
- **Formatos de Message correspondentes aos três mecanismos:**
    - Arquivo **`.msg`**** (para Topic):** Um pacote de dados simples. Por exemplo, uma "mensagem de velocidade" contém apenas velocidade linear (quão rápido avançar) e velocidade angular (quão acentuada será a curva).
    - Arquivo **`.srv`**** (para Service):** Dividido em parte superior e inferior. A parte superior define o formato da requisição (Request); a parte inferior define o formato da resposta (Response), separados por `---`.
    - Arquivo **`.action`**** (para Action):** Dividido em três partes, definindo os formatos de dados de Goal, Result e Feedback contínuo, também separados por `---`.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-31/ch31-03.png" alt="Formatos de Message para Topic, Service e Action" />
</div>

:::note
Depois de unificar o formato de comunicação, quem mantém a qualidade da comunicação entre nós? Em comparação com o ROS1, o mecanismo de QoS no ROS2 mantém a estabilidade e o desempenho em tempo real da comunicação entre nós.
:::

## 31.5 QoS (Quality of Service): O "Comandante de Tráfego" da Interação Entre Nós

Para garantir a estabilidade da comunicação acima, o ROS2 introduz QoS. Você pode definir diferentes regras de transporte para diferentes métodos de comunicação:

- **Modo Reliable:** Como enviar uma mensagem no WeChat — o destinatário precisa recebê-la; o mecanismo subjacente retransmite automaticamente até conseguir.
- **Casos de uso:** Enviar um comando de parada de emergência do braço (Service); ele nunca pode ser perdido.
- **Modo Best Effort:** Como uma chamada de vídeo — perder um ou dois frames não tem problema; o mais importante é manter uma latência extremamente baixa.
- **Casos de uso:** Frames de câmera de alta frequência (Topic).

:::note
Até aqui, o funcionamento de um único nó e a comunicação entre nós já estão bastante completos. Mas, na engenharia real, um robô complexo carrega dezenas ou até centenas de nós por causa dos muitos sensores e controladores. Se tivéssemos que iniciá-los todos manualmente, um por um, a cada boot, isso seria claramente irrealista. Para resolver esse problema, o ROS2 fornece os mecanismos de Launch e Parameter.
:::

<a id="launch"></a>

## 31.6 Servidor de Parâmetros e Launch

### A. Launch (arquivos de mecanismo de launch e implantação automatizada)

- **Ponto problemático:** Os sistemas de robôs de hoje são muito complexos. Por exemplo, para iniciar um robô de direção autônoma, talvez seja necessário lançar dezenas de Nodes de uma vez: o nó de LiDAR, nó de câmera, nó de controle do braço, nó de planejamento de trajetória, etc. Se um engenheiro tivesse que abrir dezenas de janelas de terminal e digitar dezenas de comandos toda vez, isso seria enlouquecedor e propenso a erros (por exemplo, o nó cérebro inicia antes do nó olho e falha porque não consegue obter dados).
- **O que é:** O "botão de início com um clique" **ou** "maestro da sinfonia" do sistema de robô. É um script de orquestração automatizada escrito em Python (ou XML/YAML).
- **Características (principais vantagens):** Ele pode "empacotar" todos os nós relacionados — câmeras, motores, algoritmos de planejamento — e iniciá-los de uma vez, gerenciar sua ordem de inicialização (ciclo de vida) e distribuir de forma uniforme os Parameters configurados na inicialização, melhorando muito a eficiência de desenvolvimento e implantação.
- **Exemplo:** Como o "modo cinema" em uma casa inteligente. Você não fecha as cortinas, apaga a luz principal, liga a TV e ajusta as caixas de som um por um manualmente. Você apenas aperta uma tecla (executa um arquivo de Launch), e todos os dispositivos começam a colaborar imediatamente na ordem e no estado predefinidos.
- **Casos de uso reais:**
    - **Orquestrar tudo com um clique:** Um comando inicia todo o sistema de percepção, decisão e controle do robô.
    - **Troca rápida entre cenários:** Durante o desenvolvimento podemos escrever dois arquivos de Launch. Um é `sim.launch.py` (atribui parâmetros de ambiente virtual aos nós para simulação), o outro é `real.launch.py` (atribui parâmetros de hardware real para controlar o robô real). Basta executar um arquivo diferente para alternar de forma contínua entre ambientes sem alterar nenhum código central.

### B. Parameter (mecanismo de parâmetros e configuração dinâmica)

- **Dor:** Suponha que você esteja depurando o braço e perceba que ele se move rápido demais. Se cada mudança de velocidade exigisse editar o código-fonte em C++ ou Python, recompilar por vários minutos e reiniciar o programa, a eficiência de desenvolvimento seria muito baixa.
- **O que é:** O "dicionário de configuração global" em tempo de execução do nó **ou** "painel de controle". Ele permite que um nó exponha variáveis ajustáveis para o exterior.
- **Recursos (vantagem central):** O maior recurso é a "modificação dinâmica, efeito instantâneo". Você pode alterar o comportamento do robô dinamicamente sem modificar o código subjacente ou recompilar. Com Parameters podemos ajustar parâmetros em tempo real e ver o efeito em tempo real.
- **Exemplo:** Como jogar um jogo 3D: você não sai do jogo para mudar o código; durante a partida você pressiona ESC para abrir o menu de configurações, reduz a "qualidade gráfica", aumenta a "sensibilidade do mouse", salva — e a visão do jogo muda imediatamente.
- **Casos de uso reais:**
    - **Como o "arquivo de configuração global" do robô:** Gerenciar centralmente as configurações iniciais de cada módulo.
    - **Ajuste de parâmetros de hardware:** Por exemplo, ajustar dinamicamente a exposição e a resolução de imagem da câmera, ou a frequência de varredura do LiDAR.
    - **Ajuste de algoritmo em tempo real:** Podemos tornar a "velocidade máxima" do braço um Parameter. Durante os testes podemos atribuir valores iniciais a partir de um arquivo Launch e também **ajustá-la dinamicamente pela linha de comando em tempo de execução e inspecionar visualmente a mudança no movimento do braço**. Com Parameters, o ajuste se torna intuitivo e eficiente.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-31/ch31-04.png" alt="Arquivos Launch e ajuste de parâmetros em tempo de execução" />
</div>

:::note
Depois que o robô inicia e roda suavemente, e se quisermos registrar todos os dados que ele produz para revisão ou caça a bugs? É aí que entra o rosbag.
:::

## 31.7 A ferramenta rosbag: a "câmera veicular" do robô

Durante o desenvolvimento e a depuração de robôs, frequentemente encontramos dores: ocorre um incidente inesperado durante testes externos, mas de volta ao laboratório ele nunca pode ser reproduzido; ou o hardware real do robô é extremamente caro e consome muita energia, então não podemos rodar algoritmos 24/7.

Para resolver esses problemas, o ROS2 fornece a poderosa ferramenta **rosbag**.

- **O que é:** Ela pode gravar Messages que fluem em qualquer Topic do sistema (por exemplo, nuvens de pontos de LiDAR, imagens de câmera, velocidades de motor) com **carimbos de tempo**, exatamente como são, em um arquivo local (geralmente um banco de dados SQLite3 no ROS2). Como a "câmera veicular" do robô, registra tudo nos Topics para posterior reprodução e depuração offline.
- **Seu princípio "enganoso":** Quando você reproduz um arquivo rosbag, ele republica esses Topics na ordem de tempo e frequência originais. Para os nós de algoritmo a jusante (por exemplo, detecção de objetos, planejamento de trajetória), **eles simplesmente não conseguem dizer se os dados vêm de sensores de hardware reais ou da reprodução do rosbag.**

### Casos de uso principais

1. **Depuração de algoritmos offline (mais comum):** Engenheiros de algoritmo não precisam acompanhar o robô lá fora no sol. Testadores simplesmente gravam um rosbag contendo cenas ricas ao ar livre. Em um escritório com ar-condicionado, engenheiros podem reproduzir esses dados quantas vezes quiserem para validar e ajustar seus algoritmos de percepção ou navegação.
2. **Revisão de incidentes em campo (um artefato de caça a bugs):** Se o robô de repente bater em uma parede enquanto está rodando, reproduzir o rosbag daquele momento permite que os desenvolvedores inspecionem quadro a quadro: a câmera deixou de detectar um obstáculo? O nó de planejamento calculou uma trajetória errada? Ou o chassi falhou em executar o comando de parada?
3. **Coleta de conjuntos de dados de IA:** Robôs modernos dependem fortemente de modelos de deep learning. rosbag facilita a coleta de grandes quantidades de dados reais de sensores para posterior treinamento de modelos.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-31/ch31-05.png" alt="Fluxo de trabalho de gravação e reprodução do rosbag" />
</div>

## 31.8 Sistema modular de robô

Por meio dos mecanismos acima, o ROS2 torna o software de robôs altamente **modular**. Você pode substituir o "nó de LiDAR" por um nó de radar de outra marca a qualquer momento; desde que publiquem o mesmo formato de Message, o cérebro a jusante (nó de planejamento) não precisa de nenhuma alteração de código. Esse é o charme central da arquitetura de software de robôs moderna. **Resumo:** Nós independentes com comunicação padronizada por Topic/Service/Action, mais orquestração unificada por Launch, formam a arquitetura de software extremamente **modular** do ROS2, tornando o desenvolvimento de robôs tão flexível quanto construir com blocos de LEGO.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-31/ch31-06.png" alt="Arquitetura modular de robô em três camadas do ROS2" />
</div>

### Transição de capítulo: do "sistema nervoso" ao "modelo de máquina"

Se o Capítulo 31 construiu o "sistema nervoso" do robô (mecanismos de comunicação), então o Capítulo 32 ensina o computador a reconhecer e controlar a "entidade física" do robô, permitindo que o computador realmente sinta como a máquina existe e como as posições espaciais se transformam.

</div>
