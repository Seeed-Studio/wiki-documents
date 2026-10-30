---
description: "Capítulo 10 do curso para iniciantes em SO-ARM Physical AI — calibre os braços líder e seguidor com lerobot-calibrate, entenda o mapeamento de juntas e os arquivos de calibração, e rode sua primeira teleoperação mestre-escravo."
title: Capítulo 10 - Calibração e teleoperação de líder e seguidor
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - calibração
  - teleoperação
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_10
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_10/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 3 · Capítulo 10 · Prática</span>
    <h2>10. Calibração e teleoperação de líder e seguidor</h2>
    <p>
      Capítulo 10 do curso para iniciantes em SO-ARM Physical AI — calibre os braços líder e seguidor com lerobot-calibrate, entenda o mapeamento de juntas e os arquivos de calibração, e rode sua primeira teleoperação mestre-escravo.
    </p>
    <div className="hero-actions">
      <a href="#why-calibrate">Por que calibrar</a>
      <a href="#calibrate">Calibrar</a>
      <a href="#teleop">Teleoperar</a>
    </div>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ No-code · Sem configuração de ambiente</span>
    <p className="sensecraft-banner__title">Pule a configuração — execute o reBot Arm e o LeRobot a partir de um único aplicativo</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics é a plataforma no-code da Seeed para o SO-ARM101, reBot Arm 102 + B601-RS e B601-DM. Conecte os braços, calibre, colete demonstrações, treine e execute inferência a partir de uma interface guiada — sem ambiente Python, sem terminal.</p>
    <ul className="sensecraft-banner__points">
      <li>✅ Fluxo de trabalho guiado em 6 etapas</li>
      <li>✅ Treinamento em nuvem — sem GPU local</li>
      <li>✅ Cliente para Windows / macOS</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">Ir para SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/pt-br/sensecraft_robotics/">Guia de software</a>
  </div>
</div>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>
      Retire itens de valor e pessoas alheias a até 1 metro do espaço de trabalho. Antes deste capítulo, confirme que o braço está bem fixado e que energia e cabos estão conectados corretamente.
    </p>
  </div>
</div>

## 10.1 Por que a calibração do braço completo importa

<section id="why-calibrate" className="section-card">
  <div className="section-title">
    <span>Motivação</span>
    <h2>10.1 Por que a calibração do braço completo importa</h2>
  </div>

O Capítulo 6 gravou IDs e baud rates; o Capítulo 7 verificou os neutros. A **calibração do braço completo** é o último passo: ela aprende, para cada junta, o mapeamento entre a leitura bruta do servo e um ângulo físico, de modo que líder e seguidor reportem valores idênticos quando coincidem fisicamente.

Ela é essencial por um motivo mais profundo: **permite que uma rede treinada num SO-ARM funcione em outro.** Como todo SO-ARM calibrado concorda sobre o que é "zero grau" e "o meio do curso", um dataset gravado no seu seguidor vale no meu.

:::danger
Recapitulando as regras de energia: na **edição Standard do SO101** toda a alimentação é 5V. Na **edição Pro do SO101**, calibre e opere o líder com fonte de 5V e o seguidor com fonte de 12V em cada passo.
:::

</section>

## 10.2 Calibrar o braço seguidor

<section id="calibrate" className="section-card">
  <div className="section-title">
    <span>Calibração</span>
    <h2>10.2 Calibrar o braço seguidor</h2>
  </div>

Conecte os 6 servos pelos cabos de 3 fios e a placa, conceda permissões e execute:

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm  # <- dê um nome único ao robô
```

O procedimento (mostrado no vídeo):

1. **Posição média**: leve o braço para que cada junta fique no meio do curso (aproximadamente a postura "reto para cima") e pressione Enter;
2. **Curso completo**: mova cada junta pelo **curso** todo, uma por vez, enquanto a ferramenta amostra o mínimo/máximo.

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

:::tip
Por atualizações do repositório do LeRobot, é normal o terminal não receber sinal do servo 5 durante a calibração do braço líder. Pode continuar a operação.
:::

</section>

## 10.3 Calibrar o braço líder

<section id="calibrate-leader" className="section-card">
  <div className="section-title">
    <span>Calibração</span>
    <h2>10.3 Calibrar o braço líder</h2>
  </div>

Os mesmos dois passos (posição média, depois curso completo por junta), com as chaves do teleoperator:

```bash
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm  # <- dê um nome único ao líder
```

:::tip
Se aparecer `Could not connect on port '/dev/ttyACM0'. Make sure you are using the correct port. Try running lerobot-find-port`, conceda permissões de novo com `sudo chmod 666 /dev/ttyACM*`.
:::

### Onde a calibração mora (e como refazer)

Os arquivos de calibração ficam como JSON em `~/.cache/huggingface/lerobot/calibration/robots/` e `~/.cache/huggingface/lerobot/calibration/teleoperators/`. Para recalibrar:

- **Opção 1 — apagar os arquivos** para começar limpo:

```bash
rm -rf ~/.cache/huggingface/lerobot/calibration/robots
rm -rf ~/.cache/huggingface/lerobot/calibration/teleoperators
```

- **Opção 2 — responder ao prompt.** Rodando o comando num braço já calibrado aparece:

```text
Press ENTER to use provided calibration file associated with the id my_awesome_leader_arm, or type 'c' and press ENTER to run calibration:
```

Digite `c` + Enter para recalibrar; só Enter mantém os dados existentes.

### Quando a calibração falha: `Magnitude ... exceeds 2047`

Se a calibração ou teleoperação lançar `Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`, o offset zero de um servo está anormal. Desligue, reinicie o braço e tente de novo; se persistir, faça antes uma **calibração de posição média** — com a ferramenta do Capítulo 7 ou com os scripts do Seeed_RoboController:

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt

python -m src.tools.servo_disable              # (opcional) desabilita o torque para mover juntas à mão
python -m src.tools.servo_middle_calibration   # grava a posição atual como 2048
python -m src.tools.servo_center_test          # move para 2048 para verificar
```

