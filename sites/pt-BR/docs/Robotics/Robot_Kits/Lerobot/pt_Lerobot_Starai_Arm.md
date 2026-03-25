---
description: Este wiki fornece o tutorial de depuração para o braço robótico StarAI e realiza coleta de dados e treinamento dentro do framework Lerobot.
title: StarAI Arm no LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /lerobot_starai_arm
sku: 114090081,114090080,100049805,100038899,100028196
last_update:
  date: 10/13/2025
  author: LiShanghang
translation:
  skip:
    - zh-CN
createdAt: '2025-07-25'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/lerobot_starai_arm/
---

# Começando com o braço robótico StarAI com LeRobot

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/IJKTeBYAG7k?si=iS-jqT27fDjeI6yX" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

| **Seguidor Viola** | **Líder Violino** | **Seguidor Violoncelo** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora!!! 🖱️</font></span></strong>
</a></div>

## Introdução aos Produtos

1. **Open-Source e Amigável para Desenvolvedores**
   É uma solução de braço robótico 6+1 DOF open-source e amigável para desenvolvedores da [Fishion Star Technology Limited](https://fashionrobo.com/).
2. **Integração com LeRobot**
   Projetado para integração com a [Plataforma LeRobot](https://github.com/huggingface/lerobot) , que fornece modelos PyTorch, conjuntos de dados e ferramentas para aprendizado por imitação em tarefas robóticas do mundo real — incluindo coleta de dados, simulação, treinamento e implantação.
3. **Recursos Abrangentes de Aprendizagem**
   Fornece recursos abrangentes de aprendizado open-source, como guias de montagem e calibração e exemplos de tarefas personalizadas de preensão para ajudar os usuários a começar rapidamente e desenvolver aplicações robóticas.
4. **Compatível com Nvidia**
   Suporta implantação na plataforma reComputer Mini J4012 Orin NX 16GB.

## Principais Recursos

- Pronto para Uso — Nenhuma Montagem Necessária. Basta Tirar da Caixa e Mergulhar no Mundo da IA.
- 6+1 Graus de Liberdade e Alcance de 470 mm — Projetado para Versatilidade e Precisão.
- Alimentado por Servos de Barramento Brushless Duplos — Suave, Silencioso e Potente com até 300 g de Carga Útil.
- Garra Paralela com Abertura Máxima de 66 mm — Pontas de Dedo Modulares para Flexibilidade de Substituição Rápida.
- Tecnologia Exclusiva Hover Lock — Congele Instantaneamente o Braço Líder em Qualquer Posição com Um Único Toque.

## Especificações

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.jpg" />
</div>

| Item                 | Braço Seguidor \| Viola                             | Braço Líder \|Violin                                |    Braço Seguidor \|Cello    |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |-----------------|
| Degrees of Freedom   | 6+1                                               | 6+1                                               | 6+1             |
| Reach                | 470mm                                             | 470mm                                             | 670mm |
| Repeatability        | 2mm                                               | -                                                 | 2mm  |
| Working Payload      | 300g (with 70% Reach)                            | -                                                 |  750g (with 70% Reach)   |
| Servos               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |RX18-U100H-M x3<br/> RX8-U50H-M x3<br/> RX8-U51H-M x1|
| Parallel Gripper Ki  | ✅                                                 | -                                                 | ✅   |
| Wrist Rotate         | Yes                                               | Yes                                               | Yes |
| Hold at any Position | Yes                                               | Yes (with handle button)                          |  Yes|
| Wrist Camera Mount   |Provides reference 3D printing files | | Provides reference 3D printing files
| Works with LeRobot   | ✅                                                 | ✅                                                 | ✅|
| Works with ROS 2     | ✅                                                 | ✅                                                | ✅|
| Works with MoveIt2    | ✅                                                 | ✅                                               |✅ |
| Works with Gazebo    | ✅                                                 |✅                                              |✅ |
| Communication Hub    | UC-01                                             | UC-01                                             | UC-01 |
| Power Supply         | 12V10A/120w XT30                                   | 12V10A/120w XT30                                 |12V25A/300w XT60  |

Para mais informações sobre motores de servo, visite o seguinte link.

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)

## Configuração inicial do ambiente

**Para Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**Para Jetson Orin:**

- Jetson JetPack 6.0+  
- Python 3.10  
- Torch 2.6  

## Instalação e Depuração

### Instalar LeRobot

Ambientes como pytorch e torchvision precisam ser instalados com base na sua versão do CUDA.

1. Instale o Miniconda:
Para Jetson:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

Ou, para Ubuntu 22.04 x86:

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. Crie e ative um novo ambiente conda para o lerobot

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Clone o Lerobot:

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. Ao usar o miniconda, instale o ffmpeg no seu ambiente:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
Isso geralmente instala o ffmpeg 7.X para a sua plataforma, compilado com o codificador libsvtav1. Se o libsvtav1 não for suportado (verifique os codificadores suportados com ffmpeg -encoders), você pode:

- [Em qualquer plataforma] Instalar explicitamente o ffmpeg 7.X usando:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Somente no Linux] Instalar as dependências de compilação do ffmpeg e compilar o ffmpeg a partir do código-fonte com libsvtav1, certificando-se de usar o binário ffmpeg correspondente à sua instalação com which ffmpeg.

