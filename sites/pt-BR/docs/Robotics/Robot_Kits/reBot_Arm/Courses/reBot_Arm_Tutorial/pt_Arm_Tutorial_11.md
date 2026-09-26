---
description: "Capítulo 11 do Curso para Iniciantes em IA Física da Seeed — configuração do ambiente, calibração do braço seguidor e líder, mapeamento de juntas, segurança na teleoperação, início da teleoperação mestre‑escravo, frequência de controle e latência, e prática hands-on."
title: Capítulo 11 - Calibração do Líder e Seguidor e Teleoperação
keywords:
  - reBot
  - LeRobot
  - Teleoperation
  - Calibration
  - Leader Arm
  - Follower Arm
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_11
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_11/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 3 · Capítulo 11 · Prática</span>
    <h2>11. Calibração do Líder e Seguidor e Teleoperação</h2>
    <p>
      Capítulo 11 do Curso para Iniciantes em IA Física da Seeed — configuração do ambiente,
      calibração do braço seguidor e do braço líder, mapeamento de juntas, segurança na teleoperação, início da teleoperação
      mestre‑escravo, frequência de controle e latência, e prática hands-on.
    </p>
    <div className="hero-actions">
      <a href="#environment">Ambiente</a>
      <a href="#calibrate-follower">Calibração</a>
      <a href="#teleoperate">Teleoperação</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Neste capítulo</strong>
    <span>11.1 Desembalar, Fiação e Montagem do Braço</span>
    <span>11.2 Configuração do Ambiente</span>
    <span>11.3 Calibrando o Braço Seguidor</span>
    <span>11.4 Calibrando o Braço Líder</span>
    <span>11.5 Mapeamento de Juntas: Direção, Alcance e Garra</span>
    <span>11.6 Diretrizes de Segurança para Teleoperação</span>
    <span>11.7 Iniciando a Teleoperação Mestre‑Escravo</span>
    <span>11.8 Frequência de Controle e Latência</span>
    <span>11.9 Prática Hands-On</span>
  </div>
</section>

<RebotCourseNav />

## 11.1 Desembalar, Fiação e Montagem do Braço

<section id="unboxing" className="section-card">
  <div className="section-title">
    <span>Configuração</span>
    <h2>11.1 Desembalar, Fiação e Montagem do Braço</h2>
  </div>

- **reBot DM**
<iframe width="600" height="400" src="https://www.youtube.com/embed/llSa6qn3yrY?si=D3ZUoBbih8_qtcFD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
- **reBot RS**
<iframe width="600" height="400" src="https://www.youtube.com/embed/llSa6qn3yrY?si=Ejc4Q97tFzURuh1u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


</section>

## 11.2 Configuração do Ambiente

<section id="environment" className="section-card">
  <div className="section-title">
    <span>Ambiente</span>
    <h2>11.2 Configuração do Ambiente</h2>
  </div>

Supondo que você já tenha criado um ambiente virtual no Estágio 2, em seguida só precisamos clonar o repositório e instalar o ambiente no ambiente conda que você criou. NÃO use máquina virtual ou WSL; é melhor instalar o Ubuntu 22.04 diretamente.

:::tip
Lembre-se: todas as etapas subsequentes devem ser executadas dentro do ambiente virtual e do ambiente `lerobot`.
:::

**Passo 1:** Clonar o repositório Seeed LeRobot

```bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git
```

**Passo 2:** Entrar no ambiente virtual e instalar LeRobot e plugins do reBot

```bash
conda create -y -n rebot_arm python=3.12
pip install -e ./lerobot
```

```bash
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge
```

**Passo 3:** Instalar ffmpeg (dependência de codec de vídeo)

```bash
conda install ffmpeg -c conda-forge
```

**Notas de versão:**

- Por padrão, o ffmpeg 7.X será instalado (suporta o codificador libsvtav1).
- Se você encontrar problemas de compatibilidade de versão, pode especificar o ffmpeg 7.1.1:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- Você pode verificar via `ffmpeg -encoders | grep svtav1` se o codificador libsvtav1 é suportado.

**Passo 4:** Configuração especial para dispositivos NVIDIA Jetson (ignore este passo em um PC comum)

Para dispositivos Jetson JetPack 6.0+ (certifique-se de ter instalado PyTorch-gpu e Torchvision compatíveis com Jetson antes deste passo):

