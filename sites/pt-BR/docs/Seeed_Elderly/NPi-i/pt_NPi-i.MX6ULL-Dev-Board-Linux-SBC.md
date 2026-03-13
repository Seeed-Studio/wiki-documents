---
description: NPi i.MX6ULL Dev Board - Linux SBC
title: NPi i.MX6ULL Dev Board - Linux SBC
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /NPi-i.MX6ULL-Dev-Board-Linux-SBC
sku: 102991305,102991306
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/NPi-i.MX6ULL-Dev-Board-Linux-SBC/
---
<!-- ---
name: NPi i.MX6ULL Dev Board - Linux SBC
category: Single Board Computer 
bzurl: https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-eMMC-Version-p-4221.html
bzurl: https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-NAND-Version-p-4220.html
wikiurl:
sku: 102991306(emmc)
sku: 102991306(NANO)
--- -->

# NPi i.MX6ULL Dev Board - Linux SBC

 ![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/preview_3.jpg)

A NPi i.MX6ULL Dev Board é um computador de placa única Linux de baixo consumo de energia construído em torno do poderoso i.MX6ULL. Você vai gostar da memória onboard de 512 MB DDR3L e 512 MB NAND, sem mencionar as interfaces ricas e os recursos de E/S.

Ao mesmo tempo, fornecemos a você uma grande quantidade de recursos de software. Você pode encontrar imagens de distribuição de sistema debian/ubuntu/yocto [aqui](https://github.com/Seeed-Studio/image-builder). Enquanto isso, também fornecemos muitos Pi hats em nível de kernel e de aplicação. Portanto, você pode simplesmente conectar seu Pi hat favorito diretamente nesta placa para usar. A maioria dos Pi Hats da SeeedStudio pode funcionar com a NPi i.MX6ULL Dev Board (exceto NPi i.MX6ULL Dev Board 6-Mic Circular Array Kit for Raspberry Pi e NPi i.MX6ULL Dev Board 4-Mic Linear Array Kit for Raspberry Pi). Você também pode usar nosso Grove base PI Hat para prototipar o que quiser com módulos Grove. Por favor, siga-nos no Github para as últimas atualizações de software.

A placa inteira é composta por um módulo principal e uma placa de expansão, e os componentes são todos de grau industrial.

O módulo principal é composto pelo núcleo i.MX6ULL e 512 MB DDR3L, 512 MB NAND FLASH (ou 8 GB eMMC). Na verdade, dependendo da Flash, a NPi i.MX6ULL Dev Board pode ser dividida em duas versões diferentes.

A placa de expansão inclui principalmente várias interfaces periféricas e entrada e saída, expansão de IO. Incluindo, mas não se limitando a, duas portas Ethernet de 100M, uma USB Host e uma porta USB OTG, uma interface LCD RGB de 24 bits, 2x cabeçalho de expansão de E/S de 40 pinos, etc. Tantos recursos irão atender às suas diversas necessidades de controle. Todas essas características a tornam uma solução perfeita para controle industrial, transporte ferroviário, controle de drones e saída de áudio, etc.

NPi i.MX6ULL Dev Board - Versão 8G eMMC:

[![Get one now](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-eMMC-Version-p-4221.html)

NPi i.MX6ULL Dev Board - Versão 512MB NAND FLASH:

[![Get one now](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-NAND-Version-p-4220.html)

## Recursos

- Processador com núcleo Arm-Cortex-A7
- Grau industrial
- Baixo consumo de energia
- Sistema operacional debian/ubuntu/yocto
- Placa suporte compatível com Raspberry Pi de 40 pinos.

## Especificação

|Item|Valores|
|----|------|
|Peripheral Interface| 1 x USB Host<br />2 x 100M Ethernet interface<br />1 x FPC LCD interface (including 24 bit RGB and I2C touch control)<br />1 x SD card interface (on the back of the board)<br />1 x Uart interface<br />2 x 40pin header|
|On-board LED|3 x user-defined LED<br />1 x power LED<br />1 x Heartbeat LED|
|Power|1 x DC interface (5V±2%)<br />1 x USB Type - C|
|Button|4 x key|
|Switch|1 X 8-digit DIP switch|
|RTC|1 x RTC battery slot|
|CPU|1 X NXP MCIMX6Y2CVM08AB|
|Frequency|até 800Mhz|
|DDR3L|512 MB onboard|
|eMMC|8 GB onboard (NPi i.MX6ULL Dev Board - 8G eMMC Version)|
|NAND|512 M onboard (NPi i.MX6ULL Dev Board - 512MB NAND FLASH Version)|
|dimension|61mm x 100mm|
|Operating temperature(NPi i.MX6ULL Dev Board - 8G eMMC Version)| -20℃ ~ 80℃ |
|Operating temperature(NPi i.MX6ULL Dev Board - 512MB NAND FLASH Version)| -40℃ ~ 80℃ |

:::note
A temperatura de operação aqui se refere especificamente ao módulo principal, e a faixa de temperatura da placa de expansão é mais estreita. Nós não testamos a faixa de temperatura específica da placa de expansão.
:::

## Aplicação

- Industrial (gateways CAN-Ethernet etc)
- Eletrodomésticos (geladeiras, ondas Type-c etc)
- Dispositivos de Casa Inteligente

## Visão Geral do Hardware

### Interface

 ![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/NAND-over.jpg)

**Interface Ethernet 100M com LEDs**: 2 x interfaces Ethernet de 100M

**Conector de Alimentação 5V**: Use fonte de alimentação única de 5V ± 2%

**Indicador de proteção contra sobretensão**: Quando esta luz está acesa, indica que a tensão está fora da faixa

**USB Device Type C**: interface USB Type C

**UART TTL**: derivação direta da porta serial do controlador principal

**LED de Batimento Cardíaco**: A luz de batimento cardíaco piscará continuamente após o sistema estar em execução

**Power LED**: o LED acenderá quando energizar a placa.

**Header Compatível com Raspberry Pi**: inclui UART, I2C, SPI, PWM e outras interfaces de IO compatíveis com Raspberry Pi

**Interface LCD FPC**: incluindo interface RGB de 24 bits e interface de controle de tela sensível ao toque I2C

**Botão de Reset & Usuário**: Há 4 botões no total, que são reset, ON / OFF, botão normal e botão de mudança de modo

**USB Host Type A**: interface USB Host

**DIP Switch de 8 Dígitos**: Um DIP switch de 8 bits que suporta a comutação entre os modos de boot NAND, eMMC, SD e USB

**Header GPIO Extra**: Contém um chip 74LV595PW, que expande um IO de 4 canais em 8 canais

**LED de Usuário**: LED programável

**Slot de Bateria RTC**: pode ser conectada a uma bateria CR1220 para alimentar o RTC

**Slot de Cartão SD Type-c**: Slot de cartão SD Type-c, suporta cartão SD 3.0

### Função dos Pinos

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/eMMC-c.jpg)

Para mais informações você pode ir até o [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) para visualizar.

## Introdução ao Software

### Trabalho Preparatório

**Materiais Necessários**

- NPi i.MX6ULL Dev Board - Linux SBC Versão NAND (ou Versão eMMC)
- Cartão SD de 4GB (ou mais memória) e leitor de cartão SD
- PC ou Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) (opcional)
- Um cabo USB type-c

:::caution
Por favor, conecte o cabo USB suavemente, caso contrário você pode danificar a interface. Por favor, use o cabo USB com 4 fios internos, o cabo com 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar<a href="https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"><b>aqui</b></a>para comprar
:::

**Instalação da Imagem**

você precisa instalar a imagem da NPi i.MX6ULL Dev Board - Linux SBC a partir do seu cartão SD para colocá-la em funcionamento. Oferecemos duas maneiras de inicializar a NPi i.MX6ULL Dev Board - Linux SBC. Você pode inicializar a partir do cartão SD ou inicializar a partir do eMMC (ou NAND).

**A. Inicializar a partir do cartão SD**

- **Passo 1.** Selecione o [firmware](https://files.seeedstudio.com/linux/NPi+i.MX6ULL/imx6ull-debian-buster-console-armhf-latest-2gb.img.xz) mais recente

- **Passo 2.** Conecte um cartão SD a um PC ou MAC com um leitor de cartão SD, é necessário um cartão SD com mais de 4G de memória.

- **Passo 3.** Clique aqui para baixar o <a href="https://etcher.io/">Etcher</a>, então use o Etcher para gravar o arquivo ```*.img.xz``` diretamente no cartão SD. Ou extraia o arquivo ```*.img.xz``` em um arquivo ```*.img``` e, em seguida, grave-o em um cartão SD usando outra ferramenta de gravação de imagem.
<br />
<br />Clique no ícone de mais para adicionar o arquivo de imagem recém-baixado e o software selecionará automaticamente o cartão SD que você inseriu. Em seguida, clique em Flash! para gravar. Leva cerca de 10 minutos para terminar.

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/etcher.png)

- **Passo 4.** Depois de gravar a imagem no cartão SD, insira o cartão SD na NPi i.MX6ULL Dev Board - Linux SBC. Defina o DIP switch de 8 dígitos para o modo 2-5-8 para habilitar a inicialização a partir do SD.

- **Passo 5.** Use a porta USB type-c para alimentar a placa. Não retire o cartão SD durante a gravação. A NPi i.MX6ULL Dev Board - Linux SBC irá inicializar a partir do cartão SD, você pode ver os LEDs PWR e Heatbeat acesos na placa.

:::note
se o LED de Batimento Cardíaco não conseguir piscar, significa que a inicialização falhou. Verifique se a imagem foi instalada corretamente.
:::

**B. Inicializar a partir do cartão eMMC(NAND)**

- **Passo 1.** o processo é o mesmo que em **A. Inicializar a partir do cartão SD** se você estiver iniciando a NPi i.MX6ULL Dev Board pela primeira vez.

- **Passo 2.** Selecione P22 em `fire-config` para habilitar o boot pela flash e então reinicie.

```bash
sudo fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/flasher.png)

- **Passo 3.** Espere o LED na NPI i.MX6ULL Dev Board piscar continuamente. Isso indica que a gravação da eMMC (ou NAND) foi bem-sucedida se o LED piscar continuamente.

- **Passo 4.** Desligue a alimentação e retire o cartão SD.

- **Passo 5.** Defina o DIP switch de 8 dígitos para EMMC(2-4-5-7) ou NAND(2-3-6) e reinicie.

**Console Serial**

Agora sua NPi i.MX6ULL Dev Board - Linux SBC pode inicializar, você pode querer acessar o sistema Linux por meio de um console, para configurar o WiFi, etc.
<!-- You have two ways to get the console: -->

<!-- - A. The OTG USB port - This requires a running Linux system on the board -->

- B. A porta UART - Esta é a maneira difícil de acessar o console, pode ser usada para depurar problemas de baixo nível

<!-- **A. Connection via OTG**

- **Step 1.** Find a Type-c USB cable, and please make sure it's a data cable (not just a power cable), plug the Type-c USB end to the NPi i.MX6ULL Dev Board's Type-c USB port , then plug another end of this cable into your computer.

- **Step 2.** Check at your computer if the serial port has risen:

    - Windows: check the device manager, there should be new serial deviced named ```COMx``` which x is an increasing number. 
    - Linux: `ls /dev/ttyACM*`, you should get ```/dev/ttyACMx``` where x will vary depending on which USB port you used.
    - Mac: `ls /dev/cu.usb*`, you should get ```/dev/cu.usbmodem14xx``` where xx will vary depending on which USB port you used.

- **Step 3.** Use your favorite serial debugging tool to connect the serial port, the serial has: 115200 baud rate, 8Bits, Parity None, Stop Bits 1, Flow Control None. For examples:

    - Windows: use [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), selecione o protocolo ```Serial```, preencha a porta COM correta da NPi i.MX6ULL Dev Board - Linux SBC, baud ```115200```, 8Bits, Paridade None, Bits de Parada 1, Controle de Fluxo None.
    - Linux: Dependendo do seu USB para Adaptador TTL, pode ser ```screen /dev/ttyACM0(,1, and so on)``` 115200 ou ```screen /dev/ttyUSB0(,1, and so on) 115200```
    - Mac: Dependendo do seu USB para Adaptador TTL, pode ser ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` ou ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```

- **Step 4.** O nome de usuário padrão é ```debian``` e a senha é ```temppwd```. -->

**B. Conexão via porta UART**

Nesta seção vamos orientá-lo sobre como estabelecer uma conexão do seu computador para sua NPi i.MX6ULL Dev Board usando seu adaptador USB para TTL que será conectado à porta Uart da NPi i.MX6ULL Dev Board.

- **Step 1.** Conecte a porta Uart e seu PC/Mac com um Adaptador USB para TTL. Se você não tiver um Adaptador USB para TTL, pode clicar [aqui](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) para obter um.

- **Step 2.** Use as seguintes ferramentas de depuração Serial com baud 115200:
  - Windows: use [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), selecione o protocolo ```Serial```, preencha a porta COM correta da NPi i.MX6ULL Dev Board - Linux SBC, baud 115200, 8Bits, Paridade None, Bits de Parada 1, Controle de Fluxo None.you can go to
  - Linux: Dependendo do seu USB para Adaptador TTL, pode ser ```screen /dev/ttyACM0(,1, and so on) 115200``` ou ```screen /dev/ttyUSB0(,1, and so on) 115200```.
  - Mac: Dependendo do seu USB para Adaptador TTL, pode ser ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` ou ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```.

- **Step 3.** O nome de usuário padrão é ```debian``` e a senha é ```temppwd```.

- **Step 4.** Se você não tiver um Adaptador USB para TTL, também pode usar um Arduino. Se estiver usando um Arduino, conecte uma extremidade de um cabo jumper ao pino RESET no Arduino e a outra extremidade ao pino GND no Arduino. Isso irá ignorar o MCU ATMEGA do seu Arduino e transformar seu Arduino em um adaptador USB para TTL, veja o tutorial em vídeo [aqui](https://www.youtube.com/watch?v=qqSLwK1DP8Q). Agora conecte o pino GND no Arduino ao pino GND na porta Uart da NPi i.MX6ULL Dev Board. Conecte o pino Rx no Arduino ao pino Rx na porta Uart da NPi i.MX6ULL Dev Board. Conecte o pino Tx no Arduino ao pino Tx na porta Uart da NPi i.MX6ULL Dev Board. E por fim, conecte o Arduino ao seu PC/Mac via o cabo USB do Arduino. Agora verifique se seu Mac ou PC Linux encontra seu Arduino digitando este comando:

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

Você deverá obter algo como:

```
/dev/cu.usbmodem14XX where XX will vary depending on which USB port you used (on Mac)
/dev/ttyACMX where X will vary depending on which USB port you used  (on Linux)
```

Agora siga o passo acima para se conectar à sua NPi i.MX6ULL Dev Board através desta conexão serial.

### Controle de Pinos

nesta seção vamos orientá-lo sobre como controlar o PIN que está na NPi i.MX6ULL Dev Board usando o shell. Observe que você deve usar permissões de root para que o comando funcione

```bash
su root
username root password root
```

#### GPIO

Nesta seção, explicaremos o princípio de controle do programa de camada de aplicação relacionado ao driver do subsistema Linux GPIO. Agora iremos controlar o Grove - Buzzer para mostrar como usá-lo.

**Materiais Necessários**

- NPi i.MX6ULL Dev Board - Linux SBC Versão NAND (ou Versão eMMC)
- [Grove - Cabo de Conversão 4 pinos Jumper Fêmea para Grove 4 pinos](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer.html)

- **step 1.** Configurar o GPIO 19 para export em /sys/class/gpio.

```
echo 19 > /sys/class/gpio/export
```

Você pode usar o [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) para ver a localização do GPIO 19 da NPi i.MX6ULL Dev Board. O número do pino que você obtém é GPIOx_IOn. você precisa da seguinte fórmula para converter para o índice do gpio.

```
index = GPIO1_IO19 = (1-1)*32 + 19 = 19
index = GPIO4_IO20 = (4-1)*32 + 20 = 116
```

- **step 2.** Conectar o Grove - Buzzer ao GPIO 19 na NPi i.MX6ULL Dev Board com o Grove - Cabo de Conversão 4 pinos Jumper Fêmea para Grove 4 pinos.

- **step 3.** Configurar o GPIO 19 para modo de saída

```
echo out > /sys/class/gpio/gpio19/direction
```

- **step 4.** Configurar o GPIO 19 para nível alto

```
echo 1 > /sys/class/gpio/gpio19/value
```

por fim, você ouvirá o som que o Grove - Buzzer emite. enquanto isso, sobre o sysfs do gpio você deve usar este [link](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt) para obter mais informações.

#### INPUT

Nesta seção, explicaremos o princípio de controle do programa de camada de aplicação relacionado ao driver do subsistema de entrada do Linux. Agora usaremos o `KEY Button` da NPi i.MX6ULL Dev Board para mostrar como usá-lo.

**Materiais Necessários**

- NPi i.MX6ULL Dev Board - Linux SBC Versão NAND (ou Versão eMMC)

**Software**

- **step 1.** Instalar `evtest` para obter o status do `KEY Button`.

```
apt install evtest -y
```

- **step 2.** Verificar se o `KEY Button` existe em /dev/input/by-path.

```
root@npi:~# ls -lh /dev/input/by-path
total 0
lrwxrwxrwx 1 root root 9 Feb 14  2019 platform-gpio-keys-event -> ../event0
```

Você precisa ajustar a árvore de drivers se não conseguir obter este resultado.

- **step 3.** Usar `evtest` para obter o status do `KEY Button`. Observe que a NPi i.MX6ULL Dev Board possui quatro botões que controlam funções diferentes. você só precisa controlar o `KEY Button`.

```
root@npi:~# evtest
No device specified, trying to scan all of /dev/input/event*
Available devices:
/dev/input/event0:      gpio-keys
Select the device event number [0-0]: 0
Input driver version is 1.0.1
Input device ID: bus 0x19 vendor 0x1 product 0x1 version 0x100
Input device name: "gpio-keys"
Supported events:
  Event type 0 (EV_SYN)
  Event type 1 (EV_KEY)
    Event code 11 (KEY_0)
Properties:
Testing ... (interrupt to exit)
Event: time 1583478811.552488, type 1 (EV_KEY), code 11 (KEY_0), value 1
Event: time 1583478811.552488, -------------- SYN_REPORT ------------
Event: time 1583478811.752195, type 1 (EV_KEY), code 11 (KEY_0), value 0
Event: time 1583478811.752195, -------------- SYN_REPORT ------------
```

Por fim, você obterá as informações acima.

#### UART

Nesta seção, explicaremos o uso básico da porta serial e do equipamento de terminal. Agora iremos controlar o uart3 para mostrar como usá-lo.

**Materiais Necessários**

- NPi i.MX6ULL Dev Board - Linux SBC Versão NAND (ou Versão eMMC)
- PC ou Mac
- [USB para Adaptador Uart](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)

**Software**

- **step 1.** Selecione P17 em `fire-config` para habilitar o uart3  

```
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/fire-config-uart3-enable.png)

