---
description: "Capítulo 10 do Curso para Iniciantes em Inteligência Incorporada da Seeed — o que é o LeRobot, divisão de trabalho entre braço líder/seguidor, a arquitetura de plugins Robot e Teleoperator, o fluxo de dados câmera/CAN/braço e as diferenças de configuração entre DM e RS."
title: Capítulo 10 - Arquitetura de Sistema do LeRobot e do Braço reBot
keywords:
  - reBot
  - LeRobot
  - Teleoperation
  - Leader Arm
  - Follower Arm
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_10
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: LiuJunjie
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/pt-br/rebot_embodied_ai_course_chapter_10/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 3 · Capítulo 10 · Teoria</span>
    <h2>10. LeRobot e Arquitetura de Sistema do Braço reBot</h2>
    <p>
      Capítulo 10 do Curso para Iniciantes em Inteligência Incorporada da Seeed — o que é o LeRobot,
      divisão de trabalho entre braço líder/seguidor, a arquitetura de plugins Robot e Teleoperator,
      o fluxo de dados câmera/CAN/braço e as diferenças de configuração entre DM e RS.
    </p>
    <div className="hero-actions">
      <a href="#por-que-lerobot">Why LeRobot</a>
      <a href="#braco-lider-seguidor">Arms</a>
      <a href="#plugins">Plugins</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Neste capítulo</strong>
    <span>10.1 O que é o LeRobot e por que precisamos dele?</span>
    <span>10.2 Braço Líder e Braço Seguidor</span>
    <span>10.3 Arquitetura de Plugins</span>
    <span>10.4 Visão geral do fluxo de dados: câmeras, CAN e o braço</span>
    <span>10.5 Quatro fluxos de trabalho: quatro usos do mesmo sistema</span>
    <span>10.6 Diferenças de configuração entre DM e RS</span>
  </div>
</section>

<RebotCourseNav />

## 10.1 O que é o LeRobot e por que precisamos dele?

<section id="por-que-lerobot" className="section-card">
  <div className="section-title">
    <span>Motivação</span>
    <h2>10.1 O que é o LeRobot e por que precisamos dele?</h2>
  </div>

No Capítulo 9 estabelecemos o framework conceitual de aprendizado por imitação: demonstração, dados, modelo, laço fechado. Mas, para realmente executar esse pipeline, você imediatamente se depara com uma série de problemas triviais porém específicos:

- Como alinhar carimbos de tempo entre quadros de câmera e ângulos de junta?
- Que formato deve ser usado para armazenar imagens, estados e ações para dezenas de Episódios?
- Como compartilhar e baixar modelos treinados no Hugging Face Hub?
- Como as três bases de código — coleta de dados, treinamento e inferência — podem compartilhar a mesma lógica de controle do braço?

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-01.png" alt="Reinventando a roda" />
</div>

Se todo mundo reinventasse a roda, o aprendizado de robôs continuaria sendo um jogo para poucos laboratórios. O LeRobot é o framework open source que a Hugging Face criou para resolver isso — ele implementa algoritmos comprovados de aprendizado por imitação (ACT, smolVLA, GR00T, etc.) em PyTorch, define um formato padrão de dataset de robótica e fornece uma cadeia completa de ferramentas de linha de comando, desde teleoperação e coleta de dados até treinamento e implantação em robôs reais.

</section>

## 10.2 Braço Líder e Braço Seguidor

<section id="braco-lider-seguidor" className="section-card">
  <div className="section-title">
    <span>Braços</span>
    <h2>10.2 Braço Líder e Braço Seguidor</h2>
  </div>

- A primeira etapa do aprendizado por imitação é “o humano demonstra para o robô”. A questão é: como um humano “ensina” um braço com alcance de 750 mm a fazer movimentos de preensão precisos? Guiá-lo fisicamente com a mão é ao mesmo tempo perigoso e produz dados não suaves.
- A resposta é teleoperação mestre-escravo: usar um braço de demonstração estruturalmente semelhante, leve e flexível como “dispositivo de entrada” — o humano move o líder, e o seguidor acompanha em tempo real.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-02.png" alt="Braço líder e braço seguidor" />
</div>

- **Braço Líder (leader / braço de ensino):** é o braço que o humano segura e move. Ele **apenas lê posições** — lê seus próprios ângulos de junta em tempo real e os envia para o computador. Ele não precisa gerar força, então pode usar uma solução de servo leve e de baixo custo.
- **Braço Seguidor (follower / braço de execução):** é o braço que realmente faz o trabalho. Ele recebe ângulos de junta do Líder e aciona seus motores de junta de alta potência para seguir, completando a preensão real.

Isso é como a relação entre a alavanca de controle na cabine de um guindaste e o próprio braço do guindaste. O operador move a alavanca leve (Líder), enquanto o trabalho pesado é feito pelo braço externo (Seguidor). Cada movimento da alavanca é “traduzido” em tempo real em movimentos do braço do guindaste.

