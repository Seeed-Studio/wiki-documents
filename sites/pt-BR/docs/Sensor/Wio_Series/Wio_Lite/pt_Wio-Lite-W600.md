---
title: Wio Lite W600
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Lite-W600/
slug: /Wio-Lite-W600
sku: 102991180
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-Lite-W600/
---

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/Wio-Lite-W600-wiki.jpg)

O Wio Lite W600 é uma placa compatível com Arduino, econômica, com o módulo WiFi W600. O Wio Lite W600 possui um microcontrolador baseado em Atmel® | SMART™ SAM D21 ARM Cortex-M0+ e o núcleo WiFi W600 é um módulo WiFi de 2,4GHz com ARM Cortex-M3. Como o Wio Lite W600 usa o SAM D21 (o mesmo chip usado no Arduino Zero) como seu núcleo Arduino, em teoria ele é totalmente compatível com o Arduino Zero.

Ele expõe os pinos do SAM D21, o nível de I/O desta placa é 3,3V. Existem 6 pinos analógicos e 14 pinos digitais, e também uma UART, um I2C e uma porta ICSP disponíveis. Você pode alimentar esta placa com USB Type C 5V e bateria Lipo de 3,5V~4,2V.

Quanto ao núcleo WiFi, é nosso velho amigo - o Módulo W600. Nós já lançamos o Módulo W600 e o [Grove -  W600](https://www.seeedstudio.com/W600-Module-p-4020.html), Wio Lite W600 é um novo membro da [família W600](https://www.seeedstudio.com/tag/W600-WIFI.html). O Módulo W600 possui ARM Cortex-M3 com 1MB de flash on-chip e kernel freeRTOS. Ele é certificado CE/FCC e suporta 802.11 b/g/n.

Além disso, lançamos o [Grove Shield for Wio Lite](https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html) ao mesmo tempo. Com este shield, trazemos mais de 200 sensores, atuadores e displays Grove para a série Wio Lite e para a comunidade Feather.  

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-detail.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-detail.jpg" height="450" width="600" alt="Diagrama rápido de seleção de relé Seeed"  />
  </a>
</figure>
</div>

Adeus, fiação complexa com a protoboard e soldagem chata com o ferro de solda.

Olá, [Grove](https://wiki.seeedstudio.com/pt-br/Grove_System/)!

<p style={{}}><a href="https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Compatível com Arduino Zero / Compatível com Adafruit Feather
- Módulo WiFi de 2,4GHz onboard com suporte a 802.11 b/g/n
- Suporta mais de 200 módulos Grove
- Custo-benefício

## Especificação

|Item|Valor|
|------------|-----------|
|Microcontrolador|SAM D21 |
|Frequência máxima da CPU|48 MHz|
|SRAM|32 KB|
|Memória Flash|256 KB|
|Entrada de energia|USB Type C 5V Bateria Lipo 3,5 V ~ 4,2 V|
|Pinos Digitais de I/O|14|
|Canais de Entrada Analógica|6|
|Corrente DC por pino de I/O|40 mA|
|Tensão de Entrada IO|3,3 V|
|||
|Núcleo WiFi|W600|
|CPU|Cortex-M3 embarcado de 32 bits|
|RAM|288 KB|
|Flash|1 MB|
|Modo Wi‐Fi|IEEE802.11b/g/n|
|Faixa de Frequência|2,4~2,4835 GHz|
|Tipo de Rede|STA/AP/AP+STA/Wi‐Fi Direct|
|Protocolo de rede|TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP|
|Verificação|WEP/WPA‐PSK/WPA2‐PSK|
|Criptografia|WEP64/WEP128/TKIP/CCMP(AES)|

## Visão Geral do Hardware

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/hardware-overview.jpg)

## Primeiros Passos

## Hardware

**Materiais necessários**

- Wio Lite W600 x1
- Computador x1
- Cabo USB type C x1

:::tip
    Alguns cabos USB só conseguem fornecer energia e não conseguem transferir dados. Se você não tiver um cabo usb ou não souber se o seu cabo usb pode transmitir dados, você pode conferir [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

Conecte o Wio Lite W600 ao seu computador usando o cabo USB.

## Software

## Etapa 1. Você precisa instalar o Software Arduino

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Inicie o aplicativo Arduino**

Dê um clique duplo no aplicativo Arduino (arduino.exe) que você baixou anteriormente.

:::note
    Se o Software Arduino carregar em um idioma diferente, você pode alterá-lo na janela de preferências. Consulte a página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para detalhes.
:::

## Etapa 2. Configurando seu Arduino IDE

Abra o seu Arduino IDE, clique em **File > Preferences** e copie a URL abaixo para *Additional Boards Manager URLs*

```c
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json

```

 ![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)

## Etapa 3. Adicione a Placa Wio Lite W600 ao Seu Arduino IDE  

Siga o [Guia de Instalação de Placas Seeed](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) e pesquise pela palavra-chave **seeeduino_samd_zero** para adicionar o **Wio Lite W600** ao seu Arduino IDE.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE1.png"/>
  <figcaption> <i>A palavra-chave é **seeeduino_samd_zero**</i> </figcaption>
</figure>
</div>

## Etapa 4. Adicione a Biblioteca W600 ao Seu Arduino IDE

Baixe a [Biblioteca W600](https://github.com/Seeed-Studio/Seeed_Arduino_W600/archive/master.zip) do Github da Seeed. Depois consulte [Como instalar biblioteca](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar bibliotecas para o Arduino.

## Etapa 5. Reinicie o Arduino IDE. Abra o exemplo AP-Station, você pode abri-lo no Arduino IDE pelo caminho: **File --> Examples -->W600_wifi-->log_data

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE3.png)

## Etapa 6. Modifique o código com o seu próprio AP e Station. Na figura a seguir, o Wio Lite W600 funciona como uma estação para se conectar ao AP marcado como **A** e o Wio Lite W600 criará o **AP B** para outros dispositivos. Você deve alterar tanto o nome do AP quanto a senha

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE-4.jpg)

## Etapa 7. Selecione sua placa e porta

Você precisará selecionar a entrada no menu **Tools > Board** que corresponde ao seu Arduino.
Selecionando um **Seeeduino Zero**.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE2.png"/>
  <figcaption><i>Escolha a placa correta</i></figcaption>
</figure>
</div>

Selecione o dispositivo serial da placa Arduino no menu Tools | Serial Port. É provável que seja COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Arduino e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

## Etapa 8. Carregue o código  

Agora, simplesmente clique no botão "Upload" no ambiente. Aguarde alguns segundos e, se o envio for bem-sucedido, a mensagem "Done uploading." aparecerá na barra de status.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png"/>
  <figcaption><i>Carregue o código</i></figcaption>
</figure>
</div>

Alguns segundos após o término do upload, o Wio Lite W600 acessará o AP que você definiu e você poderá usar seu telefone para acessar o AP criado pelo Wio Lite W600

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/res/Wio-Lite-W600.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo Eagle do Wio Lite W600](https://files.seeedstudio.com/wiki/Wio-Lite-W600/res/Wio-Lite-W600.zip)
- **[PDF]** [W600-datasheet](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf)

## Suporte Técnico & Discussão de Produto

 se você tiver qualquer problema técnico, envie o problema em nosso [fórum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
