---
description: Uso de hardware e interfaces para a placa carrier J501
title: Uso das Interfaces
tags:
  - J501
  - Jetson
  - Interface
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /j501_carrier_board_interfaces_usage
last_update:
  date: 08/20/2024
  author: Youjiang
createdAt: '2024-09-08'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/j501_carrier_board_interfaces_usage/
---

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/j501.png"/>
</div>

Este wiki apresenta os diferentes hardwares e interfaces na placa Carrier J501 e como usá-los para expandir suas ideias de projeto.

## Câmera GMSL

Precisamos combinar a placa carrier J501 com a [placa de expansão GMSL](https://www.seeedstudio.com/reServer-Industrial-J501-GMSL-extension-board-p-5949.html) para ativar a funcionalidade GMSL. A Placa de Extensão GMSL J501 é projetada para conectar até 8 câmeras GMSL com a placa carrier reServer Industrial J501, que é compatível com NVIDIA® Jetson AGX Orin™. Esta placa de extensão utiliza o desserializador 'MAX96724'.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl.png"/>
</div>

### Câmeras compatíveis

- [[3MP] SG3S-ISX031C-GMSL2F](https://www.sensing-world.com/en/pd.jsp?recommendFromPid=0&id=23&fromMid=1544)

### Conexão de hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl_connectoin.png"/>
</div>

- **Passo 1.** Instale cilindros de cobre na placa carrier J501.
- **Passo 2.** Conecte a placa de expansão GMSL à placa carrier J501 e fixe-as usando parafusos.
- **Passo 3.** Conecte a câmera GMSL.

### Instruções de uso

:::note
Antes de habilitar a funcionalidade GMSL, certifique-se de ter instalado uma versão do JetPack com o driver da placa de expansão GMSL.
:::

**Passo 1.** No terminal do dispositivo Jetson, insira o seguinte comando para verificar se a câmera conectada foi reconhecida corretamente.

```bash
ls /dev/video*
```

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/ls_cam.png"/>
</div>

**Passo 2.** Instale as ferramentas de configuração da interface de vídeo.

```bash
sudo apt install v4l-utils
```

**Passo 3.** Defina o formato de canal para o serializador e o desserializador.

```bash
media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_1_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_2_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_3_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_4_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_5_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_6_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_7_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
```

:::note
Precisamos definir o formato de canal para o serializador e o desserializador toda vez que o dispositivo for reiniciado.
:::

**Passo 4.** Podemos usar o seguinte comando para iniciar rapidamente a câmera e abrir uma janela para exibir o fluxo de vídeo.

```bash
gst-launch-1.0 v4l2src device=/dev/video0  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video1  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video2  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video3  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video4  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video5  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video6  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video7  ! xvimagesink -ev 
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl_result.png"/>
</div>

## Conectores Ethernet Gigabit

Existem 2 portas Ethernet na J501.

- eth0: Porta Ethernet Gigabit padrão com especificação de 10/100/1000Mbps.
- eth1: Porta Ethernet de 10 Gigabit.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/internet.png"/>
</div>

Há 2 LEDs (verde e amarelo) em cada porta Ethernet:

- LED verde: ON apenas quando conectado a uma rede 1000M/10G.
- LED amarelo: Mostra o status de atividade da rede.

## Conectores SATA

A placa carrier reServer J501 suporta 2x HDD/SSD SATA 2,5" e vem com conectores de dados e de alimentação SATA. Você pode conectar ao HDD/SSD da seguinte forma:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/sata_connection.jpeg"/>
</div>

### Instruções de uso

Após a inicialização do sistema do dispositivo Jetson, você pode verificar as unidades SATA conectadas usando `lsblk`.

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsblk.png"/>
</div>

## M.2 Chave M

M.2 Chave M é uma interface projetada para unidades de estado sólido (SSDs) de alta velocidade, fornecendo velocidades de transferência de dados ultrarrápidas, ideal para aplicações de alto desempenho.

### Os SSDs compatíveis são os seguintes

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### Instruções de uso

Abra o terminal no dispositivo Jetson e insira o seguinte comando para testar a velocidade de leitura e gravação do SSD.

```bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/test_nvme.png"/>
</div>

:::danger
Execute o comando `sudo rm tempfile` para excluir os arquivos de cache após a conclusão do teste.
:::

## M.2 Chave E

A placa carrier J501 possui uma interface M.2 Chave E, por meio da qual você pode expandir os recursos de Bluetooth e Wi-Fi do dispositivo.

Recomendamos o uso do módulo Intel Dual Band Wireless-Ac 8265 com Bluetooth 8265.NGWMG.

### Conexão de hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_connection.jpeg"/>
</div>

### Instruções de uso

Após instalar o módulo Wi-Fi e energizar o dispositivo, podemos configurar as configurações de Wi-Fi e Bluetooth do dispositivo.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

Claro, também podemos verificar o status de operação do dispositivo usando os seguintes comandos.

```bash
ifconfig
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_ifconfig.png"/>
</div>

```bash
bluetoothctl
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/bluetoothctl.png"/>
</div>

## M.2 Chave B

A placa carrier J501 vem com um conector M.2 Chave B que suporta módulos 4G e 5G. Atualmente testamos o **módulo 5G SIM8202G-M2**.

### Conexão de hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/5G_connection.png"/>
</div>

## Mini PCIe

A placa carrier J501 vem com um conector mini PCIe que suporta módulos 4G e LoRa. No entanto, você só pode conectar um módulo 4G ou um módulo LoRa por vez. Alguns módulos 4G vêm com funcionalidade de GPS embutida. Também abordaremos isso.

### Módulo 4G

#### Conexão de hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/minipcie_4g.jpeg"/>
</div>

- **Passo 1.** Adicione um jumper entre os pinos **SIM_MUX_SEL** e **GND** no conector de 20 pinos.

- **Passo 2.** Insira o módulo 4G no slot mini PCIe e fixe-o com parafusos.

- **Passo 3.** Insira um cartão nano SIM habilitado para 4G no slot de cartão SIM na placa.

:::note
Se você quiser remover o cartão SIM, empurre o cartão para dentro até acionar a mola interna para que o SIM saia do slot
:::

### Instruções de uso

**Passo 1.** Instale o minicom:

```bash
sudo apt update
sudo apt install minicom -y
```

**Passo 2.** Entre no console serial do módulo 4G conectado para que possamos inserir comandos AT e interagir com o módulo 4G:

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Passo 3.** Pressione Ctrl+A e depois pressione E para ativar o eco local.

**Passo 4.** Digite o comando "AT" e pressione Enter. Se você vir a resposta "OK", o módulo 4G está funcionando corretamente.

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**Passo 5.** Digite o comando "ATI" para verificar as informações do módulo.

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

## DI/DO/CAN

A placa carrier J501 suporta 4 canais de entrada digital e 4 canais de saída digital, todos opticamente isolados para proteger efetivamente a placa principal contra picos de tensão ou outras interferências elétricas. Há também duas interfaces CAN neste mesmo conector, que discutiremos mais adiante neste wiki.

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido.jpeg"/>
</div>

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Label Name</th>
      <th>Schematic Signal</th>
      <th>Module Pin Number</th>
      <th>BGA Number</th>
      <th>GPIO Number</th>
      <th>V/A Limits</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>Entrada</td>
      <td>DI1</td>
      <td>DI_12V_1/DI_1_GPIO17</td>
      <td>A54</td>
      <td>PP.04</td>
      <td>444</td>
      <td rowSpan={4}>12V/ 20mA de corrente no total</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_12V_2/DI_2_GPIO18</td>
      <td>C55</td>
      <td>PQ.04</td>
      <td>452</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_12V_3/DI_3_GPIO19</td>
      <td>K56</td>
      <td>PN.02</td>
      <td>434</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_12V_4/DI_4_GPIO33</td>
      <td>C54</td>
      <td>PM.07</td>
      <td>431</td>
    </tr>
    <tr>
      <td rowSpan={4}>Saída</td>
      <td>DO1</td>
      <td>DO_40V_1/DI_1_GPIO</td>
      <td>E59</td>
      <td>PAA.04</td>
      <td>320</td>
      <td rowSpan={4}>40V/40mA de carga por pino</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_40V_2/DI_2_GPIO</td>
      <td>F59</td>
      <td>PAA.07</td>
      <td>323</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_40V_3/DI_3_GPIO</td>
      <td>B62</td>
      <td>PBB.01</td>
      <td>325</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_40V_4/DI_4_GPIO</td>
      <td>C61</td>
      <td>PBB.00</td>
      <td>324</td>
    </tr>
  </tbody>
</table>

:::note

- Entrada digital de 12V, o sinal de terra precisa ser conectado ao **GND_DI**.

- Saída digital, tensão máxima suportada de 40V, o sinal de terra precisa ser conectado ao **GND_DO**.

- Barramento CAN com sinais diferenciais padrão, o sinal de terra precisa ser conectado ao **GND_ISO**.

:::

### Visão geral da conexão para DI

Podemos fazer a conexão para DI seguindo o diagrama abaixo. É melhor adicionar um resistor em série na linha de DI. Aqui testamos com um resistor de 4,7kΩ conectado ao pino DI1.

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_di.png"/>
</div>

### Instruções de uso para DI

Precisamos aplicar uma tensão de 12V na linha DI para que seja detectada como uma entrada.

**Passo1.** Faça as conexões como mostrado acima para o pino DI1 e aplique 12V.

**Passo2.** Abra o GPIO para DI1 da seguinte forma:

```bash
sudo su 
cd /sys/class/gpio
echo 444 > export 
cd PP.04
```

:::note
Podemos consultar a Tabela de Atribuição de Pinos DI/DO para encontrar o número de GPIO e o número BGA. No exemplo acima, para o pino DI1, o número de GPIO é 444 e o número BGA é PP.04.
:::

**Passo3.** Execute o seguinte para verificar o status:

```bash
cat value
```

Se a saída for 0, significa que há entrada de 12V. Se a saída for 1, significa que não há tensão de entrada.

### Visão geral da conexão para DO

Podemos fazer a conexão para DO seguindo o diagrama abaixo. É melhor adicionar um resistor em série na linha de DO. Aqui testamos com um resistor de 4,7kΩ.

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_do.png"/>
</div>

### Instruções de uso para DO

Aqui precisamos conectar uma carga conforme indicado no diagrama acima. A forma mais fácil de testar isso seria conectar um multímetro, se você tiver acesso a um, ou então conectar uma carga que exija menos de 40V de tensão máxima.

**Passo1.** Faça as conexões como mostrado acima para o pino DO1 e aplique no máximo 40V.

**Passo2.** Abra o GPIO para D01 da seguinte forma:

```bash
sudo su 
cd /sys/class/gpio
echo 320 > export 
cd PAA.04
echo out > direction
```

**Passo3.** Execute o seguinte para ligar o pino:

```bash
echo 1 > value
```

Se a carga for ligada ou se o multímetro indicar a tensão que você aplicou, o teste está funcionando corretamente.

### CAN

A placa carrier J501 possui duas interfaces CAN que suportam o protocolo CAN FD (Controller Area Network Flexible Data-Rate) a 5Mbps. A interface CAN é isolada usando isolamento capacitivo, o que proporciona excelente proteção EMI e garante comunicação confiável em aplicações industriais e de automação. Um resistor terminal de 120Ω foi instalado por padrão e você pode alternar este resistor entre ON e OFF usando GPIO.

:::note
A interface CAN usa uma fonte de alimentação isolada, o que significa que o sinal de terra dos dispositivos externos conectados à interface CAN deve ser conectado ao pino **GND_ISO**.
:::

### Visão geral da conexão com adaptador USB para CAN

Para testar e fazer interface com o barramento CAN, conecte um adaptador USB para CAN aos conectores CAN na placa, como mostrado abaixo:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_can.png"/>
</div>

Aqui utilizamos o [USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) com cabo USB disponível em nosso Bazaar.

### Instruções de uso com adaptador USB para CAN

**Passo1.** Baixe o driver para o adaptador USB para CAN que você está usando no site do fabricante e instale-o. No nosso caso, de acordo com o adaptador que usamos, os drivers podem ser encontrados [aqui](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver).

**Passo2.** Alguns adaptadores também são fornecidos com o software necessário para o PC a fim de se comunicar com o dispositivo CAN. No nosso caso, de acordo com o adaptador que usamos, baixamos e instalamos o software que pode ser encontrado [aqui](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program).

**Passo3.** Inicialize a interface CAN do Jetson.

Crie um novo arquivo chamado **`can_init.sh`** no Jetson e escreva o seguinte conteúdo:

```bash
#!/bin/bash

sudo gpioset gpiochip2 9=0 
sudo gpioset gpiochip2 8=0

sudo busybox devmem 0x0c303018 w 0xc458
sudo busybox devmem 0x0c303010 w 0xc400
sudo busybox devmem 0x0c303008 w 0xc458
sudo busybox devmem 0x0c303000 w 0xc400

sudo modprobe can
sudo modprobe can_raw
sudo modprobe mttcan

sudo ip link set can0 down
sudo ip link set can1 down

sudo ip link set can0 type can bitrate 125000
sudo ip link set can1 type can bitrate 125000
sudo ip link set can0 up
sudo ip link set can1 up

```

Em seguida, execute o arquivo que acabamos de criar na janela de terminal do Jetson:

```bash
sudo apt-get install gpiod
cd <path to can_init.sh>
sudo chmod +x can_init.sh
./can_init.sh
```

**Passo4.** Digite ifconfig no terminal e você verá a interface CAN habilitada.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/can.png"/>
</div>

**Passo5.** Abra o software CAN que você instalou anteriormente. Neste caso, abriremos o software que instalamos de acordo com o adaptador CAN que estamos usando.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/>
</div>

**Passo6.** Conecte o adaptador USB para CAN ao PC e abra o **Device Manager** pesquisando-o na barra de pesquisa do Windows. Agora você verá o adaptador conectado em **Ports (COM & LPT)**. Anote a porta serial listada aqui. De acordo com a imagem abaixo, a porta serial é **COM9**.

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/>
</div>

**Passo7.** Abra o software CAN, clique em **Refresh** ao lado da seção **COM**, clique no menu suspenso e selecione a porta serial de acordo com o adaptador conectado. Mantenha o **COM bps** no padrão e clique em **Open**.

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/>
</div>

**Passo8.** Mantenha o **Mode** e **CAN bps** no padrão, altere o **Type** para **Standard frame** e clique em **Set and Start**.

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/>
</div>

**Passo9.** No reComputer Industrial, execute o seguinte comando para enviar um sinal CAN para o PC:

```sh
cansend can0 123#abcdabcd
```

Agora você verá o sinal acima recebido pelo software, como mostrado abaixo

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/>
</div>

**Passo10.** No reComputer Industrial, execute o seguinte comando para aguardar o recebimento de sinais CAN do PC:

```sh
candump can0 &
```

**Passo11.** No software CAN, clique em **Send a single frame**:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/>
</div>

Agora você o verá sendo recebido pelo reComputer Industrial como segue:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/>
</div>

:::info
Também podemos consultar [aqui](https://wiki.seeedstudio.com/pt-br/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/#Visão-geral-da-conexão-com-reterminal-dm) para estabelecer comunicação entre a placa carrier J501 e o reTerminal DM via CAN.
:::

## USB

A placa carrier reServer J501 possui um total de 5 portas USB: 3 portas USB 3.1 Tipo A, 1 porta USB 3.1 Tipo C e 1 porta USB 2.0 Tipo C para depuração.

### Instruções de uso

Podemos inserir `watch -n 1 lsusb -tv` no terminal do Jetson para sondar as portas USB. Quando um dispositivo USB é conectado, as informações detalhadas sobre essa porta serão exibidas aqui.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

Além disso, você pode consultar [M.2 Key M](#m2-key-m) para testar a velocidade de leitura e gravação de dispositivos de armazenamento USB.

:::note
Por favor, note que, antes de testar, use o comando `cd` para navegar até a pasta onde o dispositivo de armazenamento USB está montado.
:::

## RTC

A placa carrier J501 possui interfaces RTC, fornecendo medição de tempo precisa mesmo quando o sistema está desligado.

### Conexão de conexão

A placa carrier J501 está equipada com 2 maneiras diferentes de conectar uma bateria RTC.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="RTC socket" label="Soquete RTC">

Conecte uma bateria de moeda CR1220 de 3V ao soquete RTC na placa, como mostrado abaixo. Certifique-se de que a extremidade **positiva (+)** da bateria esteja voltada para cima.

<div align="center">
  <img width ="220" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/>
</div>

</TabItem>

<TabItem value="JST socket" label="JST socket">

Conecte uma bateria tipo moeda CR2302 de 3V com conector JST ao soquete JST de **2 pinos 1,25mm** na placa, como mostrado abaixo

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/>
</div>

</TabItem>
</Tabs>

### Instruções de Uso

**Passo 1.** Conecte uma bateria de RTC como mencionado acima.

**Passo 2.** Ligue o J501.

**Passo 3.** Na área de trabalho do Ubuntu, clique no menu suspenso no canto superior direito, navegue até `Settings > Date & Time`, conecte-se a uma rede via cabo Ethernet e selecione **Automatic Date & Time** para obter a data/hora automaticamente.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
Se você não tiver se conectado à internet via Ethernet, poderá definir manualmente a data/hora aqui.
:::

**Passo 4.** Abra uma janela de terminal e execute o comando abaixo para verificar a hora do relógio de hardware:

```bash
sudo hwclock
```

Você verá uma saída semelhante à abaixo, que não é a data/hora correta:

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/>
</div>

**Passo 5.** Altere a hora do relógio de hardware para a hora atual do relógio do sistema inserindo o comando abaixo:

```bash
sudo hwclock --systohc
```

**Passo 6.** Remova quaisquer cabos Ethernet conectados para garantir que ele não obtenha a hora da internet e reinicie a placa:

```bash
sudo reboot
```

**Passo 7.** Verifique a hora do relógio de hardware para confirmar que a data/hora permanece a mesma, mesmo que o dispositivo tenha sido desligado.

Agora vamos criar um script para sempre sincronizar o relógio do sistema a partir do relógio de hardware em cada inicialização.

**Passo 8.** Crie um novo script de shell usando qualquer editor de texto de sua preferência. Aqui usamos o editor de texto **vi**

```bash
sudo vi /usr/bin/hwtosys.sh 
```

**Passo 9.** Entre no **modo de inserção** pressionando **i**, copie e cole o seguinte conteúdo dentro do arquivo:

```bash
#!/bin/bash

sudo hwclock --hctosys
```

**Passo 10.** Torne o script executável.

```bash
sudo chmod +x /usr/bin/hwtosys.sh 
```

**Passo 11.** Crie um arquivo systemd:

```bash
sudo vim /lib/systemd/system/hwtosys.service 
```

**Passo 12.** Adicione o seguinte dentro do arquivo:

```bash
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

**Passo 13.** Recarregue o daemon do systemctl:

```bash
sudo systemctl daemon-reload 
```

**Passo 14.** Habilite o serviço recém-criado para iniciar na inicialização e inicie o serviço:

```bash
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

**Passo 15.** Verifique se o script está em execução como um serviço systemd:

```bash
sudo systemctl status hwtosys.service
```

**Passo 16** Reinicie a placa e você verá que o relógio do sistema agora está sincronizado com o relógio de hardware.

## Ventoinha

A interface de ventoinha onboard da placa J501 é gerenciada pelo daemon nvfancontrol, que ajusta de forma adaptativa a velocidade da ventoinha com base no status de operação do módulo Jetson. Podemos configurar o modo de funcionamento do daemon por meio de seu arquivo de configuração `/etc/nvfancontrol.conf`.

:::note
Para mais informações, verifique [aqui](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

Além disso, podemos definir manualmente a velocidade da ventoinha usando a ferramenta jtop.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

## HDMI

O J501 é equipado com uma porta HDMI 2.1 Tipo A, que suporta uma resolução de 7680x4320. Isso permite saída de vídeo em ultra-alta definição.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
