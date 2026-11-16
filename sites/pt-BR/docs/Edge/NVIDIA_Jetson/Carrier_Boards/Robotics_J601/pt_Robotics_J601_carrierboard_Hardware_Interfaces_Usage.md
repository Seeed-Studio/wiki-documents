---
description: "Interfaces da placa carrier J601: GMSL, USB, CAN, M.2 e pinagem de 40 pinos, nomes de dispositivos Linux e verificações por porta, além da instalação do dissipador."
title: reComputer Robotics J601 Hardware & I/O
tags:
  - J601-Robotics carrier board
  - Jetson
  - AGX Thor
  - Robotics
  - Interfaces Usage
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/thor.jpg
slug: /jetson/recomputer_robotics_j601/hardware_and_interface_usage
aliases:
  - /recomputer_jetson_robotics_j601_interfaces_usage
sku: 100060965
last_update:
  date: 10/19/2026
  author: Zibo
createdAt: '2026-06-18'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/jetson/recomputer_robotics_j601/hardware_and_interface_usage/
---

import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {roboticsJ601DocNav} from '@site/src/data/jetson/productDocNavigation';

# reComputer Robotics J601 Hardware & I/O

<JetsonProductDocNav {...roboticsJ601DocNav} />

<div className="jetson-product-page">

Use este guia para fiação de conectores, definições de pinos, mapeamentos de dispositivos Linux e verificações de interfaces na placa carrier J601. Para seleção de módulo, especificações, requisitos de energia e o fluxo completo de gravação do JetPack, comece por [Getting Started](/pt-br/jetson/recomputer_robotics_j601/getting_started/).

O módulo Jetson instalado determina as conexões Ethernet e CAN disponíveis: **o T5000 oferece suporte a quatro portas 10GbE e quatro interfaces CAN; o T4000 oferece suporte a três portas 10GbE e duas interfaces CAN**. As funcionalidades de Wi-Fi/Bluetooth e celular exigem módulos de expansão compatíveis.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/thor.jpg" alt="reComputer Robotics J601 carrier board hardware overview" />
    <figcaption>Placa carrier J601 · Interfaces de robótica e expansão</figcaption>
  </figure>
</div>

## Guia de Interfaces

