---
description: Kit Vestível Xadow Para Edison
title: Kit Vestível Xadow Para Edison
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Wearable_Kit_For_Edison
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Wearable_Kit_For_Edison/
---

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison02.png)

O Kit Vestível Xadow Para Edison é um kit perfeito para fazer dispositivos vestíveis
com Intel Edison. Ele inclui uma placa de expansão Edison chamada Xadow-Edison e
8 módulos extremamente pequenos; esses módulos são sensores, atuadores e módulos de comunicação de UI. Conectando com FFC flexível, você pode rapidamente fazer alguns dispositivos vestíveis interessantes e legais. Atenção: você precisa obter um Intel Edison e dois cabos USB por conta própria.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Wearable-Kit-For-Intel%C2%AE-Edison-p-2428.html)

## Lista de peças

<table>
  <tbody>
  <tr>
      <th> Peças </th>
      <th> Quantidade </th>
      <th> Peças</th>
      <th> Quantidade</th>
      </tr>
    <tr>
      <td> Xadow - Edison </td>
      <td> 1</td>
      <td> Xadow - Acelerômetro de 3 Eixos</td>
      <td> 1</td>
      </tr>
    <tr>
      <td> Xadow - Programador Edison</td>
      <td> 1</td>
      <td> Xadow - Barômetro BMP 180</td>
      <td> 1</td>
      </tr>
    <tr>
      <td> Xadow - Edison SD</td>
      <td> 1</td>
      <td> Bateria</td>
      <td> 1</td>
      </tr>
    <tr>
      <td> Xadow - Sensor de Toque Q </td>
      <td> 1</td>
      <td> Fita Flexível de LED RGB Digital</td>
      <td> 1</td>
      </tr>
    <tr>
      <td> Xadow - NFC </td>
      <td> 1</td>
      <td> Cabo de alimentação Branco</td>
      <td> 5</td>
      </tr>
    <tr>
      <td> Xadow - Breakout</td>
      <td> 3 </td>
      <td> Cabo de alimentação Vermelho</td>
      <td> 5</td>
      </tr>
    <tr>
      <td> Xadow - Buzzer </td>
      <td> 1</td>
      <td> Cabo de alimentação Amarelo</td>
      <td> 5</td>
      </tr>
    <tr>
      <td> Xadow - Motor de Vibração </td>
      <td> 1</td>
      <td> Pacote de cabos FFC</td>
      <td> 1</td>
      </tr>
    <tr>
      <td> Xadow - OLED </td>
      <td> 1</td>
      <td> Tutorial impresso colorido</td>
      <td> 1</td>
      </tr>
    <tr>
      <td>  Etiquetas NFC</td>
      <td> 3</td>
      <td> </td>
      <td> </td>
      </tr>
      </tbody>
      </table>

## Primeiros Passos

### Conexão

Preste atenção ao canto sem preenchimento: o canto sem preenchimento de todos os módulos aponta para a mesma direção. Os dois lados dos módulos Xadow podem conectar dois módulos por FFC, já que o Xadow pode encadear seus módulos o máximo possível como um relógio ou um colar, sendo assim adequado para prototipagem vestível.

- Insira o Intel Edison no Xadow-Edison através dos conectores retangulares.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison03.png)
![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison08.png)

- Conecte a placa Edison-Programmer com um FFC e conecte dois cabos USB; a pequena chave na placa Edison-Programmer deve ser virada para o lado Device.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison04.png)

- Conecte os módulos Xadow com FFC.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison07.png)

- Depois de enviar o programa para ele, desconecte os cabos USB e o programador, conecte a bateria Li-Po para que o kit possa ser móvel.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison09.png)

### Ambiente de Desenvolvimento

1. Instale o Edison Arduino IDE e os drivers necessários. Clique [aqui](https://communities.intel.com/docs/DOC-23147) para ver o tutorial no site oficial.

2. Baixar Demos

1) Clique [aqui](https://github.com/Seeed-Studio/Xadow_Edison_Demos) para baixar o código-fonte do github.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison12.png)

2) Extraia os demos do arquivo zip.
 Abra o Arduino IDE, clique em “file” --&gt; “preferences”, veja o item sketchbook location que deve ser algo como “C:\Users\xxx\Documents\Arduino”, navegue até essa pasta e extraia o projeto para a subpasta ”libraries”.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison16.png)

