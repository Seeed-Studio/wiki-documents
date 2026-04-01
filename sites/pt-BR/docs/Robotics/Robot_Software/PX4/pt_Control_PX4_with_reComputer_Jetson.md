---
description: Controlar PX4 com reComputer Jetson
title: Controlar PX4 com reComputer Jetson
keywords:
  - NVIDIA
  - PX4
  - ROS
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.webp
slug: /control_px4_with_recomputer_jetson
last_update:
  date: 7/21/2025
  author: TienjuiWong
createdAt: '2025-07-21'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/pt-br/control_px4_with_recomputer_jetson/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

Ao combinar um computador acompanhante de alto desempenho como o **reComputer Mini J3010 (Jetson Orin Nano 4G)** com um **controlador de voo PX4**, você cria a arquitetura central para uma ampla gama de sistemas inteligentes não tripulados, incluindo carros, barcos e drones autônomos. Essa combinação poderosa desbloqueia aplicações inovadoras em áreas como logística, pesquisa científica, busca e salvamento e agricultura de precisão.

Essa configuração permite tarefas embarcadas complexas, como navegação visual, rastreamento de objetos e desvio de obstáculos em tempo real. O link de comunicação entre esses dois “cérebros” é crítico para o desempenho geral e a confiabilidade do sistema.

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
</a></div>

:::tip[O que você vai aprender]

- Como conectar fisicamente o seu Jetson a um Pixhawk.
- Os prós e contras de uXRCE-DDS, MAVSDK e MAVROS.
- Instruções passo a passo de configuração para todos os três métodos de comunicação.
- Como verificar a conexão e solucionar problemas comuns.

:::

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte:

- **Hardware:** Todos os dispositivos listados na tabela “Ambiente de Laboratório” abaixo.
- **Software:** Uma instalação nova do Jetson Pack 6.2 e do ROS 2 Humble.
- **Ferramentas:** `git` e `pip` instalados no seu Jetson.
- **Conhecimento:** Familiaridade básica com a linha de comando do Linux, conceitos de ROS 2 (nós, tópicos) e parâmetros PX4 no QGroundControl.

## Configuração do Sistema

### Ambiente de Laboratório

| Componente              | Dispositivo/Software              | Versão/Modelo               |
| :--------------------- | :--------------------------- | :-------------------------- |
| **Computador Acompanhante** | **Dispositivo** | reComputer Mini J3010 (Jetson Orin Nano 4G)  |
|                        | **SO** | Ubuntu 22.04 (JetPack 6.2)  |
|                        | **ROS** | ROS 2 Humble                |
| **Controlador de Voo** | **MCU** | Pixhawk 4 Mini              |
|                        | **Firmware** | PX4 v1.15                   |
| **PC da Estação de Solo** | **SO** | Ubuntu 22.04                |
|                        | **QGC** | QGroundControl v5.0 ou superior |

### Conexão de Hardware

Recomendamos fortemente usar a UART nativa do Jetson para uma conexão robusta que não ocupe uma porta USB.

- **Fiação**: Use um cabo JST-GH de 4 pinos para conectar a porta **`TELEM1` do Pixhawk 4 Mini** ao conector **`UART1` do Jetson Orin Nano**.
- **Arquivo de Dispositivo**: Essa porta serial corresponde a `/dev/ttyTHS1` no sistema operacional do Jetson.

<details>
<summary><strong>Detalhes de Porta e Pinout do Pixhawk 4 Mini (Clique para expandir)</strong></summary>

<br/>

| UART   | Dispositivo      | Descrição de Parâmetro no QGC | Rótulo da Porta no FC           |
| :----- | :---------- | :------------------------ | :------------------------- |
| UART1  | /dev/ttyS0  | GPS1                      | Módulo GPS                 |
| USART2 | /dev/ttyS1  | TELEM1                    | TELEM1                     |
| USART3 | /dev/ttyS2  | TELEM2                    | N/D                        |
| UART4  | /dev/ttyS3  | TELEM/SERIAL4             | UART/I2C B                 |
| USART6 | /dev/ttyS4  | N/D                       | RC IN                      |
| UART7  | /dev/ttyS5  | N/D                       | Depuração                  |
| UART8  | /dev/ttyS6  | N/D                       | Não conectada (sem PX4IO)  |

### Portas TELEM1, TELEM2

| Pino       | Sinal  | Volt  |
| :-------- | :------ | :---- |
| 1(vermelho)    | VCC     | +5V   |
| 2(preto)  | TX(out) | +3.3V |
| 3(preto)  | RX(in)  | +3.3V |
| 4(preto)  | CTS(in) | +3.3V |
| 5(preto)  | RTS(out)| +3.3V |
| 6(preto)  | GND     | GND   |

### Porta DSM RC