Você obterá o comando a seguir se habilitado com sucesso.

```
root@npi:~# ls /dev/ttymxc2
/dev/ttymxc2
```

- **step 2.** Configurar o uart3 usando stty

```
stty -F /dev/ttymxc2 ispeed 115200 ospeed 115200
```

- **step 3.** Visite o [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) para encontrar o número do pino do uart3 da NPi i.MX6ULL Dev Board.

- **Step 4.** Conecte o Uart3 ao seu PC/Mac com um Adaptador USB para TTL. Se você não tiver um Adaptador USB para TTL, pode clicar [aqui](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) para obter um.

- **Step 5.** Use as seguintes ferramentas de depuração Serial com baud 115200:
  - Windows: use [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), selecione o protocolo ```Serial```, preencha a porta COM correta da NPi i.MX6ULL Dev Board - Linux SBC, baud 115200, 8Bits, Paridade None, Bits de Parada 1, Controle de Fluxo None.you can go to
  - Linux: Dependendo do seu USB para Adaptador TTL, pode ser ```screen /dev/ttyACM0(,1, and so on) 115200``` ou ```screen /dev/ttyUSB0(,1, and so on) 115200```.
  - Mac: Dependendo do seu USB para Adaptador TTL, pode ser ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` ou ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```.

- **Step 6.** Use o seguinte comando para testar o envio e recebimento de dados:

