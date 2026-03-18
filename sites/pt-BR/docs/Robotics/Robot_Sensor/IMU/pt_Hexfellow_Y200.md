---
description: Este wiki fornece um tutorial para o Sensor IMU HEXFELLOW Y200.
title: Sensor IMU HEXFELLOW Y200
keywords:
  - IMU
  - robótica
image: https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig1.webp
slug: /hexfellow_y200
sku: 101090143
last_update:
  date: 06/18/2025
  author: ZhuYaoHui
createdAt: '2025-06-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/hexfellow_y200/
---

# Introdução ao Sensor IMU HEXFELLOW Y200

O Y200 é um giroscópio de 9 eixos desenvolvido especificamente para robôs. O dispositivo suporta uma alimentação máxima de 60 V e utiliza uma interface CAN padrão XT30 para integração rápida em uma rede de robôs. Ele possui um processo interno de encapsulamento para excelente resistência a choques, e seu invólucro é projetado com uma estrutura reforçada para uma instalação estável e confiável.

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig1.jpg" />
</div>

## Especificações

Aqui está a tabela completa com todos os parâmetros preenchidos para todos os modelos de motor:

### Parâmetros de Saída de Ângulo

| Ângulo  |   | Valor                     | Observação     |
|----------------|-------|--------------------------|----------|
| **Rolagem (Roll)**            | Precisão:  | 0,15°          | 1σ RMS   |
|                     | Faixa:  | ±180°             |          |
| **Inclinação (Pitch)**           | Precisão:  | 0,15°          | 1σ RMS   |
|                     | Faixa:  | ±90°              |          |
| **Guinada (Yaw) (Sem referência)** | Precisão:  | 0,2°        | 1σ RMS   |
|                     | Faixa:  | ±180°             |          |
| **Resolução**      |   | 0,001°                   |          |

### Parâmetros do Giroscópio

| Parâmetro           | Valor             | Observação                     |
|---------------------|-------------------|--------------------------|
| **Faixa**           | ±2000°/s         |                          |
| **Não linearidade**   | ±0,05%FS         |                          |
| **Densidade de ruído**   | 0,015°/s/√Hz     |                          |
| **Estabilidade de offset**| 5°/h             | Variância de Allan, 1σ       |
| **Largura de banda (-3dB)**| 50Hz             |                          |
| **Offset de zero**     | ±0,5°/s          | 1σ RMS                   |
| **Deriva de temperatura**| ±1°/s           | 1σ RMS, -40~85°C         |

### Parâmetros do Acelerômetro

| Parâmetro            | Valor           | Observação                      |
|----------------------|-----------------|---------------------------|
| **Faixa**            | ±12g           |                           |
| **Não linearidade**    | ±0,5%FS        |                           |
| **Densidade de ruído**    | 190μg/√Hz      |                           |
| **Estabilidade de offset** | 0,05mg         | Variância de Allan, 1σ        |
| **Largura de banda (-3dB)** | 50Hz           |                           |
| **Offset de zero**      | ±20mg          | 1σ RMS                    |
| **Deriva de temperatura**| ±20mg          | 1σ RMS, -40~85°C          |

### Outros Parâmetros

| Parâmetro              | Valor             | Observação                                  |
|------------------------|-------------------|---------------------------------------|
| **Tolerância de tensão**  | 12-60V            | Para conector XT30 2+2. Não é USB-C, mas a alimentação USB-C é compatível |
| **Comunicação**      | CAN               |                                       |
| **Frequência máxima de saída** | 200Hz           |                                       |
| **Dimensões**         | 60×60×15 mm       |                                       |
| **Temperatura de operação** | -20~85°C       |                                       |

### **Plataformas compatíveis**

- [x] **reComputer Mini**
- [x] **reComputer Robotics**

### **Versões de ROS compatíveis**

- [x] **ROS Noetic**
- [x] **ROS Humble**

### Diagrama das dimensões de instalação

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig3.png"/>
</div>

## Primeiros passos com a IMU no reComputer Jetson

Fornecemos um driver Linux usando SocketCAN. Esta é a forma recomendada de trabalhar com a IMU.
Antes de começar, você precisa conectar o dispositivo ao seu PC! Aqui está a definição dos fios do barramento CAN e da taxa de transmissão (baudrate) da IMU

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

Tanto o nosso ​reComputer Mini​ quanto o ​reComputer Robotics J40​ (mostrado acima) possuem uma interface de comunicação CAN ​XT30 2+2​, que suporta ​alimentação e comunicação simultâneas para IMUs.

:::tip