| Pino        | Sinal             | Volt  |
| :--------- | :----------------- | :---- |
| 1(nulo)    | VDD_5V_SBUS_RC     | +5V   |
| 2(amarelo)  | SBUS* | +3.3V |
| 3(nulo)    | RSSI** | +3.3V |
| 4(vermelho)     | VDD_3V3_SPEKTRUM   | +3.3V |
| 5(preto)   | GND                | GND   |

### Porta UART & I2C B *

| Pino       | Sinal  | Volt  |
| :-------- | :------ | :---- |
| 1(vermelho)    | VCC     | +5V   |
| 2(preto)  | TX(out) | +3.3V |
| 3(preto)  | RX(in)  | +3.3V |
| 4(preto)  | SCL2    | +3.3V |
| 5(preto)  | SDA2    | +3.3V |
| 6(preto)  | GND     | GND   |

### Porta SBUS RC

| Pino        | Sinal             | Volt  |
| :--------- | :----------------- | :---- |
| 1(vermelho)     | VDD_5V_SBUS_RC     | +5V   |
| 2(amarelo)  | SBUS* | +3.3V |
| 3(nulo)    | RSSI** | +3.3V |
| 4(nulo)    | VDD_3V3_SPEKTRUM   | +3.3V |
| 5(preto)   | GND                | GND   |

---
**Notas de rodapé:**

- **(Porta UART & I2C B):** Uma porta sobressalente para conectar sensores que suportam comunicação serial ou I2C; por exemplo, um segundo módulo GPS pode ser conectado aqui.
- **(Sinal SBUS):** Conecte aqui o fio de sinal do receptor SBUS ou DSM/Spektrum.
- **(Sinal RSSI):** Envia a informação de intensidade do sinal de RC para o piloto automático.

</details>

:::caution[CRÍTICO: Definir Permissões da Porta Serial]

Para evitar usar `sudo` em todos os comandos seriais, você deve adicionar seu usuário ao grupo `dialout`. Esta é uma configuração crítica feita apenas uma vez.

```bash
sudo usermod -a -G dialout $USER
```

**Você deve reiniciar o Jetson para que essa alteração tenha efeito!**

:::

## Escolhendo seu Método: Uma Comparação

Antes de começar, entenda os trade-offs. A escolha certa depende inteiramente dos objetivos do seu projeto.

| Recurso             | uXRCE-DDS (Nativo ROS 2) 🚀                                     | MAVSDK (API de Alto Nível) 🐍                                         | MAVROS (Ponte ROS) 🌉                                                        |
| :------------------ | :--------------------------------------------------------------- | :----------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **Arquitetura** | PX4 e ROS 2 compartilham um espaço de dados DDS para **comunicação nativa**. | Uma biblioteca C++ independente (com wrappers) que fornece uma API de alto nível. | Uma **ponte/gateway** que traduz o protocolo MAVLink para tópicos/serviços ROS. |
| **Desempenho** | **Mais alto**. Transferência de dados zero-copy com a menor latência.      | **Alto**. As chamadas de API geram diretamente mensagens MAVLink eficientes.    | **Bom**. Existe uma pequena sobrecarga devido à camada de tradução MAVLink-para-ROS. |
| **Facilidade de Uso** | Moderada. Exige compilar o Agent e `px4_msgs`.          | **Mais fácil**. API intuitiva, baseada em funções, ideal para prototipagem rápida. | Curva de aprendizado íngreme, mas oferece a integração mais profunda com o ecossistema ROS. |
| **Flexibilidade** | **Excelente**. Fornece acesso direto a todos os tópicos internos uORB do PX4. | **Limitada**. Expõe ações comuns (decolagem, waypoints), mas não dados brutos. | **Excelente**. Acesso a praticamente todas as mensagens, parâmetros e serviços MAVLink. |
| **Integração com ROS** | **ROS 2 Nativo**. O método oficial e preparado para o futuro para ROS 2.       | **Agnóstico ao ROS**. Pode ser usado em qualquer projeto, facilmente encapsulado em um nó ROS. | **Cêntrico em ROS**. O padrão de fato para ROS 1 e amplamente usado em ROS 2.    |
| **Caso de Uso** | Projetos ROS 2 com requisitos críticos de desempenho que precisam de acesso a dados de baixo nível. | Scripts em nível de tarefa, prototipagem rápida, projetos sem ROS e educação. | Sistemas robóticos complexos integrados com pacotes ROS como Nav2 ou MoveIt.    |

## Método 1: uXRCE-DDS (Integração Nativa com ROS 2)

Esta é a solução oficial do PX4 para ROS 2, conectando diretamente seu sistema interno de mensagens `uORB` à rede ROS 2 para comunicação sem sobrecarga.