3. Configuração da IDE

1) Abra o Arduino IDE. Clique em “Tools” --&gt; “Board” e selecione Intel® Edison.

2) Abra o "Device Manager" do computador para encontrar "Intel Edison Virtual Port(COMx)". Clique em “Tools” --&gt; “Serial Port” e escolha COMx.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison17.png)

4. Enviar Sketch

Clique em “File” --&gt; “Examples” e escolha os demos baixados anteriormente

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison18.png)
![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison19.png)

### Os Exemplos

**Fazer uma tira de LED**

A tira de LED tem 3 pinos; para conectar a tira e a placa breakout você pode fazer uma soldagem simples. Conecte os pinos VCC e GND, e o pino de sinal ao pino MISO da placa breakout.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison20.png)

**Preparar etiquetas NFC**

O demo NFC usa três etiquetas NFC como chaves para ligar a tira de LED, mas primeiro você possui etiquetas NFC que não têm nada gravado. Então você precisa torná-las etiquetas úteis.

**Passo 1**. Use o demo FormatTag para formatar as etiquetas na primeira vez que as usar.
![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison21.png)

!!!Note
    Envie o sketch e abra o serial monitor; quando você vir **Place an unformatted Mifare Classic tag on the reader.**, coloque então uma etiqueta sobre a placa de antena. Espere um pouco e você verá **Success, tag formatted as NDEF.** para formatação bem-sucedida ou **Format failed.** caso a etiqueta talvez já tenha sido formatada.

**Passo 2**. Abra o demo Cool_Light_WriteTag e altere o registro do cartão

**WRITE_TAG_MESSAGE**.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison22.png)

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison23.png)

**Passo 3**. Compile e envie o sketch.

**Passo 4**. Execute um serial monitor, coloque uma etiqueta NFC próxima à antena; depois que o serial monitor mostrar **Success. Try reading this tag with your phone .** uma etiqueta útil acabou de ser criada. Repita os passos alterando **WRITE_TAG_MESSAGE** para gravar outras etiquetas.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison24.png)

**Exemplo-01: Cool_Light**

**O QUE TEMOS AQUI**

Neste exemplo, usamos um módulo NFC e um módulo QTouch para controlar uma tira de LED RGB. O módulo QTouch tem 3 botões; tocando botões diferentes você verá diferentes performances de luz.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison27.jpg)

**Enviar Sketch**

**Click File&gt;Examples&gt;Cool_Light.**

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison22.png)

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison26.png)

**Detalhe do Código**

```
#include <Wire.h>
#include <PN532_I2C.h>
#include <PN532.h>
#include <NfcAdapter.h>
#include <TimerOne.h>
#include "Seeed_QTouch.h"
#include "Seeed_ws2812.h"

#define SIG_PIN 12   //LED strip signal pin
#define LED_NUM 5  //LED strip led number

//leave out some code...

void setup() {
    strip.begin();
    nfc.begin();
    Serial.begin(115200);
    color_domain_init(LED_NUM);
    Timer1.initialize(150000);         // initialize timer1
    Timer1.attachInterrupt(callback);  // attaches callback() as a timer overflow interrupt
}
void callback()                      //timer ISR to read QTouch number and change the LED performance
{
    int tn = QTouch.touchNum();        // QTouch callback function
    if( tn == 0 | tn == 1 | tn == 2 ) {
        colorChangeFromNumber(tn);
    }
}
void loop() {
    colorChangeFromString(getStringFromNFC());  // Read string form NFC and change the LED color
    delay(500);
}
```

**RESULTADO**

1. Coloque uma das etiquetas NFC sobre a antena para mostrar luzes legais. Neste exemplo você verá os LEDs brilharem em três modos: loop de cor única, flowcolor e rainbowCycle. As três etiquetas têm mensagens diferentes nelas; coloque etiquetas diferentes para mostrar cada modo.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison28.jpg)

