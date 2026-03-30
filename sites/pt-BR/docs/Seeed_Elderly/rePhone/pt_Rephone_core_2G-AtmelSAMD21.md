---
description: Rephone Core 2G-AtmelSAMD21
title: Rephone Core 2G-AtmelSAMD21
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Rephone_core_2G-AtmelSAMD21
sku: 102040046
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Rephone_core_2G-AtmelSAMD21/
---

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/cover.jpg)

RePhone é uma das plataformas de placas de desenvolvimento mais exclusivas e interessantes criada pela Seeed Studio; desde a sua primeira aparição no palco do KickStarter, ela tem recebido muita atenção e suporte de makers de todo o mundo, porque com o RePhone você não só pode fazer você mesmo (DIY) um telefone especial para você, como também encantar as coisas ao seu redor com conectividade celular.

O RePhone Core 2G-AtmelSAMD21 v1.0 é uma nova placa RePhone core 2G compatível com Arduino, que é baseada no SAMD21 da Atmel e no SIM800H. A maioria dos recursos do RePhone Core 2G-AtmelSAMD21 v1.0 é a mesma do Xadow – GSM+BLE, como oferecer uma ampla variedade de protocolos de comunicação – GSM, GPRS e Bluetooth, suportar quad-band 850/900/1800/1900Mz e suportar cartão Nano SD 2G. Mas a solução do SAMD21 da Atmel mais SIM800H reduziu bastante o consumo de energia em comparação com o Xadow – GSM+BLE. Se você está procurando um RePhone core de alto desempenho e baixo consumo de energia para encantar o mundo, então este novo módulo RePhone core 2G é a melhor escolha.

:::note:
    O RePhone Core 2G-AtmelSAMD21 v1.0 é compatível com todos os Xadow v2.0, exceto a Xadow Touchscreen de 1,54 polegadas
    Conecte uma bateria à placa se quiser usar a função GSM ou GPRS, caso a alimentação via USB não seja suficiente e a comunicação falhe.
:::

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)

:::warning
    Este produto **NÃO** inclui uma bateria lipo, e também não há bateria lipo sendo vendida em nosso Bazaar; qualquer bateria lipo de 3,7 V funcionará.

    Este produto **NÃO** inclui microfone, alto-falante e entrada para fone de ouvido 3,5 mm, você precisa comprar um [Xadow Audio](https://www.seeedstudio.com/Xadow-Audio-p-2554.html) para essas funções.
:::

## Recursos

---

### Arduino/Processador

- ATSAMD21G18 @ 48MHz com lógica/alimentação de 3,3 V
- Compatível com Arduino (baseado no bootloader Arduino Zero)
- Embutido com chip de gerenciamento de bateria de lítio
- Botão de usuário

### SIM800H

- Quad band 850/900/1800/1900MHz
- Classe multi-slot GPRS 12/10
- Estação móvel GPRS classe B
- Atende ao padrão GSM 2/2 +
  - Classe 4 (2 W @850/900MHz)
  - Classe 1 (1 W @1800/1900MHz)
- bluetooth: compatível 3.0+EDR
- FM: limites de banda 76~109MHz, ajuste passo a passo de 50KHz
- Via controle ATcommand 3GPP TS 27.007, 27.005 e conjunto de ATcommand aprimorado SIMCOM
- SIM USAT
- Baixo consumo de energia
- Faixa de temperatura de operação : -40 ~+85 °C

## Especificação

---

| Item|Value|
|--------------|-------------------------------------|
|Microcontroller |ATSAMD21G18, 32-Bit ARM Cortex M0+ |
|Operating Voltage |3.3V|
|DC Current per I/O Pin |7 mA|
|Flash Memory |256 KB|
|SRAM |32 KB|
|EEPROM |None|
|Clock Speed |48 MHz|
|Lenght |68 mm|
|Width |30 mm|
|Weight |12 gr.|

## Visão Geral do Hardware

---
![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/hw.png)

- **1-**Conector Xadow de 11 pinos
- **2-**Botão de usuário (D3)
- **3-**Conector Micro USB para programação e alimentação
- **4-**Conector Xadow de 35 pinos
- **5-**Conector de bateria Jst1.0
- **6-**Cartão Nano Sim (igual ao do iPhone 5/6/7)
- **7-**CI ATSAMD21G18
- **8-**LED de monitoramento de status de carga
  - piscando - nenhuma bateria inserida
  - aceso - carregando
  - apagado - carga concluída
- **9-**CI - ETA6003([datasheet](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/ETA6003.pdf))
- **A-**Porta de depuração SWD
- **B-**Conector de antena
- **C-**Pad de pino de E/S
- **D-**SIM800H

## Mapa de Pinos

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png)](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png)

:::tip
    [Clique](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png) para ver a imagem em tamanho maior.
:::
:::note
    * INT1 conectado a D7
    * INT2 conectado a D12
:::
## Arduino IDE

