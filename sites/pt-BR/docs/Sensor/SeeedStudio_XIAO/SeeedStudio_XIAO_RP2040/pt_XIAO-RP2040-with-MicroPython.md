---
description: Seeed Studio XIAO RP2040 com MicroPython
title: MicroPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao-rp2040-45font_1.webp
slug: /XIAO-RP2040-with-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-MicroPython/
---

# Seeed Studio XIAO RP2040 com MicroPython

## Introdução ao MicroPython

[MicroPython](https://github.com/micropython/micropython/wiki) é um interpretador Python com um recurso parcial de compilação de código nativo. Ele fornece um subconjunto de recursos do Python 3.5, implementado para processadores embarcados e sistemas com recursos limitados. Ele é diferente do CPython e você pode ler mais sobre as diferenças [aqui](https://github.com/micropython/micropython/wiki/Differences).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## Introdução

Primeiro, vamos conectar a série Seeed Studio XIAO RP2040 ao computador e enviar um código simples em MicroPython para verificar se a placa está funcionando bem.

### Configuração de hardware

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html) ou [Seeed Studio XIAO RP2040 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Plus-p-6932.html) x1
- Cabo Type-C x1
- PC x1

### Conectar a série XIAO RP2040 ao PC

- **Passo 1**. Pressione e segure o botão **BOOT** e então conecte a série Seeed Studio XIAO RP2040 ao PC através do cabo Type-C. Se funcionar bem, será exibido um disco **RPI-RP2** no PC.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

