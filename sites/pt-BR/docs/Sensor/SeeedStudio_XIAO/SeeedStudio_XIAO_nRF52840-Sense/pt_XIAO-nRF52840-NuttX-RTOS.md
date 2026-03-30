---
description: XIAO nRF52840(sense) com NuttX(RTOS)
title: XIAO nRF52840(sense) com NuttX(RTOS)
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /xiao_nrf52840_nuttx
last_update:
  date: 02/12/2025
  author: rcsim
createdAt: '2025-02-14'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf52840_nuttx/
---

# Seeed Studio XIAO nRF52840 com NuttX(RTOS)

## Introdução

[NuttX](https://nuttx.apache.org/) é um sistema operacional de tempo real (RTOS) maduro, amplamente reconhecido por sua conformidade com padrões e pequeno espaço ocupado. Uma das principais características do NuttX é sua escalabilidade, que permite seu uso em ambientes que vão desde microcontroladores de 8 bits até sistemas de 64 bits. Essa flexibilidade é alcançada por meio da aderência aos padrões POSIX e ANSI, permitindo que você experimente recursos semelhantes do NuttX em uma ampla gama de chips de diferentes arquiteturas, famílias e fabricantes de semicondutores.

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.svg"/></div>

Além disso, o NuttX oferece muitos recursos avançados e úteis, como subsistemas de USB, Ethernet, Áudio e Gráficos. Essas características tornam o NuttX uma opção atraente para desenvolvedores que buscam um RTOS versátil e robusto, capaz de operar em diversos tipos de hardware.

O NuttX oferece suporte a um número vasto e continuamente crescente de placas. [A documentação oficial](https://nuttx.apache.org/docs/latest/platforms/) fornece uma lista abrangente das placas suportadas, organizada por arquitetura e série de System-on-Chip (SoC).

Por exemplo, a página do [Seeed Studio Xiao nRF52840](https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/boards/xiao-nrf52840/index.html) na documentação do NuttX oferece descrições detalhadas de cada recurso suportado e instruções sobre como utilizá-los. Também há uma página específica na documentação do NuttX para os chips da série [Nordic Semiconductor nRF52](https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/index.html).

## Configuração das Ferramentas

O primeiro passo para começar a usar o NuttX no XIAO nRF52840 é instalar as UF2 Tools necessárias para converter o arquivo no formato hex para uf2 e, em seguida, baixar o próprio código-fonte do NuttX. O NuttX fornece um [guia](https://nuttx.apache.org/docs/latest/quickstart/install.html) para diferentes plataformas. Siga estes passos:

1. Baixe as UF2 Tools:

    ```bash
    git clone https://github.com/microsoft/uf2.git
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

- Nuttx: contém a implementação do kernel, drivers e subsistemas.
- Apps: contém uma coleção de ferramentas, shells, utilitários de rede, bibliotecas e interpretadores.

## Aplicações

Para iniciar uma aplicação é necessário carregar uma configuração no NuttX, executando o comando:

```bash
./tools/configurate.sh board_name:your_application
```

Também é possível verificar a lista de placas suportadas executando o comando:

```bash
./tools/configurate.sh -L
```

4. Compile o NuttX

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-nrf52840:nsh
    make V=1
    ```

5. Converta nuttx.hex para o formato UF2 usando as U2F Tools:

    ```bash
    python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
    ```

6. Conecte o Seeed Studio XIAO nRF52840 e entre no modo bootloader clicando rapidamente duas vezes. A placa será detectada como um dispositivo de armazenamento em massa USB. Em seguida, copie “nuttx.uf2” para dentro do dispositivo.

## Mãos na massa

É hora de explorar o NuttX na prática. Nesta sessão, três aplicações estão disponíveis: NSH, USBNSH e JUMBO.

### NSH

O NuttShell(NSH) é um sistema de shell para ser usado no NuttX, semelhante ao bash e outras opções semelhantes. Ele oferece um conjunto rico de comandos incluídos, scripting e a capacidade de executar suas próprias aplicações como “builtin” (parte do mesmo binário do NuttX). A configuração NSH habilita o console na UART0 usando 115200 bps.

Podemos iniciar o processo de compilação limpando a configuração anterior

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Agora selecionamos a configuração NSH para a placa xiao-nrf5200:

```bash
./tools/configurate.sh xiao-nrf52840:nsh
```

Compile o código-fonte.

```bash
make -j
```

Converta nuttx.hex para o formato UF2 usando as U2F Tools:

```bash
python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
```

Carregue o firmware na sua placa e conecte o adaptador USB-Serial aos pinos TX e RX, depois execute um programa de comunicação serial como minicon ou picocom:

```bash
picocom -b 115200 /dev/ttyUSB0
```

Acesse o console do NuttShell:

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

Digitando `?`, você terá acesso às opções disponíveis para comandos e aplicações embutidas.

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

### USBNSH

Semelhante à configuração NSH, mas usando a serial CDC/ACM (console habilitado na porta USB, a 115200 bps).

Podemos iniciar o processo de compilação limpando a configuração anterior

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Agora selecionamos a configuração NSH para a placa xiao-nrf5200:

```bash
./tools/configurate.sh xiao-nrf52840:usbnsh
```

Compile o código-fonte.

```bash
make -j
```

Converta nuttx.hex para o formato UF2 usando as U2F Tools:

```bash
python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
```

Carregue o firmware na sua placa, execute um programa de comunicação serial como minicon ou picocom:

```bash
picocom -b 115200 /dev/ttyACM0
```

Você deve pressionar Enter 3 vezes e então essa mensagem será exibida no terminal.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

### JUMBO

Essa configuração habilita dois aplicativos de exemplo, gpio e leds. O General Purpose Input/Output (GPIO) é a parte mais fundamental de um microcontrolador, permitindo-lhe conectar-se ao mundo externo. Dessa forma, usaremos o NSH para acessar e configurar esses pinos como quisermos. Mas primeiro, vamos limpar a configuração anterior.

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Selecione a configuração jumbo para a placa xiao-nrf52840.

```bash
./tools/configurate.sh xiao-nrf52840:jumbo
```

Compile o código-fonte.

```bash
make -j
```

Carregue o firmware na sua placa, execute um programa de comunicação serial como minicon ou picocom:

```bash
picocom -b 115200 /dev/ttyACM0
```

Você deve pressionar Enter 3 vezes e então essa mensagem será exibida no terminal.

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

Para confirmar que os arquivos de dispositivo GPIO foram criados, digite `ls/dev`. Após digitar, você pode ver que alguns gpios foram declarados e definidos em [xiao-nrf52840.h](https://github.com/apache/nuttx/blob/5b9d535ce6d7089a55742a748d7111f31ec74204/boards/arm/nrf52/xiao-nrf52840/src/xiao-nrf52840.h#L61), que representam:

- LED RGB na placa:

  - RGB_RED   -> P0.26
  - RGB_GREEN -> P0.30
  - RGB_BLUE  -> P0.06

- GPIOs
  - 1 Entrada           - P0.02(/dev/gpio0)
  - 1 Entrada de Interrupção - P0.03(/dev/gpio2)
  - 1 Saída             - P0.28(/dev/gpio1)

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 gpio2
 null
 ttyACM0
 userleds
 zero
nsh> 
```

Seguindo estes comandos para ler gpio0 e gpio2 (com interrupção) e escrever em gpio1.

```bash
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=0
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=1

nsh> gpio -o 0 /dev/gpio1
Driver: /dev/gpio1
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -w 1 /dev/gpio2
Driver: /dev/gpio2
  Interrupt pin: Value=0
  Verify:        Value=1
```

O USERLEDS é um subsistema que permite o controle dos LEDs com uma única operação. Além disso, você pode usar comandos em linha como o printf. Nesta demonstração, vamos ligar e desligar o LED RGB on-board a cada 1 segundo.

Digitando `leds`, você observa os LEDs piscando ao mesmo tempo.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid# 3): Running
led_daemon: Opening /dev/userleds
led_daemon: Supported LEDs 0x07
led_daemon: LED set 0x01
nsh> led_daemon: LED set 0x02
led_daemon: LED set 0x03
led_daemon: LED set 0x04
led_daemon: LED set 0x05
led_daemon: LED set 0x06
led_daemon: LED set 0x07
```

Confira o vídeo abaixo com a demonstração do exemplo de gpio e leds:

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nrf52840_nuttx_demo.mp4" type="video/mp4" />
  </video>
</div>


Para mais informações sobre o NuttX RTOS, visite a [Documentação do NuttX](https://nuttx.apache.org/docs/latest/index.html)

## ✨ Projeto de Contribuidores

- Este projeto é apoiado pelo [Projeto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Um agradecimento especial a [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) por seus esforços dedicados. Seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/contributors/).

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
