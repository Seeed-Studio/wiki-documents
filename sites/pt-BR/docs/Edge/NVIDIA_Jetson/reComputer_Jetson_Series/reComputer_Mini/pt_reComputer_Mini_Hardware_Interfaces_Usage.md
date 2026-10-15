---
description: Este artigo aborda o hardware e as interfaces da série reComputer Mini J40, incluindo alimentação, display, slots M.2 para Wi‑Fi e SSD, portas USB, RTC, gerenciamento de ventoinha e assim por diante. Ele fornece instruções de configuração e dicas de teste de desempenho para ajudar os usuários a expandir seus projetos.
title: Uso de Hardware e Interfaces do reComputer Mini
tags:
  - reComputer
  - reComputer mini
  - computador embarcado
  - robôs
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.webp
slug: /recomputer_jetson_mini_hardware_interfaces_usage
sku: 114993553,114993551,102111001,102110999,114993592,114993593
last_update:
  date: 12/16/2024
  author: Youjiang
createdAt: '2025-02-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/recomputer_jetson_mini_hardware_interfaces_usage/
---

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.jpg"/>
</div>

Este wiki apresenta os diversos hardwares e interfaces do reComputer mini J40 Série e como usá-los para expandir suas ideias de projeto.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱</font></span></strong>
    </a>
</div>

## Visão Geral das Interfaces de Hardware

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/recomputer_mini/hardware_overview.png"/>
</div>

## Alimentação

O reComputer Mini está equipado com uma interface de alimentação **12–54V (XT30)**, compatível com uma ampla faixa de entrada de tensão (12V a 54V), o que o torna adequado para diversos ambientes de fornecimento de energia.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/power.png"/>  
</div>

## Display

O produto é equipado com uma porta Type‑C com funcionalidade Host + DP (DisplayPort), o que significa que ela não apenas suporta transferência de dados, mas também permite conectar um monitor por meio dessa porta, proporcionando saída de vídeo de alta qualidade.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/display.png"/>  
</div>

## M.2 Key E para WIFI e Bluetooth

O reComputer Mini possui uma interface M.2 Key E, por meio da qual você pode expandir os recursos de Bluetooth e Wi‑Fi do dispositivo.

Recomendamos usar a placa de rede sem fio Intel Dual Band RTL8822CE.

### Conexão de Hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/wifi.png"/>
</div>

### Instruções de Uso

Depois de instalar o módulo Wi‑Fi e ligar o dispositivo, podemos configurar as configurações de Wi‑Fi e Bluetooth do dispositivo.

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

## M.2 Key M para SSD

M.2 Key M é uma interface projetada para unidades de estado sólido (SSDs) de alta velocidade, fornecendo velocidades de transferência de dados ultrarrápidas, ideal para aplicações de alto desempenho.

Fora da caixa, o reComputer Industrial inclui um SSD de grau industrial de 128GB conectado ao slot M.2 Key M com x4 PCIe Gen3, no qual o sistema JetPack já vem pré-instalado.

### Conexão de Hardware

Se você quiser remover o SSD incluso e instalar um novo, precisa garantir que seu SSD atenda às duas condições a seguir:

- Suportar a interface **M.2 Key M slot with x4 PCIe Gen3**.
- Estar em conformidade com a especificação de tamanho **2242**.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/ssd.png"/>
</div>

### Instruções de Uso

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

## Ethernet

### Conexão de Hardware

O reComputer Mini possui uma **porta Ethernet Gigabit RJ45 (10/100/1000M)** na placa de expansão.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/network_photo.png"/>
</div>

### Instruções de Uso

Digite `ifconfig` no terminal e você poderá ver que o nome do dispositivo mapeado pela interface Ethernet é `eth0`:
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/network_ifconfig.png"/>
</div>

Conecte o **reComputer Mini** ao **PC** usando um cabo Ethernet Gigabit RJ45. Com a ferramenta `iperf`, podemos testar brevemente a taxa de transmissão da interface Ethernet.
Abra um terminal e instale `iperf3` tanto no **PC** quanto no **reComputer Mini**.

