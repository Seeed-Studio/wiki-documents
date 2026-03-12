---
description: Seeed Studio XIAO ESP32C3 com CircuitPython
title: XIAO ESP32C3 com CircuitPython
keywords:
  - xiao
  - esp32c3
  - circuitpython
image: https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png
slug: /xiao_esp32c3_with_circuitpython
last_update:
  date: 08/14/2024
  author: Evelyn Chen
createdAt: '2024-08-14'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c3_with_circuitpython/
---

# **Seeed Studio XIAO ESP32C3 com CircuitPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png" /></div>

Este wiki apresenta como instalar e executar o CircuitPython oficial da Adafruit Industries na placa de desenvolvimento Seeed Studio XIAO ESP32C3!
CircuitPython é uma linguagem de programação projetada para simplificar a experimentação e o aprendizado de programação em placas de microcontroladores de baixo custo. Ela facilita o início mais do que nunca, sem necessidade de downloads prévios no computador. Depois de configurar sua placa, abra qualquer editor de texto e comece a editar o código. Para mais informações, consulte [aqui](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Instalando o CircuitPython

### Método 1: esptool por linha de comando

#### Instalar o Esptool

Se você ainda não instalou o esptool.py, pode fazê-lo usando o pip no seu computador:

``` linux
pip install esptool
```

#### Baixar o firmware CircuitPython para o XIAO ESP32C3

Você precisa baixar o arquivo binário do firmware em [circirtpython.org](https://circuitpython.org/board/seeed_xiao_esp32c3/)
Após baixar o arquivo bin correto, navegue até a pasta e abra um terminal cmd nela.
Na versão final deste documento, a versão mais recente do arquivo bin é:

```
adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

#### Conectar o XIAO ESP32C3 ao seu PC

Você precisa pressionar e segurar o botão BOOT na sua placa XIAO ESP32C3 para entrar no modo 'bootloader' enquanto conecta o cabo USB tipo C ao seu computador.

#### Verificar porta

Encontre todos os dispositivos seriais no seu computador.

- Linux

No Linux, você pode usar o comando *dmesg* para visualizar os dispositivos conectados:

```Linux
dmesg | grep tty
```

Alternativamente, você pode listar os dispositivos seriais usando *ls*:

```
ls /dev/ttyS* /dev/ttyUSB*
```

- Windows

No Windows, você pode verificar as portas seriais pelo Gerenciador de Dispositivos. Procure a seção "Ports (COM & LPT)" para ver as portas seriais disponíveis. Você também pode usar o comando mode no Prompt de Comando para listar as portas seriais:

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
Se a porta estiver ocupada, você pode usar o seguinte comando para encontrar e encerrar os processos que estão usando a porta (no macOS):
Identificar processos usando a porta:

```
lsof | grep port
```

Este comando lista arquivos abertos e procura por qualquer processo usando a porta especificada.
Encontre o ID do processo (PID) na saída e encerre o processo:

```
kill -9 <PID>
```

Substitua *PID* pelo ID do processo real encontrado.
:::

#### Apagar a flash

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 erase_flash
```

Substitua '/dev/cu.usbmodem11301' pelo nome correto da porta do seu sistema (ex.: `COM3` no Windows, `/dev/ttyUSB0` no Linux).

#### Gravar a flash

Grave o firmware no XIAO ESP32C3:

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

Novamente, substitua '/dev/cu.usbmodem11301' pelo nome correto da porta, e 'adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin' pelo caminho para o seu arquivo de firmware.
Reinicialização forçada via pino RTS...

### Método 2: Web Serial esptool

O WebSerial ESPTool foi projetado para ser uma opção baseada na web para programar placas de microcontroladores da família Espressif ESP que possuem um bootloader ROM baseado em serial. Ele permite apagar o conteúdo do microcontrolador e programar até 4 arquivos em diferentes offsets. Consulte [Web Serial ESPtool](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/web-serial-esptool).

Em seguida, você pode começar a compilar scripts usando sua ferramenta preferida para o XIAO ESP32C3!

## Editores Recomendados para CircuitPython

Geralmente, quando o CircuitPython termina de ser instalado, ou você conecta uma placa CircuitPython ao seu computador com o CircuitPython já instalado, a placa aparece no seu computador como um drive USB chamado CIRCUITPY.
No entanto, microcontroladores ESP32 ou ESP32-C3 que não suportam USB nativo não conseguem apresentar um drive CIRCUITPY.
Nessas placas, existem formas alternativas de transferir e editar arquivos. Você pode usar o [Thonny](https://thonny.org/), que utiliza comandos ocultos enviados ao REPL para ler e gravar arquivos. Ou você pode usar o [fluxo de trabalho web do CircuitPython](https://code.circuitpython.org/), introduzido no CircuitPython 8. O fluxo de trabalho web fornece acesso WiFi via navegador ao sistema de arquivos do CircuitPython; consulte [primeiros passos com o fluxo de trabalho web usando o editor de código](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor/overview.)

### 1. Thonny

Instale e abra o Thonny, depois configure-o seguindo as instruções:

```
pip install thonny
#open thonny after installation
thonny
```

Vá em Run-->Configure Interpreter e certifique-se de que a aba Interpreter nas opções do Thonny esteja como mostrado abaixo, selecione "CircuitPython (generic)" e a porta:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

Clique em "OK" na caixa de diálogo e você verá o shell do Micropython na parte inferior da janela do Thonny, conforme mostrado na figura abaixo.
Em seguida, você pode usar o **R**ead-**E**valuate-**P**rint-**L**oop, ou REPL para conexão serial, que permite inserir linhas individuais de código e executá-las imediatamente no shell. É muito útil quando você está tendo problemas com um programa específico e não consegue descobrir o motivo. É interativo, portanto ótimo para testar novas ideias. Consulte [REPL](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) para mais informações.

Interagindo com o REPL usando *help()*, que indica por onde começar a explorar o REPL. Para executar código no REPL, digite-o ao lado do prompt do REPL.
Para listar os módulos integrados, digite *help("modules")* e será exibida uma lista de todos os módulos principais integrados ao CircuitPython, incluindo "*board*".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/3.png" /></div>

Em seguida, você pode digitar *"import board"* no REPL e pressionar Enter. Depois, digite *"dir(board)"* no REPL para obter uma lista de todos os pinos da sua placa.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/4.png" /></div>

### 2. Fluxo de Trabalho Web do CircuitPython

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/5.png" /></div>

[O Editor de Código CircuitPython](https://code.circuitpython.org/) oferece uma experiência mais completa e enriquecedora ao editar arquivos no seu dispositivo baseado em ESP32 executando a versão mais recente do CircuitPython.
O editor permite editar arquivos usando Bluetooth web, USB e Fluxo de Trabalho Web via WiFi.

## Informações de Pinagem/Porta

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/6.png" /></div>

- Para mais informações, consulte [visão geral do hardware](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/#visão-geral-do-hardware)
- [Esquemático do Seeed Studio XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

## Primeiros Passos com CircuitPython no XIAO ESP32C3

### Rede-WLAN

Para placas sem USB nativo (como ESP32-C3 ou ESP32), você precisará usar o REPL para se conectar ao Wi-Fi. A função Wi-Fi é habilitada quando um arquivo chamado *settings.toml* é adicionado à pasta raiz do sistema de arquivos do CircuitPython.
Crie o arquivo *settings.toml* via REPL:

```r
f = open('settings.toml', 'w')
f.write('CIRCUITPY_WIFI_SSID = "wifissid"\n')
f.write('CIRCUITPY_WIFI_PASSWORD = "wifipassword"\n')
f.write('CIRCUITPY_WEB_API_PASSWORD = "webpassword"\n')
f.close()
```

- Substitua pelo nome da sua rede wifi local *wifissid*
- Substitua pela senha da sua rede wifi local *password*
- A outra senha, , é usada quando você acessa a placa via navegador web. Defina-a como quiser *webpassword*

Uma vez conectado, você pode pressionar o botão **Reset** para reiniciar o firmware, depois pressionar Enter algumas vezes para chegar ao prompt do REPL. Em seguida, reconecte o dispositivo ao Thonny e o endereço IP do seu XIAO ESP32C3 será exibido.

:::note
Não se esqueça: o ESP32 não suporta redes de 5 GHz, portanto use o SSID de 2,4 GHz se você tiver dois.
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/7.png" /></div>

### Atraso e temporização

O módulo *time*:

```python
import time
time.sleep(1)           # sleep for 1 second
time.sleep_ms(500)      # sleep for 500 milliseconds
time.sleep_us(10)       # sleep for 10 microseconds
start = time.ticks_ms() # get millisecond counter
delta = time.ticks_diff(time.ticks_ms(), start) # compute time difference
```

### Pinos e GPIO

Você pode usar os módulos "*board*" e "*microcontroller*" para controlar o GPIO com o seguinte código e conectar um LED ao D5:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/14.png" /></div>

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

led = digitalio.DigitalInOut(microcontroller.pin.GPIO7)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # turn on LED
    time.sleep(1)
    led.value = False  # turn off LED
    time.sleep(1)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/8.png" /></div>

### UART (barramento serial)

Usando o módulo *busio*:

```python
import board
import busio

# initialise UART
uart = busio.UART(board.TX, board.RX, baudrate=9600)

# send data
uart.write(b"Hello UART\n")

# receive data
while True:
    if uart.in_waiting > 0:
        data = uart.read()
        print("Received:", data)

```

O XIAO ESP32C3 possui uma UART de hardware. Os pinos listados abaixo:

| UART | Pino |
|------|-----|
| TX   | D6  |
| RX   | D7  |

### PWM (modulação por largura de pulso)

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

### ADC (conversão analógica para digital)

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

# initialize SPI
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)

# choose a chip
cs = digitalio.DigitalInOut(board.D5)
cs.direction = digitalio.Direction.OUTPUT
cs.value = True 

# send and receive data
data_out = bytearray([0x01, 0x02, 0x03])
data_in = bytearray(3)
spi.write_readinto(data_out, data_in)
print("Received:", data_in)
```

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

### Placa Base de Expansão para XIAO

*Pré-requisitos*:

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3<br /> com header soldado</th>
      <th>Placa Base de Expansão para XIAO</th>
      <th>Sensor de luz Grove</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
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

#### Leia os dados do sensor de luz

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

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/10.png" /></div>

#### Acender a tela OLED

**Baixe e Extraia o Pacote de Bibliotecas**:

- Acesse a [biblioteca](https://circuitpython.org/libraries) e baixe o pacote de bibliotecas para CircuitPython. Para instalar, baixe o pacote adequado para a sua versão do CircuitPython.

**Copie as Bibliotecas para o CIRCUITPY**:

- Extraia o arquivo ZIP do pacote de bibliotecas. Você encontrará uma pasta chamada lib com vários arquivos *.mpy*.
- Abra Thonny-->View-->Files e, em seguida, copie os arquivos .mpy necessários e a pasta lib para o dispositivo CircuitPython/lib.
Você precisará instalar manualmente as bibliotecas necessárias do pacote:
  - adafruit_ssd1306
  - adafruit_bus_device
  - adafruit_register
  - adafruit_framebuf.mpy

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/11.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/12.png" /></div>

**Crie Seu Código CircuitPython**:

- Crie um arquivo code.py (ou main.py). Este arquivo deve conter seu código CircuitPython.

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

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/13.png" /></div>

## "Desinstalando" o CircuitPython

Muitas de nossas placas podem ser usadas com múltiplas linguagens de programação. Por exemplo, o Circuit Playground Express pode ser usado com MakeCode, Code.org CS Discoveries, CircuitPython e Arduino. Você pode querer voltar ao Arduino ou ao MakeCode. Não há nada para desinstalar. O CircuitPython é "apenas mais um programa" que é carregado na sua placa. Portanto, você pode simplesmente carregar outro programa (Arduino ou MakeCode) e ele substituirá o CircuitPython.

### Faça Backup do Seu Código

Antes de substituir o CircuitPython, não se esqueça de fazer um backup do código que você tem na unidade CIRCUITPY. Isso significa seu *code.py* e quaisquer outros arquivos, a pasta lib etc. Você pode perder esses arquivos ao remover o CircuitPython, portanto os backups são essenciais! Basta arrastar os arquivos para uma pasta no seu laptop ou computador desktop como faria com qualquer unidade USB.

### Migrando para o Arduino

Se você quiser usar o Arduino, basta usar o Arduino IDE para carregar um programa Arduino. Aqui está um exemplo de como fazer upload de um simples programa Arduino "Blink", mas você não precisa usar este programa específico.
Comece conectando sua placa e clicando duas vezes em reset até obter o(s) LED(s) integrado(s).

Obrigado por ler este artigo! Sinta-se à vontade para compartilhar seus pensamentos nos comentários.

## Recursos

- [O arquivo binário de firmware](https://circuitpython.org/board/seeed_xiao_esp32c3/) para XIAO ESP32C3 com CircuitPython
- [O pacote de bibliotecas para CircuitPython](https://circuitpython.org/libraries)

## Suporte Técnico e Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