:::

5. Instale o LeRobot:

```bash
cd ~/lerobot && pip install -e .
```

```bash
sudo apt remove brltty
```

Para dispositivos Jetson Jetpack (certifique-se de instalar o [Pytorch-gpu e Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) a partir da etapa 5 antes de executar esta etapa):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6.Instale as Dependências do Motor Fashionstar:

```bash
pip install lerobot_teleoperator_bimanual_leader
pip install lerobot_robot_bimanual_follower
```

7. Verifique o Pytorch e o Torchvision

Como instalar o ambiente lerobot via pip desinstalará o Pytorch e o Torchvision originais e instalará as versões de CPU do Pytorch e Torchvision, você precisa realizar uma verificação no Python.

```python
import torch
print(torch.cuda.is_available())
```

Se o resultado impresso for False, você precisa reinstalar o Pytorch e o Torchvision de acordo com o [tutorial do site oficial](https://pytorch.org/index.html).

Se você estiver usando um dispositivo Jetson, instale o Pytorch e o Torchvision de acordo com [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).

### Desembalando o Braço Robótico

O Kit do Braço Robótico Inclui

- Braço líder
- Braço seguidor
- Controlador (manete)
- Garra paralela
- Ferramentas de instalação (parafusos, chave sextavada)
- Morsa em C ×2
- Placa de depuração UC-01 ×2

Interruptor da placa de depuração UC-01：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/UC-01 debuging board switch.png" />
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/C0DsNSNl0dI?si=HQzFXNwGEEqdXz3R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Configurar Porta do Braço

Entre no diretório `~/lerobot`:

```bash
cd ~/lerobot
```

Execute o seguinte comando no terminal para encontrar as portas USB associadas aos seus braços：

```bash
lerobot-find-port
```

:::tip
Lembre-se de remover o USB, caso contrário a interface não será detectada.
:::

Por exemplo：

1. Exemplo de saída ao identificar a porta do braço líder (por exemplo, `/dev/tty.usbmodem575E0031751` no Mac, ou possivelmente `/dev/ttyUSB0` no Linux):
2. Exemplo de saída ao identificar a porta do braço seguidor (por exemplo, `/dev/tty.usbmodem575E0032081`no Mac, ou possivelmente `/dev/ttyUSB1` no Linux):

:::tip
Se a porta serial ttyUSB0 não puder ser identificada, tente as seguintes soluções:

Liste todas as portas USB.

```sh
lsusb
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate1.png" />
</div>

Depois de identificada, verifique as informações da ttyusb.

```sh
sudo dmesg | grep ttyUSB
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate2.png" />
</div>

A última linha indica uma desconexão porque o brltty está ocupando a USB. Remover o brltty resolverá o problema.

```sh
sudo apt remove brltty
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate3.png" />
</div>

Por fim, use o comando chmod.

```sh
sudo chmod 777 /dev/ttyUSB*
```

:::

Talvez seja necessário conceder acesso às portas USB executando:

```bash
sudo chmod 666 /dev/ttyUSB*
```

## Calibrar

Para vídeos que cobrem o Braço Robótico StarAI desde o unboxing até a teleoperação, você pode consultar:
<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/02lxxF9Cvy8?si=IGJda5nXkYEbm2N6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Mova o braço robótico para a posição inicial do braço robótico (conforme mostrado na figura abaixo) e coloque-o em modo de espera, depois reconecte a fonte de alimentação. 


Para a posição inicial da nova versão do braço robótico, é preciso dar atenção especial para garantir que os servos das Juntas 3, 4 e 5 estejam rigorosamente alinhados com as posições da figura.


| **Novo Braço Líder de Violino** | **Antigo Braço Líder de Violino** | **Braço Seguidor de Viola** |**Braço Seguidor de Violoncelo** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_init.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png) |![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_init.png) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello_init.png) |

Por exemplo:

| **Braço Líder de Violino** | **Braço Seguidor de Viola** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_rest.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_rest.jpg) |


:::tip
Tomando PC (Linux) e placa Jetson como exemplos, o `primeiro` dispositivo USB inserido será mapeado para `ttyUSB0`, e o `segundo` dispositivo USB inserido será mapeado para `ttyUSB1`.

Antes de executar o código, preste atenção às interfaces de mapeamento do líder e do seguidor.
:::

#### Braço Robótico Líder

Conecte o líder a `/dev/ttyUSB0`, ou modifique o parâmetro `--teleop.port` e depois execute:

```bash
lerobot-calibrate     --teleop.type=lerobot_teleoperator_violin --teleop.port=/dev/ttyUSB0 --teleop.id=my_awesome_staraiviolin_arm
```

Após a inicialização, você verá os valores dos encoders de cada junta. Você precisa calibrar manualmente cada junta uma por uma: gire cada junta até suas posições máximas e mínimas. Para juntas sem batentes de limite, o intervalo de rotação não deve exceder 180° no sentido horário ou 180° no sentido anti-horário. Após calibrar todas as juntas, pressione Enter para salvar as configurações.

#### Braço Robótico Seguidor

Conecte o seguidor a `/dev/ttyUSB1`, ou modifique o parâmetro `--teleop.port` e depois execute:

Viola:

```bash
lerobot-calibrate     --robot.type=lerobot_robot_viola --robot.port=/dev/ttyUSB1 --robot.id=my_awesome_staraiviola_arm
```

Violoncelo:
```bash
lerobot-calibrate     --robot.type=lerobot_robot_cello --robot.port=/dev/ttyUSB1 --robot.id=my_awesome_staraicello_arm
```

Após a inicialização, você verá os valores dos encoders de cada junta. Você precisa calibrar manualmente cada junta uma por uma: gire cada junta até suas posições máximas e mínimas. Para juntas sem batentes de limite, o intervalo de rotação não deve exceder 180° no sentido horário ou 180° no sentido anti-horário. Após calibrar todas as juntas, pressione Enter para salvar as configurações.

:::tip
Os arquivos de calibração serão salvos nos seguintes caminhos: `~/.cache/huggingface/lerobot/calibration/robots` e `~/.cache/huggingface/lerobot/calibration/teleoperators`.
:::

### Configuração de Calibração de Dois Braços

<details>
<summary> Tutorial </summary>

#### Braço Robótico Líder

Conecte `left_arm_port` a `/dev/ttyUSB0` e `right_arm_port` a `/dev/ttyUSB2`, ou modifique os parâmetros `--teleop.left_arm_port` e `--teleop.right_arm_port`, e depois execute:

```bash
lerobot-calibrate     --teleop.type=lerobot_teleoperator_bimanual_leader  --teleop.left_arm_port=/dev/ttyUSB0  --teleop.right_arm_port=/dev/ttyUSB2  --teleop.id=bi_starai_violin_leader
```

Após a inicialização, você verá os valores dos encoders de cada junta. Você precisa calibrar manualmente cada junta uma por uma: gire cada junta até suas posições máximas e mínimas. Para juntas sem batentes de limite, o intervalo de rotação não deve exceder 180° no sentido horário ou 180° no sentido anti-horário. Após calibrar todas as juntas, pressione Enter para salvar as configurações.

#### Braço Robótico Seguidor

Conecte `left_arm_port` a `/dev/ttyUSB1` e `right_arm_port` a `/dev/ttyUSB3`, ou modifique os parâmetros `--robot.left_arm_port` e `--robot.right_arm_port`, e depois execute:

Vioa:

```bash
lerobot-calibrate     --robot.type=lerobot_robot_bimanual_follower  --robot.arm_name=starai_viola  --robot.left_arm_port=/dev/ttyUSB1  --robot.right_arm_port=/dev/ttyUSB3 --robot.id=bi_starai_viola_follower
```

Violoncelo:

```bash
lerobot-calibrate     --robot.type=lerobot_robot_bimanual_follower  --robot.arm_name=starai_cello  --robot.left_arm_port=/dev/ttyUSB1  --robot.right_arm_port=/dev/ttyUSB3 --robot.id=bi_starai_cello_follower
```

Após a inicialização, você verá os valores dos encoders de cada junta. Você precisa calibrar manualmente cada junta uma por uma: gire cada junta até suas posições máximas e mínimas. Para juntas sem batentes de limite, o intervalo de rotação não deve exceder 180° no sentido horário ou 180° no sentido anti-horário. Após calibrar todas as juntas, pressione Enter para salvar as configurações.

:::tip

A diferença entre configurações de braço único e de dois braços está nos parâmetros `--teleop.type` e `--robot.type`. Além disso, configurações de dois braços exigem portas USB separadas para os braços esquerdo e direito, totalizando quatro portas USB: `--teleop.left_arm_port`, `--teleop.right_arm_port`, `--robot.left_arm_port` e `--robot.right_arm_port`.

Se estiver usando uma configuração de dois braços, você precisa modificar manualmente os tipos de arquivo do braço robótico `--teleop.type` e `--robot.type`, bem como as portas USB `--teleop.left_arm_port`, `--teleop.right_arm_port`, `--robot.left_arm_port` e `--robot.right_arm_port`, para se adaptar aos comandos de teleoperação, coleta de dados, treinamento e avaliação.

:::

</details>

## Teleoperar

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/02lxxF9Cvy8?si=IGJda5nXkYEbm2N6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Mova o braço para a posição mostrada no diagrama e coloque-o em espera.

| **Braço Líder de Violino** | **Braço Seguidor de Viola** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_rest.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_rest.jpg) |

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
</div>

Então você está pronto para teleoperar seu robô (Ele não exibirá as câmeras)! Execute este script simples:

Violino&Viola:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm
```

Violino&Violoncelo:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm
```

<details>
<summary> Dois Braços </summary>

Violino&Viola:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader
```

Violino&Violoncelo:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader
```

</details>

O comando de operação remota detectará automaticamente os seguintes parâmetros:

1. Identificar quaisquer calibrações ausentes e iniciar o procedimento de calibração.
2. Conectar o robô e o dispositivo de operação remota e iniciar a operação remota.

Após o início do programa, a Tecnologia Hover Lock permanece funcional.

## Adicionar câmeras

<details>
<summary> Se estiver usando a Câmera de Profundidade Orbbec Gemini2 </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
</a></div>

- 🚀 Etapa 1: Instalar o ambiente de dependências do Orbbec SDK

1. Clone o repositório `pyorbbec`

   ```bash
   cd ~/
   git clone https://github.com/orbbec/pyorbbecsdk.git
   ```

2. Baixe e instale o **arquivo .whl** correspondente ao SDK  
   Vá para [pyorbbecsdk Releases](https://github.com/orbbec/pyorbbecsdk/releases),  
   selecione e instale com base na sua versão do Python. Por exemplo:

   ```bash
   pip install pyorbbecsdk-x.x.x-cp310-cp310-linux_x86_64.whl
   ```

3. Instale as dependências no diretório `pyorbbec`

   ```bash
   cd ~/pyorbbecsdk
   pip install -r requirements.txt
   ```

   Forçar downgrade da versão do `numpy` para `1.26.0`

    ```bash
    pip install numpy==1.26.0
    ```

  Mensagens de erro em vermelho podem ser ignoradas.

4. Clone o Orbbec SDK no diretório `~/lerobot/src/cameras`

  ```bash
  cd ~/lerobot/src/cameras
  git clone https://github.com/ZhuYaoHui1998/orbbec.git
  ```

5. Modifique utils.py e **init**.py

- Encontre `utils.py` no diretório `~/lerobot/src/lerobot/cameras` e adicione o seguinte código na linha 40:

```python
elif cfg.type == "orbbec":
            from .orbbec.camera_orbbec import OrbbecCamera

            cameras[key] = OrbbecCamera(cfg)
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/utils.png" />
</div>

- Encontre `__init__.py` no diretório `~/lerobot/src/lerobot/cameras` e adicione o seguinte código na linha 18:

```python
from .orbbec.configuration_orbbec import OrbbecCameraConfig
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/init.png" />
</div>

- 🚀 Etapa 2: Chamada de função e exemplos

Em todos os exemplos a seguir, substitua `starai_viola` pelo modelo real do braço robótico que você está usando (por exemplo, `so100` / `so101`).

Adicionamos o hiperparâmetro `focus_area`. Como dados de profundidade muito distantes são inúteis para o braço robótico (ele não consegue alcançar ou agarrar objetos), os dados de profundidade menores ou maiores que o `focus_area` serão exibidos em preto. O `focus_area` padrão é (20, 600).  
Atualmente, a única resolução suportada é largura: 640, altura: 880.

Violin&Viola:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true
```

Violin&Cello:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_starai_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/orbbec_result.png" />
</div>

Para tarefas subsequentes, como coleta de dados, treinamento e avaliação, o processo é o mesmo que para comandos RGB comuns. Você só precisa substituir a parte relevante no comando RGB comum por:

  ```
  --robot.cameras="{ front: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:(20,600)}}" \
  ```

Você também pode adicionar posteriormente uma câmera RGB monocular adicional.

</details>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/-p8K_-XxW8U?si=UmYWvEyKNPpTRxDC" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Depois de conectar suas duas câmeras USB, execute o seguinte script para verificar os números de porta das câmeras. É importante lembrar que a câmera não deve ser conectada a um USB Hub; em vez disso, deve ser conectada diretamente ao dispositivo. A velocidade mais baixa de um USB Hub pode resultar na impossibilidade de ler os dados de imagem.

```bash
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

O terminal imprimirá as seguintes informações. Por exemplo, a câmera do laptop é o `index 2` e a câmera USB é o `index 4`.

```markdown
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ /dev/video2
  Type: OpenCV
  Id: /dev/video2
  Backend api: V4L2
  Default stream profile:
    Format: 0.0
    Width: 640
    Height: 480
    Fps: 30.0
--------------------
Camera #1:
  Name: OpenCV Camera @ /dev/video4
  Type: OpenCV
  Id: /dev/video4
  Backend api: V4L2
  Default stream profile:
    Format: 0.0
    Width: 640
    Height: 360
    Fps: 30.0
--------------------

Finalizing image saving...
Image capture finished. Images saved to outputs/captured_images
```

Você pode encontrar as imagens capturadas por cada câmera no diretório `outputs/images_from_opencv_cameras` e verificar as informações de índice de porta correspondentes às câmeras em diferentes posições.

Após confirmar as câmeras externas, substitua as informações de câmera abaixo pelas informações reais das suas câmeras, e você poderá exibir as câmeras no seu computador durante a operação remota:

Violin&Viola:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true
```


:::tip
Imagens no formato `fourcc: "MJPG"` são compactadas. Você pode tentar resoluções mais altas e também pode tentar o formato `YUYV`. No entanto, este último reduzirá a resolução da imagem e o FPS, causando atrasos na operação do braço robótico. Atualmente, no formato `MJPG`, é possível suportar 3 câmeras com resolução de `1920*1080` mantendo `30FPS`. Dito isso, ainda não é recomendado conectar 2 câmeras a um computador através do mesmo USB HUB.
:::


Violin&Cello:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true
```


:::tip
Imagens no formato `fourcc: "MJPG"` são compactadas. Você pode tentar resoluções mais altas e também pode tentar o formato `YUYV`. No entanto, este último reduzirá a resolução da imagem e o FPS, causando atrasos na operação do braço robótico. Atualmente, no formato `MJPG`, é possível suportar 3 câmeras com resolução de `1920*1080` mantendo `30FPS`. Dito isso, ainda não é recomendado conectar 2 câmeras a um computador através do mesmo USB HUB.
:::


<details>
<summary> Braço Duplo </summary>

Violin&Viola:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --display_data=true
```

Violin&Cello:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --display_data=true
```


:::tip
Imagens no formato `fourcc: "MJPG"` são compactadas. Você pode tentar resoluções mais altas e também pode tentar o formato `YUYV`. No entanto, este último reduzirá a resolução da imagem e o FPS, causando atrasos na operação do braço robótico. Atualmente, no formato `MJPG`, é possível suportar 3 câmeras com resolução de `1920*1080` mantendo `30FPS`. Dito isso, ainda não é recomendado conectar 2 câmeras a um computador através do mesmo USB HUB.
:::


</details>

:::tip
Se você encontrar um bug como este.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

Você pode fazer downgrade da versão do rerun para resolver o problema.

```bash
pip3 install rerun-sdk==0.23
```

:::

## Registrar o conjunto de dados

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/OpaC0CA3-Mc?si=rbNhJJRkG9zngQB-" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Depois que você estiver familiarizado com a teleoperação, poderá gravar seu primeiro conjunto de dados.

Se você quiser usar os recursos do hub do Hugging Face para enviar seu conjunto de dados e ainda não fez isso antes, certifique-se de ter feito login usando um token com permissão de escrita, que pode ser gerado em [Hugging Face settings](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Armazene o nome do seu repositório do Hugging Face em uma variável para executar estes comandos:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Grave 10 episódios e envie seu conjunto de dados para o hub:

Violin&Viola:

```bash
lerobot-record \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=starai/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

Violin&Cello:

```bash
lerobot-record \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=starai/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

<details>
<summary> Dual-Arm </summary>

Violin&Viola:

```bash
lerobot-record \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

Violin&Cello:

```bash
lerobot-record \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

:::tip
Para diferenciar entre configurações de braço único e de dois braços, aqui o `--dataset.repo_id` é nomeado `starai/record-test_bi_arm`.
:::

</details>

:::tip
Se você não quiser usar o recurso de envio de conjuntos de dados para o Hugging Face Hub, pode escolher `--dataset.push_to_hub=false`. Além disso, substitua `--dataset.repo_id=${HF_USER}/starai` por um nome de pasta local personalizado, por exemplo, `--dataset.repo_id=starai/record-test`. Os dados serão armazenados em `~/.cache/huggingface/lerobot` no diretório inicial do sistema.
:::

Sem enviar para o Hub:

Violin&Viola:

```bash
lerobot-record \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=starai/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \
    --dataset.single_task="Grab the black cube"
```

Violin&Cello:

```bash
lerobot-record \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=starai/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \
    --dataset.single_task="Grab the black cube"
```

<details>
<summary> Dual-Arm </summary>

Violin&Viola:

```bash
lerobot-record \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \
    --dataset.single_task="Grab the black cube"
```

Violin&Cello:

```bash
lerobot-record \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \
    --dataset.single_task="Grab the black cube"
```

:::tip
Para diferenciar entre configurações de braço único e de dois braços, aqui o `--dataset.repo_id` é nomeado `starai/record-test_bi_arm`.
:::

</details>

- `record` oferece um conjunto de ferramentas para capturar e gerenciar dados durante as operações do robô:

#### 1. Armazenamento de Dados

- Os dados são armazenados no formato `LeRobotDataset` e salvos em disco durante o processo de gravação.

#### 2. Checkpoint e Continuação

- Checkpoints são criados automaticamente durante a gravação.
- Se ocorrer algum problema, você pode retomar executando novamente o mesmo comando com `--resume=true`. Ao retomar a gravação, você deve definir `--dataset.num_episodes` como o **número adicional de episódios a serem gravados**, não o número total de episódios desejado no conjunto de dados!
- Para iniciar a gravação do zero, **exclua manualmente** o diretório do conjunto de dados.

#### 3. Parâmetros de Gravação

Defina o fluxo de trabalho de gravação de dados usando parâmetros de linha de comando:

```markdown
Parameter Description
- warmup-time-s: The initialization time.
- episode-time-s: The duration for each data collection session.
- reset-time-s: The preparation time between each data collection.
- num-episodes: The expected number of data sets to collect.
- push-to-hub: Determines whether to upload the data to HuggingFace Hub.
```

#### 4. Controles de Teclado Durante a Gravação

Use atalhos de teclado para controlar o fluxo de trabalho de gravação de dados:

- Pressione **seta para a direita (→)**: Interrompe antecipadamente o episódio atual ou redefine o tempo e, em seguida, passa para o próximo.
- Pressione **seta para a esquerda (←)**: Cancela o episódio atual e o grava novamente.
- Pressione **ESC**: Interrompe imediatamente a sessão, codifica o vídeo e envia o conjunto de dados.

:::tip

Se o teclado não funcionar, talvez seja necessário instalar outra versão do pynput.

```bash
pip install pynput==1.6.8
```

:::

## Reproduzir um episódio

Agora tente reproduzir o primeiro episódio no seu robô:

Viola:

```bash
lerobot-replay \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --dataset.repo_id=starai/record-test \
    --dataset.episode=1 # choose the episode you want to replay
```

Cello:

```bash
lerobot-replay \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --dataset.repo_id=starai/record-test \
    --dataset.episode=1 # choose the episode you want to replay
```

<details>
<summary> Braço Duplo </summary>

Viola:

```bash
lerobot-replay \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode=0 # choose the episode you want to replay
```

Cello:

```bash
lerobot-replay \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode=0 # choose the episode you want to replay
```

</details>

## Treinar e Avaliar Política

<details>
<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>


Consulte [ACT](https://huggingface.co/docs/lerobot/act)

**Treinar**

Viola:

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test \
  --policy.type=act \
  --output_dir=outputs/train/act_viola_test \
  --job_name=act_viola_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy \
  --steps=200000
```

Cello:

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test \
  --policy.type=act \
  --output_dir=outputs/train/act_cello_test \
  --job_name=act_cello_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy \
  --steps=200000
```

<details>
<summary> Braço Duplo </summary>

Viola:

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test_bi_arm \
  --policy.type=act \
  --output_dir=outputs/train/act_bi_viola_test \
  --job_name=act_bi_viola_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy \
  --steps=200000
```

Cello:

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test_bi_arm \
  --policy.type=act \
  --output_dir=outputs/train/act_bi_cello_test \
  --job_name=act_bi_cello_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy \
  --steps=200000
```

</details>

1. `policy.type` oferece suporte à entrada `diffusion,pi0,pi0fast`
1. Fornecemos o conjunto de dados como um parâmetro: `dataset.repo_id=starai/record-test`.
2. Vamos carregar a configuração de [`configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/src/lerobot/policies/act/configuration_act.py). É importante notar que essa política se adaptará automaticamente aos estados dos motores do robô, às ações dos motores e ao número de câmeras, e será salva no seu conjunto de dados.
3. Fornecemos `wandb.enable=true` para usar o [Weights and Biases](https://docs.wandb.ai/quickstart) para visualizar os gráficos de treinamento. Isso é opcional, mas se você o usar, certifique-se de ter feito login executando `wandb login`.

**Avaliar**


Execute o seguinte comando para registrar 10 episódios de avaliação:

Viola:

```bash
lerobot-record  \
  --robot.type=lerobot_robot_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_staraiviola_arm \
  --display_data=false \
  --dataset.repo_id=starai/eval_record-test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_viola_test/checkpoints/last/pretrained_model
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=lerobot_teleoperator_violin \
  # --teleop.port=/dev/ttyUSB0 \
  # --teleop.id=my_awesome_leader_arm \
```

Cello:

```bash
lerobot-record  \
  --robot.type=lerobot_robot_cello \
  --robot.port=/dev/ttyUSB1 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_staraicello_arm \
  --display_data=false \
  --dataset.repo_id=starai/eval_record-test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_viola_test/checkpoints/last/pretrained_model
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=lerobot_teleoperator_violin \
  # --teleop.port=/dev/ttyUSB0 \
  # --teleop.id=my_awesome_leader_arm \
```

<details>
<summary> Braço Duplo </summary>

Viola:

```bash
lerobot-record  \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --robot.id=bi_starai_viola_follower \
    --display_data=false \
    --dataset.repo_id=starai/eval_record-test_bi_arm \
    --dataset.single_task="test" \
    --policy.path=outputs/train/act_bi_viola_test/checkpoints/last/pretrained_model
```

Cello:

```bash
lerobot-record  \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --robot.id=bi_starai_cello_follower \
    --display_data=false \
    --dataset.repo_id=starai/eval_record-test_bi_arm \
    --dataset.single_task="test" \
    --policy.path=outputs/train/act_bi_cello_test/checkpoints/last/pretrained_model
```

</details>

Como você pode ver, isso é quase o mesmo que o comando usado anteriormente para registrar o conjunto de dados de treinamento, com algumas mudanças:

1. O parâmetro `--policy.path`, que indica o caminho para o arquivo de pesos da sua política treinada (por exemplo, `outputs/train/act_viola_test/checkpoints/last/pretrained_model`). Se você tiver enviado seus pesos de modelo para o Hub, também poderá usar o repositório do modelo (por exemplo, `${HF_USER}/starai`).

2. O nome do conjunto de dados de avaliação `dataset.repo_id` começa com `eval_`. Essa operação registrará vídeos e dados especificamente para a fase de avaliação, que serão salvos em uma pasta que começa com `eval_`, como `starai/eval_record-test`.

3. Se você encontrar `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/starai/eval_xxxx'` durante a fase de avaliação, exclua a pasta que começa com `eval_` e execute o programa novamente.

4. Ao encontrar `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, certifique-se de que as palavras-chave como `up` e `front` no parâmetro `--robot.cameras` sejam estritamente consistentes com as usadas durante a fase de coleta de dados.

</details>



<details>
<summary>[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) </summary>

Consulte [SmolVLA](https://huggingface.co/docs/lerobot/smolvla) 

```bash
pip install -e ".[smolvla]"
```

**Treinar**

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

**Avaliar**

```bash
lerobot-record \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.id=my_awesome_staraiviola_arm \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30, fourcc: "MJPG"}}" \
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \ 
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=so100_leader \
  # --teleop.port=/dev/ttyACM0 \
  # --teleop.id=my_red_leader_arm \
  --policy.path=HF_USER/FINETUNE_MODEL_NAME # <- Use your fine-tuned model
