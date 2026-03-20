---
description: CircuitPython para XIAO ESP32S3
title: Projeto CircuitPython para XIAO ESP32S3
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_project_circuitpython
last_update:
  date: 08/18/2024
  author: Isaac, Djair Guilherme
createdAt: '2023-08-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_project_circuitpython/
---

# Visão Geral do Projeto

Este wiki foi atualizado: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_with_micropython/

CircuitPython é uma linguagem de programação ideal para o XIAO ESP32S3, pois simplifica projetos de computação física. Baseada em Python, ela possui uma sintaxe amigável para iniciantes e inclui módulos para acessar hardware como sensores e displays. Como o CircuitPython já oferece suporte ao chip ESP32S3, este projeto tenta compilar o CircuitPython na placa Seeed Studio XIAO ESP32S3.

## XIAO ESP32S3 com Display OLED

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

### Preparação de Hardware

Estou usando o Seeed Studio XIAO ESPS3 e o Seeed Studio Grove OLED Display 0.96 como hardware aqui.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio Grove OLED Display 0.96</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-oled-displey-0.96-ssd1315-preview.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparação de Software

Estou usando o software Thonny IDE (Windows) e algumas bibliotecas e arquivos relacionados.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>arquivos relacionados (bibliotecas)</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:500, height:'auto'}}/></div>

### Primeiros Passos

#### Baixar o firmware CircuitPython para XIAO ESP32S3

[Firmwares CircuitPython 9.1.1 e 9.20 Alpha para XIAO ESP32S3 Sense](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense)

#### Conecte a placa XIAO ESP32S3 ao PC no modo BootLoader

O método específico é:

- **Passo 1**. Pressione e segure o botão BOOT no XIAO ESP32S3 sem soltá-lo.

- **Passo 2**. Mantenha o botão BOOT pressionado e, em seguida, conecte ao computador via cabo de dados. Solte o botão BOOT após conectar ao computador.

- **Passo 3**. Envie o programa **Blink** para verificar o funcionamento do XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

#### Abra o Thonny e configure as opções

1. Após executar o Thonny, navegue até "Tools -> Options" e clique na opção "Options"

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/03.png" /></div>

2. Selecione a opção "Interpreter" e clique na seleção "CircuitPython (generic)"

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/04.png" /></div>

### Gravar o firmware CircuitPython na placa XIAO ESP32S3

1. Clique em "(esptool)" no Thonny. Ele solicitará que você baixe o firmware CircuitPython mais recente e o grave na placa.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/06.png" /></div>

2. O "(esptool)" no Thonny é mostrado como abaixo e primeiro escolha a "Target port" correta.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/07.png" /></div>

3. Selecione a família CircuitPython como "ESP32-S3" e selecione o ícone com as três linhas horizontais ao lado do botão install, para incluir o Firmware que você baixou.
Ex.: (seeed_xiao_esp32s3_911.bin ou seeed_xiao_esp32s3_920.bin)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/08.png" /></div>

4. O Thonny preencherá o reset e você pode clicar em "Install" agora.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/09.png" /></div>

5. Depois de um tempo mostrando "Done", a janela pode ser fechada.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/10.png" /></div>

6. Haverá um driver "CIRCUITPY" no PC, o que mostra que a placa foi gravada com sucesso.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/11.png" /></div>

#### Adicionar os arquivos relacionados (bibliotecas) ao driver "CIRCUITPY"

Copie todos os arquivos de [arquivos relacionados (biblioteca)](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip) para o driver "CIRCUITPY".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/12.png" /></div>

:::note
O arquivo "adafruit_ssd1306.mpy" e o arquivo "adafruit_framebuf.mpy" são necessários ao usar o "Seeed Studio Grove OLED Display 0.96"

A biblioteca adafruit_framebuf usa um arquivo de fonte chamado font5x8.bin para renderizar texto. Este arquivo precisa estar acessível dentro do ambiente onde seu código é executado.
:::

#### Escrever código (IIC) e enviar para operar o display OLED

1. Após adicionar os arquivos, agora posso importar a biblioteca adafruit_ssd1306 para o código usando o comando import adafruit_ssd1306 e o ambiente agora está configurado para controlar o display OLED. O código é mostrado abaixo:

