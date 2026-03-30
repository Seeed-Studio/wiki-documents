---
description: ''
title: MicroPython para Seeed Studio XIAO nRF54L15
keywords:
  - nRF54L15
  - xiao
  - MicroPython
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper_1.webp
slug: /xiao_nrf54l15_sense_micropython
last_update:
  date: 1/15/2026
  author: Brandy
createdAt: '2025-09-26'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_micropython/
---



### Entendendo o MicroPython

Este tutorial tem como objetivo apresentar como usar o MicroPython no Thonny com base no XIAO nRF54L15.

[MicroPython](https://github.com/micropython/micropython/wiki) é um interpretador Python com um recurso parcial de compilação de código nativo. Ele fornece um subconjunto dos recursos do Python 3.5, implementado para processadores embarcados e sistemas com recursos limitados. É diferente do CPython e você pode ler mais sobre as diferenças [aqui](https://github.com/micropython/micropython/wiki/Differences). Se você precisar de coleções mais interessantes, pode verificar [aqui](
https://awesome-micropython.com/)

<!-- ## 安装Python3
Thonny自带Python解释器，所以不需要额外安装Python环境
Win + R -->

## Preparar o Hardware.

<table align="center">
 <tr>
  <th>Seeed Studio XIAO nRF54L15 </th>
        <th> Seeed Studio XIAO nRF54L15 Sense</th>
        <th>Seeed Studio XIAO Debug Mate</th>
 </tr>
 <tr>

   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/16.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-xiao-debugger.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Instalar o Thonny IDE

[Thonny IDE](https://thonny.org/)

Escolha a versão apropriada para instalação. Aqui, estou instalando em um sistema Windows, então selecionei a versão para Windows.

Siga as instruções para a versão Python desejada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:600, height:'auto'}}/></div>

Em seguida, basta seguir as etapas padrão de configuração.

### Baixar o repositório


Clone-o para a máquina local e, em seguida, lembre-se do caminho onde o MicroPython do XIAO nRF54L15 está armazenado. Esse caminho será usado posteriormente.

```git
git clone https://github.com/Seeed-Studio/micropython-seeed-boards.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/2.png" style={{width:600, height:'auto'}}/></div>

### Fazer upload do arquivo de placa

**Passo 0.** Conecte o XIAO NRF54L15 ao computador usando um cabo USB

**Passo 1.** Grave o firmware MicroPython para o XIAO nRF54L15

<!-- 如果您已经刷入了对应的MircroPython固件，可以跳过这一步骤 -->
- Baixe o pacote de firmware e extraia-o para o local apropriado. Em seguida, clique em flash.bat e ele gravará o firmware automaticamente para você.

    **[Firmware]** [Firmware MicroPython para XIAO nRF54L15](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao54_flash.zip)
<!-- 这里的压缩包填入刷写固件的压缩包 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/10.png" style={{width:600, height:'auto'}}/></div>
O resultado é o seguinte
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/3.png" style={{width:600, height:'auto'}}/></div>

:::tip
Este script possui comandos de toolchain de gravação pré-configurados. Se você estiver usando pela primeira vez, pode levar um pouco de tempo. Ele travará automaticamente após o download. Se o XIAO NRF54L15 não estiver conectado, ocorrerá um erro '200' durante a gravação.
:::

**Passo 2.** Abra o Thonny IDE, clique no canto inferior direito da interface para configurar as opções do interpretador. Selecione MicroPython (generic) e a Porta

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_boards_1.png" style={{width:600, height:'auto'}}/></div>

**Passo 3.** Faça upload do arquivo de placas

- Abra o "view", selecione "File", e o caminho do gerenciador de arquivos será exibido na barra lateral esquerda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/11.png" style={{width:600, height:'auto'}}/></div>

- Abra o caminho do arquivo clonado ou baixado e abra `micropython-seeed-boards\examples`
-Clique com o botão direito na pasta "boards" e faça o upload para o flash. Em seguida, você poderá ver o arquivo enviado no dispositivo MicroPython/flash.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/12.png" style={{width:600, height:'auto'}}/></div>

Quando estiver normal, um ícone aparecerá na posição '3'

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/13.png" style={{width:600, height:'auto'}}/></div>

**Passo 4.** Acender o LED

Abra um novo arquivo (XX.py) ou vá para a página inicial, copie o código e pressione `F5` para executá-lo.

```py
import time
from boards.xiao import XiaoPin

led = "led"