```bash
sudo apt update
sudo apt install iperf3
```

Abra o terminal no PC e digite `iperf3 -s`.
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/iperf3PC.jpg"/>
</div>

Em seguida, abra o terminal no **reComputer Mini** e digite `iperf3 -c <IP of your PC>`.
Neste caso, o endereço IP da interface de rede do meu PC é `192.168.12.211`. O comando de exemplo é o seguinte:

```bash
iperf3 -c 192.168.12.211
```

Então, com base nos resultados mostrados na figura abaixo, você pode ver que a velocidade de transmissão Ethernet do reComputer Mini pode alcançar o nível gigabit.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_mini/networkspeed.jpg"/>
</div>

## USB

### Conexão de Hardware

A placa carrier do reComputer Mini possui um total de 4 portas USB: 2 portas USB 3.2 Type‑A, 1 porta USB 2.0 Micro‑B para flash e 1 porta USB 2.0 GH1.25. E a placa de expansão possui 4 portas USB 3.0 Type‑A.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/USBshow.jpg"/>
</div>

No [datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf), você pode encontrar o diagrama de fiação da interface **USB 2.0** GH‑1.25 de 5 pinos conforme mostrado abaixo:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/usb2.0-datasheet.png"/>
</div>

Podemos seguir o procedimento a seguir para conectar um dispositivo de armazenamento ao reComputer mini via USB 3.2/USB 2.0/USB 3.0 para testar as velocidades de leitura e gravação USB. As **Instruções de Uso** exibirão os próximos passos.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/USBLINK.jpg"/>
</div>

### Instruções de Uso

Podemos digitar `watch -n 1 lsusb -tv` no terminal do Jetson para sondar as portas USB. Assim que um dispositivo USB for conectado, as informações detalhadas sobre essa porta serão exibidas aqui.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

Depois de conectar o dispositivo de armazenamento via USB 3.2/USB 2.0/USB 3.0, insira o seguinte comando no terminal para visualizar a partição mapeada pelo dispositivo de armazenamento:

