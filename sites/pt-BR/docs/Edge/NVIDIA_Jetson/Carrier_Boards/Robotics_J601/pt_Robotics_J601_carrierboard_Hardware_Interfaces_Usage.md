---
description: Este wiki fornece uma introdução abrangente aos recursos de hardware e ao uso das interfaces da placa carrier reComputer Jetson Robotics J601. Ele abrange especificações detalhadas, módulos suportados, instruções de configuração e guias práticos para usar várias interfaces, como M.2, Ethernet, USB, CAN, RS485/RS232, UART, I2C, I2S, expansão de câmera GMSL2, 5G e GPS, ajudando os usuários a iniciar rapidamente o desenvolvimento de robótica na plataforma J601.
title: Uso das Interfaces
tags:
  - Placa carrier J601-Robotics
  - Jetson
  - AGX Thor
  - Robótica
  - Uso das Interfaces
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /recomputer_jetson_robotics_j601_interfaces_usage
sku: 100060965
last_update:
  date: 06/18/2026
  author: Zibo
createdAt: '2026-06-18'
updatedAt: '2026-06-18'
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Uso das Interfaces de Hardware da placa carrier Robotics J601

A reComputer Robotics J601 é uma placa carrier de robótica de alto desempenho projetada para o módulo NVIDIA Jetson AGX Thor, voltada para aplicações avançadas de IA incorporada e controle robótico. Equipada com amplas opções de conectividade — incluindo Ethernet de alta velocidade, slots M.2 para módulos 5G e Wi-Fi/BT, portas USB 3.2, 4x CAN (com suporte a CAN FD), RS-232/485, I2C, I2S, UART, expansão GMSL2 (até 8 câmeras) e entrada DC de ampla faixa — ela atua como um poderoso cérebro robótico capaz de processar dados complexos de vários sensores.

Com suporte a frameworks como NVIDIA Isaac ROS, Hugging Face, PyTorch e ROS 2/1, a reComputer Robotics J601 faz a ponte entre a tomada de decisão orientada por grandes modelos de linguagem e o controle físico de robôs, como planejamento de movimento e fusão de sensores. Ideal para o desenvolvimento rápido de robôs autônomos, ela acelera o tempo de lançamento no mercado com interfaces prontas para uso e frameworks de IA otimizados.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/thor.jpg"/>
</div>
## Uso das Interfaces

A seguir serão apresentadas as várias interfaces da placa Robotics J601 e como utilizá-las.

## USB

A placa carrier Robotics J601 está equipada com várias portas USB, incluindo portas USB 3.2 Type-A (Host) para conexão de periféricos de alta velocidade, uma porta USB 3.0 Type-C para gravação de firmware e uma porta USB 2.0 Type-C para modo dispositivo/depuração.

### Teste de Velocidade USB 3.2

Conecte um pendrive USB 3.0 e teste sua velocidade de leitura/gravação. Observe que as velocidades reais dependem do desempenho do próprio pendrive USB.

Crie um script de teste:

```bash
vim test_usb_speed.sh
```

Cole o seguinte conteúdo:

```bash
#!/bin/bash

echo "seeed" | sudo -S dd if=/dev/zero of=/dev/sda bs=1000M count=2 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
echo "seeed" | sudo -S dd if=/dev/sda of=/dev/null bs=1000M count=2
```

:::info
Substitua `/dev/sda` pelo nome real do dispositivo do seu pendrive USB. Você pode usar `lsblk` para verificar.
:::

Torne o script executável e execute-o:

```bash
chmod +x test_usb_speed.sh
./test_usb_speed.sh
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_speed.PNG"/>
</div>

### Porta de Depuração USB 2.0 Type-C

Usando esta porta serial, por meio do cabo de dados USB-C, você pode monitorar no PC as informações de depuração de entrada e saída.

#### Windows

**Passo 1.** Conecte a J601 ao PC por meio de um cabo de dados USB-C.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb2.0_debug.PNG"/>
</div>


**Passo 2.** Baixe o [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) no seu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Passo 3.** Conecte o PC por meio de um cabo de dados USB, extraia o arquivo baixado e instale o driver no seu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Passo 4.** Abra o Gerenciador de Dispositivos no seu PC com Windows e verifique o número da porta COM atribuída ao reComputer Super. Ele deve aparecer em "Ports (COM & LPT)" como "Silicon Labs CP210x USB to UART Bridge (COMX)", onde X é o número da porta COM.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/com4.png"/>
</div>

**Passo 5.** Abra a ferramenta de porta serial (aqui usamos a ferramenta MobaXterm como exemplo) e crie uma nova sessão.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Passo 6.** Selecione a ferramenta Serial.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Passo 7.** Selecione a porta serial correspondente, defina a taxa de baud para 115200 e clique em "OK".

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug1.png"/>
</div>

**Passo 8.** Faça login no seu reComputer Super com o nome de usuário e a senha.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug2.png"/>
</div>

#### Linux

**Passo 1.** Conecte a J601 ao PC com Linux por meio de um cabo de dados USB-C.

**Passo 2.** Encontre o dispositivo serial:

```bash
ls /dev/ttyUSB*
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_debug2.PNG"/>
</div>