```
echo seeedstduio > /dev/ttymxc2
```

por fim, obteremos a string 'seeedstduio' no putty se a conexão for bem-sucedida.

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/putty_recive.png)

#### I2C

Nesta seção, explicaremos o princípio de controle do programa de camada de aplicação relacionado ao driver i2c do Linux. Agora usaremos o i2c1 e o Grove - Barometer Sensor (BMP280) para mostrar como usá-lo.

**Materiais Necessários**

- NPi i.MX6ULL Dev Board - Linux SBC Versão NAND (ou Versão eMMC)
- [Grove - Cabo de Conversão 4 pinos Jumper Fêmea para Grove 4 pinos](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - BME280 Environmental Sensor (Temperature Humidity Barometer)](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)

**Software**

**step 1.** Instalar o i2c-tools usando apt

```
apt install i2c-tools -y
```

**step 2.** Visite o [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) para encontrar o número do pino do I2C1 da NPi i.MX6ULL Dev Board.

**step 3.** Conectar o Grove - BME280 ao I2C1 na NPi i.MX6ULL Dev Board com o Grove - Cabo de Conversão 4 pinos Jumper Fêmea para Grove 4 pinos.

**step 4.** Detectar o endereço I2C do Grove - BME280 usando
`i2cdetect`. 0 significa i2c1, então se você quiser detectar o i2c2 você precisa usar `i2cdetect -y 1` para detectar.