```

</details>

<details>
<summary>[Libero](https://huggingface.co/docs/lerobot/libero) </summary>

Consulte [Libero](https://huggingface.co/docs/lerobot/libero) 

LIBERO é um benchmark projetado para estudar o aprendizado contínuo de robôs. A ideia é que os robôs não serão apenas pré-treinados uma vez em uma fábrica; eles precisarão continuar aprendendo e se adaptando com seus usuários humanos ao longo do tempo. Essa adaptação contínua é chamada de aprendizado ao longo da vida na tomada de decisão (LLDM), e é um passo fundamental para construir robôs que se tornem ajudantes verdadeiramente personalizados.

- [Artigo LIBERO](https://arxiv.org/abs/2306.03310)
- [Repositório original do LIBERO](https://github.com/Lifelong-Robot-Learning/LIBERO)

LIBERO inclui cinco conjuntos de tarefas:

- LIBERO-Spatial (libero_spatial) – tarefas que exigem raciocínio sobre relações espaciais.

- LIBERO-Object (libero_object) – tarefas centradas na manipulação de diferentes objetos.

- LIBERO-Goal (libero_goal) – tarefas condicionadas a objetivos em que o robô deve se adaptar a alvos em mudança.

- LIBERO-90 (libero_90) – 90 tarefas de horizonte curto da coleção LIBERO-100.

- LIBERO-Long (libero_10) – 10 tarefas de horizonte longo da coleção LIBERO-100.

Juntas, essas suítes cobrem 130 tarefas, desde manipulações simples de objetos até cenários complexos de múltiplas etapas. O LIBERO foi projetado para crescer com o tempo e servir como um benchmark compartilhado onde a comunidade pode testar e aprimorar algoritmos de aprendizado ao longo da vida.

**Treinar**

```bash
lerobot-train \
  --policy.type=smolvla \
  --policy.repo_id=${HF_USER}/libero-test \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_10 \
  --output_dir=./outputs/ \
  --steps=100000 \
  --batch_size=4 \
  --eval.batch_size=1 \
  --eval.n_episodes=1 \
  --eval_freq=1000 \