**Passo 3.** Conecte-se ao console serial:

```bash
screen /dev/ttyUSB0 -b 115200
```

Agora você deve ver a saída do console serial da J601 e pode fazer login com seu nome de usuário e senha.

## GMSL

A Robotics J601 possui um conector de expansão para câmera GMSL que suporta até **8 câmeras GMSL** simultaneamente, possibilitando aplicações de visão robótica com múltiplas câmeras.

### Modelos de Câmera GMSL Suportados

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### Conexão de Hardware

Conecte a placa de expansão GMSL ao conector de expansão de câmera na placa carrier J601 e, em seguida, conecte suas câmeras GMSL à placa de expansão.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/GMSL_connect.png"/>
</div>

### Instruções de Uso

:::note
Antes de habilitar a funcionalidade GMSL, certifique-se de que você instalou uma versão do JetPack com o driver da placa de expansão GMSL.
:::

**Passo 1.** Instale as ferramentas de configuração da interface de vídeo:

```bash
sudo apt update
sudo apt install v4l-utils wmctrl
#example
media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1080]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1080]'

v4l2-ctl -d /dev/video0 -c sensor_mode=1

rm -f /tmp/gmsl0.yuyv; mkfifo /tmp/gmsl0.yuyv

v4l2-ctl -d /dev/video0 --stream-mmap=2 --stream-to=/tmp/gmsl0.yuyv >/tmp/gmsl0_v4l2.log 2>&1 &
gst-launch-1.0 -q filesrc location=/tmp/gmsl0.yuyv do-timestamp=true blocksize=4147200 ! rawvideoparse format=yuy2 width=1920 height=1080 framerate=30/1 ! queue max-size-buffers=1 max-size-bytes=0 max-size-time=0 leaky=downstream ! videoconvert ! videoscale method=0 ! video/x-raw,width=892,height=489 ! xvimagesink sync=false async=false max-lateness=0 qos=false force-aspect-ratio=true
```



<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl_camera.png"/>
</div>



<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl.png"/>
</div>

### Usar a Câmera Gemini 335Lg

```bash
# Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
# Unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

Na primeira vez que você ligá-la, talvez seja necessário atualizar o firmware. Ao abrir o fluxo de dados, você poderá visualizar o vídeo da câmera.

## I2S

A Robotics J601 fornece uma interface de áudio I2S com saída amplificada e entrada de microfone para reprodução e gravação de áudio.

### Conexão de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2s_connect.png"/>
</div>

### Instruções de Uso

**Passo 1.** Configure o mux de áudio I2S2 e teste a saída de tom:

```bash
# Configure I2S2 mux
amixer -c 2 sset "I2S2 Mux" "ADMAIF1"

# Play a 440Hz sine wave test tone (one iteration)
speaker-test -D hw:2,0 -c 2 -r 48000 -t sine -f 440 -l 1
```

:::info
A opção `-l 1` significa que o tom de teste será reproduzido apenas uma vez e depois será interrompido.
:::

**Passo 2.** Reproduza seu próprio arquivo de áudio:

```bash
aplay -D hw:2,0 -c 2 -r 48000 your_audio_file.wav
```

:::note
Substitua `your_audio_file.wav` pelo caminho do seu arquivo de áudio real. Certifique-se de que o formato do arquivo de áudio corresponda à taxa de amostragem especificada (48000 Hz) e à contagem de canais (2).
:::

## UART

A Robotics J601 fornece uma interface UART por meio de um conector JST padrão para comunicação serial com dispositivos externos.

### Conexão de Hardware

Para comunicação UART, conecte a ferramenta USB-para-TTL de acordo com a seguinte fiação:

- TX → RX
- RX → TX
- GND → GND

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png"/>
</div>

### Instruções de Uso

Conecte a ferramenta USB-para-TTL à porta UART da Robotics J601 e ao PC, depois abra a ferramenta de porta serial no PC e defina a taxa de baud para **115200**.

Você pode usar um script Python simples para teste de comunicação serial:

```python
import serial
import time

ser = serial.Serial('/dev/ttyTHS1', 115200, timeout=1)
ser.write(b'Hello Jetson!\n')
while True:
    if ser.in_waiting:
        data = ser.readline()
        print("get:", data.decode('utf-8').strip())
    time.sleep(0.1)

