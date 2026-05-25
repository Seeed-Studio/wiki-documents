---
description: ODYSSEY – STM32MP157C
title: ODYSSEY – STM32MP157C
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-STM32MP157C
sku: 102110319
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-STM32MP157C/
---

# ODYSSEY – STM32MP157C

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19.png)

O ODYSSEY – STM32MP157C é um computador de placa única baseado no STM32MP157C, um processador de núcleo duplo Arm-Cortex-A7 operando a 650Mhz. O processador também integra um coprocessador Arm Cortex-M4, o que o torna adequado para tarefas em tempo real. O ODYSSEY – STM32MP157C é criado na forma de um SoM (system on module) mais uma placa Carrier. O SoM é composto pelo MPU, PMIC, RAM e a placa Carrier tem o formato do Raspberry Pi. A placa Carrier inclui todos os periféricos necessários, incluindo Ethernet Gigabit, WiFi/BLE, alimentação DC, USB Hosts, USB-C, MIPI-DSI, DVP para câmera, áudio, etc. Com esta placa, os clientes podem avaliar rapidamente o SoM e implantá-lo facilmente e rapidamente em sua própria placa Carrier.

[![Adquira agora](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)

## Recursos

- Processador de núcleo duplo Arm-Cortex-A7 com Cortex-M4 integrado
- SoM (system on module) inclui MPU, PMIC, RAM.
- Placa Carrier compatível com Raspberry Pi de 40 pinos.
- Tamanho compacto e poderoso
- hardware/SDK/API/BSP/OS de código aberto

## Especificação

|Item|Valores|
|----|------|
|Interface de periféricos| 2 x USB Host<br />1 x interface Ethernet gigabit<br />1 x interface de áudio de 3,5 mm<br />1 x interface de display MIPI DSI<br />1 x interface de câmera DVP<br />2 x Grove (GPIO &amp; I2C)<br />1 x interface de cartão SD (na parte de trás da placa)|
|WiFi/Bluetooth|WiFi 802.11 b/g/n 2,4GHz<br />Bluetooth 4.1|
|LED on-board|1 x LED de reset<br />3 x LED definidos pelo usuário<br />1 x LED de alimentação|
|Alimentação|1 x interface DC (entrada de alimentação de 12V/2A é recomendada)<br />1 x USB Tipo - C|
|Botão|1 x botão de reset<br />1 x botão de usuário<br />1 x tecla de código dial|
|Dimensão|56mm x 85mm|
|Temperatura de operação | 0 ~ 75 ℃ |

## Aplicação

- Industrial (gateways CAN-Ethernet etc.)
- Eletrodomésticos (geladeiras, micro-ondas etc.)
- Médico (registradores de dados etc.)
- Wearables de alta gama (dispositivo de VR etc.)
- Dispositivos de Casa Inteligente

## Visão Geral de Hardware

<iframe src="https://3dwarehouse.sketchup.com/embed/6eecf961-5dd1-4baf-94e4-72f130c5542d" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} width={580} height={326} allowFullScreen />

ODYSSEY – STM32MP157C consiste em duas partes: placa Carrier e Seeed SoM - STM32MP157C.

Os detalhes de hardware da placa Carrier são os seguintes:

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/front.png)

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/back.png)

- **1.Placa Carrier :** Instalar a área do Seeed SoM-STM32MP157C, se o usuário quiser remover a placa principal, incline-a lentamente para cima e depois remova, nunca remova à força com a mão.

- **2.Porta de Entrada de Alimentação DC :** 12V~24V/2A (entrada de alimentação de 12V/2A é recomendada) (barril 5,5x2,1mm centro-positivo).

- **3.Interface ETH :** Interface de cabo de rede que pode ser conectada a rede de nível gigabit.

- **4.USB Host:** Duas portas USB Host.

- **5.Dispositivo USB:** USB 2.0 Tipo C. Se o Tipo C for usado como entrada de alimentação da placa, deve ser usado um adaptador de alimentação de 5V/3A.

- **6.Interface Grove Digital:** Conectar a interface Grove ao pino digital.

- **7.Interface Grove IIC:** Conectar a interface Grove ao pino IIC.

- **8.Padrão Americano 3,5mm:**  Interface de áudio.

- **9.Interface MIPI DSI:** Conectar a um display com interface MIPI DSI (FPC 20Pin 1,0mm).

- **10.Interface GPIO de 40 PINOS:** Compatível com os 40 pinos do Raspberry Pi.

- **11.AP6236:** Chip de controle WiFi 2,4G & BT 4.2.

- **12.Chave Deslizante:** Pode ser usada para selecionar o boot pelo cartão SD ou eMMC.

- **13.Debug UART:** A porta serial de depuração padrão do sistema; é possível acessar o sistema por esta porta serial, falaremos mais sobre como fazer isso depois.

