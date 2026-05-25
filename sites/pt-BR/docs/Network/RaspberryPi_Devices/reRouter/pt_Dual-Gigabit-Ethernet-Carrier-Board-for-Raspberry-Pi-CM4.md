---
description: placa carrier reRouter
title: placa carrier reRouter
keywords:
  - Dispositivo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4
sku: 102110497,110110090,110110110
last_update:
  date: 1/10/2022
  author: jianjing Huang
createdAt: '2023-01-10'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/
---


# Primeiros passos com a Dual Gigabit Ethernet Carrier Board para Raspberry Pi Compute Module 4

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/thumb.png" alt="pir" width="600" height="auto"/></p>

A Dual Gigabit Carrier Board alimentada pelo Raspberry Pi Compute Module 4 é equipada com portas Dual Gigabit Ethernet e portas USB 3.0 duplas, tornando-a adequada para aplicações de roteador por software, mantendo o hardware no mínimo.

Ela possui uma variedade de periféricos de I/O como MIPI CSI, MIPI DSI, micro‑HDMI para conectar telas/câmeras, um conector padrão USB 3.0 de 9 pinos para mais expansão USB, um slot para cartão micro‑SD e um conector FPC, mantendo ao mesmo tempo um formato compacto! Esta placa é ideal para makers de HTPC, desenvolvedores Linux, entusiastas de roteadores por software e a maioria dos usuários comuns de Raspberry Pi.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

- Tamanho compacto (75x64x21mm) com ricos periféricos de I/O
- Conectores Dual Gigabit Ethernet para aplicações de roteador por software
- Conectividade de câmera/tela usando interfaces MIPI CSI, MIPI DSI e micro-HDMI
- USB 3.0 duplo onboard com um cabeçalho USB 3.0 de 9 pinos adicional para mais portas externas
- Slot para cartão micro‑SD para carregar imagem de sistema para a versão de CM4 sem eMMC
- Mais expansibilidade via conector FPC (I2C, SPI)
- Suporte a ventilador externo com conector de alimentação para ventilador
- Alimentação usando USB Type‑C


## Especificações

| Especificação | Detalhes |
|-|-|
| Rede | Conectores Dual Gigabit Ethernet |
| USB 3.0 para GbE<br />(Gigabit Ethernet Bridge) | LAN7800 da Microchip |
| USB | 2 x portas USB 3.0<br />1 x cabeçalho USB 3.0 de 9 pinos  |
| Armazenamento | Slot para cartão micro‑SD (carregar imagem do sistema para versão de CM4 sem eMMC) |
| Câmera | 1 x conector MIPI CSI |
| Tela | 1 x conector MIPI DSI<br />1 x conector micro HDMI |
| FPC | Interface para I2C e SPI |
| Ventilador externo | Conector de alimentação para ventilador |
| Alimentação | 5V/3A usando porta USB Type‑C |
| Dimensões | 75x64x21mm |
| Peso | 43g |

:::caution
Devido ao alto nível de integração deste produto, ele deve ser usado com um [dissipador de calor para CM4](https://www.seeedstudio.com/Aluminum-Alloy-CNC-Heat-Sink-with-Fan-for-Raspberry-Pi-CM4-Module-p-4923.html). Caso contrário, pode causar instabilidade do USB ou do Ethernet
:::

## Visão geral de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/hw-overview.png" alt="pir" width="900" height="auto"/></p>

## Introdução ao hardware

### Interface de 200 pinos para Raspberry Pi Compute Module 4

Esta placa carrier possui uma **interface de 200 pinos** com 2 fileiras de 100 pinos cada, para que você possa conectar um [Raspberry Pi Compute Module 4](https://www.seeedstudio.com/Raspberry-Pi-Compute-Module-CM4001000-p-4720.html) e realizar seus projetos!

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/CM4.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/102110497/CM4.png) para uma imagem com resolução mais alta

### Portas Dual Gigabit Ethernet

Esta placa carrier possui **2 x portas Gigabit Ethernet (RJ45)**. Uma porta Ethernet está conectada ao **Gigabit Ethernet PHY** do módulo CM4, que é baseado no **Broadcom BCM54210PE**. Por outro lado, a outra porta Gigabit Ethernet está conectada ao **LAN7800 da Microchip**, que é uma **USB 3.0 to GbE (Gigabit Ethernet Bridge)**. A **interface USB 3.0** aqui é estendida a partir da **interface PCIe** do módulo CM4. Além disso, ambas as portas podem suportar velocidades de até 1Gbps.

#### Esquemáticos das portas Dual Gigabit Ethernet

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RJ45.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/102110497/RJ45.png) para uma imagem com resolução mais alta

#### Esquemáticos de USB 3.0 to GbE (Gigabit Ethernet Bridge)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN7800.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/102110497/LAN7800.png) para uma imagem com resolução mais alta

### Interface de câmera CSI

Ela possui uma **interface de câmera MIPI CSI**, e você pode conectar uma câmera por meio de um **cabo flat CSI de 15 pinos**. Esta interface de câmera pode ser usada para aplicações de detecção de objetos e aprendizado de máquina.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/CSI.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/102110497/CSI.png) para uma imagem com resolução mais alta

