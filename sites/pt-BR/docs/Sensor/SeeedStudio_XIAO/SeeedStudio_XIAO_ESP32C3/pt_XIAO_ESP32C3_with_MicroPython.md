---
description: Seeed Studio XIAO ESP32C3 com MicroPython
title: XIAO ESP32C3 com MicroPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/esp32c3_micropython/title.png
slug: /xiao_esp32c3_with_micropython
last_update:
  date: 08/14/2024
  author: Evelyn Chen
createdAt: '2024-08-14'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c3_with_micropython/
---

# **Seeed Studio XIAO ESP32C3 com MicroPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/title.png" /></div>

[MicroPython](https://github.com/micropython/micropython/wiki) é um interpretador Python com um recurso parcial de compilação de código nativo. Ele fornece um subconjunto dos recursos do Python 3.5, implementado para processadores embarcados e sistemas com recursos limitados. É diferente do CPython e você pode ler mais sobre as diferenças [aqui](https://github.com/micropython/micropython/wiki/Differences).

## Instalando o MicroPython

#### Instalar o Esptool

Se você ainda não instalou o esptool.py, pode fazê-lo usando pip no seu computador:

``` linux
pip install esptool
```

#### Baixar o firmware MicroPython para o XIAO ESP32C3

Você precisa baixar o arquivo binário do firmware em [micropython.org](https://micropython.org/download/ESP32_GENERIC_C3/)
Após baixar o arquivo bin correto, navegue até a pasta e abra um terminal cmd lá.
Na versão final, a versão mais recente do arquivo bin é:

```
ESP32_GENERIC_C3-20230602-v1.23.0.bin
```

#### Conectar o XIAO ESP32C3 ao seu PC

Você precisa pressionar e segurar o botão BOOT no seu XIAO ESP32C3 para entrar no modo 'bootloader' enquanto conecta o cabo USB tipo C ao seu computador.

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
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/2.png" /></div>

#### Gravar a flash

Grave o firmware no XIAO ESP32C3:

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 ESP32_GENERIC_C3-20240602-v1.23.0.bin
```

Novamente, substitua '/dev/cu.usbmodem11301' pelo nome correto da porta, e 'ESP32_GENERIC_C3-20240602-v1.23.0.bin' pelo caminho para o seu arquivo de firmware.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/3.png" /></div>
Agora você pode começar a compilar scripts usando sua ferramenta preferida para o ESP32!

## Editores Recomendados para MicroPython

Algumas das ferramentas mais populares estão listadas abaixo.

- [Thonny IDE](https://randomnerdtutorials.com/getting-started-thonny-micropython-python-ide-esp32-esp8266/)
- [Arduino para micropython](https://docs.arduino.cc/micropython/)
- [Visual Studio Code pymakr](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/)
- [uPyCraft IDE](https://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)

### 1. Thonny

Instale e abra o Thonny, depois configure-o seguindo as instruções:

```
pip install thonny
#open thonny after installation
thonny
```

Vá em Run-->Configure Interpreter e certifique-se de que a aba Interpreter nas opções do Thonny esteja como mostrado abaixo, selecione "CircuitPython (generic)" e a porta:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/4.png" /></div>

Clique em "OK" na caixa de diálogo e você verá o shell do Micropython na parte inferior da janela do Thonny, conforme mostrado na figura abaixo.
Digite o script linha por linha no Shell para obter o tamanho da flash e da SRAM:

```python
import gc
gc.mem_free()

import esp
esp.flash_size()
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/4.png" /></div>

Parabéns por configurar com sucesso o MicroPython no seu XIAO ESP32C3 com o Thonny!

### 2. Arduino Lab para MicroPython

Baixe o Arduino Lab para MicroPython e conecte o dispositivo ao seu computador.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/7.png" /></div>

Codifique assim:

```python
from machine import Pin
import time

# Define the LED pin
led = Pin(7, Pin.OUT)  # Use the correct GPIO number instead of D10

# Blink the LED in a loop
while True:
    led.value(1)   # Turn the LED on
    time.sleep(1)  # Wait for a second
    led.value(0)   # Turn the LED off
    time.sleep(1)  # Wait for a second
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/9.png" /></div>

### 3. Pymakr no Visual Studio Code

- Instalar o Pymakr
Siga as [instruções de instalação](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/) para instalar o Pymakr.

- Conecte seu XIAO ESP32C3 ao computador.
- Criar um Novo Projeto
Abra o VS Code e crie um novo projeto para o seu microcontrolador.
- Adicionar um Novo Arquivo Python
Crie um novo arquivo Python dentro do seu projeto.
- Enviar Script para o MCU e Compilar o Script

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/10.png" /></div>

### 4. uPyCraft IDE

- [macOS](https://randomnerdtutorials.com/install-upycraft-ide-mac-os-x-instructions/)

- [Windows](PChttps://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)
- [Linux](https://randomnerdtutorials.com/install-upycraft-ide-linux-ubuntu-instructions/)

## Informações de Pinagem/Porta

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/11.png" /></div>

- Para mais informações, consulte a [visão geral do hardware](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/#visão-geral-do-hardware)
- [Esquemático do Seeed Studio XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

## Primeiros Passos com MicroPython no XIAO ESP32C3

Aqui está [uma referência rápida para operação do ESP32 com micropython](https://docs.micropython.org/en/latest/esp32/quickref.html#installing-micropython).
Para mais conhecimento sobre [bibliotecas do micropython](https://docs.micropython.org/en/latest/library/index.html#python-standard-libraries-and-micro-libraries).

### Controle geral da placa

O REPL do MicroPython (*R*ead-*E*val-*P*rint-*L*oop) está na UART0 (GPIO1=TX, GPIO3=RX) com baudrate 115200. O preenchimento automático com Tab é útil para descobrir quais métodos um objeto possui. O modo de colagem (ctrl-E) é útil para colar um grande bloco de código Python no REPL.
Você pode usar a função *dir()* no MicroPython (similar ao Python) para listar os atributos e métodos de um objeto.
Por exemplo, digite *dir(machine)* no shell:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/12.png" /></div>

O módulo *machine*:

```python
import machine
machine.freq()          # get the current frequency of the CPU, for esp32c3 is 160000000
machine.freq(160000000) # set the CPU frequency to 160 MHz
```

O módulo *esp*:

```python
import esp

esp.osdebug(None)       # turn off vendor O/S debugging messages
esp.osdebug(0)          # redirect vendor O/S debugging messages to UART(0)

# low level methods to interact with flash storage
esp.flash_size()
esp.flash_user_start()
esp.flash_erase(sector_no)
esp.flash_write(byte_offset, buffer)
esp.flash_read(byte_offset, buffer)
```

O módulo *esp32*:
O ESP32C3, ESP32S2 e ESP32S3 possuem um sensor de temperatura interno disponível e retornam a temperatura em Celsius:

```python
import esp32
esp32.mcu_temperature() # read the internal temperature of the MCU, in Celsius
```

### Rede-WLAN

O módulo *Network*:
Para mais informações, consulte [aqui](https://docs.micropython.org/en/latest/library/network.WLAN.html).

```python
import network

wlan = network.WLAN(network.STA_IF) # create station interface
wlan.active(True)       # activate the interface
wlan.scan()             # scan for access points
wlan.isconnected()      # check if the station is connected to an AP
wlan.connect('ssid', 'key') # connect to an AP
wlan.config('mac')      # get the interface's MAC address
wlan.ifconfig()  # get the interface's IPv4 addresses

ap = network.WLAN(network.AP_IF) # create access-point interface
ap.config(ssid='ESP-AP') # set the SSID of the access point
ap.config(max_clients=10) # set how many clients can connect to the network
ap.active(True)         # activate the interface

```

Uma função útil para conectar à sua rede WiFi local é:

```python
def do_connect():
    import network
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('connecting to network...')
        wlan.connect('ssid', 'key') #replace the ssid and key
        while not wlan.isconnected():
            pass
    print('network config:', wlan.ifconfig())

```

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

### Temporizadores

A porta ESP32 possui quatro temporizadores de hardware. Use a [classe](https://docs.micropython.org/en/latest/library/machine.Timer.html#machine-timer) com um ID de temporizador de 0 a 3 (inclusive):

```python
from machine import Timer

tim0 = Timer(0)
tim0.init(period=5000, mode=Timer.ONE_SHOT, callback=lambda t:print(0))

tim1 = Timer(1)
tim1.init(period=2000, mode=Timer.PERIODIC, callback=lambda t:print(1))
```

O período é em milissegundos.
Temporizadores virtuais não são suportados atualmente nesta porta.

### Pinos e GPIO

A classe *machine.Pin*:

```python
from machine import Pin

p2 = Pin(2, Pin.OUT)    # create output pin on GPIO2
p2.on()                 # set pin to "on" (high) level
p2.off()                # set pin to "off" (low) level
p2.value(1)             # set pin to on/high

p3 = Pin(3, Pin.IN)     # create input pin on GPIO3
print(p3.value())       # get value, 0 or 1

p4 = Pin(4, Pin.IN, Pin.PULL_UP) # enable internal pull-up resistor
p5 = Pin(5, Pin.OUT, value=1) # set pin high on creation
p6 = Pin(6, Pin.OUT, drive=Pin.DRIVE_3) # set maximum drive strength
```

Os pinos disponíveis estão nos seguintes intervalos (inclusive): 2,3,4,5,6,7,8,9,10,20,21. Estes correspondem aos números reais dos pinos GPIO do chip ESP32C3.

### UART (barramento serial)

A classe *machine.UART*:

```python
from machine import UART

uart1 = UART(1, baudrate=9600, tx=21, rx=20)
uart1.write('hello')  # write 5 bytes
uart1.read(5)         # read up to 5 bytes
```

O ESP32C3 possui um UART de hardware. Os pinos estão listados abaixo:

| UART | Pino |
|------|-----|
| TX   | 21  |
| RX   | 20  |

### PWM (modulação por largura de pulso)

O PWM pode ser habilitado em todos os pinos com saída habilitada. A frequência base pode variar de 1Hz a 40MHz, mas há uma compensação; à medida que a frequência base aumenta, a resolução do ciclo de trabalho diminui.
A classe *machine.PWM*:

```python
from machine import Pin, PWM

pwm2 = PWM(Pin(2), freq=5000, duty_u16=32768) # create PWM object from a pin
freq = pwm2.freq()         # get current frequency
pwm2.freq(1000)            # set PWM frequency from 1Hz to 40MHz

duty = pwm2.duty()         # get current duty cycle, range 0-1023 (default 512, 50%)
pwm2.duty(256)             # set duty cycle from 0 to 1023 as a ratio duty/1023, (now 25%)

duty_u16 = pwm2.duty_u16() # get current duty cycle, range 0-65535
pwm2.duty_u16(2**16*3//4)  # set duty cycle from 0 to 65535 as a ratio duty_u16/65535, (now 75%)

duty_ns = pwm2.duty_ns()   # get current pulse width in ns
pwm2.duty_ns(250_000)      # set pulse width in nanoseconds from 0 to 1_000_000_000/freq, (now 25%)

pwm2.deinit()              # turn off PWM on the pin

pwm3 = PWM(Pin(3), freq=20000, duty=512)  # create and configure in one go
print(pwm3)                               # view PWM settings
```

Os chips ESP possuem diferentes periféricos de hardware:

| Especificação de Hardware                         | ESP32C3 | ESP32 |
|------------------------------------------------|----------|-------|
| Número de grupos (modos de velocidade)                 | 1        | 2     |
| Número de temporizadores por grupo                      | 4        | 4     |
| Número de canais por grupo                    | 6        | 8     |
| Diferentes frequências PWM (grupos * temporizadores)     | 4        | 8     |
| Total de canais PWM (pinos, ciclos de trabalho) (grupos * canais) | 6        | 16    |

### ADC (conversão analógico-digital)

No XIAO ESP32C3, a funcionalidade ADC está disponível nos pinos 2, 3, 4.
:::note
A3(GP105) - Usa ADC2, que pode ficar inoperante devido a sinais de amostragem falsos. Para leituras analógicas, use ADC1(A0/A1/A2). Consulte o datasheet do XIAO ESP32C3.
:::
A classe *machine.ADC*:

```python
from machine import ADC

adc = ADC(pin)        # create an ADC object acting on a pin
val = adc.read_u16()  # read a raw analog value in the range 0-65535
val = adc.read_uv()   # read an analog value in microvolts
```

### SPI

#### Barramento SPI por Software

O SPI por software (usando bit-banging) funciona em todos os pinos e é acessado via a classe *machine.SoftSPI*:

```python
from machine import Pin, SoftSPI

# construct a SoftSPI bus on the given pins
# polarity is the idle state of SCK
# phase=0 means sample on the first edge of SCK, phase=1 means the second
spi = SoftSPI(baudrate=100000, polarity=1, phase=0, sck=Pin(2), mosi=Pin(4), miso=Pin(6))

spi.init(baudrate=200000) # set the baudrate

spi.read(10)            # read 10 bytes on MISO
spi.read(10, 0xff)      # read 10 bytes while outputting 0xff on MOSI

buf = bytearray(50)     # create a buffer
spi.readinto(buf)       # read into the given buffer (reads 50 bytes in this case)
spi.readinto(buf, 0xff) # read into the given buffer and output 0xff on MOSI

spi.write(b'12345')     # write 5 bytes on MOSI

buf = bytearray(4)      # create a buffer
spi.write_readinto(b'1234', buf) # write to MOSI and read from MISO into the buffer
spi.write_readinto(buf, buf) # write buf to MOSI and read MISO back into buf
```

#### Barramento SPI por Hardware

O SPI por hardware é acessado via a classe machine.SPI e possui os mesmos métodos que o SPI por software acima:

```python
from machine import Pin, SPI

hspi = SPI(1, 10000000)
hspi = SPI(1, 10000000, sck=Pin(8), mosi=Pin(10), miso=Pin(9))
```

| SPI  | Pino |
|------|-----|
| SCK  | D8  |
| MOSI | D10 |
| MISO | D9  |

### I2C

#### Barramento I2C por Software

O I2C por software (usando bit-banging) funciona em todos os pinos com capacidade de saída e é acessado via a classe *machine.SoftI2C*:

```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(7), sda=Pin(6), freq=100000)

i2c.scan()              # scan for devices

i2c.readfrom(0x3a, 4)   # read 4 bytes from device with address 0x3a
i2c.writeto(0x3a, '12') # write '12' to device with address 0x3a

buf = bytearray(10)     # create a buffer with 10 bytes
i2c.writeto(0x3a, buf)  # write the given buffer to the peripheral
```

#### Barramento I2C por Hardware

O driver é acessado via a classe *machine.I2C* e possui os mesmos métodos que o I2C por software acima:

```python
from machine import Pin, I2C
i2c = I2C(0, scl=Pin(7), sda=Pin(6), freq=400000)
```

| I2C  | GPIO | Pino |
|------|------|-----|
| SCL  | GPIO7 | D5  |
| SDA  | GPIO6 | D4  |

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

#### Leitura dos dados do sensor de luz

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/9.png" /></div>

```python
import time
from machine import Pin, ADC

# Initialize the analog input on pin 2 (corresponds to A0)
analog_in = ADC(Pin(2))
analog_in.atten(ADC.ATTN_11DB)  # Configure the input range (0-3.6V)

def get_voltage(pin):
    # Convert the raw ADC value to voltage
    return (pin.read() / 4095) * 3.3

while True:
    # Read the raw analog value
    raw_value = analog_in.read()
    # Convert the raw value to voltage
    voltage = get_voltage(analog_in)

    # Print the raw value and voltage to the serial console
    print("[Light] Raw value: {:5d} Voltage: {:.2f}V".format(raw_value, voltage))

    # Delay for a short period of time before reading again
    time.sleep(1)

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/14.png" /></div>

#### Acender a tela OLED

Conecte seu XIAO ESP32C3, abra o Thonny e clique no canto inferior direito para configurar o interpretador
Selecione o interpretador - Micropython (ESP32) e **Porta >>> Clique em OK**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/15.png" /></div>

Se tudo correr bem, você verá a saída no shell
Instale as [bibliotecas necessárias](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_MicroPython/#instale-as-bibliotecas-necessárias)
Clique em "Tools" >>> Clique em "Management Packages" >>> Digite o nome da biblioteca >>> Clique em "Search micropython-lib and PyPl"
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/16.png" /></div>

Execute o script e grave-o na placa.
Após terminar a codificação, clique no botão verde para executar o script.

```python
import time
from machine import Pin, SoftI2C
import ssd1306
import math

# Pin assignment
i2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # Adjust the Pin numbers based on your connections
oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

oled.fill(0)  # Clear the screen
oled.text("Hello, Seeder!", 10, 15)
oled.text("/////", 30, 40)
oled.text("(`3`)y", 30, 55)
oled.show()  # Show the text
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/17.png" /></div>

Obrigado por ler este artigo! Sinta-se à vontade para compartilhar seus pensamentos nos comentários.

## Recursos

- [O arquivo binário de firmware](https://micropython.org/download/ESP32_GENERIC_C3/) para XIAO ESP32C3 com MicroPython

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
