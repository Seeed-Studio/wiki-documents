---
description:  Kit Wearable Xadow Para Edison
title:  Kit Wearable Xadow Para Edison
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Wearable_Kit_For_Edison
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison02.png)

El Kit Wearable Xadow Para Edison es un kit perfecto para crear dispositivos wearables
con Intel Edison. Incluye una placa de expansión Edison llamada Xadow-Edison y
8 módulos extremadamente pequeños, estos módulos son sensores, actuadores, módulos de comunicación UI. Conectando con FFC flexible puedes crear rápidamente algunos dispositivos wearables interesantes y geniales. Ten en cuenta que, tienes que conseguir un Intel Edison y dos cables USB por tu cuenta.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Wearable-Kit-For-Intel%C2%AE-Edison-p-2428.html)

## Lista de partes

<table>
  <tbody>
  <tr>
      <th> Partes </th>
      <th> Cantidad </th>
      <th> Partes</th>
      <th> Cantidad</th>
      </tr>
    <tr>
      <td> Xadow - Edison </td>
      <td> 1</td>
      <td> Xadow - Acelerómetro de 3 Ejes</td>
      <td> 1</td>
      </tr>
    <tr>
      <td> Xadow - Edison Programmer</td>
      <td> 1</td>
      <td> Xadow - Barómetro BMP 180</td>
      <td> 1</td>
      </tr>
    <tr>
      <td> Xadow - Edison SD</td>
      <td> 1</td>
      <td> Batería</td>
      <td> 1</td>
      </tr>
    <tr>
      <td> Xadow - Sensor Q Touch </td>
      <td> 1</td>
      <td> Tira Flexible LED RGB Digital</td>
      <td> 1</td>
      </tr>
    <tr>
      <td> Xadow - NFC </td>
      <td> 1</td>
      <td> Cable de alimentación Blanco</td>
      <td> 5</td>
      </tr>
    <tr>
      <td> Xadow - Breakout</td>
      <td> 3 </td>
      <td> Cable de alimentación Rojo</td>
      <td> 5</td>
      </tr>
    <tr>
      <td> Xadow - Buzzer </td>
      <td> 1</td>
      <td> Cable de alimentación Amarillo</td>
      <td> 5</td>
      </tr>
    <tr>
      <td> Xadow - Motor de Vibración </td>
      <td> 1</td>
      <td> Paquete de cables FFC</td>
      <td> 1</td>
      </tr>
    <tr>
      <td> Xadow - OLED </td>
      <td> 1</td>
      <td> Tutorial Impreso a Color</td>
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

## Primeros Pasos

### Conexión

Presta atención a la esquina sin rellenar, todas las esquinas sin rellenar de los módulos apuntan hacia la misma dirección. Los lados dobles de los módulos Xadow pueden conectar dos módulos mediante FFC ya que xadow puede conectar en cascada sus módulos tanto como sea posible como un reloj o un collar, por lo que es adecuado para prototipado wearable.

- Inserta Intel Edison en Xadow-Edison a través de los conectores rectangulares.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison03.png)
![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison08.png)

- Conecta la placa Edison-Programmer con un FFC y conecta dos cables USB, el pequeño interruptor en la placa Edison-Programmer debe estar girado hacia el lado Device.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison04.png)

- Conecta los módulos Xadow con FFC.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison07.png)

- Después de cargar el programa en él, desconecta los cables USB y el programador, conecta la batería Li-Po para que el kit pueda ser móvil.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison09.png)

### Entorno de Desarrollo

1. Instalando Edison Arduino IDE y los controladores requeridos. Haz clic [aquí](https://communities.intel.com/docs/DOC-23147) para ver el tutorial en el sitio oficial.

2. Descargar Demos

1) Haz clic [aquí](https://github.com/Seeed-Studio/Xadow_Edison_Demos) para descargar el código fuente desde github.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison12.png)

2) Extrae los demos del archivo zip.
 Abre arduino IDE haz clic en "file" --&gt; "preferences", ve el elemento sketchbook location que debería ser como "C:\Users\xxx\Documents\Arduino", navega a esta carpeta y extrae el proyecto a la subcarpeta "libraries".

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison16.png)

3. Configuración del IDE

1) Abre Arduino IDE. Haz clic en "Tools" --&gt; "Board" y selecciona Intel® Edison.

2) Abre el "Device Manager" de la computadora para encontrar "Intel Edison Virtual Port(COMx)", Haz clic en "Tools" --&gt; "Serial Port" elige COMx.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison17.png)

4. Cargar Sketch

Haz clic en "File" --&gt; "Examples" elige los demos descargados anteriormente

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison18.png)
![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison19.png)

### Los Ejemplos

**Hacer una tira LED**

La tira LED tiene 3 pines, para conectar la tira y la placa breakout puedes hacer una soldadura simple. Conecta los pines VCC, los pines GND, y el pin de señal al pin MISO de la placa breakout.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison20.png)

**Preparar etiquetas NFC**

El demo NFC usa tres etiquetas NFC como llaves para abrir la tira led, pero primero tienes que obtener las etiquetas NFC que no tenían nada grabado. Así que tienes que hacer etiquetas útiles.

**Paso 1**.Usa el demo FormatTag para formatear las etiquetas la primera vez que las uses.
![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison21.png)

!!!Note
    Carga el sketch y abre el monitor serial cuando veas **Place an unformatted Mifare Classic tag on the reader.**, entonces pon una etiqueta en la placa de antena. Espera un momento, verás **Success, tag formatted as NDEF.** para formateo exitoso o **Format failed.** para tal vez la etiqueta ya ha sido formateada.

**Paso 2**.Abre el demo Cool_Light_WriteTag y cambia el registro de la tarjeta

