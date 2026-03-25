---
description: Módulo W600
title: Módulo W600
keywords:
  - Air602_WiFi_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /W600_Module
sku: 102110269,113020031,102991180
last_update:
  date: 01/20/2023
  author: Matthew
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/W600_Module/
---

![](https://files.seeedstudio.com/wiki/W600_Module/img/113020031-preview.png)

O Módulo W600 é um módulo WiFi de 2,4 GHz econômico que suporta 802.11b/g/n. O Seeed W600 Module é baseado no chip W600, que possui ARM Cortex-M3 com 1MB de flash integrado e kernel freeRTOS.

Nós trazemos os pinos do chip W600 para fora e os colocamos na parte de trás da placa, incluindo I2S/I2C/SPI/GPIO/PWM/UART/SDIO. Além disso, este módulo possui uma antena PCB integrada, sem necessidade de projetar a antena separadamente, para que você possa implantar rapidamente o módulo na sua própria placa. Também fizemos a certificação CE/FCC para este módulo e você pode usá‑lo diretamente em projetos comerciais.

<a href="https://www.seeedstudio.com/W600-Module-p-4020.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a>

## Recursos

• CPU Cortex-M3 embarcado de 32 bits integrada, frequência de operação de 80 MHz

• 288KB de RAM integrada

• 1MB de FLASH integrada

**Interface**

• Controlador de dispositivo GPIO integrado

• 2 interfaces UART integradas, suporta RTS/CTS, taxa de baud: 1200bps~2Mbps

• Um controlador SPI de alta velocidade integrado, frequência de operação: 0~50MHz;

**Sem fio**

• Suporta IEEE802.11 b/g/e/i/d/k/r/s/w/n

• Suporta 2,4~2,4835 GHz

• Suporta Wi‑Fi WMM/WMM-PS/WPA/WPA2/WPS

• Suporta Wi‑Fi Direct

• STBC, GreenField, Short-GI

• Suporta vários protocolos de rede: TCP/UDP/ICMP/DHCP/DNS/HTTP

**Outros**

• Suporta protocolo de instrução AT+ baseado em codificação ASCII (interface UART)

• Suporte para controle GPIO programável pelo usuário

• Antena integrada

## Especificação

|Category|Item|Parameter|
|--|---|---|
|Wireless|Support Wi‐Fi  Mode|IEEE802.11b/g/n|
||RF system impedance|50Ω|
||Frequency Range|2.4~2.4835 GHz|
||Receiving sensitivity|20MHz MCS7@‐71dBm;<br />40MHz MCS7@‐68dBm;<br />54Mbps@‐73dBm;<br />11Mbps@‐86dBm;<br />1Mbps@‐95dBm;|
||Physical layer data rate|802.11n MCS 0~7   150Mbps|
||Modulation|DSSS、OFDM、DBPSK、DQPSK、CCK、QAM16/64|
||Output Power|IEEE802.11b, DSSS 1Mbps, POUT = +17dBm;<br />IEEE802.11g, OFDM 54Mbps, POUT = +10dBm;<br />IEEE802.11n, OFDM MCS7, POUT = +10dBm|
|Hardware|Interface Type|UART/SPI/GPIO|
||Interface rate|2Mbps@UART (Max) <br />50Mbps@SPI (Max)|
||Operating Voltage|3.3V(Module)/5V(Development Board)|
||Operating humidity|5%~90% (No condensation)|
||storage temperature|‐40~+125 ℃|
||Operating temperature|‐40~+85℃|
|Software|Network Type|STA/AP/AP+STA/Wi‐Fi Direct|
||Verification|WEP/WPA‐PSK/WPA2‐PSK|
||Encryption|WEP64/WEP128/TKIP/CCMP(AES)|
||WPS  Function|WPS|
||Energy saving|PS‐POLL/Standby|
||Network protocol|TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP|
||Interface Protocol| AT+ instruction set|

:::note
Para mais detalhes sobre as especificações, consulte o W600 [Specification V1.0.0_EN.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Specification%20V1.0.0_EN.pdf) e o [W600 HardwareDesignGuide_v1.0.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20HardwareDesignGuide_v1.0.1.pdf)
:::

## Aplicações Típicas

- eletrodomésticos inteligentes
- casa inteligente
- áudio e vídeo sem fio
- brinquedos inteligentes
- monitoramento médico
- controle industrial
- outras aplicações de Internet das Coisas

## Visão Geral do Hardware

### Diagrama em Blocos

<div align="center">
  <figure>
    <a href="https://files.seeedstudio.com/wiki/W600_Module/img/block.png" target="_blank">
      <img src="https://files.seeedstudio.com/wiki/W600_Module/img/block.png" alt="block diagram of W600 Module" title="block diagram of W600 Module"></img>
    </a>
    <figcaption><i>clique para ver o arquivo original mais nítido</i></figcaption>
  </figure>
</div>

### Pinout

<div align="center">
  <figure>
    <a href="https://files.seeedstudio.com/wiki/W600_Module/img/pinout_w600_module.jpg" target="_blank">
      <img src="https://files.seeedstudio.com/wiki/W600_Module/img/pinout_w600_module.jpg" alt="pinout of W600 Module" title="pinout of W600 Module"></img>
    </a>
    <figcaption><i>clique para ver o arquivo original mais nítido</i></figcaption>
  </figure>
</div>

## Primeiros Passos

Para usar o **W600 Module**, você precisa usar [USB-to-Serial Tools](https://www.seeedstudio.com/PL2303-USB-to-Serial-TTL-Module-Adapter-p-2358.html) para conectar os pinos RX/TX ao seu computador, e também precisa alimentar este módulo com os pinos **3.3v** e **GND**.

:::note
Para mac, descobrimos que algumas versões do sistema mac não conseguem reconhecer o chip USB‑to‑Serial on‑board CH330N, consulte aqui a solução [Mac os driver issue](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=aa548f2de0fb26380f50e0b328a49a80)
:::

Nós usamos a ferramenta de porta serial **sscom** para enviar o comando AT. Você pode usar sua ferramenta de porta serial favorita; caso queira usar o **sscom**, você pode baixá‑lo [Aqui](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip).

De qualquer forma, certifique‑se de ter marcado a opção **AddCrLf** e definido a taxa de baud para **115200**

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_2.jpg)

Digite **AT+** e clique em **SEND** ou pressione a tecla ++enter++ para verificar se a conexão foi estabelecida com sucesso.

```cpp
AT+
```

Quando retornar **+OK**, você poderá usar o comando AT para controlar este módulo.

### Criar um processo SoftAP

- 1- **WPRT** define o modo de funcionamento da placa de rede sem fio como SoftAP:

```cpp
AT+WPRT=2
```

- 2- **APSSID** Define o SSID do AP para o STA, por exemplo *MyAP*:

```cpp
AT+APSSID=MyAp
```

- 3- **APENCRY** Define o modo de segurança da placa de rede sem fio para WEP64:

```cpp
AT+APENCRY=1
```

Parâmetro：

open：0, WEP64：1, WEP128：2

- 4- **APKEY** Define a chave da placa de rede sem fio como *12345*

```cpp
AT+APKEY=1,1,12345
```

Parâmetro 1: Formato da chave, 0 significa HEX, 1 significa ASCII  

Parâmetro 2: index: Número de índice da chave, 1 a 4 são usados para chaves de criptografia WEP e outros métodos de criptografia são fixados em 0.  

Parâmetro 3: chave sem fio, por exemplo: 12345  

- 5- **APNIP** Define o endereço IP e a máscara de sub-rede

```cpp
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

Parâmetro 1: tipo de endereço: 0 significa alocação dinâmica usando DHCP, 1 significa endereço estático  
parâmetro 2: ip:192.168.1.1  
parâmetro 3: máscara de rede:255.255.255.0  
parâmetro 4: gateway:192.168.1.1  
parâmetro 5: dns:192.168.1.1  

- 6- **PMTF** salva os parâmetros acima na spi flash; basta começar a partir da etapa 7 na próxima inicialização.

```cpp
AT+PMTF
```

- 7- **WJOIN** Cria a rede sem fio *MyAp*

```cpp
AT+WJOIN
```

- 8- **SLIST** Consulta as informações de STA conectadas ao seu SoftAP.

```cpp
AT+SLIST
```

### Processo de varredura de AP

O comando AT para varrer APs com a placa de rede sem fio é：

```cpp
AT+WSCAN
```

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_3.jpg)

O último parâmetro é a intensidade do sinal, unidade db

### Processo de STA ingressar no AP

- 1- **WPRT** Define o modo de funcionamento para STA

```cpp
AT+WPRT=0
```

- 2- **SSID** Define o nome do AP a ser acessado, por exemplo *TEST_AP*

```cpp
AT+SSID=TEST_AP
```

- 3- **KEY** Define a chave sem fio do AP ao qual você deseja se conectar, por exemplo *12345678*

```cpp
AT+KEY=1,0,12345678
```

parâmetro 1: 0 significa HEX, 1 significa ASCII

parâmetro 2: index: O número de índice da chave, 1 a 4 é usado para a chave de criptografia WEP. Os outros métodos de criptografia são fixados em 0.

parâmetro 3: chave sem fio, por exemplo: 12345678

- 4- **NIP** Habilita DHCP

```cpp
AT+NIP=0
```

- 5- PMTF Salva os parâmetros acima na spi flash; basta começar a partir da etapa 6 na próxima inicialização

```cpp
AT+PMTF
```

- 6- WJOIN Conecta‑se à rede sem fio TEST_AP

```cpp
AT+WJOIN
```

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_4.jpg)

### Criar um processo APSTA

- 1- **WPRT** Define o modo de funcionamento para APSTA

```cpp
AT+WPRT=3
```

- 2- **SSID** Define o nome do AP a ser acessado, como *TEST_AP*

```cpp
AT+SSID=TEST_AP
```

- 3- **KEY** Define a chave sem fio do AP ao qual você deseja se conectar, por exemplo *12345678*

```cpp
AT+KEY=1,0,12345678
```

parâmetro 1: 0 significa HEX, 1 significa ASCII

parâmetro 2: index: O número de índice da chave, 1 a 4 é usado para a chave de criptografia WEP. Os outros métodos de criptografia são fixados em 0.

parâmetro 3: chave sem fio, por exemplo: 12345678

- 4- **APSSID** Define o nome de rede do SOFTAP criado

```cpp
AT+APSSID=”MYSoftAP”
```

- 5-  **APENCRY** Define o tipo de criptografia do SoftAP (como WPA2-TKIP)

```cpp
AT+APENCRY=5
```

- 6- **APKEY**  Define a senha do SoftAP (por exemplo código ASCII 87654321)

```cpp
AT+APKEY=1,0,87654321
```

- 7- **APNIP**  Define o endereço IP e a máscara de sub-rede

```cpp
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

- 8- **PMTF** Salva os parâmetros acima na spi flash; basta começar a partir da etapa 9

```cpp
AT+PMTF
```

- 9- **WJOIN** Conecta‑se à rede sem fio TEST_AP

```cpp
AT+WJOIN
```

:::note
Para mais detalhes sobre o comando AT, consulte o [WM_W60X_SDK_AT Command_V1.0.2.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_AT%20Command_V1.0.2.pdf)
:::

## Gravação de Firmware

Para a gravação de firmware, consulte aqui：

[WM_W60X_SDK_User Manual_V1.0.0.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf) e [WM_W60X_Firmware Generation Guide_V1.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_Firmware%20Generation%20Guide_V1.1.pdf)

## FAQ

**Q1.Como o STA desconecta do AP**

R: O comando AT para a placa de rede sem fio desconectar do AP é:

```cpp
AT+WLEAV
```

**Q2.SoftAP desconectado**

R: O comando AT para o SoftAP desconectar a rede é:

```cpp
AT+WLEAV=2
```

**Q3.Como o STA visualiza o status atual**

R: O comando AT para a placa de rede sem fio visualizar o status da placa de rede atual é:

```cpp
AT+LKSTT
```

**Q4. Como visualizar o status atual do SoftAP**

R: O comando AT para visualizar o status atual do SoftAP é:

```cpp
AT+APLKSTT
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Module%20schemaic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [WM_W60X_SDK_AT Command_V1.0.2.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_AT%20Command_V1.0.2.pdf)

- **[PDF]** [W600 HardwareDesignGuide_v1.0.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20HardwareDesignGuide_v1.0.1.pdf)

- **[PDF]** [W60X_SDK_User Manual_V1.0.0.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf)

- **[PDF]** [WM_W60X_Firmware Generation Guide_V1.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_Firmware%20Generation%20Guide_V1.1.pdf)

- **[ZIP]** [Arquivos de esquemático do Módulo W600](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Module%20schemaic.zip)

- **[ZIP]** [sscom](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip)

## Suporte Técnico & Discussão de Produto



<br />
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
