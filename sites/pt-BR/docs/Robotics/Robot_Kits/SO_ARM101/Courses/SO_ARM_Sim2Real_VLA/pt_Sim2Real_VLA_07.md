---
description: "Capítulo 7 do curso Sim-to-Real VLA do SO-ARM101 — preparar o braço robótico: instalar o ambiente LeRobot, gravar IDs de servos (pré-montados pulam), calibrar os dois braços e verificar com uma teleoperação."
title: Capítulo 7 - Preparar o braço robótico
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - lerobot-setup-motors
  - Calibração
  - LeRobot
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_7
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_7/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 2 · Capítulo 7 · Build Your Robot Lab</span>
    <h2>7. Preparar o braço robótico</h2>
    <p>
      Dois braços: um líder que você move com a mão e um seguidor que
      repete o movimento. Instale o ambiente, grave os IDs de servos (pule
      nos pré-montados), calibre os dois e verifique com uma primeira
      teleoperação.
    </p>
    <div className="hero-actions">
      <a href="#arms">Os braços</a>
      <a href="#env">Ambiente</a>
      <a href="#ids">IDs de servos</a>
      <a href="#calibrate">Calibração</a>
      <a href="#teleop">Verificação</a>
    </div>
  </div>
</section>

## 7.1 Os dois braços

<section id="arms" className="section-card">
  <div className="section-title">
    <span>Líder e seguidor</span>
    <h2>7.1 Os dois braços</h2>
  </div>

**Braço líder** — um braço open source de baixo custo para ensino e
pesquisa, disponível como unidade completa ou kit DIY. Seis juntas com
servos STS3215 de 7,4 V numa fonte de 5 V; ele apenas lê ângulos de juntas.

**Braço seguidor** — o que executa. No kit Pro roda servos de 12 V;
espelha o líder durante a teleoperação e depois executa a política VLA
treinada.

:::caution Não misture as alimentações
O líder roda em 5 V e o seguidor em 12 V. Inverter pode danificar os
servos. Desligue ambos antes de trocar qualquer cabo.
:::

O passo a passo completo de montagem está no curso iniciante:
[capítulo 6 — configurar motores e montar os braços](https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_6/)
cobre impressão 3D, planejamento de motores, gravação de IDs e montagem;
o [capítulo 7 — depuração de servos](https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_7/)
cobre a ferramenta Feetech para um servo problemático.

</section>

## 7.2 Instalar o ambiente LeRobot

<section id="env" className="section-card">
  <div className="section-title">
    <span>Instalar uma vez</span>
    <h2>7.2 Instalar o ambiente LeRobot</h2>
  </div>

Antes de calibrar, instale o ambiente exato usado pelos próximos
capítulos. Instale o `uv` primeiro e crie o workspace:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
uv --version

mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
sudo apt update
sudo apt install -y ffmpeg

# Baixa o fork da Seeed (inclui suporte líder/seguidor SO101)
git clone https://github.com/Seeed-Projects/lerobot.git

# Cria o ambiente virtual (Python 3.12)
uv venv --python 3.12 .venv
source .venv/bin/activate

uv pip install --upgrade pip
uv pip install -e ./lerobot

