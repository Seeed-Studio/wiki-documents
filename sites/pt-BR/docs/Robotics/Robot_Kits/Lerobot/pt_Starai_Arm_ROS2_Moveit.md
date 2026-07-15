---
description: Este wiki fornece o Guia do Manipulador Starai Arm - ROS2 MoveIt.
title: Starai Arm no ROS2 MoveIt
keywords:
  - Moveit
  - ROS2
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /starai_arm_ros_moveit
last_update:
  date: 8/1/2025
  author: LiShanghang
createdAt: '2025-07-31'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/starai_arm_ros_moveit/
---

# Guia do Manipulador Starai Arm - ROS2 MoveIt

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/IJKTeBYAG7k?si=iS-jqT27fDjeI6yX" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

| **Seguidor Viola** | **Líder Violin** | **Seguidor Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora!!! 🖱️</font></span></strong>
</a></div>

## Introdução ao Produto

1. **Open-Source e Fácil para Desenvolvimento Secundário**
    Esta série de servomotores, fornecida pela [Fashion Star Robotics](https://fashionrobo.com/), oferece uma solução de braço robótico de 6+1 graus de liberdade de código aberto e facilmente personalizável.

2. **Sistemas de Braços Duplos com Diversas Cargas Úteis**
    O Violin serve como braço robótico líder. Quando em 70% de sua envergadura, o braço seguidor Viola possui uma carga útil operacional de 300 g, enquanto o braço seguidor Cello possui uma carga útil operacional de 750 g.

3. **Compatível com ROS2, Moveit2 e Isaac Sim**
    Ele oferece suporte ao ROS2 para publicação e assinatura de tópicos de dados do braço robótico e controle do braço robótico, e também é compatível com o MoveIt2 para cálculo de cinemática inversa, bem como simulação no Isaac Sim.

4. **Suporte à Integração com a Plataforma LeRobot**
    Ele é especificamente projetado para integração com a [plataforma LeRobot](https://github.com/huggingface/lerobot). Esta plataforma fornece modelos PyTorch, conjuntos de dados e ferramentas para aprendizado por imitação em tarefas de robótica no mundo real, incluindo coleta de dados, simulação, treinamento e implantação.

5. **SDK Open-Source**
     Suporta desenvolvimento de SDK em Python e C++

6. **Flutuação por Botão**
    Simula compensação de gravidade, permitindo que o braço robótico flutue em qualquer posição por meio de um botão.

7. **Efetuador Final Modular**
    Permite substituição rápida em modo DIY.

8. **Recursos Abundantes de Aprendizado**
    Oferecemos recursos de aprendizado abrangentes e open-source, incluindo configuração de ambiente, guias de instalação e depuração e exemplos de tarefas de preensão personalizadas para ajudar os usuários a começar rapidamente e desenvolver aplicações de robótica.

9. **Compatibilidade com Plataforma Nvidia**
    A implantação é suportada por meio da plataforma Nvidia Jetson.

## Especificações

| Item                 | Braço Seguidor \| Viola                             | Braço Líder \|Violin                                |    Braço Seguidor \|Cello    |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |-----------------|
| Graus de Liberdade   | 6+1                                               | 6+1                                               | 6+1             |
| Alcance              | 470mm                                             | 470mm                                             | 670mm |
| Envergadura          | 940mm                                             | 940mm                                             | 1340mm |
| Repetibilidade       | 2mm                                               | -                                                 | 1mm  |
| Carga Útil de Trabalho | 300g (com 70% de alcance)                            | -                                                 |  750g (com 70% de alcance)   |
| Servos               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |RX18-U100H-M x3<br/> RX8-U50H-M x3<br/> RX8-U51H-M x1|
| Kit de Garra Paralela | ✅                                                 | -                                                 | ✅   |
| Rotação do Pulso     | Sim                                               | Sim                                               | Sim |
| Manter em Qualquer Posição | Sim                                               | Sim (com botão de manopla)                          |  Sim|
| Suporte para Câmera de Pulso   |Fornece arquivos de referência para impressão 3D | | Fornece arquivos de referência para impressão 3D
| Funciona com LeRobot | ✅                                                 | ✅                                                 | ✅|
| Funciona com ROS 2   | ✅                                                 | ✅                                                | ✅|
| Funciona com MoveIt2    | ✅                                                 | ✅                                               |✅ |
| Funciona com Gazebo  | ✅                                                 |✅                                              |✅ |
| Hub de Comunicação   | UC-01                                             | UC-01                                             | UC-01 |
| Fonte de Alimentação | 12V10A/120w XT30                                   | 12V10A/120w XT30                                 |12V25A/300w XT60  |

Para mais informações sobre servomotores, visite o seguinte link.

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)

## Ambiente Dependente

Nenhum módulo LSB está disponível.

Distributor ID: Ubuntu

Description:    Ubuntu 22.04.5 LTS

Release:        22.04

Codename:       Jammy

ROS2:           Humble

### Instalar ROS2 Humble

[Instalação do ROS2 Humble](https://wiki.seeedstudio.com/pt-br/install_ros2_humble/)

### Instalar Moveit2

```bash
sudo apt install ros-humble-moveit*
```

### Instalar o SDK do Servomotor

```bash
sudo pip install pyserial
sudo pip install fashionstar-uart-sdk
```

### Criar um workspace e Inicialização

```bash
mkdir -p ~/starai_ws/src
cd ~/starai_ws
colcon build
```

### Clonar o pacote Ros2 `starai-arm-moveit2`

```
cd ~/starai_ws/src
git clone https://github.com/Seeed-Projects/fashionstar-starai-arm-ros2.git
cd ~/starai_ws
colcon build
echo "source ~/starai_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```


## Viola
### Script de Simulação do Starai Arm MoveIt2 (Opcional)

```bash
ros2 launch viola_moveit_config demo.launch.py 
```

### Usando um Braço Robótico Real

### Etapa 1: Iniciar o Nó de Controle do Braço

Inicie o driver de hardware do braço; o braço se moverá para a posição zero.

```bash
ros2 launch viola_moveit_config driver.launch.py
```

### Etapa 2: Iniciar o Moveit2

```bash
ros2 launch viola_moveit_config moveit_write_read.launch.py
```

### Demonstração de leitura/gravação de pose do efetuador final

```bash
ros2 run arm_moveit_write topic_publisher 
```

## Cello
### Script de Simulação do Starai Arm MoveIt2 (Opcional)

```bash
ros2 launch cello_moveit_config demo.launch.py 
```

### Usando um Braço Robótico Real

### Etapa 1: Iniciar o Nó de Controle do Braço

Inicie o driver de hardware do braço; o braço se moverá para a posição zero.

```bash
ros2 launch cello_moveit_config driver.launch.py
```

### Etapa 2: Iniciar o Moveit2

```bash
ros2 launch cello_moveit_config actual_robot_demo.launch.py
```

### Demonstração de leitura/gravação de pose do efetuador final

```bash
ros2 launch cello_moveit_config moveit_write_read.launch.py
```

## Demonstração de nó de envio de tópico de posição e orientação

atualize aqui `src/arm_moveit_write/src/topic_publisher.cpp`

```bash
    // // viola
    // dataset1_ = { 
    //   {0.003, -0.204, 0.274},       // position
    //   {0.014, 0.717, 0.017, 0.696}, // orientation
    //   "open"                         // gripper_state
    // };
    // dataset2_ = {
    //   {-0.00, -0.34, 0.177},        // position
    //   {0.0, 0.7071, 0.0, 0.7071},   // orientation
    //   "close"                        // gripper_state
    // };

    // cello
    dataset1_ = {
      {-0.278, 0.000, 0.438},       // position
      {0.707, 0.000, -0.707, 0.000}, // orientation
      "open"                         // gripper_state
    };
    dataset2_ = {
      {-0.479, -0.000, 0.369},        // position
      {0.707, -0.000, -0.707, 0.000},   // orientation
      "close"                        // gripper_state
    }

```

```bash
colcon build
source install/setup.sh
ros2 run arm_moveit_write topic_publisher 
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/L82y7e9uk9Q?si=Fa8YorBPgbRszYGn" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## FAQ

- Se você encontrar cintilação na interface do RViz2, tente os seguintes comandos:

    ```bash
    export QT_AUTO_SCREEN_SCALE_FACTOR=0
    ```