- **14.JST 1.0mm:** Interface de bateria 3VRTC.

- **15.Tecla RST:** tecla de reset do sistema.

- **16.Botão PWR:** Pressione por cerca de 8s para desligar, pressione rapidamente para ligar.

- **17.Botão de Usuário:** Botões programáveis pelo usuário.

- **18.LED PWR:** LED de alimentação da placa de desenvolvimento.

- **19.LED de Usuário:** LED programável pelo usuário.

- **20.ACA-5036-A2-CC-S:** Antena cerâmica 2,4G on-board.

- **21.IPEX 1ª geração:** Conector de antena externa 2,4G (Ao usar uma antena externa, é necessário remover a solda 0Ω em R49, R51)

- **22. Slot de cartão SD:** É a área onde é inserido um cartão micro-sd com o sistema.

- **23.Interface de câmera DVP :** Conectar a uma câmera com interface DVP (FPC 20Pin 1,0mm).

- **24.KSZ9031:** Placa de rede de acionamento de cabo de rede de 1000M.

- **25.STMPS2252MTR:** Chip de chave de alimentação.

- **26.MP9943:** Chip de alimentação Buck DCDC.

- **27.WM8960:** Chip codec de áudio.

- **28.MP2161:** Chip de alimentação Buck DCDC.

### Função dos Pinos

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/GPIO.png)

Os 40 pinos do ODYSSEY - STM32MP157C são totalmente compatíveis com os 40 pinos do Raspberry Pi, incluindo pinos GPIO, IIC, UART, SPI, IIS e PWM.

## Introdução ao Software

### Trabalho Preparatório

**Materiais Necessários**

- ODYSSEY – STM32MP157C
- Rede Wi-Fi
- Cartão SD de 4GB (ou mais memória) e leitor de cartão SD
- PC ou Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) (opcional)
- Adaptador de interface DC 12V/2A para alimentação (opcional)
- Um cabo USB tipo-c

<div className="admonition warning">
  <p className="admonition-title">Cuidado</p>
  Conecte o cabo USB suavemente, caso contrário você poderá danificar a interface. Use o cabo USB com 4 fios internos, o cabo com 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar <a href="https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"><b>aqui</b></a> para comprar
</div>

**Instalação da Imagem**

Assim como no Raspberry Pi, você precisa instalar a imagem do ODYSSEY – STM32MP157C a partir do seu cartão SD para colocá-lo em funcionamento. Oferecemos duas maneiras de iniciar o ODYSSEY – STM32MP157C. Você pode inicializar a partir de um cartão SD ou a partir do eMMC.

**A. Boot a partir do cartão SD**

- **Passo 1.** Selecione o [firmware](https://files.seeedstudio.com/linux/ODYSSEY%E2%80%93STM32MP157C/stm32mp1-debian-buster-console-armhf-latest-2gb.img.xz) que você deseja baixar:

- **Passo 2.** Conecte um cartão SD a um PC ou MAC com um leitor de cartão SD, é necessário um cartão SD com mais de 4G de memória.

- **Passo 3.** <font face>Clique aqui para baixar o <a href="https://etcher.io/">Etcher</a>, depois use o Etcher para gravar o arquivo ```*.img.xz``` diretamente no cartão SD. Ou extraia o arquivo ```*.img.xz``` para um arquivo ```*.img``` e depois grave-o em um cartão SD usando outra ferramenta de gravação de imagem. <br /><br />Clique no ícone de mais para adicionar o arquivo de imagem recém-baixado e o software selecionará automaticamente o cartão SD que você inseriu. Em seguida, clique em Flash! para iniciar a gravação. Demora cerca de 10 minutos para concluir.</font>

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/stm32_flash_sd.png)

- **Passo 4.** Depois de gravar a imagem no cartão SD, insira o cartão SD no ODYSSEY – STM32MP157C. Use a porta USB tipo-c para alimentar a placa Carrier. Não retire o cartão SD durante a gravação. O ODYSSEY – STM32MP157C irá inicializar a partir do cartão SD, você pode ver os LEDs PWR e USER acesos no SOM. Agora, vá para a próxima seção: o console serial.

<div class="admonition note" >
<p class="admonition-title">Nota</p>
significa que a inicialização falhou se o LED USER não piscar. Verifique se a chave de boot está em SD_CARD.
</div>

- **Passo 5.** Depois de gravar a imagem no cartão SD, insira o cartão SD no ODYSSEY – STM32MP157C. Use a porta USB tipo-c para alimentar a placa Carrier. Não retire o cartão SD durante a gravação. O ODYSSEY – STM32MP157C irá inicializar a partir do cartão SD, você pode ver os LEDs PWR e USER acesos no SOM. Agora, vá para a próxima seção: o console serial.

**B. Boot a partir do eMMC**

