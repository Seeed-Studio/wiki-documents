---
description: Seeed Studio XIAO RP2040 com CircuitPython
title: CircuitPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-RP2040-with-CircuitPython
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-CircuitPython/
---
# **Seeed Studio XIAO RP2040 com CircuitPython**

CircuitPython é uma linguagem de programação projetada para simplificar a experimentação e o aprendizado de programação em placas de microcontroladores de baixo custo. Ela torna o início mais fácil do que nunca, sem necessidade de downloads prévios no computador. Depois de configurar sua placa, abra qualquer editor de texto e comece a editar o código. É simples assim.

## **Primeiros Passos**

### Instalação

**Etapa 1** Entrar no modo Bootloader

Antes de instalarmos o CircuitPython no Seeed Studio XIAO RP2040, é necessário entrar no modo bootloader. Podemos entrar no modo bootloader com a seguinte operação:

- Pressione e segure o botão "BOOT". (O "B" está escrito na placa mostrada à direita)
- Conecte o Seeed Studio XIAO PR2040 ao seu computador enquanto ainda mantém o botão pressionado.
- O computador então exibirá uma unidade de disco (RP1-RP2)

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

A unidade de disco aparece (RP1-RP2):

<div align="center"><img width={150} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu.png" /></div>


**Etapa 2** Baixe o [firmware](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-CircuitPython.uf2) para o Seeed Studio XIAO RP2040

**Etapa 3** Arraste o arquivo .urf para a unidade de disco ("RP1-RP2")

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu9.png" /></div>


**Etapa 4** Verifique a unidade de disco para ver se o nome foi alterado para "CIRCUITPY".

<div align="center"><img width={150} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" /></div>


Agora você instalou com sucesso o CircuitPython na placa Seeed Studio XIAO RP2040.

### Tutorial de Piscar LED

**Etapa 1** Baixe o editor CircuitPython - [Mu Editor](https://codewith.mu/en/download)

**Etapa 2** Abra e escolha o modo como "CircuitPython"

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu7.png" /></div>


**Etapa 3** Copie e envie os códigos a seguir:

```cpp
"""Example for Pico. Blinks the built-in LED."""
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

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu6.png" /></div>


O LED de usuário no Seeed Studio XIAO RP2040 então vai piscar.

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