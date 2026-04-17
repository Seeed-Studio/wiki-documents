---
description: Rephone Core 2G-Atmel32u4
title: Rephone Core 2G-Atmel32u4
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /RePhone_core_2G-Atmel32u4
sku: 102040006
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/RePhone_core_2G-Atmel32u4/
---

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/cover.jpg)

RePhone é uma das plataformas de placa de desenvolvimento mais exclusivas e interessantes criada pela Seeed Studio. Com a RePhone você não só pode fazer você mesmo (DIY) um telefone especial para você, como também encantar as coisas ao seu redor com conectividade celular. A primeira edição do núcleo RePhone é a Xadow – GSM+BLE; desta vez fornecemos outras 2 edições do núcleo RePhone, com maior desempenho e menor consumo de energia, uma delas é a RePhone core 2G Atmel32u4 v1.0.

A RePhone core 2G Atmel32u4 v1.0 é uma nova placa RePhone core 2G compatível com Arduino, baseada em Atmel32u4 e SIM800H. A maioria dos recursos da RePhone Core 2G Atmel32u4 v1.0 é a mesma da Xadow – GSM+BLE, como oferecer uma ampla gama de protocolos de comunicação – GSM, GPRS e Bluetooth, suportar quad-band 850/900/1800/1900Mz e suportar cartão Nano SD 2G. Mas a solução Atmel32u4 mais SIM800H reduziu bastante o consumo de energia em comparação com a Xadow – GSM+BLE. Se você está procurando um núcleo RePhone de alto desempenho e baixo consumo de energia para encantar o mundo, então este novo módulo RePhone core 2G é a melhor escolha.

Também fornecemos uma versão ainda mais poderosa do novo núcleo RePhone core 2G, pois sua solução é AtmelSAMD21+SIM800. Clique [aqui](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html) para encontrá-la.

:::warning
    1. Este produto **NÃO** inclui uma bateria lipo, e também não há bateria lipo à venda em nosso Bazaar; qualquer bateria lipo de 3,7 V funcionará
    2. Este produto **NÃO** inclui microfone, alto-falante e entrada para fone de ouvido de 3,5 mm, você precisa comprar um [Xadow Audio](https://www.seeedstudio.com/Xadow-Audio-p-2554.html) para essas funções.
:::
##Features

###Arduino/Processor

* Atmega32u4 funcionando a 16 MHz
* Funciona com Arduino IDE (baseado no bootloader do Arduino Leonardo)
* Integrado com chip de gerenciamento de bateria de lítio
* Botão de usuário


###SIM800H

* Quad band 850/900/1800/1900MHz
* GPRS multi-slot classe 12/10
* Estação móvel GPRS classe B
* Atende ao padrão GSM 2/2 +
    * Classe 4 (2 W @850/900MHz
    * Classe 1 (1 W @1800/1900MHz)
* bluetooth: compatível 3.0+EDR
* FM: limites de banda 76~109MHz, sintonia passo a passo 50KHz
* Controle via comando AT 3GPP TS 27.007, 27.005 e conjunto de comandos AT aprimorado da SIMCOM
* SIM USAT
* Baixo consumo de energia
* Faixa de temperatura de operação : -40 ~+85 °C


##Specification

| Item|Value|
|--------------|-------------------------------------|
|Microcontroller |Atmega32U4 |
|Operating Voltage	|3.3V|
|DC Current per I/O Pin	|50|
|Flash Memory	|32 KB dos quais 4KB usados pelo bootloader|
|SRAM	|2.5 KB|
|EEPROM	|1KB|
|Clock Speed	|16 MHz|
|Lenght	|68 mm|
|Width	|30 mm|
|Weight	|12 gr.|

## Hardware Overview

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/hw.png)

* **1- **Conector Xadow de 11 pinos
* **2- **Botão de usuário (D3)
* **3- **Conector Micro USB para programação e alimentação
* **4- **Conector Xadow de 35 pinos
* **5- **Conector de bateria Jst1.0
* **6- **Nano Sim Card (igual ao do iPhone 5/6/7)
* **7- **CI Atmega32U4
* **8- **LED de monitor de status de carga
    * piscando - nenhuma bateria inserida
    * ligado - carregando
    * desligado - carga concluída
* **9- **CI - ETA6003 (datasheet)
* **A- **Pads ICSP
* **B- **Conector de antena
* **C- **Pad de pino de E/S
* **D- **SIM800H

##Pin map

[![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/pinmap.png)](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/pinmap.png)

:::tip
    [Clique](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/pinmap.png) para ver a imagem maior.
:::
:::note
    * INT1 conectado ao D7
    * INT2 conectado ao D12
:::
##Arduino IDE

Depois de baixar e instalar a [última Arduino IDE](https://www.arduino.cc/en/Main/Software), clique [aqui](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) para adicionar a placa ao seu Arduino IDE.

###Install the Driver (For Windows)

Quando você inserir a placa pela primeira vez, deverá obter um dispositivo USB COM chamado RePhone 2G SAMD21 que precisa de instalação de driver. Clique no botão abaixo para baixar o driver para a placa.

[![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/driver.png)](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/driver.zip)

Para ter certeza de que o driver foi instalado com sucesso, abra o seu Gerenciador de Dispositivos para ver se **RePhone 2G 32U4** existe.

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/device_manager.png)

###Hello World
Agora podemos enviar nosso primeiro demo - Hello World para a placa.

Abra o seu Arduino IDE e copie o código abaixo:

```c
void setup()
{
    Serial.begin(115200);
}

void loop()
{
    Serial.println("Hello world!");
    delay(1000);
}
```

E então,

* Clique em **Tools > Board > RePhone core 2G-Atmel32u4**


Se você não conseguir encontrar a RePhone core 2G-Atmel32u4, verifique [How to Add Seeed boards to Arduino IDE](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/)



* Clique em **Tools > Port** para selecionar um número de porta correto. (*Não escolha COM1*)

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/arduino_ide.png)