try:
    # Initialize LED
    led = XiaoPin(led, XiaoPin.OUT)
    while True:
        # LED 0.5 seconds on, 0.5 seconds off
        led.value(1)
        time.sleep(0.5)
        led.value(0)
        time.sleep(0.5)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    led.value(1)
```

O resultado é o seguinte:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

## Digital

### Hardware

<table align="center">
  <tr>
      <th>Seeed Studio XIAO nRF54L15 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
         <th>Grove - Relay</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2017-07bazaar501790_10402004845.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="Grove – Chainable RGB LED V2.0" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

### Software

```py
from machine import Pin
from boards.xiao_nrf54l15 import xiao_nrf54l15 as xiao

# Define a function to get the GPIO information corresponding to pin A0
def get_a0_pin():
    # Get the information of pin A0 through the pin method of the xiao module
    # According to the definition in xiao_nrf54l15.py, A0 corresponds to digital pin 0
    pin_info = xiao.pin(0)  # Get the information of digital pin 0, the return value is a tuple, such as ("gpio1", 4)
    return pin_info

# Define a function to set pin A0 to high level
def set_a0_high():
    # Get the GPIO information of pin A0
    gpio_port, gpio_pin = get_a0_pin()  # Get the port and pin number
    # Create a Pin object, specify the pin as output mode, and set it to high level
    pin = Pin((gpio_port, gpio_pin), Pin.OUT)  # Initialize the pin as output mode
    pin.value(1)  # Set the pin to high level

# Main program
if __name__ == "__main__":
    set_a0_high()  # Call the function to set pin A0 to high level
    print("Pin A0 has been set to high level")  # Output prompt information
```

Explicação do Código:
Este código tem quatro partes, como importação de módulos, uma função para obter as informações GPIO do pino A0, uma função para definir o pino A0 para nível alto e a função principal, onde no programa principal ela chama a operação para definir o pino A0 para nível alto.

### Resultado
<!-- 添加对应GIF图 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/15.jpg" style={{width:500, height:'auto'}}/></div>

## Analógico

### Hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO nRF54L15 Sense</th>
         <th>Grove-Variable Color LED</th>
     <th>Grove-Rotary Angle Sensor </th>
     <th>Seeed Studio Grove Base for XIAO </th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software

```py
import time
from boards.xiao import XiaoPin, XiaoADC, XiaoPWM

adc = 0    #D0
pwm = 1    #D1

try:
    # Initialize ADC for potentiometer
    adc = XiaoADC(adc)            
    # Initialize PWM for LED control
    pwm = XiaoPWM(pwm)     
    FREQ = 1000                     
    PERIOD_NS = 1000000             
    pwm.init(freq=FREQ, duty_ns=0)  
    # Potentiometer parameters
    MIN_VOLTAGE = 0.0      
    MAX_VOLTAGE = 3.3     
    DEAD_ZONE = 0.05   
    last_duty = -1 
    while True:
        # Read ADC voltage value
        voltage = adc.read_uv() / 1000000  

        # Ensure voltage is within valid range
        if voltage < MIN_VOLTAGE:
            voltage = MIN_VOLTAGE
        elif voltage > MAX_VOLTAGE:
            voltage = MAX_VOLTAGE

        duty_percent = (voltage - MIN_VOLTAGE) / (MAX_VOLTAGE - MIN_VOLTAGE)

        # Apply dead zone to prevent tiny fluctuations
        if abs(duty_percent - last_duty) < DEAD_ZONE / 100:
            time.sleep(0.05)
            continue

        # Calculate duty cycle time (nanoseconds)
        duty_ns = int(duty_percent * PERIOD_NS)

        # Set PWM duty cycle
        pwm.duty_ns(duty_ns)

        # Print current status
        print("Voltage: {:.2f}V, Duty Cycle: {:.1f}%".format(voltage, duty_percent * 100))

        # Update last duty cycle value
        last_duty = duty_percent

        # Short delay
        time.sleep(0.05)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    pwm.deinit()
```

Explicação do código:
Este código pode ser dividido em quatro partes:
 - importação de módulos: incluindo o módulo time para operações de atraso, bem como os módulos XiaoADC e XiaoPWM
 - inicialização do hardware: definindo os pinos ADC e PWM, inicializando o ADC para ler a tensão do potenciômetro e inicializando o PWM para controlar o brilho do LED.
 - A lógica do programa principal: em um loop infinito, lê a tensão do potenciômetro, converte-a em um ciclo de trabalho PWM e ajusta o brilho do LED de acordo com a tensão.
 - Tratamento de exceções e limpeza: capturando interrupções do usuário (como pressionar Ctrl+C) e outras exceções para garantir que o programa saia com segurança.



### Resultado
<!-- 添加对应GIF图 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/adc.gif" style={{width:500, height:'auto'}}/></div>

## I2C

### Hardware

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>Seeed Studio Expansion Board Base for XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software


```py
import time
from boards.xiao import XiaoI2C

