---
description: Este wiki fornece um guia abrangente, passo a passo, para implantar o NVBlox com câmera RGB-D Orbbec em dispositivos Jetson AGX Orin. Ele abrange configuração de ambiente, instalação de dependências, integração com Isaac ROS e demonstrações de mapeamento 3D em tempo real para aplicações de robótica.
title: Implantar NVBlox com Câmera Orbbec no Jetson AGX Orin
keywords:
  - NVBlox
  - Jetson AGX Orin
  - Isaac ROS
  - ROS2
  - Visão Computacional
  - Robótica
  - Percepção 3D
  - Câmera RGB-D
  - Edge AI
  - TSDF
  - ESDF
  - Mapeamento 3D
image: https://files.seeedstudio.com/wiki/other/page-nvblox.jpg
slug: /deploy_nvblox_jetson_agx_orin
sku: 101090144,100020039
last_update:
  date: 2026-01-20T00:00:00.000Z
  author: Dayu
createdAt: '2026-01-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/deploy_nvblox_jetson_agx_orin/
---

<div align="center">
    <img width={700}
     src="https://media.githubusercontent.com/media/NVIDIA-ISAAC-ROS/.github/release-4.0/resources/isaac_ros_docs/repositories_and_packages/isaac_ros_nvblox/isaac_sim_nvblox_humans.gif"/>
</div>

## Introdução

<div style={{ textAlign: "justify" }}>
[Isaac ROS NVBlox](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox) é um framework de mapeamento 3D de alto desempenho acelerado por GPU, desenvolvido pela NVIDIA para percepção robótica em tempo real. Diferente de modelos de estimativa de profundidade monocular, o NVBlox consome entrada de profundidade real de câmeras RGB-D ou câmeras estéreo para construir representações precisas de cenas 3D.

Ele constrói mapas densos TSDF (Truncated Signed Distance Field) e ESDF (Euclidean Signed Distance Field) em tempo real, permitindo reconstrução 3D de alta qualidade, navegação ciente de obstáculos e verificação de colisão. O NVBlox também pode gerar malhas, mapas de custo baseados em voxels e representações de ocupação 3D adequadas para robôs móveis autônomos (AMRs).

Isso o torna particularmente valioso para aplicações de Edge AI, onde restrições de hardware e eficiência computacional são considerações críticas. Este wiki demonstra como implantar o Isaac ROS NVBlox no **Jetson AGX Orin** com integração ao **ROS 2**, usando uma **câmera RGB-D Orbbec** e uma plataforma de robô móvel para alcançar um pipeline completo de percepção e navegação no próprio dispositivo. 🚀

</div>

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5012-with-GMSL-extension-board-p-6682.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱</font></span></strong>
    </a>
</div>

## Pré-requisitos