</section>

## 10.3 Arquitetura de Plugins

<section id="plugins" className="section-card">
  <div className="section-title">
    <span>Plugins</span>
    <h2>10.3 Arquitetura de Plugins: Robot Plugin e Teleoperator Plugin</h2>
  </div>

Primeiro princípio de design do LeRobot: o framework não conhece nenhum hardware específico; ele apenas define interfaces. O hardware se conecta como plugins.

| | **Robot Plugin** | **Teleoperator Plugin** |
| :--- | :--- | :--- |
| Função | Executor: recebe ações, reporta estado | Entrada: apenas lê a intenção de movimento humana |
| Direção dos Dados | Bidirecional (leitura + escrita) | Unidirecional (somente leitura) |
| Métodos Centrais | `get_observation()`, `send_action()` | `get_action()` |
| No sistema reBot | Braço escravo Seguidor B601 | Braço mestre Líder reBot 102 |

Distinção em uma frase: **o Robot cuida do “fazer”, o Teleoperator cuida do “ler”.**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-03.png" alt="Arquitetura de plugins" />
</div>

</section>

## 10.4 Visão geral do fluxo de dados: câmeras, CAN e o braço

<section id="data-flow" className="section-card">
  <div className="section-title">
    <span>Fluxo de dados</span>
    <h2>10.4 Visão geral do fluxo de dados: câmeras, CAN e o braço</h2>
  </div>

Em um ciclo de controle, quais dados fluem, em que formato e por qual caminho? Um computador conecta três tipos de periféricos, correspondendo a três caminhos de dados:

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-04.png" alt="Visão geral do fluxo de dados" />
</div>

</section>

## 10.5 Quatro fluxos de trabalho: quatro usos do mesmo sistema

<section id="workflows" className="section-card">
  <div className="section-title">
    <span>Fluxos de trabalho</span>
    <h2>10.5 Quatro fluxos de trabalho: quatro usos do mesmo sistema</h2>
  </div>

Entendendo o hardware e o fluxo de dados, quando você olhar para os quatro fluxos de trabalho nos capítulos posteriores deste estágio, verá que eles **usam os mesmos plugins e a mesma configuração; apenas as ferramentas do LeRobot chamadas são diferentes**:

| Fluxo de trabalho | Ferramenta LeRobot |
|---|---|
| Teleoperation | `lerobot-teleoperate` |
| Coleta de Dados | `lerobot-record` |
| Treinamento | `lerobot-train` |
| Inferência e Implantação | `lerobot-record` (com uma policy) ou um script de inferência |

- **Teleoperação e coleta de dados usam a mesma cadeia de hardware** — a única diferença é se os dados são gravados ou não.
- **Implantação de inferência e coleta de dados são imagens espelhadas estruturais:** durante a coleta, as ações vêm do Líder (humano); durante a inferência, as ações vêm do modelo (checkpoint). Todo o resto (leitura de câmera, feedback de estado, comandos CAN, limites de segurança) é idêntico. Esse é o benefício de uma arquitetura de plugins — mudar o tomador de decisão não exige mudar o sistema.
- **Teleoperação e implantação de inferência:** ambas têm todo o hardware ativo e controlam o braço online; a diferença é “quem toma as decisões” — na teleoperação, o tomador de decisão é o humano; na inferência, é o modelo.

</section>

## 10.6 Diferenças de configuração entre DM e RS

<section id="dm-vs-rs" className="section-card">
  <div className="section-title">
    <span>Config</span>
    <h2>10.6 Diferenças de configuração entre DM e RS</h2>
  </div>

|  **Item de comparação**  |                    **B601-DM**                   |                **B601-RS**               |
| :-------------------: | :----------------------------------------------: | :--------------------------------------: |
|   Conexão com o PC    |           Ponte Serial Damiao USB2CAN           |   Adaptador USB-CAN compatível com SocketCAN   |
|    Nome do Dispositivo    |          `/dev/ttyACM*` (Ponte Serial)          |   `can0` (Interface de Rede SocketCAN)   |
|     `--robot.type`    |             `seeed_b601_dm_follower`             |         `seeed_b601_rs_follower`         |
|     `--robot.port`    | `/dev/ttyACM0` (dependendo da enumeração real) | `can0` (dependendo da enumeração real) |
| `--robot.can_adapter` |                     `damiao`                     |                `socketcan`               |


Uma frase resumindo a relação entre as duas versões: **mesmo esqueleto, dois conjuntos de “coração e nervos”.** A estrutura mecânica, a nomeação das juntas e os fluxos de trabalho de software de alto nível são idênticos; todas as diferenças estão nos motores e na cadeia de comunicação CAN — que também é o parâmetro mais comumente configurado de forma incorreta em todos os comandos do LeRobot.

Isso significa que todos os comandos subsequentes de teleoperação, coleta de dados, treinamento e avaliação são idênticos para ambos os braços — você só precisa substituir o nome correspondente do braço.

</section>

</div>