### Interface de tela DSI

Ela possui uma **interface de tela MIPI DSI**, e você pode conectar uma tela por meio de um **cabo flat DSI de 15 pinos**. Esta interface de tela pode ser usada para interagir com a placa carrier.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/DSI.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/102110497/DSI.png) para uma imagem com resolução mais alta

### Interface FPC

Há uma interface **FPC de 8 pinos** nesta placa carrier com **passo de 0,5mm H2,5**. Você pode usar esta interface para conectar hardware adicional como câmeras e telas à placa carrier.

#### Especificações

- Corrente nominal: 0,5A
- Tensão nominal: 50V
- Tensão suportada: 500V
- Resistência de contato: 20mΩ
- Resistência de isolamento: 800mΩ
- Temperatura de trabalho: -20°C ~ +85°C

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_Schematics.png" alt="pir" width="550" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

### Portas Dual USB 3.0 e cabeçalho de 9 pinos

O Compute Module 4 possui nativamente apenas uma **interface USB 2.0**. No entanto, usamos a **interface PCIe** existente no CM4 e a expandimos em uma **interface USB 3.0 com 2 x portas USB 3.0**. Essas portas USB oferecem velocidade de transferência de até 5Gbps.

Além disso, há um **cabeçalho USB 3.0 de 9 pinos** e você pode conectar ainda mais dispositivos USB usando esse cabeçalho.

Você pode primeiro conectar um [adaptador fêmea de 9 pinos para fêmea de 20 pinos](https://www.amazon.com/SIENOC-Female-Motherboard-Housing-Adapter/dp/B00EOI3VC8/ref=sr_1_4?dchild=1&keywords=9+pin+to+20+pin&qid=1630315040&sr=8-4) ao cabeçalho de 9 pinos nesta placa e então conectar um [adaptador macho de 20 pinos para USB3.0](https://www.amazon.com/Motherboard-Adapter-Header-Convert-Female/dp/B071NZHWHG/ref=sr_1_9?dchild=1&keywords=20-pin+usb3.0&qid=1630315493&sr=8-9) ao cabeçalho fêmea de 20 pinos anterior. Precisamos desses 2 produtos porque atualmente **adaptador de 9 pinos para USB3.0** não está disponível no mercado, e somente **adaptador de 9 pinos para USB2.0** está disponível.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/USB-pins.jpg" alt="pir" width="1000" height="auto"/></p>

**Nota:** Se você quiser conectar um [ventilador de 5V](https://www.seeedstudio.com/Aluminum-Alloy-CNC-Heat-Sink-with-Fan-for-Raspberry-Pi-CM4-Module-p-4923.html) a esta placa usando **cabos jumper**, você pode conectar a **extremidade positiva (+)** do ventilador ao pino **VBUS** e a **extremidade negativa (-)** do ventilador aos pinos **GND**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/fan-connect.jpg" alt="pir" width="1000" height="auto"/></p>

#### Esquemáticos do USB 3.0 HOST

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/USB3.0.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/102110497/USB3.0.png) para uma imagem com resolução mais alta

#### Esquemáticos de PCIe para USB 3.0

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/PCIe_to_USB.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/102110497/PCIe_to_USB.png) para uma imagem com resolução mais alta

### Porta micro HDMI

Há uma porta micro HDMI na placa carrier e você pode usá-la para conectar a telas HDMI por meio de um **cabo micro HDMI para HDMI padrão**. Ela suporta vídeo até resolução 4K a 60fps.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/micro-HDMI.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/102110497/micro-HDMI.png) para uma imagem com resolução mais alta

### UART IO

Há uma **interface de 4 pinos** na placa carrier para **comunicações UART**. Você pode usar essa interface e **fazer login** diretamente no **Raspberry Pi OS** usando um **cabo adaptador USB para Serial**. Ela possui os pinos: **TX, RX, 3V3, GND**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

### Pino de modo de boot

Essa **interface de 3 pinos** é usada quando você deseja tornar a placa carrier um **dispositivo USB**. Depois que você curto‑circuitar os pinos **GND** e **BOOT**, poderá acessar o **armazenamento eMMC** ou o **armazenamento do cartão micro‑SD** usando um **PC HOST**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

### Botão de reset

Este botão é usado para **resetar** o CM4. Ele atua como um **reboot de hardware**.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RESET.png" alt="pir" width="650" height="auto"/></p>

### Slot para cartão Micro‑SD

Ela é equipada com um **slot para cartão micro‑sd**. Isso é útil quando você deseja **instalar o sistema operacional** em um cartão micro‑SD, enquanto o **módulo CM4 sem eMMC** é utilizado. Recomenda‑se usar um cartão com um mínimo de pelo menos 8GB.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/micro_SD.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/102110497/micro_SD.png) para uma imagem em resolução mais alta

### Porta USB Type-C

A **Porta USB Type-C** na placa carrier pode ser usada para **alimentar a placa carrier usando 5V/3A**. Porém, ela também pode ser usada para atuar como um **Dispositivo USB**, onde você pode conectar a placa carrier a um **PC HOST** e a placa carrier atuará como um **Dispositivo de Armazenamento em Massa USB**. Aqui, você poderá acessar o **eMMC onboard** e o **cartão micro-SD** conectado da placa carrier via PC.

