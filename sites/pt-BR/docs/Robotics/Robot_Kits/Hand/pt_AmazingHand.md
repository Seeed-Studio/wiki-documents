---
description: Construa e controle a AmazingHand, uma mão robótica de baixo custo, código aberto, 8-DOF e imprimível em 3D.
title: AmazingHand
keywords:
  - Lerobot
  - Huggingface
  - Hand
  - Robotics
  - 3D Printing
  - Open Source
  - Humanoid Robot
  - Arduino
  - Python
slug: /hand_amazinghand
sku: 100062181,100063642
last_update:
  date: 9/10/2025
  author: TienjuiWong
createdAt: '2025-09-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/hand_amazinghand/
---

<div align="center">
  <img width="600" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100063642_amazing_hand_right-1_1.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Amazing-Hand-Right-Hand-The-Open-Source-Robotic-Hand-Developer-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a>
</div>

A **AmazingHand** é um projeto de mão robótica de código aberto projetado para tornar a pesquisa e a experimentação com manipulação humanoide acessíveis e econômicas. Mãos robóticas tradicionais costumam ser proibitivamente caras e dependem de atuadores complexos e volumosos no antebraço. A AmazingHand resolve isso integrando todos os seus motores diretamente em um design compacto e imprimível em 3D.

Seu design é inspirado no projeto de pesquisa "ILDA hand", mas simplificado para reduzir a barreira de entrada para estudantes, amadores e pesquisadores. A interface do pulso é projetada para o robô Reachy2, mas pode ser facilmente adaptada para qualquer plataforma.

<div align="center">
  <img width ="600" src="https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/assets/Patterns_Overview.jpg"/>  
</div>

:::tip[O que você vai aprender]

- Os principais recursos e a arquitetura da AmazingHand.
- Onde encontrar todos os recursos para construir sua própria mão (BOM, CAD, Guias).
- Como configurar o controle usando Python ou Arduino.
- Como executar demonstrações básicas e onde encontrar exemplos mais avançados.

:::

## Principais Recursos e Especificações

A AmazingHand reúne capacidades impressionantes em um conjunto leve e acessível.

| Recurso               | Especificação                                                              |
| :-------------------- | :------------------------------------------------------------------------- |
| **Graus de Liberdade**| **8-DOF** (4 dedos, 2-DOF por dedo)                                       |
| **Atuação** | Mecanismo paralelo com 2x servos Feetech SCS0009 por dedo                  |
| **Movimento** | Flexão/Extensão e Abdução/Adução via movimento diferencial dos motores    |
| **Construção** | Totalmente imprimível em 3D com "ossos" rígidos e capas flexíveis de TPU |
| **Peso** | \~400g                                                                      |
| **Interface de Controle** | Barramento serial         |
| **Licença** | Código: **Apache 2.0**, Projeto Mecânico: **CC BY 4.0** |

Cada dedo é acionado por dois motores em paralelo. Esse design inteligente permite tanto o movimento de enrolar (flexão/extensão) quanto o movimento lateral (abdução/adução), controlando o movimento diferencial dos servos. A palma também é uma peça flexível, permitindo uma apreensão de objetos mais segura e complacente.

<div align="center">
  <img width ="600" src="https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/assets/Hand_Overview.jpg"/>  
</div>

<div align="center">
  <img width ="600" src="https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/assets/Both_Hands-IDs.jpg"/>  
</div>

## Recursos para Construção 🛠️

Tudo o que você precisa para construir sua própria AmazingHand está disponível no repositório GitHub do projeto.