```
root@npi:~# i2cdetect -y 0
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- 77
```

Agora, podemos descobrir que o endereço I2C do Grove - BME280 é 0x77.

**etapa 5.** Obtenha o ID do Grove - BME280 usando i2cget

```
root@npi:~# i2cget -y 0 0x77 0xD0
0x58
```

Finalmente, podemos obter 0x58 que é o ID do Grove - BME280. Para mais informações sobre o Grove - BME280 você pode visitar o [wiki](https://wiki.seeedstudio.com/pt-br/Grove-Barometer_Sensor-BME280/) para aprender. Para o uso do i2c-tool você pode ver este [link](https://www.mankier.com/package/i2c-tools)

#### ADC

Nesta seção, explicaremos o princípio de controle do programa de camada de aplicação relacionado ao driver ADC do Linux. Agora vamos usar o ADC1 e o Grove - Rotary Angle Sensor para mostrar como usá-lo.

**Materiais Necessários**

- NPi i.MX6ULL Dev Board - Linux SBC Versão NAND (ou Versão eMMC)
- [Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)

**Software**

- **step 1.** Selecione P12 em `fire-config` para habilitar o ADC1  

```
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/enable-adc.png)

Você obterá o comando como a seguir se for habilitado com sucesso.

```
root@npi:~# ls /sys/bus/iio/devices/iio\:device0
buffer              in_voltage3_raw                sampling_frequency_available
dev                 in_voltage_sampling_frequency  scan_elements
in_conversion_mode  in_voltage_scale               subsystem
in_voltage0_raw     name                           trigger
in_voltage1_raw     of_node                        uevent
in_voltage2_raw     power
```

- **step 2.** Visite o [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) para encontrar o número do pino do ADC1 na NPi i.MX6ULL Dev Board. Você pode encontrar o número do GPIO como na figura a seguir.

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/adc-pin-map.png)

**step 3.** Conecte o Grove - Rotary Angle Sensor ao ADC1 na NPi i.MX6ULL Dev Board com o Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable.

**step 4.** Obtenha os dados AD do Grove - Grove - Rotary Angle Sensor.

```
root@npi:~# cat /sys/bus/iio/devices/iio\:device0/\\in_voltage3_raw
82
```

Com base nas informações acima você pode entender que estamos lendo o valor analógico dos pinos GPIO1_IO3.

#### SPI

Nesta seção, explicaremos o princípio de controle do programa SPI do Linux. Agora usaremos SPI e o 2-Channel CAN-BUS(FD) Shield for Raspberry Pi para mostrar como usá-lo.

**Materiais Necessários**

- NPi i.MX6ULL Dev Board - Linux SBC Versão NAND (ou Versão eMMC)
- [2-Channel CAN-BUS(FD) Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)

**Software**

- **Step 1.** De acordo com o [installation guide](https://wiki.seeedstudio.com/pt-br/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#mounting-guide) insira o 2 Channel CAN BUS FD Shield for Raspberry Pi na NPi i.MX6ULL Dev Board.

- **Step 2.** Selecione P23 em fire-config para expandir o sistema de arquivos.

```bash
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/ExpandSDCard.png)