ser.close()
```

Execute o script no dispositivo Jetson:

```bash
python3 uart_test.py
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png"/>
</div>

## RGB

<details>
<summary>test_rgb.sh</summary>

```bash
#!/bin/bash

# ==============================================================================
# Script Name: test_rgb.sh
# Target Platform: Seeed reComputer J601 (Jetson)
# Description: Automatically tests RGB LEDs by lighting up Red, Green, Blue, 
#              and White colors sequentially for 1 second each.
# Usage: sudo ./test_rgb.sh
# ==============================================================================

# Define LED paths
LED_DIR="/sys/class/leds"
RED="$LED_DIR/red/brightness"
GREEN="$LED_DIR/green/brightness"
BLUE="$LED_DIR/blue/brightness"

# Check if running as root (sysfs write access requires root privileges)
if [ "$EUID" -ne 0 ]; then
    echo "Error: Please run this script with sudo!"
    echo "Example: sudo $0"
    exit 1
fi

# Check if the hardware paths exist
if [ ! -d "$LED_DIR/red" ] || [ ! -d "$LED_DIR/green" ] || [ ! -d "$LED_DIR/blue" ]; then
    echo "Error: RGB LED hardware paths not found. Please check your driver or device model."
    exit 1
fi

# Helper function: Control LED states
# Arguments: set_leds <Red(0/1)> <Green(0/1)> <Blue(0/1)>
set_leds() {
    echo "$1" > "$RED"
    echo "$2" > "$GREEN"
    echo "$3" > "$BLUE"
}

echo "========================================"
echo "         Starting Jetson RGB LED Test    "
echo "========================================"

# 1. Initialization: Turn off all LEDs
echo "-> Initializing: Turning off all LEDs"
set_leds 0 0 0
sleep 0.5

# 2. Red LED on for 1 second
echo "-> [ON] Red Light"
set_leds 1 0 0
sleep 1

# 3. Green LED on for 1 second
echo "-> [ON] Green Light"
set_leds 0 1 0
sleep 1

# 4. Blue LED on for 1 second
echo "-> [ON] Blue Light"
set_leds 0 0 1
sleep 1

# 5. Mixed White LED on for 1 second (Red + Green + Blue mixed)
echo "-> [ON] White Light (RGB Mixed)"
set_leds 1 1 1
sleep 1

# 6. Test completed, turn off all LEDs
echo "-> Test completed: Turning off all LEDs"
set_leds 0 0 0

echo "========================================"
echo "             LED Test Ended             "
echo "========================================"
```

</details>

```bash
sudo chmod +x test_rgb.sh
sudo ./test_rgb.sh
```
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/grb.gif"/>
</div>

## I2C

O Robotics J601 fornece interfaces I2C por meio de conectores JST padrão, permitindo a conexão fácil de sensores e periféricos para expansão do sistema.

### Conexão de hardware

Conecte seu dispositivo I2C à interface I2C na placa carrier:

- Power → Alimentação
- SDA → SDA
- SCL → SCL
- Ground → Terra

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_connect.png"/>
</div>

### Instruções de uso

**Passo 1.** Instale as ferramentas de teste I2C:

```bash
sudo apt update
sudo apt-get install i2c-tools
```

**Passo 2.** Veja os mapeamentos do barramento I2C:

```bash
i2cdetect -l
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c1.PNG"/>
</div>

**Passo 3.** Faça uma varredura por dispositivos no barramento I2C:

```bash
sudo i2cdetect -y -r 1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c2.png"/>
</div>

**Passo 4.** Leia um registrador de um dispositivo I2C. Por exemplo, para ler o registrador `0x00` de um dispositivo no endereço `0x58` no barramento `i2c-1`:

```bash
sudo i2cget -y 1 0x58 0x00
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c3.png"/>
</div>

## CAN

CAN (Controller Area Network) é um padrão robusto de barramento veicular que permite que microcontroladores e dispositivos se comuniquem entre si sem um computador host. O Robotics J601 fornece **4 interfaces CAN** (CAN0, CAN1, CAN2, CAN3) por meio de conectores JST, todas com suporte ao modo CAN FD.

### Controle do resistor de terminação de 120Ω

Cada interface CAN possui um resistor de terminação de 120Ω controlado por software. Os mapeamentos de GPIO são os seguintes:

| Interface | Chip GPIO | Linha GPIO | Nome de controle |
| --- | --- | --- | --- |
| CAN0_120R_EN_3V3 | 3 | 0 | Terminação CAN0 |
| CAN1_120R_EN_3V3 | 3 | 1 | Terminação CAN1 |
| CAN2_120R_EN_3V3 | 3 | 2 | Terminação CAN2 |
| CAN3_120R_EN_3V3 | 3 | 3 | Terminação CAN3 |
| RS485_120R_EN_3V3 | 3 | 4 | Terminação RS485 |

Você pode visualizar as linhas GPIO correspondentes usando:

```bash
gpioinfo
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gpioinfo.PNG"/>
</div>

