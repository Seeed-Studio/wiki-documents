---
description: Wio Terminal com CircuitPython
title: Wio Terminal com CircuitPython
keywords:
  - Wio_terminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-CircuitPython
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-CircuitPython/
---
# CircuitPython no Wio Terminal

![](https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/cp-wt.png)

Este wiki apresenta como instalar e executar o [CircuitPython](https://circuitpython.org/) oficial da Adafruit Industries no [Seeeduino Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)!

CircuitPython é uma linguagem de programação projetada para simplificar a experimentação e o aprendizado de programação em placas de microcontroladores de baixo custo. Ele torna o começo mais fácil do que nunca, sem necessidade de downloads prévios no computador. Depois de configurar sua placa, abra qualquer editor de texto e comece a editar o código. Para mais informações, consulte [aqui](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Instalando o CircuitPython

- Baixe o [**Bootloader CircuitPython para Seeeduino Wio Terminal**](https://circuitpython.org/board/seeeduino_wio_terminal/) oficial. Um arquivo `.uf2` será baixado.

- Conecte o Seeeduino Wio Terminal ao seu PC via USB Type-C.

- Entre no modo bootloader deslizando o interruptor de energia duas vezes rapidamente. Para mais referências, veja também [aqui](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/#faq).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

- Uma unidade externa chamada `Arduino` deve aparecer em seu PC. Arraste os arquivos uf2 do CircuitPython baixados para a unidade `Arduino`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>

- Depois de carregar o bootloader do CircuitPython, desconecte o USB Type-C e reconecte. Uma nova unidade externa chamada `CIRCUITPY` deve aparecer.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

- Agora, o CircuitPython está carregado no Seeeduino Wio Terminal! Tudo o que você precisa fazer é escrever seu programa em Python, nomeá-lo `main.py` e arrastá-lo para a unidade `CIRCUITPY`.

Você também deve ver o LCD no Wio Terminal acender, o CircuitPython também oferece suporte ao display LCD nativo!

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/LCD.gif" /></div>

## Conceitos Básicos de CircuitPython

Executando `Blink` usando CircuitPython:

**Observação:** basta copiar e salvar o código a seguir e nomeá-lo `main.py`, e arrastá-lo para a unidade `CIRCUITPY`.

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.D13)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    print("LED ON")
    time.sleep(1)
    led.value = False
    print("LED OFF")
    time.sleep(1)
```

Você deve ver o LED embutido começar a piscar!

### Sensor de Luz Integrado

Execute o seguinte para obter o valor do sensor de luz integrado:

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.LIGHT) # Light Sensor pin on Wio Terminal

def get_voltage(pin):
    return (pin.value * 3.3) / 65536

while True:
    print("Light Sensor Voltage: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/light.png" /></div>

Para mais referências da API do CircuitPython, visite [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials).

## Recursos

- [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