<div class="admonition note" >
<p class="admonition-title">Nota</p>
Se você quiser inicializar a partir do eMMC, primeiro precisa acessar a próxima seção: o console serial.
</div>

- **Passo 1.** o processo é o mesmo que em **A. Boot a partir do cartão SD** se você estiver inicializando o ODYSSEY – STM32MP157C pela primeira vez.

- **Passo 2.** Edite /boot/uEnv.txt para iniciar o boot pelo eMMC e então reinicie.

```bash
sudo sh -c "echo cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3-stm32mp1.sh >> /boot/uEnv.txt"
sudo reboot
```

- **Passo 3.** Aguarde o LED USER acender continuamente. Isso indica que o boot pelo eMMC foi bem-sucedido se o LED USER permanecer continuamente aceso.

- **Passo 4.** Desligue e remova o cartão SD.

- **Passo 5.** Ajuste a chave deslizante para EMMC e reinicie.

**Console Serial**

Agora que o seu ODYSSEY – STM32MP157C está ligado, você pode querer acessar seu sistema Linux através do console, depois configurar a rede e assim por diante. É fornecido um método de acesso via porta serial para acesso ao Linux:

- Porta UART - Usada para depurar problemas de baixo nível. (recomendado)

**Conectar via porta UART**

Nesta seção, vamos guiá-lo pelo uso do adaptador USB para TTL, que se conecta à porta Uart do ODYSSEY – STM32MP157C (localizada na parte superior direita do ODYSSEY – STM32MP157C), para estabelecer uma conexão entre o seu computador e o ODYSSEY -STM32MP157C.

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/uart_connection.png)