sda = 4        #D4
scl = 5        #D5
i2c = "i2c0"
frq = 400000
i2c = XiaoI2C(i2c, sda, scl, frq)

# --- SSD1306 I2C address and command definitions ---
SSD1306_I2C_ADDR = 0x3C
SSD1306_SET_CONTRAST = 0x81
SSD1306_DISPLAY_ALL_ON_RESUME = 0xA4
SSD1306_DISPLAY_ALL_ON = 0xA5
SSD1306_NORMAL_DISPLAY = 0xA6
SSD1306_INVERT_DISPLAY = 0xA7
SSD1306_DISPLAY_OFF = 0xAE
SSD1306_DISPLAY_ON = 0xAF
SSD1306_SET_DISPLAY_OFFSET = 0xD3
SSD1306_SET_COM_PINS = 0xDA
SSD1306_SET_VCOM_DETECT = 0xDB
SSD1306_SET_DISPLAY_CLOCK_DIV = 0xD5
SSD1306_SET_PRECHARGE = 0xD9
SSD1306_SET_MULTIPLEX = 0xA8
SSD1306_SET_LOW_COLUMN = 0x00
SSD1306_SET_HIGH_COLUMN = 0x10
SSD1306_SET_START_LINE = 0x40
SSD1306_MEMORY_MODE = 0x20
SSD1306_COLUMN_ADDR = 0x21
SSD1306_PAGE_ADDR = 0x22
SSD1306_COM_SCAN_INC = 0xC0
SSD1306_COM_SCAN_DEC = 0xC8
SSD1306_SEG_REMAP = 0xA0
SSD1306_CHARGE_PUMP = 0x8D

# Display dimensions
SSD1306_WIDTH = 128
SSD1306_HEIGHT = 64
SSD1306_PAGES = 8