### Passo 1: Compilar o Micro XRCE-DDS Agent

O Agent é um pequeno programa no Jetson que atua como um intermediário entre a conexão serial do controlador de voo e a rede ROS 2.

```bash title="Terminal on Jetson"
# 1. Clone the specific version of the Agent repository
cd ~
git clone -b v2.4.2 https://github.com/eProsima/Micro-XRCE-DDS-Agent.git
cd Micro-XRCE-DDS-Agent

# 2. IMPORTANT: Patch the Fast-DDS dependency version
# The v2.12.x tag for fastdds was removed by the vendor; we update it to a working one.
sed -i 's/v2.12.x/v2.13.x/g' SuperBuild.cmake

# 3. Build and install the Agent
mkdir build && cd build
cmake ..
make
sudo make install # Installs MicroXRCEAgent globally
```

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/01.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/02.png" alt="PX4_dev_02" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/03.png" alt="PX4_dev_03" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/04.png" alt="PX4_dev_04" />
</div>

### Passo 2: Compilar o pacote ROS 2 `px4_msgs`

Para permitir que o ROS 2 entenda os tópicos do PX4, você deve compilar suas definições de mensagens.

```bash title="Terminal on Jetson"
# 1. Create a ROS 2 workspace
mkdir -p ~/px4_ros_ws/src
cd ~/px4_ros_ws/src

# 2. Clone the required repositories
git clone https://github.com/PX4/px4_msgs.git
git clone https://github.com/PX4/px4_ros_com.git # Contains examples

# 3. Checkout the branch matching your firmware version
cd px4_msgs
git checkout release/1.15

# 4. Build the workspace
cd ~/px4_ros_ws
source /opt/ros/humble/setup.bash
colcon build
```

:::caution[Compatibilidade de Hardware para uXRCE-DDS]

A versão de `px4_msgs` **deve** estar alinhada com a versão do firmware PX4. Isso é crítico para a compatibilidade.

Além disso, o suporte ROS 2 nativo completo via uXRCE-DDS, que se tornou o padrão no firmware PX4 v1.14 e posterior, exige controladores de voo com **2MB de memória flash** (como o Pixhawk 4 Mini usado neste guia).

Hardware mais antigo e clássico, como o popular **Pixhawk 2.4.8** (e outras placas baseadas em FMUv2), possui apenas 1MB de flash. Eles não conseguem executar o firmware pré-compilado padrão exigido para este método com uXRCE-DDS. Embora seja teoricamente possível criar um firmware personalizado e reduzido, isso é um processo complexo.