# SDK de servos Feetech — obrigatório para os barramentos SO-01
uv pip install feetech-servo-sdk
```

:::note Voltar ao ambiente
O ambiente é configurado uma única vez. Os capítulos seguintes assumem que
você volta a ele com:
`cd ~/rebot_lerobot && source .venv/bin/activate`
:::

</section>

## 7.3 Kit ou pré-montado?

<section id="ids" className="section-card">
  <div className="section-title">
    <span>Pré-montado pula os IDs</span>
    <h2>7.3 Kit ou pré-montado?</h2>
  </div>

| Sua situação | Montagem | Gravar IDs | Calibração |
| --- | --- | --- | --- |
| Versão impressa / kit | Sim | **Sim** | Sim |
| Braço pré-montado | Já feito | **Pular** — IDs gravados na fábrica | Sim |

**Se comprou braços pré-montados, vá direto para
[7.4 Calibrar os braços](#calibrate).**

Etiquete cada servo antes de montar — **F1–F6** nos do seguidor e **L1–L6**
nos do líder. Junta 1 = ombro horizontal, 2 = ombro vertical, 3 = cotovelo,
4 = pitch do punho, 5 = rotação do punho, 6 = garra. As juntas 1–3 do
líder SO-ARM101 usam razões de redução diferentes do SO-ARM100 — confira a
tabela do [capítulo 6.2 iniciante](https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_6/) antes de montar.

:::caution Um servo por vez
Os seis servos compartilham um barramento serial. Grave os IDs com um
único servo ligado à placa, ou um ID duplicado será gravado em todos os
servos que o tiverem.
:::

</section>

## 7.4 Gravar IDs de servos (somente versão kit)

<section id="setup-motors" className="section-card">
  <div className="section-title">
    <span>lerobot-setup-motors</span>
    <h2>7.4 Gravar IDs de servos (somente versão kit)</h2>
  </div>

Primeiro encontre a porta da placa de controle:

```bash
lerobot-find-port
```

Desconecte a placa quando solicitado e reconecte; a porta impressa é a
sua (normalmente `/dev/ttyACM0`).

Grave os IDs junta por junta:

```bash
lerobot-setup-motors \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0
```

A ferramenta indica a junta a conectar — ligue só esse servo, aperte
Enter e ela grava o ID e o baud rate:

```text
Connect the controller board to the 'gripper' motor only and press enter.
```

Repita para as seis juntas do seguidor e rode a mesma ferramenta para o
líder:

```bash
lerobot-setup-motors \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1
```

Configure as permissões da porta serial (persistentes após reiniciar):

```bash
sudo usermod -aG dialout $USER   # encerre e reabra a sessão
sudo chmod 666 /dev/ttyACM*
```

No Ubuntu, o serviço `brltty` pode se apropriar do adaptador serial. Se a
porta desaparecer após alguns segundos, remova-o:
`sudo apt remove brltty`.

</section>

## 7.5 Calibrar os braços

<section id="calibrate" className="section-card">
  <div className="section-title">
    <span>Postura de referência</span>
    <h2>7.5 Calibrar os braços</h2>
  </div>

A calibração é obrigatória para kit **e** pré-montados. Ela ensina ao
LeRobot a posição média de cada junta e seus dois limites mecânicos. Os
arquivos ficam em `~/.cache/huggingface/lerobot/calibration/`, indexados
pelo ID do braço — reutilize um ID só para o mesmo braço físico.

Encontre as duas portas e exporte as variáveis usadas por todos os
capítulos:

```bash
export TELEOP_PORT=/dev/ttyACM0
export TELEOP_ID=so101_leader
export ROBOT_PORT=/dev/ttyACM1
export ROBOT_ID=so101_follower
```

Calibre o líder:

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID
```

1. Leve cada junta ao **meio do curso**. Centralize com cuidado a rotação
   do punho — se começar num limite, o encoder pode transbordar durante a
   varredura;
2. Aperte Enter e varra cada junta lentamente até os dois limites, uma por
   vez. Repetir não tem problema: os extremos são sobrescritos;
3. Aperte Enter para salvar.

Calibre o seguidor da mesma forma:

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID
```

No seguidor, pare no limite mecânico real do braço — não num cabo, não na
mesa. Um cabo preso registra um limite falso e comprime o curso útil.

:::caution Assinatura de calibração ruim
Se o seguidor espelha só metade do movimento do líder, ou uma junta salta
para um limite, a varredura foi curta. Recalibre o braço movendo cada
junta por todo o curso.
:::

Se usa as ferramentas do workshop da NVIDIA, verifique o seguidor:

```bash
export ROBOT_PORT ROBOT_ID
python ~/Sim-to-Real-SO-101-Workshop/docker/real/scripts/so101_check_calibration.py
```

Uma boa calibração termina com:

```text
Overall: ✓ PASS — calibration looks good.
```

</section>

## 7.6 Verificar o braço robótico

<section id="teleop" className="section-card">
  <div className="section-title">
    <span>Primeira teleoperação</span>
    <h2>7.6 Verificar o braço robótico</h2>
  </div>

Leve os dois braços a posturas parecidas e execute:

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID
```

Mova o líder devagar. O seguidor deve rastrear cada junta na mesma
direção e alcançar os mesmos limites. Pare com `Ctrl+C`.

Isso também confirma a ordem de juntas usada no resto do curso:
`shoulder_pan`, `shoulder_lift`, `elbow_flex`, `wrist_flex`, `wrist_roll`,
`gripper`. Se uma junta andar ao contrário, recalibre — não compense por
software.

Durante as primeiras execuções, mantenha uma mão perto do interruptor de
energia do seguidor.

Próximo: [Capítulo 8 — Montando o ambiente de trabalho](pt_Sim2Real_VLA_08.md).

</section>

</div>