2. Quanto ao QTouch, ao tocar um dos botões a tira de LED mostra uma cor única vermelha, verde ou azul.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison30.jpg)

3. Agora você pode desconectar o Edison-Programmer e usar a bateria Li-Po para fornecer energia.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison33.png)

**Exemplo-02: GlowingThermometer**

**O QUE TEMOS AQUI**

Neste exemplo usamos um módulo barômetro para monitorar o ambiente quanto à temperatura, pressão do ar e altitude; essas informações são exibidas no módulo OLED. Definimos uma temperatura segura entre 20 ℃ ~ 30 ℃; quando a temperatura estiver fora da faixa segura o vibrador irá vibrar e mostrará uma imagem de aviso no OLED quando a temperatura estiver acima de 30 ℃ ou abaixo de 20 ℃.
Agora abra o demo GlowingThermometer, compile e envie o sketch.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison31.jpg)

**Enviar Sketch**

Clique em File&gt;Examples&gt;GrowingThermometer

**DETALHE DO CÓDIGO**

```
#include <Wire.h>
#include <SeeedOLED.h>
#include "Barometer.h"
#include <Seeed_ws2812.h>

#define LEDN 5
#define SIG_PIN 12

uint8_t color[LEDN];
uint8_t t[5] = {25, 26, 27, 28, 29};//you can setup 5 temperature steps to track color
//Barometer
float temperature;
float pressure;
float altitude;
float atm;

void setup()
{
    Serial.begin(115200);
    Wire.begin();
    SeeedOled.init();              //initialze SEEED OLED display
    initOledTitle();               //init OLED Title
    myBarometer.init();           //Barometer init
    vibratorInit();                //init vibrator pins
    strip.begin();                // Init and begin strip drivers
    color_domain_init(20, 30, LEDN);   //this method is to get the relation of temperature raise and color chang.
}

//leave out some code...

void loop()
{
    temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); //Get the temperature, bmp085ReadUT MUST be called first
    pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());// Get the pressure
    altitude = myBarometer.calcAltitude(pressure);
    atm = pressure / 101325;

    colorFollow();  //led strip changing with temperature

    TempAlarm();    //monitor temperature and warning

    messagetoSerial();

    messagetoOled();

    delay(500);
}

//More detail watch the download soure code ...
```

**RESULTADO**

1. Exibição padrão do OLED

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison34.png)

2. Exibição de aviso de alta temperatura.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison32.jpg)

:::tip
    Você precisará aquecer o módulo Xadow-Barometer para ver o que acontece quando a temperatura sai da faixa segura.
:::
3. À medida que a temperatura sobe, os LEDs acendem um por um e a cor muda de azul para vermelho.

**Exemplo-03: Edison-Pedometer**

**O QUE TEMOS AQUI**

Este exemplo mostra como fazer um pedômetro que conta os passos de uma pessoa. Ele usa uma Xadow – Edison Board, Xadow – OLED 0.96”, Xadow – 3-Axis Accelerometer e Xadow – Buzzer. A tela OLED exibirá a contagem de passos e o buzzer irá apitar se você não se mover por um longo tempo. Além disso, quando a Intel Edison Board se conecta a uma rede Wi‑Fi, você pode verificar a contagem de passos usando um navegador web.

**Carregar Sketch**

1. Clique em File&gt;Examples&gt;Edison_Pedometer_with_OLED e selecione a demonstração

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison18.png)

2. Altere o char ssid[] = STEST com o nome da sua rede e o char pass[] = 876543210 com a senha da sua rede.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison36.png)

3. Clique no ícone de upload.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison37.png)

**Detalhes do Código**