- **Step 3.** Instale dependências relacionadas a seeed-linux-dtoverlays

```bsah
apt install -y make git device-tree-compiler linux-headers-$(uname -r) gcc
```

- **Step 4.** Compile e instale o driver da NPi i.MX6ULL Dev Board a partir de `seeed-linux-dtverlays` no GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_imx6ull && make install_imx6ull
```

:::note
Você pode usar mkdir -p /lib/modules/$(uname -r)/extra/seeed para criar arquivos se encontrar algum erro durante a compilação.
:::

- **Step 5.** adicione o pacote dtbo em `/boot/uEnv.txt` para que ele se torne efetivo após a reinicialização.

```bash
echo dtoverlay=/lib/firmware/imx-MCP2517FD-can0-overlay.dtbo >> /boot/uEnv.txt
reboot
```

- **Step 6.** Verifique se o driver foi instalado com sucesso usando `dmesg`, você verá as informações abaixo se tiver sido bem-sucedido.

```bash
root@npi:~ insmod /lib/modules/$(uname -r)/extra/seeed/mcp25xxfd-can.ko
root@npi:~ dmesg | grep spi
[    1.057609] spi_imx 44009000.spi: driver initialized
[    9.852726] mcp25xxfd spi0.0: Linked as a consumer to regulator.6
[    9.966510] mcp25xxfd spi0.0: MCP2517 successfully initialized.

