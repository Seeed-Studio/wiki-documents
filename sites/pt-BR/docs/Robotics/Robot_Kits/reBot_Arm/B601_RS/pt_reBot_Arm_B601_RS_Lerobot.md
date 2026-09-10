---
description: Este wiki fornece um guia completo para o reBot Arm B601-RS implementar coleta de dados e treinamento dentro do framework LeRobot.
title: Introdução ao reBot Arm B601-RS no LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Robotic Arm
  - rebot arm
  - Robot
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-15
  author: LiuJunjie
translation:
  skip: [zh-CN]
createdAt: '2026-06-17'
updatedAt: '2026-08-10'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_lerobot/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# Introdução ao reBot Arm B601-RS baseado em LeRobot

<RebotRsDocNav />


<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Braço robótico 6-DOF · Suporte a múltiplos motores · Solucionador de cinemática · Planejamento de trajetória · Totalmente open source</strong>
</p>

[reBot Arm B601-RS](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/) é um projeto de braço robótico open source lançado pela Seeed, dedicado a reduzir a barreira para o aprendizado de inteligência incorporada. Nós abrimos todo o design estrutural e código sem reservas, tornando a tecnologia de robótica acessível a todos.


[LeRobot](https://github.com/huggingface/lerobot/tree/main) tem como objetivo fornecer modelos, conjuntos de dados e ferramentas para robótica no mundo real em PyTorch. Seu objetivo é reduzir a barreira de entrada da robótica, permitindo que todos contribuam e se beneficiem do compartilhamento de conjuntos de dados e modelos pré-treinados. O LeRobot integra metodologias de ponta validadas para aplicação no mundo real, com foco em aprendizado por imitação e aprendizado por reforço. Ele fornece um conjunto de modelos pré-treinados, conjuntos de dados com demonstrações coletadas por humanos e ambientes de simulação, permitindo que os usuários comecem sem a necessidade de montar um robô.

### 📖 Introdução ao projeto

**reBot-DevArm (reBot Arm B601 DM e reBot Arm B601 RS)** é um projeto de braço robótico dedicado a reduzir a barreira para o aprendizado de inteligência incorporada. Nós nos concentramos em **"Verdadeiro Open Source"** — não apenas código, abrimos todo o seguinte sem reservas:
- 🦾 **Braços robóticos open source com duas versões de motor**: Fornecemos todos os arquivos open source para as versões de motor RoboStride e Damiao com a mesma aparência.
- 🛠️ **Esquemas de hardware**: Arquivos-fonte de chapas metálicas e peças impressas em 3D.
- 🔩 **BOM (Bill of Materials)**: Detalhado até a especificação de cada parafuso e link de compra.
- 💻 **Software e algoritmos**: Python SDK, ROS1/2, Isaac Sim, LeRobot, etc.

## Montando seu braço robótico reBot

- Oferecemos cinco opções de kit:
  - **Kit de motores do corpo do braço robótico**: Inclui apenas os motores e chicotes de fios necessários para o braço robótico.
  - **Kit de peças estruturais do corpo do braço robótico**: Inclui apenas os componentes mecânicos estruturais.
  - **Kit completo do gripper**: Inclui motores, chicotes de fios e peças estruturais para o gripper.
  - **Kit completo do braço**: Inclui todos os componentes para o corpo do braço robótico e o gripper.
  - **Braço robótico pré-montado**: Um braço robótico totalmente montado.

O kit de robô inteligente reBot-DevArm e reComputer Jetson AI combina perfeitamente o controle de braço robótico de alta precisão com uma poderosa plataforma de computação de IA, fornecendo uma solução completa de desenvolvimento de robôs. Este kit é baseado na plataforma Jetson Orin ou AGX Orin, combinada com o reBot-DevArm e o framework de IA LeRobot, oferecendo aos usuários um sistema de robô inteligente aplicável a múltiplos cenários, como educação, pesquisa e automação industrial.

Este wiki fornece tutoriais de depuração para o reBot-DevArm e implementa coleta de dados e treinamento dentro do framework LeRobot.

:::caution
Os tutoriais da Seeed Studio são rigorosamente atualizados de acordo com a documentação oficial. Se você encontrar problemas de software ou ambiente que não possam ser resolvidos, verifique primeiro o FAQ no final do artigo ou entre em contato com o atendimento ao cliente para entrar no grupo de discussão SeeedStudio LeRobot. Você também pode fazer perguntas aqui: [LeRobot GitHub](https://github.com/huggingface/lerobot) ou [Discord Channel](https://discord.gg/8TnwDdjFGU).
:::

## 🔧 Recursos da série reBot B601-RS:

1. **Open source e baixo custo**
   O reBot Arm é uma solução de braço robótico open source e de baixo custo da Seeed Studio, dedicada a reduzir a barreira para o aprendizado de inteligência incorporada.

2. **Integração com a plataforma LeRobot**
   Projetado para integração com a [plataforma LeRobot](https://github.com/huggingface/lerobot). Esta plataforma fornece modelos PyTorch, conjuntos de dados e ferramentas para aprendizado por imitação de tarefas de robôs reais (incluindo coleta de dados, simulação, treinamento e implantação).

3. **Recursos abundantes de aprendizado**
   Fornece recursos de aprendizado open source abrangentes, incluindo guias de montagem e calibração, tutoriais de teste e coleta de dados, documentação de treinamento e implantação para ajudar os usuários a começar rapidamente e desenvolver aplicações de robótica.

4. **Compatível com a plataforma Nvidia**
   Suporta implantação via plataforma reComputer Mini J4012 Orin NX 16GB.

<!-- <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV1mFo7BiEwX&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> -->

## Ambiente inicial do sistema

**Para Ubuntu x86:**
  - Ubuntu 22.04
  - CUDA 12+
  - Python 3.10
  - Torch 2.6

**Para Jetson Orin:**
  - Jetson JetPack 6.0 e 6.1, não suporta 6.2
  - Python 3.10
  - Torch 2.3+

## Instalar o LeRobot

<!-- <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV12Fo7BvE7G&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> -->

Você precisa instalar pytorch, torchvision e outros ambientes com base na sua versão do CUDA.

### 1. Instalar o Miniforge

```bash
cd ~
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh

~/miniforge3/bin/conda init bash
source ~/.bashrc
```

### 2. Clonar o repositório Lerobot

```bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git
```

### 3. Criar o ambiente Conda e instalar o LeRobot

:::tip
Para funções detalhadas dos pacotes de funções, consulte:
- [lerobot-teleoperator-rebot-arm-102](https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102)
- [lerobot-robot-seeed-b601](https://github.com/Seeed-Projects/lerobot-robot-seeed-b601)
:::

O repositório lerobot já possui um pyproject.toml. Crie um ambiente conda e instale todas as dependências.

```bash
cd ~/rebot_lerobot

# Create conda environment (Python 3.10)
conda create -y -n lerobot python=3.10

# Activate environment
conda activate lerobot

# Install lerobot main project (editable mode)
pip install -e ./lerobot

# Add dependency packages
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge
```

### 4. Instalar o ffmpeg

ffmpeg é uma dependência de decodificação de vídeo, instale via conda:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
**Notas de versão**:
- Por padrão, o ffmpeg 7.X será instalado (suporta o codificador libsvtav1)
- Se você encontrar problemas de compatibilidade de versão, pode especificar o ffmpeg 7.1.1:
  ```bash
  conda install ffmpeg=7.1.1 -c conda-forge
  ```
- Você pode verificar se o codificador libsvtav1 é suportado via `ffmpeg -encoders | grep svtav1`
:::

### 5. Configuração especial para dispositivos Jetson JetPack 6.0+

(Ignore esta etapa para PC) Para dispositivos Jetson JetPack 6.0+ (certifique-se de ter instalado Pytorch-gpu e Torchvision de acordo com [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) etapa 5 antes de executar esta etapa):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies via conda, for Jetson Jetpack 6.0+ only
conda remove opencv   # Uninstall OpenCV
pip3 install opencv-python==4.10.0.84  # Install specific OpenCV version using pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This version must be compatible with torchvision
```

### 6. Verificar Pytorch e Torchvision

:::tip
Se você estiver usando um dispositivo Jetson, instale Pytorch e Torchvision de acordo com [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).
:::

Como instalar o ambiente lerobot via pip desinstalará o Pytorch e o Torchvision originais e instalará as versões para CPU, você precisa realizar uma verificação em Python.

```python
python3

import torch
print(torch.cuda.is_available())#Should output True
```

Se a saída for True, você pode digitar exit() para sair do Python e continuar com as etapas seguintes.
Se a saída for False, você precisa reinstalar Pytorch e Torchvision de acordo com o [tutorial oficial](https://pytorch.org/index.html).

## Calibrar o braço robótico

<!-- <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV1KFo7BiE1h&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> -->

Em seguida, você precisa conectar a fonte de alimentação e o cabo de dados ao seu robô reBot B601-RS para calibração, a fim de garantir que os braços líder e seguidor tenham os mesmos valores de posição quando estiverem na mesma posição física. Essa calibração é essencial porque permite que uma rede neural treinada em um robô reBot B601-RS funcione em outro. Se você precisar recalibrar o braço robótico, exclua completamente os arquivos em `~/.cache/huggingface/lerobot/calibration/robots` ou `~/.cache/huggingface/lerobot/calibration/teleoperators` e recalcibre o braço robótico. Caso contrário, aparecerá uma mensagem de erro. As informações de calibração do braço robótico serão armazenadas nos arquivos JSON deste diretório.

### Calibrar o braço seguidor

:::tip
Se você não conseguir se conectar ao seguidor, acesse o wiki de primeiros passos e tente usar a interface fornecida pelo motorbridge para testar se o braço robótico está funcionando corretamente.
:::

O B601-RS só precisa ser calibrado uma vez após a montagem. Aqui está o comando de calibração. Consulte a figura para a posição zero (garra totalmente fechada).

```bash

# follower
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up

lerobot-calibrate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_0pos.jpg" />
  </div>

Se você usar Jetson (Jetpack 6.x), use as instruções a seguir para encontrar o número da porta CAN correspondente ao seu Jetson.

```bash
for i in /sys/class/net/can*; do
    [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"
done
```

saída:

```
cam2  # also maybe can0,can1,can x
```

O número da porta para todos os comandos subsequentes do seguidor deve corresponder à saída aqui.

Se o seu Jetson não tiver o driver PCAN, a comunicação falhará constantemente. Consulte o guia de instalação do driver PCAN para Jetson na seção [Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/#3pcan-usb).


### Calibrar o braço líder

As etapas de calibração são cruciais e afetarão diretamente se o braço robótico funcionará normalmente. Siga o processo rigorosamente.

<details>

<summary> rebot 102 leader </summary>

:::tip
**Notas de calibração do reBot 102 leader**:
- Quando a calibração começa, a posição atual de cada servo no reBot Arm 102 será **redefinida para zero**
- `joint_ranges` (limites das juntas) são obtidos do arquivo de configuração `config_rebot_arm_102_leader.py`, não dos dados de calibração
- Se uma junta parecer sempre travada perto de um limite, verifique primeiro a configuração de `joint_ranges`
- As direções das juntas são definidas no arquivo de configuração. Se as direções não corresponderem, modifique a configuração em vez de recalibrar
- O reBot 102 leader usa um módulo USB-para-UART, normalmente mapeado para `/dev/ttyUSB*`
- Use `ls /dev/ttyUSB*` para verificar o número real da porta

Se esta for a primeira conexão, você poderá receber um erro informando que `/dev/ttyACM0` não pode ser encontrado. Isso ocorre porque o brltty está ocupando a porta serial. Execute as seguintes etapas:

```bash
sudo dmesg | grep ttyUSB #Check the last line shows "disconnected"
sudo apt remove brltty #Remove brltty
```
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/102_zeroposition.jpg" />
</div>

Seguindo as instruções, mova o braço líder para a posição zero mostrada acima,

```bash
sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

Mantenha-o parado e pressione Enter até que a calibração seja concluída.
Após a calibração, insira o seguinte comando para testar o braço líder.

```bash
python ./lerobot-teleoperator-rebot-arm-102/examples/read_raw_angles.py \
      --port /dev/ttyUSB0

#If you observe terminal output similar to the following printing continuously, and when at the zero position shown above, all joint output values are 0, then leader calibration is complete.
#shoulder_pan=    0.00  shoulder_lift=    0.00  elbow_flex=    0.00  wrist_flex=    0.00  wrist_yaw=    0.00  wrist_roll=    0.00  gripper=    0.00
```

</details>

## Teleoperação

:::danger
**Todos os cenários de movimento do braço robótico exigem a mesma atenção!**

Durante a teleoperação, se o braço robótico mestre-escravo sofrer desligamento de energia, mau contato de energia ou desconexão da linha de sinal, você deve primeiro parar o código do programa e retornar o braço robótico à sua posição inicial zero. Só então reconecte a fonte de alimentação e reinicie o programa. Isso evita que a desordem de dados cause fuga do braço robótico e possíveis riscos de segurança.

:::

Primeiro conceda permissões às portas seriais:

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
<!-- <div class="video-container">
    <iframe
        width="900"
        height="600"
        src="https://player.bilibili.com/player.html?bvid=BV1A6JM62EeK&page=1&high_quality=1&danmaku=0&autoplay=0&muted=1"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true">
    </iframe>
</div> -->

## Adicionar câmeras

<details>
<summary> Se estiver usando RealSense D435i/D405 </summary>

As câmeras de profundidade RealSense podem fornecer percepção RGB-D para o LeRobot e são adequadas para tarefas como reconhecimento de objetos, reconstrução de nuvens de pontos e manipulação em mesa. Os modelos recomendados aqui são **RealSense D405** e **RealSense D435i**.

**RealSense D405**

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" />
</div>

A RealSense D405 é uma câmera estéreo de profundidade de curto alcance projetada para tarefas de alta precisão em curta distância, como manipulação robótica em mesa, com faixa de trabalho típica de **7 cm a 50 cm**.

**RealSense D435i**

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" />
</div>

A RealSense D435i combina detecção de profundidade, imagem RGB e um IMU, tornando-a adequada para aplicações de médio a curto alcance, como reconstrução 3D, SLAM e percepção de ambiente robótico.

**1. Mudar para o branch da câmera**

O suporte atual para câmera está disponível no branch `DepthCameraSupport`:

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

Confirme o branch atual:

```bash
git branch --show-current
```

Saída esperada:

```bash
DepthCameraSupport
```

**2. Instalar RealSense:**

Se você usar apenas RealSense:

```bash
pip install -e ".[realsense]"
```

**3. Conceder permissões**

```bash
sudo chmod a+rw /dev/bus/usb/*/*
```

**4. Detectar câmeras**

```bash
lerobot-find-cameras realsense
```

Esta etapa exibirá:

- Modelo da câmera
- Número de série
- Informações de USB
- Configuração padrão de stream

**5. Exemplo com RealSense**

Teste com duas RealSense:

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      max_depth_m: 2.0,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    },
    d405_color: {
      type: realsense_d405_color,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d405_depth: {
      type: realsense_d405_depth,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      depth_alpha: 0.03,
      rotation: 0,
      warmup_s: 5
    }
  }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**6. Notas sobre parâmetros**

- `depth_alpha` controla o fator de escala da imagem de profundidade e pode ser ajustado com base no resultado de exibição e na faixa de distância do alvo.
- Se você conectar três ou mais câmeras de profundidade, é recomendável reduzir `fps` para `15` para melhorar a estabilidade geral.
- Recomenda-se manter a resolução em `640x480` para um melhor equilíbrio entre estabilidade e desempenho em tempo real.

</details>

<details>

<summary> Se estiver usando a câmera de profundidade Orbbec Gemini2 </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

fornecendo fluxos sincronizados de RGB e profundidade com alinhamento preciso de profundidade para cor. Combinado com detecção de profundidade estéreo e um IMU de 6 eixos integrado, é muito adequado para tarefas robóticas como detecção de objetos, percepção 3D, mapeamento e navegação. Seu design compacto e o suporte completo ao Orbbec SDK o tornam adequado tanto para pesquisa quanto para implantação em cenários reais.

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>

Gemini 336 é um novo membro da série Gemini 330. Ele herda o forte desempenho de profundidade do Gemini 335 e melhora ainda mais a qualidade de imagem de profundidade em áreas internas reflexivas, regiões escuras em cenas de alta dinâmica e ambientes externos claros. Para aplicações de robótica, ele pode fornecer dados de profundidade mais estáveis e de alta qualidade para tarefas como percepção, localização e manipulação.

* 🚀 Etapa 1: Instalar dependências do Orbbec SDK

**1. Mudar para o branch da câmera**

O suporte atual à câmera está disponível no branch `DepthCameraSupport`:

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

Confirme o branch atual:

```bash
git branch --show-current
```

Saída esperada:

```bash
DepthCameraSupport
```

**2. Instalar Orbbec**

```bash
pip install -e ".[orbbec]"
```

**3. Conceder permissões**

```bash
sudo chmod a+rw /dev/bus/usb/*/*
```

**4. Detectar câmeras**

```bash
lerobot-find-cameras orbbec
```

Esta etapa exibirá:

- Modelo da câmera
- Número de série
- Informações de USB
- Configuração padrão de fluxo

**5. Exemplo Orbbec**

Teste de uma única Orbbec:

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      rotation: 0,
      warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 400,
      fps: 30,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    }
  }" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**6. Observações sobre parâmetros**

- `depth_alpha` controla o fator de escala da imagem de profundidade. Um bom ponto de partida é `0.2`, depois você pode ajustá-lo com base no resultado exibido.
- Se você conectar três ou mais câmeras de profundidade, é recomendável reduzir o `fps` para `15` para melhor estabilidade.
- Recomenda-se manter a resolução em `640x480` para uma exibição e transferência de dados mais estáveis.

**7. Problemas comuns**

Se você vir o seguinte erro:

```bash
No Orbbec camera found for 'XXXX'
```

isso geralmente significa que o número de série na configuração não corresponde ao dispositivo atualmente conectado. Execute:

```bash
lerobot-find-cameras orbbec
```

Em seguida, confirme o `serial` real e atualize `serial_number_or_name` no seu comando.

**💡 Autor e contribuição**

- Autor: Zhang Jiaquan, Wang Wenzhao - South China Normal University

</details>

<details>

<summary> Se estiver usando uma câmera genérica </summary>

Para instanciar uma câmera, você precisa de um identificador de câmera. Esse identificador pode mudar se você reiniciar o computador ou reconectar a câmera, um comportamento que depende principalmente do seu sistema operacional.

Para encontrar os índices das câmeras conectadas ao seu sistema, execute o seguinte script:

```bash
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

O terminal exibirá informações relevantes da câmera.

```markdown
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

Você pode encontrar as fotos tiradas por cada câmera no diretório `~/lerobot/outputs/captured_images`.

:::warning
Ao usar câmeras Intel RealSense no **macOS**, você pode receber este erro: **"Error finding RealSense cameras: failed to set power state"**. Isso pode ser resolvido executando o mesmo comando com permissões de `sudo`. Observe que o uso de câmeras RealSense no **macOS** é instável.
:::

Depois disso, você poderá exibir as câmeras no seu computador enquanto estiver teleoperando, executando o código a seguir. Isso é útil para preparar sua configuração antes de gravar seu primeiro conjunto de dados.

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

:::tip
Imagens no formato `fourcc: "MJPG"` são compactadas. Você pode tentar resoluções mais altas e também pode experimentar o formato `YUYV`. No entanto, este último reduzirá a resolução da imagem e o FPS, causando atraso na operação do braço robótico. Atualmente, no formato `MJPG`, é possível suportar 3 câmeras com resolução de `1920*1080` mantendo `30FPS`. No entanto, ainda não é recomendado conectar 2 câmeras a um computador por meio do mesmo HUB USB.
:::

Se você tiver mais câmeras, pode alterar o parâmetro `--robot.cameras` para adicioná-las. Você deve observar o formato de `index_or_path`, que é determinado pelo último dígito do ID da câmera exibido por `python -m lerobot.find_cameras opencv`.

Por exemplo, se você quiser adicionar uma câmera:

<!-- TODO: reBot multi-camera configuration command -->
```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

</details>

## Coleta de conjunto de dados

<!-- <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV1W3okBNEAJ&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> -->

<details>

<summary> Se você quiser salvar o conjunto de dados localmente </summary>

<!-- TODO: reBot local data collection command -->
```bash
lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30
```

Entre eles, `repo_id` pode ser modificado de forma personalizada, e `push_to_hub=false`. Por fim, o conjunto de dados será salvo no diretório `~/.cache/huggingface/lerobot` na pasta home, onde a pasta `seeed_rebot_b601_rs/test` mencionada acima será criada.

</details>

<details>
<summary> Se você quiser usar os recursos do Hugging Face Hub para enviar seu conjunto de dados </summary>

- Se você quiser usar os recursos do Hugging Face Hub para enviar seu conjunto de dados e ainda não tiver feito isso antes, certifique-se de ter feito login usando um token com permissão de escrita, que pode ser gerado nas [configurações do Hugging Face](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Armazene o nome do seu repositório Hugging Face em uma variável para executar estes comandos:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Grave 5 episódios e envie seu conjunto de dados para o Hub:

<!-- TODO: reBot data collection and upload to Hugging Face command -->
```bash
lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30
```

Você verá muitas linhas aparecendo como esta:
```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

</details>

**Função de gravação**

A função **record** fornece um conjunto de ferramentas para capturar e gerenciar dados durante a operação do robô.

**1. Armazenamento de dados**

- Os dados são armazenados usando o formato `LeRobotDataset` e são gravados em disco durante a gravação.
- Por padrão, o conjunto de dados é enviado para a sua página do Hugging Face após a gravação.
- Para desativar o envio, use: `--dataset.push_to_hub=False`.

**2. Checkpoint e retomada**

- Pontos de verificação são criados automaticamente durante a gravação.
- Para retomar após uma interrupção, execute novamente o mesmo comando com: `--resume=true`

⚠️ **Nota importante**: Ao retomar, defina `--dataset.num_episodes` como o número de episódios adicionais a serem gravados (não o número total de episódios desejado no dataset).
- Para iniciar a gravação do zero, **exclua manualmente** o diretório do dataset.

**3. Parâmetros de gravação**

Defina o fluxo de gravação de dados usando argumentos de linha de comando:

| Parâmetro | Descrição | Padrão |
|------|------|--------|
| --dataset.episode_time_s | Duração por episódio de dados (segundos) | 60 |
| --dataset.reset_time_s | Tempo de reinicialização do ambiente após cada episódio (segundos) | 60 |
| --dataset.num_episodes | Total de episódios a serem gravados | 50 |

**4. Controles de teclado durante a gravação**

Controle o fluxo de gravação de dados usando atalhos de teclado:

| Tecla | Ação |
|----|------|
| → (Seta para a direita) | Encerrar antecipadamente o episódio atual/reiniciar; ir para o próximo. |
| ← (Seta para a esquerda) | Cancelar o episódio atual; regravá-lo. |
| ESC | Parar a sessão imediatamente, codificar vídeos e enviar o dataset. |

:::tip
Se as teclas do seu teclado não estiverem respondendo, talvez seja necessário fazer o downgrade da sua versão do pynput, por exemplo, instalando a versão 1.6.8.
```bash
pip install pynput==1.6.8
```
:::

**Dicas para coletar dados**

- **Sugestão de tarefa**: Agarrar objetos em diferentes locais e colocá-los em uma caixa.
- **Escala**: Grave ≥50 episódios (10 episódios por local).
- **Consistência**:
  - Mantenha as câmeras fixas.
  - Mantenha o mesmo comportamento de preensão.
  - Garanta que os objetos manipulados estejam visíveis nas imagens das câmeras.
- **Progressão**:
  - Comece com preensões confiáveis antes de adicionar variações (novos locais, técnicas de preensão, ajustes de câmera).
  - Evite aumentar a complexidade rapidamente para prevenir falhas.

💡 **Regra geral**: Você deve ser capaz de executar a tarefa apenas olhando para as imagens da câmera na tela.

Se quiser se aprofundar neste tópico importante, você pode conferir o [post no blog](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) que escrevemos sobre o que torna um bom dataset.

**Solução de problemas**

Problema específico do Linux:
Se as teclas Seta para a direita/Seta para a esquerda/ESC não responderem durante a gravação:
- Verifique se a variável de ambiente `$DISPLAY` está definida (consulte as [limitações do pynput](https://pynput.readthedocs.io/en/latest/limitations.html)).

## Visualizar o dataset

```bash
echo ${HF_USER}/rebot_test
```

Se você enviou os dados, também pode visualizá-los localmente com o seguinte comando:

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false
```

Se você usou `--dataset.push_to_hub=false` e não enviou os dados, também pode visualizá-los localmente com:

```bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_rs/test \
  --episode-index 0 \
  --display-compressed-images=false
```

Aqui, `seeed_rebot_b601_rs/test` é o nome personalizado de `repo_id` definido durante a coleta de dados.

## Reproduzir um episódio

:::tip
Instável, pode ser ignorado ou testado.
:::

Agora, tente reproduzir o primeiro dataset no seu robô:

<!-- TODO: reBot dataset replay command -->
```bash
lerobot-replay \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.can_adapter=socketcan \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.episode=0
```

Neste ponto, o robô deve executar as mesmas ações que você realizou por teleoperação durante a gravação.

## Treinamento e avaliação

<details>
<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

Consulte o tutorial oficial [ACT](https://huggingface.co/docs/lerobot/act)

**Treinamento**

Para treinar uma política para controlar seu robô, use o script `python -m lerobot.scripts.train`. Alguns parâmetros são obrigatórios. Aqui está um comando de exemplo:

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/rebot_test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000
```

**Se você quiser treinar em um dataset local, certifique-se de que o `repo_id` corresponda ao nome usado durante a coleta de dados e adicione `--policy.push_to_hub=false`.**

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

:::tip

Se você estiver usando uma GPU da série RTX 50, será necessário adicionar `--dataset.video_backend=pyav` para contornar APIs ausentes na versão de prévia do torchvision. O comando de treinamento se torna:

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

:::

Explicação do comando

- **Especificação do dataset**: Fornecemos o dataset por meio do parâmetro `--dataset.repo_id=${HF_USER}/rebot_test`.
- **Passos de treinamento**: Modificamos o número de passos de treinamento usando `--steps=300000`. O algoritmo usa por padrão 800000 passos; ajuste com base na dificuldade da sua tarefa. Você pode defini-lo como um valor maior se não tiver certeza, pois pontos de verificação são gerados durante o treinamento e a avaliação pode ser retomada a partir de qualquer ponto de verificação.
- **Tipo de política**: Fornecemos a política com `policy.type=act`. Da mesma forma, você pode alternar entre políticas como [`act`, `diffusion`, `pi0`, `pi0fast`, `sac`, `smolvla`]. Isso carregará a configuração de `configuration_act.py`. Importante: essa política se adaptará automaticamente aos estados dos motores do seu robô, às ações dos motores e ao número de câmeras, pois essas informações já estão armazenadas no seu dataset.
- **Seleção de dispositivo**: Fornecemos `policy.device=cuda` porque estamos treinando em uma GPU Nvidia, mas você pode usar `policy.device=mps` para treinar em Apple Silicon.
- **Ferramenta de visualização**: Fornecemos `wandb.enable=true` para visualizar gráficos de treinamento usando o [Weights and Biases](https://docs.wandb.ai/quickstart). Isso é opcional, mas, se você o usar, certifique-se de ter feito login executando `wandb login`.

**Avaliação**

Você pode usar a função `record` de [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py), mas com um checkpoint de política como entrada. Por exemplo, execute este comando para gravar 10 episódios de avaliação:

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model
```

1. O parâmetro `--policy.path` indica o caminho para o arquivo de pesos dos resultados do treinamento da sua política (por exemplo, `outputs/train/act_rebot_test/checkpoints/last/pretrained_model`). Se você enviar o arquivo de pesos do resultado do treinamento do modelo para o Hub, também poderá usar o repositório do modelo (por exemplo, `${HF_USER}/act_rebot_test`).
2. O nome do dataset `dataset.repo_id` começa com `eval_`. Essa operação gravará separadamente vídeos e dados durante a avaliação, que serão salvos na pasta que começa com `eval_`, como `seeed/eval_test123`.
3. Se você encontrar `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` durante a fase de avaliação, exclua primeiro a pasta que começa com `eval_` e execute o programa novamente.
4. Ao encontrar `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, observe que palavras-chave como `front` e `side` no parâmetro `--robot.cameras` devem ser estritamente consistentes com as usadas ao coletar o dataset.

</details>

<details>
<summary>[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) </summary>

Consulte o tutorial oficial [SmolVLA](https://huggingface.co/docs/lerobot/smolvla).

SmolVLA é um **modelo base leve para robótica** fornecido pela Hugging Face. Ele foi projetado para permitir que você use seu próprio dataset LeRobot gravado e **faça o fine-tuning rapidamente** para obter resultados em robôs reais.

Simplificando, suas entradas/saídas são:

- Entrada: imagens de múltiplas câmeras + estado atual do robô (sensores/juntas etc.) + uma instrução de tarefa em linguagem natural
- Saída: um bloco contínuo de ações para mover o braço robótico e executar a tarefa

```bash
pip install -e ".[smolvla]"
```

**Coleta de datasets (recomendado)**

SmolVLA é um "modelo base". Para ter um bom desempenho na sua bancada, com suas câmeras, garra e objetos, normalmente é necessário fazer o fine-tuning com seus próprios dados.

- Comece com ~50 episódios (muito poucos podem levar a aprendizado/generalização ruins).
- Se sua tarefa tiver "variáveis" (por exemplo, diferentes posições de cubos na mesa), garanta que cada variação tenha demonstrações suficientes:
  - Exemplo: 5 posições × 10 episódios cada = 50 episódios
- Experiência: Gravar apenas 25 episódios geralmente é insuficiente. Tanto a qualidade quanto a quantidade de dados são importantes.

**Treinamento**

Use `smolvla_base` (o modelo pré-treinado de 450M) como ponto de partida e faça o fine-tuning no seu dataset. O exemplo oficial treina por 20k passos; em uma única A100 isso leva cerca de 4 horas (apenas para referência; o tempo real varia conforme o hardware).

Se você não tiver uma GPU disponível, considere treinar por meio de um notebook Colab (consulte o tutorial oficial).

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

Dicas:

- Se você ficar sem memória, reduza primeiro o `--batch_size`. Quando estiver rodando, aumente gradualmente.
- Para ver os parâmetros disponíveis: `lerobot-train --help`

**Avaliação**

A fase de avaliação carrega seu modelo ajustado, permite que o robô execute a tarefa e registra o processo de avaliação como um novo conjunto de dados (para revisar vídeos e analisar resultados).

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.id=follower1 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --dataset.single_task="Grasp a lego block and put it in the bin." \
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=${HF_USER}/FINETUNE_MODEL_NAME
```

Como preencher os parâmetros:

- `--robot.port`: Altere para a porta serial reconhecida na sua máquina (geralmente `can0` ou `/dev/ttyACM0`).
- `--robot.id`: O ID do seu robô (deve corresponder ao que você usou durante a calibração/gravação).
- `--robot.cameras`: Altere para o `index_or_path` da sua câmera real e garanta que as chaves das câmeras (por exemplo, `front`, `side`) correspondam exatamente ao que você usou ao gravar o conjunto de dados.
- `--dataset.single_task`: Deve corresponder à descrição da tarefa usada ao gravar o conjunto de dados.
- `--dataset.repo_id`: Nome do conjunto de dados de saída da avaliação; se você estiver conectado ao Hugging Face, ele será criado/enviado para a sua conta.
- `--policy.path`:
  - Se o modelo for local: preencha com o caminho dos pesos no diretório de saída do treinamento (por exemplo, `outputs/train/my_smolvla/checkpoints/last/pretrained_model`)
  - Se o modelo estiver no Hub: preencha com `${HF_USER}/FINETUNE_MODEL_NAME`

Opcional: Se você quiser "teleoperar manualmente para ajustar" entre episódios de avaliação, pode adicionar teleop (preencha de acordo com seu dispositivo e configuração):

```bash
--teleop.type=rebot_arm_102_leader \
--teleop.port=/dev/ttyUSB0 \
--teleop.id=rebot_arm_102_leader
```

</details>

<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

Consulte o tutorial oficial [Pi0](https://huggingface.co/docs/lerobot/pi0).

π₀ (Pi0) é um modelo de **Visão-Linguagem-Ação** proposto pela Physical Intelligence para um controle de robô mais "geral". Você pode entendê-lo assim: ele consegue tanto ver imagens da câmera quanto entender uma instrução em linguagem natural e então gerar ações para controlar o braço robótico.

Usá-lo no LeRobot é simples: basta definir o tipo de política como `--policy.type=pi0` durante o treinamento (não é necessário repetir os conceitos gerais de treinamento/avaliação abordados na seção ACT).

```bash
pip install -e ".[pi]"
```

:::tip
Se você estiver usando uma versão mais antiga do LeRobot (por exemplo, 0.4.0), talvez seja necessário instalar a dependência `pi` a partir do código-fonte no GitHub (a documentação oficial corrigirá isso em um patch subsequente):

```bash
pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"
```

:::

**Treinamento**

```bash
lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.repo_id=${HF_USER}/my_pi0_policy \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --policy.freeze_vision_encoder=false \
  --policy.train_expert_only=false \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false
```

Parâmetros comuns (apenas os específicos do Pi0 / mais frequentemente ajustados):

- `--policy.pretrained_path=lerobot/pi0_base`: Modelo base. Oficialmente também é fornecido `lerobot/pi0_libero` (versão orientada ao conjunto de dados Libero); você pode tentar alternar com base na sua tarefa.
- `--policy.compile_model=true`: Habilita otimização por compilação; o treinamento pode ficar mais rápido (a primeira compilação é mais lenta).
- `--policy.gradient_checkpointing=true`: Economiza significativamente VRAM, adequado quando a VRAM é limitada.
- `--policy.dtype=bfloat16`: Precisão mista, mais amigável para velocidade/VRAM (recomendado quando o hardware suporta).
- `--policy.train_expert_only=true` (truque para economizar VRAM): Congela a parte do modelo grande (VLM), treinando apenas o "especialista de ação" e as camadas de projeção; economiza mais VRAM, mas a capacidade treinável é mais limitada, adequado para começar ou para experimentos rápidos com poucos dados.

**Avaliação**

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_my_pi0_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

Consulte o tutorial oficial [Pi0.5](https://huggingface.co/docs/lerobot/pi05).

π₀.₅ (Pi0.5) também é um modelo de **Visão-Linguagem-Ação** proposto pela Physical Intelligence, que pode ser entendido como uma "versão aprimorada" do π₀, com foco em uma capacidade reforçada de **generalização em mundo aberto**: não apenas ter bom desempenho em cenários fixos vistos durante o treinamento, mas também concluir tarefas de forma mais confiável em novos ambientes, com novos objetos e novas disposições.

A "generalização" que ele aborda pode ser aproximadamente dividida em três níveis (exemplos para entendimento):

- **Camada física**: Agarrar uma colher/prato desconhecido sabendo como segurá-lo (cabo/borda) e operar em ambientes desorganizados.
- **Camada semântica**: Entender "onde colocar as coisas / qual ferramenta usar", por exemplo, sapatos devem ir no sapateiro, roupas no cesto de roupa suja.
- **Camada ambiental**: Adaptar-se a cenários "bagunçados" mais realistas, como casas, escritórios, hospitais etc.

Para usá-lo no LeRobot: basta definir o tipo de política como `--policy.type=pi05`.

```bash
pip install -e ".[pi]"
```

:::tip
Se você estiver usando uma versão mais antiga do LeRobot (por exemplo, 0.4.0), talvez seja necessário instalar a dependência `pi` a partir do código-fonte no GitHub (a documentação oficial corrigirá isso em um patch subsequente):

```bash
pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"
```

:::

**Treinamento**

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=pi05 \
  --output_dir=outputs/pi05_training \
  --job_name=pi05_training \
  --policy.repo_id=${HF_USER}/my_pi05_policy \
  --policy.pretrained_path=lerobot/pi05_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --policy.freeze_vision_encoder=false \
  --policy.train_expert_only=false \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false
```

Parâmetros comuns (relacionados ao Pi0.5):

- `--policy.pretrained_path=lerobot/pi05_base`: Modelo base. Oficialmente também é fornecido `lerobot/pi05_libero`.
- `--policy.train_expert_only=true` (truque para economizar VRAM): Congela a parte do modelo grande (VLM), treinando apenas o "especialista de ação" e as camadas de projeção.
- `--policy.normalization_mapping=...`: Se as estatísticas de normalização do seu conjunto de dados não corresponderem / estiverem ausentes, você pode usar esse mapeamento para forçar um método de normalização.

Se o seu conjunto de dados não tiver estatísticas de quantis (exigidas por algumas versões/formats), a documentação oficial também fornece uma abordagem com script de conversão: completar/convertar as estatísticas do conjunto de dados antes do treinamento (consulte a documentação oficial para detalhes).

**Avaliação**

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_my_pi05_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

Consulte o tutorial oficial [GR00T N1.5](https://huggingface.co/docs/lerobot/groot).

GR00T N1.5 é um modelo base aberto fornecido pela NVIDIA para um aprendizado e raciocínio de habilidades robóticas mais gerais. É um modelo de **corpo cruzado (cross-embodiment)**: ele pode receber entradas multimodais como **linguagem** e **imagens** e executar tarefas de manipulação em diferentes ambientes.

A chave para usá-lo no LeRobot é definir o tipo de política como `--policy.type=groot`. Observação: o GR00T N1.5 atualmente tem requisitos de ambiente mais altos (depende de FlashAttention e requer uma GPU CUDA). Recomenda-se fazer o ACT / Pi0 funcionar primeiro antes de tentar o GR00T.

**Instalação (Importante)**

De acordo com a documentação oficial, o GR00T N1.5 requer **flash-attn** para funcionar e só pode ser usado em **dispositivos compatíveis com CUDA**.

Etapas recomendadas (execute na ordem):

1. Configure primeiro o ambiente base (Python, CUDA, drivers etc.) seguindo o guia de instalação. **Não instale `lerobot` nesta etapa**.
2. Instale o PyTorch (faixa de versões conforme os requisitos oficiais):

```bash
pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"
```

:::tip
Se você estiver usando a série RTX 50, você precisa de: Python=3.10, CUDA=12.8, Torch=2.7.1

```bash
pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu128
```
:::

3. Instale a dependência flash-attn e o próprio flash-attn:

```bash
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} imported successfully')"
```

:::tip
Se você estiver usando a série RTX 50, você precisa de: flash_attn=2.8.0

```bash
pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation
```
:::

4. Instale a dependência groot do LeRobot:

```bash
pip install "lerobot[groot]"
```

:::tip
Se a instalação do flash-attn falhar, geralmente está relacionada a (1) incompatibilidade entre as versões do PyTorch/CUDA, (2) dependências de compilação ausentes ou (3) ambiente muito novo/muito antigo. Nesse caso, consulte primeiro a documentação oficial do GR00T e o guia de instalação do PyTorch.
:::

**Treinamento (Fine-tuning)**

O projeto oficial fornece um exemplo de treinamento multi-GPU (`accelerate launch --multi_gpu ...`). Se você tiver apenas uma GPU, também pode tentar executá-lo primeiro no modo de processo único (o suporte/detalhes dos parâmetros estão sujeitos à documentação oficial).

Multi-GPU (variáveis precisam ser substituídas):

```bash
accelerate launch \
  --multi_gpu \
  --num_processes=$NUM_GPUS \
  $(which lerobot-train) \
  --output_dir=$OUTPUT_DIR \
  --save_checkpoint=true \
  --batch_size=$BATCH_SIZE \
  --steps=$NUM_STEPS \
  --save_freq=$SAVE_FREQ \
  --log_freq=$LOG_FREQ \
  --policy.push_to_hub=true \
  --policy.type=groot \
  --policy.repo_id=$REPO_ID \
  --policy.tune_diffusion_model=false \
  --dataset.repo_id=$DATASET_ID \
  --wandb.enable=true \
  --wandb.disable_artifact=true \
  --job_name=$JOB_NAME
```

Explicação dos parâmetros (os mais comumente modificados):

- `--dataset.repo_id`: Seu conjunto de dados de treinamento (`username/dataset_name` no Hub ou cache local correspondente ao `repo_id`).
- `--output_dir`: Diretório de saída do treinamento (os pesos/checkpoints serão colocados aqui).
- `--steps`, `--batch_size`: Passos de treinamento e tamanho do batch. Modelos grandes são sensíveis à VRAM; se não rodar, reduza o `batch_size` primeiro.
- `--policy.repo_id`: Se você quiser enviar o modelo para o Hub, preencha o nome do repositório de modelo que deseja criar.

**Avaliação (Execução no Robô)**

Após o treinamento, você pode usar `lerobot-record` para avaliação/gravação como em outras políticas. Para usuários de braço único do reBot B601-RS, consulte o seguinte comando:

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30} }' \
  --robot.id=follower1 \
  --display_data=true \
  --dataset.repo_id=${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab the black cube and put it in the box" \
  --policy.path=${HF_USER}/groot-rebot \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10
```

Licença: Este modelo segue a licença Apache 2.0 (consistente com o repositório GR00T original).

</details>

<details>
<summary>(Opcional) Fine-tuning Eficiente com PEFT</summary>

PEFT (Parameter-Efficient Fine-Tuning) é um conjunto de métodos e ferramentas de "adaptação eficiente em parâmetros" para adaptar grandes modelos pré-treinados a novas tarefas **sem atualizar todos os parâmetros do modelo**. Para as políticas pré-treinadas do LeRobot (por exemplo, SmolVLA, π₀, etc.), você geralmente pode treinar apenas um pequeno número de parâmetros "adaptadores" (por exemplo, LoRA) para obter resultados próximos ao fine-tuning completo, reduzindo o uso de VRAM e o custo de treinamento.

**Instalação**

Instale a dependência opcional `peft` do LeRobot para usar parâmetros relacionados ao PEFT:

```bash
# Method 1: Source installation (in the lerobot root directory)
pip install -e ".[peft]"
```

```bash
# Method 2: pip installation
pip install "lerobot[peft]"
```

Para mais métodos de adaptação e explicações de conceitos, consulte a documentação oficial:
[🤗 PEFT Documentation](https://huggingface.co/docs/peft/index)

**Exemplo: Fine-tuning do SmolVLA com LoRA (subtarefa libero_spatial do Libero)**

O exemplo a seguir mostra como realizar o fine-tuning com LoRA de `lerobot/smolvla_base` no conjunto de dados `HuggingFaceVLA/libero`. Os nomes dos parâmetros são baseados na versão atual do LeRobot; consulte também `lerobot-train --help`.

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --policy.repo_id=${HF_USER}/my_libero_smolvla_peft \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_spatial \
  --output_dir=outputs/train/my_libero_smolvla_peft \
  --job_name=my_libero_smolvla_peft \
  --policy.device=cuda \
  --steps=10000 \
  --batch_size=32 \
  --optimizer.lr=1e-3 \
  --peft.method_type=LORA \
  --peft.r=64
```

**Principais Parâmetros de PEFT**

- `--peft.method_type`: Seleciona o método PEFT. LoRA (Low-Rank Adapter) é um dos métodos mais usados.
- `--peft.r`: Rank do LoRA. Em geral, um rank maior significa maior capacidade de expressão, mas também mais parâmetros e maior uso de VRAM.

**Especificando Camadas para Injetar LoRA (Opcional)**

Por padrão, o PEFT normalmente injeta LoRA nas camadas de projeção mais críticas do modelo (por exemplo, `q_proj`, `v_proj` da atenção, etc.) e pode cobrir adicionalmente camadas de projeção relacionadas a estado/ação. Se você precisar mirar em camadas diferentes, use `--peft.target_modules` para especificar as camadas alvo.

Padrões comuns incluem:

1) Por lista de sufixos de nomes de módulos (exemplo):

```bash
--peft.target_modules="['q_proj', 'v_proj']"
```

2) Usando uma expressão regular (exemplo, ajuste de acordo com os nomes reais dos módulos):

```bash
--peft.target_modules='(model\\.vlm_with_expert\\.lm_expert\\..*\\.(down|gate|up)_proj|.*\\.(state_proj|action_in_proj|action_out_proj|action_time_mlp_in|action_time_mlp_out))'
```

**Especificando Certas Camadas para Treinamento Completo (Opcional)**

Se você quiser que certos módulos sejam "totalmente treinados" (em vez de apenas injetar LoRA), use `--peft.full_training_modules` para especificá-los. Por exemplo, treinar completamente apenas `state_proj`:

```bash
--peft.full_training_modules="['state_proj']"
```

**Recomendações de Taxa de Aprendizado (Valores de Experiência)**

A taxa de aprendizado do LoRA geralmente pode ser uma ordem de grandeza maior do que no fine-tuning completo (experiência comum: ~10x). Por exemplo, o fine-tuning completo costuma usar `1e-4`, enquanto o LoRA pode começar em `1e-3`; se você tiver decaimento de taxa de aprendizado (scheduler) ativado, a taxa de aprendizado final também costuma ser definida em torno de `1e-4` como referência.

</details>

<details>
<summary>(Opcional) Treinamento Multi-GPU</summary>

**1. Etapas de Treinamento**

**Método Um: Treinamento Multi-GPU via Argumentos de Linha de Comando**

Primeiro, instale o sistema de aceleração de treinamento no seu ambiente lerobot:

```bash
pip install accelerate
```

Em seguida, execute o seguinte comando para iniciar o treinamento multi-GPU:

```bash
accelerate launch \
  --multi_gpu \
  --num_processes=2 \
  $(which lerobot-train) \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true
```

Explicação dos principais parâmetros do accelerate:

- `--multi_gpu`: Habilita o treinamento multi-GPU
- `--num_processes=2`: Número de GPUs a serem usadas (geralmente igual ao número de GPUs)
- `--mixed_precision=fp16`: Usa precisão mista fp16 (ou bf16 se o seu hardware suportar)

Observe que **bf16 requer suporte de hardware** e não está disponível em todas as GPUs.

| Tipo de Precisão | Suporte de Hardware |
|--|--|
| fp16 | Suportado por quase todas as GPUs NVIDIA |
| bf16 | Suportado apenas em GPUs mais novas (arquitetura Ampere e posteriores) |

Se a sua GPU não suportar bf16, escolha fp16 na configuração do accelerate ou especifique fp16 explicitamente na linha de comando.

**Método Dois: Usando um Arquivo de Configuração do Accelerate (Opcional)**

Se você realiza treinamento multi-GPU com frequência, pode salvar a configuração de treinamento acima para evitar entradas repetitivas na linha de comando.

> **Dica**: Se você não entender esta seção ou apenas quiser começar rapidamente,
> **pode ignorar esta seção e usar o Método Um (argumentos de linha de comando).**

O objetivo do `accelerate config` é:

**Salvar seu ambiente de hardware (contagem de GPUs, precisão mista, etc.) como um arquivo de configuração,
para que você não precise preencher repetidamente esses parâmetros ao executar `accelerate launch` no futuro.**

Ele não altera nenhuma lógica de treinamento do LeRobot; apenas reduz a entrada repetitiva de parâmetros.

Se você **usar multi-GPU apenas ocasionalmente**, ou se esta for sua primeira tentativa, **não há problema em não usá-lo**.

---

Execute:

```bash
accelerate config
```

No processo de configuração interativa, para o cenário comum de multi-GPU em uma única máquina, você pode selecionar da seguinte forma:

- Ambiente de computação: Esta máquina
- Número de máquinas: 1
- Número de processos: Número de GPUs a serem usadas (geralmente igual ao número de GPUs)
- IDs de GPU a serem usadas: Pressione Enter diretamente (significa usar todas as GPUs)
- Precisão mista:
  - Preferir fp16
  - Se você confirmar que a GPU suporta bf16, também pode escolher bf16

Após a configuração, você pode treinar com:

```bash
accelerate launch $(which lerobot-train) \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true
```

**Impacto do Treinamento Multi-GPU nos Parâmetros de Treinamento e Estratégias de Ajuste**

O LeRobot não ajusta automaticamente a taxa de aprendizado ou os passos de treinamento com base no número de GPUs, para evitar alterar o comportamento de treinamento sem o conhecimento do usuário. Isso difere de outros frameworks de treinamento distribuído comumente usados.

Se você quiser **ajustar hiperparâmetros para treinamento multi-GPU**, precisa fazê-lo manualmente seguindo estas etapas.

**Impacto nos Passos e Estratégia de Ajuste**

Como o multi-GPU aumenta o tamanho efetivo do batch (batch_size × num_gpus):

(Para entender isso de forma intuitiva: se o treinamento é como caminhar, uma GPU dá um passo de um metro, duas GPUs dão um passo de dois metros. Para alcançar a mesma distância (dados totais aprendidos pelo modelo), o treinamento com duas GPUs deve reduzir os passos pela metade. Da mesma forma, n GPUs = 1/n.)

Portanto, ao treinar com várias GPUs, você deve reduzir adequadamente o número de passos de treinamento.

Treinamento com uma única GPU:

- batch_size = 8
- steps = 100000

Treinamento com duas GPUs (o tamanho efetivo do batch se torna 16):

- batch_size, se ainda estiver definido como 8
- steps podem ser reduzidos para 50000

```bash
accelerate launch --num_processes=2 $(which lerobot-train) \
  --batch_size=8 \
  --steps=50000 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act
```

**Impacto na Taxa de Aprendizado e Estratégia de Ajuste**

Ao usar várias GPUs, cada atualização de step usa mais amostras.

Se você quiser manter a "velocidade de aprendizado" do modelo semelhante à de uma única GPU,
normalmente é necessário aumentar a taxa de aprendizado proporcionalmente ao número de GPUs.

- Nova taxa de aprendizado = taxa de aprendizado de uma única GPU × número de GPUs

Por exemplo:

Se a taxa de aprendizado de uma única GPU (optimizer.lr) for 1e-4,
ao usar 2 GPUs, você pode alterá-la para 2e-4:

```bash
accelerate launch --num_processes=2 $(which lerobot-train) \
  --optimizer.lr=2e-4 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act
```

Observação:

Estas não são regras obrigatórias, mas boas práticas comuns.

Se você não tiver certeza de como ajustar, você também pode:

- Manter a taxa de aprendizado inalterada
- Manter os steps de treinamento inalterados

Desde que o processo de treinamento seja estável, os resultados ainda serão utilizáveis.

Para configurações mais avançadas e solução de problemas, consulte a documentação do [Accelerate](https://huggingface.co/docs/accelerate/index). Se quiser aprender mais sobre treinamento em um grande número de GPUs, confira este excelente guia: [Ultrascale Playbook](https://github.com/huggingface/ultrascale-playbook).
</details>

<details>
<summary>(Opcional) Usando Inferência Assíncrona para Implantação</summary>

Sem inferência assíncrona, o fluxo de controle do LeRobot pode ser entendido como inferência sequencial/síncrona convencional: a política prediz um bloco de ações, depois o executa, e então espera pela próxima predição. Para modelos maiores, isso pode causar pausas perceptíveis enquanto o robô espera por novos blocos de ações. O objetivo da inferência assíncrona é permitir que o robô execute o bloco de ações atual enquanto pré-computa o próximo, reduzindo o tempo ocioso e melhorando a capacidade de resposta. A inferência assíncrona se aplica a políticas compatíveis com LeRobot que produzem blocos de ações, como ACT, OpenVLA, Pi0, SmolVLA. Como a inferência e o controle real são desacoplados, a inferência assíncrona também permite usar máquinas mais poderosas para a inferência do robô remotamente.

Você pode ler mais sobre inferência assíncrona neste [post do blog](https://huggingface.co/blog/async-robot-inference) da Hugging Face.

Vamos apresentar alguns conceitos básicos:

- **Cliente**: Conecta-se ao braço robótico e às câmeras, coleta observações (imagens, pose do robô etc.), envia-as para o servidor; também recebe blocos de ações do servidor e os executa em ordem.
- **Servidor**: O dispositivo que fornece poder de computação. Recebe dados da câmera e do robô, infere (computa) blocos de ações e os envia de volta ao cliente. Pode ser o mesmo dispositivo conectado ao robô e às câmeras, outro computador na mesma LAN ou um servidor em nuvem.
- **Bloco de ações**: Uma série de comandos de ação do braço robótico, produzidos pela política por meio de inferência no servidor.
- **Inferência síncrona**: Prediz um bloco, executa um bloco; o robô terá intervalos ociosos esperando o próximo bloco ser inferido. Quando o modelo é maior e o poder de computação é insuficiente, a lacuna de inferência é significativa — o braço se move, depois pausa (inferência), depois se move novamente.
- **Inferência assíncrona**: Diferente da inferência síncrona, enquanto o robô executa o bloco atual, o servidor já está computando o próximo bloco; partes sobrepostas são agregadas para um controle mais responsivo.

**Três Cenários de Implantação com Inferência Assíncrona**

**1. Implantação em Única Máquina**

Robô, câmeras, cliente e servidor estão todos no mesmo dispositivo.
Este é o caso mais simples — o servidor escuta em 127.0.0.1, e o cliente também se conecta a 127.0.0.1:port. Os exemplos de comando na documentação oficial seguem este cenário.

**2. Implantação em LAN**

Robô e câmeras se conectam a um dispositivo leve, e o servidor de política é executado em outro dispositivo de alta computação na mesma LAN.
Nesse caso, o servidor deve escutar em um endereço acessível a outras máquinas, e o cliente deve se conectar ao IP de LAN do servidor, não a 127.0.0.1.

**3. Implantação entre Redes / em Nuvem**

O servidor de política é executado em um host de nuvem publicamente acessível, e o cliente se conecta via rede pública.
Essa abordagem pode aproveitar GPUs mais potentes em hosts de nuvem. Com boas condições de rede, o tempo de ida e volta (latência de rede) pode ser relativamente pequeno em comparação com o tempo de inferência, mas isso depende do seu ambiente de rede real.

> Nota de segurança: O pipeline de inferência assíncrona do LeRobot apresenta riscos de gRPC sem autenticação + desserialização com pickle. Se o servidor hospedar informações ou serviços importantes, não é recomendado expor o serviço diretamente à internet pública ao implantar em uma rede pública. Uma abordagem mais segura é usar VPN, tunelamento SSH ou, pelo menos, restringir os IPs de origem do grupo de segurança ao IP público do seu cliente.

**Iniciando a Implantação com Inferência Assíncrona**

**Passo 1: Configuração de Ambiente**

Primeiro, instale as dependências adicionais necessárias para inferência assíncrona usando pip. Tanto o cliente quanto o servidor precisam ter o lerobot instalado com a dependência extra:

```bash
pip install -e ".[async]"
```

**Passo 2: Configuração e Verificação de Rede**

**1. Problemas de Proxy**

Se o seu terminal tiver variáveis de ambiente de proxy configuradas e ocorrerem problemas de conexão, você pode desativá-las temporariamente:

```bash
unset http_proxy https_proxy ftp_proxy all_proxy HTTP_PROXY HTTPS_PROXY FTP_PROXY ALL_PROXY
```

Observação: O comando acima afeta apenas a sessão de terminal atual. Se você abrir uma nova janela de terminal, precisará executá-lo novamente.

**2. Permitir Portas no Firewall / Grupos de Segurança**

- Implantação em única máquina: Geralmente pode ser ignorado.
- Implantação em LAN: Você precisa permitir a porta de escuta no lado do servidor.
  Exemplo de permissão de uma porta de escuta na LAN (executar no servidor):

```bash
sudo ufw allow 8080/tcp
```

- Implantação em nuvem: Você precisa permitir a porta no grupo de segurança do servidor em nuvem e, idealmente, restringir os IPs de origem.

Se estiver executando em um servidor em nuvem:
Permita a porta 8080 no grupo de segurança na página de gerenciamento do servidor ou use outra porta já permitida. Os métodos variam conforme o provedor de nuvem.

**3. Confirmar Endereço IP**

A implantação em única máquina pode ignorar esta etapa (o IP é sempre 127.0.0.1).

**4. Teste de Conexão**

- Implantação em única máquina: Ignore esta etapa.
- Implantação em LAN / Nuvem: É recomendável testar se o cliente consegue acessar a porta do servidor:

```bash
nc -vz <LAN_IP_address> 8080
```

```bash
nc -vz <server_public_IP> 8080
```

**Passo 3: Iniciar o Serviço**

**Cenário A: Implantação em Única Máquina**

Inicie o serviço local em um terminal:

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=127.0.0.1:8080
```

Depois que ele iniciar com sucesso, você precisa manter esse terminal aberto e criar um novo terminal para executar outros comandos.

**Cenário B: Implantação em LAN**

Execute no servidor:

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=0.0.0.0:8080
```

Quando o cliente se conectar, `--server_address` deve usar o endereço IP de LAN do servidor: `<LAN_IP_address>:8080`.

**Cenário C: Implantação em Servidor na Nuvem**

Execute no servidor:

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=0.0.0.0:8080
```

Quando o cliente se conectar, `--server_address` deve usar o endereço IP público do servidor: `<server_public_IP>:8080`.

**Passo 4: Escolher Parâmetros de Inferência**

Execute no cliente:

```bash
python -m lerobot.async_inference.robot_client \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --server_address=127.0.0.1:8080 \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --fixed_update_fps=30 \
  --visualize_action_queue=false
```

Explicação dos principais parâmetros:

- `--server_address`: Endereço do servidor. Use `127.0.0.1:port` para única máquina e o IP do servidor para LAN/nuvem.
- `--actions_per_chunk`: Tamanho de cada bloco de ações (número de ações). Valores maiores significam menor frequência de inferência, mas resultados por inferência mais estáveis; valores menores significam movimento mais suave, porém com mais carga de inferência no servidor.
- `--chunk_size_threshold`: Limite de mesclagem entre blocos de ações antigos e novos. Quando o bloco antigo é executado até essa proporção, a mesclagem com o novo bloco começa.
- `--fixed_update_fps`: Frequência de envio de comandos de controle, correspondente à suavidade do movimento do braço robótico.
- `--visualize_action_queue`: Se deve visualizar o tamanho da fila de ações em tempo de execução. Quando ativado, você pode ver de forma mais intuitiva se a fila atinge o fundo com frequência, ajudando a ajustar actions_per_chunk e chunk_size_threshold.

**Passo 5: Ajustar Parâmetros com Base no Comportamento do Robô**

Na inferência assíncrona, há dois parâmetros adicionais que não estão presentes na inferência síncrona e que precisam ser ajustados:

- `--actions_per_chunk`: Tamanho de cada bloco de ações. Se o movimento do robô estiver aos solavancos/trêmulo, aumente esse valor; se a resposta do robô tiver atraso perceptível, diminua esse valor.
- `--chunk_size_threshold`: Limite de mesclagem entre blocos de ações antigos e novos. Normalmente, comece testando a partir de `0.5`.

A inferência assíncrona precisa equilibrar: a velocidade de geração de blocos de ações pelo servidor deve ser maior ou igual à velocidade de consumo do cliente. Caso contrário, a fila de ações ficará vazia e o robô começará a engasgar (isso pode ser visto na curva de visualização da fila tocando o fundo).

</details>

## FAQ

- Se você estiver seguindo este tutorial da documentação, faça git clone do repositório GitHub recomendado `https://github.com/Seeed-Projects/lerobot.git`. O repositório recomendado nesta documentação é uma versão estável verificada; o repositório oficial do LeRobot é continuamente atualizado para a versão mais recente, o que pode causar problemas imprevistos, como versões de dataset diferentes, comandos diferentes etc.

- Se você encontrar:
  ```bash
  Could not connect on port "/dev/ttyUSB0" or "/dev/ttyACM0"
  ```
  E você conseguir ver que o dispositivo existe ao executar `ls /dev/ttyUSB*` ou `ls /dev/ttyACM*`, isso significa que você esqueceu de conceder permissões à porta serial. Digite `sudo chmod 666 /dev/ttyUSB* /dev/ttyACM*` no terminal para corrigir.

- Se você encontrar:
  ```bash
  No valid stream found in input file. Is -1 of the desired media type?
  ```
  Instale o ffmpeg 7.1.1 usando `conda install ffmpeg=7.1.1 -c conda-forge`.

- Treinar o ACT em 50 conjuntos de dados leva aproximadamente 6 horas em um laptop com uma RTX 3060 (8GB) e cerca de 2–3 horas em computadores com GPUs RTX 4090 ou A100.

- Durante a coleta de dados, certifique-se de que a posição da câmera, o ângulo e a iluminação ambiente estejam estáveis. Reduza a quantidade de fundo instável e de pedestres capturados pela câmera, pois mudanças excessivas no ambiente de implantação podem fazer com que o braço robótico não consiga agarrar corretamente.

- Para o comando de coleta de dados, certifique-se de que o parâmetro `num-episodes` esteja configurado para coletar dados suficientes. Não pause manualmente no meio do processo, pois a média e a variância dos dados são calculadas somente após a conclusão da coleta, e são necessárias para o treinamento.

- Se o programa indicar que não consegue ler dados de imagem da câmera USB, certifique-se de que a câmera USB não esteja conectada por meio de um hub. A câmera USB deve estar conectada diretamente ao dispositivo para garantir alta velocidade de transmissão de imagem.

:::tip
Se você encontrar problemas de software ou de dependências de ambiente que não possam ser resolvidos, além de verificar a seção de FAQ no final deste tutorial, relate o problema prontamente na [plataforma LeRobot](https://github.com/huggingface/lerobot) ou no [canal LeRobot no Discord](https://discord.gg/8TnwDdjFGU).
:::

## Referências

Seeed Studio Wiki em inglês: [Como usar o braço robótico SO100Arm no Lerobot](https://wiki.seeedstudio.com/pt-br/lerobot_so100m/)

Projeto TheRobotStudio: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Projeto Huggingface: [LeRobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
