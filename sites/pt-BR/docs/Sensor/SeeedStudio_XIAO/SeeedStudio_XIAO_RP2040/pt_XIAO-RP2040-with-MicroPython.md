---
description: Seeed Studio XIAO RP2040 com MicroPython
title: MicroPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-RP2040-with-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-MicroPython/
---

# **Seeed Studio XIAO RP2040 com MicroPython**

## **Introdução ao MicroPython**

[MicroPython](https://github.com/micropython/micropython/wiki) é um interpretador Python com um recurso parcial de compilação de código nativo. Ele fornece um subconjunto de recursos do Python 3.5, implementados para processadores embarcados e sistemas com recursos limitados. Ele é diferente do CPython e você pode ler mais sobre as diferenças [aqui](https://github.com/micropython/micropython/wiki/Differences).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## **Primeiros Passos**

Primeiro, vamos conectar o Seeed Studio XIAO RP2040 ao computador e enviar um código simples em MicroPython para verificar se a placa está funcionando bem.

### **Configuração de Hardware**

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html) x1
- Cabo Type-C x1
- PC x1

### **Configuração de Software**

- **Passo 1**. Baixe e instale a versão mais recente do [editor Thonny](https://thonny.org/) de acordo com o seu sistema operacional

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **Passo 2**. Inicie o Thonny

- **Passo 3**. Clique em **"Tools-->Options"** para abrir as configurações.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **Passo 4**. Escolha a interface "Interpreter" e selecione o dispositivo como **"MicroPython(Raspberry Pi Pico)"** e a porta como **"Try to detect prot automatically"**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_9.png" /></div>

### **Conecte o Seeed Studio XIAO RP2040 ao PC e acenda-o**

- **Passo 1**. Pressione e segure o botão "BOOT" e então conecte o Seeed Studio XIAO RP2040 ao PC através do cabo Type-C. Se funcionar bem, será exibida no PC uma unidade "RPI-RP2".

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

- **Passo 2**. Clique em **Install or update MicroPython**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/installandupdate.png" /></div>

Em seguida, ele procurará automaticamente o dispositivo e o exibirá em Target Volume. Na seleção de versão em Micropython abaixo, apenas deixamos o padrão.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/chooseversion.png" /></div>

Clique no botão Install e feche esta página quando o status de instalação indicar Done. As seguintes informações serão exibidas na interface assim que o firmware for concluído.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk3.png" /></div>

- **Passo 3**. Copie os códigos a seguir para o Thonny.

```cpp
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

- **Passo 4**. Envie os códigos clicando no botão "Run current script". Na primeira vez, o Thonny perguntará onde você quer salvar o arquivo de códigos. Tanto **This Computer** quanto **Raspberry Pi Pico** funcionam bem.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

Se funcionar bem, você verá o LED acender e apagar uma vez por segundo. E a saída do número crescente também será exibida no Shell.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_13.png" /></div>

A conexão está completa e agora podemos prosseguir para os outros projetos.

## **Acenda o LED RGB no Seeed Studio XIAO RP2040**

Há um LED RGB equipado no Seeed Studio XIAO RP2040 e vamos acendê-lo com MicroPython. É necessária uma biblioteca de terceiros, então precisamos adicionar uma biblioteca adicional primeiro.

- **Passo 1**. Baixe a biblioteca [ws2812.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ws2812.py) e abra-a com o Thonny.

- **Passo 2**. Clique em "File-->Save as" e salve a biblioteca.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

Escolha "Raspberry Pi Pico" como o local onde vamos salvar.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

Certifique-se de que o nome do arquivo salvo seja "ws2812.py", caso contrário não funcionará.

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

- **Passo 4**. Envie os códigos clicando no botão "Run current script". Na primeira vez, o Thonny perguntará onde você quer salvar o arquivo de códigos. Tanto **This Computer** quanto **Raspberry Pi Pico** funcionam bem.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

Se funcionar bem, você verá o LED RGB mudar e piscar as luzes. E a saída do texto "Beautiful Color" também será exibida no Shell.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_14.png" /></div>

## **Conectar o Seeed Studio XIAO RP2040 com Display via IIC**

Neste projeto, vamos conectar o [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) através da interface IIC para demonstrar a função IIC no Seeed Studio XIAO RP2040.

**Conexão de Hardware**

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

- **Passo 4**. Envie os códigos clicando no botão "Run current script". Na primeira vez, o Thonny perguntará onde você quer salvar o arquivo de códigos. Tanto **This Computer** quanto **Raspberry Pi Pico** funcionam bem.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

Se funcionar bem, você verá o texto "Hello,World!" exibido na tela.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_16.png" /></div>

## Console de Dispositivo MicroPython

Nosso parceiro **Neil** escreveu um programa de console de linha de comando para o XIAO usando MicroPython. Com este programa você pode facilmente enviar, baixar e excluir arquivos. Agradecemos a ele por sua contribuição para o XIAO!

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div>

## Recursos Adicionais

Algumas bibliotecas adicionais e códigos de exemplo estão aqui:

- **[ZIP]** [XIAO-RP2040-MicroPython-Grove.zip](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/XIAO-RP2040-MicroPython-Grove.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