```bash
# Install OpenCV and other dependencies via conda (Jetson JetPack 6.0+ only)
conda install -y -c conda-forge "opencv>=4.10.0.84"
# Uninstall OpenCV
conda remove opencv
# Install specific OpenCV version via pip3
pip3 install opencv-python==4.10.0.84
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
# This version must be compatible with Torchvision
pip3 install numpy==1.26.0
```

**Passo 5:** Verificar se a GPU do PyTorch está disponível

```bash
python3

import torch
print(torch.cuda.is_available())   # Should output True
```

Digite `exit()` para sair.

:::warning
Se a saída for `False`, você instalou a versão para CPU — é necessário reinstalar o PyTorch.
:::

</section>

## 11.3 Calibrando o Braço Seguidor

<section id="calibrate-follower" className="section-card">
  <div className="section-title">
    <span>Calibração</span>
    <h2>11.3 Calibrando o Braço Seguidor</h2>
  </div>

- Em seguida, certifique-se de que o robô reBot B601-RS esteja conectado à alimentação e ao cabo de dados antes de calibrar.
- Os arquivos de calibração do Líder e do Seguidor são armazenados em `~/.cache/huggingface/lerobot/calibration/robots` e `~/.cache/huggingface/lerobot/calibration/teleoperators`, respectivamente. Para recalibrar, exclua os arquivos correspondentes ou simplesmente execute o comando de calibração — o terminal exibirá: pressione <kbd>C</kbd> para recalibrar, pressione <kbd>Enter</kbd> para usar o arquivo de calibração existente.
- Se você não conseguir se conectar ao seguidor, consulte o Estágio 2 e use a interface do motorbridge para testar se o braço está funcionando corretamente.
- Siga as instruções para mover o braço Seguidor para a posição zero mostrada acima. O braço só precisa ser calibrado uma vez no mesmo computador após a montagem. Abaixo estão os comandos de calibração; consulte a posição zero na imagem (a garra deve estar totalmente fechada).

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-01.png" alt="Posição zero do seguidor" />
</div>

**Para calibração do Seguidor DM:**

```bash
sudo chmod 666 /dev/ttyACM*
cd lerobot
lerobot-calibrate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao
```

**Para calibração do Seguidor RS:**