As atribuições de pino ​CAN_H​ e ​CAN_L​ em nossos dispositivos são ​invertidas​ em comparação com a maioria dos motores e sensores disponíveis comercialmente. Portanto, ao fazer a fiação, você deve ​trocar as conexões H e L​ para garantir a comunicação adequada. Para tutoriais de uso de CAN em mais dispositivos, consulte o [link](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_mini_hardware_interfaces_usage/#CAN).

:::

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig4.jpg"/>  
</div>

### Conectando cabos XT30 2+2

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig2.jpg"/>  
</div>

:::tip

As atribuições de pino ​CAN_H​ e ​CAN_L​ em nossos dispositivos são ​invertidas​ em comparação com a maioria dos motores e sensores disponíveis comercialmente. Portanto, ao fazer a fiação, você deve ​trocar as conexões H e L​ para garantir a comunicação adequada. Para tutoriais de uso de CAN em mais dispositivos, consulte o [link](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_mini_hardware_interfaces_usage/#CAN).
:::

### Instalar ROS no Jetson

Consulte o tutorial sobre [Install ROS2 Humble](/pt-br/install_ros2_humble) ou [Install ROS1](/pt-br/installing_ros1) no reComputer Jetson

### Habilitar a função CAN

**Para reComputer Robotics J401:**

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
gpioset --mode=time --sec=60 2 3=0 & # For CAN1: gpioset --mode=time --sec=60 2 4=0 &
```

**Para reComputer Mini:**

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
gpioset --mode=time --sec=30 0 43=0 # For CAN1: gpioset --mode=time --sec=30 0 106=0 &
```

### Instalar as dependências

Clone o repositório:

```bash
cd ~/
pip3 install numpy==1.24
git clone https://github.com/hexfellow/hex_utils.git
```

Compile o pacote:

```bash
cd hex_utils
sudo apt-get install python3-venv
python3 -m build
```

Instale o pacote:

```bash
pip3 install dist/hex_utils-0.0.1-py3-none-any.whl
```

### Crie um workspace `catkin_ws` e entre em `src`

```shell
mkdir -p catkin_ws/src
cd catkin_ws/src
```

### Clone este repositório

```shell
git clone git@github.com:hexfellow/hex_imu.git
```

### Vá para o diretório `catkin_ws` e compile o repositório

- **ROS1**

```shell
cd ../
catkin_make
```

- **ROS2**

```shell
cd ../
colcon build
```

### Faça o source do `setup.bash` e execute o teste abaixo

- **ROS 1**

```shell
source devel/setup.bash --extend
```

- **ROS 2**

```shell
source install/setup.bash --extend
```

### **Uso**

1. Inicie o nó principal:

- **ROS 1**

```shell
roslaunch hex_imu canopen_imu.launch
```

- **ROS 2**

```shell
ros2 launch hex_imu canopen_imu.launch.py
```

2. Também oferecemos um arquivo de lançamento dedicado para visualizar os dados da IMU. Siga as etapas abaixo para começar:

 Antes de começar, certifique-se de que você tem o plugin necessário instalado para o RViz:

- **ROS 1**

```
sudo apt install ros-noetic-rviz-imu-plugin
```

- **ROS 2**

```
sudo apt install ros-humble-rviz-imu-plugin
```

	Depois que o plugin estiver instalado, você pode iniciar a ferramenta de visualização com o seguinte comando:

- **ROS 1**

```shell
roslaunch hex_imu canopen_imu_display.launch
```

- **ROS 2**

```shell
ros2 launch hex_imu canopen_imu_display.launch.py
```

3. Se você quiser gerar o Azimute, pode executar o código de exemplo a seguir (suporta apenas ROS1)

```shell
roslaunch hex_imu canopen_imu.launch

rosrun hex_imu example.py
```

## **APIs Públicas**

### **Publicar**

| Tópico              | Tipo de mensagem                  | Descrição                                |
| ------------------ | ------------------------- | ------------------------------------------ |
| `/imu_data`        | `sensor_msgs/Imu`         | Dados de IMU incluindo orientação, velocidade angular e aceleração linear |
| `/magnetic_data`   | `sensor_msgs/MagneticField` | Dados de campo magnético |

### **Assinar**

| Tópico    | Tipo de mensagem                      | Descrição                           |
| -------- | ----------------------------- | ------------------------------------- |
| Nenhum     | Nenhum                          | Nenhuma assinatura necessária              |

### **Parâmetros**

| Nome                    | Tipo de dado             | Descrição                                                                                |
| ----------------------- | --------------------- | ------------------------------------------------------------------------------------------ |
| `node_id`              | `int`                 | ID de nó CANopen do dispositivo IMU                                                          |
| `channel`              | `string`              | Nome do canal CAN (por exemplo, 'can0')                                                            |
| `imu_topic`            | `string`              | Nome do tópico para publicar dados da IMU                                                         |
| `magnetic_topic`       | `string`              | Nome do tópico para publicar dados de campo magnético                                              |

---

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
