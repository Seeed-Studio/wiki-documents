---
description: Seeed Studio XIAO ESP32C6 com CircuitPython
title: XIAO ESP32C6 com CircuitPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png
slug: /xiao_esp32c6_with_circuitpython
last_update:
  date: 08/14/2024
  author: Evelyn Chen
createdAt: '2024-08-14'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_with_circuitpython/
---

# **Seeed Studio XIAO ESP32C6 com CircuitPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png" /></div>

Este wiki apresenta como instalar e executar o CircuitPython oficial da Adafruit Industries na placa de desenvolvimento Seeed Studio XIAO ESP32C6!
CircuitPython é uma linguagem de programação projetada para simplificar a experimentação e o aprendizado de programação em placas de microcontroladores de baixo custo. Ele torna o início mais fácil do que nunca, sem necessidade de downloads iniciais no desktop. Depois de configurar sua placa, abra qualquer editor de texto e comece a editar o código. Para mais informações, consulte [aqui](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Instalando o CircuitPython

### Método 1: Linha de comando esptool

#### Instalar Esptool

Se você ainda não instalou o esptool.py, pode fazê-lo usando pip no seu PC:

``` linux
pip install esptool
```

#### Baixar o firmware CircuitPython para ESP32C6

Você precisa baixar o arquivo binário de firmware em [circirtpython.org](https://circuitpython.org/board/seeed_xiao_esp32c6/)
Após baixar o arquivo bin correto, navegue até a pasta e abra um terminal cmd ali.
Na versão final deste rascunho, a versão mais recente do arquivo bin é:

```
adafruit-circuitpython-seeed_xiao_esp32c6-en_GB-9.1.1.bin
```

#### Conecte o XIAO ESP32C6 ao seu PC

Você precisa pressionar e manter pressionado o botão BOOT na sua placa XIAO ESP32C6 para entrar no modo 'bootloader' enquanto a conecta ao cabo USB tipo C no seu PC.

#### Verificar porta

Descubra todos os dispositivos seriais no seu PC.

- Linux

No Linux, você pode usar o comando *dmesg* para ver os dispositivos conectados:

```Linux
dmesg | grep tty
```

Como alternativa, você pode listar dispositivos seriais usando *ls*:

```
ls /dev/ttyS* /dev/ttyUSB*
```

- Windows

No Windows, você pode verificar as portas seriais pelo Gerenciador de Dispositivos. Procure a seção “Ports (COM & LPT)” para ver as portas seriais disponíveis. Você também pode usar o comando mode no Prompt de Comando para listar as portas seriais:

```
mode
```

- macOS

No macOS, você pode listar as portas seriais disponíveis usando o comando *ls*:

```
ls /dev/cu*
```

Isso mostrará todos os dispositivos de porta serial.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/1.png" /></div>

:::tip
Se a porta estiver ocupada, você pode usar o seguinte comando para encontrar e matar processos que estejam usando a porta (no macOS):
Identifique os processos que estão usando a porta:

```
lsof | grep port
```

Este comando lista arquivos abertos e procura por qualquer processo usando a porta especificada.
Encontre o ID do processo (PID) na saída e mate o processo:

```
kill -9 <PID>
```

Substitua *PID* pelo ID de processo real encontrado.
:::

#### Apagar flash

```linux
esptool.py --chip esp32c6 --port /dev/cu.usbmodem11301 erase_flash
```

Substitua '/dev/cu.usbmodem11301' pelo nome de porta correto do seu sistema (por exemplo, `COM3` no Windows, `/dev/ttyUSB0` no Linux).

#### Gravar flash

Grave o firmware no XIAO ESP32C6:

```linux
esptool.py --chip esp32c6 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 adafruit-circuitpython-seeed_xiao_esp32c6-en_GB-9.1.1.bin
```

Novamente, substitua '/dev/cu.usbmodem11301' pelo nome de porta correto e 'adafruit-circuitpython-seeed_xiao_esp32c6-en_GB-9.1.1.bin' pelo caminho para o seu arquivo de firmware em branco.
Reinicializando à força via pino RTS...

### Método 2: Web Serial esptool

O WebSerial ESPTool foi projetado para ser uma opção baseada na web para programar placas de microcontrolador da família Espressif ESP que possuem um bootloader ROM baseado em serial. Ele permite apagar o conteúdo do microcontrolador e programar até 4 arquivos em diferentes offsets. Consulte [Web Serial ESPtool](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/web-serial-esptool).

Então você pode começar a compilar scripts usando sua ferramenta preferida para o ESP32C6!

## Editores recomendados para CircuitPython

Em geral, quando o CircuitPython termina de ser instalado, ou você conecta uma placa CircuitPython ao seu computador com o CircuitPython já instalado, a placa aparece no seu computador como uma unidade USB chamada CIRCUITPY.
No entanto, microcontroladores ESP32 / ESP32-C3 / ESP32-C6 que não suportam USB nativo não podem apresentar uma unidade CIRCUITPY.
Nessas placas, há maneiras alternativas de transferir e editar arquivos. Você pode usar o [Thonny](https://thonny.org/), que usa comandos ocultos enviados ao REPL para ler e gravar arquivos. Ou você pode usar o [fluxo de trabalho web do CircuitPython](https://code.circuitpython.org/), introduzido no Circuitpython 8. O fluxo de trabalho web fornece acesso via WiFi ao sistema de arquivos do CircuitPython baseado em navegador, consulte [introdução ao fluxo de trabalho web usando o editor de código](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor/overview.)

### 1. Thonny

Instale e abra o Thonny e, em seguida, configure o Thonny seguindo a instrução:

```
pip install thonny
#open thonny after installation
thonny
```

Vá em Run-->Configure Interpreter e certifique-se de que a aba Interpreter nas opções do Thonny esteja como mostrado abaixo, selecione "CircuitPython (generic)" e a porta:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

Clique em "OK" na janela de diálogo e você deverá ver o shell Micropython na parte inferior da janela do Thonny, como mostrado na figura abaixo.
Então você pode usar **R**ead-**E**valuate-**P**rint-**L**oop, ou REPL para conexão serial, o que permite inserir linhas individuais de código e executá-las imediatamente no shell. É realmente útil se você estiver tendo problemas com um programa específico e não conseguir descobrir o motivo. É interativo, então é ótimo para testar novas ideias. Consulte [REPL](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) para mais informações.

Interagindo com o REPL com *help()*, que informa por onde começar a explorar o REPL. Para executar código no REPL, digite-o ao lado do prompt do REPL.
Para listar módulos internos, digite *help("modules")* e será exibida uma lista de todos os módulos principais incorporados ao CircuitPython, incluindo "*board*".
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/3.png" /></div>

Então você pode digitar "*import board*" no REPL e pressionar Enter. Em seguida, digite "*dir(board)*" no REPL e obtenha uma lista de todos os pinos na sua placa.

```
#check pin using following command.For details on REPL, see Welcome to CircuitPython! 
#enter to the shell of Thonny.
>>> import board
>>> dir(board)
['__class__', '__name__', 'A0', 'A1', 'A2', 'A4', 'A5', 'A6', 'D0', 'D1', 'D10', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'I2C', 'LP_I2C_SCL', 'LP_I2C_SDA', 'LP_UART_RXD', 'LP_UART_TXD', 'MISO', 'MOSI', 'MTCK', 'MTDI', 'MTDO', 'MTMS', 'RX', 'SCK', 'SCL', 'SDA', 'SPI', 'TX', 'UART', '__dict__', 'board_id']
```

### 2. Fluxo de trabalho web do CircuitPython

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/5.png" /></div>
[The CircuitPython Code Editor](https://code.circuitpython.org/) fornece uma experiência mais completa e enriquecedora ao editar arquivos no seu dispositivo baseado em ESP32 executando a versão mais recente do CircuitPython.
O editor permite que você edite arquivos usando Bluetooth pela web, USB e Web Workflow via WiFi.

## Informações de pinagem/porta

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/5.png" /></div>

- Para mais informações, consulte a [visão geral do hardware](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/#Visão-geral-do-hardware)
- [Esquema elétrico do Seeed Studio XIAO ESP32C6](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH_PDF_24028.pdf)

## Primeiros passos com CircuitPython no XIAO ESP32C6

### Rede-WLAN

Para placas sem USB nativo (como ESP32-C6 ou ESP32), você precisará usar o REPL para se conectar ao Wi-Fi. A função Wi-Fi é ativada quando um arquivo chamado *settings.toml* é adicionado à pasta raiz do sistema de arquivos do CircuitPython.

#### Método 1: Criar arquivo *setting.toml* via REPL

Crie o arquivo *settings.toml* via REPL:

```r
f = open('settings.toml', 'w')
f.write('CIRCUITPY_WIFI_SSID = "wifissid"\n')
f.write('CIRCUITPY_WIFI_PASSWORD = "wifipassword"\n')
f.write('CIRCUITPY_WEB_API_PASSWORD = "webpassword"\n')
f.close()
```

- Substitua pelo nome da sua rede Wi-Fi local *wifissid*

- Substitua pela senha da sua rede Wi-Fi local *password*
- A outra senha é usada quando você acessa a placa por meio de um navegador web. Defina isso para o que você quiser *webpassword*

Depois de conectado, você pode pressionar o botão **Reset** para iniciar o firmware, depois pressionar Enter algumas vezes para chegar ao prompt REPL. Em seguida, reconecte o dispositivo ao Thonny, o endereço IP do seu XIAO ESP32C6 será exibido.

#### Método 2: Editar arquivo *setting.toml* via Thonny Files

Abra Thonny-->View-->Files e escreva a rede Wi-Fi, a senha e a webpassword no arquivo setting.toml. Lembre-se de salvá-lo e pressionar o botão Reset para iniciar o firmware e reabrir o Thonny.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/6.png" /></div>
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/7.png" /></div>
:::note
Não se esqueça, o ESP32 não suporta redes de 5 GHz, então use seu SSID de 2,4 GHz se você tiver dois.
:::
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/8.png" /></div>

### Atraso e temporização

O módulo *time*:

```python
import time
dir(time)
time.sleep(1)           # sleep for 1 second
time.localtime()        # get local time
```

### Pinos e GPIO

Pode usar os módulos "*board*" e "*microcontroller*" para controlar o GPIO com o código a seguir e conectar um LED ao D5:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/16.png" /></div>

```python
# using board module
import board
import digitalio
import time

led = digitalio.DigitalInOut(board.D5)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # turn on LED
    time.sleep(1)
    led.value = False  # turn off LED
    time.sleep(1)

# using microcontroller module
import microcontroller
import digitalio
import time

led = digitalio.DigitalInOut(microcontroller.pin.GPIO23)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # turn on LED
    time.sleep(1)
    led.value = False  # turn off LED
    time.sleep(1)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/9.png" /></div>

### UART(barramento serial)

Usando o módulo *busio*:

```python
import board
import busio

# initialise UART
uart = busio.UART(board.LP_UART_TXD, board.LP_UART_RXD, baudrate=9600)

# send data
uart.write(b"Hello UART\n")

# receive data
while True:
    if uart.in_waiting > 0:
        data = uart.read()
        print("Received:", data)

```

O XIAO ESP32C6 possui uma UART de hardware. os pinos estão listados abaixo:

| UART       | Pino  | GPIO  |
|------------|-------|-------|
| LP_UART_TXD | A5    | GPIO5 |
| LP_UART_RXD | A4    | GPIO4 |

### PWM(modulação por largura de pulso)

Usando o módulo *pwmio*:

```python
import board
import pwmio
from digitalio import DigitalInOut
import time

# initialise PWM
pwm = pwmio.PWMOut(board.D5, frequency=5000, duty_cycle=0)

# a dimming led
while True:
    for duty_cycle in range(0, 65535, 1000):
        pwm.duty_cycle = duty_cycle
        time.sleep(0.1)
```

### ADC(conversão analógica para digital)

Usando o módulo *analogio*:

```python
import board
import analogio
import time

# initialise ADC
adc = analogio.AnalogIn(board.A0)

while True:
    value = adc.value
    print("ADC Value:", value)
    time.sleep(1)

```

### SPI

```python
import board
import busio
import digitalio

# Initialize SPI
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
# Call try_lock (and later unlock) to ensure you are the only user of the SPI bus
spi.try_lock()

# Choose a chip select pin
cs = digitalio.DigitalInOut(board.D3)
cs.direction = digitalio.Direction.OUTPUT
cs.value = True

# Make sure chip select is active (low) before communicating
cs.value = False

# Send and receive data
data_out = bytearray([0x01, 0x02, 0x03])
data_in = bytearray(3)

try:
    # Write and read data
    spi.write_readinto(data_out, data_in)
    print("Received:", data_in)
finally:
    # Ensure chip select is inactive (high) after communication
    cs.value = True
```

O XIAO ESP32C6 possui uma SPI de hardware. os pinos estão listados abaixo:

| SPI  | Pino |
|------|-----|
| SCK  | D8  |
| MOSI | D10 |
| MISO | D9  |

### I2C

```python
import board
import busio

# Initialize I2C
i2c = busio.I2C(board.SCL, board.SDA, frequency=400000)
```

### Placa de Expansão Base para XIAO

*Pré-requisitos*:

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C6<br /> com header soldado</th>
      <th>Placa de Expansão Base para XIAO</th>
      <th>Sensor de Luz Grove</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

#### Ler os dados do sensor de luz

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/9.png" /></div>

```python
import time
import board
import analogio

# Initialize the analog input on A0
analog_in = analogio.AnalogIn(board.A0)

def get_voltage(pin):
    return (pin.value * 3.3) / 65536

while True:
    # Read the raw analog value
    raw_value = analog_in.value
    # Convert the raw value to voltage
    voltage = get_voltage(analog_in)

    # Print the raw value and voltage to the serial console
    print("[Light] Raw value: {:5d} Voltage: {:.2f}V".format(raw_value, voltage))

    # Delay for a short period of time before reading again
    time.sleep(1)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/11.png" /></div>

#### Acender a tela OLED

**Baixar e Extrair o Pacote de Bibliotecas**:

- Acesse a [biblioteca](https://circuitpython.org/libraries) e faça o download do pacote de bibliotecas para CircuitPython. Para instalar, baixe o pacote apropriado para a sua versão do CircuitPython.

**Copiar Bibliotecas para o CIRCUITPY**:

- Extraia o arquivo ZIP do pacote de bibliotecas. Você encontrará uma pasta chamada lib com vários arquivos *.mpy*.
- Abra Thonny-->View-->Files e, em seguida, copie os arquivos .mpy necessários e a pasta lib para CircuitPython device/lib.
Você precisará instalar manualmente as bibliotecas necessárias a partir do pacote:
  - adafruit_ssd1306
  - adafruit_bus_device
  - adafruit_register
  - adafruit_framebuf.mpy

**Copiar fond5x8.bin para o CIRCUITPY**:

- Baixe o arquivo font5x8.bin a partir [daqui](https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin).
- Abra Thonny-->View-->Files e, em seguida, copie os arquivos font5x8.bin para o dispositivo CircuitPython.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/12.png" /></div>
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/13.png" /></div>
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/14.png" /></div>

**Crie Seu Código CircuitPython**:

- Crie um arquivo code.py (ou main.py). Este arquivo deve conter o seu código CircuitPython.

```python
import board
import busio
import displayio
import adafruit_ssd1306
import terminalio

# Initialize I2C
i2c = busio.I2C(board.SCL, board.SDA)

# Define the display parameters
oled_width = 128
oled_height = 64

# Initialize the OLED display
oled = adafruit_ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

# Fill the display with the color 0
oled.fill(0)
# Set the first pixel white
oled.pixel(0, 0, 1)
oled.show()
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/15.png" /></div>

## "Desinstalando" o CircuitPython

Muitas das nossas placas podem ser usadas com várias linguagens de programação. Por exemplo, a Circuit Playground Express pode ser usada com MakeCode, Code.org CS Discoveries, CircuitPython e Arduino. Você pode querer voltar para Arduino ou MakeCode. Não há nada para desinstalar. CircuitPython é "apenas outro programa" que é carregado na sua placa. Então você pode simplesmente carregar outro programa (Arduino ou MakeCode) e ele irá sobrescrever o CircuitPython.

### Faça backup do seu Código

antes de substituir o CircuitPython, não se esqueça de fazer um backup do código que você tem na unidade CIRCUITPY. Isso significa seu *code.py* e quaisquer outros arquivos, a pasta lib etc. Você pode perder esses arquivos ao remover o CircuitPython, então backups são fundamentais! Basta arrastar os arquivos para uma pasta no seu laptop ou computador desktop como faria com qualquer unidade USB.

### Migrando para Arduino

Se você quiser usar Arduino em vez disso, basta usar a IDE do Arduino para carregar um programa Arduino. Aqui está um exemplo de envio de um simples programa Arduino "Blink", mas você não precisa usar este programa em particular.
Comece conectando sua placa e clicando duas vezes em reset até acender o(s) LED(s) onboard.

Obrigado por ler este artigo! Sinta-se à vontade para compartilhar suas opiniões nos comentários.

## Recursos

- [O arquivo binário de firmware](https://circuitpython.org/board/seeed_xiao_esp32c6/) para XIAO ESP32C6 com CircuitPython

- [O pacote de bibliotecas para CircuitPython](https://circuitpython.org/libraries)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