### Comunicação CAN Classic

Aqui demonstramos a comunicação de dados entre CAN0 e CAN1.

**Passo 1.** Instale os utilitários CAN:

```bash
sudo apt update
sudo apt install can-utils -y
```

**Passo 2.** Configure as interfaces CAN:

```bash
sudo ip link set down can0
sudo ip link set down can1

sudo ip link set can0 type can bitrate 500000
sudo ip link set can1 type can bitrate 500000

sudo ip link set up can0
sudo ip link set up can1
```

**Passo 3.** Abra um novo terminal para receber dados em CAN1 e envie dados a partir de CAN0:

```bash
# In a new terminal, listen on CAN1
candump can1

# In another terminal, send data from CAN0
cansend can0 123#DEADBEEF
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c1.png"/>
</div>

### Modo CAN FD

CAN FD (Flexible Data-Rate) estende o protocolo CAN clássico para suportar taxas de dados mais altas e cargas úteis maiores (até 64 bytes).

**Passo 1.** Configure CAN0 e CAN1 para o modo FD:

```bash
sudo ip link set down can0
sudo ip link set down can1

sudo ip link set can0 type can bitrate 500000 dbitrate 2000000 fd on
sudo ip link set can1 type can bitrate 500000 dbitrate 2000000 fd on

sudo ip link set can0 txqueuelen 2000
sudo ip link set can1 txqueuelen 2000

sudo ip link set up can0
sudo ip link set up can1
```

**Passo 2.** Abra um novo terminal e teste a comunicação CAN FD:

```bash
# Listen on CAN1 with extended output
candump can1 -x

# Test 1: Send a 16-byte frame with BRS active
cansend can0 5AA##111223344556677889900AABBCCDD

# Test 2: Send a full 64-byte payload frame with BRS active
cansend can0 7DF##1101020203030404050506060707080809090A0A0B0B0C0C0D0D0E0E0F0F0111122223333444455556666777788889999AAAABBBBCCCCDDDDEEEEFFFF
```

:::info
- `5AA` / `7DF` é o ID CAN
- `##` indica um quadro CAN FD
- O dígito após `##` é o sinalizador BRS (Bit Rate Switch): `1` = BRS ativo
- O seguinte é a carga útil de dados (até 128 caracteres hexadecimais para 64 bytes)
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c2.png"/>
</div>

### Script de teste abrangente de CAN

O script a seguir executa um teste completo de CAN FD, incluindo verificação de dependências, configuração de interface, verificação básica de comunicação e um teste de estresse de 10 segundos.

Crie o script de teste:

```bash
vim can_test.sh
```

Cole o seguinte conteúdo:

<details>
<summary>Clique para expandir o script de teste CAN</summary>

