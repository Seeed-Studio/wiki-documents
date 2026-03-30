---
description: XIAO RA4M1 Com NuttX(RTOS)
title: XIAO RA4M1 Com NuttX(RTOS)
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /xiao_ra4m1_nuttx
sidebar_position: 2
last_update:
  date: 03/11/2025
  author: rcsim
createdAt: '2025-02-14'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_ra4m1_nuttx/
---

# Seeed Studio XIAO RA4M1 com NuttX(RTOS)

## Introdução

[NuttX](https://nuttx.apache.org/) é um sistema operacional de tempo real (RTOS) maduro e amplamente reconhecido por sua conformidade com padrões e pequeno footprint. Uma das principais características do NuttX é sua escalabilidade, que permite seu uso em ambientes que vão de microcontroladores de 8 bits a sistemas de 64 bits. Essa flexibilidade é alcançada por meio da aderência aos padrões POSIX e ANSI, permitindo que você experimente recursos semelhantes do NuttX em uma ampla gama de chips de diferentes arquiteturas, famílias e fabricantes de semicondutores.

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

Além disso, o NuttX oferece muitos recursos avançados e úteis, como subsistemas de USB, Ethernet, Áudio e Gráficos. Essas características tornam o NuttX uma escolha atrativa para desenvolvedores que buscam um RTOS versátil e robusto, capaz de operar em vários tipos de hardware.

O NuttX suporta um grande e continuamente crescente número de placas. [A documentação oficial](https://nuttx.apache.org/docs/latest/platforms/) fornece uma lista abrangente de placas suportadas, organizada por arquitetura e séries de System-on-Chip (SoC).

Por exemplo, a página do [Seeed Studio XIAO RA4M1](https://nuttx.apache.org/docs/latest/platforms/arm/ra4m1/boards/xiao-ra4m1/index.html) na documentação do NuttX oferece descrições detalhadas de cada recurso suportado e instruções de como utilizá-los. Também há uma página específica na documentação do NuttX para os chips da série [Renesas RA4M1](https://nuttx.apache.org/docs/latest/platforms/arm/ra4m1/index.html), onde você pode encontrar a lista de MCUs e periféricos suportados.

## Instalação

A documentação do NuttX fornece um [guia](https://nuttx.apache.org/docs/latest/quickstart/install.html) para diferentes plataformas. Para o Seeed Studio XIAO RA4M1, siga estas etapas:

1. Baixe o Renesas rfp-cli(https://www.renesas.com/en/software-tool/renesas-flash-programmer-programming-gui):

    ```bash
    ~/nuttxspace/nuttx$ rfp-cli --help
    Renesas Flash Programmer CLI V1.11
    Module Version: V3.18.00.000
    Usage: rfp-cli [options...] [<hex file>...]
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

O Apache NuttX é dividido em dois projetos:

- NuttX: contém a implementação do kernel, drivers e subsistemas.
- Apps: contém uma coleção de ferramentas, shells, utilitários de rede, bibliotecas e interpretadores.

## Aplicações

Para iniciar uma aplicação é necessário carregar uma configuração no NuttX, chamando o comando:

```bash
./tools/configurate.sh board_name:your_application
```

Também é possível verificar a lista de configurações suportadas pela placa executando o comando:

```bash
./tools/configurate.sh -L
```

4. Compile o NuttX (o processo de compilação irá gerar os binários do firmware, incluindo nuttx.uf2):

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-ra4m1:nsh
    make V=1
    ```

5. Os botões RESET e BOOT podem ser usados para entrar no modo “Renesas RA USB Boot” reiniciando a placa com o BOOT em curto com o GND e pressionando o botão de reset duas vezes (clique duplo). A placa será enumerada como “Renesas RA USB Boot”.

6. Carregue o firmware usando o rfp-cli:

    ```bash
    rfp-cli -device ra -port /dev/ttyACM0 -p ./build/nuttx.hex
    ```

## Mão na massa

É hora de explorar o NuttX na prática. Nesta sessão, três aplicações estão disponíveis: NSH e COMBO.

### NSH

O NuttShell(NSH) é um sistema de shell para ser usado no NuttX, semelhante ao bash e outras opções similares. Ele suporta um conjunto rico de comandos incluídos, scripting e a capacidade de executar suas próprias aplicações como “builtin” (parte do mesmo binário do NuttX). A configuração NSH habilita o console na SCI2 usando 115200 bps.

Podemos iniciar o processo de compilação limpando a configuração anterior

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Agora selecionamos a configuração NSH para a placa xiao-ra4m1:

```bash
./tools/configurate.sh xiao-ra4m1:nsh
```

Compile o código-fonte.

```bash
make -j
```

Carregue o firmware em sua placa e conecte o conversor USB-Serial aos pinos TX e RX, depois execute um programa de comunicação serial como minicon ou picocom:

```bash
picocom -b 115200 /dev/ttyUSB0
```

Acesse o console do NuttShell:

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

Digitando `?`, você terá acesso às opções disponíveis para comandos e aplicações incorporadas.

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

Esta configuração habilita três aplicações de exemplo, gpio e leds. O General Purpose Input/Output (GPIO) é a parte mais fundamental de um microcontrolador, permitindo que ele se conecte ao mundo externo. Dessa forma, usaremos o NSH para acessar e configurar esses pinos como desejarmos. Mas primeiro, vamos limpar a configuração anterior.

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Selecione a configuração combo para a placa xiao-ra4m1.

```bash
./tools/configurate.sh xiao-ra4m1:combo
```

Compile o código-fonte.

```bash
make -j
```

Carregue o firmware em sua placa, execute um programa de comunicação serial como minicon ou picocom:

```bash
picocom -b 115200 /dev/ttyUSB0
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

Para confirmar que os arquivos de dispositivo GPIO foram criados, digite `ls/dev`. Após digitar, você pode ver que alguns gpios foram declarados em boards/arm/ra/xiao-ra4m1/include/board.h, que representam:

- LED on-board:
  - Amarelo           -> P011

- GPIOs
  - 1 Entrada         -> P014
  - 1 Saída           -> P000

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 null
 ttyS0
 userleds
 zero
nsh> 
```

Siga estes comandos para ler o gpio0 e escrever no gpio1. Até o momento, GPIO de Entrada com interrupção não está disponível para o chipset RA4M1.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=0
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=1
nsh> gpio -o 1 /dev/gpio1
Driver: /dev/gpio1
  Output pin:    Value=0
  Writing:       Value=1
  Verify:        Value=1
nsh> gpio -o 0 /dev/gpio1
Driver: /dev/gpio1
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
```

O USERLEDS é um subsistema que permite o controle dos LEDs com uma única operação. Além disso, você pode usar comandos em linha como o printf. Nesta demo vamos ligar e desligar o LED Amarelo on-board a cada 1 segundo.

Digitando `leds`, você observará os LEDs piscando ao mesmo tempo.

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

Confira o vídeo abaixo com a demo de gpio e leds:

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/xiao-ra4m1-nuttx-demo.mp4" type="video/mp4" />
  </video>
</div>

Para mais informações sobre o NuttX RTOS, visite a [Documentação do NuttX](https://nuttx.apache.org/docs/latest/index.html)

## ✨ Projeto de Contribuidor

- Este projeto é apoiado pelo [Projeto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Um agradecimento especial a [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) por seus esforços dedicados. Seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/contributors/).

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