```bash
ls /dev/sd*
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/sda1.png"/>
</div>

**/dev/sda1** é a partição mapeada por um dispositivo de armazenamento conectado via USB. Se vários dispositivos forem inseridos, eles podem ter nomes de partição mapeados diferentes. Por exemplo: **/dev/sdb1**.

Faça o pull e execute o programa de teste do **GitHub** para medir as velocidades de escrita e leitura do USB. O programa irá escrever e depois ler **1GB** de dados temporários, que serão excluídos após a conclusão do teste.
O parâmetro após `sudo ./USBIO` depende da partição mapeada do dispositivo de armazenamento conectado via USB.

```bash
git clone https://github.com/jjjadand/Mini_USBIO_test.git
cd Mini_USBIO_test/
gcc -o USBIO USB_test.c
sudo ./USBIO /dev/sda1
```

As velocidades de leitura e gravação para uma transferência de 1GB de dados em um SSD externo conectado via USB 3.2 são as seguintes:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/usb-write-read.jpg"/>
</div>
O programa também é aplicável para testar outras interfaces USB.

:::info
Para o uso da interface USB Micro‑B, consulte [este wiki](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_mini_getting_started/) para um tutorial detalhado.
:::

## UART

A placa carrier do reComputer Mini possui duas interfaces UART GH‑1.25 de 4 pinos: **UART1** e **UART-DEBUG**.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart_photo.png"/>
</div>

### UART1

#### Conexão de Hardware

No [datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf), você pode encontrar o diagrama de fiação da interface **UART1** GH‑1.25 de 4 pinos conforme mostrado abaixo:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart1_datasheet.png"/>
</div>

Para testar e monitorar a funcionalidade de transmissão e recepção da **UART1**, selecione um módulo [UART-to-USB](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InVhcnQgdXNiIiwiY19zZWFyY2hfcmVzdWx0X3BvcyI6MSwiY190b3RhbF9yZXN1bHRzIjoxMywiY19zZWFyY2hfcmVzdWx0X3R5cGUiOiJQcm9kdWN0IiwiY19zZWFyY2hfZmlsdGVycyI6InN0b3JlQ29kZTpbcmV0YWlsZXJdICYmIHF1YW50aXR5X2FuZF9zdG9ja19zdGF0dXM6WzFdIn0%3D) adequado (com base em seus requisitos), conecte‑o de acordo com o diagrama de fiação no datasheet e, em seguida, instale o cutecom.

Conecte uma extremidade à interface GH‑1.25 de 4 pinos da **UART1** e conecte a outra extremidade à porta USB, garantindo que Tx esteja conectado a Rx e Rx a Tx.
As Instruções de Uso exibirão os próximos passos.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UARTLINK.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/uart2usb.png"/>
</div>

#### Instruções de Uso

O número de porta serial reconhecido pelo sistema para a UART1 é: **/dev/ttyTHS1**. Você pode verificá‑lo digitando o seguinte comando no terminal:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/ttyTHS.png"/>
</div>

Instale o **Cutecom** para testar a transmissão e recepção de dados da **UART1**:

```bash
sudo apt update
sudo apt install cutecom
```

Abra o **Cutecom** em dois terminais diferentes.

```bash
sudo cutecom
```

Defina os parâmetros de acordo com a figura abaixo: em um terminal, selecione **/dev/ttyTHS1** para a opção “device”. No outro terminal, o “device” deve ser escolhido **com base no módulo UART-para-USB que você está usando**. Você pode inserir mensagens no campo “Input” para testar a transmissão e recepção de dados.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/cutecom_uart1.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/cutecom_uart.png"/>
</div>

### UART-DEBUG

#### Conexão de Hardware

No [datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf), você pode encontrar o diagrama de fiação para a interface UART-DEBUG de 4 pinos GH-1.25, conforme mostrado abaixo:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UART-DEBUG.png"/>
</div>

Para testar **UART-DEBUG**, você também precisa de um módulo **UART-para-USB**, que deve ser conectado ao seu **PC** conforme mostrado na figura abaixo.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UARTDBdraw.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/UART-DEBUG_photo.jpg"/>
</div>

#### Instruções de Uso

Após concluir as conexões de hardware.

Primeiro, instale a ferramenta de login via porta serial [**MobaXterm**](https://mobaxterm.mobatek.net/) no seu PC.
Em seguida, abra o **“Device Manager”** no seu PC para verificar a porta COM mapeada pelo módulo **UART-para-USB**.
Para testar **UART-DEBUG**, você também precisa de um módulo **UART-para-USB**, que deve ser conectado ao seu **PC** conforme mostrado na figura abaixo.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax1.png"/>
</div>

Abra o [**MobaXterm**](https://mobaxterm.mobatek.net/) no **PC**, clique em “Session” e depois em “Serial”. Selecione a porta COM com base na que foi mapeada no **“Device Manager”** e defina a taxa de transmissão para 115200.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax2.png"/>
</div>

Após inserir o nome de usuário e a senha, você fará login no terminal do reComputer Mini via **UART-DEBUG**.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/mobax3.png"/>
</div>

<!-- ### Button and Lights -->

## RTC

O reComputer Mini possui interfaces RTC, fornecendo medição de tempo precisa mesmo quando o sistema está desligado.

Conecte uma bateria tipo moeda CR2032 de 3V com conector JST ao soquete JST de 2 pinos 1,25 mm na placa.

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/rtc.png"/>
</div>

<!-- #### Usage Instruction -->

## VENTOINHA

A interface de ventoinha onboard do reComputer Mini é gerenciada pelo daemon nvfancontrol, que ajusta adaptativamente a velocidade da ventoinha com base no status de operação do módulo Jetson. Podemos configurar o modo de funcionamento do daemon por meio do seu arquivo de configuração `/etc/nvfancontrol.conf`.

:::note
Para mais informações, verifique [aqui](https://docs.nvidia.com/jetson/archives/r36.3/DeveloperGuide/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

Além disso, podemos definir manualmente a velocidade da ventoinha usando a ferramenta **jtop**.

Você pode inserir o seguinte comando no terminal para instalar o **jtop**.

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

Em seguida, reinicie o seu reComputer Mini:

```bash
sudo reboot
```

Após instalar o **jtop**, você pode iniciá-lo no terminal:

```bash
jtop
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