- **Lista de Materiais (BOM):** Uma lista completa de todos os componentes eletrônicos e de hardware necessários pode ser encontrada aqui:

  - [**AmazingHand BOM**](https://docs.google.com/spreadsheets/d/1QH2ePseqXjAhkWdS9oBYAcHPrxaxkSRCgM_kOK0m52E/edit?gid=1269903342#gid=1269903342)

- **Arquivos CAD e Impressão 3D:** Todos os arquivos STL e STEP são fornecidos. Observe que, embora o design dos dedos seja universal, alguns componentes da palma são específicos para mãos direitas ou esquerdas.

  - **Arquivos CAD:** [**Link para a Pasta CAD**](https://github.com/pollen-robotics/AmazingHand/tree/main/cad)
  - **Guia de Impressão 3D:** [**Instruções para Impressão das Peças**](https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/docs/AmazingHand_3DprintingTips.pdf)

- **Guia de Montagem:** Um guia detalhado, passo a passo, para montar a mão.

  - [**PDF do Guia de Montagem**](https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/docs/AmazingHand_Assembly.pdf)

## Métodos de Controle

Você tem duas opções principais para controlar os servos da mão via barramento serial.

1. **MPU:** Use um script Python em um computador hospedeiro (como um Raspberry Pi ou PC) conectado por meio de um driver de barramento serial (por exemplo, [Bus Servo Driver Board](https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html) ). Esta é uma ótima opção para integração com frameworks de robótica maiores, como ROS.

2. **MCU:** Use um microcontrolador como Arduino com uma [Bus Servo Driver Board](https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html). Isto é ideal para projetos autônomos ou quando se prefere um microcontrolador dedicado para lidar com o controle em tempo real.

Scripts de calibração são fornecidos para ambos os métodos para ajudá-lo a configurar corretamente os dedos durante a montagem.

## Executando as Demonstrações

Depois de montada, você pode testar sua AmazingHand com os programas de demonstração fornecidos.

:::caution[Alimentação Externa Necessária]
Os oito servos da mão exigem uma fonte de alimentação estável. Um adaptador DC simples de 5V / 2A com conector jack é suficiente. **Não tente alimentar os servos diretamente pela porta USB do seu computador.**
:::

### Demonstrações Básicas

Depois de montada, você pode testar sua AmazingHand com os programas de demonstração fornecidos. Primeiro, clone o repositório do projeto para o seu computador para obter todo o código necessário:

```bash
git clone https://github.com/pollen-robotics/AmazingHand
cd AmazingHand
```

:::caution[Alimentação Externa Necessária]
Os oito servos da mão exigem uma fonte de alimentação estável. Um adaptador DC simples de 5V / 2A com conector jack é suficiente. **Não tente alimentar os servos diretamente pela porta USB do seu computador.**
:::

#### Exemplos em Python

O diretório `PythonExample` contém vários scripts úteis para teste e controle. Acesse esse diretório (`cd PythonExample`) para executá-los.

- **`AmazingHand_Demo.py`**: Este é o principal demo. Ele faz a mão passar por vários gestos pré-programados. É o primeiro teste perfeito para garantir que tudo esteja funcionando corretamente.
- **`AmazingHand_Demo_Both.py`**: Um demo específico para controlar uma mão direita e uma esquerda conectadas ao mesmo barramento serial.
- **`AmazingHand_FingerTest.py`**: Um script para testar o movimento de um único dedo, muito útil para depuração durante a montagem.
- **`AmazingHand_Hand_FingerMiddlePos.py`**: Um script utilitário usado para calibração para definir os dedos em sua posição neutra, intermediária.

Para executar o demo principal, rode o seguinte comando dentro da pasta `PythonExample`:

```bash
python3 AmazingHand_Demo.py
```

#### Exemplos em Arduino

Para controle autônomo, o diretório `ArduinoExample` contém sketches que você pode enviar diretamente para o seu microcontrolador.

- **`Amazing_Hand_Demo.ino`**: O sketch principal de demonstração que faz a mão repetir os mesmos gestos da versão em Python.
- **`Amazing_Hand-Finger_Test.ino`**: Um sketch simples para testar um único dedo, útil para calibração e depuração de conexões de hardware.

Para usá-los, abra o arquivo `.ino` na IDE do Arduino, certifique-se de ter a biblioteca `SCServo` instalada e, em seguida, compile e envie para a sua placa Arduino.

### Demonstração de Controle Remoto com Strain Gauge

:::info 🖐️ Controle Intuitivo Baseado em Força
Esta demonstração avançada permite um controle intuitivo, baseado em força, da pegada e dos gestos da mão.
:::

**Princípio de Operação**

O núcleo desta demonstração é criar uma luva de dados que traduza os movimentos dos seus dedos em comandos para a **AmazingHand**. Fazemos isso aproveitando a propriedade elétrica dos **strain gauges**, que mudam sua resistência quando são dobrados.

<div style={{
  maxWidth: '504px',
  margin: 'auto',
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden'
}}>
  <iframe
    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7359424679310233601?compact=1"
    height="399"
    width="504"
    frameborder="0"
    allowfullscreen=""
    title="Embedded post"
    style={{
      display: 'block',
      width: '100%',
      height: '399px'
    }}>
  </iframe>
</div>

O fluxo de trabalho é o seguinte:

1. **Sensoriamento da Dobragem dos Dedos**: Fixamos strain gauges em uma luva ou nos dedos. Quando você dobra os dedos, os strain gauges dobram junto, causando uma mudança mensurável em sua resistência elétrica.

2. **Aquisição de Dados**: Um microcontrolador **Seeed Studio XIAO ESP32-S3** é usado para ler essas mudanças de resistência. Cada circuito de strain gauge é conectado a um dos pinos do **Conversor Analógico-digital (ADC)** do ESP32, que converte o sinal analógico de resistência em um número digital (tipicamente de 0 a 4095).

3. **Comunicação Serial**: O ESP32 envia continuamente essas leituras digitais do ADC por uma porta serial USB para um computador hospedeiro.

4. **Processamento e Mapeamento**: Um script Python em execução no computador hospedeiro escuta a porta serial, recebendo os valores brutos do ADC. Em seguida, ele mapeia esses valores do intervalo do ADC (0-4095) para o intervalo de ângulos de servo desejado da AmazingHand.

5. **Controle da Mão**: Por fim, o script envia os ângulos alvo calculados para o controlador da AmazingHand, fazendo com que os dedos robóticos espelhem, em tempo real, os movimentos dos seus próprios dedos.

Isso cria um sistema de malha fechada completo em que os gestos da sua mão física comandam diretamente a mão robótica.

<details>
<summary><strong>Clique para expandir o código e as instruções de configuração</strong></summary>

Para executar esta demonstração, você precisa gravar o firmware de aquisição de dados no ESP32 e executar o script Python de controle no computador hospedeiro.

1. Firmware do XIAO ESP32-S3

Este firmware é responsável por ler os valores dos strain gauges conectados aos pinos ADC e enviá-los pela porta serial no formato "value1,value2".

```cpp title="XIAO_ESP32_S3_C3_Firmware.ino"
/**
 * @file    XIAO_ESP32_Universal_Firmware_EN.ino
 * @brief   Firmware for XIAO ESP32-S3 and C3 to read 4 ADC channels and output 2 processed values for a Python script.
 * @author  TienjuiWong
 * @version 1.2
 * @date    2025-09-10
 *
 * @details
 * - Platform Compatibility: Seeed Studio XIAO ESP32-S3 & XIAO ESP32-C3.
 * - Functionality:
 * 1. Reads analog signals from pins D0, D1, and D2.
 * 2. Averages these three readings to create a single control value for the main fingers.
 * 3. Reads the analog signal from pin D3 for independent thumb control.
 * 4. Transmits data over USB Serial in the format "fingers_avg,thumb_val\n".
 * 5. The communication baud rate is set to 115200 to match the host script.
 */

// --- Pin Definitions ---
// These pin definitions are valid ADC pins for both the XIAO ESP32-S3 and C3.
// Pins for the three main fingers (e.g., Index, Middle, Ring).
const int FINGER_SENSOR_1_PIN = D0;
const int FINGER_SENSOR_2_PIN = D1;
const int FINGER_SENSOR_3_PIN = D2;

// Dedicated pin for the thumb.
const int THUMB_SENSOR_PIN    = D3;


void setup() {
  // Initialize serial communication at 115200 baud to match the Python script.
  Serial.begin(115200);

  // Wait for the serial port to initialize. This is good practice.
  while (!Serial) {
    delay(10); 
  }

  // Set the ADC resolution to 12-bit for a 0-4095 reading range.
  // This setting is supported by both the ESP32-S3 and ESP32-C3.
  analogReadResolution(12);
}

void loop() {
  // 1. Read the values from the three main finger sensors.
  int fingerVal1 = analogRead(FINGER_SENSOR_1_PIN);
  int fingerVal2 = analogRead(FINGER_SENSOR_2_PIN);
  int fingerVal3 = analogRead(FINGER_SENSOR_3_PIN);

  // 2. Calculate the average of the main finger values.
  // This single value will control the group of fingers in the Python script.
  int avgFingersValue = (fingerVal1 + fingerVal2 + fingerVal3) / 3;

  // 3. Read the independent value for the thumb sensor.
  int thumbValue = analogRead(THUMB_SENSOR_PIN);

  // 4. Send the processed data in the required "value1,value2" format.
  Serial.print(avgFingersValue);
  Serial.print(",");
  Serial.println(thumbValue); // println automatically adds the required newline character.

  // 5. Add a short delay to maintain a stable data stream and allow time for processing on the receiver.
  delay(50); 
}
```

2. Servidor de Controle em Python

```python title="control.py"
import time
import numpy as np
import serial  # <--- Added import for serial library
from rustypot import Scs0009PyController

# --- 1. Define Finger Configuration and Servo Parameters ---
# The FINGERS list defines the mapping between fingers and their corresponding servos.
FINGERS = [
    {'name': 'Index',  'm1_id': 1, 'm2_id': 2},
    {'name': 'Middle', 'm1_id': 3, 'm2_id': 4},
    {'name': 'Ring',   'm1_id': 5, 'm2_id': 6},
    {'name': 'Thumb',  'm1_id': 7, 'm2_id': 8}, # Thumb is controlled by an independent ADC channel
]

# Defines the motion range: an offset of -30 degrees when open, and +90 degrees when closed.
# The servos will move in real-time within this [-30, 90] degree range based on the ADC value.
CLOSE_ANGLE_OFFSET = 90
OPEN_ANGLE_OFFSET = -30 # Using a negative value more intuitively represents the offset in the opening direction

# --- 2. Initialize Controllers ---
# !!! NOTE: Please ensure the serial ports for the hand controller and the ESP32 are correct !!!
SERVO_CONTROLLER_PORT = "/dev/ttyACM0"      # Serial port for the robotic hand controller
ESP32_ADC_PORT = "/dev/ttyACM1"            # Serial port for the ESP32 development board

try:
    # Initialize the robotic hand controller
    c = Scs0009PyController(
        serial_port=SERVO_CONTROLLER_PORT,
        baudrate=1000000,
        timeout=0.5,
    )
    # Initialize the serial port for receiving data from ESP32
    adc_port = serial.Serial(ESP32_ADC_PORT, 115200, timeout=1)
    # Flush the input buffer to prevent reading old data
    adc_port.flushInput()
except serial.SerialException as e:
    print(f"Serial Error: {e}")
    print("Please confirm your serial port settings are correct and the devices are connected.")
    exit()


def map_value(x, in_min, in_max, out_min, out_max):
    """
    Core function: Linearly maps a value from one range to another.
    Used to map the ADC's 0-4095 range to the servo angle offset range
    from OPEN_ANGLE_OFFSET to CLOSE_ANGLE_OFFSET.
    """
    # Avoid division by zero
    if in_max == in_min:
        return out_min
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min


def main():
    """Main function: Starts the motors and enters the real-time remote control loop."""
    # Get all servo IDs to be controlled from the configuration
    all_servo_ids = [id for finger in FINGERS for id in (finger['m1_id'], finger['m2_id'])]

    print(f"Servo IDs to be controlled: {all_servo_ids}")
    print(f"Connected to Hand Controller: {SERVO_CONTROLLER_PORT}")
    print(f"Connected to ADC Data Source (ESP32): {ESP32_ADC_PORT}")

    try:
        # -- Start and initialize all motors --
        enable_values = [1] * len(all_servo_ids)
        c.sync_write_torque_enable(all_servo_ids, enable_values)
        print("Torque enabled for all motors.")

        speeds = [6] * len(all_servo_ids) # 6 is generally a fast speed
        c.sync_write_goal_speed(all_servo_ids, speeds)
        print("All motor speeds have been set.")
        time.sleep(0.5)

        # -- Enter real-time remote control main loop --
        print("\nEntering real-time control mode... Press Ctrl+C to exit.")
        while True:
            # Read only when data is available in the serial buffer to avoid blocking
            if adc_port.in_waiting > 0:
                # 1. Read and parse the serial data from the ESP32
                line = adc_port.readline().decode('utf-8').strip()

                # Must ensure the data format is "value1,value2"
                if ',' not in line:
                    continue # If the format is incorrect, skip this iteration

                try:
                    val1_str, val2_str = line.split(',')
                    adc_val_fingers = int(val1_str) # The first value controls the main three fingers
                    adc_val_thumb = int(val2_str)   # The second value controls the thumb
                except ValueError:
                    print(f"Warning: Could not parse data '{line}', skipping.")
                    continue

                # 2. Map the ADC values to angle offsets
                # Map ADC range 0-4095 to angle range -30 (Open) to +90 (Close)
                fingers_offset = map_value(adc_val_fingers, 0, 4095, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)
                thumb_offset = map_value(adc_val_thumb, 0, 4095, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)

                # (Optional) Print the current status for debugging
                # print(f"ADC: {adc_val_fingers},{adc_val_thumb} -> Angle Offset: Fingers={fingers_offset:.1f}, Thumb={thumb_offset:.1f}")

                # 3. Prepare the synchronous write command
                all_ids = []
                positions_deg = []
                for finger in FINGERS:
                    all_ids.extend([finger['m1_id'], finger['m2_id']])

                    # Apply the corresponding angle offset based on the finger's name
                    if finger['name'] == 'Thumb':
                        current_offset = thumb_offset
                    else: # Index, Middle, Ring
                        current_offset = fingers_offset

                    # M1 and M2 move in opposite directions from the 0-degree center
                    positions_deg.append(0 + current_offset)
                    positions_deg.append(0 - current_offset)

                # 4. Convert units and send the command to the hand
                positions_rad = np.deg2rad(positions_deg).tolist()
                c.sync_write_goal_position(all_ids, positions_rad)

    except KeyboardInterrupt:
        print("\nUser interrupt detected (Ctrl+C)...")

    finally:
        # Before the program ends, safely disable the torque on all motors
        print("Disabling torque on all motors...")
        if 'all_servo_ids' in locals() and all_servo_ids:
            disable_values = [0] * len(all_servo_ids)
            c.sync_write_torque_enable(all_servo_ids, disable_values)
        print("Torque disabled. Program terminated.")


if __name__ == '__main__':
    main()
```

</details>

### Demo de Rastreamento de Mão com MediaPipe

Controle a mão robótica em tempo real espelhando os movimentos da sua própria mão, rastreada usando uma webcam simples e o framework MediaPipe do Google. Este demo avançado usa um backend em Python para executar o modelo de IA complexo de rastreamento de mãos, enquanto um frontend HTML simples captura o feed da sua câmera. Os dois se comunicam por meio de um WebSocket, permitindo um controle suave e com baixa latência da AmazingHand apenas mostrando sua mão para a câmera.

<div style={{
  position: 'relative',
  paddingBottom: '56.25%', // 16:9 aspect ratio
  height: 0,
  overflow: 'hidden',
}}>
  <div class="video-container">
  <iframe
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
    src="https://www.youtube.com/embed/GwxKmJLR0Mk?start=1645"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
  </div>
</div>

Para executar este demo, você precisará de dois arquivos: `index.html` para a interface do navegador e `backend.py` para o processamento no lado do servidor.

**Passo 1: Salve os Arquivos de Código**

Primeiro, crie os dois arquivos necessários no mesmo diretório. Copie o código HTML para um arquivo chamado `index.html` e copie o código Python para um arquivo chamado `backend.py`.

- **`index.html`**: Este arquivo cria a página web simples que solicita acesso à sua webcam e envia o vídeo para o backend.
- **`backend.py`**: Este script inicia um servidor WebSocket local. Ele recebe o fluxo de vídeo, usa a biblioteca MediaPipe para detectar os pontos de referência da mão em cada quadro e então traduz essas posições em comandos de motor para a AmazingHand.

**Passo 2: Execute o Servidor Backend**

Abra um terminal ou prompt de comando, navegue até o diretório onde você salvou os arquivos e execute o seguinte comando para iniciar o servidor Python:

```bash
python backend.py
```

Você deverá ver uma mensagem no terminal indicando que o servidor foi iniciado e está aguardando uma conexão, por exemplo: `WebSocket server started on ws://localhost:8765`.

**Passo 3: Inicie o Frontend**

Por fim, navegue até o mesmo diretório no seu explorador de arquivos e dê um duplo clique no arquivo `index.html`. Ele será aberto no seu navegador padrão. O navegador provavelmente pedirá permissão para usar sua webcam; por favor, permita.

Quando a página carregar, você verá o feed da sua câmera. O script Python começará a processar o vídeo, e você poderá controlar a AmazingHand movendo sua mão na frente da câmera.

<Details>

```python title="backend.py"
import asyncio
import websockets
import serial
import json
import time
import numpy as np
from rustypot import Scs0009PyController

# --- 1. Configuration ---

# Dexterous hand finger configuration (Pinky finger is not controlled)

FINGERS = [
    {'name': 'Index',  'm1_id': 1, 'm2_id': 2},
    {'name': 'Middle', 'm1_id': 3, 'm2_id': 4},
    {'name': 'Ring',   'm1_id': 5, 'm2_id': 6},
    {'name': 'Thumb',  'm1_id': 7, 'm2_id': 8},
]

# Servo motion range definition

CLOSE_ANGLE_OFFSET = 90
OPEN_ANGLE_OFFSET = -30

# Gesture recognition angle input range (set based on actual values observed from the front-end)

# Approximately 10-20 degrees when extended, 140-160 degrees when flexed

# We are setting a relatively tolerant range

GESTURE_ANGLE_MIN = 20  # Corresponds to OPEN_ANGLE_OFFSET
GESTURE_ANGLE_MAX = 160 # Corresponds to CLOSE_ANGLE_OFFSET

# !!! NOTE: Please ensure the serial port for the hand controller is correct

# On Windows, it might be "COM3", "COM4", etc

# On Linux/Mac, it might be "/dev/ttyACM0", etc

SERVO_CONTROLLER_PORT = "/dev/ttyACM0"

# --- 2. Initialize Controller ---

try:
    c = Scs0009PyController(
        serial_port=SERVO_CONTROLLER_PORT,
        baudrate=1000000,
        timeout=0.5,
    )
    print(f"Successfully connected to the hand controller: {SERVO_CONTROLLER_PORT}")
except serial.SerialException as e:
    print(f"Serial Error: {e}")
    print("Please confirm your serial port settings are correct and the device is connected.")
    exit()

def map_value(x, in_min, in_max, out_min, out_max):
    """
    Core function: Linearly maps a value from one range to another.
    It also clamps the input value to the source range to prevent exceeding the target range.
    """
    # Clamp the input value to the source range
    x = max(in_min, min(x, in_max))
    # Avoid division by zero
    if in_max == in_min:
        return out_min
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min

def setup_servos(controller, finger_config):
    """Starts and initializes all motors."""
    all_servo_ids = [id for finger in finger_config for id in (finger['m1_id'], finger['m2_id'])]
    print(f"Servo IDs to be controlled: {all_servo_ids}")

    enable_values = [1] * len(all_servo_ids)
    controller.sync_write_torque_enable(all_servo_ids, enable_values)
    print("Torque enabled for all motors.")

    speeds = [6] * len(all_servo_ids) # 6 is generally a fast speed
    controller.sync_write_goal_speed(all_servo_ids, speeds)
    print("All motor speeds have been set.")
    time.sleep(0.5)
    return all_servo_ids

async def handler(websocket, controller):
    """WebSocket server logic: receives data and controls the servos."""
    print("Web front-end connected.")
    try:
        async for message in websocket:
            try:
                # 1. Parse the JSON data received from the front-end
                data = json.loads(message)

                # 2. Calculate the target angle offset for each finger
                thumb_offset = map_value(data.get('thumb', 0), GESTURE_ANGLE_MIN, GESTURE_ANGLE_MAX, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)
                index_offset = map_value(data.get('index', 0), GESTURE_ANGLE_MIN, GESTURE_ANGLE_MAX, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)
                middle_offset = map_value(data.get('middle', 0), GESTURE_ANGLE_MIN, GESTURE_ANGLE_MAX, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)
                ring_offset = map_value(data.get('ring', 0), GESTURE_ANGLE_MIN, GESTURE_ANGLE_MAX, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)

                # 3. Prepare the synchronous write command
                all_ids = []
                positions_deg = []

                offsets = {
                    'Thumb': thumb_offset,
                    'Index': index_offset,
                    'Middle': middle_offset,
                    'Ring': ring_offset,
                }

                for finger in FINGERS:
                    finger_name = finger['name']
                    current_offset = offsets.get(finger_name, 0)
                    all_ids.extend([finger['m1_id'], finger['m2_id']])
                    positions_deg.append(0 + current_offset)
                    positions_deg.append(0 - current_offset)

                # 4. Convert units and send the command using the passed controller object
                positions_rad = np.deg2rad(positions_deg).tolist()
                controller.sync_write_goal_position(all_ids, positions_rad)

            except json.JSONDecodeError:
                print(f"Warning: Received non-JSON data: {message}")
            except Exception as e:
                print(f"Error processing message: {e}")

    except websockets.exceptions.ConnectionClosed:
        print("Web front-end disconnected.")

async def main():
    """Main function: Initializes servos and starts the WebSocket server."""
    # 'c' is the controller instance initialized in the global scope
    all_servo_ids = setup_servos(c, FINGERS)

    # Use a lambda function to pass the controller instance 'c' to the handler
    handler_with_controller = lambda ws, path: handler(ws, c)

    try:
        # Use the new handler_with_controller
        async with websockets.serve(handler_with_controller, "0.0.0.0", 8765):
            print("\nWebSocket server started at ws://localhost:8765")
            print("Waiting for the web front-end to connect...")
            await asyncio.Future()  # Run forever
    except KeyboardInterrupt:
        print("\nUser interrupt detected (Ctrl+C)...")
    finally:
        # Before the program exits, safely disable the torque on all motors
        print("Disabling torque on all motors...")
        if all_servo_ids:
            disable_values = [0] * len(all_servo_ids)
            c.sync_write_torque_enable(all_servo_ids, disable_values)
        print("Torque disabled. Program terminated.")

if **name** == '**main**':
    asyncio.run(main())

```

</Details>

<Details>

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real-time Hand Tracking & Finger Angle Detection</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #1a1a2e;
            --primary-color: #0f3460;
            --accent-color: #3f72af;
            --highlight-color: #e94560;
            --text-color: #dbe2ef;
            --success-color: #28a745;
            --error-color: #dc3545;
        }
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 2rem;
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            box-sizing: border-box;
        }
        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--text-color);
            margin-bottom: 0.5rem;
            text-shadow: 0 0 10px rgba(63, 114, 175, 0.5);
        }
        p {
            color: #a9b3c9;
            margin-bottom: 2rem;
            font-weight: 300;
        }
        .main-container {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
            max-width: 1600px;
        }
        #video-container {
            position: relative;
            flex-grow: 1;
            max-width: 1280px;
            aspect-ratio: 16 / 9;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 0 25px rgba(15, 52, 96, 0.8);
            border: 2px solid var(--accent-color);
            background-color: #000;
        }
        #webcam, #outputCanvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: scaleX(-1);
        }
        #angle-output {
            background: rgba(15, 52, 96, 0.5);
            backdrop-filter: blur(10px);
            border: 1px solid var(--accent-color);
            border-radius: 16px;
            width: 320px;
            padding: 1.5rem;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            flex-shrink: 0;
        }
        #angle-output h3 {
            margin-top: 0;
            color: var(--text-color);
            border-bottom: 1px solid var(--accent-color);
            padding-bottom: 1rem;
            margin-bottom: 1.5rem;
            text-align: center;
            font-size: 1.25rem;
            font-weight: 400;
        }
        .finger-angle {
            margin-bottom: 1.25rem;
        }
        .finger-label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
            font-size: 1rem;
        }
        .progress-bar-container {
            width: 100%;
            height: 12px;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 6px;
            overflow: hidden;
        }
        .progress-bar {
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, var(--accent-color), var(--highlight-color));
            border-radius: 6px;
            transition: width 0.1s linear;
        }
        .loading {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 1.5em;
            text-align: center;
            padding: 20px;
            background-color: rgba(0,0,0,0.7);
            border-radius: 10px;
        }
        #socket-status {
            display: flex;
            align-items: center;
            gap: 8px;
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 8px 16px;
            border-radius: 20px;
            color: white;
            font-size: 0.9em;
            font-weight: 500;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
        }
        #socket-status::before {
            content: '';
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.3s ease;
        }
        #socket-status.connected {
            background-color: rgba(40, 167, 69, 0.3);
            border: 1px solid var(--success-color);
        }
        #socket-status.connected::before { background-color: var(--success-color); }
        #socket-status.disconnected {
            background-color: rgba(220, 53, 69, 0.3);
            border: 1px solid var(--error-color);
        }
        #socket-status.disconnected::before { background-color: var(--error-color); }
    </style>
