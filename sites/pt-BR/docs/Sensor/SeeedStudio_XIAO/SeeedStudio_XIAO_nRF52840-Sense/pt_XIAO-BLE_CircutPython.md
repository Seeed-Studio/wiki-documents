---
description: Seeed Studio XIAO nRF52840 com CircuitPython
title: CircuitPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE_CircutPython
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/XIAO-BLE_CircutPython/
---
# **Seeed Studio XIAO nRF52840 com CircuitPython**

CircuitPython é uma linguagem de programação projetada para simplificar a experimentação e o aprendizado de programação em placas de microcontroladores de baixo custo. Ela torna o início mais fácil do que nunca, sem necessidade de downloads prévios no desktop. Depois de configurar sua placa, abra qualquer editor de texto e comece a editar o código. É simples assim.

## **Primeiros Passos**

### Instalação

**Passo 1** Entrar no modo Bootloader

Antes de instalarmos o CircuitPython no Seeed Studio XIAO nRF52840, é necessário entrar no modo bootloader. Podemos entrar no modo bootloader clicando duas vezes no botão Reset:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg" alt="pir" width={600} height="auto" /></p>

Em seguida, o disco aparecerá:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png" alt="pir" width={600} height="auto" /></p>

**Passo 2** Baixar o [firmware](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-Circuitpython.uf2) para o Seeed Studio XIAO nRF52840

**Passo 3** Arraste o arquivo .urf para o driver de disco ("XIAO-SENSE")

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png" alt="pir" width={600} height="auto" /></p>

**Passo 4** Verifique no driver de disco se o nome foi alterado para "CIRCUITPY".

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" alt="pir" width={600} height="auto" /></p>

Agora você instalou com sucesso o CircuitPython na placa Seeed Studio XIAO nRF52840.

### Aplicação

**Passo 1** Baixe o editor CircuitPython - [Mu Editor](https://codewith.mu/en/download) e abra-o

**Passo 2** Clique em "Mode" e escolha o modo como "CircuitPython"

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png" alt="pir" width={600} height="auto" /></p>

**Passo 3** Copie e envie os seguintes códigos:

```cpp
"""Example for Seeed Studio XIAO nRF52840. Blinks the built-in LED."""
import time
import board
import digitalio

led = digitalio.DigitalInOut(board.LED)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True
    time.sleep(0.5)
    led.value = False
    time.sleep(0.5)
```

Clique em "Serial" para abrir o REPL, salve os códigos no REPL como 'code.py' ou 'main.py'

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png" alt="pir" width={600} height="auto" /></p>

O LED de usuário no Seeed Studio XIAO nRF52840 então irá piscar.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