<!-- ### 5G module -->

## CAN

O reComputer mini possui duas interfaces CAN, com quatro interfaces CAN externas na placa de expansão. **CAN0** é composta por dois **conectores XT30 (2+2)**, enquanto **CAN1** é composta por dois conectores **GH-1.25 de 4 pinos**.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can-photo.png"/>
</div>

### Comunicação CAN0/CAN1

#### Conexão de Hardware

No [datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf), você pode encontrar o diagrama de fiação para a interface CAN0/CAN1, conforme mostrado abaixo:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can1-datasheet.png"/>
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

Antes de usar CAN0 e CAN1, remova a tampa inferior e coloque ambos os resistores de terminação de 120Ω na posição ON.
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

Aqui, demonstraremos o envio contínuo de dados de CAN0 para CAN1 a uma taxa de transmissão de 125 kbps por 30 segundos.
Primeiro, conforme mostrado na figura abaixo, conecte as linhas de sinal de CAN0 às de CAN1. Especificamente, conecte **CAN0_H a CAN1_H** e **CAN0_L a CAN1_L**.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CANdraw.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0toCAN1.jpg"/>
</div>

#### Instruções de Uso

Após concluir as conexões de hardware.

Insira o seguinte comando no terminal para visualizar os nomes dos dispositivos mapeados para CAN0 e CAN1:

```bash
ifconfig -a
```

Aqui, `can0` corresponde à interface **CAN0**, e `can1` corresponde à interface **CAN1**.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can_express.jpg"/>
</div>

Instale `can-utils` no terminal:

```bash
sudo apt-get update
sudo apt-get install can-utils
```

Abra um **Terminal 1** e insira o seguinte comando para monitorar o número de bytes de dados enviados de `can0`:

```bash
watch -n 1 'ifconfig can0 | grep "TX packets"'
```

Abra um **Terminal 2**. Obtenha do GitHub o script para testar a comunicação CAN e execute-o:

```bash
git clone https://github.com/jjjadand/Mini_CANtest.git
cd Mini_CANtest
sudo ./canTest.sh
```

Ao observar os dois terminais, você verá que, no **Terminal 1**, o número de bytes enviados a partir de **CAN0** está aumentando.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/canTX.jpg"/>
</div>

O **Terminal 2** imprimirá os dados recebidos por **CAN1** de **CAN0**.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/canRX.jpg"/>
</div>

Você precisa habilitar o **CAN** antes de usá-lo no seu programa. Execute este comando no terminal:

```bash
sudo gpioset --mode=wait 0 106=0 #enable CAN1
sudo gpioset --mode=wait 0 43=0 #enable CAN0
```

### Saída de Energia do CAN0

A tensão de saída de **CAN0-PPOWER** teoricamente é igual à tensão de entrada **DC** atual do reComputer Mini. A faixa de tensão de entrada **DC** é `12-54V`. Portanto, a faixa de saída de energia de **CAN0 XT30 (2+2)** também é `12-54V`.

Forneceremos diferentes tensões à entrada **DC** e, em seguida, mediremos a tensão de saída de **CAN0-PPOWER**.
Use uma fonte de alimentação estável e um multímetro, e conecte de acordo com o diagrama abaixo.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0connet.png"/>
</div>

Quando a entrada **DC** é `26.3V`, o multímetro mede a saída de **CAN0-POWER** como sendo `26.03V`.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0-power1.jpg"/>
</div>