# Basic 8x8 font 
font_data = {
    ' ': [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    'A': [0x18,0x24,0x42,0x7E,0x42,0x42,0x42,0x00],
    'B': [0x7C,0x42,0x42,0x7C,0x42,0x42,0x7C,0x00],
    'C': [0x3C,0x42,0x40,0x40,0x40,0x42,0x3C,0x00],
    'D': [0x78,0x44,0x42,0x42,0x42,0x44,0x78,0x00],
    'E': [0x7C,0x40,0x40,0x78,0x40,0x40,0x7C,0x00],
    'F': [0x7C,0x40,0x40,0x78,0x40,0x40,0x40,0x00],
    'G': [0x3C,0x42,0x40,0x4E,0x42,0x42,0x3C,0x00],
    'H': [0x44,0x44,0x44,0x7C,0x44,0x44,0x44,0x00],
    'I': [0x38,0x10,0x10,0x10,0x10,0x10,0x38,0x00],
    'J': [0x1C,0x08,0x08,0x08,0x08,0x48,0x30,0x00],
    'K': [0x44,0x48,0x50,0x60,0x50,0x48,0x44,0x00],
    'L': [0x40,0x40,0x40,0x40,0x40,0x40,0x7C,0x00],
    'M': [0x42,0x66,0x5A,0x42,0x42,0x42,0x42,0x00],
    'N': [0x42,0x62,0x52,0x4A,0x46,0x42,0x42,0x00],
    'O': [0x3C,0x42,0x42,0x42,0x42,0x42,0x3C,0x00],
    'P': [0x7C,0x42,0x42,0x7C,0x40,0x40,0x40,0x00],
    'Q': [0x3C,0x42,0x42,0x42,0x4A,0x44,0x3A,0x00],
    'R': [0x7C,0x42,0x42,0x7C,0x48,0x44,0x42,0x00],
    'S': [0x3C,0x42,0x40,0x3C,0x02,0x42,0x3C,0x00],
    'T': [0x7C,0x10,0x10,0x10,0x10,0x10,0x10,0x00],
    'U': [0x42,0x42,0x42,0x42,0x42,0x42,0x3C,0x00],
    'V': [0x42,0x42,0x42,0x42,0x42,0x24,0x18,0x00],
    'W': [0x42,0x42,0x42,0x42,0x5A,0x66,0x42,0x00],
    'X': [0x42,0x24,0x18,0x18,0x18,0x24,0x42,0x00],
    'Y': [0x44,0x44,0x28,0x10,0x10,0x10,0x10,0x00],
    'Z': [0x7E,0x04,0x08,0x10,0x20,0x40,0x7E,0x00],
    '0': [0x3C,0x42,0x46,0x4A,0x52,0x62,0x3C,0x00],
    '1': [0x10,0x30,0x10,0x10,0x10,0x10,0x38,0x00],
    '2': [0x3C,0x42,0x02,0x0C,0x30,0x40,0x7E,0x00],
    '3': [0x3C,0x42,0x02,0x1C,0x02,0x42,0x3C,0x00],
    '4': [0x08,0x18,0x28,0x48,0x7E,0x08,0x08,0x00],
    '5': [0x7E,0x40,0x7C,0x02,0x02,0x42,0x3C,0x00],
    '6': [0x1C,0x20,0x40,0x7C,0x42,0x42,0x3C,0x00],
    '7': [0x7E,0x42,0x04,0x08,0x10,0x10,0x10,0x00],
    '8': [0x3C,0x42,0x42,0x3C,0x42,0x42,0x3C,0x00],
    '9': [0x3C,0x42,0x42,0x3E,0x02,0x04,0x38,0x00],
    '!': [0x10,0x10,0x10,0x10,0x10,0x00,0x10,0x00],
    '?': [0x3C,0x42,0x02,0x0C,0x10,0x00,0x10,0x00],
    '.': [0x00,0x00,0x00,0x00,0x00,0x00,0x10,0x00],
    ',': [0x00,0x00,0x00,0x00,0x00,0x10,0x10,0x20],
    ':': [0x00,0x10,0x00,0x00,0x00,0x10,0x00,0x00],
    ';': [0x00,0x10,0x00,0x00,0x00,0x10,0x10,0x20],
    '-': [0x00,0x00,0x00,0x7C,0x00,0x00,0x00,0x00],
    '_': [0x00,0x00,0x00,0x00,0x00,0x00,0x7E,0x00],
    '+': [0x00,0x10,0x10,0x7C,0x10,0x10,0x00,0x00],
    '*': [0x00,0x24,0x18,0x7E,0x18,0x24,0x00,0x00],
    '/': [0x02,0x04,0x08,0x10,0x20,0x40,0x00,0x00],
    '\\': [0x40,0x20,0x10,0x08,0x04,0x02,0x00,0x00],
    '=': [0x00,0x00,0x7E,0x00,0x7E,0x00,0x00,0x00],
    '\'': [0x10,0x10,0x20,0x00,0x00,0x00,0x00,0x00],
    '"': [0x24,0x24,0x00,0x00,0x00,0x00,0x00,0x00],
    '(': [0x08,0x10,0x20,0x20,0x20,0x10,0x08,0x00],
    ')': [0x20,0x10,0x08,0x08,0x08,0x10,0x20,0x00],
    '[': [0x1C,0x10,0x10,0x10,0x10,0x10,0x1C,0x00],
    ']': [0x38,0x08,0x08,0x08,0x08,0x08,0x38,0x00],
    '{': [0x0C,0x10,0x10,0x60,0x10,0x10,0x0C,0x00],
    '}': [0x30,0x08,0x08,0x06,0x08,0x08,0x30,0x00],
    '<': [0x08,0x10,0x20,0x40,0x20,0x10,0x08,0x00],
    '>': [0x20,0x10,0x08,0x04,0x08,0x10,0x20,0x00],
    '|': [0x10,0x10,0x10,0x10,0x10,0x10,0x10,0x00],
    '@': [0x3C,0x42,0x5A,0x5A,0x5C,0x40,0x3C,0x00],
    '#': [0x24,0x24,0x7E,0x24,0x7E,0x24,0x24,0x00],
    '$': [0x10,0x3C,0x50,0x3C,0x12,0x3C,0x10,0x00],
    '%': [0x62,0x64,0x08,0x10,0x26,0x46,0x00,0x00],
    '^': [0x10,0x28,0x44,0x00,0x00,0x00,0x00,0x00],
    '&': [0x30,0x48,0x50,0x20,0x54,0x48,0x34,0x00],
    '~': [0x00,0x00,0x34,0x4C,0x00,0x00,0x00,0x00]
}

# --- Helper functions ---

# Write a single command byte to SSD1306 via I2C
def ssd1306_write_command(cmd):
    i2c.writeto(SSD1306_I2C_ADDR, bytes([0x00, cmd]))

# Write multiple command bytes to SSD1306 via I2C
def ssd1306_write_commands(cmds):
    data = bytearray([0x00] + list(cmds))
    i2c.writeto(SSD1306_I2C_ADDR, data)

# Write display data bytes to SSD1306 via I2C
def ssd1306_write_data(data):
    buffer = bytearray(len(data) + 1)
    buffer[0] = 0x40
    buffer[1:] = data
    i2c.writeto(SSD1306_I2C_ADDR, buffer)

# Clear the entire SSD1306 display
def ssd1306_clear():
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, 0, SSD1306_PAGES - 1]))

    empty_data = bytearray(SSD1306_WIDTH)
    for _ in range(SSD1306_PAGES):
        ssd1306_write_data(empty_data)
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