Depois volte ao `lerobot-calibrate` e refaça a calibração completa.

</section>

## 10.4 Mapeamento de juntas: direção, curso e garras

<section id="joint-mapping" className="section-card">
  <div className="section-title">
    <span>Mapeamentos</span>
    <h2>10.4 Mapeamento de juntas: direção, curso e garras</h2>
  </div>

Depois de calibrar, verifique manualmente:

- **Direção**: girar a junta 1 do líder no sentido horário deve girar a 1 do seguidor no horário. Se alguma junta for ao contrário, a calibração foi feita com o braço em postura espelhada — refaça essa junta.
- **Curso**: leve cada junta do líder aos dois limites; o seguidor deve atingir os limites correspondentes sem forçar contra as peças impressas.
- **Garras**: feche totalmente o punho do líder — a garras do seguidor deve fechar totalmente; a abertura total mapeia para abertura total.

:::tip
Lembre do Capítulo 9: o `--robot.id` / `--teleop.id` escolhido aqui fica ligado ao arquivo de calibração. Use exatamente os mesmos ids ao teleoperar, gravar e avaliar depois.
:::

</section>

## 10.5 Iniciar a teleoperação mestre-escravo

<section id="teleop" className="section-card">
  <div className="section-title">
    <span>Teleoperação</span>
    <h2>10.5 Iniciar a teleoperação mestre-escravo</h2>
  </div>

Agora o momento em que os dois braços viram um sistema só. Conceda permissões e inicie:

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm
```

O comando teleoperate automaticamente:

1. Detecta calibrações faltantes e inicia o procedimento;
2. Conecta o robô e o teleoperator e começa a teleoperação.

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

### Diretrizes de segurança na teleoperação

- Sustente o seguidor na primeira vez que o torque ativar — ele salta para a postura calibrada.
- Mova o líder **devagar**; o seguidor segue com torque total.
- Mantenha os dedos longe da garras do seguidor e dos pontos de pinçamento.
- Se o seguidor atrasar, tremer ou uma junta parar de responder: pare, desligue e confira o cabo de barramento daquele servo (LED apagado indica o cabo frouxo anterior a ele).

</section>

## 10.6 Frequência de controle e latência

<section id="latency" className="section-card">
  <div className="section-title">
    <span>Desempenho</span>
    <h2>10.6 Frequência de controle e latência</h2>
  </div>

### De onde vem a latência? Por que é inevitável?

Cada ciclo lê o líder, envia alvos ao seguidor e (depois) lê câmeras. Câmeras USB entregam quadros no próprio ritmo. O ciclo é rápido — dezenas de milissegundos — mas não zero, então movimentos rápidos do líder sempre parecem um pouco suavizados no seguidor. É normal.

### O que é a frequência de controle? Dá para configurar?

O LeRobot roda o ciclo num fps configurado (30 por padrão nos fluxos do SO-ARM; o `--dataset.fps` posterior precisa casar). Se a teleoperação engasgar:

- Evite hubs USB — conecte braços e câmeras direto ao computador;
- Verifique se nenhum outro processo prende as portas seriais;
- Confirme com `lerobot-find-port` que nenhum outro dispositivo divide o barramento.

</section>

## 10.7 Prática

<section id="practice" className="section-card">
  <div className="section-title">
    <span>Prática</span>
    <h2>10.7 Prática</h2>
  </div>

1. Calibre líder e seguidor; encontre os dois JSON em `~/.cache/huggingface/lerobot/calibration/`.
2. Teleopere por 5 minutos: toque os quatro cantos do tapete com a garras e pegue um objeto pequeno.
3. Experimente deliberadamente o caminho do erro: rode teleoperate com um `--robot.id` errado e leia o erro — você nunca mais o esquecerá.
4. Pratique a recalibração pelo prompt `c`.

Com a cadeia de controle verificada, o próximo capítulo projeta os dados da sua primeira política.

</section>

</div>