#### Esquemáticos da USB Type-C como Dispositivo USB

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/type-c.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/102110497/type-c.png) para uma imagem em resolução mais alta

#### Esquemáticos de Gerenciamento de Energia

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/power-manage.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/102110497/power-manage.png) para uma imagem em resolução mais alta

### Conector de Ventoinha de 4 Pinos

Você pode conectar uma **ventoinha PWM de 4 pinos** a este conector e controlá-la usando software.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/Fan.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/102110497/Fan.png) para uma imagem em resolução mais alta

### LEDs de Alimentação e Funcionamento

A placa carrier possui 3 LEDs. Um indica que ela está ligada e acende em **Azul**, enquanto os outros 2 LEDs indicam o status de funcionamento da placa carrier e acendem em **Verde** e **Branco**.

#### Esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LEDs.png" alt="pir" width="1000" height="auto"/></p>

**Dica:** Clique [aqui](https://files.seeedstudio.com/wiki/102110497/LEDs.png) para uma imagem em resolução mais alta

## Primeiros Passos - Hardware Necessário

Você precisa preparar o seguinte hardware antes de começar a usar a Dual Gigabit Ethernet Carrier Board para RPi CM4

- Dual Gigabit Ethernet Carrier Board para RPi CM4
- Cartão micro-SD de 16GB (ou mais)
- Leitor de cartão micro-SD
- Computador (PC/Mac/Linux)
- Adaptador de energia (5V/3A)
- Cabo USB Type-C
- Conversor USB para serial, cabo Ethernet (opcional)

## Primeiros Passos - Configuração de Software

### Gravar o Raspberry Pi OS

Agora precisamos gravar o **Raspberry Pi OS** em um **cartão micro-SD (para versão sem eMMC)** ou no **armazenamento eMMC (para versão com eMMC)**, para que ele possa ser executado no Raspberry Pi Compute Module 4.

#### Gravar em Cartão Micro-SD (Versão CM4 sem eMMC)

Se você tiver um Compute Module 4 sem eMMC, então você precisa inserir um micro-SD e gravar o Raspberry Pi OS. Siga as etapas abaixo de acordo com o seu sistema operacional.

- **Passo 1.** Insira um cartão micro-SD no computador usando um **leitor de cartão micro-SD** conectado ao computador, ou usando um **leitor de cartão embutido** em um laptop

- **Passo 2.** Baixe o software **Raspberry Pi Imager** visitando [este link](https://www.raspberrypi.org/software/)

**Nota:** Você pode escolher baixar para **Windows, Mac ou Ubuntu**

- **Passo 3.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 4.** Clique em **CHOOSE OS** e selecione a versão mais recente do **Raspberry Pi OS (32-bit)**

- **Passo 5.** Clique em **CHOOSE STORAGE** e selecione o cartão micro-SD conectado

- **Passo 6.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

#### Gravar em eMMC (Versão CM4 com eMMC)

Se você tiver um Compute Module 4 com eMMC, então você pode gravar diretamente o Raspberry Pi OS no armazenamento eMMC. Depois que os drivers necessários forem instalados, você só precisa conectar a porta USB Type-C do CM4 ao seu PC, e ele será exibido como uma unidade externa. Siga as etapas abaixo de acordo com o seu sistema operacional.

##### Para Windows

- **Passo 1.** Baixe e execute [este instalador](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) para instalar os drivers necessários e a ferramenta de boot

- **Passo 2.** Conecte um fio jumper entre os pinos **Boot** e **GND**, como a seguir, para habilitar o modo de programação

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 3.** Conecte a Carrier Board ao PC via cabo USB Type-C

O Windows agora encontrará o hardware e instalará os drivers necessários

- **Passo 4.** Procure pela ferramenta **rpiboot** que instalamos antes e abra-a

- **Passo 5.** Abra o **explorador de arquivos** e você verá o eMMC do Computer Module 4 exibido como um **dispositivo de armazenamento em massa USB**

- **Passo 6.** Baixe o software **Raspberry Pi Imager** visitando [este link](https://www.raspberrypi.org/software/)

- **Passo 7.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 8.** Clique em **CHOOSE OS** e selecione a versão mais recente do **Raspberry Pi OS (32-bit)**

- **Passo 9.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 10.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

##### Para Mac/Linux

Usaremos o Git para obter o código-fonte do **rpiboot**, então certifique-se de que o Git esteja instalado

- **Passo 1.** Abra uma janela do **Terminal** e digite o seguinte para atualizar a **lista de pacotes**

```sh
sudo apt-get update
```

- **Passo 2.** Instale o **Git** com o seguinte comando

```sh
sudo apt install git
```

- **Passo 3.** O Git pode gerar um erro se a data não estiver configurada corretamente. Digite o seguinte para corrigir isso

```sh
sudo date MMDDhhmm
```

**NOTA:** Onde **MM** é o mês, **DD** é o dia, e **hh** e **mm** são as horas e os minutos, respectivamente.

- **Passo 4.** Clone o repositório da ferramenta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Passo 5.** Digite o seguinte para instalar o **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

- **Passo 6.** Compile e instale a ferramenta usbboot

```sh
make
```

- **Passo 7.** Execute a ferramenta usbboot e ela aguardará uma conexão

```sh
sudo ./rpiboot
```

- **Passo 8.** Conecte um fio jumper entre os pinos **Boot** e **GND**, como a seguir, para habilitar o modo de programação

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 9.** Conecte a Carrier Board ao PC via cabo USB Type-C

- **Passo 10.** Baixe o software **Raspberry Pi Imager** visitando [este link](https://www.raspberrypi.org/software/)

- **Passo 11.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 12.** Clique em **CHOOSE OS** e selecione a versão mais recente do **Raspberry Pi OS (32-bit)**

- **Passo 13.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 14.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

### Fazer login no Raspberry Pi OS

#### Método 1: Usando SSH via Wi-Fi

Se você quiser fazer login no Raspberry Pi OS usando **SSH via Wi-Fi**, você pode seguir as etapas abaixo. Siga de acordo com o seu sistema operacional

##### Para Windows

- **Passo 1.** Insira o cartão micro-SD (com o Raspberry Pi OS já instalado) no computador usando um **leitor de cartão micro-SD** conectado ao computador, ou usando um **leitor de cartão embutido** em um laptop

- **Passo 2.** Abra o **Notepad** e digite o seguinte

```sh
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

**NOTA:** O código do país (country) deve ser definido para o [código ISO/IEC alpha2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) do país em que você está usando sua placa.

- **Passo 3.** Clique em `File > Save`

- **Passo 4.** Navegue até o nome da unidade conectada do cartão micro-SD

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/select_USB.png" alt="pir" width="650" height="auto"/></p>

- **Passo 5.** Digite o nome do arquivo como **wpa_supplicant.conf**, selecione **Save as type** como **All Files** e clique em **Save**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/wpa_supplicant.png" alt="pir" width="650" height="auto"/></p>

- **Passo 6.** Abra o **Command Prompt** e navegue até o cartão micro-SD

```sh
Example: 
C:\Users\user> F:
F:\>
```

- **Passo 7.** Quando você estiver dentro do cartão micro-SD, crie um arquivo vazio chamado **SSH** digitando o seguinte

```sh
echo > ssh
```

**Nota:** Isso é feito para habilitar o SSH no Raspberry Pi OS

- **Passo 8.** Ejete o cartão micro-SD do PC e insira-o na Dual Gigabit Ethernet Carrier Board

- **Passo 9.** Conecte um cabo USB Tipo-C à porta Tipo-C na placa carrier e conecte a outra extremidade do cabo Tipo-C a um adaptador de energia e ligue-o

- **Passo 10.** Baixe e instale o **Putty** acessando [este link](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Observação:** Putty é um cliente SSH e telnet que você pode usar para conectar à Carrier Board via SSH

- **Passo 11.** Abra o Putty para conectar o PC à Carrier Board

- **Passo 12.** Selecione **SSH** em **Connection Type**

- **Passo 13.** Em **Host Name**, digite **raspberrypi.local** e deixe a **Port** como **22**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png" alt="pir" width="450" height="auto"/></p>

- **Passo 14.** Clique em **Open**

- **Passo 15.** Na janela do Putty, insira os dados de login da seguinte forma

```sh
- Username: pi
- Password: raspberry
```

- **Passo 16.** Se você tiver iniciado sessão com sucesso no Raspberry Pi OS, verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### Para Mac/Linux

- **Passo 1.** Insira o cartão micro-SD (com o Raspberry Pi OS já instalado) no computador usando um **leitor de cartão micro-SD** conectado ao computador, ou usando um **leitor de cartão embutido** em um laptop

- **Passo 2.** Abra o **Terminal** e navegue até o cartão micro-SD

```sh
Example: 
cd /media/user/boot
```

**OBSERVAÇÃO:** Em **/media/user/boot**, substitua **user** pelo nome de usuário do seu PC

- **Passo 3.** Depois que você estiver dentro do cartão micro-SD, crie um arquivo chamado **wpa_supplicant.conf** e abra-o

```sh
nano wpa_supplicant.conf
```

- **Passo 4.** Digite o seguinte conteúdo no arquivo

```sh
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

**OBSERVAÇÃO:** O código do país (country) deve ser definido como o [código ISO/IEC alpha2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) do país em que você está usando sua placa.

- **Passo 5.** Pressione **Ctrl + x** no teclado para salvar o arquivo e, em seguida, pressione **y** e **Enter** para confirmar as alterações

- **Passo 6.** Enquanto você estiver na unidade **boot**, crie um arquivo vazio chamado **SSH** digitando o seguinte

```sh
touch ssh
```

**OBSERVAÇÃO:** Isso é feito para ativar o SSH no Raspberry Pi OS

- **Passo 7.** Ejete o cartão micro-SD do PC e insira-o na Dual Gigabit Ethernet Carrier Board

- **Passo 8.** Conecte um cabo USB Tipo-C à porta Tipo-C na placa carrier e conecte a outra extremidade do cabo Tipo-C a um adaptador de energia e ligue-o

- **Passo 9.** Abra o **Terminal** novamente no PC e digite o seguinte

```sh
ssh pi@raspberrypi.local
```

- **Passo 10.** Digite **yes** para a seguinte mensagem

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Passo 11.** Quando for solicitado a senha, digite o seguinte

```sh
raspberry
```

- **Passo 12.** Se você tiver iniciado sessão com sucesso no Raspberry Pi OS, verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

#### Método 2: Usando SSH sobre Ethernet

Se você quiser iniciar sessão no Raspberry Pi OS usando **SSH sobre Ethernet**, pode seguir os passos abaixo. Siga de acordo com o seu sistema operacional

##### Para Windows

- **Passo 1.** Insira o cartão micro-SD (com o Raspberry Pi OS já instalado) no computador usando um **leitor de cartão micro-SD** conectado ao computador, ou usando um **leitor de cartão embutido** em um laptop

- **Passo 2.** Abra o **Prompt de Comando** e navegue até o cartão micro-SD

```sh
Example: 
C:\Users\user> F:
F:\>
```

- **Passo 3.** Depois que você estiver dentro do cartão micro-SD, crie um arquivo vazio chamado **SSH** digitando o seguinte

```sh
echo > ssh
```

Isso é feito para ativar o SSH no Raspberry Pi OS

- **Passo 4.** Ejete o cartão micro-SD do PC e insira-o na Dual Gigabit Ethernet Carrier Board

- **Passo 5.** Conecte um cabo USB Tipo-C à porta Tipo-C na placa carrier e conecte um cabo Ethernet a uma das portas Ethernet na Carrier Board

- **Passo 6.** Conecte a outra extremidade do cabo Ethernet a um roteador e também conecte a outra extremidade do cabo Tipo-C a um adaptador de energia e ligue-o

- **Passo 7.** Baixe e instale o **Putty** acessando [este link](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Observação:** Putty é um cliente SSH e telnet que você pode usar para conectar à Carrier Board via SSH

- **Passo 8.** Abra o Putty para conectar o PC à Carrier Board

- **Passo 9.** Selecione **SSH** em **Connection Type**

- **Passo 10.** Em **Host Name**, digite **raspberrypi.local** e deixe a **Port** como **22**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png" alt="pir" width="450" height="auto"/></p>

- **Passo 11.** Clique em **Open**

- **Passo 12.** Na janela do Putty, insira os dados de login da seguinte forma

```sh
- Username: pi
- Password: raspberry
```

- **Passo 13.** Se você tiver iniciado sessão com sucesso no Raspberry Pi OS, verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### Para Mac/Linux

- **Passo 1.** Insira o cartão micro-SD (com o Raspberry Pi OS já instalado) no computador usando um **leitor de cartão micro-SD** conectado ao computador, ou usando um **leitor de cartão embutido** em um laptop

- **Passo 2.** Abra o **Terminal** e navegue até o cartão micro-SD

```sh
Example: 
cd /media/user/boot
```

**OBSERVAÇÃO:** Em **/media/user/boot**, substitua **user** pelo nome de usuário do seu PC

- **Passo 3.** Depois que você estiver dentro do cartão micro-SD, crie um arquivo vazio chamado **SSH** digitando o seguinte

```sh
touch ssh
```

**OBSERVAÇÃO:** Isso é feito para ativar o SSH no Raspberry Pi OS

- **Passo 4.** Ejete o cartão micro-SD do PC e insira-o na Dual Gigabit Ethernet Carrier Board

- **Passo 5.** Conecte um cabo USB Tipo-C à porta Tipo-C na placa carrier e conecte um cabo Ethernet a uma das portas Ethernet na Carrier Board

- **Passo 6.** Conecte a outra extremidade do cabo Ethernet a um roteador e também conecte a outra extremidade do cabo Tipo-C a um adaptador de energia e ligue-o

- **Passo 7.** Abra o **Terminal** novamente no PC e digite o seguinte

```sh
ssh pi@raspberrypi.local
```

- **Passo 8.** Digite **yes** para a seguinte mensagem

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Passo 9.** Quando for solicitado a senha, digite o seguinte

```sh
raspberry
```

- **Passo 10.** Se você tiver iniciado sessão com sucesso no Raspberry Pi OS, verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

#### Método 3: Usando Conversor USB para Serial

##### Para Windows

Se você tiver um **Conversor USB para Serial**, poderá usar os seguintes passos para iniciar sessão no Raspberry Pi OS

- **Passo 1.** Insira o cartão micro-SD (com o Raspberry Pi OS já instalado) no computador usando um **leitor de cartão micro-SD** conectado ao computador, ou usando um **leitor de cartão embutido** em um laptop

- **Passo 2.** Abra o **File Explorer** e navegue até o cartão micro-SD conectado

- **Passo 3.** Abra o arquivo **config.txt** e adicione a seguinte linha ao final

```sh
enable_uart=1
```

Isso é para habilitar a comunicação UART entre o PC e a Carrier Board

- **Passo 4.** Clique em `File > Save` para salvar sua configuração

- **Passo 5.** Ejete o cartão micro-SD do PC e insira-o de volta na Carrier Board

- **Passo 6.** Solde um **Conector Macho de 4 Pinos** no **UART IO** na Carrier Board

- **Passo 7.** Conecte os jumpers do Conversor USB para Serial ao **conector de pinos UART IO** na Carrier Board da seguinte forma

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 8.** Conecte o Conversor USB para Serial ao PC

- **Passo 9.** Abra o **Device Manager** digitando **Device Manager** na caixa de pesquisa do Windows

- **Passo 10.** Clique na seta de expansão de **Ports (COM & LPT)** e encontre o nome da porta serial conectada (ex: **COM42**)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/com-show.png" alt="pir" width="320" height="auto"/></p>

- **Passo 11.** Baixe e instale o **Putty** acessando [este link](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Observação:** Putty é um cliente SSH e telnet que você pode usar para conectar à Carrier Board via SSH. Você pode pular esta etapa se já tiver o Putty instalado

- **Passo 12.** Abra o Putty para conectar o PC à Carrier Board

- **Passo 13.** Selecione **Serial** em **Connection Type**

- **Passo 14.** Configure as definições da seguinte forma:

  - Serial line: COM4 (escolha sua porta COM)
  - Speed: 115200

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/Putty_Serial_1.png" alt="pir" width="450" height="auto"/></p>

- **Passo 15.** Clique em **Open**

- **Passo 16.** Na janela do Putty, insira os dados de login da seguinte forma

```sh
- Username: pi
- Password: raspberry
```

- **Passo 17.** Se você tiver iniciado sessão com sucesso no Raspberry Pi OS, verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width="900" height="auto"/></p>

##### Para Mac/Linux

Se você tiver um **Conversor USB para Serial**, poderá usar as seguintes etapas para fazer login no Raspberry Pi OS

- **Etapa 1.** Insira o cartão micro-SD (com Raspberry Pi OS já instalado) no computador usando um **leitor de cartão micro-SD** conectado ao computador ou usando um **leitor de cartão embutido** em um laptop

- **Etapa 2.** Abra a unidade **boot** e navegue até o cartão micro-SD conectado

- **Etapa 3.** Abra o arquivo **config.txt** e adicione a seguinte linha ao final

```sh
enable_uart=1
```

**NOTA:** Isto é para habilitar a comunicação UART entre o PC e a Carrier Board

- **Etapa 4.** Clique em `File > Save` para salvar sua configuração

- **Etapa 5.** Ejete o cartão micro-SD do PC e insira-o novamente na Carrier Board

- **Etapa 6.** Solde um **Header macho de 4 pinos** no **UART IO** na Carrier Board como a seguir

- **Etapa 7.** Conecte os cabos jumper do Conversor USB para Serial ao **header de pinos UART IO** na Carrier Board

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/UART.png" alt="pir" width="1000" height="auto"/></p>

- **Etapa 8.** Conecte o Conversor USB para Serial ao PC

- **Etapa 9.** Abra uma **janela de terminal** no Mac/Linux

- **Etapa 10.** Digite o seguinte para atualizar a **lista de pacotes**

```sh
sudo apt-get update
```

- **Etapa 11.** Digite o seguinte para instalar o **minicom**

```sh
sudo apt-get install minicom
```

- **Etapa 12.** Digite o seguinte no terminal para ver os dispositivos seriais conectados

```sh
dmesg | grep tty
```

> Ex:<br />
  [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device

- **Etapa 13.** Conecte-se ao dispositivo serial digitando o seguinte

```sh
minicom -D /dev/ttyACM0 -b 115200
```

**Nota:** A taxa de baud está definida para 115200

- **Etapa 14.** Após as conexões de hardware mencionadas acima, ligue a energia na tomada de parede para energizar a Carrier Board

Agora você fez login com sucesso no Raspberry Pi OS.

#### Método 4: Usando Teclado, Mouse e Display

Se você tiver um **Display HDMI, cabo micro-HDMI para HDMI tamanho completo, teclado e mouse**, poderá conectá-los à Dual Gigabit Ethernet Carrier Board e fazer login no Raspberry Pi OS.

(desenhar um diagrama - não muito importante)

### Configuração das Portas USB

Por padrão, as **2 portas USB 3.0** estão **desativadas** para economizar energia no CM4 e, portanto, não estão prontamente acessíveis. No entanto, o **Header USB 3.0 de 9 pinos** é **acessível** imediatamente.

Se você quiser habilitar as 2 portas USB 3.0, precisa adicionar uma linha ao final do arquivo **config.txt** localizado dentro do diretório **/boot**

Existem 2 maneiras de fazer isso:

#### Método 1: Modificar o arquivo a partir do cartão micro-SD conectado ao PC

- **Etapa 1.** Insira o cartão micro-SD (com Raspberry Pi OS já instalado) no computador

- **Etapa 2.** Abra o **File Explorer** e navegue até o cartão micro-SD conectado

- **Etapa 3.** Abra o arquivo **config.txt** e adicione a seguinte linha ao final

```sh
dtoverlay=dwc2,dr_mode=host
```

- **Etapa 4.** Salve o arquivo

#### Método 2: Modificar o arquivo a partir da Carrier Board

- **Etapa 1.** Insira o cartão micro-SD na Carrier Board e ligue-a

- **Etapa 2.** Faça login no Raspberry Pi OS usando qualquer um dos métodos explicados anteriormente

- **Etapa 3.** Navegue até o diretório **boot** digitando o seguinte

```sh
cd /boot
```

- **Etapa 4.** Abra **config.txt** usando o **editor de texto nano**

```sh
sudo nano config.txt
```

- **Etapa 5.** Adicione a seguinte linha ao final

```sh
dtoverlay=dwc2,dr_mode=host
```

- **Etapa 6.** Pressione **Ctrl + X**, pressione **Y** e então pressione **Enter** no teclado para salvar o arquivo

### Teste de Velocidade das Portas USB

Se você quiser testar a velocidade das portas USB, poderá executar os seguintes comandos no Terminal do Raspberry Pi OS

```sh
sudo dd if=/dev/sda1 of=/dev/null bs=512k count=5000
```

A saída será a seguinte

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/USB_test.png" alt="pir" width="900" height="auto"/></p>

**NOTA:** Em **if=/dev/sda1**, **sda1** é a unidade USB conectada. Você pode encontrá-la digitando **lsblk** como a seguir

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/find_usb.png" alt="pir" width="700" height="auto"/></p>

### Configuração das Portas Ethernet

Depois que você gravar o Raspberry Pi OS no módulo CM4, você obterá a velocidade Gigabit completa (1Gbps) apenas na porta Ethernet conectada ao **Gigabit Ethernet PHY** do módulo CM4, que é baseado no **Broadcom BCM54210PE** (porta do lado direito). A porta que está conectada à **ponte Microchip LAN7800 USB 3.0 para GbE (Gigabit Ethernet Bridge)** (porta do lado esquerdo), não fornecerá a velocidade total de 1Gbps, mas sim uma velocidade bem reduzida. Isso ocorre porque o driver lan78xx no kernel do Raspberry Pi não está atualizado.

Siga as etapas abaixo para instalar um script e corrigir esse problema:

- **Etapa 1.** Entre na janela de Terminal do Raspberry Pi OS

- **Etapa 2.** Digite o seguinte para baixar o repositório

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
```

- **Etapa 3.** Entre no diretório do repositório

```sh
cd seeed-linux-dtoverlays
```

- **Etapa 4.** Digite o seguinte para instalar o script

```sh
sudo ./scripts/cm4_lan7800.sh
```

- **Etapa 5.** Reinicie a carrier board

```sh
sudo reboot
```

- **Etapa 6.** Digite o seguinte para verificar o status da instalação

```sh
dmesg | grep lan
```

Se você vir a saída abaixo, seu driver está funcionando corretamente agora

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN78_Driver.png" alt="pir" width="900" height="auto"/></p>

**Nota:** Se você quiser acessar a ajuda de uso, digite **sudo ./cm4_lan7800.sh -h**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/LAN78_help.png" alt="pir" width="900" height="auto"/></p>

### Teste de Velocidade do Cartão SD

Acesse a janela de terminal do Raspberry Pi OS e execute o seguinte comando

```sh
sudo dd if=/dev/mmcblk0p2 of=/dev/null bs=512k count=5000
```

Você verá a saída da seguinte forma

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/SD_Test.png" alt="pir" width="900" height="auto"/></p>

### Configuração dos Conectores DSI e CSI

Se você quiser conectar um display pela interface DSI e uma câmera pela interface CSI na Carrier Board, siga as etapas abaixo

- **Etapa 1.** Conecte o display à porta DSI1 e conecte a câmera à porta CSI1 na Carrier Board como a seguir

- **Etapa 2.** Habilite o display e a câmera executando o seguinte dentro da janela de terminal do Raspberry Pi OS

```sh
sudo wget https://datasheets.raspberrypi.org/cmio/dt-blob-disp1-cam1.bin -O /boot/dt-blob.bin
```

**Nota:** Aqui o método de configuração é escolhido a partir de [cmio-display](https://github.com/raspberrypi/documentation/blob/master/hardware/computemodule/cmio-display.md) e [raspistill](https://www.raspberrypi.org/documentation/configuration/camera.md)

- **Etapa 3.** Execute os comandos abaixo para tirar uma foto com a câmera e visualizar no display

```sh
raspistill -v -o test.jpg 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/DSI_CSI.png" alt="pir" width="850" height="auto"/></p>

### Configuração de I2C

#### Configuração de Hardware

Se você quiser conectar um **dispositivo I2C** à **interface FPC**, siga as conexões:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_I2C.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

#### Configuração de Software

Você pode conectar dispositivos I2C ao **conector FPC de 8 pinos** e controlá-los usando o Raspberry Pi OS.

- **Etapa 1.** Acesse a **ferramenta de configuração de software do Raspberry Pi**

```sh
sudo raspi-config
```

- **Etapa 2.** Vá para `Interface Options > I2C` e pressione **Enter**

- **Etapa 3.** Selecione **Yes** para habilitar o I2C

- **Etapa 4.** **Reinicie** a carrier board

```sh
sudo reboot
```

### Depuração de I2C

- **Etapa 1.** Conecte um dispositivo I2C ao **conector FPC de 8 pinos** da carrier board

- **Etapa 2.** Liste todos os barramentos I2C disponíveis

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/I2C_Detect.png" alt="pir" width="1000" height="auto"/></p>

- **Etapa 3.**  Imediatamente escaneie os endereços padrão no barramento I2C 1 (i2c-1), usando o método padrão para cada endereço

```sh
i2cdetect -y 1
```

**Nota** 1 representa o número do barramento I2C

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/detect.png" alt="pir" width="1000" height="auto"/></p>

A figura acima mostra um dispositivo detectado com endereço I2C 0x5c

- **Etapa 4.** Leia o conteúdo do registrador digitando o seguinte

```sh
i2cget -f -y 1 0x5c 0x0f
```

- -y desativa o modo interativo. Por padrão, o i2cdetect aguardará uma confirmação do usuário antes de mexer no barramento I2C. Quando essa flag é usada, ele executará a operação diretamente
- 1 representa o número do barramento I2C
- 0x5c representa o endereço do dispositivo I2C
- 0x0f representa o endereço de memória

A saída será a seguinte

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/i2cget.png" alt="pir" width="400" height="auto"/></p>  

- **Etapa 5.** Escreva dados no registrador digitando o seguinte

```sh
i2cset -y 1 0x5c 0x11 0x10
```

- -y desativa o modo interativo. Por padrão, o i2cdetect aguardará uma confirmação do usuário antes de mexer no barramento I2C. Quando essa flag é usada, ele executará a operação diretamente
- 1 representa o número do barramento I2C
- 0x5c representa o endereço do dispositivo I2C
- 0x11 representa o endereço de memória
- 0x10 representa o conteúdo específico no endereço de memória
<br />

- **Etapa 6.** Leia todos os valores dos registradores digitando o seguinte

```sh
i2cdump -y 1 0x5c
```

- -y desativa o modo interativo. Por padrão, i2cdetect aguardará uma confirmação do usuário antes de mexer no barramento I2C. Quando esta flag é usada, ele executará a operação diretamente
- 1 representa o número do barramento I2C
- 0x5c representa o endereço do dispositivo I2C

A saída será a seguinte

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/i2cdump.png" alt="pir" width="1000" height="auto"/></p>  

### Configuração SPI

#### Configuração de Hardware

Se você quiser conectar um **dispositivo SPI** à **interface FPC**, siga as conexões:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/FPC_SPI.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/FPC_connect.png" alt="pir" width="1000" height="auto"/></p>

#### Configuração de Software

Você pode conectar dispositivos SPI ao **conector FPC de 8 pinos** e controlá-los usando o Raspberry Pi OS.

- **Etapa 1.** Acesse a **ferramenta de configuração de software do Raspberry Pi**

```sh
sudo raspi-config
```

- **Etapa 2.** Vá para `Interface Options > SPI` e pressione **Enter**

- **Etapa 3.** Selecione **Yes** para habilitar SPI

- **Etapa 4.** **Reinicie** a placa de suporte

```sh
sudo reboot
```

### Depuração SPI

- **Etapa 1.** Conecte um dispositivo SPI ao **conector FPC de 8 pinos** da placa de suporte

- **Etapa 2.** Liste todos os dispositivos SPI disponíveis

```sh
ls /dev/spi*
```

A saída será a seguinte

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/spi_list.png" alt="pir" width="450" height="auto"/></p>

- **Etapa 3.** Insira o cartão micro-SD no PC

- **Etapa 4.** Navegue até a unidade **boot**

- **Etapa 5.** Baixe [este arquivo](https://files.seeedstudio.com/wiki/102110497/spidev_test) e mova-o para a unidade **boot**

- **Etapa 6.** Desconecte o cartão micro-SD do PC e conecte-o à placa de suporte

- **Etapa 7.** Ligue a placa de suporte e navegue até o diretório **boot**

```sh
cd /boot
```

- **Etapa 8.** Curto-circuite **GPIO 10 (Pino 6)** e **GPIO 9 (Pino 7)** usando um fio jumper

**Nota:** Aqui fazemos um curto-circuito nos **pinos MOSI e MISO**

- **Etapa 9.** Execute a seguinte ferramenta de teste SPI

```sh
./spidev_test -D /dev/spidev0.0 -v -p hello
```

Se você vir a seguinte saída, o SPI está funcionando corretamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SPI_test.jpg" alt="pir" width="1000" height="auto"/></p>

## Recursos

- **[PDF]** [Esquemático da Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4](https://files.seeedstudio.com/wiki/102110497/RapberryPi-CM4-Dual-GbE-Carrier-Board-V1.1_SCH.pdf)

- **[PDF]** [Raspberry Pi Compute Module 4 Datasheet](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Página Web]** [Documentação Oficial do Raspberry Pi](https://www.raspberrypi.org/documentation/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