- **Passo 1.** Conecte a porta Uart ao PC/Mac usando o USB To TTL Adapter. Se você não tiver um USB To TTL Adapter, clique [AQUI](https://www.seeedstudio.com/catalogsearch/result/?q=UART) para comprar.（RX->TX,TX->RX）

- **Passo 2.** Usando as seguintes ferramentas de depuração serial, a taxa de baud é 115200:
  - Windows : Use o [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), selecione o protocolo ```Serial```, preencha a porta COM correspondente ao ODYSSEY -STM32MP157C, taxa de baud ```115200```, 8 bits, sem bits de paridade, 1 bit de parada, sem controle de fluxo.
  - Linux : Dependendo do USB To TTL Adapter, deve ser ```screen /dev/ttyACM0(,1, and so on) 115200``` ou ```screen /dev/ttyUSB0(,1, and so on) 115200```.
  - Mac : Dependendo do USB To TTL Adapter, deve ser ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` ou ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```.

- **Passo 3.** O nome de usuário padrão é ```debian```, a senha é ```temppwd```

- **Passo 4.** Se você não tiver um Adaptador USB para TTL, você também pode usar um Arduino. Se você usar um Arduino, conecte uma extremidade do jumper ao pino RESET do Arduino e a outra extremidade ao pino GND do Arduino. Isso irá ignorar o MCU ATMEGA do seu Arduino e transformar seu Arduino em um adaptador USB para TTL. Consulte o vídeo tutorial [AQUI](https://www.youtube.com/watch?v=qqSLwK1DP8Q). Agora conecte o pino GND do Arduino ao pino GND da porta Uart do ODYSSEY -STM32MP157C. Conecte os pinos Rx no Arduino aos pinos Rx na porta Uart do ODYSSEY -STM32MP157C. Conecte o pino Tx no Arduino ao pino Tx na porta Uart do ODYSSEY -STM32MP157C. Finalmente, conecte o Arduino ao PC/Mac por meio do cabo USB do Arduino. Agora verifique se o seu PC/Mac encontrou o seu Arduino digitando o seguinte comando:

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

Você deverá obter um retorno como este:

```
/dev/cu.usbmodem14XX where XX will vary depending on which USB port you used (on Mac)
/dev/ttyACMX where X will vary depending on which USB port you used  (on Linux)
```

Agora siga os passos acima para se conectar ao ODYSSEY – STM32MP157C via conexão serial. Isso é geralmente o que precisamos fazer quando inicializamos pela primeira vez, pois então você configurará o ODYSSEY – STM32MP157C para conexão Wi‑Fi e depois conexão SSH.

**Configurações de Rede**

**A. Conexão Ethernet**

Você pode se conectar à rede usando um cabo Ethernet. Basta conectar o cabo Ethernet à Internet.
Agora, vá para a próxima seção: instalação da Ferramenta básica.

**B. Configurações de Wi‑Fi**

<div className="admonition note">
  <p className="admonition-title">Nota</p>
  Se você quiser usar Wi‑Fi, primeiro precisa acessar a próxima seção: instalação da Ferramenta básica.
</div>

- **Passo 1.** Verifique a versão do kernel Linux no ambiente atual e instale o arquivo de cabeçalho da versão do kernel.

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **Passo 2.** Compile e instale o driver do stm32p1 a partir de `seeed-linux-dtverlays` no GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **Passo 3.** adicione o pacote dtbo em `/boot/uEnv.txt` para que ele se torne efetivo após a reinicialização.

```bash
sudo sh -c "echo uboot_overlay_addr0=/lib/firmware/stm32mp1-seeed-ap6236.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **Passo 4.** Conecte o Wi‑Fi

Configure a rede do ODYSSEY – STM32MP157C por meio da ferramenta de gerenciamento de rede `connmanctl`, que já foi instalada na imagem do ODYSSEY -STM32MP157C. Siga estas instruções para concluir facilmente a configuração.

```
robot@ev3dev:~$ sudo connmanctl
Error getting VPN connections: The name net.connman.vpn was not provided by any
connmanctl> enable wifi
Enabled wifi
connmanctl> scan wifi
Scan completed for wifi
connmanctl> services
*AO Wired                ethernet_b827ebbde13c_cable
                         wifi_e8de27077de3_hidden_managed_none
    AH04044914           wifi_e8de27077de3_41483034303434393134_managed_psk
    Frissie              wifi_e8de27077de3_46726973736965_managed_psk
    ruijgt gast          wifi_e8de27077de3_7275696a67742067617374_managed_psk
    schuur               wifi_e8de27077de3_736368757572_managed_psk
connmanctl> agent on
Agent registered
connmanctl> connect wifi_e8de27077de3_41      # You can use the TAB key at this point to autocomplete the name
connmanctl> connect wifi_e8de27077de3_41483034303434393134_managed_psk
Agent RequestInput wifi_e8de27077de3_41483034303434393134_managed_psk
  Passphrase = [ Type=psk, Requirement=mandatory ]
Passphrase? *************
Connected wifi_e8de27077de3_41483034303434393134_managed_psk
connmanctl> quit
```

Agora use o seguinte comando para encontrar o endereço IP do ODYSSEY – STM32MP157C.

```
ifconfig
```

**Instalação de ferramenta básica**

***1.SSH***

SSH, abreviação de Secure Shell, é formulado pelo Network Working Group do IETF. SSH é um protocolo de segurança baseado na camada de aplicação. SSH é um protocolo mais confiável que fornece segurança para sessões de login remoto e outros serviços de rede. Não há protocolo SSH na imagem fornecida por nós, portanto precisamos configurá‑lo através da porta serial, a fim de realizar a comunicação entre o dispositivo e o computador por meio do protocolo SSH. Digite o seguinte comando para instalar o serviço SSH no ODYSSEY -STM32MP157C.

```bash
sudo apt install ssh -y
```

Em seguida, usaremos SSH para acessar o ODYSSEY – STM32MP157C. Usuários de Windows podem usar clientes SSH de terceiros. Para usuários de Linux/Mac, o cliente SSH já vem embutido.

- Usuários de Windows: use PUTTY, selecione o protocolo SSH, preencha o endereço IP correto e clique em open. O nome de usuário é debian e a senha é temppwd.

- Usuários de Linux/Mac:

```
ssh debian@IP
// password: temppwd
```

<div class="admonition note" >
<p class="admonition-title">Nota</p>
Se a experiência de desempenho piorar ao usar SSH, mude para uma rede Wi‑Fi mais acessível.
</div>

***2.GIT***

Git é um sistema de controle de versão distribuído, gratuito e de código aberto, projetado para lidar com tudo, desde pequenos até projetos muito grandes, com velocidade e eficiência.

```bash
sudo apt install git -y
```

***3.MAKE***

```bash
sudo apt install make device-tree-compiler gcc -y
```

***4.WGET***

```bash
sudo apt install wget -y
```

**Configuração de Bluetooth**

- **Passo 1.** Verifique a versão do kernel Linux no ambiente atual e instale o arquivo de cabeçalho da versão do kernel.

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **Passo 2.** Compile e instale o driver do stm32p1 a partir de `seeed-linux-dtverlays` no GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **Passo 3.** adicione o pacote dtbo em `/boot/uEnv.txt` para que ele se torne efetivo após a reinicialização.

```bash
sudo sh -c "echo uboot_overlay_addr0=/lib/firmware/stm32mp1-seeed-ap6236.dtbo >> /boot/uEnv.txt"
sudo reboot
```

**Ativar o bluetooth**

Em seguida, ative o bluetooth com o comando:

```
sudo apt -y install bluetooth bluez bluez-tools rfkill
systemctl is-enabled bluetooth.service
```

**Conectar o bluetooth**

- **Passo 1.** Escaneie o bluetooth usando o bluetoothctl

o bluetoothctl é uma ferramenta que controla o Bluetooth para conectar a outro Bluetooth.

```
debian@npi:~$ bluetoothctl
[NEW] Controller 43:43:A0:12:1F:AC ReSpeaker-1FAC [default]
Agent registered
[bluetooth]# scan on
Discovery started
[CHG] Controller 43:43:A0:12:1F:AC Discovering: yes
[NEW] Device C8:69:CD:BB:9B:B3 C8-69-CD-BB-9B-B3
[NEW] Device E1:D9:68:0E:51:C0 MTKBTDEVICE
[NEW] Device 62:15:9C:3F:40:AA 62-15-9C-3F-40-AA
[NEW] Device 56:AF:DE:C0:34:25 56-AF-DE-C0-34-25
[NEW] Device B8:86:87:99:FB:10 SOLARRAIN
[CHG] Device B8:86:87:99:FB:10 Trusted: yes
[NEW] Device 04:5D:4B:81:35:84 MDR-1000X
[CHG] Device 04:5D:4B:81:35:84 Trusted: yes
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Key: 0x004c
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Value:
  10 05 0b 10 99 18 0a                             .......
[bluetooth]# scan off
[CHG] Device 04:5D:4B:81:35:84 RSSI is nil
[CHG] Device B8:86:87:99:FB:10 TxPower is nil
[CHG] Device B8:86:87:99:FB:10 RSSI is nil
[CHG] Device 4C:04:59:38:D3:25 RSSI is nil
[CHG] Device 58:44:98:93:35:24 RSSI is nil
Discovery stopped
[bluetooth]#

```

- **Passo 2.** Agora use o comando `pair + device ID` para parear o dispositivo bluetooth com o ODYSSEY – STM32MP157C.

- **Passo 3.** Quando você vir a mensagem `Pairing successful`, digite `connect + device ID`.

```
[bluetooth]# pair 04:5D:4B:81:35:84
Attempting to pair with 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 00001108-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110b-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000111e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Device 04:5D:4B:81:35:84 Paired: yes
Pairing successful
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: no
[CHG] Device 04:5D:4B:81:35:84 Connected: no
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: yes
[bluetooth]# connect 04:5D:4B:81:35:84
Attempting to connect to 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
Connection successful
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[MDR-1000X]#
```

Se aparecer `Connection successful`, configuração concluída!

## Comunicação CANBUS

A seguir está o processo de comunicação CANBUS usando a [2 Channel CAN BUS FD Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html) baseada no ODYSSEY -- STM32MP157C, primeiro usando a [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) para coletar a temperatura e umidade ambiente, e então, através da Seeeduino V4.2 com o [CAN - BUS shields V2](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html) acima e a placa ODYSSEY – STM32MP157C Channel 2 CAN BUS FD Shield acima para comunicação com Raspberry Pi.

### Trabalho de Preparação

**Materiais Necessários**

- ODYSSEY - STM32MP157C
- Rede Wi‑Fi
- Cartão SD de 4GB (ou mais de 4GB) e leitor de cartão SD
- PC ou Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)(opcional)
- Fonte de alimentação com adaptador de interface 12V/2A DC (opcional)
- Um cabo USB tipo‑c
- Dois cabos dupont macho-macho
- [CAN-BUS Shield V2](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html)
- [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)
- [2 Channel CAN BUS FD Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)
- [Grove - Light Sensor v1.2](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2.html)
- [Grove - I2C High Accuracy Temp&Humi Sensor (SHT35)](https://www.seeedstudio.com/catalogsearch/result/?q=sht35)

**Conexão de Hardware**

- **Passo 1.** De acordo com o [guia de instalação](https://wiki.seeedstudio.com/pt-br/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#guia-de-montagem) insira o 2 Channel CAN BUS FD Shield for Raspberry Pi no ODYSSEY - STM32MP157C.
- **Passo 2.** Insira o CAN BUS Shield V2 no Seeeduino V4.2.
- **Passo 3.** Conecte o Channel CAN BUS FD Shield for Raspberry Pi ao can-bus Shield V2 usando fios jumpers.

|2 Channel CAN BUS FD Shield for Raspberry Pi|CAN-BUS Shield V2|
|:----:|:------:|
|CAN_0_L|CANL|
|CAN_0_H|CANH|

- **Passo 4.** Ligue o ODYSSEY STM32MP157C e o Seeeduino V4.2

**Instalação de dependências**

- **Passo 1.** Instale o ambiente para `python`.

```bsah
sudo apt update
sudo apt install python3 python3-distutils python3-pyqt5  python3-pip python3-numpy -y
sudo pip3 install python-can pyqtgraph
```

- **Passo 2.** Instale o `git`.

```bsah
sudo apt install git -y
```

- **Passo 3.** Instale o ambiente relacionado ao `make`.

```bsah
sudo apt install make device-tree-compiler gcc -y
```

### instalação de software

**Instalar drivers do CAN-HAT e LCD**

- **Passo 1.** Verifique a versão do kernel Linux no ambiente atual e instale o arquivo de cabeçalho da versão do kernel.

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **Passo 2.** Faça o build (`make`) e instale o driver do stm32p1 a partir de `seeed-linux-dtverlays` no GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **Passo 3.** Adicione o pacote dtbo em `/boot/uEnv.txt` para que ele se torne efetivo após a reinicialização.

```bash
sudo sh -c "echo uboot_overlay_addr7=/lib/firmware/stm32mp1-seeed-lcd-01.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr8=/lib/firmware/stm32mp1-MCP2517FD-can0.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **Passo 4.** Verifique se o driver foi instalado com sucesso usando `dmesg`; você verá as informações abaixo se tiver sido bem-sucedido.

```bash
debian@npi:~$ sudo insmod /lib/modules/$(uname -r)/extra/seeed/mcp25xxfd-can.ko
debian@npi:~$ dmesg | grep spi
[    1.057609] spi_stm32 44009000.spi: driver initialized
[    9.852726] mcp25xxfd spi0.0: Linked as a consumer to regulator.6
[    9.966510] mcp25xxfd spi0.0: MCP2517 successfully initialized.

debian@npi:~$ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

**Configurar CAN-HAT e LCD**

- **Passo 1.** Configurar `can-bus`

```bash
sudo ip link set can0 up type can bitrate 500000 dbitrate 8000000 restart-ms 1000 berr-reporting on fd on
sudo ifconfig can0 txqueuelen 65536

debian@npi:~$ ip -details link show can0
3: can0: <NOARP,UP,LOWER_UP,ECHO> mtu 16 qdisc pfifo_fast state UNKNOWN mode DEFAULT group default qlen 10
    link/can  promiscuity 0 minmtu 0 maxmtu 0
    can state ERROR-ACTIVE (berr-counter tx 0 rx 0) restart-ms 0
          bitrate 500000 sample-point 0.875
          tq 25 prop-seg 34 phase-seg1 35 phase-seg2 10 sjw 1
          mcp25xxfd: tseg1 2..256 tseg2 1..128 sjw 1..128 brp 1..256 brp-inc 1
          mcp25xxfd: dtseg1 1..32 dtseg2 1..16 dsjw 1..16 dbrp 1..256 dbrp-inc 1
          clock 40000000numtxqueues 1 numrxqueues 1 gso_max_size 65536 /gso_max_segs 65535
```

- **Passo 2.** Configure o ambiente do `lcd`

```bash
export QT_QPA_PLATFORM=linuxfb:fb=/dev/fb0
```

### Executar o Demo

Execute o seguinte código em “ODYSSEY - STM32MP157C”

```bash
cd ~
git clone https://github.com/SeeedDocument/ODYSSEY-STM32MP157C.git
cd ~/ODYSSEY-STM32MP157C/examples
python3 QtViewerForStm32p1.py
```

Execute [CanBus_SendForArduino.ino](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/examples/CanBus_SendForArduino.ino) no `Seeeduino V4.2`.

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/can_bus_demo.png)

## Brincar com GPIO

Esta parte apresentará como usar **grove.py** para controlar o GPIO e o Grove Socket no ODYSSEY STM32MP157C. Existem duas maneiras de se conectar ao Grove Socket nesta placa. Por um lado, usando a Interface Digital Grove e a Interface IIC Grove; por outro, usando o conector de 40 pinos do ODYSSEY - STM32MP157C. Para a descrição das definições de PIN dos 40 pinos do ODYSSEY - STM32MP157C, consulte [Pin Function](#Pin-Function). É conveniente para você usar os 40 pinos deste ODYSSEY - STM32MP157C. Então, vamos lá.

### Definir para o modo gpio

- **Passo 1.** Verifique a versão do kernel Linux no ambiente atual e instale o arquivo de cabeçalho da versão do kernel.

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **Passo 2.** Faça o build (`make`) e instale o driver do stm32p1 a partir de `seeed-linux-dtverlays` no GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **Passo 3.** Adicione o pacote dtbo em `/boot/uEnv.txt` para que ele se torne efetivo após a reinicialização.

```bash
sudo sh -c "echo uboot_overlay_addr1=/lib/firmware/stm32mp1-seeed-spi5.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr2=/lib/firmware/stm32mp1-seeed-usart2.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr3=/lib/firmware/stm32mp1-seeed-i2c4.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **Passo 4.** Instale o ambiente para `python3`.

```bsah
sudo apt install python3 python3-pip -y
```

### Saída digital no Basehat usando Grove.py

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| ODYSSEY – STM32MP157C |  Grove - Buzzer | Grove Base Hat for Raspberry Pi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[Adquira agora](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Buzzer.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **Passo 2**. Conecte o Grove Base Hat ao ODYSSEY - STM32MP157C.

- **Passo 3**. Conecte o Grove Buzzer à porta D5 do Base Hat.

- **Passo 4**. Conecte o ODYSSEY - STM32MP157C ao PC por meio de um cabo USB.

#### Software

- **Passo 1**. Instale o Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Passo 3**. Execute o comando abaixo para rodar o código.

```bash
cd grove.py/grove
sudo python3 grove_gpio.py 5
```

<div class="admonition note" >
<p class="admonition-title">Nota</p>
ouviremos um som vindo do buzzer se tudo tiver corrido bem.
</div>

### Entrada digital no Basehat usando Grove.py

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| ODYSSEY – STM32MP157C |  Grove - Button | Grove Base Hat for Raspberry Pi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[Adquira agora](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Button-P.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **Passo 2**. Conecte o Grove Base Hat ao ODYSSEY - STM32MP157C.

- **Passo 3**. Conecte o Grove Button à porta D5 do Base Hat.

- **Passo 4**. Conecte o ODYSSEY - STM32MP157C ao PC por meio de um cabo USB.

#### Software

- **Passo 1**. Instale o Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Passo 3**. Execute o comando abaixo para rodar o código.

```bash
cd grove.py/grove
sudo python3 grove_button.py 5
```

<div class="admonition note" >
<p class="admonition-title">Nota</p>
veremos algumas informações no terminal se o botão tiver sido pressionado.
</div>

### ADC no Basehat usando Grove.py

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| ODYSSEY – STM32MP157C |  Grove - Temperature Sensor | Grove Base Hat for RasPi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[Adquira agora](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **Passo 2**. Conecte o Grove Base Hat ao ODYSSEY - STM32MP157C.

- **Passo 3**. Conecte o sensor de temperatura à porta A0 do Base Hat.

- **Passo 4**. Conecte o ODYSSEY - STM32MP157C ao PC por meio de um cabo USB.

#### Software

- **Etapa 1**. Instale o Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **Etapa 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Etapa 3**. Execute o comando abaixo para rodar o código.

```bash
cd grove.py/grove
sudo python3 grove_temperature_sensor.py 0
```

<div class="admonition note" >
<p class="admonition-title">Nota</p>
veremos os dados de temperatura no terminal se tudo tiver ocorrido bem.
</div>

### UART no Basehat usando Grove.py

#### Hardware

- **Etapa 1**. Itens usados neste projeto:

| ODYSSEY – STM32MP157C | Grove Base Hat para RasPi |
|--------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![image](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|
|[Adquira agora](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|

- **Etapa 2**. Conecte o Grove Base Hat ao ODYSSEY - STM32MP157C.

- **Etapa 3**. Conecte RX ao TX no Basehat usando um jumper.

- **Etapa 4**. Conecte o ODYSSEY - STM32MP157C ao PC através de um cabo USB.

#### Software

- **Etapa 1**. Instale o Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **Etapa 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Etapa 3**. Execute o comando abaixo para rodar o código.

```bash
cd grove.py/grove
python uart.py
```

se conectarmos o TX ao RX obteremos `hello seeder` no terminal. E a posição do TX e RX pode ser vista em [Pin Function](https://wiki.seeedstudio.com/pt-br/ODYSSEY-STM32MP157C/#Pin-Function).

### I2S no ODYSSEY-STM32MP157C

Nesta seção, explicaremos o princípio de controle da programação I2S no Linux. Agora usaremos I2S e o ReSpeaker 2-Mics Pi HAT para mostrar como utilizá-lo.

#### Hardware

- **Etapa 1**. Itens usados neste projeto:

| ODYSSEY – STM32MP157C | ReSpeaker 2-Mics Pi HAT |
|--------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![image](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/res-thumbnail.png)|
|[Adquira agora](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Adquira agora](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)|

- **Etapa 2.** De acordo com o [guia de instalação de hardware](https://wiki.seeedstudio.com/pt-br/ReSpeaker_2_Mics_Pi_HAT/#Getting-Started) insira o ReSpeaker 2-Mics Pi HAT no ODYSSEY – STM32MP157C.

#### Software

- **Etapa 1.** Instale `alsa-utils` usando `apt`

```bash
sudo apt install alsa-utils -y
```

- **Etapa 2.** Vá até o local do arquivo dtbs e baixe o arquivo dtb do stm32mp1.

```sh
debian@npi:~$ cd /boot/dtbs/4.19.9-stm32-r1/
debian@npi:/boot/dtbs/4.19.9-stm32-r1$ sudo wget https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/res/stm32mp1-seeed-npi-full-rpi-exp.dtb
```

**Nota:** Você também pode baixar o arquivo `.dtb` do stm32mp1 [**aqui**](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/res/stm32mp1-seeed-npi-full-rpi-exp.dtb)

- **Etapa 3.** Configure o `uEnv.txt` como a seguir:

```sh
debian@npi:~$ sudo vi /boot/uEnv.txt
```

Altere as configurações do dtb para

```
dtb=stm32mp1-seeed-npi-full-rpi-exp.dtb
```

- **Etapa 4.** reinicie

```
sudo reboot
```

- **Etapa 5.** Entre na pasta `seeed-linux-dtverleys` e configure o estado de som da seguinte forma：

```sh
debian@npi:~$ cd ~/seeed-linux-dtverlays/
debian@npi:~/seeed-linux-dtverlays$ sudo cp extras/wm8960_asound-stm32mp1 /var/lib/alsa/asound.state
debian@npi:~/seeed-linux-dtverlays$ sudo alsactl restore
```

- **Etapa 6.** Verifique se o driver foi instalado com sucesso usando `aplay` e `arecord`; você verá as informações abaixo se tiver sido bem-sucedido.

```sh
debian@npi:~/seeed-linux-dtverlays$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 4000b000.audio-controller-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: STM32MP1SEEEDNP [STM32MP1-SEEEDNPi], device 0: 4400b004.audio-controller-wm8960-hifi0 wm8960-hifi0-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
debian@npi:~/seeed-linux-dtverlays$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 4000b000.audio-controller-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: STM32MP1SEEEDNP [STM32MP1-SEEEDNPi], device 1: 4400b024.audio-controller-wm8960-hifi1 wm8960-hifi1-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- **Etapa 7.** Agora você pode começar a brincar com o ReSpeaker 2-Mics Pi Hat! Para um teste simples de gravação e reprodução, execute o seguinte comando:

1. Para gravar um áudio em `test.wav`:

```sh
arecord -f cd -r 48000 -Dhw:0 test.wav
```

2. Para reproduzir o áudio `test.wav`. Lembre-se de conectar um fone de ouvido ou alto-falante para saída de áudio.

```sh
aplay -Dhw:0 -r 48000 test.wav
```

<div class="admonition note" >
<p class="admonition-title">Nota</p>
se você não conseguir ouvir nenhum som talvez possa reiniciar novamente.
</div>

Para mais informações sobre o ReSpeaker 2-Mics Pi HAT você pode visitar o [wiki](https://wiki.seeedstudio.com/pt-br/ReSpeaker_2_Mics_Pi_HAT/)

## Recursos

-----

- **[PDF]** [STM32MP157C Datasheet](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/stm32mp157c.pdf)
- **[SCH]** [Seeed SoM - STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20SoM%20-%20STM32MP157C%20v1.0_191212.pdf)
- **[SCH]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20NPi%20-%20STM32MP157C%20v1.0_191212.pdf)
- **[3Dfile]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/st.skp)
- **[OrCAD]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20NPi%20-%20STM32MP157C%20v1.0_SCH%20%26%20PCB.zip)
- **[OrCAD]** [Seeed SoM - STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20SoM%20-%20STM32MP157C%20v1.0_SCH%20%26%20PCB%20.zip)
- **[PDF]** [Arquivo 2D do ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/STM32-2d-file.pdf)
- **[PDF]** [Guia de Referência STM32](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/STM32+Reference+Guide+V1.0.pdf)
- **[URL]** [Desenvolvimento avançado de sistema](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C)

# Desenvolvimento avançado de sistema ODYSSEY-STM32MP157C

- [Disponibilidade](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Disponibilidade)
- [Documentação do fornecedor](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Documentaçãodofornecedor)
- [Requisitos básicos](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Requisitosbásicos)
- [Compilador Cruzado ARM: GCC](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CompiladorCruzadoARM:GCC)
- [Bootloader: U-Boot](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Bootloader:U-Boot)
- [Kernel Linux](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-KernelLinux)
- [Sistema de Arquivos Raiz](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-SistemadeArquivosRaiz)
  - [Debian 10](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Debian10)
  - [Ubuntu 20.04 LTS](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Ubuntu20.04LTS)
- [Configurar cartão microSD](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-ConfigurarcartãomicroSD)
- [Instalar Kernel e Sistema de Arquivos Raiz](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-InstalarKerneleSistemadeArquivosRaiz)
- [Copiar Sistema de Arquivos Raiz](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopiarSistemadeArquivosRaiz)
- [Definir uname_r em /boot/uEnv.txt](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Definiruname_rem/boot/uEnv.txt)
- [Device Tree Binary](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-DeviceTreeBinary)
- [Copiar imagem do Kernel](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopiarimagemdoKernel)
- [Copiar Device Tree Binaries do Kernel](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopiarKernelDeviceTreeBinaries)
- [Copiar módulos do Kernel](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopiarMódulosdoKernel)
- [Tabela de Sistemas de Arquivos (/etc/fstab)](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-TabeladeSistemasdeArquivos(/etc/fstab))
- [Remover cartão microSD/SD](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-RemovercartãomicroSD/SD)
- [Comentários](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Comnetários)

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
