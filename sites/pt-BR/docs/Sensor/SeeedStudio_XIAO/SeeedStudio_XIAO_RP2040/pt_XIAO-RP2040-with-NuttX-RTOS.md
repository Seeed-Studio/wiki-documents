---
description: Seeed Studio XIAO RP2040 com NuttX
title: XIAO RP2040 Com NuttX(RTOS)
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiao-rp2040-with-nuttx
last_update:
  date: 8/18/2024
  author: halyssonJr
createdAt: '2024-07-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao-rp2040-with-nuttx/
---

# Seeed Studio XIAO RP2040 com NuttX(RTOS)

## Introdução

[NuttX](https://nuttx.apache.org/) é um sistema operacional de tempo real (RTOS) maduro, amplamente reconhecido por sua conformidade com padrões e pequeno footprint. Uma das principais características do NuttX é sua escalabilidade, que permite seu uso em ambientes que vão desde microcontroladores de 8 bits até sistemas de 64 bits. Essa flexibilidade é alcançada por meio da aderência aos padrões POSIX e ANSI, permitindo que você experimente funcionalidades semelhantes do NuttX em uma ampla variedade de chips de diferentes arquiteturas, famílias e fabricantes de semicondutores.

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

Além disso, o NuttX oferece muitos recursos avançados e úteis, como subsistemas de USB, Ethernet, Áudio e Gráficos. Essas características tornam o NuttX uma escolha atraente para desenvolvedores que buscam um RTOS versátil e robusto, capaz de operar em vários tipos de hardware.

O NuttX suporta um número vasto e continuamente crescente de placas. [A documentação oficial](https://nuttx.apache.org/docs/latest/platforms/) fornece uma lista abrangente das placas suportadas, organizadas por arquitetura e série de System-on-Chip (SoC).

Por exemplo, a página do [Seeed Studio Xiao RP2040](https://nuttx.apache.org/docs/latest/platforms/arm/rp2040/boards/seeed-xiao-rp2040/index.html) na documentação do NuttX oferece descrições detalhadas de cada recurso suportado e instruções de como utilizá-los.

## Configuração das Ferramentas

O primeiro passo para começar com o NuttX é instalar uma série de ferramentas necessárias, uma toolchain para a arquitetura com a qual você irá trabalhar e, por fim, baixar o próprio código-fonte do NuttX. O Nuttx fornece um [guia](https://nuttx.apache.org/docs/latest/quickstart/install.html) para diferentes plataformas.

Depois de instalar e configurar o ambiente, siga estes passos:

1. Baixe o Raspberry Pi Pico SDK:

```
git clone -b 1.1.2 https://github.com/raspberrypi/pico-sdk.git

```

3. Defina a variável de ambiente PICO_SDK_PATH:

```
export PICO_SDK_PATH=<absolute_path_to_pico-sdk_directory>
```

2. Crie um workspace

```
mkdir nuttxspace
```

3. Clone os repositórios

```
cd nuttxspace
git clone https://github.com/apache/nuttx.git nuttx
git clone https://github.com/apache/nuttx-apps apps
```

O Apache Nuttx é dividido em dois projetos:

- Nuttx: contém o kernel, drivers e subsistemas implementados.
- Apps: contém uma coleção de ferramentas, shells, utilitários de rede, bibliotecas e interpretadores.

## Aplicações

Para iniciar uma aplicação é necessário carregar uma configuração no NuttX, chamando o comando:

```
./tools/configurate.sh board_name:your_application
```

Também é possível verificar a lista de placas suportadas executando o comando:

```
./tools/configurate.sh -L
```

Uma vez que o script seja executado, o NuttX deve ser compilado. Há duas possibilidades para fazer isso usando: [Make](https://nuttx.apache.org/docs/latest/quickstart/compiling_make.html) ou [CMake](https://nuttx.apache.org/docs/latest/quickstart/compiling_cmake.html).

## Programação

Com a compilação bem-sucedida garantida, o próximo objetivo é programar usando BOOTSEL. Para isso, você deve seguir estes passos:

**Passo 1**: Conecte o Seeed Studio XIAO RP2040 à porta USB enquanto pressiona o botão `B` (boot). A placa será detectada como um dispositivo de armazenamento em massa USB `RPI-RP2`.

**Passo 2**: No workspace, vá para `nuttx` e copie `nuttx.uf2` para o Seeed Studio XIAO RP2040.

**Passo 3**: Procure por um novo dispositivo USB em seu computador.

**Passo 4**: Abra uma comunicação serial com o Seeed Studio XIAO RP2040.

## Mão na massa

É hora de explorar o NuttX na prática. Nesta sessão, quatro aplicações estão disponíveis: USB NSH, GPIO, USERLEDS e driver WS2812.

### USBNSH

O NuttXShell(NSH) é um sistema de shell para ser usado no NuttX, semelhante ao bash e outras opções similares. Ele oferece um conjunto rico de comandos incluídos, scripting e a capacidade de executar suas próprias aplicações como “builtin” (parte do mesmo binário do NuttX).

Podemos iniciar o processo de build limpando a configuração anterior

```
cd ~/nuttxspace/nuttx
make distclean
```

Agora selecionamos a configuração USBNSH para a placa seeed-xiao-rp2040:

```
./tools/configurate.sh seeed-xiao-rp2040:usbnsh
```

Compile o código-fonte.

```
make -j
```

Depois de programar e abrir a comunicação serial

```
picocom -b 115200 /dev/ttyACM0
```

Você deve pressionar Enter 3 vezes e então esta mensagem será exibida no terminal.

```
NuttShell (NSH) NuttX-12.5.1
nsh> 
```

Digitando `?`, você terá acesso às opções disponíveis para comandos e aplicações embutidas.

```
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

```
nsh> hello
Hello, World!!
```

Parabéns, sua primeira interação com o NuttX foi concluída.

### Driver GPIO

O General Purpose Input/Output (GPIO) é a parte mais fundamental de um microcontrolador, permitindo que ele se conecte ao mundo externo. Dessa forma, usaremos o NSH para acessar e configurar esses pinos como quisermos. Mas primeiro, vamos limpar a configuração anterior.

```
cd ~/nuttxspace/nuttx
make distclean
```

Selecione a configuração gpio para a placa seeed-xiao-rp2040.

```
./tools/configurate.sh seeed-xiao-rp2040:gpio
```

Compile o código-fonte.

```
make -j
```

Depois de programar e abrir a comunicação serial

```
picocom -b 115200 /dev/ttyACM0
```

Você deve pressionar Enter 3 vezes e então esta mensagem será exibida no terminal.

```
NuttShell (NSH) NuttX-12.5.1
nsh>
```

Para verificar quais opções são aceitas para interagir com esta aplicação, digite `gpio -h`, e será retornada uma lista de parâmetros.

```
NuttShell (NSH) NuttX-12.5.1
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

Para confirmar que os arquivos de dispositivo GPIO foram criados, digite `ls/dev`. Após digitar, você pode ver que alguns gpios foram declarados definidos em [seed-studio-gpio.c](https://github.com/apache/nuttx/blob/9d5b9b7c056e59c2fcc81e7029c95a995140063c/boards/arm/rp2040/seeed-xiao-rp2040/src/rp2040_gpio.c#L49-L61), que representam:

- 3 LEDs na placa (gpio 18, gpio 17 e gpio 16).
- 1 Entrada (gpio 6)
- 1 Entrada de Interrupção (gpio 7)

```
nsh> ls /dev
/dev:
 console
 gpio16
 gpio17
 gpio18
 gpio6
 gpio7
 null
 ttyACM0
```

De acordo com o esquemático do Seeed Studio RP2040, os LEDs da placa acendem quando o nível do GPIO é definido como zero.

Para controlar a saída do GPIO, você deve passar o parâmetro —o, um valor (zero ou um) e o caminho (/dev/gpio).

Seguindo estes dois comandos você verá o LED amarelo piscando.

```
nsh> gpio -o 0 /dev/gpio17
Driver: /dev/gpio17
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -o 1 /dev/gpio17
Driver: /dev/gpio17
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
```

<div align="center"><img width ="{50}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-gpio-turn-on-led-green.jpg"/></div>

Da mesma forma, você terá o mesmo resultado para o LED vermelho.

```
nsh> gpio -o 0 /dev/gpio16
Driver: /dev/gpio16
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -o 1 /dev/gpio16
Driver: /dev/gpio16
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
```

<div align="center"><img width ="{50}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-gpio-turn-on-led-red.jpg"/></div>

### USERLED

O USERLEDS é um subsistema que permite o controle dos LEDs com uma única operação. Além disso, você pode usar comandos de linha como o printf. Nesta demonstração vamos ligar e desligar o LED on-board a cada 1 segundo.

Primeiro, limpe a configuração anterior.

```
cd ~/nuttxspace/nuttx
make distclean
```

Configure a placa para a aplicação userled usando o comando:

```
./tools/configurate.sh seeed-xiao-rp2040:userleds
```

Compile o código-fonte.

```
make -j
```

Após programar, abra a comunicação serial e pressione Enter 3 vezes, seguindo os mesmos passos mostrados na aplicação anterior.

Se você digitar: `ls /dev/`, será exibida uma lista de dispositivos, e observe que o arquivo `userleds` foi criado.

```
nsh> ls /dev/
/dev:
 console
 userleds
 null
 ttyACM0
 ttyS0
```

Digitando `leds`, você observará os LEDs piscando ao mesmo tempo.

```
NuttShell (NSH) NuttX-12.5.1
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid # 3): Running
led_daemon: Opening /dev/userled
led_daemon: Supported LEDs 0x07
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-userleds.gif" style={{width:300, height:'auto'}}/></div>

## LED WS2812

O driver WS2812 permite controlar quaisquer pixels inteligentes que usem o protocolo ws2812. Este aplicativo sobre o NSH permite chamar um comando para executar o exemplo.

Limpe a configuração anterior

```
cd ~/nuttxspace/nuttx
make distclean
```

Selecione a configuração ws2812 para a placa seeed-xiao-rp2040.

```
./tools/configurate.sh seeed-xiao-rp2040:ws2812
```

Compile o código‑fonte.

```
make -j
```

Com a compilação finalizada, programe a placa, abra a comunicação serial e pressione Enter 3 vezes, seguindo os mesmos passos mostrados no aplicativo anterior. Digitando `?`, você verá o aplicativo ws2812 disponível.

```
NuttShell (NSH) NuttX-12.5.1
nsh> ?
help usage:  help [-v] [<cmd>]

    .           cp          exit        mkdir       rm          uname       
    [           cmp         expr        mkrd        rmdir       umount      
    ?           dirname     false       mount       set         unset       
    alias       dd          fdinfo      mv          sleep       uptime      
    unalias     df          free        pidof       source      usleep      
    basename    dmesg       help        printf      test        xd          
    break       echo        hexdump     ps          time        
    cat         env         kill        pwd         true        
    cd          exec        ls          reboot      truncate    

Builtin Apps:
    getprime    hello       nsh         ostest      sh          ws2812      
nsh> 

```

Antes de executar o aplicativo, é importante confirmar que na pasta `ls /dev/` foi criado o arquivo `leds0`, que será usado para o driver ws2812.

```
nsh> ls /dev/
/dev:
 console
 leds0
 null
 ttyACM0
 ttyS0

```

Digitar `ws2812 -h` retornará uma lista de parâmetros que são aceitos para interagir com este aplicativo.

```
nsh> ws2812 -h
Usage: ws2812 [OPTIONS]

Arguments are "sticky".  For example, once the device path is
specified, that path will be re-used until it is changed.
  [-p path] selects the ws2812 device.  Default: /dev/leds0 Current: /dev/leds0
  [-l leds] selects number of ws2812s in the chain.  Default: 1 Current: 1
  [-r repeat] selects the number change cycles.  Default: 4 Current: 4
  [-d delay] selects delay between updates.  Default: 20000 us Current: 20000 us

```

Vamos iniciar nosso aplicativo, digite `ws2812` e você verá os LEDs mudando de cor.

```
nsh> ws2812
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-rgb.gif" style={{width:400, height:'auto'}}/></div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