Se o seu sistema ainda não tiver o driver PCAN instalado, consulte esta página: [PCAN driver installed](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/#software-setup-and-calibration-workflow)

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
cd lerobot

lerobot-calibrate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan
```

(Opcional) Se você estiver usando Jetson (Jetpack 6.x), execute o seguinte comando para encontrar o número da porta CAN do seu Jetson:

```bash
for i in /sys/class/net/can*; do
    [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"
done
```

Exemplo de saída:

```text
can2  # Could also be can0, can1, or other CAN number
```

O número da porta usado em todos os comandos subsequentes do seguidor deve corresponder à saída aqui.

:::warning
Se o seu Jetson não tiver o [PCAN driver installed](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/#software-setup-and-calibration-workflow), a comunicação ficará persistentemente anormal.
:::

</section>

## 11.4 Calibrando o Braço Líder

<section id="calibrate-leader" className="section-card">
  <div className="section-title">
    <span>Calibração</span>
    <h2>11.4 Calibrando o Braço Líder</h2>
  </div>

**Notas de calibração do Líder reBot 102:**

- Quando a calibração começa, a posição atual de cada servo no reBot Arm 102 será **redefinida para zero**.
- `joint_ranges` (limites das juntas) vêm do arquivo de configuração `config_rebot_arm_102_leader.py`, não dos dados de calibração.
- Se uma junta parecer sempre presa perto de um limite, verifique primeiro a configuração de `joint_ranges`.
- As direções das juntas são definidas no arquivo de configuração; se as direções não corresponderem, modifique a configuração em vez de recalibrar.
- O Líder reBot 102 usa um módulo USB‑para‑UART, geralmente mapeado para `/dev/ttyUSB*`.
- Use `ls /dev/ttyUSB*` para ver o número de porta real.

Na primeira conexão, você pode receber um erro informando que a porta serial `/dev/ttyACM0` não pode ser encontrada — isso ocorre porque o `brltty` está ocupando a porta. Siga estes passos:

```bash
sudo dmesg | grep ttyUSB   # See 'disconnected' on the last line
sudo apt remove brltty     # Remove brltty
```

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-02.png" alt="Porta serial do braço líder" />
</div>

Siga as instruções para mover o braço Líder para a posição zero mostrada acima:

```bash
sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

Mantenha-o parado e pressione <kbd>Enter</kbd> até a calibração ser concluída.

</section>

## 11.5 Mapeamento de Juntas: Direção, Alcance e Garra

<section id="joint-mapping" className="section-card">
  <div className="section-title">
    <span>Mapeamento</span>
    <h2>11.5 Mapeamento de Juntas: Direção, Alcance e Garra</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-03.png" alt="Mapeamento de juntas" />
</div>

</section>

## 11.6 Diretrizes de Segurança para Teleoperação

<section id="safety" className="section-card">
  <div className="section-title">
    <span>Segurança</span>
    <h2>11.6 Diretrizes de Segurança para Teleoperação</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-04.png" alt="Diretrizes de segurança para teleoperação" />
</div>

</section>

## 11.7 Iniciando a Teleoperação Mestre‑Escravo

<section id="teleoperate" className="section-card">
  <div className="section-title">
    <span>Teleoperação</span>
    <h2>11.7 Iniciando a Teleoperação Mestre‑Escravo</h2>
  </div>

:::danger As mesmas regras de segurança se aplicam a todos os cenários de movimento do braço!
Durante a teleoperação, se cabos de alimentação se soltarem, a conexão de energia estiver ruim ou cabos de sinal se desconectarem, você deve primeiro parar o código, retornar o braço à sua posição inicial zero, então reconectar a alimentação e reiniciar o programa — para evitar corrupção de dados que faça o braço sair de controle e gerar perigo.
:::

**Teleoperação DM** — primeiro conceda permissões às portas seriais:

```bash
# leader
sudo chmod 666 /dev/ttyUSB*
# follower
sudo chmod 666 /dev/ttyACM*
```

Execute a teleoperação:

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

**Teleoperação RS** — primeiro conceda permissões às portas seriais:

```bash
# leader
sudo chmod 666 /dev/ttyUSB*
# follower
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

Execute a teleoperação:

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

</section>

## 11.8 Frequência de Controle e Latência

<section id="frequency-latency" className="section-card">
  <div className="section-title">
    <span>Desempenho</span>
    <h2>11.8 Frequência de Controle e Latência</h2>
  </div>

Se a teleoperação parece "responsiva" depende de duas coisas: quantos loops o circuito de encaminhamento executa por segundo (frequência) e quanta demora existe entre a sua mão e o braço (latência).

### De onde vem a latência? Por que ela é inevitável?

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-05.png" alt="Fontes de latência" />
</div>

### O que é a frequência de controle? Ela pode ser configurada?

O loop de teleoperação é padronizado em **60 Hz** — completando 60 loops por segundo de "ler o Leader → mapear → enviar CAN → ler de volta"; cada loop tem um orçamento de tempo de 16,7 ms. Essa frequência pode ser ajustada pelo parâmetro `fps` da configuração de teleoperação, mas tenha duas coisas em mente:

- **O limite superior é determinado pelo tempo do circuito de hardware, não pelo software.** A cadeia acima por si só leva mais de dez milissegundos por loop, então o limite superior prático para este hardware é em torno de 60–100 Hz. Configurar acima disso é inútil: a frequência real não aumentará, e você só verá avisos de estouro de período.
- **60 Hz já está muito acima do necessário.** Os movimentos conscientes humanos mais rápidos são apenas 5–10 Hz; 60 Hz é como tirar dez instantâneos de cada pequeno movimento, então a densidade de amostragem cobre totalmente a largura de banda da mão.

</section>

## 11.9 Prática Guiada

<section id="practice" className="section-card">
  <div className="section-title">
    <span>Prática</span>
    <h2>11.9 Prática Guiada: Agarrar, Transportar e Posicionar</h2>
  </div>

A teleoperação é estável, mas "conseguir se mover" e "conseguir trabalhar" ainda exigem prática deliberada. A qualidade dos dados no Capítulo 13 depende da sua proficiência atual. Pratique em três níveis:

- **Exercício 1: Transferência de objetos sem carga (familiarizar-se com a sensação).** Coloque alguns blocos leves na área de trabalho. Pratique: mover acima do alvo → descer → fechar o gripper → erguer. Objetivo: 10 repetições sem colisões ou quedas no meio da execução, com cada execução fluindo suavemente, sem hesitação.
- **Exercício 2: Transporte e posicionamento (cadeia completa de tarefas).** Complete todo o fluxo de trabalho "agarrar → transportar → colocar no recipiente designado". Objetivo: 10 repetições consecutivas com poses iniciais e finais quase idênticas a cada vez.
- **Padrão de aprovação:** você consegue completar 20 tarefas completas seguidas em um ritmo constante sem se sentir sobrecarregado — então você está pronto para o próximo capítulo.

</section>

</div>