| Tarefa | Interfaces e instruções |
| --- | --- |
| Instalar refrigeração | [Instalação do dissipador](#instalação-do-dissipador) |
| Conectar periféricos ou um console de depuração | [USB](#usb) e [UART](#uart) |
| Ativar entradas de câmera | [GMSL](#gmsl) |
| Conectar áudio e sensores | [I2S](#i2s), [I2C](#i2c) e [GPIO](#gpio-gpigpo) |
| Conectar controladores | [CAN](#can), [RS485](#rs485) e [DB9](#db9) |
| Verificar indicadores de status | [LED RGB](#rgb) |
| Conectar uma rede | [Ethernet](#ethernet), [Wi-Fi/Bluetooth](#m2-key-e) e [5G/GPS](#5g-module-m2-key-b) |

Desligue a placa carrier antes de instalar ou remover módulos ou cabeçalhos de fiação. Combine a numeração de pinos do conector e a tensão de sinal com o esquema elétrico da revisão da sua placa.

## Instalação do dissipador

Para garantir dissipação de calor estável durante operação de longo prazo, você pode instalar um dissipador na reComputer J601 Carrier Board.

**Materiais necessários:**

- almofada de silicone térmico
- dissipador com ventoinha
- reComputer J601 Carrier Board

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/j601_heatsink1.png" alt="Heatsink, fan, thermal pad, and J601 carrier board for installation" loading="lazy" />
    <figcaption>Dissipador, ventoinha, almofada térmica e placa carrier J601 para instalação</figcaption>
  </figure>
</div>

**Passo 1.** Fixe a almofada de silicone térmico no ponto de contato entre o dissipador e a placa carrier.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/j601_heatsink2.png" alt="Copper heatsink plate with the blue thermal pads applied, next to the J601 carrier board" loading="lazy" />
    <figcaption>Almofada de silicone térmico posicionada no ponto de contato do dissipador</figcaption>
  </figure>
</div>

**Passo 2.** Conecte o dissipador à placa carrier.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/j601_heatsink3.png" alt="Heatsink and fan attached to the J601 carrier board" loading="lazy" />
    <figcaption>Dissipador e ventoinha conectados à placa carrier J601</figcaption>
  </figure>
</div>

## USB

A placa carrier Robotics J601 está equipada com várias portas USB, incluindo 4 portas USB 3.2 Type-A (Host, 10Gbps) para conectividade de periféricos de alta velocidade, uma porta USB 3.0 Type-C (J4) para recuperação/gravação e uma porta USB 2.0 Type-C (J3) para depuração serial.

### Teste de velocidade USB 3.2

Conecte um dispositivo de armazenamento USB 3.x e confirme seu ponto de montagem com `lsblk -f`. A velocidade USB negociada pode ser verificada com `lsusb -t`; a taxa de transferência medida também depende do dispositivo de armazenamento e do sistema de arquivos.

O exemplo a seguir grava um **arquivo temporário de 1 GiB** no sistema de arquivos USB montado, o lê de volta e o remove. Substitua `<usb-volume>` pelo nome real do volume e certifique-se de que pelo menos 1 GiB esteja livre.

```bash
lsblk -f
lsusb -t
USB_MOUNT="/media/$USER/<usb-volume>"
USB_TEST_FILE=$(mktemp "$USB_MOUNT/j601-usb-speed.XXXXXX")
dd if=/dev/zero of="$USB_TEST_FILE" bs=1M count=1024 conv=fdatasync status=progress
dd if="$USB_TEST_FILE" of=/dev/null bs=1M iflag=direct status=progress
rm -- "$USB_TEST_FILE"
```

Mantenha o dispositivo montado até que o teste seja concluído. Se o sistema de arquivos não suportar I/O direto, omita `iflag=direct` e interprete o resultado de leitura como potencialmente afetado por cache.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_speed.PNG" alt="Example J601 USB storage throughput result" loading="lazy" />
    <figcaption>Exemplo de resultado de taxa de transferência de armazenamento USB no J601</figcaption>
  </figure>
</div>

### Porta de depuração USB 2.0 Type-C

Usando esta porta serial, por meio do cabo de dados USB-C, você pode monitorar no PC as informações de depuração de entrada e saída.

#### Windows

**Passo 1.** Conecte o J601 ao PC por meio de um cabo de dados USB-C.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb2.0_debug.PNG" alt="J601 USB 2.0 Type-C debug port connection" loading="lazy" />
    <figcaption>Conexão da porta de depuração USB 2.0 Type-C do J601</figcaption>
  </figure>
</div>


**Passo 2.** Baixe o [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) no seu PC.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png" alt="Silicon Labs CP210x USB-to-UART driver download page" loading="lazy" />
    <figcaption>Página de download do driver Silicon Labs CP210x USB-to-UART</figcaption>
  </figure>
</div>

**Passo 3.** Conecte o PC por meio de um cabo de dados USB, extraia o arquivo baixado e instale o driver no seu PC.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png" alt="CP210xVCPInstaller_x64.exe selected in the extracted driver folder" loading="lazy" />
    <figcaption>CP210xVCPInstaller_x64.exe na pasta de driver extraída</figcaption>
  </figure>
</div>

**Passo 4.** Abra o Gerenciador de Dispositivos no seu PC com Windows e verifique o número da porta COM atribuída ao reComputer J601. Ele deve aparecer em "Ports (COM & LPT)" como "Silicon Labs CP210x USB to UART Bridge (COMX)", onde X é o número da porta COM.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/com4.png" alt="Windows Device Manager showing the USB-to-UART COM port" loading="lazy" />
    <figcaption>Gerenciador de Dispositivos do Windows mostrando a porta COM USB-to-UART</figcaption>
  </figure>
</div>

**Passo 5.** Abra a ferramenta de porta serial (aqui usamos a ferramenta MobaXterm como exemplo) e crie uma nova sessão.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png" alt="MobaXterm main window with the recent sessions list, including COM3" loading="lazy" />
    <figcaption>Janela principal do MobaXterm com a lista de sessões recentes</figcaption>
  </figure>
</div>

**Passo 6.** Selecione a ferramenta Serial.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png" alt="MobaXterm session type chooser with Serial highlighted" loading="lazy" />
    <figcaption>Seletor de tipo de sessão do MobaXterm com Serial selecionado</figcaption>
  </figure>
</div>

**Passo 7.** Selecione a porta serial correspondente, defina a taxa de baud para 115200 e clique em "OK".

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug1.png" alt="Serial console configured for 115200 baud" loading="lazy" />
    <figcaption>Console serial configurado para 115200 baud</figcaption>
  </figure>
</div>

**Passo 8.** Faça login no seu reComputer J601 com o nome de usuário e a senha.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug2.png" alt="Jetson serial console login prompt" loading="lazy" />
    <figcaption>Prompt de login do console serial do Jetson</figcaption>
  </figure>
</div>

#### Linux

**Passo 1.** Conecte o J601 ao PC Linux por meio de um cabo de dados USB-C.

**Passo 2.** Encontre o dispositivo serial:

```bash
ls /dev/ttyUSB*
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_debug2.PNG" alt="Linux USB serial devices for the J601 debug connection" loading="lazy" />
    <figcaption>Dispositivos seriais USB no Linux para a conexão de depuração do J601</figcaption>
  </figure>
</div>

**Passo 3.** Conecte-se ao console serial:

```bash
screen /dev/ttyUSB0 115200
```

Agora você deve ver a saída do console serial do J601 e pode fazer login com seu nome de usuário e senha.

## GMSL

A Robotics J601 possui um cabeçalho de expansão de câmera GMSL que suporta até **8 câmeras GMSL** simultaneamente, possibilitando aplicações de visão robótica com múltiplas câmeras.

### Modelos de câmera GMSL compatíveis

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### Conexão de hardware

Conecte a placa de expansão GMSL ao cabeçalho de expansão de câmera na placa carrier J601 e, em seguida, conecte suas câmeras GMSL à placa de expansão.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/GMSL_connect.png" alt="J601 board with the heatsink fan and the 40-pin cable fitted, and the two GMSL connectors boxed" loading="lazy" />
    <figcaption>Placa de expansão GMSL e fiação das câmeras na J601</figcaption>
  </figure>
</div>

### Instruções de uso

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



<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl_camera.png" alt="Tabela de suporte de câmera GMSL do J601: modelos Sensing SG3S 3G e SG2/SG8S 6G com resoluções, além do Orbbec Gemini 335Lg" loading="lazy" />
    <figcaption>Saída de stream da câmera GMSL do J601</figcaption>
  </figure>
</div>



<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl.png" alt="Quadro de câmera GMSL em uma janela de vídeo com a saída do media-ctl no terminal" loading="lazy" />
    <figcaption>Exibição da câmera GMSL do J601</figcaption>
  </figure>
</div>

### Usar a câmera do Gemini 335Lg

```bash
# Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
# Unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

Na primeira vez que você ligá-la, talvez seja necessário atualizar o firmware. Ao abrir o fluxo de dados, você pode visualizar o vídeo da câmera.

## UART

O Robotics J601 fornece uma interface UART por meio de um conector padrão JST para comunicação serial com dispositivos externos. A porta UART está conectada a `/dev/ttyTHS1` no sistema Jetson com taxa de baud padrão de 115200.

### Conexão de hardware

Para comunicação UART, conecte a ferramenta USB‑para‑TTL de acordo com a seguinte fiação:

- TX → RX
- RX → TX
- GND → GND

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png" alt="Conector UART do J601 e fiação USB-para-TTL" loading="lazy" />
    <figcaption>Conector UART do J601 e fiação USB-para-TTL</figcaption>
  </figure>
</div>

### Instruções de uso

Conecte a ferramenta USB‑para‑TTL à porta UART do Robotics J601 e ao PC, depois abra a ferramenta de porta serial no PC e defina a taxa de baud para **115200**.

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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png" alt="Conector UART do J601 e fiação USB-para-TTL" loading="lazy" />
    <figcaption>Conector UART do J601 e fiação USB-para-TTL</figcaption>
  </figure>
</div>

## I2S

O Robotics J601 fornece uma interface de áudio I2S com saída de amplificador e entrada de microfone para reprodução e gravação de áudio. A interface I2S é exposta por meio do conector J14 JST GH-1.25.

### Definição de pinos

| Pin # | Module Pin Name | Module Pin # | Usage/Description | Type/Dir |
| --- | --- | --- | --- | --- |
| 1 | - | - | Fonte de alimentação 3V3 | Power |
| 2 | I2S2_DIN | F6 | Porta de Áudio I2S2 2 Dados de Entrada (nível convertido de 1,8V para 3,3V) | Input |
| 3 | I2S2_FS | E4 | Porta de Áudio I2S2 2 Clock Esquerda/Direita (nível convertido de 1,8V para 3,3V) | Bidir |
| 4 | I2S2_CLK | G4 | Porta de Áudio I2S2 2 Clock (nível convertido de 1,8V para 3,3V) | Bidir |
| 5 | I2S2_DOUT | F5 | Porta de Áudio I2S2 2 Dados de Saída (nível convertido de 1,8V para 3,3V) | Output |
| 6 | - | - | Terra | Ground |

### Conexão de hardware

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2s_connect.png" alt="Conexão do conector I2S do J601" loading="lazy" />
    <figcaption>Conexão do conector I2S do J601</figcaption>
  </figure>
</div>

### Instruções de uso

**Passo 1.** Configure o mux de áudio I2S2 e teste a saída de tom:

```bash
# Configure I2S2 mux
amixer -c 2 sset "I2S2 Mux" "ADMAIF1"

# Play a 440Hz sine wave test tone (one iteration)
speaker-test -D hw:2,0 -c 2 -r 48000 -t sine -f 440 -l 1
```

:::info
A flag `-l 1` significa que o tom de teste será reproduzido apenas uma vez e depois será interrompido.
:::

**Passo 2.** Reproduza seu próprio arquivo de áudio:

```bash
aplay -D hw:2,0 -c 2 -r 48000 your_audio_file.wav
```

:::note
Substitua `your_audio_file.wav` pelo caminho do seu arquivo de áudio real. Certifique-se de que o formato do arquivo de áudio corresponda à taxa de amostragem especificada (48000 Hz) e à contagem de canais (2).
:::


## I2C

O Robotics J601 fornece uma interface I2C por meio do conector J12 JST GH-1.25, permitindo fácil conexão de sensores e periféricos para expansão do sistema.

### Definição de pinos

| Pin # | Module Pin Name | Module Pin # | Usage/Description | Type/Dir |
| --- | --- | --- | --- | --- |
| 1 | - | - | Terra | Ground |
| 2 | DP_AUX_CH2_N | E18 | I2C4_SDA_3V3 | Bidir |
| 3 | DP_AUX_CH2_P | E19 | I2C4_SCL_3V3 | Output |
| 4 | - | - | Fonte de alimentação 3V3 | Power |

:::info
O conector I2C usa o barramento **I2C4** no SoC Jetson AGX Thor.
:::

### Conexão de hardware

Conecte seu dispositivo I2C à interface I2C na placa carrier:

- Ground → Ground (Pino 1)
- SDA → SDA (Pino 2)
- SCL → SCL (Pino 3)
- Power → 3V3 (Pino 4)

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_connect.png" alt="Fiação de sensor I2C do J601" loading="lazy" />
    <figcaption>Fiação de sensor I2C do J601</figcaption>
  </figure>
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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c1.PNG" alt="Enumeração de barramentos I2C em Linux no J601" loading="lazy" />
    <figcaption>Enumeração de barramentos I2C em Linux no J601</figcaption>
  </figure>
</div>

**Passo 3.** Faça uma varredura por dispositivos no barramento I2C:

```bash
sudo i2cdetect -y -r 1
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c2.png" alt="Varredura de endereços de dispositivos I2C no J601" loading="lazy" />
    <figcaption>Varredura de endereços de dispositivos I2C no J601</figcaption>
  </figure>
</div>

**Passo 4.** Leia um registrador de um dispositivo I2C. Por exemplo, para ler o registrador `0x00` de um dispositivo no endereço `0x58` no barramento `i2c-1`:

```bash
sudo i2cget -y 1 0x58 0x00
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c3.png" alt="Resultado de leitura de registrador I2C" loading="lazy" />
    <figcaption>Resultado de leitura de registrador I2C</figcaption>
  </figure>
</div>

## GPIO (GPI/GPO)

O Robotics J601 fornece interfaces GPIO digitais por meio de dois conectores JST GH-1.25: um conector **GPI (General Purpose Input)** J20 com 4 canais de entrada e um conector **GPO (General Purpose Output)** J17 com 4 canais de saída. Todos os sinais GPIO têm nível convertido de 1,8V (domínio do SoC) para 3,3V, tornando-os diretamente compatíveis com sensores e periféricos padrão de 3,3V.

O [esquemático do J601 V1.0](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf) identifica **GPO como J17** e **I2S como J14**. Verifique esses rótulos em relação à revisão da sua placa antes de fazer a fiação.

### Definição de pinos

#### Conector GPI - J20 (Entrada)

| Pin # | Module Pin Name | Module Pin # | Usage/Description | Type/Dir |
| --- | --- | --- | --- | --- |
| 1 | - | - | Fonte de alimentação 3V3 | Power |
| 2 | SPI2_MISO | D62 | GPI_1_3V3 (nível convertido de 1,8V para 3,3V) | Input, 3.3V |
| 3 | GPIO64 | J6 | GPI_2_3V3 (nível convertido de 1,8V para 3,3V) | Input, 3.3V |
| 4 | GPIO65 | J7 | GPI_3_3V3 (nível convertido de 1,8V para 3,3V) | Input, 3.3V |
| 5 | GPIO49 | G6 | GPI_4_3V3 (nível convertido de 1,8V para 3,3V) | Input, 3.3V |
| 6 | - | - | Terra | Ground |

#### Conector GPO - J17 (Saída)

| Pin # | Module Pin Name | Module Pin # | Usage/Description | Type/Dir |
| --- | --- | --- | --- | --- |
| 1 | - | - | Fonte de alimentação 3V3 | Power |
| 2 | GPIO13 | G7 | GPO_1_3V3 (nível convertido de 1,8V para 3,3V) | Output, 3.3V |
| 3 | SPI2_CS0_N | D60 | GPO_2_3V3 (nível convertido de 1,8V para 3,3V) | Output, 3.3V |
| 4 | SPI2_CLK | E61 | GPO_3_3V3 (nível convertido de 1,8V para 3,3V) | Output, 3.3V |
| 5 | SPI2_MOSI | F60 | GPO_4_3V3 (nível convertido de 1,8V para 3,3V) | Output, 3.3V |
| 6 | - | - | Terra | Ground |

### Conexão de hardware

Conecte seu dispositivo GPIO ao conector GPI ou GPO na placa carrier usando um cabo GH-1.25:

- VCC → 3V3 (Pino 1)
- Sinal → pino GPI/GPO (Pinos 2–5)
- GND → Terra (Pino 6)

### Instruções de uso

:::note
Os pinos GPI e GPO são acessíveis via `libgpiod` (`gpioset`/`gpioget`). Você pode encontrar o chip GPIO e os números de linha usando `gpioinfo`.
:::

**Passo 1.** Instale os utilitários GPIO:

```bash
sudo apt update
sudo apt-get install gpiod
```

**Passo 2.** Visualize todos os chips e linhas GPIO disponíveis:

```bash
gpioinfo
```

**Passo 3.** Leia um pino GPI. Por exemplo, para ler o GPI_2 (GPIO64, pino 3 em J20):

```bash
# Replace <chip> and <line> with the actual GPIO chip/line numbers from gpioinfo
gpioget <chip> <line>
```

**Passo 4.** Escreva em um pino GPO. Por exemplo, para definir o GPO_1 (GPIO13, pino 2 em J17) como nível alto:

```bash
# Replace <chip> and <line> with the actual GPIO chip/line numbers from gpioinfo
gpioset <chip> <line>=1
```

**Passo 5.** Use os pinos em um script Python com a biblioteca `gpiod`:

```python
import gpiod

# Replace chip and line numbers based on your gpioinfo output
chip = gpiod.Chip('<chip_number>')

# Read GPI example
gpi_line = chip.get_line(<gpi_line_number>)
gpi_line.request(consumer="gpi_test", type=gpiod.LINE_REQ_DIR_IN)
print("GPI value:", gpi_line.get_value())

# Write GPO example
gpo_line = chip.get_line(<gpo_line_number>)
gpo_line.request(consumer="gpo_test", type=gpiod.LINE_REQ_DIR_OUT)
gpo_line.set_value(1)  # Set high
```

## CAN

CAN (Controller Area Network) é um padrão robusto de barramento veicular que permite que microcontroladores e dispositivos se comuniquem entre si sem um computador host. Com um módulo **T5000**, o Robotics J601 fornece **quatro interfaces CAN FD** (CAN0–CAN3) por meio de conectores JST GH-1.25. Um módulo **T4000** oferece suporte a **duas interfaces CAN**. Verifique as interfaces expostas pelo seu BSP com `ip -details link show type can` antes de escolher portas para um teste.

### Mapeamento de Pinos do Conector CAN

| Interface CAN | Conector | Pino 1 | Pino 2 | Pino 3 | Pino 4 |
| --- | --- | --- | --- | --- | --- |
| CAN0 | J31 | Terra | CAN0_L_ISO | CAN0_H_ISO | Alimentação 5V |
| CAN1 | J30 | Terra | CAN1_L_ISO | CAN1_H_ISO | Alimentação 5V |
| CAN2 | J28 | Terra | CAN2_L_ISO | CAN2_H_ISO | Alimentação 5V |
| CAN3 | J25 | Terra | CAN3_L_ISO | CAN3_H_ISO | Alimentação 5V |

:::info
As interfaces CAN são isoladas. Cada conector fornece uma alimentação de 5V no pino 4. A tabela do conector descreve a fiação da placa carrier; o módulo instalado determina quais interfaces estão disponíveis.
:::

### Controle do Resistor de Terminação de 120Ω

Cada interface CAN possui um resistor de terminação de 120Ω controlado por software. Os mapeamentos de GPIO são os seguintes:

| Interface | Chip GPIO | Linha GPIO | Nome de Controle |
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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gpioinfo.PNG" alt="J601 GPIO lines used for termination control" loading="lazy" />
    <figcaption>Linhas GPIO do J601 usadas para controle de terminação</figcaption>
  </figure>
</div>

### Comunicação CAN Clássica

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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c1.png" alt="J601 classic CAN communication result" loading="lazy" />
    <figcaption>Resultado da comunicação CAN clássica no J601</figcaption>
  </figure>
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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c2.png" alt="J601 CAN FD communication result" loading="lazy" />
    <figcaption>Resultado da comunicação CAN FD no J601</figcaption>
  </figure>
</div>

### Script de Teste Abrangente de CAN

O script a seguir realiza um teste completo de CAN FD, incluindo verificação de dependências, configuração de interfaces, verificação básica de comunicação e um teste de estresse de 10 segundos.

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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c3.png" alt="J601 CAN test script output" loading="lazy" />
    <figcaption>Saída do script de teste CAN no J601</figcaption>
  </figure>
</div>



## RS485

A placa carrier reComputer J601 possui uma porta RS-485 isolada dedicada, exposta por meio do conector J24 JST GH-1.25 de 4 pinos. As definições de pinos são as seguintes:

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/rs485-jstpin.png" alt="J601 J24 RS-485 connector pinout" loading="lazy" />
    <figcaption>Pinagem do conector RS-485 J601 J24</figcaption>
  </figure>
</div>

### Conexão de hardware

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/jst485-c.png" alt="USB-to-RS485 adapter wired to Data+(A) and Data-(B) on the J601 terminal block" loading="lazy" />
    <figcaption>Fiação do cabeçalho RS-485 dedicado J601</figcaption>
  </figure>
</div>

Aqui usamos um `usb-to-rs485` para testar:

```bash
#[Jetson] Init UART: 115200 baud, 8N1, raw mode, no flow control.
sudo stty -F /dev/ttyAMA10 115200 cs8 -cst -parenb -ixon -ixoff -crtscts raw -echo
# [Jetson] Enable and verify RS485 mode via ioctl (TIOCSRS485 / TIOCGRS485).
sudo python3 -c 'import os,fcntl,struct; fd=os.open("/dev/ttyAMA10",os.O_RDWR|os.O_NOCTTY); fcntl.ioctl(fd,0x542F,struct.pack("IIIIIIII",3,0,20,0,0,0,0,0)); out=bytearray(32); fcntl.ioctl(fd,0x542E,out,True); print(struct.unpack("IIIIIIII",out)); os.close(fd)'
# Verification output:(3, 0, 20, 0, 0, 0, 0, 0)

#[PC] Init USB UART with identical parameters.
sudo stty -F /dev/ttyUSB0 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
#[Jetson] Listen for data.
sudo cat /dev/ttyAMA10
#[PC] Send message.
echo "hello from pc" | sudo tee /dev/ttyUSB0 >/dev/null

#[PC] Listen for data.
sudo cat /dev/ttyUSB0
#[Jetson] Send message.、
echo "hello from jetson" | sudo tee /dev/ttyAMA10 >/dev/null
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-1.png" alt="RS-485 port 1 test: received pattern data and &quot;hello from pc&quot; in the serial console" loading="lazy" />
    <figcaption>Conexão da interface J601 485 1</figcaption>
  </figure>
</div>

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-2.png" alt="RS-485 port 2 test: received pattern data and &quot;hello from pc&quot; in the serial console" loading="lazy" />
    <figcaption>Conexão da interface J601 485 2</figcaption>
  </figure>
</div>



## DB9 (RS232 / RS422 / RS485) {#db9}

A Robotics J601 fornece uma interface serial DB9 selecionável por software. A porta DB9 está conectada a `/dev/ttyAMA9` no sistema Jetson e pode ser configurada como RS232, RS422 ou RS485 ajustando a chave DIP SW3.

### Definição de pinos

A função de cada pino DB9 depende do modo de comunicação selecionado. Consulte a tabela e o diagrama do conector abaixo antes de fazer a fiação do adaptador.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/db9_config.png" alt="DB9 pin numbering with the RS-232 / RS-422 / RS-485 pin assignment table for the MODE settings" loading="lazy" />
    <figcaption>Conexão da interface de configuração DB9 J601</figcaption>
  </figure>
</div>

### Modo RS485
### Configuração de hardware

Mude a chave na parte inferior da placa para o modo RS485, como mostrado na figura abaixo.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-mode.png" alt="SW2 switch with the RS485 Mode OFF_1 / ON_0 positions boxed" loading="lazy" />
    <figcaption>Conexão da interface no modo J601 485</figcaption>
  </figure>
</div>

### Conexão de hardware

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c.png" alt="USB-to-RS485 adapter wired to Data+(A) and Data-(B) on the J601 terminal block" loading="lazy" />
    <figcaption>Conexão da interface J601 485 c</figcaption>
  </figure>
</div>

:::tip
Para a fiação RS485, conecte o adaptador USB-RS485 `A/D+` ao pino 2 do DB9 e `B/D-` ao pino 1 do DB9. Alguns adaptadores USB-RS485 rotulam A/B de forma invertida. Se o Jetson receber bytes aleatórios enquanto o PC não está enviando, inverta A e B e teste novamente.
:::

### Teste de comunicação

Aqui usamos o minicom para realizar o teste：

```bash
# Set pin 6 on GPIO chip 3 to low level to enable the DB9 transceiver
sudo gpioset 3 6=0

# On Jetson terminal
sudo minicom -D /dev/ttyAMA9 -b 115200

# On PC terminal
sudo minicom -D /dev/ttyACM0 -b 115200
```

:::tip
Para ver o texto que você digita no minicom, é necessário ativar o recurso Local Echo. Por padrão, o minicom não exibe as teclas pressionadas, portanto isso é um problema muito comum.
- passo 1. Pressione `Ctrl+A`
- passo 2. Em seguida, pressione `E`

:::

Teste o PC enviando uma mensagem para o Jetson. 


<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c1.png" alt="minicom windows on the PC and the Jetson exchanging &quot;hello jetson&quot; over RS-485" loading="lazy" />
    <figcaption>Conexão de hardware RS-485 DB9 J601</figcaption>
  </figure>
</div>

Como o RS485 é um protocolo half-duplex, para testar se o Jetson pode enviar informações para o PC via RS485, é necessário ativar o modo RS485.
- passo 1. Pressione `Ctrl+A`
- passo 2. Em seguida, pressione `O` para abrir a opção de configuração.


<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c2.png" alt="Serial tool configuration menu for RS-485" loading="lazy" />
    <figcaption>Menu de configuração da ferramenta serial para RS-485</figcaption>
  </figure>
</div>

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c3.png" alt="Serial tool RS-485 configuration settings" loading="lazy" />
    <figcaption>Configurações de RS-485 da ferramenta serial</figcaption>
  </figure>
</div>

Por fim, você poderá enviar mensagens do Jetson para o seu PC.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-c4.png" alt="RS-485 received data in the host serial console" loading="lazy" />
    <figcaption>Dados RS-485 recebidos no console serial do host</figcaption>
  </figure>
</div>

### Modo RS232 

### Configuração de hardware

Mude a chave na parte inferior da placa para o modo RS232, como mostrado na figura abaixo.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-mode.png" alt="SW2 mode switch set for RS-232 on the J601 board" loading="lazy" />
    <figcaption>Conexão da interface no modo J601 232</figcaption>
  </figure>
</div>

### Conexão de hardware

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c.png" alt="TX, RX and GND wired between the J601 RS-232 header and the USB-to-TTL adapter" loading="lazy" />
    <figcaption>Conexão da interface J601 232 c</figcaption>
  </figure>
</div>

:::tip
- TX → RX
- RX → TX
- GND → GND
:::

### Teste de comunicação

Aqui usamos o minicom para realizar o teste：

```bash
# Set pin 6 on GPIO chip 3 to low level to enable the DB9 transceiver
sudo gpioset 3 6=0

# On Jetson terminal
sudo minicom -D /dev/ttyAMA9 -b 115200

# On PC terminal
sudo minicom -D /dev/ttyACM0 -b 115200
```

:::tip
Para ver o texto que você digita no minicom, é necessário ativar o recurso Local Echo. Por padrão, o minicom não exibe as teclas pressionadas, portanto isso é um problema muito comum.
- passo 1. Pressione `Ctrl+A`
- passo 2. Em seguida, pressione `E`
:::

Teste o PC enviando uma mensagem para o Jetson. 


<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c1.png" alt="minicom windows on the PC and the Jetson exchanging &quot;Hello Jetson Rs232test&quot;" loading="lazy" />
    <figcaption>Posição da chave de modo RS-232 DB9 J601</figcaption>
  </figure>
</div>


Também ative o modo de teste.
<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c2.png" alt="minicom serial port setup with RS485 Enable set to Yes during the RS-232 test" loading="lazy" />
    <figcaption>Conexão RS-232 do host J601</figcaption>
  </figure>
</div>

Envie mensagens do Jetson para o seu PC.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/232-c3.png" alt="RS-232 received data in the host serial console" loading="lazy" />
    <figcaption>Dados RS-232 recebidos no console serial do host</figcaption>
  </figure>
</div>

### Modo RS422

### Configuração de hardware

Mude a chave na parte inferior da placa para o modo RS422, como mostrado na figura abaixo.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-mode.png" alt="SW2 mode switch set for RS-422 on the J601 board" loading="lazy" />
    <figcaption>Conexão da interface no modo J601 422</figcaption>
  </figure>
</div>

### Conexão de hardware

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-c.png" alt="RX+, RX-, TX+ and TX- wired between the J601 RS-422 header and the USB adapter, with a common GND" loading="lazy" />
    <figcaption>Conexão da interface J601 422 c</figcaption>
  </figure>
</div>

:::tip
- RXD+ ←─────→  TXD+  
- RXD- ←─────→  TXD-  
- TXD+ ←─────→  RXD+  
- TXD- ←─────→  RXD-
- GND  ←─────→  GND
:::

### Teste de comunicação

Aqui usamos o minicom para realizar o teste：

```bash
# Set pin 6 on GPIO chip 3 to low level to enable the DB9 transceiver
sudo gpioset 3 6=0

# On Jetson terminal
sudo minicom -D /dev/ttyAMA9 -b 115200

# On PC terminal
sudo minicom -D /dev/ttyACM0 -b 115200
```

:::tip
Para ver o texto que você digita no minicom, é necessário ativar o recurso Local Echo. Por padrão, o minicom não exibe as teclas pressionadas, portanto isso é um problema muito comum.
- passo 1. Pressione `Ctrl+A`
- passo 2. Em seguida, pressione `E`
:::

Teste o PC para enviar uma mensagem para o Jetson. 


<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-c1.png" alt="minicom no PC e o Jetson mostrando a primeira troca de teste RS-422" loading="lazy" />
    <figcaption>Conexão de interface J601 422 c1</figcaption>
  </figure>
</div>


Também ative o modo de teste.
<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/422-c2.png" alt="ambas as janelas do minicom após o teste RS-422, cada uma mostrando &quot;Hello Jetson RS422 Test&quot;" loading="lazy" />
    <figcaption>Conexão de interface J601 422 c2</figcaption>
  </figure>
</div>


## RGB {#rgb}

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
<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/grb.gif" alt="Teste de cor do LED RGB de usuário J601" loading="lazy" />
    <figcaption>Teste de cor do LED RGB de usuário J601</figcaption>
  </figure>
</div>

## Ethernet

A placa carrier Robotics J601 suporta **4× conexões 10GbE RJ45 com T5000**, ou **3× 10GbE com T4000**. Use um sistema par separado e um cabo adequado para testar uma porta.

### Conexão de hardware

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/ethnet.png" alt="Quatro portas Ethernet RJ45 e dois conectores M12 no painel frontal do J601" loading="lazy" />
    <figcaption>Localização das portas Ethernet RJ45 do J601</figcaption>
  </figure>
</div>

### Instruções de uso

Instale `iperf3` em ambos os sistemas. No sistema par, inicie o servidor:

```bash
sudo apt install iperf3
iperf3 -s
```

No J601, use `ip -br address` para identificar o endereço atribuído à porta em teste e, em seguida, execute:

**Teste de velocidade de upload:**

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed1.png" alt="Medição de throughput de upload Ethernet do J601" loading="lazy" />
    <figcaption>Medição de throughput de upload Ethernet do J601</figcaption>
  </figure>
</div>

**Teste de velocidade de download:**

```bash
iperf3 -c <server_ip> -B <bind_ip> -R
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed2.png" alt="Medição de throughput de download Ethernet do J601" loading="lazy" />
    <figcaption>Medição de throughput de download Ethernet do J601</figcaption>
  </figure>
</div>

:::info
- `<server_ip>` é o endereço IP do servidor iperf3. O cliente se conectará a esse servidor para realizar um teste de largura de banda.
- `<bind_ip>` vincula o endereço IP local especificado como a origem do tráfego de teste.
- A opção `-R` inverte a direção do teste para medição da velocidade de download.
:::

## M.2 Key E

A interface M.2 Key E é um conector M.2 padrão usado principalmente para conectar módulos sem fio, como Wi-Fi e Bluetooth, para expandir as capacidades de comunicação sem fio.

### Conexão de hardware

Com a alimentação desconectada, instale um módulo Wi-Fi/Bluetooth M.2 2230 compatível no slot Key E e conecte suas antenas. O exemplo de firmware abaixo se aplica a um módulo **RTL8822CE**; outros módulos exigem seu próprio driver e firmware.

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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_1.png" alt="Varredura de rede Wi-Fi no J601" loading="lazy" />
    <figcaption>Varredura de rede Wi-Fi no J601</figcaption>
  </figure>
</div>

**Passo 5.** Conecte-se a uma rede Wi-Fi:

```bash
sudo nmcli device wifi connect "your WiFi name" password "WiFi password" ifname wlP1p1s0
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_2.png" alt="Resultado da conexão Wi-Fi do J601" loading="lazy" />
    <figcaption>Resultado da conexão Wi-Fi do J601</figcaption>
  </figure>
</div>

### Bluetooth

A funcionalidade Bluetooth está disponível por meio do slot M.2 Key E.

**Passo 1.** Abra a ferramenta de controle Bluetooth:

```bash
bluetoothctl
```

**Passo 2.** Ligue e procure dispositivos Bluetooth próximos:

```bash
power on
scan on
```

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/blue_tooth.png" alt="Varredura de dispositivos Bluetooth no J601" loading="lazy" />
    <figcaption>Varredura de dispositivos Bluetooth no J601</figcaption>
  </figure>
</div>

## Módulo 5G (M.2 Key B)

O slot M.2 Key B suporta expansão de módulo 5G, permitindo conectividade celular de alta velocidade para cenários de robótica e IA de borda.

### Conexão de hardware

Instale o módulo 5G no slot M.2 Key B e conecte as antenas.

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/5g_c1.png" alt="Módulo celular instalado no slot M.2 Key B do J601" loading="lazy" />
    <figcaption>Módulo celular instalado no slot M.2 Key B do J601</figcaption>
  </figure>
</div>

### Instruções de uso

**Passo 1.** Abra o console serial do módulo 5G:

```bash
sudo apt install -y minicom
sudo minicom -D /dev/ttyUSB3
```

**Passo 2.** Entre no modo interativo pressionando **Ctrl+A** e depois **E**.

**Passo 3.** Teste comandos AT:

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

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/lsusb_5g.png" alt="saída do lsusb listando o modem Quectel EM060K-EA no barramento USB" loading="lazy" />
    <figcaption>Identificação do módulo celular e saída de comandos AT</figcaption>
  </figure>
</div>

### Nano SIM

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/sim.png" alt="Painel de rede móvel das Configurações do Ubuntu mostrando a operadora CHN-CT e o modo de rede" loading="lazy" />
    <figcaption>Localização do slot Nano SIM do J601</figcaption>
  </figure>
</div>

### GPS

A disponibilidade de GPS e os comandos AT dependem do módulo celular instalado. O exemplo abaixo usa comandos `AT+QGPS` no estilo Quectel; verifique o suporte e as atribuições de porta serial na documentação do seu módulo.

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

**Passo 4.** Depois que o GPS estiver ativado, os dados de satélite serão transmitidos pela porta de dados do GPS (normalmente `/dev/ttyUSB1`). Leia os dados NMEA brutos:

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
Certifique-se de ter uma visão desobstruída do céu para aquisição do sinal de GPS. Pode levar alguns minutos para obter um posicionamento válido.
:::

## Recursos

A [coleção de recursos J601](/pt-br/jetson/recomputer_robotics_j601/getting_started/#recursos) fornece o datasheet da placa carrier, o esquemático V1.0, o modelo mecânico STEP e o código-fonte do BSP Linux_for_Tegra. Use o esquemático para roteamento de sinais e designadores de referência de conectores.

## Recursos Relacionados

- [Interfaces e pinouts do reComputer Robotics J401](/pt-br/recomputer_jetson_robotics_j401_getting_started/)
- [Implementar comunicação EtherCAT no reComputer](/pt-br/recomputer_ethercat_communication/)
- [Ajustar finamente o GR00T N1.7 e implantar no Robotics J601](/pt-br/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/)
- [Repositório wiki-documents e discussões](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

## Suporte Técnico e Discussão de Produtos

Agradecemos por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed community forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contact Seeed support"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Discord community"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Wiki product discussion"></a>
</div>

</div>