</head>
<body>
    <div id="socket-status" class="disconnected"><span>Disconnected</span></div>
    <h1>Robotic Hand Visual Teleoperation</h1>
    <p>Present your palm to the camera to begin real-time control.</p>
    <div class="main-container">
        <div id="video-container">
            <video id="webcam" autoplay playsinline></video>
            <canvas id="outputCanvas"></canvas>
            <div id="loading-message" class="loading">Initializing...</div>
        </div>
        <div id="angle-output">
            <h3>Finger Bending Status</h3>
            <div class="finger-angle">
                <div class="finger-label"><span>👍 Thumb</span><strong id="thumb-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="thumb-progress" class="progress-bar"></div></div>
            </div>
            <div class="finger-angle">
                <div class="finger-label"><span>☝️ Index Finger</span><strong id="index-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="index-progress" class="progress-bar"></div></div>
            </div>
            <div class="finger-angle">
                <div class="finger-label"><span>🖕 Middle Finger</span><strong id="middle-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="middle-progress" class="progress-bar"></div></div>
            </div>
            <div class="finger-angle">
                <div class="finger-label"><span>💍 Ring Finger</span><strong id="ring-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="ring-progress" class="progress-bar"></div></div>
            </div>
            <div class="finger-angle">
                <div class="finger-label"><span>- Pinky (Not Controlled)</span><strong id="pinky-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="pinky-progress" class="progress-bar"></div></div>
            </div>
        </div>
    </div>

    <script type="module">
        import { HandLandmarker, FilesetResolver, DrawingUtils } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";

        const video = document.getElementById("webcam");
        const canvasElement = document.getElementById("outputCanvas");
        const canvasCtx = canvasElement.getContext("2d");
        const loadingMessage = document.getElementById("loading-message");
        const socketStatus = document.querySelector("#socket-status span");

        let handLandmarker;
        let lastVideoTime = -1;
        let socket;

        function setupWebSocket() {
            socket = new WebSocket('ws://127.0.0.1:8765');
            const statusIndicator = document.getElementById("socket-status");
            socket.onopen = () => {
                console.log("Successfully connected to the local WebSocket server.");
                socketStatus.textContent = "Connected";
                statusIndicator.className = "connected";
            };
            socket.onclose = () => {
                console.log("Connection to the WebSocket server has been closed.");
                socketStatus.textContent = "Disconnected";
                statusIndicator.className = "disconnected";
            };
            socket.onerror = () => {
                console.error("WebSocket connection error.");
                socketStatus.textContent = "Connection Error";
                statusIndicator.className = "disconnected";
            };
        }

        async function createHandLandmarker() {
            try {
                const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");
                handLandmarker = await HandLandmarker.createFromOptions(vision, {
                    baseOptions: {
                        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
                        delegate: "GPU"
                    },
                    runningMode: "VIDEO",
                    numHands: 1
                });
            } catch (error) {
                throw new Error("Failed to load hand gesture model. Please check your network connection.");
            }
        }

        async function setupWebcam() {
            if (!navigator.mediaDevices?.getUserMedia) throw new Error("Browser does not support camera access.");
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } });
                video.srcObject = stream;
                video.addEventListener("loadeddata", () => {
                    loadingMessage.style.display = 'none';
                    predictWebcam();
                });
            } catch (err) {
                throw new Error("Failed to access camera, please check permissions.");
            }
        }

        function predictWebcam() {
            if (!handLandmarker) {
                requestAnimationFrame(predictWebcam);
                return;
            }
            const nowInMs = Date.now();
            if (video.currentTime !== lastVideoTime) {
                lastVideoTime = video.currentTime;
                const results = handLandmarker.detectForVideo(video, nowInMs);

                canvasElement.width = video.videoWidth;
                canvasElement.height = video.videoHeight;
                canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

                if (results.landmarks?.length) {
                    const drawingUtils = new DrawingUtils(canvasCtx);
                    for (const landmarks of results.landmarks) {
                        drawingUtils.drawConnectors(landmarks, HandLandmarker.HAND_CONNECTIONS, { color: "#00FF00", lineWidth: 5 });
                        drawingUtils.drawLandmarks(landmarks, { color: "#FF0000", radius: 5 });
                        calculateAndSendAngles(landmarks);
                    }
                }
            }
            requestAnimationFrame(predictWebcam);
        }

        function calculateAndSendAngles(landmarks) {
            const getAngle = (p1, p2, p3) => {
                const vec1 = { x: p1.x - p2.x, y: p1.y - p2.y, z: p1.z - p2.z };
                const vec2 = { x: p3.x - p2.x, y: p3.y - p2.y, z: p3.z - p2.z };
                const dot = vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z;
                const mag1 = Math.sqrt(vec1.x**2 + vec1.y**2 + vec1.z**2);
                const mag2 = Math.sqrt(vec2.x**2 + vec2.y**2 + vec2.z**2);
                const cosTheta = dot / (mag1 * mag2);
                return Math.round(Math.acos(Math.min(1, Math.max(-1, cosTheta))) * 180 / Math.PI);
            };

            const angles = {
                index: 180 - getAngle(landmarks[0], landmarks[5], landmarks[8]),
                middle: 180 - getAngle(landmarks[0], landmarks[9], landmarks[12]),
                ring: 180 - getAngle(landmarks[0], landmarks[13], landmarks[16]),
                thumb: 180 - getAngle(landmarks[2], landmarks[3], landmarks[4]),
                pinky: 180 - getAngle(landmarks[0], landmarks[17], landmarks[20])
            };

            const updateFingerUI = (fingerName, angle) => {
                const percentage = Math.max(0, Math.min(100, (angle / 180) * 100));
                document.getElementById(`${fingerName}-angle-value`).textContent = `${angle}°`;
                document.getElementById(`${fingerName}-progress`).style.width = `${percentage}%`;
            };

            Object.entries(angles).forEach(([key, value]) => updateFingerUI(key, value));

            if (socket?.readyState === WebSocket.OPEN) {
                const { pinky, ...dataToSend } = angles; // Exclude pinky finger
                socket.send(JSON.stringify(dataToSend));
            }
        }

        async function main() {
            try {
                loadingMessage.innerText = "Loading model...";
                await createHandLandmarker();
                loadingMessage.innerText = "Starting camera...";
                await setupWebcam();
                loadingMessage.innerText = "Connecting to server...";
                setupWebSocket();
            } catch (error) {
                console.error("Initialization failed:", error);
                loadingMessage.classList.add("error");
                loadingMessage.innerText = `Initialization failed:\n${error.message}`;
            }
        }
        main();
    </script>
</body>
</html>
```

</Details>

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