**Se você estiver usando um Pixhawk 2.4.8 ou outra placa com 1MB de flash, recomendamos fortemente que pule este método e siga diretamente para o [Método 2 (MAVSDK)](#4-método-2-mavsdk-api-de-alto-nível) ou [Método 3 (MAVROS)](#5-método-3-mavros-a-poderosa-ponte-ros), já que ambos utilizam o protocolo MAVLink, que é totalmente suportado pelo seu hardware.**

:::

:::info
O branch `px4_msgs` **deve** corresponder à sua versão de firmware PX4 para garantir que as definições de mensagem sejam compatíveis.
:::

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/05.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/06.png" alt="PX4_dev_02" />
</div>

### Etapa 3: Configurar o Firmware PX4

Conecte-se ao QGroundControl e defina os seguintes parâmetros:

1. **`UXRCE_DDS_CFG`**: Defina como `TELEM1`. Isso ativa o cliente XRCE-DDS nessa porta.
2. **`SER_TEL1_BAUD`**: Defina como `921600 8N1`.
3. **`MAV_1_CONFIG`**: Defina como `Disabled`. Isso é crucial para evitar que o MAVLink entre em conflito na mesma porta.
4. Salve os parâmetros e reinicie o controlador de voo.

### Etapa 4: Iniciar e Verificar

1. **Inicie o Agent no Jetson** (em um terminal):

    ```bash title="Terminal 1: Run Agent"
    MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600
    ```

2. **Verifique os tópicos ROS 2** (em um novo terminal):

    ```bash title="Terminal 2: Verify Topics"
    # Source your workspace in every new terminal
    source ~/px4_ros_ws/install/setup.bash

    # You should see a list of topics starting with /fmu/
    ros2 topic list | grep /fmu/

    # Echo a topic to see live data streaming from the FCU
    ros2 topic echo /fmu/out/vehicle_odometry
    ```

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/11.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/12.png" alt="PX4_dev_02" />
</div>

---

## Método 2: MAVSDK (API de Alto Nível)

O MAVSDK fornece uma API simples e moderna para controlar drones programaticamente, abstraindo as complexidades do protocolo MAVLink. É perfeito para escrever scripts de missão em alto nível.

### Etapa 1: Configurar o Firmware PX4

No QGroundControl, altere a configuração da porta de DDS de volta para o modo MAVLink.

1. **`UXRCE_DDS_CFG`**: Defina novamente como `Disabled`.
2. **`MAV_1_CONFIG`**: Defina como `TELEM 1` para atribuir a porta ao MAVLink.
3. **`MAV_1_MODE`**: Defina como `Onboard` para especificar que o link é para um computador acompanhante.
4. **`SER_TEL1_BAUD`**: Certifique-se de que ainda está como `921600 8N1`.
5. Salve os parâmetros e reinicie o controlador de voo.

### Etapa 2: Instalar o MAVSDK-Python

```bash title="Terminal on Jetson"
pip3 install mavsdk
```

### Etapa 3: Escrever e Executar um Script de Controle

Este script em Python conecta, decola até 10 metros, espera e então pousa.

```python title="takeoff_and_land.py"
import asyncio
from mavsdk import System

async def run():
    # Create a drone object and connect to the flight controller
    drone = System()
    await drone.connect(system_address="serial:///dev/ttyTHS1:921600")

    print("Waiting for drone to connect...")
    # This is an asynchronous generator that yields connection state updates
    async for state in drone.core.connection_state():
        if state.is_connected:
            print("--> Drone discovered!")
            break

if __name__ == "__main__":
    # Run the asyncio event loop
    asyncio.run(run())
```

Execute o script a partir do seu terminal: `python3 takeoff_and_land.py`.

---

## Método 3: MAVROS (A Poderosa Ponte ROS)

O MAVROS é o gateway MAVLink-para-ROS amplamente testado em campo, oferecendo funcionalidade abrangente e estabilidade inigualável para sistemas complexos baseados em ROS.

### Etapa 1: Configurar o Firmware PX4

A configuração do PX4 para o MAVROS é **idêntica à configuração do MAVSDK**. Certifique-se de que `TELEM1` esteja configurado para MAVLink no modo `Onboard`.

### Etapa 2: Instalar o MAVROS e Dependências

```bash title="Terminal on Jetson"
sudo apt update
sudo apt install ros-humble-mavros ros-humble-mavros-msgs
```

:::info[Evite um Travamento Comum!]
O MAVROS requer um conjunto de dados geográficos para transformações de coordenadas. A ausência desse conjunto de dados é uma causa comum de travamentos na inicialização. Este script faz o download e a instalação.

```bash title="Terminal on Jetson"
sudo bash /opt/ros/humble/lib/mavros/install_geographiclib_datasets.sh 
```

:::

### Etapa 3: Iniciar e Verificar

1. **Inicie o nó MAVROS**:

    ```bash title="Terminal 1: Launch MAVROS"
    source /opt/ros/humble/setup.bash

    # Launch mavros, specifying the FCU connection URL via a parameter
    ros2 launch mavros px4.launch fcu_url:="serial:///dev/ttyTHS1:921600"
    ```

2. **Verifique a Conexão**:

    Em um novo terminal, faça echo do tópico de estado do MAVROS.

    ```bash title="Terminal 2: Verify Connection"
    ros2 topic echo /mavros/state
    ```

    Observe a saída. Quando o campo `connected` mudar para `true`, o MAVROS estará se comunicando com sucesso com o seu PX4.

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/13.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/14.png" alt="PX4_dev_02" />
</div>

---

## Solução de Problemas Comuns

Se você tiver problemas, verifique primeiro estas questões comuns.

- **"Permission Denied" na porta serial:** Você esqueceu de adicionar seu usuário ao grupo `dialout` e reiniciar. Consulte a seção "Conexão de Hardware".
- **"No such file or directory" para `/dev/ttyTHS1`:** Verifique novamente a fiação física. O controlador de voo está ligado? Execute `ls /dev/ttyTHS*` para confirmar o nome do dispositivo.
- **MAVROS trava na inicialização:** Você provavelmente pulou a etapa `install_geographiclib_dataset.sh`. Execute o comando do Método 3.
- **`colcon build` falha:** Certifique-se de que você tenha carregado o ambiente ROS 2 primeiro (`source /opt/ros/humble/setup.bash`). Para problemas de dependência mais complexos, talvez seja necessário executar `rosdep install --from-paths src --ignore-src -r -y`.

## Palavras Finais

Agora você tem três métodos poderosos para habilitar a comunicação entre um Jetson Orin e um controlador de voo PX4. A melhor ferramenta depende da arquitetura do seu projeto, das necessidades de desempenho e da velocidade de desenvolvimento. Ao entender os trade-offs, você pode construir uma base robusta para qualquer aplicação de drone autônomo.

Bons voos! 🚁



## Recursos

<JetsonLeadQuote
  buttonText="Solicitar orçamento personalizado"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