Depois clique no botão **Upload** no canto superior esquerdo do Arduino IDE; alguns segundos depois o sketch terá sido enviado com sucesso.

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/upload.png)

Se o envio for bem-sucedido, você deverá ver algumas informações em vermelho.

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/upload_done.png)

Abra o Serial Monitor do seu Arduino IDE e você verá "Hello World" impresso a cada segundo.

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/hello_world.png)


##AT Command Mode

A placa RePhone core 2G suporta modo de comando AT. TX/RX do SIM800H está conectado ao Serial1(D0/D1) do AtemlSAMD21.

Copie o código abaixo e envie para a sua placa.

```c
#include "atmel32u4_gprs.h"

void setup()
{
    Serial.begin(9600);
    while(!Serial);

    Serial.println("SIM800 Serial Debug Test ...");
    gsm.preInit();

    while(0 != gsm.sendATTest())
    {
        Serial.println("sim800 init error!");
    }

    Serial.println("sim800 init O.K!");
}

void loop()
{
    gsm.ATDebug();
}
```

Abra o seu Serial Monitor e espere até ***GSM init ok.*** ser impresso no monitor, então você pode inserir um comando.
Tente inserir um "AT" para obter um "OK".

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/cmd.png)

:::tip
    Todo comando deve terminar com uma nova linha(\r\n).
:::
Clique no botão abaixo para obter a documentação detalhada dos comandos AT.

[![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/at_cmd.png)](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf)


##Examples

Nós fizemos muitos exemplos para mostrar a você como este módulo funciona.
No comecinho de tudo, por favor

1. Insira um cartão nano SIM
2. Insira a antena
3. Se você tiver uma bateria lipo, conecte-a à placa também

Clique em **File > Examples** e então você poderá abrir esses exemplos.
###Atmel32U4_SIM800

* **Bluetooth_AT_Command_And_Music_Play**: Reproduzir música via bluetooth
* **GSM_GPRS_HTTP_GET**: Http get hello.txt de [mbed.org](http://mbed.org)
* **GSM_Receive_SMS**: Receber SMS
* **GSM_Voice_Call**: Receber chamada de voz
* **SIM800_Serial_Debug**: modo de comando AT

###RePhone_API_for_Arduino

* **gps_test**: exemplo do [Xadow GPS v2](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)
* **ledmatrix_test**: exemplo do [Xadow LED 5x7](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html)
* **nfc_test**: exemplo do [Xadow NFC v2](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html)
* **sensorhub_test**: exemplo do [Xadow Basic Sensors](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)
* **ws2812_test**: exemplo do [Xadow Duino](https://www.seeedstudio.com/Xadow-Duino-p-2556.html)

###rephone_button

* **button_test**: Teste do botão on-board

###rephone_lcm

* **lcm_display_test**: Exemplo de exibição em LCD dkdsafdfds

###rephone_menu_gsm

* **rephone_menu_test**


## RePhone Family
Há vários módulos complementares encadeáveis para estender os recursos e funcionalidades – Xadow Audio, Xadow LED 5x7, Xadow Basic Sensors, Xadow Duino, Xadow GPS v2 e Xadow NFC v2.


|GPS v2|Basic Sensors|NFC v2|
|----------------|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product3.jpg)|
|[Get More Details](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)|[Get More Details](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)|[Get More Details](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html)|

|LED 5 x 7|Audio|Xadow GSM Breakout|
|----------------|--------------|-------------|
|![](https://files.seeedstudio.com/wiki/Rephone/image/product4.jpg)|![](https://files.seeedstudio.com/wiki/Rephone/image/product7.jpg)|![](https://files.seeedstudio.com/wiki/Rephone/image/product8.jpg)|
|[Get More Details](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html)|[Get More Details](https://www.seeedstudio.com/Xadow-Audio-p-2554.html)|[Get More Details](https://www.seeedstudio.com/Xadow-GSM-Breakout-p-2559.html)|



## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/102040006RePhone%20core%202G-Atmel32u4.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


#Resources

- [Schematics in PDF](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/102040006RePhone%20core%202G-Atmel32u4/RePhone%20core%202G-Atmel32u4%20v1.0.pdf)
- [Schematics in EAGLE](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/102040006RePhone%20core%202G-Atmel32u4.zip)
- [Driver](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/driver.zip)
- [Folha de dados do ETA6003](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/ETA6003.pdf)
- [Comando AT do SIM800H](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/SIM800_AT.pdf)
- [Baixar Tudo Acima](https://github.com/SeeedDocument/RePhone_core_2G-Atmel32u4/archive/master.zip)

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