root@npi:~ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

Para mais informações sobre o 2-Channel CAN-BUS(FD) Shield você pode visitar o [wiki](https://wiki.seeedstudio.com/pt-br/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#install-can-hat)

#### IIS

Nesta seção, explicaremos o princípio de controle do programa IIS do Linux. Agora usaremos IIS e o ReSpeaker 2-Mics Pi HAT para mostrar como usá-lo.

**Materiais Necessários**

- NPi i.MX6ULL Dev Board - Linux SBC Versão NAND (ou Versão eMMC)
- [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)

**Software**

- **Step 1.** De acordo com o [installation guide](https://wiki.seeedstudio.com/pt-br/ReSpeaker_2_Mics_Pi_HAT/#getting-started) insira o ReSpeaker 2-Mics Pi HAT na NPi i.MX6ULL Dev Board.

- **Step 2.** Instale alsa-utils usando `apt`

```bash
sudo apt install alsa-utils -y
```

- **Step 3.** adicione o pacote dtbo em `/boot/uEnv.txt` para que ele se torne efetivo após a reinicialização.

```bash
sudo sh -c  "echo dtoverlay=/lib/firmware/imx-seeed-voicecard-2mic-overlay.dtbo >> /boot/uEnv.txt"
```

:::note
Você precisa ver o guia de SPI para instalar as dependências do imx-seeed-voice card-2 mic-overlay.dtbo se você não conseguir encontrar imx-seeed-voice card-2mic-overlay.dtbo.
:::

- **Step 4.** Verifique se o driver foi instalado com sucesso usando `aplay`, você verá as informações abaixo se tiver sido bem-sucedido.

```sh
debian@npi:~$ sudo insmod /lib/modules/$(uname -r)/extra/seeed/snd-soc-seeed-voicecard.ko
debian@npi:~$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 2028000.sai-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
debian@npi:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 2028000.sai-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- **Step 5.** Entre na pasta `seeed-linux-dtverleys` e configure o soundstate como a seguir：

```sh
debian@npi:~$ cd seeed-linux-dtverlays/
debian@npi:~/seeed-linux-dtverlays$ sudo cp extras/wm8960_asound.state /var/lib/alsa/asound.state
debian@npi:~/seeed-linux-dtverlays$ sudo alsactl restore
```

- **Step 6.** Agora você pode começar a brincar com o ReSpeaker 2-Mics Pi Hat! Para um teste simples de gravação e reprodução, execute o seguinte comando:

1. Para gravar um áudio em `test.wav`:

```sh
arecord -f cd -r 48000 -Dhw:0 test.wav
```

2. Para reproduzir o áudio `test.wav`. Lembre-se de conectar um fone de ouvido ou alto-falante para reproduzir o áudio.

```sh
aplay -Dhw:0 -r 48000 test.wav
```

Para mais informações sobre o ReSpeaker 2-Mics Pi HAT você pode visitar o [wiki](https://wiki.seeedstudio.com/pt-br/ReSpeaker_2_Mics_Pi_HAT/)

## Recursos

-----

- **[PDF]** [i.MX 6ULL datasheet](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/IMX6ULLCEC.pdf)
- **[PDF]** [NPi i.MX6ULL Dev Board - Linux SBC Mechanical_Dimensions](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/Mechanical_Dimensions.pdf)
- **[PDF]** [NPi i.MX6ULL Dev Board - Linux SBC Breakout Board](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/NPi-i.MX6ULL-Breakout-Board-Schematic-V1.0.pdf)
- **[PDF]** [NPi i.MX6ULL Dev Board - Linux SBC Core Module](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/NPi-i.MX6ULL-Core-Module-Schematic-V1.0.pdf)
- **[URL]** [Desenvolvimento avançado de sistema](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL)

## NPi i.MX6ULL Desenvolvimento avançado de sistema

- [Disponibilidade](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Availability)
- [Documentação do Fornecedor](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-VendorDocumentation)
- [Requisitos Básicos](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-BasicRequirements)
- [Compilador Cruzado ARM: GCC](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-ARMCrossCompiler:GCC)
- [Bootloader: U-Boot](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Bootloader:U-Boot)
- [Linux Kernel](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-LinuxKernel)
- [Sistema de Arquivos Root](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-RootFileSystem)
  - [Debian 10](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Debian10)
  - [Ubuntu 20.04 LTS](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Ubuntu20.04LTS)
- [Configurar cartão microSD](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-SetupmicroSDcard)
- [Instalar Kernel e Sistema de Arquivos Root](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-InstallKernelandRootFileSystem)
- [Copiar Sistema de Arquivos Root](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyRootFileSystem)
- [Definir uname_r em /boot/uEnv.txt](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Setuname_rin/boot/uEnv.txt)
- [Device Tree Binary](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-DeviceTreeBinary)
- [Copiar Imagem do Kernel](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelImage)
- [Copiar binários da árvore de dispositivos do Kernel](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelDeviceTreeBinaries)
- [Copiar módulos do Kernel](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelModules)
- [Tabela de sistemas de arquivos (/etc/fstab)](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-FileSystemsTable(/etc/fstab))
- [Remover cartão microSD/SD](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-RemovemicroSD/SDcard)
- [Comentários](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Comments)

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