```bash
#!/bin/bash

# Color output definitions
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Assign interfaces from arguments, default to can0 and can1 if empty
TX_DEV=${1:-can0}
RX_DEV=${2:-can1}

echo -e "${YELLOW}=== Jetson $TX_DEV <-> $RX_DEV Comprehensive Test Script ===${NC}"
echo -e "Note: Please ensure ${TX_DEV}_H -> ${RX_DEV}_H and ${TX_DEV}_L -> ${RX_DEV}_L are physically wired.\n"

# 1. Dependency Check
if ! command -v candump &> /dev/null; then
    echo -e "${YELLOW}[1/5] Installing can-utils...${NC}"
    sudo apt update && sudo apt install can-utils -y
else
    echo -e "${GREEN}[1/5] can-utils is already installed.${NC}"
fi

# 2. Reset and Configure Interfaces (Arbitration: 500K, Data: 2M, FD & BRS enabled)
echo -e "${YELLOW}[2/5] Configuring $TX_DEV and $RX_DEV (CAN FD Mode)...${NC}"
for dev in "$TX_DEV" "$RX_DEV"; do
    # Check if the interface exists in the system
    if ! ip link show "$dev" &> /dev/null; then
        echo -e "${RED}[ERROR] Interface $dev does not exist. Please check your spelling or hardware.${NC}"
        exit 1
    fi
    sudo ip link set down "$dev" 2>/dev/null
    sudo ip link set "$dev" type can bitrate 500000 dbitrate 2000000 fd on
    # Increase transmit queue length to prevent packet loss under heavy load
    sudo ip link set "$dev" txqueuelen 2000
    sudo ip link set up "$dev"
done
sleep 1

# 3. Basic Communication Test (Classic CAN Frame)
echo -e "${YELLOW}[3/5] Starting Basic Communication Test...${NC}"
# Listen for 1 frame on the receiver interface in the background and dump to a temp file
candump "$RX_DEV" -n 1 > /tmp/can_test_rx.log &
DUMP_PID=$!
sleep 0.5

# Send a single classic CAN frame from the transmitter interface
cansend "$TX_DEV" 123#DEADBEEF

# Wait for the background dump process to finish
wait $DUMP_PID 2>/dev/null

# Validate basic data
if grep -q "DE AD BE EF" /tmp/can_test_rx.log; then
    echo -e "${GREEN}[PASS] Basic communication successful! Data verified.${NC}"
else
    echo -e "${RED}[FAIL] Basic communication failed! No data received or data corrupted.${NC}"
    tail -n 2 /tmp/can_test_rx.log 2>/dev/null
    exit 1
fi

# 4. CAN FD High-Load Stress Test
echo -e "${YELLOW}[4/5] Starting CAN FD Stress & Stability Test (10 Seconds)...${NC}"
echo -e "--> $TX_DEV generating high-frequency 64-byte BRS random data stream to $RX_DEV..."

# Flood the bus using cangen (-f for FD, -b for BRS, -g 1 for 1ms interval)
cangen "$TX_DEV" -f -b -g 1 >/dev/null 2>&1 &
GEN_PID=$!

# Countdown timer
for i in {10..1}; do
    echo -ne "Remaining Time: ${i}s \r"
    sleep 1
done
echo ""

# Stop data generation
kill $GEN_PID 2>/dev/null
wait $GEN_PID 2>/dev/null
sleep 1

# 5. Analyze and Print Performance Report
echo -e "${YELLOW}[5/5] Generating Performance Report...${NC}"
echo "--------------------------------------------------"
echo -e "${YELLOW}$RX_DEV Receiver Statistics:${NC}"
# Extract packets and hardware error counters
ip -details -statistics link show "$RX_DEV" | grep -E -A 3 "(RX:|errors)"
echo "--------------------------------------------------"

# Smart assessment based on RX errors
ERRORS=$(ip -details -statistics link show "$RX_DEV" | grep -A 1 "RX: errors" | tail -n 1 | awk '{print $1}')
if [ "$ERRORS" ] && [ "$ERRORS" -gt 0 ]; then
    echo -e "${RED}[WARNING] Test completed, but $RX_DEV encountered $ERRORS errors/dropped packets during stress testing. Check your wiring and termination resistors!${NC}"
else
    echo -e "${GREEN}[SUCCESS] CAN FD stress test passed! Zero packet loss, zero hardware errors on $RX_DEV. Excellent board performance.${NC}"
fi

# Cleanup and tear down interfaces
for dev in "$TX_DEV" "$RX_DEV"; do sudo ip link set down "$dev"; done
rm -f /tmp/can_test_rx.log
```

</details>

Torne o script executável e execute-o para testar quaisquer duas interfaces CAN:

```bash
chmod +x can_test.sh
./can_test.sh can0 can1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c3.png"/>
</div>



# RS485

```bash
#Jetson 
sudo stty -F /dev/ttyAMA10 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
sudo python3 -c 'import os,fcntl,struct; fd=os.open("/dev/ttyAMA10",os.O_RDWR|os.O_NOCTTY); fcntl.ioctl(fd,0x542F,struct.pack("IIIIIIII",3,0,20,0,0,0,0,0)); out=bytearray(32); fcntl.ioctl(fd,0x542E,out,True); print(struct.unpack("IIIIIIII",out)); os.close(fd)'
#(3, 0, 20, 0, 0, 0, 0, 0)

#PC
sudo stty -F /dev/ttyUSB0 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
#jetson
sudo cat /dev/ttyAMA10
#PC
echo "hello from pc" | sudo tee /dev/ttyUSB0 >/dev/null

#PC 收
sudo cat /dev/ttyUSB0
#jetson
echo "hello from jetson" | sudo tee /dev/ttyAMA10 >/dev/null
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-2.png"/>
</div>



## DB9 (RS232 / RS422 / RS485)

O Robotics J601 fornece uma interface serial DB9 selecionável por software. A porta DB9 está conectada a `/dev/ttyAMA9` no sistema Jetson e pode ser configurada como RS232, RS422 ou RS485 ajustando a chave DIP SW3.

### Conexão de hardware

A função de cada pino DB9 depende do modo de comunicação selecionado. Consulte a tabela e o diagrama do conector abaixo antes de fazer a fiação do adaptador.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/db9_config.png"/>
</div>

