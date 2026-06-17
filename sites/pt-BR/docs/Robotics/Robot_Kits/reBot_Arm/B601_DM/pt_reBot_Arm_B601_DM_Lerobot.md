---
description: Este wiki fornece um guia completo para o reBot Arm B601-DM para implementar coleta de dados e treinamento dentro do framework LeRobot.
title: Introdução ao reBot Arm B601-DM no LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Robotic Arm
  - rebot arm
  - Robot
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg
slug: /rebot_arm_b601_dm_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-15T00:00:00.000Z
  author: LiuJunjie
translation:
  skip:
    - zh-CN
createdAt: '2026-04-09'
updatedAt: '2026-04-30'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_lerobot/
---


# Introdução ao reBot Arm B601-DM baseado em LeRobot e ao reBot 102 Leader


![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Braço robótico de 6 DOF · Suporte a múltiplos motores · Solucionador de cinemática · Planejamento de trajetória · Totalmente open source</strong>
</p>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>



[reBot Arm B601-DM](https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/) é um projeto de braço robótico open source lançado pela Seeed, dedicado a reduzir a barreira para o aprendizado de inteligência incorporada. Nós abrimos todo o design estrutural e código sem qualquer reserva, tornando a tecnologia de robótica acessível a todos.

[LeRobot](https://github.com/huggingface/lerobot/tree/main) se dedica a fornecer modelos, conjuntos de dados e ferramentas para robótica no mundo real em PyTorch. Seu objetivo é reduzir a barreira de entrada da robótica, permitindo que todos contribuam e se beneficiem do compartilhamento de conjuntos de dados e modelos pré-treinados. O LeRobot integra metodologias de ponta validadas para aplicação no mundo real, com foco em aprendizado por imitação e aprendizado por reforço. Ele fornece um conjunto de modelos pré-treinados, conjuntos de dados com demonstrações coletadas por humanos e ambientes de simulação, permitindo que os usuários comecem sem a necessidade de montar um robô.

### 📖 Introdução ao projeto

**reBot-DevArm (reBot Arm B601 DM e reBot Arm B601 RS)** é um projeto de braço robótico dedicado a reduzir a barreira para o aprendizado de inteligência incorporada. Nós focamos em **"Verdadeiro Open Source"** — não apenas código, abrimos sem reservas tudo o que segue:
- 🦾 **Braços robóticos open source com duas versões de motor**: Fornecemos todos os arquivos open source para as versões de motor RoboStride e Damiao com a mesma aparência.
- 🛠️ **Esquemas de hardware**: Arquivos-fonte das chapas metálicas e das peças impressas em 3D.
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
Os tutoriais da Seeed Studio são rigorosamente atualizados de acordo com a documentação oficial. Se você encontrar problemas de software ou de ambiente que não possam ser resolvidos, verifique primeiro o FAQ no final do artigo ou entre em contato com o atendimento ao cliente para entrar no grupo de discussão SeeedStudio LeRobot. Você também pode fazer perguntas aqui: [LeRobot GitHub](https://github.com/huggingface/lerobot) ou [Discord Channel](https://discord.gg/8TnwDdjFGU).
:::

## 🔧 Recursos da série reBot B601-DM:

1. **Open source e baixo custo**
   O reBot Arm é uma solução de braço robótico open source e de baixo custo da Seeed Studio, dedicada a reduzir a barreira para o aprendizado de inteligência incorporada.

2. **Integração com a plataforma LeRobot**
   Projetado para integração com a [plataforma LeRobot](https://github.com/huggingface/lerobot). Esta plataforma fornece modelos PyTorch, conjuntos de dados e ferramentas para aprendizado por imitação de tarefas de robôs reais (incluindo coleta de dados, simulação, treinamento e implantação).

3. **Recursos abundantes de aprendizado**
   Fornece recursos de aprendizado open source abrangentes, incluindo guias de montagem e calibração, tutoriais de teste e coleta de dados, documentação de treinamento e implantação para ajudar os usuários a começar rapidamente e desenvolver aplicações de robótica.

4. **Compatível com a plataforma Nvidia**
   Suporta implantação por meio da plataforma reComputer Mini J4012 Orin NX 16GB.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/PoMv3mw8SGk" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Ambiente de sistema inicial

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

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/mWrWeqAPDSY" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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

# Create conda environment (Python 3.12)
conda create -y -n lerobot python=3.12

# Activate environment
conda activate lerobot

# Install lerobot main project (editable mode)
pip install -e ./lerobot

# Add dependency packages
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge
```

### 5. Instalar o ffmpeg

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

### 6. Configuração especial para dispositivos Jetson JetPack 6.0+

(Ignore esta etapa para PC) Para dispositivos Jetson JetPack 6.0+ (certifique-se de ter instalado Pytorch-gpu e Torchvision de acordo com [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) etapa 5 antes de executar esta etapa):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies via conda, for Jetson Jetpack 6.0+ only
conda remove opencv   # Uninstall OpenCV
pip3 install opencv-python==4.10.0.84  # Install specific OpenCV version using pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This version must be compatible with torchvision
```

### 7. Verificar Pytorch e Torchvision

:::tip
Se você estiver usando um dispositivo Jetson, instale Pytorch e Torchvision de acordo com [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).
:::

Como instalar o ambiente lerobot via pip irá desinstalar o Pytorch e o Torchvision originais e instalar as versões para CPU, você precisa realizar uma verificação em Python.

```python
python3

import torch
print(torch.cuda.is_available())#Should output True
```

Se a saída for True, você pode digitar exit() para sair do Python e continuar com as etapas seguintes.
Se a saída for False, você precisa reinstalar Pytorch e Torchvision de acordo com o [tutorial oficial](https://pytorch.org/index.html).

## Calibrar o braço robótico

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/v8Ek1Ad1VWo" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Em seguida, você precisa conectar a fonte de alimentação e o cabo de dados ao seu robô reBot B601-DM para calibração, a fim de garantir que os braços líder e seguidor tenham os mesmos valores de posição quando estiverem na mesma posição física. Esta calibração é essencial porque permite que uma rede neural treinada em um robô reBot B601-DM funcione em outro. Se você precisar recalibrar o braço robótico, exclua completamente os arquivos em `~/.cache/huggingface/lerobot/calibration/robots` ou `~/.cache/huggingface/lerobot/calibration/teleoperators` e recalibre o braço robótico. Caso contrário, aparecerá uma mensagem de erro. As informações de calibração do braço robótico serão armazenadas nos arquivos JSON deste diretório.

Primeiro, você precisa conceder permissões de interface executando os seguintes comandos:

```bash
sudo chmod 666 /dev/ttyUSB*  # Leader arm
sudo chmod 666 /dev/ttyACM*  # Follower arm (serial bridge)
```

### Calibrar o braço seguidor

O B601-DM só precisa ser calibrado uma vez após a montagem. Aqui está o comando de calibração. Consulte a figura para a posição zero (garra totalmente fechada).

```bash
sudo chmod 666 /dev/ttyACM*  # follower arm (serial bridge)

lerobot-calibrate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg" />
  </div>

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
- Use `ls /dev/ttyUSB*` para verificar o número de porta real

Se esta for a primeira conexão, você pode receber um erro informando que `/dev/ttyACM0` não pode ser encontrado. Isso ocorre porque o brltty está ocupando a porta serial. Execute as seguintes etapas:

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
Durante a teleoperação, se o braço robótico mestre-escravo sofrer desligamento de energia, mau contato de energia ou desconexão da linha de sinal, você deve primeiro parar o código do programa e retornar o braço robótico à sua posição inicial zero. Só então reconecte a fonte de alimentação e reinicie o programa. Isso evita que desordens de dados causem fuga do braço robótico e possíveis riscos de segurança.
:::

Primeiro conceda permissões às portas seriais:
```bash
sudo chmod 666 /dev/ttyUSB*  # Leader arm
sudo chmod 666 /dev/ttyACM*  # Follower arm (serial bridge)
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
<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/6_hXd_QXO2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Adicionar câmeras


<details>
<summary> If using RealSense D435i/D405 </summary>

As câmeras de profundidade RealSense podem fornecer percepção RGB-D para o LeRobot e são adequadas para tarefas como reconhecimento de objetos, reconstrução de nuvens de pontos e manipulação em mesa. Os modelos recomendados aqui são **RealSense D405** e **RealSense D435i**.

### RealSense D405

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" />
</div>

A RealSense D405 é uma câmera estéreo de profundidade de curto alcance projetada para tarefas de alta precisão em curta distância, como manipulação robótica em mesa, com faixa de trabalho típica de **7 cm a 50 cm**.

### RealSense D435i

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" />
</div>

A RealSense D435i combina detecção de profundidade, imagem RGB e uma IMU, tornando-a adequada para aplicações de médio a curto alcance, como reconstrução 3D, SLAM e percepção de ambiente robótico.

### 1. Mudar para o branch da câmera

O suporte atual para câmeras está disponível no branch `DepthCameraSupport`:

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

### 2. Instalar o LeRobot em modo editável

Se você usar apenas RealSense:

```bash
pip install -e ".[realsense]"
```

### 3. Conceder permissões

```bash
sudo chmod a+rw /dev/bus/usb/*/*
```

### 4. Detectar câmeras

```bash
lerobot-find-cameras realsense
```

Esta etapa exibirá:

- Modelo da câmera
- Número de série
- Informações de USB
- Configuração padrão de stream

### 5. Exemplo com RealSense

Teste com duas RealSense:

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
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

### 6. Notas sobre parâmetros

- `depth_alpha` controla o fator de escala da imagem de profundidade e pode ser ajustado com base no resultado de exibição e na faixa de distância do alvo.
- Se você conectar três ou mais câmeras de profundidade, é recomendável reduzir `fps` para `15` para melhorar a estabilidade geral.
- Recomenda-se manter a resolução em `640x480` para um melhor equilíbrio entre estabilidade e desempenho em tempo real.

</details>

<details>

<summary> If using Orbbec Gemini2 Depth Camera </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

fornecendo streams sincronizados de RGB e profundidade com alinhamento preciso de profundidade para cor. Combinada com detecção de profundidade estéreo e uma IMU de 6 eixos integrada, ela é bem adequada para tarefas robóticas como detecção de objetos, percepção 3D, mapeamento e navegação. Seu design compacto e o suporte completo ao Orbbec SDK a tornam adequada tanto para pesquisa quanto para implantação em cenários reais.

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>

A Gemini 336 é um novo membro da série Gemini 330. Ela herda o forte desempenho de profundidade da Gemini 335 e melhora ainda mais a qualidade de imagem de profundidade em áreas internas reflexivas, regiões escuras em cenas de alta dinâmica e ambientes externos claros. Para aplicações de robótica, ela pode fornecer dados de profundidade mais estáveis e de alta qualidade para tarefas como percepção, localização e manipulação.

### 1. Mudar para o branch da câmera

O suporte atual para câmeras está disponível no branch `DepthCameraSupport`:

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

### 2. Instalar o LeRobot em modo editável

Se você usar apenas Orbbec:

```bash
pip install -e ".[orbbec]"
```

### 3. Conceder permissões

```bash
sudo chmod a+rw /dev/bus/usb/*/*
```

### 4. Detectar câmeras

```bash
lerobot-find-cameras orbbec
```

Esta etapa exibirá:

- Modelo da câmera
- Número de série
- Informações de USB
- Configuração padrão de stream

### 5. Exemplo com Orbbec


Teste com uma única Orbbec:



```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
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

### 6. Notas sobre parâmetros

- `depth_alpha` controla o fator de escala da imagem de profundidade. Um bom ponto de partida é `0.2`, depois você pode ajustá-lo com base no resultado exibido.
- Se você conectar três ou mais câmeras de profundidade, é recomendável reduzir o `fps` para `15` para obter melhor estabilidade.
- Recomenda-se manter a resolução em `640x480` para uma exibição e transferência de dados mais estáveis.

### 7. Problemas comuns

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
Ao usar câmeras Intel RealSense no **macOS**, você pode receber este erro: **"Error finding RealSense cameras: failed to set power state"**. Isso pode ser resolvido executando o mesmo comando com permissões `sudo`. Observe que o uso de câmeras RealSense no **macOS** é instável.
:::

Depois disso, você poderá exibir as câmeras no seu computador enquanto estiver realizando a teleoperação executando o código a seguir. Isso é útil para preparar sua configuração antes de gravar seu primeiro conjunto de dados.

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

:::tip
Imagens no formato `fourcc: "MJPG"` são compactadas. Você pode tentar resoluções mais altas e também pode experimentar o formato `YUYV`. No entanto, este último reduzirá a resolução da imagem e o FPS, causando atraso na operação do braço robótico. Atualmente, no formato `MJPG`, é possível suportar 3 câmeras com resolução de `1920*1080` mantendo `30FPS`. No entanto, ainda não é recomendado conectar 2 câmeras a um computador por meio do mesmo HUB USB.
:::

Se você tiver mais câmeras, poderá alterar o parâmetro `--robot.cameras` para adicioná-las. Você deve observar o formato de `index_or_path`, que é determinado pelo último dígito do ID da câmera exibido por `python -m lerobot.find_cameras opencv`.

Por exemplo, se você quiser adicionar uma câmera:

<!-- TODO: reBot multi-camera configuration command -->
```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

## Coleta de conjunto de dados
<!-- vidio todo -->

:::danger
Durante a teleoperação, se o braço robótico mestre-escravo sofrer desligamento de energia, mau contato de energia ou desconexão da linha de sinal, você deve primeiro parar o código do programa e retornar o braço robótico à sua posição inicial zero. Só então reconecte a fonte de alimentação e reinicie o programa. Isso evita que a desordem de dados cause fuga do braço robótico e possíveis riscos de segurança.
:::

<details>

<summary> Se você quiser salvar o conjunto de dados localmente </summary>

<!-- TODO: reBot local data collection command -->
```bash
lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

Entre eles, `repo_id` pode ser modificado de forma personalizada, e `push_to_hub=false`. Por fim, o conjunto de dados será salvo no diretório `~/.cache/huggingface/lerobot` na pasta home, onde a pasta `seeed_rebot_b601_dm/test` mencionada acima será criada.

</details>

<details>
<summary> Se você quiser usar os recursos do Hugging Face Hub para enviar seu conjunto de dados </summary>

- Se você quiser usar os recursos do Hugging Face Hub para enviar seu conjunto de dados e ainda não tiver feito isso antes, certifique-se de ter feito login usando um token com permissão de escrita, que pode ser gerado em [Hugging Face settings](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Armazene o nome do seu repositório Hugging Face em uma variável para executar estes comandos:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Registre 5 episódios e envie seu conjunto de dados para o Hub:

<!-- TODO: reBot data collection and upload to Hugging Face command -->
```bash
lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
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

- Checkpoints são criados automaticamente durante a gravação.
- Para retomar após uma interrupção, execute novamente o mesmo comando com: `--resume=true`

⚠️ **Observação importante**: Ao retomar, defina `--dataset.num_episodes` para o número de episódios adicionais a serem gravados (não o número total de episódios desejado no conjunto de dados).
- Para iniciar a gravação do zero, **exclua manualmente** o diretório do conjunto de dados.

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
| → (Seta para a direita) | Encerrar antecipadamente o episódio atual/redefinir; ir para o próximo. |
| ← (Seta para a esquerda) | Cancelar o episódio atual; regravá-lo. |
| ESC | Parar a sessão imediatamente, codificar os vídeos e enviar o conjunto de dados. |

:::tip
Se as teclas do seu teclado não estiverem respondendo, talvez seja necessário fazer o downgrade da sua versão do pynput, por exemplo, instalando a versão 1.6.8.
```bash
pip install pynput==1.6.8
```
:::

**Dicas para coletar dados**

- **Sugestão de tarefa**: Agarrar objetos em diferentes locais e colocá-los em um recipiente.
- **Escala**: Grave ≥50 episódios (10 episódios por local).
- **Consistência**:
  - Mantenha as câmeras fixas.
  - Mantenha o mesmo comportamento de preensão.
  - Garanta que os objetos manipulados estejam visíveis nos feeds das câmeras.
- **Progressão**:
  - Comece com preensões confiáveis antes de adicionar variações (novos locais, técnicas de preensão, ajustes de câmera).
  - Evite aumentar rapidamente a complexidade para prevenir falhas.

💡 **Regra prática**: Você deve ser capaz de realizar a tarefa apenas olhando para as imagens da câmera na tela.

Se você quiser se aprofundar nesse tópico importante, pode conferir o [post no blog](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) que escrevemos sobre o que torna um bom conjunto de dados.

**Solução de problemas**

Problema específico do Linux:
Se as teclas Seta para a direita/Seta para a esquerda/ESC não responderem durante a gravação:
- Verifique se a variável de ambiente `$DISPLAY` está definida (veja [pynput limitations](https://pynput.readthedocs.io/en/latest/limitations.html)).

## Visualizar o conjunto de dados

```bash
echo ${HF_USER}/rebot_test  
```

Se você fez upload dos dados, também pode visualizá-los localmente com o seguinte comando:

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false
```

Se você usou `--dataset.push_to_hub=false` e não fez upload dos dados, também pode visualizá-los localmente com:

```bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_dm/test \
  --episode-index 0 \
  --display-compressed-images=false
```

Aqui, `seeed_rebot_b601_dm/test` é o nome personalizado de `repo_id` definido durante a coleta de dados.

## Reproduzir um Episódio

:::tip
Instável, pode ser ignorado ou testado.
:::

Agora, tente reproduzir o primeiro conjunto de dados no seu robô:

<!-- TODO: reBot dataset replay command -->
```bash
lerobot-replay \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.can_adapter=damiao \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.episode=0
```

Neste ponto, o robô deve executar as mesmas ações que você realizou durante a teleoperação na gravação.

## Treinamento e Avaliação

<details>
<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

Consulte o tutorial oficial [ACT](https://huggingface.co/docs/lerobot/act)

**Treinamento**

Para treinar uma política para controlar seu robô, use o script `python -m lerobot.scripts.train`. Alguns parâmetros são obrigatórios. Aqui está um comando de exemplo:

**Se você quiser treinar em um conjunto de dados local, certifique-se de que o `repo_id` corresponda ao nome usado durante a coleta de dados e adicione `--policy.push_to_hub=false`.**

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_dm/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

**Ou use dados armazenados remotamente**

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

**Explicação do Comando**

* **Especificação do conjunto de dados**: Fornecemos o conjunto de dados por meio do parâmetro `--dataset.repo_id=${HF_USER}/rebot_test`.
* **Etapas de treinamento**: Modificamos o número de etapas de treinamento usando `--steps=300000`. O algoritmo usa por padrão 800000 etapas, e você pode ajustá-lo com base na dificuldade da sua tarefa e observando a perda durante o treinamento.
* **Tipo de política**: Fornecemos a política com `policy.type=act`. Da mesma forma, você pode alternar entre políticas como [`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`]. Isso carregará a configuração de `configuration_act.py`. Importante: essa política se adaptará automaticamente aos estados dos motores, ações dos motores e ao número de câmeras do seu robô (por exemplo, `laptop` e `phone`), pois essas informações já estão armazenadas no seu conjunto de dados.
* **Seleção de dispositivo**: Fornecemos `policy.device=cuda` porque estamos treinando em uma GPU Nvidia, mas você pode usar `policy.device=mps` para treinar em Apple Silicon.
* **Ferramenta de visualização**: Fornecemos `wandb.enable=true` para visualizar gráficos de treinamento usando [Weights and Biases](https://docs.wandb.ai/quickstart). Isso é opcional, mas, se você usar, certifique-se de ter feito login executando `wandb login`.

**Avaliação**

Você pode usar a função `record` de [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py), mas com um checkpoint de política como entrada. Por exemplo, execute este comando para gravar 10 episódios de avaliação:

<!-- TODO: reBot ACT evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model
``` 

1. O parâmetro `--policy.path` indica o caminho para o arquivo de pesos dos resultados do treinamento da sua política (por exemplo, `outputs/train/act_rebot_test/checkpoints/last/pretrained_model`). Se você fizer upload do arquivo de pesos do resultado do treinamento do modelo para o Hub, também poderá usar o repositório do modelo (por exemplo, `${HF_USER}/act_rebot_test`).
2. O nome do conjunto de dados `dataset.repo_id` começa com `eval_`. Essa operação registrará separadamente vídeos e dados durante a avaliação, que serão salvos na pasta que começa com `eval_`, como `seeed/eval_test123`.
3. Se você encontrar `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` durante a fase de avaliação, exclua primeiro a pasta que começa com `eval_` e execute o programa novamente.
4. Ao encontrar `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, observe que palavras-chave como `front` e `side` no parâmetro `--robot.cameras` devem ser estritamente consistentes com as usadas ao coletar o conjunto de dados.

</details>

<details>
<summary>[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) </summary>

Consulte o tutorial oficial [SmolVLA](https://huggingface.co/docs/lerobot/smolvla)

```bash
pip install -e ".[smolvla]"
```

**Treinamento**
```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \ # <- Use pretrained fine-tuned model
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

**Avaliação**

<!-- TODO: reBot SmolVLA evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.id=follower1 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=rebot_arm_102_leader \
  # --teleop.port=/dev/ttyUSB0 \
  # --teleop.id=rebot_arm_102_leader \
  --policy.path=HF_USER/FINETUNE_MODEL_NAME
```

</details>

<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

Consulte o tutorial oficial [Pi0](https://huggingface.co/docs/lerobot/pi0) 

```bash
pip install -e ".[pi]"
```

**Treinamento**
```bash
lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=seeed/eval_test123 \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=20000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false 
```

**Avaliação**

<!-- TODO: reBot Pi0 evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

Consulte o tutorial oficial [Pi0.5](https://huggingface.co/docs/lerobot/pi05) 

```bash
pip install -e ".[pi]"
```

**Treinamento**
```bash
lerobot-train \
    --dataset.repo_id=seeed/eval_test123 \
    --policy.type=pi05 \
    --output_dir=outputs/pi05_training \
    --job_name=pi05_training \
    --policy.pretrained_path=lerobot/pi05_base \
    --policy.compile_model=true \
    --policy.gradient_checkpointing=true \
    --wandb.enable=false \
    --policy.dtype=bfloat16 \
    --steps=3000 \
    --policy.device=cuda \
    --batch_size=32
```

**Avaliação**

<!-- TODO: reBot Pi0.5 evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

Consulte a documentação oficial: [GR00T N1.5](https://huggingface.co/docs/lerobot/groot)

</details>

O treinamento deve levar várias horas. Você encontrará checkpoints no diretório `outputs/train/act_rebot_test/checkpoints`.

Para retomar o treinamento a partir de um checkpoint, aqui está um comando de exemplo para retomar do checkpoint `last` da política `act_rebot_test`:
```bash
lerobot-train \
  --config_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

## FAQ

- Se você estiver seguindo este tutorial de documentação, faça git clone do repositório GitHub recomendado `https://github.com/Seeed-Projects/lerobot.git`. O repositório recomendado nesta documentação é uma versão estável verificada; o repositório oficial do LeRobot é continuamente atualizado para a versão mais recente, o que pode causar problemas imprevistos, como diferentes versões de conjuntos de dados, comandos diferentes etc.

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

- Durante a coleta de dados, garanta que a posição da câmera, o ângulo e a iluminação ambiente estejam estáveis. Reduza a quantidade de fundo instável e de pedestres capturados pela câmera, pois mudanças excessivas no ambiente de implantação podem fazer com que o braço robótico não consiga agarrar corretamente.

- Para o comando de coleta de dados, certifique-se de que o parâmetro `num-episodes` esteja configurado para coletar dados suficientes. Não pause manualmente no meio do processo, pois a média e a variância dos dados são calculadas somente após a conclusão da coleta, e são necessárias para o treinamento.

- Se o programa indicar que não consegue ler dados de imagem da câmera USB, certifique-se de que a câmera USB não esteja conectada por meio de um hub. A câmera USB deve estar conectada diretamente ao dispositivo para garantir alta velocidade de transmissão de imagem.

:::tip
Se você encontrar problemas de software ou de dependências de ambiente que não possam ser resolvidos, além de verificar a seção de FAQ no final deste tutorial, relate o problema prontamente na [plataforma LeRobot](https://github.com/huggingface/lerobot) ou no [canal LeRobot no Discord](https://discord.gg/8TnwDdjFGU).
:::

## Referências

Seeed Studio English Wiki: [Como usar o braço robótico SO100Arm no Lerobot](https://wiki.seeedstudio.com/pt-br/lerobot_so100m/)

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