```python
from board import *
from busio import I2C
import busio
import adafruit_ssd1306

i2c = I2C(IO6,IO5)  # Initialize I2C communication using IO6 and IO5 pins

# Create a display object with 128x64 resolution and an I2C address of 0x3C
display = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c, addr=0x3C)

# Clear the display
display.fill(0)
display.show()

# Write text on the display
display.text('SeeedStudio ESP32S3', 0, 0 , 1)
display.text('Code by CircuitPython!', 0, 20 , 2)
display.show()
```

2. Envie o código clicando no botão "Run"

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/14.png" /></div>

3. O resultado final

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

## XIAO ESP32S3 Sense usando XIAO Round Display com Sense Camera

### Preparação de Hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Round Display para XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparação de Software

1. Instale o firmware no XIAO ESP32S3 Sense.

<div className="table-center">
  <table align="center">
    <tr>
      <th>Firmware</th>
      <td>
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense"
            style={{ color: '#FFFFFF', fontSize: '16px', textDecoration: 'none' }}
          >
            <strong>Download ⏬</strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

2. Instale os módulos e dependências necessárias.

Você sempre pode instalar bibliotecas CircuitPython usando a ferramenta [circup](https://learn.adafruit.com/keep-your-circuitpython-libraries-on-devices-up-to-date-with-circup/install-circup), da Adafruit. Depois de instalada, basta digitar para instalar quaisquer bibliotecas.

```linux
# install circup
pip install setuptools
pip install circup
pip install --upgrade circup
# install module to library
circup install gc9a01 adafruit_ticks 
```

### Primeiros Passos

Depois de instalar todas as bibliotecas necessárias, basta digitar o código em code.py ou main.py em CIRCUITPY, abaixo, para ver o quadro da câmera no Display Redondo.

```python
import board
import busio
import displayio
import espcamera
import adafruit_ticks
import gc9a01
import struct

i2c = busio.I2C(board.SCL, board.SDA)
spi = busio.SPI(clock=board.SCK, MOSI=board.MOSI)
cam_i2c = busio.I2C(board.CAM_SCL, board.CAM_SDA)

tft_dc  = board.D3
tft_cs  = board.D1
tft_bl  = board.D6

display_bus = displayio.FourWire(spi, command=tft_dc, chip_select=tft_cs)
display = gc9a01.GC9A01(display_bus, width=240, height=240, rotation=0)

# Appears that this example does not use Displayio at all
# print frame directly on display_bus to be faster
# so, rotation setting not works...

main = displayio.Group()
display.root_group = main

# Camera Init
cam = espcamera.Camera(
    data_pins=board.CAM_DATA,
    external_clock_pin=board.CAM_XCLK,
    pixel_clock_pin=board.CAM_PCLK,
    vsync_pin=board.CAM_VSYNC,
    href_pin=board.CAM_HREF,
    pixel_format=espcamera.PixelFormat.RGB565,
    frame_size=espcamera.FrameSize.R240X240,
    i2c=cam_i2c,
    external_clock_frequency=20_000_000,
    framebuffer_count=2,
    grab_mode=espcamera.GrabMode.WHEN_EMPTY)

# Sending init bytes to display_bus
display_bus.send(36, struct.pack(">hh", 0, 239))
display_bus.send(42, struct.pack(">hh", 0, 239))
display_bus.send(43, struct.pack(">hh", 0, 80+239))
display.auto_refresh = False

t0 = adafruit_ticks.ticks_ms()

while True:
    frame = cam.take(1)                                                         
    if isinstance(frame, displayio.Bitmap):                                     
        display_bus.send(44, frame)                                             
        t1 = adafruit_ticks.ticks_ms()                                          
        fps = 1000 / adafruit_ticks.ticks_diff(t1, t0)
        print(f"{fps:3.1f}fps")  # typically runs at about 25fps
        t0 = t1
```

## E mais

- Os arquivos relacionados são todos do [conjunto de bibliotecas Adafruit CircuitPython](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases/download/20230718/adafruit-circuitpython-bundle-8.x-mpy-20230718.zip) montado a partir de https://circuitpython.org/libraries e você pode encontrar todos os arquivos de hardware compatíveis usando CircuitPython.
- O arquivo "font5x8.bin" está [aqui](https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin)
- [Firmware](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense) para o Display Redondo e câmera

## ✨ Projeto de Contribuidores

- Este projeto é apoiado pelo [Projeto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Agradecimentos pelos [esforços do Isaac](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35178340) e seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).
- E [Djair Guilherme](https://github.com/Seeed-Studio/wiki-documents/issues/1237#issuecomment-2295415274).

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