| Pino DB9 | Modo RS232 | Modo RS422 | Modo RS485 |
| --- | --- | --- | --- |
| 1 | - | TXD- (B) | Dados- (B) |
| 2 | RXD | TXD+ (A) | Dados+ (A) |
| 3 | TXD | RXD+ (A) | - |
| 4 | - | RXD- (B) | - |
| 5 | GND | GND | GND |
| 6 | - | - | - |
| 7 | RTS | - | - |
| 8 | CTS | - | - |
| 9 | - | - | - |

:::tip
Para a fiação RS485, conecte o adaptador USB-RS485 `A/D+` ao pino 2 do DB9, `B/D-` ao pino 1 do DB9 e `GND` ao pino 5 do DB9. Alguns adaptadores USB-RS485 rotulam A/B de forma oposta. Se o Jetson receber bytes aleatórios enquanto o PC não está enviando, inverta A e B e teste novamente.
:::

### Selecione o modo DB9 com SW3

O SW3 puxa cada pino de modo para nível baixo quando o switch está em ON. Em outras palavras, **ON = 0** e **OFF = 1**.

| Modo | Valor MODE no esquema (MODE_0 MODE_1 MODE_2) | SW3-1 (MODE_0) | SW3-2 (MODE_1) | SW3-3 (MODE_2) | SW3-4 (SLEW) |
| --- | --- | --- | --- | --- | --- |
| RS232 | `001` | ON | ON | OFF | ON recomendado |
| RS422 | `000` | ON | ON | ON | ON recomendado |
| RS422 | `100` | OFF | ON | ON | ON recomendado |
| RS485 | `010` | ON | OFF | ON | ON recomendado |
| RS485 | `110` | OFF | OFF | ON | ON recomendado |

:::note
Para testes de baixa velocidade, como 115200 bps, é recomendado manter o SW3-4 (SLEW) em ON. Isso limita a taxa de variação do driver e ajuda a reduzir o ruído em cabos mais longos.
:::

### Habilitar o transceptor DB9

Antes de testar a porta DB9, mantenha o transceptor DB9 habilitado a partir de um terminal dedicado do Jetson:

```bash
sudo gpioset --mode=wait gpiochip3 6=0
```

Mantenha este comando em execução durante o teste. Pressione **Enter** neste terminal somente depois de terminar o teste.

### Teste no modo RS232

Use um adaptador USB-para-RS232. Se o adaptador expuser fios separados, conecte o TXD do adaptador ao pino 2 do DB9 (RXD), o RXD do adaptador ao pino 3 do DB9 (TXD) e o GND do adaptador ao pino 5 do DB9 (GND). Se você usar um cabo DB9-para-DB9 entre dois dispositivos DTE, geralmente é necessário um cabo null-modem ou conexão cruzada.

**Passo 1.** Configure o SW3 para o modo RS232.

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | ON | OFF | ON |

**Passo 2.** Configure a porta DB9 do Jetson:

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

**Passo 3.** Configure a porta serial do PC.

No Linux:

```bash
PC_DEV=/dev/ttyUSB0
# If your adapter appears as /dev/ttyACM0, use:
# PC_DEV=/dev/ttyACM0

sudo stty -F $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

No macOS:

```bash
ls /dev/cu.* | grep -i usb

PC_DEV=/dev/cu.usbserial-0001
stty -f $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

Para um terminal interativo no macOS, você também pode usar:

```bash
screen $PC_DEV 115200
```

Pressione **Ctrl+A**, depois **K**, depois **Y** para sair do `screen`.

**Passo 4.** Teste do PC para o Jetson.

Execute isto no Jetson:

```bash
sudo cat /dev/ttyAMA9
```

Em seguida, envie dados a partir do PC.

PC com Linux:

```bash
echo "hello from pc to db9 rs232" | sudo tee $PC_DEV >/dev/null
```

macOS:

```bash
echo "hello from mac to db9 rs232" > $PC_DEV
```

**Passo 5.** Teste do Jetson para o PC.

Execute isto no PC.

PC com Linux:

```bash
sudo cat $PC_DEV
```

macOS:

```bash
cat $PC_DEV
```

Em seguida, envie dados a partir do Jetson:

```bash
echo "hello from jetson db9 rs232" | sudo tee /dev/ttyAMA9 >/dev/null
```

### Teste no modo RS485

Use um adaptador USB-para-RS485. Conecte o adaptador `A/D+` ao pino 2 do DB9, o adaptador `B/D-` ao pino 1 do DB9 e o adaptador `GND` ao pino 5 do DB9.

**Passo 1.** Configure o SW3 para um dos modos RS485.

Configuração recomendada:

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| OFF | OFF | ON | ON |