- **Passo 2**. Grave o firmware

    Basta ir ao site oficial e baixar o firmware mais recente, depois arrastar e soltar o arquivo `.uf2` no disco **RPI-RP2** para concluir a gravação do firmware.

    - Firmware MicroPython da série XIAO RP2040](https://micropython.org/download/SEEED_XIAO_RP2040/)

### Configuração de software

- **Passo 1**. Baixe e instale a versão mais recente do [editor Thonny](https://thonny.org/) de acordo com o seu sistema operacional

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **Passo 2**. Inicie o Thonny

- **Passo 3**. Clique em **Tools-->Options** para abrir as configurações.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **Passo 4**. Escolha a interface **Interpreter** e selecione o dispositivo como **MicroPython(generic)** e a porta como **Board CDC @ Port**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/mpy_1.png" /></div>

**Passo 5.** As informações de versão serão exibidas no Shell.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/mpy_2_1.png" /></div><br/>

**Passo 6.** Vá em Files -> New, cole o código abaixo e execute o script.

```py
from machine import Pin, Timer

led = Pin(25, Pin.OUT)
Counter = 0
Fun_Num = 0

def fun(tim):
    global Counter
    Counter = Counter + 1
    print(Counter)
    led.value(Counter%2)

tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=fun)
```

- O LED piscará em intervalos de 1 segundo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/mpy_1.jpg" /></div><br/>

:::tip

- A seção [Additional Resources](#recursos-adicionais) contém o firmware MicroPython e exemplos relevantes para o XIAO RP2040 Plus. Você pode usar esses exemplos seguindo os tutoriais do XIAO RP2040, mas certifique-se de substituir e modificar os pinos correspondentes.
- Para verificar as diferenças dentro da série XIAO RP2040, consulte [XIAO RP2040 Series Pin Overview](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040/#visão-geral-do-hardware)

:::

## Pinos da série XIAO RP2040

| Nome do pino MicroPython | GPIO do XIAO RP2040 | GPIO do XIAO RP2040 Plus | ADC | Função |
| :--- | :---: | :---: | :---: | :--- |
| D0 / A0 | GPIO26 | GPIO26 | 0 | GPIO, ADC0 |
| D1 / A1 | GPIO27 | GPIO27 | 1 | GPIO, ADC1 |
| D2 / A2 | GPIO28 | GPIO28 | 2 | GPIO, ADC2 |
| D3 / A3 | GPIO29 | GPIO29 | 3 | GPIO, ADC3 |
| D4 / SDA | GPIO6 | GPIO6 | — | GPIO, I2C SDA |
| D5 / SCL | GPIO7 | GPIO7 | — | GPIO, I2C SCL |
| D6 / TX | GPIO0 | GPIO0 | — | GPIO, UART TX |
| D7 / RX | GPIO1 | GPIO1 | — | GPIO, UART RX |
| D8 / SCK | GPIO2 | GPIO2 | — | GPIO, SPI SCK |
| D9 / MISO | GPIO4 | GPIO4 | — | GPIO, SPI MISO |
| D10 / MOSI | GPIO3 | GPIO3 | — | GPIO, SPI MOSI |
| NEOPIXEL | GPIO12 | GPIO12 | — | Dados WS2812 NeoPixel |
| NEOPIXEL_POWER / NEO_PWR / RGB_EN | GPIO11 | GPIO11 | — | Habilitar alimentação do NeoPixel (RGB_EN no Plus) |
| LED_G / D23 | GPIO16 | GPIO16 | — | LED RGB verde; Plus D23 |
| LED_R / D24 | GPIO17 | GPIO17 | — | LED RGB vermelho; Plus D24 |
| LED_B / LED | GPIO25 | GPIO25 | — | LED RGB azul / LED de usuário |
| D12 | — | GPIO18 | — | GPIO de expansão Plus |
| D13 / SCL1 | — | GPIO21 | — | Plus I2C1 SCL |
| D14 / SDA1 | — | GPIO20 | — | Plus I2C1 SDA |
| D15 | — | GPIO19 | — | GPIO de expansão Plus |
| D16 | — | GPIO22 | — | GPIO de expansão Plus |
| D17 | — | GPIO23 | — | GPIO de expansão Plus |
| D19 | — | GPIO5 | — | GPIO de expansão Plus |
| D20 | — | GPIO13 | — | GPIO de expansão Plus |
| D21 | — | GPIO14 | — | GPIO de expansão Plus |
| D22 | — | GPIO15 | — | GPIO de expansão Plus |
| D25 | — | GPIO10 | — | GPIO de expansão Plus |
| D26 | — | GPIO9 | — | GPIO de expansão Plus |
| D27 | — | GPIO8 | — | GPIO de expansão Plus |
| BAT_EN | — | GPIO24 | — | Habilitar alimentação da bateria Plus |

## Acender o LED RGB no Seeed Studio XIAO RP2040

Há um LED RGB equipado no Seeed Studio XIAO RP2040 e vamos acendê-lo com MicroPython. É necessária uma biblioteca de terceiros, então precisamos adicionar primeiro uma biblioteca adicional.

- **Passo 1**. Baixe a biblioteca [ws2812.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ws2812.py) e abra-a com o Thonny.

- **Passo 2**. Clique em **File-->Save as** e salve a biblioteca.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

Escolha o **Raspberry Pi Pico** como o local onde vamos salvar.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

Certifique-se de que o nome do arquivo salvo seja **ws2812.py**, caso contrário não funcionará.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk6.png" /></div>

- **Passo 3**. Copie os códigos a seguir para o Thonny.

```cpp
from ws2812 import WS2812
import utime
import machine
power = machine.Pin(11,machine.Pin.OUT)
power.value(1)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
YELLOW = (255, 150, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
BLUE = (0, 0, 255)
PURPLE = (180, 0, 255)
WHITE = (255, 255, 255)
COLORS = (BLACK, RED, YELLOW, GREEN, CYAN, BLUE, PURPLE, WHITE)

led = WS2812(12,1)#WS2812(pin_num,led_count)

while True:
    print("Beautiful color")
    for color in COLORS: 
        led.pixels_fill(color)
        led.pixels_show()
        utime.sleep(0.2)
```

- **Passo 4**. Envie os códigos clicando no botão "Run current script". Na primeira vez, o Thonny perguntará onde você deseja salvar o arquivo de código. Tanto **This Computer** quanto **Raspberry Pi Pico** são adequados.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

Se funcionar bem, você verá o LED RGB mudar e piscar as luzes. E a saída do texto "Beautiful Color" também será exibida no Shell.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_14.png" /></div>

## Conectar o Seeed Studio XIAO RP2040 com Display via IIC

Neste projeto, vamos conectar o [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) através da interface IIC para demonstrar a função IIC no Seeed Studio XIAO RP2040.

**Conexão de hardware**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **Passo 1**. Baixe a biblioteca [ssd1306.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ssd1306.py) e abra-a com o Thonny.

- **Passo 2**. Clique em "File-->Save as" e salve a biblioteca em "Raspberry Pi Pico"

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

Escolha "Raspberry Pi Pico" como o local onde vamos salvar.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

Certifique-se de que o nome do arquivo salvo seja "ssd1306.py", caso contrário não funcionará.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk8.png" /></div>

- **Passo 3**. Copie os códigos a seguir para o Thonny.

```cpp
from ssd1306 import SSD1306_I2C
from machine import Pin, I2C
from time import sleep

i2c = I2C(1, scl=Pin(7), sda=Pin(6), freq=200000)#Grove - OLED Display 0.96" (SSD1315)
oled = SSD1306_I2C(128, 64, i2c)

while True:  
    oled.fill(0)#clear
    oled.text("Hello,World!",0,0)
    oled.show()
    #sleep(0.5)
```

- **Passo 4**. Envie os códigos clicando no botão "Run current script". Na primeira vez, o Thonny perguntará onde você deseja salvar o arquivo de código. Tanto **This Computer** quanto **Raspberry Pi Pico** são adequados.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

Se funcionar bem, você verá o texto "Hello,World!" exibido na tela.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_16.png" /></div>

## Console de dispositivo MicroPython

Nosso parceiro **Neil** escreveu um programa de console de linha de comando para o XIAO usando MicroPython. Com este programa você pode facilmente enviar, baixar e excluir arquivos. Agradecemos a ele por sua contribuição ao XIAO!

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div>

## Recursos adicionais

Algumas bibliotecas adicionais e códigos de exemplo estão aqui:

- **[ZIP]** [XIAO-RP2040-MicroPython-Grove.zip](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/XIAO-RP2040-MicroPython-Grove.zip)

- **[ZIP]** [XIAO-RP2040-Plus-Firmware-And-Examples](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/xiao_rp2040_plus_micropython.zip)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
