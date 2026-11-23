---
description: "Capítulo 9 do curso para iniciantes em SO-ARM Physical AI — o que é o LeRobot, a divisão líder/seguidor, a arquitetura de plugins Robot e Teleoperator, o fluxo de dados câmeras/barramento serial/braços e o essencial da configuração do SO-ARM."
title: Capítulo 9 - Arquitetura do sistema LeRobot e SO-ARM
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - teleoperação
  - braço líder
  - braço seguidor
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_9
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_9/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 3 · Capítulo 9 · Teoria</span>
    <h2>9. Arquitetura do sistema LeRobot e SO-ARM</h2>
    <p>
      Capítulo 9 do curso para iniciantes em SO-ARM Physical AI — o que é o LeRobot, a divisão líder/seguidor, a arquitetura de plugins Robot e Teleoperator, o fluxo de dados câmeras/barramento serial/braços e o essencial da configuração do SO-ARM.
    </p>
    <div className="hero-actions">
      <a href="#why-lerobot">Por que LeRobot</a>
      <a href="#leader-follower">Braços</a>
      <a href="#config">Configuração</a>
    </div>
  </div>
</section>

## 9.1 O que é o LeRobot e por que precisamos dele?

<section id="why-lerobot" className="section-card">
  <div className="section-title">
    <span>Motivação</span>
    <h2>9.1 O que é o LeRobot e por que precisamos dele?</h2>
  </div>

No Capítulo 8 estabelecemos o arcabouço conceitual: demonstração, dados, modelo, ciclo fechado. Mas para rodar esse pipeline, você esbarra de imediato numa pilha de problemas triviais porém concretos:

- Como alinhar carimbos de tempo entre quadros de câmera e ângulos de juntas?
- Em que formato armazenar imagens, estados e ações de dezenas de episódios?
- Como compartilhar e baixar modelos treinados no Hugging Face Hub?
- Como os três códigos — coleta, treinamento e inferência — compartilham a mesma lógica de controle do braço?

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-01.png" alt="Reinventar a roda" />
</div>

Se cada um reinventar a roda, o aprendizado em robótica continuaria um jogo de poucos laboratórios. O LeRobot é o framework de código aberto que a Hugging Face construiu para resolver isso — implementa algoritmos de imitação comprovados (ACT, SmolVLA, GR00T etc.) em PyTorch, define um formato padrão de dataset robótico e fornece uma cadeia completa de ferramentas de linha de comando, da teleoperação e coleta ao treinamento e implantação. O SO-ARM nasceu junto com o LeRobot como seu hardware de referência de baixo custo — um foi desenhado para o outro.

</section>

## 9.2 Braço líder e braço seguidor

<section id="leader-follower" className="section-card">
  <div className="section-title">
    <span>Braços</span>
    <h2>9.2 Braço líder e braço seguidor</h2>
  </div>

- O primeiro passo do aprendizado por imitação é "o humano demonstra ao robô". A questão é: como um humano "ensina" movimentos precisos a um braço? Guiá-lo com a mão é perigoso e produz dados não suaves.
- A resposta é a teleoperação mestre-escravo: usar um braço de demonstração estruturalmente idêntico, leve e de movimento livre como "dispositivo de entrada" — a pessoa move o líder, e o seguidor acompanha em tempo real.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-02.png" alt="Braço líder e braço seguidor" />
</div>

- **Braço líder (leader / de ensino)**: o braço que a pessoa segura e move. **Só lê posições** — lê seus ângulos em tempo real e os envia ao computador. Não precisa exercer força, então usa os mesmos STS3215 com baixa carga, e as juntas movidas pela mão humana têm relações menores.
- **Braço seguidor (follower / de execução)**: o braço que trabalha de verdade. Recebe os ângulos do líder e aciona servos de maior torque e alimentação plena para seguir, completando a preensão real.

É como a relação entre a alavanca de controle da cabine de uma grua e o braço da grua. O operador move a alavanca leve (líder), e o trabalho pesado é feito pelo braço lá fora (seguidor). Cada movimento da alavanca é "traduzido" em tempo real para movimento da grua.

Um kit SO-ARM traz os dois na mesma caixa — por isso é uma plataforma de ensino tão natural.

</section>

## 9.3 Arquitetura de plugins: plugin Robot e plugin Teleoperator

<section id="plugins" className="section-card">
  <div className="section-title">
    <span>Plugins</span>
    <h2>9.3 Arquitetura de plugins: plugin Robot e plugin Teleoperator</h2>
  </div>

O primeiro princípio de design do LeRobot: o framework não conhece hardware específico; define interfaces. O hardware entra como plugins.