# Initialize SSD1306 display with recommended settings
def ssd1306_init():
    commands = [
        bytearray([SSD1306_DISPLAY_OFF]),
        bytearray([SSD1306_SET_DISPLAY_CLOCK_DIV, 0x80]),
        bytearray([SSD1306_SET_MULTIPLEX, SSD1306_HEIGHT - 1]),
        bytearray([SSD1306_SET_DISPLAY_OFFSET, 0x00]),
        bytearray([SSD1306_SET_START_LINE | 0x00]),
        bytearray([SSD1306_CHARGE_PUMP, 0x14]),
        bytearray([SSD1306_MEMORY_MODE, 0x00]),
        bytearray([SSD1306_SEG_REMAP | 0x01]),
        bytearray([SSD1306_COM_SCAN_DEC]),
        bytearray([SSD1306_SET_COM_PINS, 0x12]),
        bytearray([SSD1306_SET_CONTRAST, 0xCF]),
        bytearray([SSD1306_SET_PRECHARGE, 0xF1]),
        bytearray([SSD1306_SET_VCOM_DETECT, 0x40]),
        bytearray([SSD1306_DISPLAY_ALL_ON_RESUME]),
        bytearray([SSD1306_NORMAL_DISPLAY]),
        bytearray([SSD1306_DISPLAY_ON])
    ]

    for cmd in commands:
        ssd1306_write_commands(cmd)

    ssd1306_clear()
    print("SSD1306 initialized successfully.")
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

# Draw a string of text at specified column and page (row) on SSD1306
def ssd1306_draw_text(text, x, y): 
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, x, x + len(text) * 8 - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, y, y + 0]))

    display_data = bytearray()
    for char in text:
        font_bytes = font_data.get(char.upper(), font_data[' '])
        for col in range(7, -1, -1):
            val = 0
            for row in range(8):
                if font_bytes[row] & (1 << col):
                    val |= (1 << row)
            display_data.append(val)

    ssd1306_write_data(display_data)

i2c_addr = i2c.scan()
if SSD1306_I2C_ADDR not in i2c_addr:
    raise Exception("SSD1306 not found on I2C bus")
else:
    print("SSD1306 found on I2C bus: 0x{:02X}".format(SSD1306_I2C_ADDR))

# Initialize display
ssd1306_init()
ssd1306_draw_text("NRF54L15", 30, 2)
ssd1306_draw_text("HELLO WORLD", 20, 4)
```

Explicação do Código:

Este código inicializa e controla um display OLED SSD1306 via comunicação I2C, define os comandos e parâmetros do display, e implementa funções para limpar a tela, inicialização e exibição de texto.

- Importar módulos e inicializar a comunicação I2C:
       O módulo time foi importado para operações de atraso, e o módulo XiaoI2C foi importado para inicializar a comunicação I2C. Os pinos SDA e SCL do I2C foram definidos, e a frequência do I2C foi configurada. Em seguida, um objeto XiaoI2C foi criado para comunicação com dispositivos I2C, como um display OLED.


- Definir as instruções e parâmetros do display SSD1306:
       Define o endereço I2C do display SSD1306 e uma série de comandos de controle (como configurar contraste, ligar/desligar o display, etc.). Também define os parâmetros de tamanho do display (largura, altura e número de páginas) e uma biblioteca de fontes simples em matriz de pontos 8x8 para exibir caracteres na tela.
- Definir funções auxiliares:
        Uma série de funções auxiliares são definidas para enviar comandos e dados ao SSD1306.
- Lógica do programa principal:
      Primeiro, verifica se o display SSD1306 está conectado ao barramento I2C realizando uma varredura I2C. Se o display for encontrado, chama a função ssd1306_init para inicializar o display. Em seguida, chama a função ssd1306_draw_text para exibir as duas linhas de texto "NRF54L15" e "HELLO WORLD" no display.

### Resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf54L15_micropython/14.jpg" style={{width:500, height:'auto'}}/></div>

## SPI

### Hardware

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>ePaper Driver Board for Seeed Studio XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper-driver-board-for-xiao.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software

```py
import time
from boards.xiao import XiaoPin, XiaoSPI