Configuração alternativa:

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | OFF | ON | ON |

**Passo 2.** Configure a porta DB9 do Jetson e habilite o modo RS485 no Linux:

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
sudo python3 -c 'import os,fcntl,struct; fd=os.open("/dev/ttyAMA9",os.O_RDWR|os.O_NOCTTY); fcntl.ioctl(fd,0x542F,struct.pack("IIIIIIII",5,0,20,0,0,0,0,0)); out=bytearray(32); fcntl.ioctl(fd,0x542E,out,True); print(struct.unpack("IIIIIIII",out)); os.close(fd)'
```

A saída esperada da configuração RS485 é:

```bash
(5, 0, 20, 0, 0, 0, 0, 0)
```

**Passo 3.** Configure a porta serial do PC.

PC com Linux:

```bash
PC_DEV=/dev/ttyUSB0
# If your adapter appears as /dev/ttyACM0, use:
# PC_DEV=/dev/ttyACM0

sudo stty -F $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

macOS:

```bash
ls /dev/cu.* | grep -i usb

PC_DEV=/dev/cu.usbserial-0001
stty -f $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

**Passo 4.** Teste do PC para o Jetson.

Execute isto no Jetson:

```bash
sudo cat /dev/ttyAMA9
```

Em seguida, envie dados a partir do PC.

PC com Linux:

```bash
echo "hello from pc to db9 rs485" | sudo tee $PC_DEV >/dev/null
```

macOS:

```bash
echo "hello from mac to db9 rs485" > $PC_DEV
```

**Passo 5.** Teste do Jetson para o PC.

Execute isto no PC.

PC com Linux:

```bash
sudo cat $PC_DEV
```

macOS:

```bash
cat $PC_DEV
```

Em seguida, envie dados a partir do Jetson:

```bash
echo "hello from jetson db9 rs485" | sudo tee /dev/ttyAMA9 >/dev/null
```

### Teste no modo RS422

Use um adaptador USB-para-RS422. Conecte o TXD+ do adaptador ao pino 3 do DB9 (RXD+), o TXD- ao pino 4 do DB9 (RXD-), o RXD+ ao pino 2 do DB9 (TXD+), o RXD- ao pino 1 do DB9 (TXD-) e o GND ao pino 5 do DB9 se o adaptador fornecer um terminal GND.

**Passo 1.** Configure o SW3 para um dos modos RS422.

Configuração recomendada:

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | ON | ON | ON |

Configuração alternativa:

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| OFF | ON | ON | ON |

**Passo 2.** Configure a porta DB9 do Jetson:

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

**Passo 3.** Configure a porta serial do PC como 115200 8N1 sem controle de fluxo e, em seguida, teste ambas as direções usando o mesmo método com `cat` e `echo` mostrado na seção RS232.

### Solução de problemas

- Se `/dev/ttyAMA9` não puder ser aberto, feche outras ferramentas como `cat`, `minicom` ou scripts de teste que possam já estar usando a porta.
- Se o RS485 receber bytes aleatórios enquanto o PC não estiver enviando nada, as linhas A/B geralmente estão invertidas ou o GND não está conectado. Inverta A/B e mantenha o pino 5 do DB9 conectado ao GND do adaptador.
- Se a comunicação do PC para o Jetson funcionar, mas do Jetson para o PC não, certifique-se de que `sudo gpioset --mode=wait gpiochip3 6=0` ainda esteja em execução em um terminal separado do Jetson.
- Se o RS485 ainda não transmitir do Jetson para o PC, a polaridade de direção RS485 pode estar invertida para o modo selecionado. Tente o mesmo comando ioctl RS485 com flags `3` em vez de `5` e, em seguida, teste novamente do Jetson para o PC.
- No macOS, use dispositivos `/dev/cu.*`, por exemplo `/dev/cu.usbserial-0001`. Não use comandos exclusivos do Linux, como `stty -F` ou comandos ioctl RS485 do Linux no macOS.
- Para RS485, o adaptador USB-RS485 geralmente lida com a comutação de direção half-duplex no lado do PC. Apenas a porta DB9 do Jetson precisa da configuração RS485 no Linux mostrada acima.

## Ethernet

A placa carrier Robotics J601 possui portas Ethernet de alta velocidade para conectividade de rede com fio, com suporte planejado para os protocolos PTP e EtherCAT.

### Conexão de hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/ethnet.png"/>
</div>

### Instruções de uso

Para testar a velocidade da porta Ethernet, use `iperf3` da seguinte forma:

**Teste de velocidade de upload:**

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed1.png"/>
</div>

**Teste de velocidade de download:**

```bash
iperf3 -c <server_ip> -B <bind_ip> -R
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed2.png"/>
</div>

