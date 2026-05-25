---
description: Este wiki fornece um guia passo a passo para usar as câmeras de profundidade Orbbec no reComputer com ROS.
title: Câmera de Profundidade Orbbec com ROS
keywords:
  - Jetson Nano
  - reComputer
  - Orbbec
  - Câmera de Profundidade
  - ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /orbbec_depth_camera_on_ros
sku: 101090144,100010971
last_update:
  date: 10/10/2024
  author: Lidayu
createdAt: '2024-10-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/orbbec_depth_camera_on_ros/
---
# Como Usar Câmeras de Profundidade Orbbec no reComputer com ROS

## Introdução

Este tutorial fornece um guia passo a passo sobre como usar a Câmera de Profundidade Orbbec por meio do ROS em dispositivos da série [reComputer J30/J40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html). Vamos usar a Orbbec Gemini 2 como exemplo, obter dados de tópicos de imagens de profundidade e nuvens de pontos, e visualizá-los no rviz.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Pré-requisitos

- __[reComputer J30/40 series](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__:  Realizamos os tutoriais com base no [sistema JetPack 5.x](/pt-br/reComputer_J4012_Flash_Jetpack) e no [ambiente ROS Noetic](/pt-br/installing_ros1).

- Instale as dependências (tenha cuidado com a sua distribuição ROS):

  ```bash
  # Assuming you have sourced the ROS environment, same below
  sudo apt install libgflags-dev ros-$ROS_DISTRO-image-geometry ros-$ROS_DISTRO-camera-info-manager \
  ros-$ROS_DISTRO-image-transport ros-$ROS_DISTRO-image-publisher libgoogle-glog-dev libusb-1.0-0-dev libeigen3-dev \
  ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs libdw-dev
  ```

## Primeiros Passos

### Conectando as Câmeras

Conecte a Câmera de Profundidade Orbbec ao Jetson via USB Type-C e verifique se o [ROS já está instalado](/pt-br/installing_ros1) no seu sistema.

<div align="center">
      <img width={700}
      src="https://i.imgur.com/0gAng8s.jpg" />
  </div>

### Instalação
__Se você já clonou o OBcamera_ws a partir do nosso projeto, não precisa clonar a partir do link abaixo.__

- **Passo 1:**Crie um workspace ROS (__se você ainda não tiver um__):

```bash
mkdir -p OBcamera_ws/src
```

- **Passo 2:**Obtenha o código-fonte:

```bash
cd OBcamera_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS1.git
```

- **Passo 3:**Compile o pacote:

```bash
cd OBcamera_ws
catkin_make
```

- **Passo 4:**Instale as regras udev:

```bash
source ./devel/setup.bash
roscd orbbec_camera
sudo bash ./scripts/install_udev_rules.sh
```

### Iniciar a Câmera

Para o modelo de câmera __Gemini2__, digite o seguinte no terminal 1:

```bash
source ./devel/setup.bash
roslaunch orbbec_camera gemini2.launch
```

No terminal 2:

```bash
source ./devel/setup.bash
rviz
```

Você pode digitar o comando `rostpoic list` no terceiro terminal para visualizar os tópicos publicados pela Câmera Orbbec. Os tópicos disponíveis são os seguintes:

- `/camera/color/camera_info`: As informações da câmera de cor.
- `/camera/color/image_raw`: A imagem do fluxo de cor.
- `/camera/depth/camera_info`: As informações da câmera de profundidade.
- `/camera/depth/image_raw`: A imagem do fluxo de profundidade.
- `/camera/depth/points`: A nuvem de pontos, disponível somente quando `enable_point_cloud` é `true`.
- `/camera/depth_registered/points`: A nuvem de pontos colorida, disponível somente quando `enable_colored_point_cloud` é `true`.
- `/camera/left_ir/camera_info`: As informações da câmera IR esquerda.
- `/camera/left_ir/image_raw`: A imagem do fluxo IR esquerdo.
- `/camera/right_ir/camera_info`: As informações da câmera IR direita.
- `/camera/right_ir/image_raw`: A imagem do fluxo IR direito.
- `/diagnostics`: As informações de diagnóstico da câmera. Atualmente, as informações de diagnóstico incluem apenas a temperatura da câmera.

Inicie o RVIZ e adicione o tópico por meio do botão no canto inferior esquerdo da interface do RVIZ; você obterá uma renderização semelhante à seguinte:
<div align="center">
      <img width={700}
      src="https://i.imgur.com/7jmfnZ4.png" />
  </div>

Se o modelo de câmera que você está usando for diferente, encontre o nome do arquivo de launch correspondente na tabela abaixo e substitua `gemini2.launch` no terminal 1 de acordo.

| Séries de Produtos                  | Arquivo de Launch        |
| ----------------------------------- | ------------------------ |
| astra+                              | astra_adv.launch         |
| astra mini/astra mini pro/astra pro | astra.launch             |
| astra mini s pro                    | astra.launch             |
| astra2                              | astra2.launch            |
| astra stereo s                      | stereo_s_u3.launch       |
| astra pro2                          | astra_pro2.launch        |
| dabai                               | dabai.launch             |
| dabai d1                            | dabai_d1.launch          |
| dabai dcw                           | dabai_dcw.launch         |
| dabai dw                            | dabai_dw.launch          |
| dabai pro                           | dabai_pro.launch         |
| deeya                               | deeya.launch             |
| femto / femto w                     | femto.launch             |
| femto mega                          | femto_mega.launch        |
| femto bolt                          | femto_bolt.launch        |
| gemini                              | gemini.launch            |
| gemini2 / dabai DCL                 | gemini2.launch           |
| gemini2L                            | gemini2L.launch          |
| gemini e                            | gemini_e.launch          |
| gemini e lite                       | gemini_e_lite.launch     |
| dabai max                           | dabai_max.launch         |
| dabai max pro                       | dabai_max_pro.launch     |
| gemini uw                           | gemini_uw.launch         |
| dabai dcw2                          | dabai_dcw2.launch        |
| dabai dw2                           | dabai_dw2.launch         |
| gemini ew                           | gemini_ew.launch         |
| gemini ew lite                      | gemini_ew_lite.launch    |
| gemini 330 series                   | gemini_330_series.launch |

__Todos os arquivos de launch são essencialmente semelhantes, com a principal diferença sendo os valores padrão dos parâmetros definidos para diferentes modelos dentro da mesma série. Diferenças em padrões USB, como USB 2.0 versus USB 3.0, podem exigir ajustes nesses parâmetros. Se você encontrar uma falha na inicialização, revise atentamente o manual de especificações. Preste atenção especial às configurações de resolução no arquivo de launch, bem como a outros parâmetros, para garantir compatibilidade e desempenho ideal.__

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
