---
description: Seeed Studio XIAO SAMD21 com CircuitPython
title: CircuitPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-XIAO-CircuitPython
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-CircuitPython/
---

# CircuitPython no Seeed Studio XIAO SAMD21

<!-- ![](https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png" alt="pir" width={600} height="auto" /></p>

Este wiki apresenta como instalar e executar o [CircuitPython](https://circuitpython.org/) oficial da Adafruit Industries na [placa de desenvolvimento Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)!

CircuitPython é uma linguagem de programação projetada para simplificar experimentos e o aprendizado de programação em placas de microcontroladores de baixo custo. Ela torna o início mais fácil do que nunca, sem necessidade de downloads prévios no computador. Depois de configurar sua placa, abra qualquer editor de texto e comece a editar o código. Para mais informações, consulte [aqui](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Instalando o CircuitPython

1. Baixe o [**Bootloader CircuitPython para Seeed Studio XIAO SAMD21**](https://circuitpython.org/board/seeeduino_xiao/) oficial. Um arquivo `.uf2` será baixado.

2. Conecte o Seeed Studio XIAO SAMD21 ao seu PC via USB Type-C.

3. Entre no modo bootloader DFU usando um jumper para conectar os pinos RST duas vezes rapidamente. Para mais referências, consulte também [aqui](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#reset).

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" /></div>


4. Uma unidade externa chamada `Arduino` deverá aparecer no seu PC. Arraste os arquivos uf2 do CircuitPython baixados para a unidade `Arduino`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>


5. Depois de carregar o bootloader CircuitPython, desconecte o USB Type-C e reconecte. Uma nova unidade externa chamada `CIRCUITPY` deverá aparecer.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

6. Agora, o CircuitPython está carregado no Seeed Studio XIAO SAMD21! Tudo o que você precisa fazer é escrever seu programa em python, nomeá-lo `main.py` e arrastá-lo para a unidade `CIRCUITPY`.

## Conceitos básicos de CircuitPyhton

Executando `Blink` usando CircuitPython:

**Nota:** simplesmente copie e salve o código a seguir e nomeie-o `main.py`, e arraste-o para a unidade `CIRCUITPY`.

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.LED_INVERTED)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    time.sleep(1)
    led.value = False
    time.sleep(1)
```

Você deverá ver o LED embutido começar a piscar!

### Brincando com módulos Grove

Você pode usar módulos Grove com interfaces simples Analógica/Digital no CircuitPython. Por exemplo, conecte o Grove - Light Sensor à porta `A0` do Seeeduino XIAO e execute o seguinte:

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.A0) # Analog pin on Seeedino XIAO

def get_voltage(pin):
    return (pin.value * 3.3) / 65536

while True:
    print("Voltage: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/CP.png" /></div>


Para mais referências da API do CircuitPython, visite [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials).

## Recursos

- [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

- [**Installing Circuit Python on Seeed Studio Xiao SAMD21**](https://makeandymake.github.io/2020/05/02/installing-circuitpython-on-seeeduino-xiao.html)

## Suporte Técnico e Discussão sobre o Produto


Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>