# -------- Pins & SPI --------
RST = 0; CS = 1; DC = 3; BUSY = 5
sck = 9; mosi = 10; miso = 8; spi_id = "spi0"

RST = XiaoPin(RST, XiaoPin.OUT)
CS  = XiaoPin(CS, XiaoPin.OUT)
DC  = XiaoPin(DC, XiaoPin.OUT)
BUSY = XiaoPin(BUSY, XiaoPin.IN, XiaoPin.PULL_UP)
spi = XiaoSPI(spi_id, 20_000_000, sck, mosi, miso)

# -------- ePaper basics --------
def reset():
    RST.value(0); time.sleep_ms(10)
    RST.value(1); time.sleep_ms(10)

def send_command(cmd):
    DC.value(0); CS.value(0)
    spi.write(bytearray([cmd & 0xFF]))
    CS.value(1)

def send_data(data):
    DC.value(1); CS.value(0)
    if isinstance(data, int):
        spi.write(bytearray([data & 0xFF]))
    else:
        spi.write(data)
    CS.value(1)

def wait_until_idle():
    # If BUSY = 0, it indicates that the device is busy. You can then switch back to polling.
    # while BUSY.value() == 0: time.sleep_ms(1)
    time.sleep_ms(1)

def init_display():
    reset()
    send_command(0x00); send_data(0x1F)
    send_command(0x04); time.sleep_ms(100); wait_until_idle()
    send_command(0x50); send_data(0x21); send_data(0x07)

def clear_screen():
    CS.value(0)
    DC.value(0); spi.write(b'\x10'); DC.value(1)
    for _ in range(48000): spi.write(b'\xFF')
    DC.value(0); spi.write(b'\x13'); DC.value(1)
    for _ in range(48000): spi.write(b'\xFF')
    DC.value(0); spi.write(b'\x12'); CS.value(1)
    wait_until_idle()

# -------- Geometry --------
WIDTH, HEIGHT = 800, 480
BYTES_PER_ROW = WIDTH // 8
linebuf = bytearray(BYTES_PER_ROW)

# -------- Minimal 5x7 glyphs (columns, LSB=top) --------
FONT_W, FONT_H = 5, 7
G = {
    ' ':[0x00,0x00,0x00,0x00,0x00],
    # Digits
    '0':[0x3E,0x51,0x49,0x45,0x3E],
    '1':[0x00,0x42,0x7F,0x40,0x00],
    '2':[0x42,0x61,0x51,0x49,0x46],
    '3':[0x21,0x41,0x45,0x4B,0x31],
    '4':[0x18,0x14,0x12,0x7F,0x10],
    '5':[0x27,0x45,0x45,0x45,0x39],
    '6':[0x3C,0x4A,0x49,0x49,0x30],
    '7':[0x01,0x71,0x09,0x05,0x03],
    '8':[0x36,0x49,0x49,0x49,0x36],
    '9':[0x06,0x49,0x49,0x29,0x1E],
    # Uppercase
    'A':[0x7E,0x11,0x11,0x11,0x7E],
    'F':[0x7F,0x09,0x09,0x09,0x01],
    'H':[0x7F,0x08,0x08,0x08,0x7F],
    'I':[0x00,0x41,0x7F,0x41,0x00],
    'L':[0x7F,0x40,0x40,0x40,0x40],
    'M':[0x7F,0x02,0x0C,0x02,0x7F],
    'O':[0x3E,0x41,0x41,0x41,0x3E],
    'P':[0x7F,0x09,0x09,0x09,0x06],
    'R':[0x7F,0x09,0x19,0x29,0x46],
    'T':[0x01,0x01,0x7F,0x01,0x01],
    'X':[0x63,0x14,0x08,0x14,0x63],
    'Y':[0x07,0x08,0x70,0x08,0x07],
    # Lowercase
    'a':[0x20,0x54,0x54,0x54,0x78],
    'c':[0x38,0x44,0x44,0x44,0x20],
    'e':[0x38,0x54,0x54,0x54,0x18],
    'h':[0x7F,0x08,0x04,0x04,0x78],
    'i':[0x00,0x44,0x7D,0x40,0x00],
    'l':[0x00,0x41,0x7F,0x40,0x00],
    'n':[0x7C,0x08,0x04,0x04,0x78],
    'o':[0x38,0x44,0x44,0x44,0x38],
    'p':[0x7C,0x14,0x14,0x14,0x08],
    'r':[0x7C,0x08,0x04,0x04,0x08],
    't':[0x04,0x3F,0x44,0x40,0x20],
    'y':[0x0C,0x50,0x50,0x50,0x3C],
}

