---
description: MicroPython para placas compatíveis com Arduino
title: MicroPython para placas compatíveis com Arduino
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Compiling_MicroPython_for_embedded_devices
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Compiling_MicroPython_for_embedded_devices/
---


# Compilando MicroPython para dispositivos embarcados

## O que é MicroPython

MicroPython é uma implementação de software de uma linguagem de programação amplamente compatível com Python 3, escrita em C, que é otimizada para rodar em um microcontrolador.

MicroPython consiste em um compilador Python para bytecode e um interpretador em tempo de execução desse bytecode. O usuário tem acesso a um prompt interativo (o REPL) para executar imediatamente os comandos suportados. Está incluída uma seleção de bibliotecas Python centrais; MicroPython inclui módulos que dão ao programador acesso ao hardware de baixo nível.

## Como construir o firmware (Vamos usar o Xiao SAMD como exemplo)

[Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) já oferece suporte ao desenvolvimento com micropython.

### Primeiro: Prepare o software relevante

"arm-none-linux-gnueabi" é o toolchain que pode ser instalado em sistemas baseados em Debian usando um gerenciador de pacotes como o apt (o pacote se chama gcc-arm-linux-gnueabi). No Ubuntu, o arm-none-linux-gnueabi está incluído em ubertooth-firmware-source. Também precisamos preparar o ambiente instalando as ferramentas necessárias, como gcc, python, git e make. Portanto, executamos este comando

```bash
sudo apt update
sudo apt install cmake make gcc ubertooth-firmware-source python3 git 
```

### Segundo: Alternar espaços de trabalho e clonar o código-fonte

Clone o código-fonte e baixe o código dos submódulos necessários

Execute as seguintes instruções em sequência

```bash
cd ~
git clone https://github.com/micropython/micropython
cd ~/micropython
git submodule update --init --recursive
```

As informações que baixaremos estão neste arquivo, que contém o caminho para o download e o endereço do repositório de código

```bash
cat ~/micropython/.gitmodules 
```

### Terceiro: Construir o mpy-cross, o compilador cruzado MicroPython

A maioria das portas requer que o compilador cruzado MicroPython seja construído primeiro. Este programa, chamado mpy-cross, é usado para pré-compilar scripts Python em arquivos .mpy que podem então ser incluídos (congelados) no firmware/executável para uma porta. Para compilar o mpy-cross use:

```bash
cd ~/micropython/mpy-cross
make
```

### Em seguida: Compilar dependências externas

Usamos o [Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) que já oferece suporte ao desenvolvimento com micropython. É um controlador baseado no chip samd de arquitetura arm.
Portanto, especificamos o número da versão, vamos para o diretório correspondente e compilamos:

```bash
cd ~/micropython/ports/samd
BOARD=SEEED_XIAO make V=1
```

### Finalmente: Gravar o firmware

podemos ver o firmware gerado aqui, copiamos o firmware para o dispositivo e o micro python estará disponível no XIAO SAMD

```bash
ls ~/micropython/ports/samd/build-SEEED_XIAO/ |grep firmware.uf2
```

```bash
sudo cp ~/micropython/ports/samd/build-SEEED_XIAO/firmware.uf2 /media/$USER/Arduino/
```

## Testar nosso firmware

Copie o código abaixo e você verá o LED azul piscando

```python3
from machine import Pin, Timer

led = Pin(19, Pin.OUT)
Counter = 0    
def fun(tim):
    global Counter
    Counter = Counter + 1
    state  =  Counter%2
    led.value(state)

tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=fun)
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/XIAO_SAMD_MICROPYTHON_LED.gif" border="0" /></p>

Como você pode ver, o [Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) já oferece suporte ao desenvolvimento com micropython.

Você também pode se referir a este processo para compilar o firmware micropython para outros dispositivos.

## Suporte Técnico e Discussão de Produtos


Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