```

**Avaliação**

Para instalar o LIBERO, depois de seguir as instruções oficiais do LeRobot, basta fazer: `pip install -e ".[libero]"`

**Avaliação de uma única suíte**

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object \
  --eval.batch_size=2 \
  --eval.n_episodes=3
```

- `--env.task` escolhe a suíte (libero_object, libero_spatial, etc.).

- `--eval.batch_size` controla quantos ambientes são executados em paralelo.

- `--eval.n_episodes` define quantos episódios serão executados no total.

**Avaliação de múltiplas suítes**

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object,libero_spatial \
  --eval.batch_size=1 \
  --eval.n_episodes=2
```

- Passe uma lista separada por vírgulas para `--env.task` para avaliação de múltiplas suítes.

</details>



<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

Consulte [Pi0](https://huggingface.co/docs/lerobot/pi0) 

```bash
pip install -e ".[pi]"
```

**Treinar**
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

**Avaliar**

```bash
lerobot-record \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --robot.id=my_awesome_staraiviola_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```


</details>


<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

Consulte [Pi0.5](https://huggingface.co/docs/lerobot/pi05) 

```bash
pip install -e ".[pi]"
```

**Treinar**
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

**Avaliar**

```bash
lerobot-record \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --robot.id=my_awesome_staraiviola_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```


</details>


<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

Consulte [GR00T N1.5](https://huggingface.co/docs/lerobot/groot) 


</details>




Retomar o treinamento a partir de um checkpoint específico.

Viola:

```bash
lerobot-train \
  --config_path=outputs/train/act_viola_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true \
  --steps=400000