def glyph(ch):
    return G.get(ch, G[' '])

# -------- Text helpers --------
def text_size(text, scale=1, spacing=1):
    w = 0
    for _ in text:
        w += (FONT_W * scale + spacing)
    if w: w -= spacing
    return w, FONT_H * scale

def text_pixel(x, y, text, sx, sy, scale=1, spacing=1):
    # Return 0 = Black, 1 = White
    if y < sy or y >= sy + FONT_H * scale:
        return 1
    lx = x - sx
    if lx < 0:
        return 1
    cursor = 0
    for ch in text:
        cw = FONT_W * scale
        if cursor <= lx < cursor + cw:
            cx_scaled = lx - cursor
            cy_scaled = y - sy
            cx = cx_scaled // scale
            cy = cy_scaled // scale
            col = glyph(ch)[cx] 
            bit = (col >> cy) & 1
            return 0 if bit else 1
        cursor += cw + spacing
    return 1

# -------- Stream update --------
def epaper_update_lines(lines):
    CS.value(0)

    # The old picture is completely white.
    DC.value(0); spi.write(b'\x10'); DC.value(1)
    for _ in range(HEIGHT * BYTES_PER_ROW):
        spi.write(b'\xFF')

    # New image: Generated row by row
    DC.value(0); spi.write(b'\x13'); DC.value(1)
    for y in range(HEIGHT):
        bi = 0; bitpos = 7; linebuf[:] = b'\x00' * BYTES_PER_ROW
        for x in range(WIDTH):
            val = 1  # Default white
            for (txt, tx, ty, scale) in lines:
                if text_pixel(x, y, txt, tx, ty, scale) == 0:
                    val = 0
                    break
            if val:
                linebuf[bi] |= (1 << bitpos)  # 1 = white
            bitpos -= 1
            if bitpos < 0:
                bitpos = 7; bi += 1
        spi.write(linebuf)

    # Redresh
    DC.value(0); spi.write(b'\x12'); CS.value(1)
    wait_until_idle()

# -------- Main --------
LINE1 = "XIAO nRF541L15"
LINE2 = "Hello MicroPython"
SCALE1 = 3
SCALE2 = 3

def main():
    init_display()
    clear_screen()

    # Centered layout
    w1, h1 = text_size(LINE1, SCALE1)
    w2, h2 = text_size(LINE2, SCALE2)
    total_h = h1 + 12 + h2  # Line spacing: 12 px
    y0 = (HEIGHT - total_h) // 2
    x1 = (WIDTH - w1) // 2
    x2 = (WIDTH - w2) // 2
    y1 = y0
    y2 = y0 + h1 + 12

    lines = [
        (LINE1, x1, y1, SCALE1),
        (LINE2, x2, y2, SCALE2),
    ]
    epaper_update_lines(lines)

    while True:
        time.sleep(1_000_000)

if __name__ == "__main__":
    main()
