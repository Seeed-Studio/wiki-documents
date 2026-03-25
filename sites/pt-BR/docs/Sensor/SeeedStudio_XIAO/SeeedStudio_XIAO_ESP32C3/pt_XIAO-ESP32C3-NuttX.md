---
description: XIAO ESP32C3 Com NuttX(RTOS)
title: XIAO ESP32C3 Com NuttX(RTOS)
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/nuttx.webp
slug: /xiao_esp32c3_nuttx
last_update:
  date: 04/28/2025
  author: rcsim
createdAt: '2025-02-14'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c3_nuttx/
---

# Seeed Studio XIAO ESP32C3 com NuttX(RTOS)

## Introdução

[NuttX](https://nuttx.apache.org/) é um sistema operacional de tempo real (RTOS) maduro, amplamente reconhecido por sua conformidade com padrões e pequeno footprint. Uma das principais características do NuttX é sua escalabilidade, que permite utilizá-lo em ambientes que vão desde microcontroladores de 8 bits até sistemas de 64 bits. Essa flexibilidade é alcançada por meio da adesão aos padrões POSIX e ANSI, permitindo que você experimente recursos similares do NuttX em uma ampla variedade de chips de diferentes arquiteturas, famílias e fabricantes de semicondutores.

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/nuttx.svg"/></div>

Além disso, o NuttX oferece muitos recursos avançados e úteis, como subsistemas de USB, Ethernet, Áudio e Gráficos. Essas características tornam o NuttX uma escolha atraente para desenvolvedores que buscam um RTOS versátil e robusto, capaz de operar em vários tipos de hardware.

O NuttX suporta um número vasto e continuamente crescente de placas. [A documentação oficial](https://nuttx.apache.org/docs/latest/platforms/) fornece uma lista abrangente de placas suportadas, organizadas por arquitetura e série de System-on-Chip (SoC).

Por exemplo, a página do [Seeed Studio XIAO ESP32C3](https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c3/boards/esp32c3-xiao/index.html) na documentação do NuttX oferece descrições detalhadas de cada recurso suportado e instruções sobre como utilizá-los. Também há uma página específica na documentação do NuttX para os chips da série [Espressif ESP32C3](https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c3/index.html), onde você pode encontrar a lista de MCUs e periféricos suportados.

## Instalação

A documentação do NuttX fornece um [guia](https://nuttx.apache.org/docs/latest/quickstart/install.html) para diferentes plataformas. Para o Seeed Studio XIAO ESP32C3, siga estas etapas:

1. Baixe o esptool da Espressif (https://docs.espressif.com/projects/esptool/en/latest/esp32/):

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

O Apache NuttX está dividido em dois projetos:

- Nuttx: contém a implementação do kernel, drivers e subsistemas.
- Apps: contém uma coleção de ferramentas, shells, utilitários de rede, bibliotecas e interpretadores.

## Aplicações

Para iniciar uma aplicação, é necessário carregar uma configuração no NuttX, executando o comando:

```bash
./tools/configurate.sh board_name:your_application
```

Também é possível verificar a lista de configurações suportadas pela placa executando o comando:

```bash
./tools/configurate.sh -L
```

4. Compile o NuttX (o processo de compilação irá gerar os binários do firmware, incluindo nuttx.bin):

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-esp32c3:usbnsh
    make V=1
    ```

5. Os botões RESET e BOOT podem ser usados para entrar no modo "Bootloader" pressionando e segurando a tecla BOOT durante a inicialização e, em seguida, pressionando a tecla RESET uma vez.

6. Carregue o firmware usando esptool.py:

    ```bash
    make flash ESPTOOL_PORT=/dev/ttyACM0 ESPTOOL_BINDIR=./
    ```

## Prática

É hora de explorar o NuttX na prática. Nesta sessão, quatro aplicações estão disponíveis: USBNSH, COMBO, WIFI e BLE.

### USBNSH

O NuttShell (NSH) é um sistema de shell para uso no NuttX, semelhante ao bash e outras opções similares. Ele suporta um rico conjunto de comandos integrados, scripts e a capacidade de executar suas próprias aplicações como "builtin" (parte do mesmo binário NuttX). A configuração NSH habilita o console via USB usando 115200 bps.

Podemos iniciar o processo de compilação limpando a configuração anterior

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Agora selecionamos a configuração NSH para a placa xiao-esp32c3:

```bash
./tools/configurate.sh xiao-esp32c3:usbnsh
```

Compile o código-fonte.

```bash
make -j
```

Carregue o firmware na sua placa, reinicie-a e conecte o console NuttShell (NSH) via USB usando a interface serial CDC/ACM:

```bash
picocom -b 115200 /dev/ttyACM0
```

Acesse o console NuttShell:

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> uname -a
NuttX  12.9.0 6b4bc72626-dirty Apr 26 2025 17:40:37 risc-v esp32c3-xiao
nsh> 
```

Digitando `?`, você terá acesso às opções disponíveis de comandos e aplicações integradas.

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

Vamos dizer olá ao NuttX, digite `hello` e ele executará o comando:

```bash
nsh> hello
Hello, World!!
```

Parabéns, sua primeira interação com o NuttX foi concluída.

### GPIO

Esta configuração habilita aplicações de exemplo de gpio. O GPIO (General Purpose Input/Output) é a parte mais fundamental de um microcontrolador, permitindo que ele se conecte ao mundo externo. Dessa forma, usaremos o NSH para acessar e configurar esses pinos conforme desejado. Mas primeiro, vamos limpar a configuração anterior.

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Selecione a configuração gpio para a placa xiao-esp32c3.

```bash
./tools/configurate.sh xiao-esp32c3:gpio
```

Compile o código-fonte.

```bash
make -j
```

Carregue o firmware na sua placa e execute um programa de comunicação serial como minicom ou picocom:

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

Para verificar quais opções são aceitas para interagir com esta aplicação, digite `gpio -h`, e ele retornará uma lista de parâmetros.

```bash
NuttShell (NSH) NuttX-12.9.0
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

Para confirmar que os arquivos de dispositivo GPIO foram criados, digite `ls/dev`. Após digitar, você pode ver que alguns gpios foram declarados e definidos em boards/risc-v/esp32c3/esp32c3-xiao/src/esp32c3_gpio.c, que representam:

- GPIOs
  - 1 Entrada c/ IRQ    -> GPIO3
  - 1 Saída             -> GPIO2

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 null
 ttyACM0
 ttyS0
 zero
nsh> 
```

Siga estes comandos para ler GPIO1(/dev/gpio1) (com interrupção)
e escrever em GPIO2(/dev/gpio0).

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> gpio -o 1 /dev/gpio0
Driver: /dev/gpio0
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
nsh> 
nsh> gpio -o 0 /dev/gpio0
Driver: /dev/gpio0
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
nsh> gpio -w 1 /dev/gpio1
Driver: /dev/gpio1
  Interrupt pin: Value=0
  Verify:        Value=1
```

Confira o vídeo abaixo com a demonstração do gpio:

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/xiao-esp32c3-nuttx-gpio.mp4" type="video/mp4" />
  </video>
</div>

### WIFI

Esta configuração habilita uma interface de rede wlan que pode ser configurada e inicializada usando os comandos abaixo:

```bash
nsh> ifup wlan0
nsh> wapi psk wlan0 mypasswd 3
nsh> wapi essid wlan0 myssid 1
nsh> renew wlan0
```

Neste caso, é feita uma conexão ao AP com SSID myssid, usando mypasswd como senha. O endereço IP é obtido via DHCP usando o comando renew. Você pode verificar o resultado executando ifconfig em seguida.

Vamos começar limpando a configuração anterior:

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Selecione a configuração wifi para a placa xiao-esp32c3.

```bash
./tools/configurate.sh xiao-esp32c3:wifi
```

Compile o código-fonte.

```bash
make -j
```

Carregue o firmware na sua placa e execute um programa de comunicação serial como minicom ou picocom:

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

Agora podemos usar os comandos WAPI conforme documentado na [documentação WAPI do NuttX](https://nuttx.apache.org/docs/latest/applications/wireless/wapi/index.html),

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> wapi psk wlan0 nuttxpwd 3
nsh> wapi essid wlan0 nuttxnw 1
nsh> renew wlan0
nsh> ifconfig
wlan0   Link encap:Ethernet HWaddr a0:85:e3:0e:4a:30 at RUNNING mtu 576
        inet addr:192.168.59.144 DRaddr:192.168.59.134 Mask:255.255.255.0

nsh> ping 8.8.8.8
PING 8.8.8.8 56 bytes of data
56 bytes from 8.8.8.8: icmp_seq=0 time=50.0 ms
56 bytes from 8.8.8.8: icmp_seq=1 time=40.0 ms
56 bytes from 8.8.8.8: icmp_seq=2 time=30.0 ms
56 bytes from 8.8.8.8: icmp_seq=3 time=60.0 ms
56 bytes from 8.8.8.8: icmp_seq=4 time=100.0 ms
56 bytes from 8.8.8.8: icmp_seq=5 time=100.0 ms
56 bytes from 8.8.8.8: icmp_seq=6 time=140.0 ms
56 bytes from 8.8.8.8: icmp_seq=7 time=40.0 ms
56 bytes from 8.8.8.8: icmp_seq=8 time=50.0 ms
56 bytes from 8.8.8.8: icmp_seq=9 time=30.0 ms
10 packets transmitted, 10 received, 0% packet loss, time 10100 ms
rtt min/avg/max/mdev = 30.000/64.000/140.000/34.985 ms
nsh> nslookup google.com
Host: google.com Addr: 142.251.128.238
nsh> nslookup nuttx.apache.org
Host: nuttx.apache.org Addr: 151.101.2.132
```

Confira o vídeo abaixo com a demonstração do wifi:

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/xiao-esp32c3-nuttx-wifi.mp4" type="video/mp4" />
  </video>
</div>

### BLE

Esta configuração é usada para habilitar o Bluetooth Low Energy (BLE) do chip ESP32-C3.

Vamos começar limpando a configuração anterior:

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Selecione a configuração ble para a placa xiao-esp32c3.

```bash
./tools/configurate.sh xiao-esp32c3:ble
```

Compile o código-fonte.

```bash
make -j
```

Carregue o firmware na sua placa e execute um programa de comunicação serial como minicon ou picocom:

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

Agora podemos usar comandos BT conforme documentado em [documentação btsak do NuttX](https://nuttx.apache.org/docs/latest/applications/wireless/btsak/index.html) ,

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> bt bnep0 scan start
nsh> bt bnep0 scan stop
nsh> bt bnep0 scan get
Scan result:
 1.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -92
        response type:   0
        advertiser data: 02 01 02 19 16 f1 fc 04 f9 6e e8 58 e6 33 58 26                         c5 4b bd 91 1c e0 4f b2 d9 51 455
 2.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -91
        response type:   0
        advertiser data: 02 01 02 19 16 f1 fc 04 f9 6e e8 58 e6 33 58 26                         c5 4b bd 91 1c e0 4f b2 d9 51 455
 3.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -100
        response type:   0
        advertiser data: 02 01 02 19 16 f1 fc 04 f9 6e e8 58 e6 33 58 26                         c5 4b bd 91 1c e0 4f b2 d9 51 455
 4.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -100
        response type:   4
        advertiser data:
 5.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -97
        response type:   0
        advertiser data: 02 01 02 19 16 f1 fc 04 f9 6e e8 58 e6 33 58 26 
```

Confira o vídeo abaixo com a demonstração do ble:

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/xiao-esp32c3-nuttx-ble.mp4" type="video/mp4" />
  </video>
</div>

Para mais informações sobre o NuttX RTOS, visite a [Documentação do NuttX](https://nuttx.apache.org/docs/latest/index.html)

## ✨ Projeto de Contribuidores

- Este projeto é apoiado pelo [Projeto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Um agradecimento especial a [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) pelo seu esforço dedicado. Seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/contributors/).

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