:::info
- `<server_ip>` é o endereço IP do servidor iperf3. O cliente se conectará a esse servidor para realizar um teste de largura de banda.
- `<bind_ip>` vincula o endereço IP local especificado como a origem do tráfego de teste.
- A flag `-R` inverte a direção do teste para o teste de velocidade de download.
:::

## M.2 Key E

A interface M.2 Key E é um conector M.2 padrão usado principalmente para conectar módulos sem fio, como Wi-Fi e Bluetooth, para expandir as capacidades de comunicação sem fio.

### Conexão de hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl_c1.png"/>
</div>

### Instruções de uso

**Passo 1.** Instale o firmware do driver Wi-Fi:

```bash
# Decompress firmware files
cd /lib/firmware/rtw88/
sudo zstd -d rtw8822c_fw.bin.zst -o rtw8822c_fw.bin
sudo zstd -d rtw8822c_wow_fw.bin.zst -o rtw8822c_wow_fw.bin

# Load the driver modules
sudo modprobe rtw88_core
sudo modprobe rtw88_pci
sudo modprobe rtw88_8822c
sudo modprobe rtw88_8822ce
```

**Passo 2.** Reinicie o dispositivo:

```bash
sudo reboot
```

**Passo 3.** Após a reinicialização, ative a interface sem fio:

```bash
sudo ip link set wlP1p1s0 up
```

**Passo 4.** Procure redes Wi-Fi disponíveis:

```bash
sudo nmcli device wifi list ifname wlP1p1s0
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_1.png"/>
</div>

**Passo 5.** Conecte-se a uma rede Wi-Fi:

```bash
sudo nmcli device wifi connect "your WiFi name" password "WiFi password" ifname wlP1p1s0
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_2.png"/>
</div>

### Bluetooth

A funcionalidade Bluetooth está disponível através do slot M.2 Key E.

**Passo 1.** Abra a ferramenta de controle Bluetooth:

```bash
bluetoothctl
```

**Passo 2.** Ligue e procure dispositivos Bluetooth próximos:

```bash
power on
scan on
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/blue_tooth.png"/>
</div>

## Módulo 5G (M.2 Key B)

O slot M.2 Key B suporta expansão com módulo 5G, permitindo conectividade celular de alta velocidade para cenários de robótica e IA de borda.

### Conexão de hardware

Instale o módulo 5G no slot M.2 Key B e conecte as antenas.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/5g_c1.png"/>
</div>

### Instruções de uso

**Passo 1.** Abra o console serial do módulo 5G:

```bash
sudo apt install -y minicom
sudo minicom -D /dev/ttyUSB3
```

**Passo 2.** Entre no modo interativo pressionando **Ctrl+A** e depois **E**.

**Passo 3.** Teste os comandos AT:

```
AT
```

**Passo 4.** Verifique a intensidade do sinal:

```
AT+CSQ
```

**Passo 5.** Verifique a operadora de rede registrada:

```
AT+COPS?
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/lsusb_5g.png"/>
</div>

## Nano SIM

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/sim.png"/>
</div>

## GPS

O módulo 5G no slot M.2 Key B também fornece funcionalidade de GPS para rastreamento de localização.

### Instruções de uso

**Passo 1.** Abra a porta de comando AT do GPS:

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Passo 2.** Ative o receptor GPS:

```
AT+QGPS=1
```

:::info
- Se a resposta for `OK`, o receptor GPS foi iniciado com sucesso.
- Se a resposta for `+CME ERROR: 549`, o GPS já está ativado — não é necessário ativá-lo novamente.
:::

**Passo 3.** Saia do minicom pressionando **Ctrl+A** e depois **X**, e selecione **Yes** para sair.

**Passo 4.** Após o GPS ser ativado, os dados de satélite serão enviados pela porta de dados do GPS (normalmente `/dev/ttyUSB1`). Leia os dados NMEA brutos:

```bash
sudo cat /dev/ttyUSB1
```

Você deverá ver sentenças NMEA padrão de GPS, como:

```
$GPRMC,023011.00,A,2232.12345,N,11356.54321,E,0.026,,100626,,,A*7A
$GPGGA,023011.00,2232.12345,N,11356.54321,E,1,06,1.2,45.3,M,-2.3,M,,*6D
$GPGSV,3,1,11,01,65,120,42,03,45,210,38,08,30,045,35,11,15,290,31*74
```

:::note
Certifique-se de ter uma visão desobstruída do céu para aquisição do sinal de GPS. Pode levar alguns minutos para obter um fix válido.
:::

## Recursos

- Layout detalhado de hardware: A definir
- Guia de gravação de firmware: A definir
- Notas de lançamento do BSP: A definir

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