```

Explicação do Código:

- Importação de Módulos
        - `time`: Habilita funções relacionadas ao tempo, como atrasos.
        - `XiaoPin and XiaoSPI`: Importados de `boards.xiao`; XiaoPin é usado para controlar pinos GPIO, enquanto XiaoSPI gerencia a comunicação SPI.

- Configuração de Pinos e SPI
        - Pinos específicos foram definidos: Reset (RST), Chip Select (CS), Data/Command (DC) e Busy (BUSY).
        - Pinos relacionados ao SPI (SCK, MOSI, MISO) e o controlador SPI foram configurados.
        - O modo de operação (entrada/saída) de todos os pinos GPIO foi inicializado.
        - Uma instância SPI foi criada com frequência definida em 20 MHz.

- Funções Básicas do ePaper
        - `reset()`: Executa uma operação de reset por hardware no display.
        - `send_command(cmd)`: Transmite um comando de um único byte.
        - `send_data(data)`: Envia dados, que podem ser um único byte ou múltiplos bytes.
        - `wait_until_idle()`: Aguarda o display entrar em estado ocioso (atualmente implementado com um atraso simples).
        - `init_display()`: Realiza os procedimentos de inicialização do display.
        - `clear_screen()`: Limpa a tela, definindo-a para um estado totalmente branco.

- Parâmetros do Display
        - `WIDTH, HEIGHT = 800, 480`: Especifica a resolução do display.
        - `BYTES_PER_ROW`: Indica o número de bytes necessários para cada linha de pixels.
        - `linebuf`: Um buffer de linha que armazena temporariamente os dados de pixels de uma única linha.

- Sistema de Fontes
        - Uma fonte simples de 5x7 pixels foi definida, armazenada no dicionário `G`.
        - `glyph(ch)`: Recupera os dados de pixels correspondentes a um determinado caractere.
        - `text_size()`: Calcula as dimensões do texto quando exibido em uma proporção de escala especificada.
        - `text_pixel()`: Determina se um pixel deve ser desenhado em uma posição específica (usado na renderização de texto).

- Atualização do Display
        - **epaper_update_lines(lines)**: A função principal para atualizar o display.
        - Primeiro, envia dados para definir um fundo totalmente branco.
        - Em seguida, calcula e transmite os novos dados de imagem linha por linha.
        - Por fim, aciona uma atualização do display para mostrar o novo conteúdo.
        - Suporta exibição de texto em múltiplas linhas, onde cada linha pode ter posições e proporções de escala distintas.

- Função main()
        - Inicializa o display.
        - Calcula a posição centralizada para o texto.
        - Cria uma lista de configuração para as linhas de texto.
        - Chama `epaper_update_lines()` para atualizar o conteúdo do display.
        - Entra em um loop de espera infinito.

### Resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper_1.jpg" style={{width:600, height:'auto'}}/></div>

## Executar o programa automaticamente

Se você deseja que seu programa seja executado automaticamente, pode seguir estas etapas:

**Passo 1.** Crie um novo arquivo de programa e use Ctrl + S para salvá-lo na memória flash do dispositivo MicroPython, e nomeie-o como main.py.

Vamos usar o programa de piscar LED como exemplo aqui

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/auto_2.png" style={{width:600, height:'auto'}}/></div>

Em seguida, ele será exibido na seção de dispositivo MicroPython/flash.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/auto_3.png" style={{width:600, height:'auto'}}/></div>

**Passo 2.** Ao pressionar o botão Reset na placa, o efeito de execução automática pode ser alcançado.

Efeito:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

<!-- :::tip
如果您自己自己定义或封装了模块的py文件，也请一并上传
::: -->

## FAQ

### Atualização do Bootloader

Se você encontrar uma situação em que não consegue fazer upload de programas MicroPython usando o Thonny, porque o Bootloader usado durante a produção de fábrica era de uma versão mais antiga.

**Passo 1.** Fiação

<div class="table-center">
  <table align="center">
    <tr>
        <th>OpenOCD / JTAG / SWD</th>
        <th>XIAO nRF54L15</th>
    </tr>
    <tr>
        <th>5V</th>
        <th>5V</th>
    </tr>
    <tr>
        <th>GND</th>
        <th>GND</th>
    </tr>
    <tr>
        <th>SWDIO</th>
        <th>SWDIO2</th>
    </tr>
    <tr>
        <th>SWDCLK</th>
        <th>SWDCLK2</th>
    </tr>
    <tr>
        <th>RST</th>
        <th>RST</th>
    </tr>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nrf54_wiring_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
Certifique-se de que as conexões dos pinos estão corretas para evitar falhas no processo de gravação.
:::

**Passo 2.** Baixe o programa de gravação de firmware

[xiao_samd11_flash](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_samd11_flash_nrf.zip)

**Passo 3.** Execute o script

Usando o sistema Windows como exemplo. Descompacte o arquivo baixado, clique com o botão direito na pasta e abra o terminal. Execute **.\xiao_samd11_openocd_flash.bat**. Se a fiação estiver correta, o resultado será como mostrado na imagem a seguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nrf54.jpg" style={{width:800, height:'auto'}}/></div>

:::tip
Em sistemas Mac/Linux, você precisa alterar **.bat** para **.sh**
:::

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