**WRITE_TAG_MESSAGE**.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison22.png)

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison23.png)

**Paso 3**.Compila y carga el sketch.

**Paso 4**.Ejecuta un monitor serial, pon una etiqueta NFC cerca de la antena, después de que el monitor serial muestre **Success. Try reading this tag with your phone .** una etiqueta útil acaba de ser hecha. Repite los pasos Cambia **WRITE_TAG_MESSAGE** para escribir otras etiquetas.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison24.png)

**Ejemplo-01: Cool_Light**

**LO QUE TENEMOS AQUÍ**

En este ejemplo, usamos un módulo NFC y un módulo QTouch para controlar una tira LED RGB, el módulo QTouch tiene 3 botones, al tocar diferentes botones verás diferentes rendimientos de luz.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison27.jpg)

**Cargar Sketch**

**Haz clic en File&gt;Examples&gt;Cool_Light.**

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison22.png)

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison26.png)

**Detalle del Código**

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

1. Coloca una de las etiquetas NFC sobre la antena para mostrar una luz genial, en este ejemplo verás que los leds brillan en tres modos que son bucle de color único, flowcolor y rainbowCycle. Las tres etiquetas tienen diferentes mensajes en ellas, coloca una etiqueta diferente para mostrar cada modo.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison28.jpg)

2. En cuanto a QTouch, al tocar uno de los botones la tira de led muestra un solo color rojo, verde o azul.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison30.jpg)

3. Ahora puedes desconectar el Edison-Programmer y usar la batería Li-Po para suministrar energía.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison33.png)

**Ejemplo-02: Termómetro Brillante**

**LO QUE TENEMOS AQUÍ**

En este ejemplo usamos un módulo barómetro para monitorear la atmósfera sobre temperatura, presión del aire y altitud, estos mensajes se muestran en el módulo OLED. Configuramos una temperatura segura entre 20 ℃ ~ 30 ℃, cuando la temperatura está fuera del rango seguro el vibrador se activará y mostrará una imagen de advertencia en el OLED cuando la temperatura supere los 30 ℃ o sea menor a 20 ℃.
Ahora abre la demostración GlowingThermometer compila y sube el sketch.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison31.jpg)

**Subir Sketch**

Haz clic en File>Examples>GrowingThermometer

**DETALLE DEL CÓDIGO**

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

1.Pantalla OLED predeterminada

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison34.png)

2.Pantalla de advertencia de alta temperatura.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison32.jpg)

:::tip
    Necesitarás calentar el módulo Xadow-Barometer para ver qué sucede cuando la temperatura está fuera del rango seguro.
:::
3.A medida que la temperatura aumenta, los LEDs se encienden uno por uno y el color cambia de azul a rojo.

**Ejemplo-03: Edison-Podómetro**

**LO QUE TENEMOS AQUÍ**

Este ejemplo muestra cómo hacer un podómetro que cuenta los pasos de una persona. Utiliza una Placa Xadow – Edison, Xadow – OLED 0.96", Xadow – Acelerómetro de 3 Ejes y Xadow – Buzzer. La pantalla OLED mostrará el conteo de pasos y el buzzer emitirá un pitido si no te mueves durante mucho tiempo. Además, cuando la Placa Intel Edison se conecta a una red Wi-Fi, puedes verificar el conteo de pasos usando un navegador web.

**Cargar Sketch**

1.Haz clic en Archivo&gt;Ejemplos&gt;Edison_Pedometer_with_OLED y selecciona la demostración

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison18.png)

2.Cambia el char ssid[] = STEST con el nombre de tu red y el char pass[] = 876543210 con la contraseña de tu red.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison36.png)

3.Haz clic en el ícono de cargar.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison37.png)

**Detalle del Código**

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

1. Agita el Acelerómetro de 3 Ejes Xadow, verás el conteo del podómetro.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison38.png)

2. Cuando el podómetro se conecta a la red WiFi, la IP local se mostrará en la pantalla OLED:

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison39.png)

3. En un dispositivo conectado a la misma red, abre un navegador web y ve a la dirección IP mostrada en el OLED o Monitor Serie, puedes ver el conteo de pasos.

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison40.png)

4. También puedes aplicar una Batería LiPo al Xadow-Edison (como se muestra a continuación).

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison09.png)

5. Ahora está disponible una hermosa carcasa de reloj. Puedes descargar los [archivos de modelo 3D](https://file.seeedstudi.com/wiki/Xadow_Wearable_Kit_For_Edison/res/Edison_Pedometer_3D_models.zip) e imprimirlos usando una Impresora 3D.

Así es como se ve con la carcasa del reloj:

![](https://files.seeedstudio.com/wiki/Xadow_Wearable_Kit_For_Edison/img/Xadow_Wearable_Kit_For_Edison42.jpg)

**CONSEJOS**

1. Si el wifi está conectado, la ip local se mostrará en la pantalla OLED.

2. Al visitar el servidor web, se debe agregar un número de puerto (por ejemplo 88), así: 192.168.168.157:88

## Recursos

- [Seeed depot](https://www.seeedstudio.com/depot/)

- [código fuente en github](https://github.com/Seeed-Studio/Xadow_Edison_Demos)

- [Modelos 3D del Podómetro Edison](https://file.seeedstudi.com/wiki/Xadow_Wearable_Kit_For_Edison/res/Edison_Pedometer_3D_models.zipp)

- [Sitio oficial de Intel® Edison](https://www.intel.com/content/www/us/en/do-it-yourself/edison.html)

- [Guía de Inicio de Edison](https://communities.intel.com/docs/DOC-23147)

- [Xadow wear](https://community.seeedstudio.com/wear/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
