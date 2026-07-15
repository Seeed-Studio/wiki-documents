---
description: XIAO ESP32C6 com NuttX(RTOS)
title: XIAO ESP32C6 com NuttX(RTOS)
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-ESP32C6-NuttX/nuttx.webp
slug: /xiao_esp32c6_nuttx
last_update:
  date: 05/08/2025
  author: rcsim
createdAt: '2025-02-14'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_nuttx/
---

# Seeed Studio XIAO ESP32C6 com NuttX(RTOS)

## Introdução

[NuttX](https://nuttx.apache.org/) é um sistema operacional de tempo real (RTOS) maduro, amplamente reconhecido por sua conformidade com padrões e pequeno footprint. Um dos principais recursos do NuttX é sua escalabilidade, que permite seu uso em ambientes que vão desde microcontroladores de 8 bits até sistemas de 64 bits. Essa flexibilidade é alcançada por meio da conformidade com os padrões POSIX e ANSI, permitindo que você experimente recursos semelhantes do NuttX em uma ampla gama de chips de diferentes arquiteturas, famílias e fabricantes de semicondutores.

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-ESP32C6-NuttX/nuttx.svg"/></div>

Além disso, o NuttX oferece muitos recursos avançados e úteis, como subsistemas de USB, Ethernet, Áudio e Gráficos. Essas características tornam o NuttX uma escolha atraente para desenvolvedores que buscam um RTOS versátil e robusto, capaz de operar em vários tipos de hardware.

O NuttX oferece suporte a um grande e continuamente crescente número de placas. [A documentação oficial](https://nuttx.apache.org/docs/latest/platforms/) fornece uma lista abrangente de placas suportadas, organizadas por arquitetura e série de System-on-Chip (SoC).

Por exemplo, a página do [Seeed Studio XIAO ESP32C6](https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c6/boards/esp32c6-xiao/index.html) na documentação do NuttX oferece descrições detalhadas de cada recurso suportado e instruções sobre como utilizá-los. Também há uma página específica na documentação do NuttX para a série de chips [Espressif ESP32C6](https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c6/index.html), onde você pode encontrar a lista de MCUs e periféricos suportados.

## Instalação

A documentação do Nuttx fornece um [guia](https://nuttx.apache.org/docs/latest/quickstart/install.html) para diferentes plataformas. Para o Seeed Studio XIAO ESP32C6, siga estas etapas:

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

- Nuttx: contém o kernel, drivers e subsistemas implementados.
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

4. Compile o NuttX (o processo de compilação irá gerar os binários do firmware, incluindo nuttx.bin):

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh esp32c6-xiao:usbnsh
    make V=1
    ```

5. Os botões RESET e BOOT podem ser usados para entrar no modo “Bootloader”, pressionando e segurando a tecla BOOT enquanto liga a placa e, em seguida, pressionando a tecla RESET uma vez.

6. Carregue o firmware usando esptool.py:

    ```bash
    make flash ESPTOOL_PORT=/dev/ttyACM0 ESPTOOL_BINDIR=./
    ```

## Mão na massa

É hora de explorar o NuttX na prática. Nesta sessão, quatro aplicações estão disponíveis: USBNSH, GPIO e WIFI.

### USBNSH

O NuttShell(NSH) é um sistema de shell para ser usado no NuttX, semelhante ao bash e outras opções similares. Ele oferece um conjunto rico de comandos incluídos, suporte a scripts e a capacidade de executar suas próprias aplicações como “builtin” (parte do mesmo binário do NuttX). A configuração NSH habilita o console via USB usando 115200 bps.

Podemos iniciar o processo de compilação limpando a configuração anterior

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Agora selecionamos a configuração NSH para a placa esp32c6-xiao:

```bash
./tools/configurate.sh esp32c6-xiao:usbnsh
```

Compile o código-fonte.

```bash
make -j
```

Carregue o firmware na sua placa, reinicie a placa e conecte o console do NuttShell (NSH) via USB usando a interface serial CDC/ACM:

```bash
picocom -b 115200 /dev/ttyACM0
```

Acesse o console do NuttShell:

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> uname -a
NuttX  12.9.0 ebf883ba72 May  8 2025 17:15:47 risc-v esp32c6-xiao
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

### GPIO

Essa configuração habilita aplicações de exemplo de GPIO. O General Purpose Input/Output (GPIO) é a parte mais fundamental de um microcontrolador, permitindo que ele se conecte ao mundo externo. Dessa forma, usaremos o NSH para acessar e configurar esses pinos como quisermos. Mas, primeiro, vamos limpar a configuração anterior.

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Selecione a configuração de gpio para a placa xiao-esp32c6.

```bash
./tools/configurate.sh esp32c6-xiao:gpio
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
NuttShell (NSH) NuttX-12.9.0
nsh>
```

Para verificar quais opções são aceitas para interagir com esta aplicação, digite `gpio -h`, e será retornada uma lista de parâmetros.

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

Para confirmar que os arquivos de dispositivo GPIO foram criados, digite `ls/dev`. Depois de digitar, você pode ver que alguns gpios foram declarados e definidos em boards/risc-v/esp32c6/esp32c6-xiao/src/esp32c6_gpio.c, que representam:

- GPIOs
  - 1 Entrada c/ IRQ -> GPIO2 -> /dev/gpio1
  - 1 Saída          -> GPIO1 -> /dev/gpio0

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

Seguindo estes comandos para ler o GPIO1(/dev/gpio1) (com interrupção)
e escrever no GPIO2(/dev/gpio0).

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

### WIFI

Essa configuração habilita uma interface de rede wlan que pode ser configurada e inicializada usando os comandos abaixo:

```bash
nsh> ifup wlan0
nsh> wapi psk wlan0 mypasswd 3
nsh> wapi essid wlan0 myssid 1
nsh> renew wlan0
```

Neste caso, é feita uma conexão a um AP com SSID myssid, usando mypasswd como senha. O endereço IP é obtido via DHCP usando o comando renew. Você pode verificar o resultado executando ifconfig em seguida.

Vamos começar limpando a configuração anterior:

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Selecione a configuração de wifi para a placa xiao-esp32c6.

```bash
./tools/configurate.sh esp32c6-xiao:wifi
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

Confira o vídeo abaixo com a demonstração para Wi-Fi:

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-ESP32C6-NuttX/xiao-esp32c6-nuttx-wifi.mp4" type="video/mp4" />
  </video>
</div>

Para mais informações sobre o NuttX RTOS, visite a [NuttX Documentation](https://nuttx.apache.org/docs/latest/index.html)

## ✨ Projeto de Contribuidores

- Este projeto é apoiado pelo [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Um agradecimento especial a [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) por seus esforços dedicados. Seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/contributors/).

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
