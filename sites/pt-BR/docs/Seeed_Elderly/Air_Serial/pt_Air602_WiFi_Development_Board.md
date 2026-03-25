---
description: Air602_WiFi_Development_Board
title: Placa de Desenvolvimento WiFi Air602
keywords:
  - Air602_WiFi_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Air602_WiFi_Development_Board
sku: 113990577, 113990576
last_update:
  date: 01/20/2023
  author: Matthew
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Air602_WiFi_Development_Board/
---

![picture](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/main.jpg)

Este wiki funciona tanto para a Placa de Desenvolvimento WiFi Air602 quanto para o Módulo WiFi Air602.

O Air602 é um módulo Wi‑Fi de 2,4G baseado no chip SoC Wi‑Fi embarcado (W600) com uma interface de expansão de furo carimbo de 12 pinos. Milagrosamente, ele é ainda menor que um selo. Tem apenas 12mm*10mm, pequeno mas completo, oferece uma interface rica e funcionalidade completa. Este módulo suporta IEEE802.11b/g/n e comandos AT.

A Placa de Desenvolvimento WiFi Air602 é baseada no módulo Wi‑Fi Air602 e integra interface USB e antena. Se você conectar esta placa ao seu computador, ela será reconhecida como uma porta (COM & LPT), para que você possa programá‑la com uma ferramenta de porta serial. Este módulo suporta IEEE802.11b/g/n e comandos AT.

<a href="https://www.seeedstudio.com/Air602-WiFi-Module-p-3139.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a>

<a href="https://www.seeedstudio.com/Air602-WiFi-Development-Board-p-3140.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a>

## Recursos

**Interface**

• Interface USB

• UART/SPI

• Controlador de dispositivo GPIO integrado

**Wireless**

• Suporta IEEE802.11 b/g/e/i/d/k/r/s/w/n

• Suporta 2,4~2,4835 GHz

• Suporta Wi‑Fi WMM/WMM-PS/WPA/WPA2/WPS

• Suporta Wi‑Fi Direct

• STBC、GreenField、Short-GI

• Suporta múltiplos protocolos de rede: TCP/UDP/ICMP/DHCP/DNS/HTTP

**Outros**

• Suporta protocolo de instrução AT+ baseado em codificação ASCII (interface UART)

• Suporte para controle de GPIO programável pelo usuário

## Especificação

|Categoria|Item|Parâmetro|
|--|---|---|
|Wireless|Modo Wi‑Fi suportado|IEEE802.11b/g/n|
||Impedância do sistema RF|50Ω|
||Faixa de frequência|2,4~2,4835 GHz|
||Sensibilidade de recepção|20MHz MCS7@‐71dBm;<br />40MHz MCS7@‐68dBm;<br />54Mbps@‐73dBm;<br />11Mbps@‐86dBm;<br />1Mbps@‐95dBm;|
||Taxa de dados da camada física|802.11n MCS 0~7   150Mbps|
||Modulação|DSSS、OFDM、DBPSK、DQPSK、CCK、QAM16/64|
||Potência de saída|IEEE802.11b, DSSS 1Mbps, POUT = +17dBm;<br />IEEE802.11g, OFDM 54Mbps, POUT = +10dBm;<br />IEEE802.11n, OFDM MCS7, POUT = +10dBm|
|Hardware|Tipo de interface|UART/SPI/GPIO|
||Taxa de interface|2Mbps@UART (Máx) <br />50Mbps@SPI (Máx)|
||Tensão de operação|3,3V(Módulo)/5V(Placa de Desenvolvimento)|
||Umidade de operação|5%~90% (Sem condensação)|
||Temperatura de armazenamento|‐40~+125 ℃|
||Temperatura de operação|‐40~+85℃|
|Software|Tipo de rede|STA/AP/AP+STA/Wi‐Fi Direct|
||Verificação|WEP/WPA‐PSK/WPA2‐PSK|
||Criptografia|WEP64/WEP128/TKIP/CCMP(AES)|
||Função WPS|WPS|
||Economia de energia|PS‐POLL/Standby|
||Protocolo de rede|TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP|
||Protocolo de interface| Conjunto de instruções AT+|

## Aplicações Típicas

- eletrodomésticos inteligentes
- casa inteligente
- áudio e vídeo sem fio
- brinquedos inteligentes
- monitoramento médico
- controle industrial
- outras aplicações de Internet das Coisas

## Pinagem

![](https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_MAP.jpg)
![](https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_table.jpg)
![](https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_MAP_B.jpg)

## Primeiros Passos

Para a **Placa de Desenvolvimento WiFi Air602**, você pode simplesmente conectá‑la ao computador, ela será reconhecida como uma porta (COM & LPT).
Para o **Módulo WiFi Air602**, você precisa usar ferramentas USB‑para‑Serial para conectar os pinos RX/TX ao seu computador.

:::note
Para Mac, descobrimos que algumas versões do sistema Mac não conseguem reconhecer o chip USB‑para‑Serial CH330N integrado, verifique aqui a solução [Mac os driver issue](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=aa548f2de0fb26380f50e0b328a49a80)
:::

Usamos a ferramenta de porta serial **sscom** para enviar o comando AT. Você pode usar sua ferramenta de porta serial favorita, caso queira usar o **sscom**, você pode baixá‑lo [Aqui](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip).

De qualquer forma, certifique‑se de ter marcado a opção **AddCrLf** e definido o baud rate para **115200**

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_2.jpg)

Digite **AT+** e depois clique em **SEND** ou pressione a tecla `enter` para verificar se a conexão foi estabelecida com sucesso.

```cpp
AT+
```