- **[reComputer J50](https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html)** (Jetson AGX Orin) com JetPack 6.2.1
- Câmera RGB-D Orbbec 📷
- Chassi de robô móvel (opcional) 🤖
- Ambiente [ROS2 Humble](https://wiki.seeedstudio.com/pt-br/install_ros2_humble/) instalado
- Instalação do Orbbec ROS2 SDK necessária
- Instalação do Isaac ROS necessária

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/page-nvblox.jpg"/>
</div>

## Destaques Técnicos

- **Mapeamento 3D em Tempo Real**: O NVBlox gera mapas densos TSDF e ESDF em tempo real usando aceleração por GPU, permitindo reconstrução de cenas 3D de alta qualidade para aplicações de robótica.

- **Integração com Câmera RGB-D**: Aproveita informações de profundidade reais de câmeras RGB-D Orbbec para criar representações 3D precisas sem depender de estimativa de profundidade monocular.

- **Otimizado para Implantação na Borda**: Projetado especificamente para inferência eficiente em dispositivos de borda como o Jetson AGX Orin, com otimização CUDA para desempenho máximo.

- **Saídas Prontas para Navegação**: Gera malhas, mapas de custo baseados em voxels e grades de ocupação 3D adequadas para navegação autônoma e desvio de colisão.

- **Suporte Nativo a ROS2**: Fornece integração perfeita com ROS2 Humble com tipos de mensagens robóticas padrão para fácil integração em sistemas robóticos existentes.

## Configuração do Ambiente

### Instalar Dependências Básicas

Instale as seguintes dependências no seu terminal:

```bash
sudo apt update
sudo apt-get install python3-pip # Install Python3
sudo apt-get install nvidia-jetpack # Install developer tools
sudo pip3 install jetson-stats # Install Jtop to check JetPack version
sudo apt-get install git-lfs # Install Git LFS
```

### Instalar Docker CE

Atualize as fontes de software:

```bash
sudo apt-get update
```

Instale dependências básicas:

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common # Install essential packages to allow apt over HTTPS
```

Adicione a chave GPG oficial do Docker:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Adicione o repositório estável do Docker:

```bash
sudo add-apt-repository \
   "deb [arch=arm64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

Atualize a lista de pacotes novamente (novo repositório adicionado):

```bash
sudo apt-get update
```

Instale o Docker CE (Community Edition):

```bash
sudo apt-get install docker-ce
```

Garanta que o Docker seja iniciado:

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

Adicione permissões (adicione o usuário ao grupo Docker):

```bash
sudo usermod -aG docker $USER
```

Reinicie o sistema ou faça logout:

```bash
sudo reboot
```

### Instalar Isaac ROS 3.2

Crie o workspace e adicione ao ambiente:

```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

Entre no workspace e clone os pacotes:

```bash
cd ${ISAAC_ROS_WS}/src
git clone -b release-3.2 https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
```

Puxe a imagem oficial Isaac Common Docker e entre no Docker:

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

Executar `./scripts/run_dev.sh` irá instalar automaticamente o Isaac ROS e iniciar o contêiner.

:::tip
Instalar o Isaac ROS requer fazer login no NVIDIA NGC no terminal e inserir a API Key 🔑 gerada pela sua conta NGC
:::

### Instalar Orbbec SDK ROS2

O uso de câmeras RGB-D Orbbec requer a instalação do driver do SDK. Este guia usa o método Build from Source.

Instale as dependências:

```bash
sudo apt install libgflags-dev nlohmann-json3-dev \
ros-$ROS_DISTRO-image-transport ros-${ROS_DISTRO}-image-transport-plugins ros-${ROS_DISTRO}-compressed-image-transport \
ros-$ROS_DISTRO-image-publisher ros-$ROS_DISTRO-camera-info-manager \
ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs ros-$ROS_DISTRO-statistics-msgs ros-$ROS_DISTRO-xacro \
ros-$ROS_DISTRO-backward-ros libdw-dev libssl-dev mesa-utils libgl1 libgoogle-glog-dev
```

Crie um workspace colcon:

```bash
mkdir -p ~/ros2_ws/src

cd ~/ros2_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

Entre no diretório de trabalho e compile:

```bash
cd ~/ros2_ws
colcon build --event-handlers console_direct+ --cmake-args -DCMAKE_BUILD_TYPE=Release
```

Para permitir que câmeras Orbbec sejam reconhecidas corretamente no Linux, instale as regras udev.

Entre no diretório de trabalho do código-fonte e execute o script:

```bash
cd ~/ros2_ws/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

:::note
Se este script não for executado, a abertura do dispositivo falhará devido a problemas de permissão. Você precisará executar o exemplo com sudo (privilégios de administrador). ⚠️
:::

## Implantar NVBlox

### Compilar NVBlox

Obtenha o código-fonte do NVBlox adaptado para câmera Orbbec e copie-o para o diretório de trabalho:

```bash
git clone https://github.com/jjjadand/isaac-NVblox-Orbbec.git
cp -r isaac-NVblox-Orbbec/src/isaac_ros_nvblox/ ${ISAAC_ROS_WS}/src/
cp -r isaac-NVblox-Orbbec/src/isaac_ros_nitros/ ${ISAAC_ROS_WS}/src/
cp -r isaac-NVblox-Orbbec/build/ ${ISAAC_ROS_WS}/
```

Entre no workspace e inicie o contêiner Docker do Isaac ROS:

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

(Opcional) Se você encontrar um erro semelhante ao seguinte:

```bash
Finished pulling pre-built base image: nvcr.io/nvidia/isaac/ros:aarch64-ros2_humble_4c0c55dddd2bbcc3e8d5f9753bee634c
Nothing to build, retagged nvcr.io/nvidia/isaac/ros:aarch64-ros2_humble_4c0c55dddd2bbcc3e8d5f9753bee634c as isaac_ros_dev-aarch64
Running isaac_ros_dev-aarch64-container
docker: Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: could not apply required modification to OCI specification: error modifying OCI spec: failed to inject CDI devices: unresolvable CDI devices nvidia.com/gpu=all
```

Você pode tentar executar o seguinte comando no terminal para corrigir:

```bash
sudo nvidia-ctk cdi generate --mode=csv --output=/etc/cdi/nvidia.yaml
```

Após iniciar o contêiner com sucesso, você deverá ver algo como isto:
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/isaac-ros.jpg"/>
</div>

Instale dependências adicionais:

```bash
sudo apt update
sudo apt-get install -y ros-humble-magic-enum
sudo apt-get install -y ros-humble-foxglove-msgs
```

Adicione variáveis de ambiente CUDA ao `.bashrc`:

```bash
echo '
CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export CUDACXX=$CUDA_HOME/bin/nvcc
' >> ~/.bashrc
```

Crie links simbólicos:

```bash
sudo ln -sf /opt/ros/humble/include/magic_enum.hpp /usr/include/magic_enum.hpp

sudo mkdir -p /opt/ros/humble/include/foxglove_msgs
sudo ln -sfn /opt/ros/humble/include/foxglove_msgs/foxglove_msgs/msg /opt/ros/humble/include/foxglove_msgs/msg
```

Compile e inicialize o workspace em `/workspaces/isaac_ros-dev`:

```bash
colcon build --symlink-install --cmake-args -DBUILD_TESTING=OFF
source install/setup.bash
```

Após a conclusão da compilação, você deverá ver resultados como estes:
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/NVblox-complied.jpg"/>
</div>

### Iniciar NVBlox

Após conectar a câmera Orbbec ao Jetson via cabo de dados, primeiro inicie o script Orbbec ROS2 no ambiente local:

```bash
cd ~/ros2_ws/src
source install/setup.bash

ros2 launch orbbec_camera <camera_name>.launch.py

# Example: ros2 launch orbbec_camera gemini2.launch.py
```

Aqui estão alguns parâmetros `<camera_name>` suportados:

- gemini210
- gemini2
- gemini2L
- gemini_330_gmsl
- gemini_330_series

:::warning
Observe que você NÃO deve iniciar o script Orbbec dentro do contêiner Docker. Certifique-se de ter instalado o driver Orbbec seguindo o tutorial anterior. ⚠️
:::

O contêiner Isaac ROS faz a ponte com o ROS2 publicado localmente por padrão. No contêiner Docker, digite:

```bash
ros2 topic list
```

Normalmente, você deverá ver os seguintes tópicos de dados publicados pela câmera Orbbec no contêiner Docker:

```yaml
/camera/accel/imu_info
/camera/color/camera_info
/camera/color/image_raw
/camera/depth/camera_info
/camera/depth/image_raw
/camera/depth/points
/camera/depth_filter_status
/camera/device_status
/camera/gyro/imu_info
/camera/gyro_accel/sample
/camera/ir/camera_info
/camera/ir/image_raw
```

Certifique-se de que você consegue ler os tópicos de dados da câmera Orbbec. Em seguida, inicie o script de exemplo do NVBlox no contêiner Isaac ROS:

```bash
cd ~/workspaces/isaac_ros-dev
source install/setup.bash

ros2 launch nvblox_examples_bringup orbbec_example.launch.py
```

Você pode ver a saída do NVBlox de grades de ocupação 3D e malhas no RViz:
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/other/rviz.jpg"/>
</div>

O RViz pode ser configurado como mostrado abaixo. Ative os resultados de visualização desejados e selecione os nomes de tópicos disponíveis:
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/other/rviz-lan.jpg"/>
</div>

Por fim, montando o AGX Orin e a câmera Orbbec em um AGV móvel, você pode obter o efeito mostrado no vídeo: 🎥

<div class="video-container">
  <iframe width="1029" height="579" src="https://www.youtube.com/embed/_TKNGejfGIo" title="Deploy NVBlox on reComputer Mini J501" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Isso pode ser usado para detecção de obstáculos e construção de mapas de malha 3D de cenas para robôs móveis. 🤖

## Referências

- [Repositório GitHub Isaac ROS Common](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common)
- [Repositório GitHub Isaac ROS NVBlox](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox.git)
- [Repositório GitHub Isaac NVBlox Orbbec](https://github.com/jjjadand/isaac-NVblox-Orbbec#)
- [Documentação ROS2 Humble](https://docs.ros.org/en/humble/)
- [Documentação Orbbec SDK ROS2](https://github.com/orbbec/OrbbecSDK_ROS2)

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
