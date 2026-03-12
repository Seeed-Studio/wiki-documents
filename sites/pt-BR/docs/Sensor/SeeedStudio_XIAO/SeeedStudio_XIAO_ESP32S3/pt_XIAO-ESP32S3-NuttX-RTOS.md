---
description: XIAO ESP32S3 com NuttX(RTOS)
title: XIAO ESP32S3 com NuttX(RTOS)
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /xiao_esp32s3_nuttx
sidebar_position: 2
last_update:
  date: 04/08/2025
  author: rcsim
createdAt: '2025-02-14'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_nuttx/
---

# Seeed Studio XIAO ESP32S3 com NuttX(RTOS)

## Introdução

[NuttX](https://nuttx.apache.org/) é um sistema operacional de tempo real (RTOS) maduro, amplamente reconhecido por sua conformidade com padrões e pequeno footprint. Uma das principais características do NuttX é sua escalabilidade, que permite seu uso em ambientes que vão de microcontroladores de 8 bits até sistemas de 64 bits. Essa flexibilidade é alcançada por meio da aderência aos padrões POSIX e ANSI, permitindo que você experimente recursos semelhantes do NuttX em uma ampla variedade de chips de diferentes arquiteturas, famílias e fabricantes de semicondutores.

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

Além disso, o NuttX oferece muitos recursos avançados e úteis, como subsistemas de USB, Ethernet, Áudio e Gráficos. Essas características tornam o NuttX uma escolha atraente para desenvolvedores que buscam um RTOS versátil e robusto, capaz de operar em vários tipos de hardware.

O NuttX oferece suporte a um número vasto e continuamente crescente de placas. [A documentação oficial](https://nuttx.apache.org/docs/latest/platforms/) fornece uma lista abrangente de placas suportadas, organizadas por arquitetura e série de System-on-Chip (SoC).

Por exemplo, a página do [Seeed Studio XIAO ESP32S3](https://nuttx.apache.org/docs/latest/platforms/arm/esp32s3/boards/xiao-esp32s3/index.html) na documentação do NuttX oferece descrições detalhadas de cada recurso suportado e instruções sobre como utilizá-los. Também há uma página específica na documentação do NuttX para os chips da série [Espressif ESP32S3](https://nuttx.apache.org/docs/latest/platforms/xtensa/esp32s3/index.html), onde você pode encontrar a lista de MCUs e periféricos suportados.

## Instalação

A documentação do Nuttx fornece um [guia](https://nuttx.apache.org/docs/latest/quickstart/install.html) para diferentes plataformas. Para o Seeed Studio XIAO ESP32S3, siga estas etapas:

1. Baixe o Espressif esptool(https://docs.espressif.com/projects/esptool/en/latest/esp32/):

    ```bash
    ~/nuttxspace/nuttx$ esptool.py version
    esptool.py v4.8.1
    4.8.1
    ```

2. Crie um workspace

    ```bash
    mkdir nuttxspace
    ```

3. Clone os repositórios

    ```bash
    cd nuttxspace
    git clone https://github.com/apache/nuttx.git nuttx
    git clone https://github.com/apache/nuttx-apps apps
    ```

O Apache Nuttx é dividido em dois projetos:

- Nuttx: contém a implementação do kernel, drivers e subsistemas.
- Apps: contém uma coleção de ferramentas, shells, utilitários de rede, bibliotecas e interpretadores.

## Aplicações

Para iniciar uma aplicação, é necessário carregar uma configuração no NuttX, chamando o comando:

```bash
./tools/configurate.sh board_name:your_application
```

Também é possível verificar a lista de recursos suportados pela placa executando o comando:

```bash
./tools/configurate.sh -L
```

4. Compile o NuttX (o processo de compilação irá gerar os binários do firmware, incluindo nuttx.uf2):

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-esp32s3:nsh
    make V=1
    ```

5. Os botões RESET e BOOT podem ser usados para entrar no modo “Bootloader” pressionando e mantendo pressionada a tecla BOOT enquanto liga a placa e, em seguida, pressionando a tecla RESET uma vez.

6. Carregue o firmware usando esptool.py:

    ```bash
    make flash ESPTOOL_PORT=/dev/ttyACM0 ESPTOOL_BINDIR=./
    ```

## Mão na massa

É hora de explorar o NuttX na prática. Nesta sessão, duas aplicações estão disponíveis: USBNSH e COMBO.

### NSH

O NuttShell(NSH) é um sistema de shell para ser usado no NuttX, similar ao bash e a outras opções semelhantes. Ele suporta um conjunto rico de comandos incluídos, scripting e a capacidade de executar suas próprias aplicações como “builtin” (parte do mesmo binário do NuttX). A configuração NSH habilita o console via USB usando 115200 bps.

Podemos iniciar o processo de compilação limpando a configuração anterior

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Agora selecionamos a configuração NSH para a placa xiao-esp32s3:

```bash
./tools/configurate.sh xiao-esp32s3:usbnsh
```

Compile o código-fonte.

```bash
make -j
```

Carregue o firmware na sua placa, reinicie a placa e conecte-se ao console NuttShell (NSH) via USB usando a interface serial CDC/ACM:

```bash
picocom -b 115200 /dev/ttyACM0
```

Acesse o console NuttShell:

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> uname -a
NuttX 12.8.0 2c845426da-dirty Apr  6 2025 22:53:57 xtensa esp32s3-xiao
nsh> 
```

Digitando `?`, você acessará as opções disponíveis para comandos e aplicações incorporadas.

```bash
nsh> ?
help usage: [-v] [<cmd>]

    .           cp          exec        ls          reboot      truncate    
    [           cmp         exit        mkdir       rm          uname       
    ?           dirname     expr        mkrd        rmdir       umount      
    alias       date        false       mount       set         unset       
    unalias     dd          fdinfo      mv          sleep       uptime      
    basename    df          free        pidof       source      usleep      
    break       dmesg       help        printf      test        xd          
    cat         echo        hexdump     ps          time        
    cd          env         kill        pwd         true        

Builtin Apps:
    getprime    hello       nsh         ostest      sh 
```

Vamos dizer olá ao NuttX, digite `hello` e então ele executará o comando:

```bash
nsh> hello
Hello, World!!
```

Parabéns, sua primeira interação com o NuttX foi concluída.

### COMBO

Essa configuração habilita três aplicações de exemplo, gpio e leds. O General Purpose Input/Output (GPIO) é a parte mais fundamental de um microcontrolador, permitindo que ele se conecte ao mundo externo. Dessa forma, usaremos o NSH para acessar e configurar esses pinos como quisermos. Mas, primeiro, vamos limpar a configuração anterior.

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Selecione a configuração combo para a placa xiao-esp32s3.

```bash
./tools/configurate.sh xiao-esp32s3:combo
```

Compile o código-fonte.

```bash
make -j
```

Carregue o firmware na sua placa, execute um programa de comunicação serial como minicon ou picocom:

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.8.0
nsh>
```

Para verificar quais opções são aceitas para interagir com esta aplicação, digite `gpio -h`, e será retornada uma lista de parâmetros.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> gpio -h
USAGE: gpio [-t <pintype>] [-w <signo>] [-o <value>] <driver-path>
       gpio -h
Where:
 <driver-path>: The full path to the GPIO pin driver.
 -t <pintype>:  Change the pin to this pintype (0-10):
 -w <signo>:    Wait for a signal if this is an interrupt pin.
 -o <value>:    Write this value (0 or 1) if this is an output pin.
mation and exit.
Pintypes:
  0: GPIO_INPUT_PIN
  1: GPIO_INPUT_PIN_PULLUP
IO_INPUT_PIN_PULLDOWN
  3: GPIO_OUTPUT_PIN
  4: GPIO_OUTPUT_PIN_OPENDRAIN
  5: GPIO_INTERRUPT_PIN
  6: GPIO_INTERRUPT_HIGH_PIN
  7: GPIO_INTERRUPT_LOW_PIN
  8: GPIO_INTERRUPT_RISING_PIN
  9: GPIO_INTERRUPT_FALLING_PIN
 10: GPIO_INTERRUPT_BOTH_PIN
```

Para confirmar que os arquivos de dispositivo GPIO foram criados, digite `ls/dev`. Depois de digitar, você pode ver que alguns gpios foram declarados e definidos em boards/arm/ra/xiao-esp32s3/include/board.h, que representam:

- LED on-board:
  - Amarelo           -> GPIO21

- GPIOs
  - 1 Entrada         -> GPIO1
  - 1 Entrada c/ IRQ  -> GPIO3
  - 1 Saída           -> GPIO2

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 gpio2
 null
 ttyACM0
 ttyS0
 userleds
 zero
nsh> 
```

Siga estes comandos para ler GPIO1(/dev/gpio1) e GPIO3(/dev/gpio2) (com interrupção) e escrever em GPIO2(/dev/gpio0).

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> gpio -o 1 /dev/gpio0
Driver: /dev/gpio0
  Output pin:    Value=0
  Writing:       Value=1
  Verify:        Value=1
nsh> gpio -o 0 /dev/gpio0
  Driver: /dev/gpio0
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
nsh> gpio /dev/gpio1
Driver: /dev/gpio1
  Input pin:     Value=0
nsh> gpio /dev/gpio1
Driver: /dev/gpio1
  Input pin:     Value=1
nsh> gpio /dev/gpio1
Driver: /dev/gpio1
  Input pin:     Value=0
nsh> gpio -w 1 /dev/gpio2
Driver: /dev/gpio2
  Interrupt pin: Value=0
  Verify:        Value=1
nsh> gpio -w 1 /dev/gpio2
Driver: /dev/gpio2
  Interrupt pin: Value=0
  Verify:        Value=1
```

O USERLEDS é um subsistema que permite o controle dos LEDs com uma única operação. Além disso, você pode usar comandos em linha como o printf. Neste demo vamos ligar e desligar o LED Amarelo on-board a cada 1 segundo.

Digitando `leds`, você observa os LEDs piscando ao mesmo tempo.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid# 7): Running
led_daemon: Opening /dev/userleds
led_daemon: Supported LEDs 0x01
led_daemon: LED set 0x01
nsh> led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00

```

Confira o vídeo abaixo com a demonstração de gpio e leds:

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiao-esp32s3-nuttx-demo.mp4" type="video/mp4" />
  </video>
</div>

Para mais informações sobre o NuttX RTOS, visite a [Documentação do NuttX](https://nuttx.apache.org/docs/latest/index.html)

## ✨ Projeto de Contribuidor

- Este projeto é apoiado pelo [Projeto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Um agradecimento especial ao [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) por seus esforços dedicados. Seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/contributors/).

## Suporte Técnico & Discussão de Produtos

Agradecemos por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