```
#include <Wire.h>
#include <SeeedOLED.h>
#include <Wire.h>
#include <ADXL345.h>
#include "pedometer.h"
#include <SPI.h>
#include <WiFi.h>
#include <TimerOne.h>

#define MINUTES_TO_ALARM  (60) //If you don't walk enough in MINUTES_TO_ALARM minutes, the buzzer beeps 0.5s.
unsigned long curtime = 0;
unsigned long cursteps = 0;

int isWalking = 0;        // if walking,isWalking=1.
int ipprinted = 0;        // if printing local ip, ipprinted = 1.

Pedometer pedometer;
int stepIndex = 0;

char ssid[] = "STEST";           // your network SSID (name)
char pass[] = "876543210";       // your network password
int keyIndex = 0;                // your network key Index number (needed only for WEP)

int status = WL_IDLE_STATUS;
WiFiServer server(88);
int serverconnected = 0;

void setup() {
    Serial.begin(9600);           // set baudrate = 9600bps
    // put your setup code here, to run once:
    buzzer_init();
    pedometer.init();
    Wire.begin();
    SeeedOled.init();                  //initialze SEEED OLED display
    SeeedOled.clearDisplay();          //clear the screen and set start position to top left corner
    SeeedOled.setNormalDisplay();      //Set display to normal mode (i.e non-inverse mode)
    SeeedOled.setPageMode();           //Set addressing mode to Page Mode
    WiFi_Init();

    SeeedOled.drawBitmap(pmlogo,384);
    printxybmp(3,1,5,24,WalkMan[stepIndex]);
    printnum(4,6,"0");

    curtime = millis();              // get the current time
    cursteps = pedometer.stepCount;  // get the current steps

    Timer1.initialize(200000); // set a timer of length 100000 microseconds (or 0.1 sec - or 10Hz => the led will blink 5 times, 5 cycles of on-and-off, per second)
    Timer1.attachInterrupt( TimerISR ); // attach the service routine here
}

void loop() {
    // update pedometer steps
    StepsUpdate();

    // if wifi connected and not walking, print local ip.
    PrintLocalIP();

    // if wifi disconnected,reconnect.
    if(WiFi.RSSI()==0){
        status = WL_IDLE_STATUS;
    }

    //If you don't walk enough in MINUTES_TO_ALARM minutes, the buzzer beeps 0.5s.
    if((millis()-curtime > MINUTES_TO_ALARM * 60000) && (pedometer.stepCount - cursteps < MINUTES_TO_ALARM*60/2)){
        buzzer_on(500);
        curtime = millis();
        cursteps = pedometer.stepCount;
    }
}
```

**Resultado**

1. Agite o Xadow-3-Axis Accelerometer, você verá a contagem do pedômetro.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison38.png)

2. Quando o pedômetro se conecta à rede WiFi, o IP local será exibido na tela OLED:

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison39.png)

3. Em um dispositivo conectado à mesma rede, abra um navegador web e acesse o endereço IP exibido no OLED ou no Serial Monitor; você poderá ver a contagem de passos.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison40.png)

4. Você também pode conectar uma bateria LiPo à Xadow-Edison (como a seguir).

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison09.png)

5. Agora há uma bela caixa de relógio disponível. Você pode baixar os [arquivos do modelo 3D](https://file.seeedstudi.com/wiki/Xadow_Wearable_Kit_For_Edison/res/Edison_Pedometer_3D_models.zip) e imprimi-los usando uma impressora 3D.

Veja como fica com a caixa de relógio:

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison42.jpg)

**DICAS**

1. Se o WiFi estiver conectado, o IP local será exibido na tela OLED.

2. Ao acessar o servidor web, um número de porta (por exemplo, 88) deve ser adicionado, assim: 192.168.168.157:88

## Recursos

- [Loja Seeed](https://www.seeedstudio.com/depot/)

- [código-fonte no github](https://github.com/Seeed-Studio/Xadow_Edison_Demos)

- [Modelos 3D do Edison Pedometer](https://file.seeedstudi.com/wiki/Xadow_Wearable_Kit_For_Edison/res/Edison_Pedometer_3D_models.zipp)

- [Site oficial do Intel® Edison](https://www.intel.com/content/www/us/en/do-it-yourself/edison.html)

- [Guia de Introdução ao Edison](https://communities.intel.com/docs/DOC-23147)

- [Xadow wear](https://community.seeedstudio.com/wear/)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