Quando retornar **+OK**, você poderá usar os comandos AT para controlar este módulo.

### Criar um processo SoftAP

- 1- **WPRT** define o modo de funcionamento da placa de rede sem fio como SoftAP:

```cpp
AT+WPRT=2
```

- 2- **APSSID** Define o SSID do AP para a STA, por exemplo *MyAP*:

```cpp
AT+APSSID=MyAp
```

- 3- **APENCRY** Define o modo de segurança da placa de rede sem fio para WEP64:

```cpp
AT+APENCRY=1
```

Parâmetro：

open：0，WEP64：1，WEP128：2

- 4- **APKEY** Define a chave da placa de rede sem fio para *12345*

```cpp
AT+APKEY=1,1,12345
```

Parâmetro 1：Formato da chave， 0 significa HEX, 1 significa ASCII  

Parâmetro 2：index:  Número de índice da chave, 1 a 4 são usados para chaves de criptografia WEP, e outros métodos de criptografia são fixados em 0.  

Parâmetro 3：chave sem fio, por exemplo：12345  

- 5- **APNIP** Define o endereço IP e a máscara de sub‑rede

```cpp
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

Parâmetro 1：tipo de endereço: 0 significa alocação dinâmica usando DHCP, 1 significa endereço estático  
parâmetro 2：ip:192.168.1.1  
parâmetro 3：máscara de rede：255.255.255.0  
parâmetro 4：gateway：192.168.1.1  
parâmetro 5：dns：192.168.1.1  

- 6- **PMTF** salva os parâmetros acima na spi flash, basta começar a partir da etapa 7 na próxima inicialização.

```cpp
AT+PMTF
```

- 7- **WJOIN** Cria a rede sem fio *MyAp*

```cpp
AT+WJOIN
```

- 8- **SLIST**  Consulta as informações da STA que se conectou ao seu SoftAP.

```cpp
AT+SLIST
```

### Processo de varredura de AP

O comando AT para a placa de rede sem fio escanear AP é：

```cpp
AT+WSCAN
```

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_3.jpg)

O último parâmetro é a intensidade do sinal, unidade dB

### STA entra no processo de AP

- 1- **WPRT** Define o modo de funcionamento para STA

```cpp
AT+WPRT=0
```

- 2- **SSID** Define o nome do AP a ser conectado. por exemplo *TEST_AP*

```cpp
AT+SSID=TEST_AP
```

- 3- **KEY** Define a chave sem fio do AP ao qual você deseja se conectar. por exemplo *12345678*

```cpp
AT+KEY=1,0,12345678
```

parâmetro 1：0 significa HEX, 1 significa ASCII

parâmetro 2：index: O número de índice da chave, 1 a 4 é usado para a chave de criptografia WEP. Os outros métodos de criptografia são fixados em 0.

parâmetro 3： Chave sem fio  por exemplo：12345678

- 4- **NIP** Habilita DHCP

```cpp
AT+NIP=0
```

- 5- PMTF Salva os parâmetros acima na spi flash, basta começar a partir da etapa 6 na próxima inicialização

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

- 2- **SSID** Define o nome do AP a ser conectado, como *TEST_AP*

```cpp
AT+SSID=TEST_AP
```

- 3- **KEY** Define a chave sem fio do AP ao qual você deseja se conectar. por exemplo *12345678*

```cpp
AT+KEY=1,0,12345678
```

parâmetro 1：0 significa HEX, 1 significa ASCII

parâmetro 2：index: O número de índice da chave, 1 a 4 é usado para a chave de criptografia WEP. Os outros métodos de criptografia são fixados em 0.

parâmetro 3： Chave sem fio por exemplo：12345678

- 4- **APSSID** Define o nome de rede do SOFTAP criado

```cpp
AT+APSSID=”MYSoftAP”
```

- 5-  **APENCRY** Define o tipo de criptografia do SoftAP (como WPA2-TKIP)

```cpp
AT+APENCRY=5
```

- 6- **APKEY**  Define a senha para o SoftAP (por exemplo, código ASCII 87654321)

```cpp
AT+APKEY=1,0,87654321
```

- 7- **APNIP**  Define o endereço IP e a máscara de sub‑rede

```cpp
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

- 8- **PMTF** Salva os parâmetros acima na spi flash, basta começar a partir da etapa 9

```cpp
AT+PMTF
```

- 9- **WJOIN** Conecta‑se à rede sem fio TEST_AP

```cpp
AT+WJOIN
```

## Gravação de Firmware

Para a gravação de firmware, consulte aqui：

[Air602 Firmware Programming Manual](https://wiki.seeedstudio.com/pt-br/Air602_Firmware_Programming_Manual)

## FAQ

**P1. Como a STA desconecta do AP**

R: O comando AT da placa de rede sem fio para desconectar do AP é:

```cpp
AT+WLEAV
```

**P2. SoftAP desconectado**

R: O comando AT para o SoftAP desconectar a rede é:

```cpp
AT+WLEAV=2
```

**P3. Como a STA visualiza o status atual**

R: O comando AT para a placa de rede sem fio visualizar o status da placa de rede atual é:

```cpp
AT+LKSTT
```

**P4. Como visualizar o status atual do SoftAP**

R: O comando AT para visualizar o status atual do SoftAP é:

```cpp
AT+APLKSTT
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/AIR602_lbr.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Air602 AT Command User Manual](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602%20AT%20Command%20User%20Manual.pdf)

- **[PDF]** [Air602 Hardware Design Manual](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602%20Hardware%20Design%20Manual.pdf)

- **[ZIP]** [AIR602_lbr for eagle](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/AIR602_lbr.zip)

- **[ZIP]** [sscom](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip)

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