```

Cello:

```bash
lerobot-train \
  --config_path=outputs/train/act_cello_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true \
  --steps=400000
```



## FAQ

- Se você estiver usando o tutorial deste documento, por favor, faça `git clone` do repositório GitHub recomendado: `https://github.com/servodevelop/lerobot.git`.

- Se a teleoperação funcionar normalmente, mas a teleoperação com uma Câmera não exibir a interface de imagem, consulte [aqui](https://github.com/huggingface/lerobot/pull/757/files).

- Se você encontrar um problema com o libtiff durante a teleoperação do conjunto de dados, atualize a versão do libtiff.

  ```bash
  conda install libtiff==4.5.0  # for Ubuntu 22.04, use libtiff==4.5.1
  ```

- Após instalar o LeRobot, ele pode desinstalar automaticamente a versão GPU do PyTorch, então você precisa instalar manualmente o torch-gpu.

- Para Jetson, por favor, instale primeiro o [PyTorch e o Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) antes de executar `conda install -y -c conda-forge ffmpeg`, caso contrário, haverá um problema de incompatibilidade de versão ao compilar o torchvision.

- Treinar 50 episódios de dados ACT em um laptop com 3060 8GB leva aproximadamente 6 horas, enquanto treinar 50 episódios em um computador com 4090 ou A100 leva cerca de 2–3 horas.

- Durante a coleta de dados, garanta a estabilidade da posição e do ângulo da câmera, bem como da iluminação do ambiente, e minimize o fundo instável e os pedestres capturados pela câmera. Caso contrário, grandes mudanças no ambiente de implantação podem fazer com que o braço robótico não consiga agarrar objetos normalmente.

- O `num-episodes` no comando de coleta de dados deve garantir coleta de dados suficiente e não deve ser pausado manualmente no meio. Isso porque a média e a variância dos dados são calculadas somente após a conclusão da coleta, o que é necessário para o treinamento.

- Se o programa informar que não consegue ler os dados de imagem da câmera USB, certifique-se de que a câmera USB não esteja conectada por meio de um Hub. A câmera USB deve ser conectada diretamente ao dispositivo para garantir taxas rápidas de transmissão de imagem.

## Citação

StarAI Robot Arm ROS2 Moveit2: [star-arm-moveit2](https://wiki.seeedstudio.com/pt-br/starai_arm_ros_moveit/)

lerobot-starai github: [lerobot-starai](https://github.com/servodevelop/lerobot.git)

STEP: [STEP](https://github.com/Welt-liu/star-arm-moveit2/tree/main/hardware)

URDF: [URDF](https://github.com/Welt-liu/star-arm-moveit2/tree/main/src/cello_description)

Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

ACT ou ALOHA: [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://tonyzhaozh.github.io/aloha/)

VQ-BeT: [VQ-BeT: Behavior Generation with Latent Actions](https://sjlee.cc/vq-bet/)

Diffusion Policy: [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

TD-MPC: [TD-MPC](https://www.nicklashansen.com/td-mpc/)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