Quando a entrada **DC** é `12.6V`, o multímetro mede a saída de **CAN0-POWER** como sendo `12.48V`.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/CAN0-power2.jpg"/>
</div>

Com base nos resultados de teste acima, pode-se ver que a saída de **CAN0-POWER** é próxima à entrada **DC**.
Se quiser saber mais detalhes, você pode consultar o [esquemático](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z).

## I2C

### Conexão de Hardware

A placa de expansão do reComputer possui duas interfaces IIC **GH-1.25 de 4 pinos**, IIC0 e IIC1.

No [datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf), você pode encontrar o diagrama de fiação para a interface IIC0/IIC1 GH-1.25 de 4 pinos, conforme mostrado abaixo:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IIC0-datasheet.jpg"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IIC1-datasheet.jpg"/>
</div>

Selecione um dispositivo de interface IIC para teste; a escolha é sua. Aqui, um [sensor de interface IIC](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6IkkyYyIsImNfc2VhcmNoX3Jlc3VsdF9wb3MiOjQ3LCJjX3RvdGFsX3Jlc3VsdHMiOjUxLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D) é conectado ao I2C0/I2C1 para fins de teste.

O processo de teste aqui envolve a varredura dos endereços dos dispositivos conectados externamente em IIC0/IIC1.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/IICdraw.png"/>
</div>

### Instruções de Uso

Após concluir as conexões de hardware.

Precisamos instalar as ferramentas para teste de IIC. Insira o seguinte no terminal antes de fazer a varredura do dispositivo:

```bash
sudo apt update
sudo apt-get install i2c-tools
```

Em seguida, insira o seguinte comando no terminal para visualizar os nomes mapeados no barramento IIC.

```bash
i2cdetect -l
```

A interface externa **IIC0-J7** na placa de expansão corresponde a `i2c-1 i2c c240000.i2c`, e a interface externa **IIC1-J7** corresponde a `i2c-7 i2c c250000.i2c`.
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/iic-l.jpg"/>
</div>

Após conectar o dispositivo I2C externo e definir seu endereço, abra dois terminais diferentes e insira os seguintes comandos para fazer a varredura em I2C0 e I2C1:

```bash
sudo i2cdetect -y -r 1
sudo i2cdetect -y -r 7
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/iic0-addr.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/iic1-addr.png"/>
</div>

Podemos ver que o dispositivo conectado ao **I2C0** está definido para o endereço `0x15`, e o dispositivo conectado ao **I2C1** está definido para o endereço `0x19`.

## SPI

### Conexão de Hardware

A placa de expansão do reComputer possui uma interface SPI externa **GH-1.25 de 6 pinos**.

No [datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf), você pode encontrar o diagrama de fiação para a interface SPI GH-1.25 de 6 pinos, conforme mostrado abaixo:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-datasheet.jpg"/>
</div>

Se você não utilizar um módulo SPI-para-USB externo, pode conectar diretamente a interface SPI **GH-1.25 de 6 pinos** para testar a transmissão e recepção de dados. Conecte **MOSI** a **MISO** e **CS0** a **SCK**.
O diagrama de fiação é o seguinte:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/SPIdraw.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-photo.jpg"/>
</div>

### Instruções de Uso

Após concluir as conexões de hardware.

Em seguida, faça o download do código para teste de SPI a partir do GitHub e compile-o:

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

Insira o seguinte comando no terminal para visualizar o nome do dispositivo mapeado pelo SPI. Por exemplo, `/dev/spidev0.0` corresponde ao SPI0 na Placa de Expansão (J17).

```bash
ls -l /dev/spi*
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-dev.png"/>
</div>

Insira o seguinte comando no terminal para executar o programa de teste de SPI：

```bash
sudo ./spidev_test -v
```

Você pode observar os dados sendo transmitidos e recebidos no SPI0 na Placa de Expansão (J17).
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/spi-res.jpg"/>
</div>

## Recursos

- [reComputer Mini Datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)
- [reComputer Mini Schemetics](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)
- [reComputer Mini 3D Model](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_3D.7z)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
