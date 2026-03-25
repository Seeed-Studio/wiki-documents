---
description: Wifi Shield V1.0
title: Wifi Shield V1.0
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wifi_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wifi_Shield_V1.0/
---

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield.jpg)

Este Wifi Shield utiliza um módulo Wi-Fi RN171 para fornecer à sua Arduino/Seeeduino a função de Ethernet serial. São necessários apenas dois pinos para conectar seu dispositivo a redes sem fio 802.11b/g com este shield. Ele possui uma antena independente que pode cobrir uma área mais ampla e transmitir sinais mais fortes. Com suporte aos protocolos de comunicação TCP, UDP e FTP comuns, este Wifi Shield pode atender às necessidades da maioria dos projetos de rede sem fio, como redes de casas inteligentes, controle de robôs ou estações meteorológicas pessoais, etc. Preparamos um conjunto de comandos simples e conveniente para este shield, para que você possa usar um código limpo e conciso para executar a função.

# Recursos #

- Compatível com Arduino, Seeeduino, Arduino Mega e Seeeduino Mega

- Taxa de dados do host de até 1 Mbps para UART, 2 Mbps sobre SPI escravo

- Porta serial UART do RN171 no Shield pode ser conectada ao Arduino por jumpers

- Pino SPI do RN171 é apenas exposto

- Com dois conectores Grove, facilitando a conexão de módulos Grove de I2C e IO digital ao Arduino

- Autenticação WiFi segura WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)

- Aplicações de rede integradas: cliente DHCP, cliente DNS, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP

# Especificações #

<table cellspacing="0" width="80%">
  <tbody>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Mín</th>
      <th scope="col">Típico</th>
      <th scope="col">Máx</th>
      <th scope="col">Unidade</th>
    </tr>
    <tr>
      <th scope="row">Tensão</th>
      <td>3.3</td>
      <td>5</td>
      <td>5.5</td>
      <td>VCC</td>
    </tr>
    <tr>
      <th scope="row">Corrente</th>
      <td>25</td>
      <td>60</td>
      <td>400</td>
      <td>mA</td>
    </tr>
    <tr>
      <th scope="row">Potência de transmissão</th>
      <td colspan="3">0-10</td>
      <td>dBm</td>
    </tr>
    <tr>
      <th scope="row">Frequência</th>
      <td colspan="3">2402~2480</td>
      <td>MHz</td>
    </tr>
    <tr>
      <th scope="row">Taxa de rede</th>
      <td colspan="4">1-11 Mbps para 802.11b/6-54Mbps para 802.11g</td>
    </tr>
    <tr>
      <th scope="row">Dimensão</th>
      <td colspan="3">60x56x19</td>
      <td>mm</td>
    </tr>
    <tr>
      <th scope="row">Peso líquido</th>
      <td colspan="3">20±2</td>
      <td>g</td>
    </tr>
  </tbody>
</table>

# Função da Interface

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield009.jpg)

# Uso #

O exemplo que fornecemos aqui é para mostrar como conectar este Wifi Shield à Ethernet e iniciar a troca de dados entre o shield e um servidor virtual.

### Instalação de Hardware ###

O pacote que você recebe deve conter estas partes: um Wifi Shield, uma antena e um conector de antena.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield001.jpg)

Monte essas partes como na imagem abaixo.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield002.jpg)

Instale o shield na sua Arduino/Seeeduino

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield003.jpg)

Ok, hora de escrever algum código.

### Programação de Software ###

Primeiro você precisa ter certeza de que o Arduino1.0 já foi instalado no seu computador.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Tb2.jpg)
Baixe a biblioteca do wifishield aqui [Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) e descompacte-a na pasta libraries do Arduino neste caminho: <code>..\arduino-1.0\libraries</code>
Abra um novo sketch no Arduino-1.0 e, em seguida, copie o código a seguir para o seu sketch.

```cpp
#include "Wifly.h"
#include <SoftwareSerial.h>
WiflyClass Wifly(2,3);
void setup()
{
 Serial.begin(9600);//use the hardware serial to communicate with the PC
 Wifly.init();//Initialize the wifishield
 Wifly.setConfig("SSID","PASSWORD");//here to set the ssid and password of the Router
 Wifly.join("SSID");
 Wifly.checkAssociated();
 while(!Wifly.connect("192.168.1.164","90"));//connect the remote service
 Wifly.writeToSocket("Connected!");
}
void loop()
{
 if(Wifly.canReadFromSocket())
 {
   Serial.print(Wifly.readFromSocket());
 }
 if(Serial.available())
 {
   Wifly.print((char)Serial.read());
 }
}

```

Você precisa fazer algumas modificações neste sketch de acordo com sua configuração específica.

1.Selecione o pino para conectar à porta serial do módulo WIFI

```txt
WiflyClass Wifly(2,3);

```

Os parâmetros 2 e 3 aqui representam RX e TX respectivamente para a porta serial por software. Com base nisso, os pinos D2 e D3 devem ser curto-circuitados como na imagem abaixo. Você pode mudar o número do pino como quiser, apenas certifique-se de fazer as alterações correspondentes nos pinos em curto.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield004.jpg)

2.Preencha as informações da rede sem fio

```
Wifly.setConfig("SSID","PASSWORD");//here to set the ssid and password of the Router
Wifly.join("SSID");
```

Preencha o nome da sua rede de destino em SSID e a senha em PASSWORD. Por exemplo, se você quiser se conectar à China-NET e a senha for 12345678, então esta linha de código deve ser alterada para:

```
Wifly.setConfig("China-NET","12345678");//here to set the ssid and password of the Router
Wifly.join("China-NET");
```

**Nota:**

1.O tipo de segurança do roteador apenas suporta WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)

2.O roteador deve estar conectado à Internet

3.Preencha as informações do servidor remoto

```
while(!Wifly.connect("192.168.1.164","90"));//connect the remote service
```

Na linha acima, "192.168.1.164" é o endereço IP remoto do servidor virtual e "90" é a informação da porta.

Fornecemos um software Cliente TCP  [YFTCPServer.zip](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/YFTCPServer.zip) e um software de porta serial [SCCOM](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Sscom32E.zip) para fins de teste.

Abra o software Cliente TCP e você verá:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield005.jpg)

Altere suas linhas de acordo com as informações que você obtiver deste software.

```
while(!Wifly.connect("192.168.1.164","90"));//connect the remote service
```

Envie o sketch.

Agora execute primeiro o software Cliente TCP, depois o software de porta serial, clique no botão "OpenCom" e aguarde até que uma mensagem `<--Connected!` seja exibida na tela do software virtual.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield006.jpg)

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield007.jpg)

Agora você pode se comunicar com o Wifi Shield por meio deste software de porta serial.

Para mais informações detalhadas sobre o RN171, você pode baixar o datasheet aqui [RN171 Datasheet](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/WiFly-RN-UM.pdf)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Wifi_Shield_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Recursos #

- **[Eagle]**[Arquivo Eagle do Wifi Shield](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Wifi_Shield_Eagle.zip)
- **[PDF]**[PCB do wifi Shield V1.0](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/wifi%20Shield%20V1.0.pdf)
- **[PDF]**[SCH do wifi Shield V1.0](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/wifi%20Shield%20V1.0%20SCH.pdf)
- **[Datasheet]**[RN171 Datasheet](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/WiFly-RN-UM.pdf)
- **[Library]**[Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