| | **Plugin Robot** | **Plugin Teleoperator** |
| :--- | :--- | :--- |
| Papel | Executor: recebe ações, reporta estado | Entrada: só lê a intenção de movimento humano |
| Direção dos dados | Bidirecional (leitura + escrita) | Unidirecional (somente leitura) |
| Métodos centrais | `get_observation()`, `send_action()` | `get_action()` |
| No sistema SO-ARM | `so101_follower` (seguidor branco) | `so101_leader` (líder preto) |

Numa frase: **o Robot cuida de "fazer", o Teleoperator de "ler".**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-03.png" alt="Arquitetura de plugins" />
</div>

</section>

## 9.4 Fluxo de dados: câmeras, barramento serial e braços

<section id="data-flow" className="section-card">
  <div className="section-title">
    <span>Fluxo de dados</span>
    <h2>9.4 Fluxo de dados: câmeras, barramento serial e braços</h2>
  </div>

Num ciclo de controle, quais dados fluem, em que formato, por qual caminho? Um computador conecta três tipos de periféricos, correspondendo a três caminhos:

1. **Câmeras → computador**: quadros USB (frontal + lateral);
2. **Líder → computador**: posições de juntas no barramento serial (`/dev/ttyACM1`) — a intenção humana;
3. **Computador → seguidor**: posições-alvo no barramento serial (`/dev/ttyACM0`) — com o estado do próprio seguidor lido no mesmo barramento.

O computador fica no centro: lê câmeras + líder, escreve no seguidor, carimba tudo com marcas de tempo e (ao gravar) escreve uma linha alinhada de observação/estado/ação por quadro.

</section>

## 9.5 Quatro fluxos de trabalho: quatro usos do mesmo sistema

<section id="workflows" className="section-card">
  <div className="section-title">
    <span>Fluxos</span>
    <h2>9.5 Quatro fluxos de trabalho: quatro usos do mesmo sistema</h2>
  </div>

Entendendo o hardware e o fluxo de dados, ao olhar os quatro fluxos desta fase você verá que **usam os mesmos plugins e a mesma configuração; só muda a ferramenta do LeRobot chamada**:

| Fluxo | Ferramenta LeRobot |
|---|---|
| Teleoperação | `lerobot-teleoperate` |
| Coleta de dados | `lerobot-record` |
| Treinamento | `lerobot-train` |
| Inferência e implantação | `lerobot-record` (com política) ou `lerobot-rollout` |

- **Teleoperação e coleta usam a mesma cadeia de hardware** — a única diferença é gravar dados ou não.
- **Implantação de inferência e coleta são imagens espelhadas**: na coleta, as ações vêm do líder (humano); na inferência, do modelo (checkpoint). Todo o resto (leitura de câmeras, realimentação de estado, comandos de servo, limites de segurança) é idêntico. Esse é o benefício da arquitetura de plugins — trocar o decisor não exige trocar o sistema.
- **Teleoperação e inferência**: ambas ativam todo o hardware e controlam o braço on-line; a diferença é "quem decide" — na teleoperação, a pessoa; na inferência, o modelo.

</section>

## 9.6 Essenciais da configuração do SO-ARM

<section id="config" className="section-card">
  <div className="section-title">
    <span>Configuração</span>
    <h2>9.6 Essenciais da configuração do SO-ARM</h2>
  </div>

| **Item** | **Braço seguidor** | **Braço líder** |
| :--- | :--- | :--- |
| Tipo LeRobot | `--robot.type=so101_follower` | `--teleop.type=so101_leader` |
| Porta típica | `/dev/ttyACM0` | `/dev/ttyACM1` |
| Chave de porta | `--robot.port` | `--teleop.port` |
| Chave de ID | `--robot.id` | `--teleop.id` |
| Alimentação (kit Standard) | 5V | 5V |
| Alimentação (kit Pro) | 12V | 5V |

Notas que evitam os erros mais comuns:

- **SO100 e SO101 compartilham código.** `so101_leader` e `so100_leader` são a mesma implementação; usuários de SO100 usam os mesmos comandos.
- **O `id` guarda o arquivo de calibração.** Use o mesmo `--robot.id` / `--teleop.id` na teleoperação, gravação e avaliação para o mesmo braço físico — senão o LeRobot procura um arquivo que não existe.
- **A ordem das portas segue a ordem de conexão** no Linux e Jetson: primeira placa = `ttyACM0`, segunda = `ttyACM1`. Confirme com `lerobot-find-port` antes de cada sessão.

O sistema numa frase: **mesmo esqueleto, dois papéis.** O líder lê, o seguidor escreve, as câmeras assistem, e o computador costura tudo com marcas de tempo. Todos os comandos seguintes reutilizam exatamente esta configuração.

</section>

</div>
