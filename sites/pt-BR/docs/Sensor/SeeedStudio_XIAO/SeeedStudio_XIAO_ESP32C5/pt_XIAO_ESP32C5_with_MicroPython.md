---
title: Seeed Studio XIAO ESP32-C5 com Micropython
description: ''
keywords:
  - xiao
  - esp32c5
  - micropython
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_with_micropyhton
last_update:
  date: 12/22/2025
  author: Zeller
createdAt: '2025-12-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_with_micropyhton/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[MicroPython](https://github.com/micropython/micropython/wiki) é um interpretador Python com suporte para emissão de código nativo para trechos de código com requisitos críticos de desempenho. Ele fornece um subconjunto dos recursos principais do Python 3.6+, otimizados para microcontroladores e sistemas com recursos limitados. Ele é diferente do CPython, e você pode ler mais sobre as diferenças na página [MicroPython vs CPython differences](https://github.com/micropython/micropython/wiki/Differences).

## Usando MicroPython com o XIAO ESP32-C5

Em seguida, vou guiá-lo sobre como usar o **MicroPython** no **XIAO ESP32-C5** e programá-lo com o [Thonny IDE](https://thonny.org/), com base no sistema operacional Windows.

### Preparação de Hardware

Antes de começar, você precisa preparar uma placa de desenvolvimento XIAO ESP32-C5.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Implantando o Firmware MicroPython

Em seguida, vamos guiá-lo sobre como implantar o firmware MicroPython no XIAO ESP32-C5.

#### Instalar o esptool

Antes de instalar o firmware MicroPython para o ESP32-C5, você precisa instalar primeiro o [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32c5/). Usaremos o esptool.py para apagar e gravar o firmware na placa de desenvolvimento.<br/>

Abra um terminal em qualquer pasta e insira o seguinte comando.

```bash
pip install esptool
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_1.png" style={{width:800, height:'auto'}}/></div>

#### Apagando

:::tip
No sistema operacional Windows, o programa instalado pode ter sido renomeado de `esptool.py` para `esptool`.
:::

Se você estiver instalando o MicroPython no **XIAO ESP32-C5** pela primeira vez, use o comando a seguir para apagar primeiro a Flash.<br/>

```bash
esptool.py eraase_flash
```

:::tip
O `esptool.py` tentará detectar automaticamente a porta serial com o ESP32.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_2.png" style={{width:800, height:'auto'}}/></div><br/>

 Mas se isso falhar ou se houver mais de um dispositivo baseado em Espressif conectado ao seu computador, então passe a opção --port com o nome da porta serial de destino. Por exemplo:

```bash
esptool.py --port PORTNAME erase_flash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_3.png" style={{width:800, height:'auto'}}/></div><br/>

#### Gravando

**Passo 1.** Clique no link, selecione uma versão adequada do firmware MicroPython para o ESP32-C5 para fazer o download; aqui foi escolhida a versão v1.27.0. [ESP32_GENERIC_C5 MicroPython](https://micropython.org/download/ESP32_GENERIC_C5/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_4_1.png" style={{width:800, height:'auto'}}/></div><br/>

**Passo 2.** implante o firmware na placa, iniciando no endereço 0x2000.

Para evitar perder o controle do firmware, recomenda-se que você coloque o firmware MicroPython baixado em uma pasta separada e, em seguida, clique com o botão direito nessa pasta para abrir um terminal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_5.png" style={{width:800, height:'auto'}}/></div><br/>

Digite o comando abaixo e substitua `ESP32_BOARD_NAME-DATE-VERSION.bin` por `ESP32_GENERIC_C5-20251209-v1.27.0.bin`.

```bash
esptool.py --baud 460800 write_flash 0x2000 ESP32_BOARD_NAME-DATE-VERSION.bin
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_6.png" style={{width:800, height:'auto'}}/></div><br/>

Se o esptool.py não conseguir detectar automaticamente a porta serial, você poderá passá-la explicitamente na linha de comando.

```bash
esptool.py --port PORTNAME --baud 460800 write_flash 0x2000 ESP32_BOARD_NAME-DATE-VERSION.bin
```

- No Windows, o nome da porta geralmente é semelhante a `COM4`.
- No Linux, o nome da porta geralmente é semelhante a `/dev/ttyUSB` ou `/dev/ttyACM0`.
- No Mac, o nome da porta geralmente é semelhante a `/dev/cu.usbmodem01`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_7.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
Se a gravação começar e depois falhar no meio do processo, tente remover a opção `--baud 460800` para gravar na velocidade padrão mais lenta.
:::

### Instalar o [Thonny IDE](https://thonny.org/)

Escolha a versão apropriada para instalação. Aqui, estou instalando em um sistema Windows, então selecionei a versão para Windows.

Siga as instruções para a versão desejada do Python.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:800, height:'auto'}}/></div>

Em seguida, basta seguir as etapas padrão para configuração.

### Exemplo de Piscar LED

Aqui vamos mostrar como acender o LED L no XIAO ESP32-C5 usando MicroPython com o Thonny IDE.

#### **Passo 1.** Configuração do Interpretador

- Abra o Thonny IDE, depois clique no canto inferior direito da interface para acessar as opções de **Configure interpreter**. Selecione MicroPython (generic) e Port

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_8.png" style={{width:800, height:'auto'}}/></div><br/>

Após uma conexão bem-sucedida, as informações da versão do firmware MicroPython serão exibidas na janela do shell abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_9.png" style={{width:800, height:'auto'}}/></div><br/>

#### **Passo 2.** Novo arquivo led_blink.py

- Clique em **File** -> **New** no canto superior esquerdo para criar um novo arquivo, depois pressione **Ctrl + S** para nomeá-lo como led_blink e salvá-lo no seu computador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_10.png" style={{width:400, height:'auto'}}/></div><br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_11.png" style={{width:400, height:'auto'}}/></div><br/>

- Clique em **View** -> **Files** no canto superior esquerdo para marcá-lo (um **√** aparecerá ao lado) e uma janela exibindo o local onde seus arquivos estão armazenados aparecerá no lado esquerdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_12.png" style={{width:400, height:'auto'}}/></div><br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_13_1.png" style={{width:600, height:'auto'}}/></div><br/>

#### **Passo 3.** Escrever o Código de Exemplo

Para o LED L no XIAO ESP32-C5, o pino correspondente é o GPIO27, e ele é aceso com um sinal em nível baixo.

- Copie o código de exemplo para o arquivo `led_blink.py`.

```py
from machine import Pin
import time

# Define GPIO27
led = Pin(27, Pin.OUT)

while True:
    # Low-level illumination
    led.value(0)
    print("LED ON")
    time.sleep(1) # Wait for 1 second

    # High-level extinction
    led.value(1)
    print("LED OFF")
    time.sleep(1) 
```

#### **Passo 4.** Executar o Código

- Clique no ícone mostrado no canto superior direito ou pressione F5 para executar o código, e as informações do LED serão impressas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_14_1.png" style={{width:600, height:'auto'}}/></div><br/>

- O LED L onboard piscará em intervalos de 1 segundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:400, height:'auto'}}/></div>

### Exemplo de Conexão Wi-Fi de 5 GHz

O XIAO ESP-C5 suporta Wi-Fi 6 de banda dupla 2,4 GHz e 5 GHz. Este exemplo demonstrará o efeito de conectar a uma rede Wi-Fi de 5 GHz.

- Crie um novo arquivo chamado `wifi_connect.py` e copie o código de exemplo a seguir para ele.

```py
import network
import time


def connect_wifi(ssid, password):
    # Create a Station interface (STA_IF = client mode, connects to a router/AP)
    wlan = network.WLAN(network.STA_IF)

    # If already connected, return immediately
    if wlan.isconnected():
        print("Already connected before, skipping connection step.")
        print("Network config:", wlan.ifconfig())
        return True

    # Enable the Wi-Fi interface
    wlan.active(True)

    print(f"Connecting to network: {ssid} ...")
    wlan.connect(ssid, password)

    # Wait for connection with a timeout (e.g., 10 seconds)
    max_wait = 10
    while max_wait > 0:
        if wlan.isconnected():
            break
        max_wait -= 1
        print("Waiting for connection...")
        time.sleep(1)

    # Check connection result
    if wlan.isconnected():
        print("Connected successfully!")
        print("Network config (IP/Mask/Gateway/DNS):", wlan.ifconfig())

        # led.value(0)  # If you want to turn on an LED after connection succeeds, add code here
        return True
    else:
        print("Connection failed. Please check SSID or password.")
        return False


# ==========================================
# Main Program
# ==========================================

# Fill in your Wi-Fi SSID and password here
SSID = "YourWiFiName"
PASSWORD = "YourWiFiPassword"

# Call the function
connect_wifi(SSID, PASSWORD)
```

- Insira o SSID e a PASSWORD do WiFi de 5GHz no seu ambiente, depois execute o código, e as informações de conexão serão impressas.

:::tip
Antes de executar um novo código de exemplo, você precisa clicar no ícone **Stop** no canto superior esquerdo ou pressionar **Ctrl + F2** para sair do ambiente em execução anterior.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_15.png" style={{width:600, height:'auto'}}/></div><br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_6.png" style={{width:600, height:'auto'}}/></div><br/>

Isso prova que é viável para o **XIAO ESP32-C5** se conectar a uma rede WiFi de 5GHz.

### Exemplo de BLE

Este exemplo mostrará a você a funcionalidade BLE do **XIAO ESP32-C5** e demonstrará como descobri-lo e conectar-se a ele usando o aplicativo nRF Connect.

- Crie um novo arquivo chamado `BLE_connect.py` e copie o seguinte código de exemplo para dentro dele.

<details>

<summary>Código de Referência para Conexão BLE</summary>

```py
import bluetooth
import random
import struct
import time
from machine import Pin
from micropython import const

# --- Configuration ---
# Define the LED pin (Using GPIO 27 as per your previous request)
# Active LOW: 0 = On, 1 = Off
LED_PIN = 27
DEVICE_NAME = "XIAO ESP32-C5-BLE"

# --- BLE Constants (UUIDs) ---
# We use standard UUIDs for simplicity, but you can use 128-bit custom UUIDs.
# 0x181A is "Environmental Sensing" Service
_IRQ_CENTRAL_CONNECT = const(1)
_IRQ_CENTRAL_DISCONNECT = const(2)
_IRQ_GATTS_WRITE = const(3)

_FLAG_READ = const(0x0002)
_FLAG_WRITE = const(0x0008)
_FLAG_NOTIFY = const(0x0010)

# Define a Service with one Characteristic (Read/Write/Notify)
# Service UUID: 0x181A
# Characteristic UUID: 0x2A6E (Temperature - just as an example)
_UART_UUID = bluetooth.UUID(0x181A)
_UART_TX = (
    bluetooth.UUID(0x2A6E),
    _FLAG_READ | _FLAG_WRITE | _FLAG_NOTIFY,
)
_UART_SERVICE = (
    _UART_UUID,
    (_UART_TX,),
)

# --- Helper: Advertising Payload Generator ---
def advertising_payload(limited_disc=False, br_edr=False, name=None, services=None, appearance=0):
    payload = bytearray()

    def _append(adv_type, value):
        nonlocal payload
        payload += struct.pack("BB", len(value) + 1, adv_type) + value

    _append(
        0x01,  # Flags
        struct.pack("B", (0x02 if not limited_disc else 0x01) | (0x04 if not br_edr else 0x00)),
    )

    if name:
        _append(0x09, name)  # Complete Local Name

    if services:
        for uuid in services:
            b = bytes(uuid)
            if len(b) == 2:
                _append(0x03, b)  # 16-bit Service Class UUIDs
            elif len(b) == 16:
                _append(0x06, b)  # 128-bit Service Class UUIDs

    if appearance:
        _append(0x19, struct.pack("<h", appearance))

    return payload

# --- BLE Class ---
class BLEPeripheral:
    def __init__(self, ble, name="ESP32"):
        self._ble = ble
        self._ble.active(True)
        self._ble.irq(self._irq)

        # Register services
        ((self._handle_tx,),) = self._ble.gatts_register_services((_UART_SERVICE,))

        self._connections = set()
        self._payload = advertising_payload(name=name, services=[_UART_UUID])

        # Initialize LED
        self._led = Pin(LED_PIN, Pin.OUT)
        self._led.value(1) # Turn OFF initially (High)

        self._advertise()
        print(f"BLE Active. Device Name: {name}")

    def _irq(self, event, data):
        # Track connections so we can send notifications
        if event == _IRQ_CENTRAL_CONNECT:
            conn_handle, _, _ = data
            print(f"New connection: {conn_handle}")
            self._connections.add(conn_handle)
            self._led.value(0) # Turn LED ON (Active Low)

        elif event == _IRQ_CENTRAL_DISCONNECT:
            conn_handle, _, _ = data
            print(f"Disconnected: {conn_handle}")
            self._connections.remove(conn_handle)
            self._led.value(1) # Turn LED OFF
            # Start advertising again to allow new connections
            self._advertise()

        elif event == _IRQ_GATTS_WRITE:
            conn_handle, value_handle = data
            value = self._ble.gatts_read(value_handle)
            if value_handle == self._handle_tx:
                print(f"Received write request: {value}")
                # You can parse 'value' here to control hardware

    def update_value(self, data):
        # Write the local value to the handle
        self._ble.gatts_write(self._handle_tx, data)
        # Notify all connected centrals
        for conn_handle in self._connections:
            self._ble.gatts_notify(conn_handle, self._handle_tx, data)

    def _advertise(self):
        self._ble.gap_advertise(100, adv_data=self._payload)
        print("Advertising...")

# --- Main Execution ---
def demo():
    ble = bluetooth.BLE()
    p = BLEPeripheral(ble, name=DEVICE_NAME)

    counter = 0

    try:
        while True:
            # Only update value if connected, to save power/cpu (optional)
            if p._connections:
                # Create a string data: "Count: 1", "Count: 2"...
                data_str = f"Count: {counter}"
                print(f"Sending notification: {data_str}")

                # Send data (must be bytes)
                p.update_value(data_str.encode('utf-8'))

                counter += 1

            time.sleep(2) # Wait 2 seconds

    except KeyboardInterrupt:
        print("Stopping...")
        ble.active(False)

if __name__ == "__main__":
    demo()
```

</details>

- Em seguida, execute o código, abra o aplicativo nRF Connect no seu celular e você encontrará o dispositivo chamado **XIAO ESP32-C5-BLE**. Após uma conexão bem-sucedida, o LED L onboard acenderá, e as informações da contagem de transmissões também serão impressas nesse momento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_16.png" style={{width:800, height:'auto'}}/></div><br/>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_1.jpg" style={{width:'90%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_2.jpg" style={{width:'90%', height:'auto'}}/></div>
</div><br/>

Parabéns! Depois de concluir todos os exemplos acima, acreditamos que você dominou como desenvolver projetos no **XIAO ESP32-C5** usando MicroPython com a Thonny IDE. Estamos ansiosos para ver mais de suas criações!

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