Depois de baixar e instalar a [versão mais recente da Arduino IDE](https://www.arduino.cc/en/Main/Software), há algumas configurações que precisam ser feitas.
Abra sua Arduino IDE e clique em **File > Preferences**
Copie o código abaixo para **Additional Boards Manager URLs** e depois clique em **OK**

```c
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/setting.png)

Em seguida, vá para **Tools > Board > Boards Manager**

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/boards_manager.png)

Clique no botão **Install** e aguarde alguns minutos até que a placa seja instalada.

Depois que a instalação for concluída, você poderá encontrar RePhone core 2G-AtmelSAMD21 na parte inferior de **Tools > Board**.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/board_r2.png)

### Instalar o Driver (Para Windows)

Na primeira vez que inserir a placa, você deverá obter um dispositivo USB COM chamado RePhone 2G SAMD21 que precisa da instalação de um driver. Clique no botão abaixo para baixar o driver da placa.

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/driver.png)](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/driver.zip)

Para garantir que o driver foi instalado com sucesso, abra o Gerenciador de Dispositivos e veja se **RePhone 2G SAMD21** existe.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/device_manager.png)

### Hello World
Agora podemos fazer o upload do nosso primeiro demo - Hello World para a placa.

Abra sua Arduino IDE e copie o código abaixo:

```c
void setup()
{
    SerialUSB.begin(115200);
}

void loop()
{
    SerialUSB.println("Hello world!");
    delay(1000);
}
```

E então,

- Clique em **Tools > Board > RePhone core 2G-AtmelSAMD21**
- Clique em **Tools > Port** para selecionar o número de porta correto. (*Não escolha COM1*)

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/arduino_ide.png)

Depois clique no botão **Upload** no canto superior esquerdo da Arduino IDE; alguns segundos depois o sketch terá sido enviado com sucesso.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/upload.png)

Se o upload for bem-sucedido, você deverá ver algumas informações em vermelho.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/upload_done.png)

Abra o Serial Monitor da sua Arduino IDE e você verá "Hello World" impresso a cada segundo.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/hello_world.png)

## Modo de Comando AT

---
A placa RePhone core 2G suporta modo de comando AT. TX/RX do SIM800H está conectado ao Serial1(D0/D1) do AtemlSAMD21.

Copie o código abaixo e faça o upload para sua placa.

```c
#include "atmelsamd21_gprs.h"

void setup()
{
    SerialUSB.begin(115200);
    while(!SerialUSB);

    SerialUSB.println("RePhone core 2G - AtmelSAMD21 AT Command Test");
    gsm.preInit();                  // power on

    while(0 != gsm.init())
    {
        SerialUSB.println("GSM init error.");
        delay(2000);
    }

    SerialUSB.println("GSM init ok.");
}

void loop()
{
    while(SerialUSB.available())Serial1.write(SerialUSB.read());
    while(Serial1.available())SerialUSB.write(Serial1.read());
}

```

Abra seu Serial monitor e aguarde até que ***GSM init ok.*** seja impresso no monitor, então você pode digitar um comando.
Tente digitar um "AT" para receber um "OK".

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/cmd.png)

:::tip
    Todos os comandos devem terminar com uma nova linha(\r\n).
:::
Clique no botão abaixo para obter a documentação detalhada dos comandos AT.

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/at_cmd.png)](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf)

## Exemplos

---
Nós fizemos muitos exemplos para mostrar como este módulo funciona.
Logo no início, por favor

1. Insira um cartão nano SIM
2. Conecte a antena
3. Se você tiver uma bateria lipo, conecte-a também à placa

Clique em **File > Examples** e então você poderá abrir esses exemplos.
### AtmelSAMD21_SIM800

- **Bluetooth_AT_Command_And_Music_Play**: Reproduz música via bluetooth
- **GSM_GPRS_HTTP_GET**: Faz um HTTP GET do arquivo hello.txt a partir de [mbed.org](http://mbed.org)
- **GSM_Receive_SMS**: Recebe SMS
- **GSM_Voice_Call**: Recebe chamada de voz

### RePhone_API_for_Arduino

- **gps_test**: exemplo de [Xadow GPS v2](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)
- **ledmatrix_test**: exemplo de [Xadow LED 5x7](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html)
- **nfc_test**: exemplo de [Xadow NFC v2](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html)
- **sensorhub_test**: exemplo de [Xadow Basic Sensors](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)
- **ws2812_test**: exemplo de [Xadow Duino](https://www.seeedstudio.com/Xadow-Duino-p-2556.html)

### rephone_button

- **button_test**: Teste do botão on-board

### rephone_lcm

- **lcm_display_test**: Exemplo de exibição em LCDdkdsafdfds

### rephone_menu_all

- **rephone_menu_test**

### TwilioMessage

- **message_test**: Envio/recebimento de mensagem Twilio

## Família RePhone

Há vários módulos complementares encadeáveis para estender os recursos e funcionalidades – Xadow Audio, Xadow LED 5x7, Xadow Basic Sensors, Xadow Duino, Xadow GPS v2 e Xadow NFC v2.

|GPS v2|Basic Sensors|NFC v2|
|----------------|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product3.jpg)|
|[Get More Details](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)|[Get More Details](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)|[Get More Details](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html)|

|LED 5 x 7|Audio|Xadow GSM Breakout|
|----------------|--------------|-------------|
|![](https://files.seeedstudio.com/wiki/Rephone/image/product4.jpg)|![](https://files.seeedstudio.com/wiki/Rephone/image/product7.jpg)|![](https://files.seeedstudio.com/wiki/Rephone/image/product8.jpg)|
|[Get More Details](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html)|[Get More Details](https://www.seeedstudio.com/Xadow-Audio-p-2554.html)|[Get More Details](https://www.seeedstudio.com/Xadow-GSM-Breakout-p-2559.html)|

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Esquemáticos em PDF](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/pdf_sch_rephone_2g.pdf)
- [Esquemáticos em EAGLE](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/eagle.zip)
- [Driver](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/driver.zip)
- [Datasheet do ETA6003](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/ETA6003.pdf)
- [Comandos AT do SIM800H](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/SIM800_AT.pdf)
- [Baixar Tudo Acima](https://github.com/SeeedDocument/RePhone-core-2G-AtmelSAMD21/archive/master.zip)

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
